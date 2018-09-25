"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _expo = require("expo");

var Amplitude = _interopRequireWildcard(require("expo-analytics-amplitude"));

var Application = _interopRequireWildcard(require("expo-application"));

var Cellular = _interopRequireWildcard(require("expo-cellular"));

var Contacts = _interopRequireWildcard(require("expo-contacts"));

var _expoConstants = _interopRequireDefault(require("expo-constants"));

var Device = _interopRequireWildcard(require("expo-device"));

var FileSystem = _interopRequireWildcard(require("expo-file-system"));

var ImagePicker = _interopRequireWildcard(require("expo-image-picker"));

var ImageManipulator = _interopRequireWildcard(require("expo-image-manipulator"));

var Localization = _interopRequireWildcard(require("expo-localization"));

var Network = _interopRequireWildcard(require("expo-network"));

var Permissions = _interopRequireWildcard(require("expo-permissions"));

var StoreReview = _interopRequireWildcard(require("expo-store-review"));

var SecureStore = _interopRequireWildcard(require("expo-secure-store"));

var _sha = _interopRequireDefault(require("crypto-js/sha1"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var permissions = {
  CAMERA: Permissions.CAMERA,
  CAMERA_ROLL: Permissions.CAMERA_ROLL,
  CONTACTS: Permissions.CONTACTS,
  NOTIFICATIONS: Permissions.NOTIFICATIONS,
  get: function get(types) {
    return Permissions.getAsync(types);
  },
  ask: function ask(types) {
    return Permissions.askAsync(types);
  }
};
var cache = "".concat(FileSystem.cacheDirectory, "cache");

var uri = function uri(key) {
  return "".concat(cache, "/").concat((0, _sha["default"])(key));
};

var memory; // const images = {
//     save: (key, value) => {
//         return FileSystem.writeAsStringAsync(
//             uri(key),
//             value
//         )
//     },
//     get: (key) => {
//         return FileSystem.readAsStringAsync(
//             uri(key)
//         );
//     }
// };

var _default = {
  amplitude: {
    init: function init(api, debug) {
      if (debug) {
        return;
      }

      Amplitude.initialize(api);
    },
    identify: function identify(user, debug) {
      if (debug) {
        return;
      }

      Amplitude.setUserId(user);
    },
    log: function log(name, properties, debug) {
      if (debug) {
        return;
      }

      Amplitude.logEventWithProperties(name, properties);
    }
  },
  application: {
    raw: function raw() {
      return new Promise(function (resolve) {
        Promise.all([new Promise(function (resolve) {
          resolve(Application.applicationName);
        }), new Promise(function (resolve) {
          resolve(Application.applicationId);
        }), new Promise(function (resolve) {
          resolve(Application.nativeApplicationVersion);
        }), new Promise(function (resolve) {
          resolve(Application.nativeBuildVersion);
        }), new Promise(function (resolve) {
          resolve(Application.androidId);
        }), new Promise(function (resolve) {
          if (_reactNative.Platform.OS !== 'ios') {
            resolve(null);
            return;
          }

          Application.getIosIdForVendorAsync().then(resolve)["catch"](function () {
            resolve(null);
          });
        }), new Promise(function (resolve) {
          if (_reactNative.Platform.OS !== 'android') {
            resolve(null);
            return;
          }

          Application.getInstallReferrerAsync().then(resolve)["catch"](function () {
            resolve(null);
          });
        })]).then(function (result) {
          resolve({
            applicationName: result[0],
            applicationId: result[1],
            nativeApplicationVersion: result[2],
            nativeBuildVersion: result[3],
            androidId: result[4],
            iosIdForVendor: result[5],
            installReferrer: result[6]
          });
        });
      });
    }
  },
  back: {
    add: function add(func) {
      _reactNative.BackHandler.addEventListener('hardwareBackPress', func);
    },
    remove: function remove(func) {
      _reactNative.BackHandler.removeEventListener('hardwareBackPress', func);
    }
  },
  cellular: {
    raw: function raw() {
      return new Promise(function (resolve) {
        Promise.all([new Promise(function (resolve) {
          resolve(Cellular.allowsVoip);
        }), new Promise(function (resolve) {
          resolve(Cellular.carrier);
        }), new Promise(function (resolve) {
          resolve(Cellular.isoCountryCode);
        }), new Promise(function (resolve) {
          resolve(Cellular.mobileCountryCode);
        }), new Promise(function (resolve) {
          resolve(Cellular.mobileNetworkCode);
        }), new Promise(function (resolve) {
          Cellular.getCellularGenerationAsync().then(resolve)["catch"](function () {
            resolve(null);
          });
        })]).then(function (result) {
          resolve({
            allowsVoip: result[0],
            carrier: result[1],
            isoCountryCode: result[2],
            mobileCountryCode: result[3],
            mobileNetworkCode: result[4],
            cellularGeneration: result[5]
          });
        });
      });
    }
  },
  device: {
    expo: _expoConstants["default"].appOwnership === 'expo',
    installation: _expoConstants["default"].installationId,
    experience: _expoConstants["default"].manifest.id,
    "package": function _package() {
      return _reactNative.Platform.OS === 'android' ? _expoConstants["default"].manifest.android["package"] : _expoConstants["default"].manifest.ios.bundleIdentifier;
    },
    raw: function raw() {
      return new Promise(function (resolve) {
        Promise.all([new Promise(function (resolve) {
          resolve(Device.isDevice);
        }), new Promise(function (resolve) {
          resolve(Device.brand);
        }), new Promise(function (resolve) {
          resolve(Device.manufacturer);
        }), new Promise(function (resolve) {
          resolve(Device.modelName);
        }), new Promise(function (resolve) {
          resolve(Device.modelId);
        }), new Promise(function (resolve) {
          resolve(Device.designName);
        }), new Promise(function (resolve) {
          resolve(Device.productName);
        }), new Promise(function (resolve) {
          resolve(Device.deviceYearClass);
        }), new Promise(function (resolve) {
          resolve(Device.totalMemory);
        }), new Promise(function (resolve) {
          resolve(Device.supportedCpuArchitectures);
        }), new Promise(function (resolve) {
          resolve(Device.osName);
        }), new Promise(function (resolve) {
          resolve(Device.osVersion);
        }), new Promise(function (resolve) {
          resolve(Device.osBuildId);
        }), new Promise(function (resolve) {
          resolve(Device.osInternalBuildId);
        }), new Promise(function (resolve) {
          resolve(Device.osBuildFingerprint);
        }), new Promise(function (resolve) {
          resolve(Device.platformApiLevel);
        }), new Promise(function (resolve) {
          resolve(Device.deviceName);
        }), new Promise(function (resolve) {
          Device.getDeviceTypeAsync().then(resolve)["catch"](function () {
            resolve(null);
          });
        }), new Promise(function (resolve) {
          Device.getUptimeAsync().then(resolve)["catch"](function () {
            resolve(null);
          });
        }), new Promise(function (resolve) {
          if (_reactNative.Platform.OS !== 'android') {
            resolve(null);
            return;
          }

          Device.getMaxMemoryAsync().then(resolve)["catch"](function () {
            resolve(null);
          });
        }), new Promise(function (resolve) {
          Device.isRootedExperimentalAsync().then(resolve)["catch"](function () {
            resolve(null);
          });
        }), new Promise(function (resolve) {
          if (_reactNative.Platform.OS !== 'android') {
            resolve(null);
            return;
          }

          Device.isSideLoadingEnabledAsync().then(resolve)["catch"](function () {
            resolve(null);
          });
        }), new Promise(function (resolve) {
          resolve(_expoConstants["default"].installationId);
        })]).then(function (result) {
          resolve({
            isDevice: result[0],
            brand: result[1],
            manufacturer: result[2],
            modelName: result[3],
            modelId: result[4],
            designName: result[5],
            productName: result[6],
            deviceYearClass: result[7],
            totalMemory: result[8],
            supportedCpuArchitectures: result[9],
            osName: result[10],
            osVersion: result[11],
            osBuildId: result[12],
            osInternalBuildId: result[13],
            osBuildFingerprint: result[14],
            platformApiLevel: result[15],
            deviceName: result[16],
            deviceType: result[17],
            uptime: result[18],
            maxMemory: result[19],
            isRooted: result[20],
            isSideLoadingEnabled: result[21],
            installationId: result[22]
          });
        });
      });
    }
  },
  dimensions: {
    /* https://ricostacruz.com/til/css-media-query-breakpoints */
    is0Up: function is0Up() {
      return true;
    },
    is4Up: function is4Up() {
      return _reactNative.Dimensions.get('window').width >= 480;
    },
    is7Up: function is7Up() {
      return _reactNative.Dimensions.get('window').width >= 768;
    },
    is9Up: function is9Up() {
      return _reactNative.Dimensions.get('window').width >= 992;
    },
    is12Up: function is12Up() {
      return _reactNative.Dimensions.get('window').width >= 1200;
    },
    is4Down: function is4Down() {
      return _reactNative.Dimensions.get('window').width < 480;
    },
    is7Down: function is7Down() {
      return _reactNative.Dimensions.get('window').width < 768;
    },
    is9Down: function is9Down() {
      return _reactNative.Dimensions.get('window').width < 992;
    },
    is12Down: function is12Down() {
      return true;
    },
    get: function get(dim) {
      return _reactNative.Dimensions.get(dim);
    },
    withWidth: function withWidth() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return function (Component) {
        return function (props) {
          return _react["default"].createElement(Component, _extends({
            width: _reactNative.Dimensions.get('window').width
          }, props));
        };
      };
    }
  },
  cache: {
    init: function init() {
      memory = {
        table: [],
        data: []
      };
      return FileSystem.makeDirectoryAsync(cache);
    },
    set: function set(key, value) {
      var found = memory.table.indexOf(key) !== -1;

      if (found) {
        memory.data = memory.data.map(function (item) {
          if (item.key === key) {
            // New item with new value
            return {
              key: item.key,
              value: value
            };
          } // Same item


          return item;
        });
      } else {
        memory.table = memory.table.concat(key);
        memory.data = memory.data.concat({
          key: key,
          value: value
        });
      }

      value = JSON.stringify(value);
      return FileSystem.writeAsStringAsync(uri(key), value);
    },
    get: function get(key) {
      var found = memory.table.indexOf(key) !== -1;

      if (found) {
        return new Promise(function (resolve) {
          var _memory$data$find = memory.data.find(function (item) {
            return item.key === key;
          }),
              value = _memory$data$find.value;

          resolve(value);
        });
      }

      return new Promise(function (resolve) {
        FileSystem.readAsStringAsync(uri(key)).then(function (value) {
          value = JSON.parse(value);
          memory.table.push(key);
          memory.data.push({
            key: key,
            value: value
          });
          resolve(value);
        })["catch"](function () {
          resolve(undefined);
        });
      });
    },
    "delete": function _delete(key) {
      memory = {
        table: memory.table.filter(function (item) {
          return item !== key;
        }),
        data: memory.data.filter(function (item) {
          return item.key !== key;
        })
      };
      return new Promise(function (resolve, reject) {
        FileSystem.deleteAsync(uri(key)).then(resolve)["catch"](function (e) {
          console.log('Error deleting cache with key: ', key);
          reject(e);
        });
      });
    },
    purge: function purge() {
      memory = null;
      return FileSystem.deleteAsync(cache);
    },
    count: function count() {
      return memory.table.length; // return new Promise((resolve, reject) => {
      //     return FileSystem.readDirectoryAsync(cache)
      //         .then((files) => {
      //             resolve(files.length);
      //         })
      //         .catch(reject)
      // });
    }
  },
  clipboard: {
    set: function set(value) {
      _reactNative.Clipboard.setString(value);
    }
  },
  contacts: _objectSpread({
    all: function all() {
      var criteria = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (!criteria) {
        criteria = {
          fields: [// https://github.com/expo/expo/blob/master/apps/native-component-list/src/screens/Contacts/ContactUtils.ts#L29
          Contacts.Fields.Emails, Contacts.Fields.PhoneNumbers]
        };
      }

      return new Promise(function (resolve, reject) {
        Contacts.getContactsAsync(criteria).then(function (_ref) {
          var data = _ref.data;
          resolve(data);
        })["catch"](reject);
      });
    }
  }, Contacts.Fields),
  images: {
    pick: function pick() {
      var pick = function pick() {
        return new Promise(function (resolve, reject) {
          ImagePicker.launchImageLibraryAsync({
            mediaTypes: 'Images',
            allowsEditing: true,
            // aspect: [1, 1],
            base64: true
          }).then(function (_ref2) {
            var uri = _ref2.uri,
                base64 = _ref2.base64,
                width = _ref2.width,
                height = _ref2.height,
                cancelled = _ref2.cancelled;

            if (cancelled === true) {
              resolve({
                uri: null,
                base64: null,
                width: null,
                height: null
              });
              return;
            }

            resolve({
              uri: uri,
              base64: "data:image/jpeg;base64,".concat(base64),
              width: width,
              height: height
            });
          })["catch"](reject);
        });
      };

      return new Promise(function (resolve, reject) {
        permissions.get(permissions.CAMERA_ROLL).then(function (_ref3) {
          var status = _ref3.status;

          // No permission?
          if (status !== 'granted') {
            // Need to ask for permissions
            permissions.ask(permissions.CAMERA_ROLL).then(function (_ref4) {
              var status = _ref4.status;

              // User denied permissions
              if (status !== 'granted') {
                reject();
                return;
              }

              pick().then(function (image) {
                resolve(image);
              })["catch"](reject);
            });
            return;
          }

          pick().then(function (image) {
            resolve(image);
          })["catch"](reject);
        })["catch"](reject);
      });
    },
    take: function take() {
      var take = function take() {
        return new Promise(function (resolve, reject) {
          ImagePicker.launchCameraAsync({
            allowsEditing: true,
            // aspect: [1, 1],
            base64: true
          }).then(function (_ref5) {
            var uri = _ref5.uri,
                base64 = _ref5.base64,
                width = _ref5.width,
                height = _ref5.height,
                cancelled = _ref5.cancelled;

            if (cancelled === true) {
              resolve({
                uri: null,
                base64: uri,
                width: null,
                height: null
              });
              return;
            }

            resolve({
              uri: uri,
              base64: "data:image/jpeg;base64,".concat(base64),
              width: width,
              height: height
            });
          })["catch"](reject);
        });
      };

      return new Promise(function (resolve, reject) {
        permissions.get(permissions.CAMERA, permissions.CAMERA_ROLL).then(function (_ref6) {
          var status = _ref6.status;

          // No permission?
          if (status !== 'granted') {
            // Need to ask for permissions
            permissions.ask(permissions.CAMERA, permissions.CAMERA_ROLL).then(function (_ref7) {
              var status = _ref7.status;

              // User denied permissions
              if (status !== 'granted') {
                reject();
                return;
              }

              take().then(resolve)["catch"](reject);
            });
            return;
          }

          take().then(resolve)["catch"](reject);
        })["catch"](reject);
      });
    },
    resize: function resize(uri, width, height, compress) {
      return new Promise(function (resolve, reject) {
        ImageManipulator.manipulateAsync(uri, [{
          resize: {
            width: width,
            height: height
          }
        }], {
          compress: compress,
          base64: true
        }).then(function (_ref8) {
          var uri = _ref8.uri,
              base64 = _ref8.base64;
          resolve({
            uri: uri,
            base64: "data:image/jpeg;base64,".concat(base64)
          });
        })["catch"](reject);
      });
    }
  },
  linking: {
    mail: function mail(email) {
      var subject = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var url = "mailto:".concat(email);

      if (subject) {
        url = "".concat(url, "?subject=").concat(subject);
      }

      return _reactNative.Linking.openURL(url);
    },
    url: function url(_url) {
      return _reactNative.Linking.openURL(_url);
    }
  },
  localization: {
    timezone: Localization.timezone
  },
  network: {
    raw: function raw() {
      return new Promise(function (resolve) {
        Promise.all([new Promise(function (resolve) {
          Network.getIpAddressAsync().then(resolve)["catch"](function () {
            resolve(null);
          });
        })]).then(function (result) {
          resolve({
            ipAddress: result[0]
          });
        });
      });
    }
  },
  notifications: {
    getToken: function getToken() {
      return _expo.Notifications.getExpoPushTokenAsync();
    },
    getRawToken: function getRawToken(config) {
      return new Promise(function (resolve, reject) {
        _expo.Notifications.getDevicePushTokenAsync(config).then(function (_ref9) {
          var data = _ref9.data,
              type = _ref9.type;
          resolve(data);
        })["catch"](reject);
      });
    },
    createGroup: function createGroup(id, options) {
      if (_reactNative.Platform.OS !== 'android') {
        return new Promise(function (resolve, reject) {
          resolve();
        });
      }

      return _expo.Notifications.createChannelAndroidAsync(id, options);
    },
    listen: function listen(listener) {
      return _expo.Notifications.addListener(listener);
    },
    clear: function clear() {
      return _expo.Notifications.setBadgeNumberAsync(0);
    }
  },
  permissions: permissions,
  props: function props(element, _props) {
    element.setNativeProps(_props);
  },
  review: {
    available: function available() {
      return StoreReview.isAvailableAsync();
    },
    request: function request() {
      StoreReview.requestReview();
    }
  },
  secure: {
    set: function set(key, value) {
      value = JSON.stringify(value);
      return SecureStore.setItemAsync(key, value);
    },
    get: function get(key) {
      return new Promise(function (resolve, reject) {
        SecureStore.getItemAsync(key).then(function (value) {
          if (value === null) {
            resolve(undefined);
            return;
          }

          value = JSON.parse(value);
          resolve(value);
        })["catch"](function (e) {
          SecureStore.deleteItemAsync(key);
          reject(e);
        });
      });
    },
    "delete": function _delete(key) {
      return SecureStore.deleteItemAsync(key);
    }
  },
  select: function select(options) {
    if (options.mobile) {
      // let {mobile, ...options} = options;
      options = _objectSpread({}, options, {
        android: options.mobile,
        ios: options.mobile
      });
    }

    return _reactNative.Platform.select(options);
  },
  share: function share(title, message, url) {
    return new Promise(function (resolve, reject) {
      _reactNative.Share.share({
        title: title,
        message: message,
        url: url
      }, {
        subject: title,
        dialogTitle: title
      }).then(function () {
        resolve();
      })["catch"](reject);
    });
  },
  styleSheet: {
    line: _reactNative.StyleSheet.hairlineWidth
  },
  store: {
    set: function set(key, value) {
      value = JSON.stringify(value);
      return _reactNative.AsyncStorage.setItem(key, value);
    },
    get: function get(key) {
      return new Promise(function (resolve) {
        _reactNative.AsyncStorage.getItem(key).then(function (value) {
          if (value === null) {
            resolve(undefined);
            return;
          }

          value = JSON.parse(value);
          resolve(value);
        });
      });
    },
    "delete": function _delete(key) {
      return _reactNative.AsyncStorage.removeItem(key);
    },
    clear: function clear() {
      return _reactNative.AsyncStorage.clear();
    }
  },
  vibration: {
    start: function start(value) {
      _reactNative.Vibration.vibrate(value);
    }
  }
};
exports["default"] = _default;