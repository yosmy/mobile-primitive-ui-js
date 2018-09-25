import React from 'react';
import {AsyncStorage, BackHandler, Clipboard, Dimensions, Linking, Platform, Share, StyleSheet, Vibration} from "react-native";
import {Notifications} from 'expo';
import * as Amplitude from 'expo-analytics-amplitude';
import * as Application from 'expo-application';
import * as Cellular from 'expo-cellular';
import * as Contacts from 'expo-contacts';
import Constants from 'expo-constants';
import * as Device from 'expo-device';
import * as FileSystem from 'expo-file-system';
import * as ImagePicker from "expo-image-picker";
import * as ImageManipulator from 'expo-image-manipulator';
import * as Localization from 'expo-localization';
import * as Network from 'expo-network';
import * as Permissions from 'expo-permissions';
import * as StoreReview from 'expo-store-review';
import * as SecureStore from 'expo-secure-store';
import sha1 from 'crypto-js/sha1';

const permissions = {
    CAMERA: Permissions.CAMERA,
    CAMERA_ROLL: Permissions.CAMERA_ROLL,
    CONTACTS: Permissions.CONTACTS,
    NOTIFICATIONS: Permissions.NOTIFICATIONS,
    get: (types) => {
        return Permissions.getAsync(types);
    },
    ask: (types) => {
        return Permissions.askAsync(types)
    }
};

const cache = `${FileSystem.cacheDirectory}cache`;

const uri = (key) => {
    return `${cache}/${sha1(key)}`;
};

let memory;

// const images = {
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

export default {
    amplitude: {
        init: (api, debug) => {
            if (debug) {
                return;
            }

            Amplitude.initialize(api)
        },
        identify: (user, debug) => {
            if (debug) {
                return;
            }

            Amplitude.setUserId(user)
        },
        log: (name, properties, debug) => {
            if (debug) {
                return;
            }

            Amplitude.logEventWithProperties(name, properties)
        }
    },
    application: {
        raw: () => {
            return new Promise((resolve) => {
                Promise.all([
                    new Promise((resolve) => {
                        resolve(Application.applicationName);
                    }),
                    new Promise((resolve) => {
                        resolve(Application.applicationId);
                    }),
                    new Promise((resolve) => {
                        resolve(Application.nativeApplicationVersion);
                    }),
                    new Promise((resolve) => {
                        resolve(Application.nativeBuildVersion);
                    }),
                    new Promise((resolve) => {
                        resolve(Application.androidId);
                    }),
                    new Promise((resolve) => {
                        if (Platform.OS !== 'ios') {
                            resolve(null);

                            return;
                        }

                        Application.getIosIdForVendorAsync()
                            .then(resolve)
                            .catch(() => {
                                resolve(null);
                            })
                    }),
                    new Promise((resolve) => {
                        if (Platform.OS !== 'android') {
                            resolve(null);

                            return;
                        }

                        Application.getInstallReferrerAsync()
                            .then(resolve)
                            .catch(() => {
                                resolve(null);
                            })
                    })
                ])
                    .then((result) => {
                        resolve({
                            applicationName: result[0],
                            applicationId: result[1],
                            nativeApplicationVersion: result[2],
                            nativeBuildVersion: result[3],
                            androidId: result[4],
                            iosIdForVendor: result[5],
                            installReferrer: result[6],
                        });
                    });
            });
        }
    },
    back: {
        add: (func) => {
            BackHandler.addEventListener('hardwareBackPress', func);
        },
        remove: (func) => {
            BackHandler.removeEventListener('hardwareBackPress', func);
        }
    },
    cellular: {
        raw: () => {
            return new Promise((resolve) => {
                Promise.all([
                    new Promise((resolve) => {
                        resolve(Cellular.allowsVoip);
                    }),
                    new Promise((resolve) => {
                        resolve(Cellular.carrier);
                    }),
                    new Promise((resolve) => {
                        resolve(Cellular.isoCountryCode);
                    }),
                    new Promise((resolve) => {
                        resolve(Cellular.mobileCountryCode);
                    }),
                    new Promise((resolve) => {
                        resolve(Cellular.mobileNetworkCode);
                    }),
                    new Promise((resolve) => {
                        Cellular.getCellularGenerationAsync()
                            .then(resolve)
                            .catch(() => {
                                resolve(null);
                            })
                    })
                ])
                    .then((result) => {
                        resolve({
                            allowsVoip: result[0],
                            carrier: result[1],
                            isoCountryCode: result[2],
                            mobileCountryCode: result[3],
                            mobileNetworkCode: result[4],
                            cellularGeneration: result[5],
                        });
                    });
            });
        }
    },
    device: {
        expo: Constants.appOwnership === 'expo',
        installation: Constants.installationId,
        experience: Constants.manifest.id,
        package: () => {
            return Platform.OS === 'android'
                ? Constants.manifest.android.package
                : Constants.manifest.ios.bundleIdentifier;
        },
        raw: () => {
            return new Promise((resolve) => {
                Promise.all([
                    new Promise((resolve) => {
                        resolve(Device.isDevice);
                    }),
                    new Promise((resolve) => {
                        resolve(Device.brand);
                    }),
                    new Promise((resolve) => {
                        resolve(Device.manufacturer);
                    }),
                    new Promise((resolve) => {
                        resolve(Device.modelName);
                    }),
                    new Promise((resolve) => {
                        resolve(Device.modelId);
                    }),
                    new Promise((resolve) => {
                        resolve(Device.designName);
                    }),
                    new Promise((resolve) => {
                        resolve(Device.productName);
                    }),
                    new Promise((resolve) => {
                        resolve(Device.deviceYearClass);
                    }),
                    new Promise((resolve) => {
                        resolve(Device.totalMemory);
                    }),
                    new Promise((resolve) => {
                        resolve(Device.supportedCpuArchitectures);
                    }),
                    new Promise((resolve) => {
                        resolve(Device.osName);
                    }),
                    new Promise((resolve) => {
                        resolve(Device.osVersion);
                    }),
                    new Promise((resolve) => {
                        resolve(Device.osBuildId);
                    }),
                    new Promise((resolve) => {
                        resolve(Device.osInternalBuildId);
                    }),
                    new Promise((resolve) => {
                        resolve(Device.osBuildFingerprint);
                    }),
                    new Promise((resolve) => {
                        resolve(Device.platformApiLevel);
                    }),
                    new Promise((resolve) => {
                        resolve(Device.deviceName);
                    }),
                    new Promise((resolve) => {
                        Device.getDeviceTypeAsync()
                            .then(resolve)
                            .catch(() => {
                                resolve(null);
                            })
                    }),
                    new Promise((resolve) => {
                        Device.getUptimeAsync()
                            .then(resolve)
                            .catch(() => {
                                resolve(null);
                            })
                    }),
                    new Promise((resolve) => {
                        if (Platform.OS !== 'android') {
                            resolve(null);

                            return;
                        }

                        Device.getMaxMemoryAsync()
                            .then(resolve)
                            .catch(() => {
                                resolve(null);
                            })
                    }),
                    new Promise((resolve) => {
                        Device.isRootedExperimentalAsync()
                            .then(resolve)
                            .catch(() => {
                                resolve(null);
                            })
                    }),
                    new Promise((resolve) => {
                        if (Platform.OS !== 'android') {
                            resolve(null);

                            return;
                        }

                        Device.isSideLoadingEnabledAsync()
                            .then(resolve)
                            .catch(() => {
                                resolve(null);
                            })
                    }),
                    new Promise((resolve) => {
                        resolve(Constants.installationId);
                    }),
                ])
                    .then((result) => {
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
                            installationId: result[22],
                        });
                    });
            });
        }
    },
    dimensions: {
        /* https://ricostacruz.com/til/css-media-query-breakpoints */

        is0Up: () => {
            return true;
        },
        is4Up: () => {
            return Dimensions.get('window').width >= 480;
        },
        is7Up: () => {
            return Dimensions.get('window').width >= 768;
        },
        is9Up: () => {
            return Dimensions.get('window').width >= 992;
        },
        is12Up: () => {
            return Dimensions.get('window').width >= 1200;
        },
        is4Down: () => {
            return Dimensions.get('window').width < 480;
        },
        is7Down: () => {
            return Dimensions.get('window').width < 768;
        },
        is9Down: () => {
            return Dimensions.get('window').width < 992;
        },
        is12Down: () => {
            return true;
        },
        get: (dim) => {
            return Dimensions.get(dim);
        },
        withWidth: (options = {}) => Component => {
            return (props) => {
                return <Component
                    width={Dimensions.get('window').width}
                    {...props}
                />;
            };
        }
    },
    cache: {
        init: () => {
            memory = {
                table: [],
                data: []
            };

            return FileSystem.makeDirectoryAsync(cache)
        },
        set: (key, value) => {
            let found = memory.table.indexOf(key) !== -1;

            if (found) {
                memory.data = memory.data.map((item) => {
                    if (item.key === key) {
                        // New item with new value
                        return {
                            key: item.key,
                            value: value
                        };
                    }

                    // Same item
                    return item
                });
            } else {
                memory.table = memory.table.concat(key);

                memory.data = memory.data.concat({
                    key: key,
                    value: value
                });
            }

            value = JSON.stringify(value);

            return FileSystem.writeAsStringAsync(
                uri(key),
                value
            )
        },
        get: (key) => {
            let found = memory.table.indexOf(key) !== -1;

            if (found) {
                return new Promise((resolve) => {
                    const {value} = memory.data.find((item) => {
                        return item.key === key;
                    });

                    resolve(value);
                });
            }

            return new Promise((resolve) => {
                FileSystem.readAsStringAsync(
                    uri(key)
                )
                    .then((value) => {
                        value = JSON.parse(value);

                        memory.table.push(key);

                        memory.data.push({
                            key: key,
                            value: value
                        });

                        resolve(value);
                    })
                    .catch(() => {
                        resolve(undefined);
                    })
            })
        },
        delete: (key) => {
            memory = {
                table: memory.table.filter((item) => {
                    return item !== key;
                }),
                data: memory.data.filter((item) => {
                    return item.key !== key;
                })
            };

            return new Promise((resolve, reject) => {
                FileSystem.deleteAsync(
                    uri(key)
                )
                    .then(resolve)
                    .catch((e) => {
                        console.log('Error deleting cache with key: ', key);

                        reject(e);
                    })
            });
        },
        purge: () => {
            memory = null;

            return FileSystem.deleteAsync(cache)
        },
        count: () => {
            return memory.table.length;

            // return new Promise((resolve, reject) => {
            //     return FileSystem.readDirectoryAsync(cache)
            //         .then((files) => {
            //             resolve(files.length);
            //         })
            //         .catch(reject)
            // });
        },
    },
    clipboard: {
        set: (value) => {
            Clipboard.setString(value)
        }
    },
    contacts: {
        all: (criteria = null) => {
            if (!criteria) {
                criteria = {
                    fields: [
                        // https://github.com/expo/expo/blob/master/apps/native-component-list/src/screens/Contacts/ContactUtils.ts#L29
                        Contacts.Fields.Emails,
                        Contacts.Fields.PhoneNumbers
                    ],
                };
            }

            return new Promise((resolve, reject) => {
                Contacts.getContactsAsync(criteria)
                    .then(({data}) => {
                        resolve(data);
                    })
                    .catch(reject)
            });
        },
        // https://github.com/expo/expo/blob/master/apps/native-component-list/src/screens/Contacts/ContactUtils.ts#L29
        ...Contacts.Fields
    },
    images: {
        pick: () => {
            const pick = () => {
                return new Promise((resolve, reject) => {
                    ImagePicker.launchImageLibraryAsync({
                        mediaTypes: 'Images',
                        allowsEditing: true,
                        // aspect: [1, 1],
                        base64: true
                    })
                        .then(({uri, base64, width, height, cancelled}) => {
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
                                base64: `data:image/jpeg;base64,${base64}`,
                                width: width,
                                height: height,
                            });
                        })
                        .catch(reject)
                });
            };

            return new Promise((resolve, reject) => {
                permissions.get(permissions.CAMERA_ROLL)
                    .then(({status}) => {
                        // No permission?
                        if (status !== 'granted') {
                            // Need to ask for permissions
                            permissions.ask(permissions.CAMERA_ROLL)
                                .then(({status}) => {
                                    // User denied permissions
                                    if (status !== 'granted') {
                                        reject();

                                        return;
                                    }

                                    pick()
                                        .then((image) => {
                                            resolve(image);
                                        })
                                        .catch(reject)
                                });

                            return;
                        }

                        pick()
                            .then((image) => {
                                resolve(image);
                            })
                            .catch(reject)
                    })
                    .catch(reject)
            })
        },
        take: () => {
            const take = () => {
                return new Promise((resolve, reject) => {
                    ImagePicker.launchCameraAsync({
                        allowsEditing: true,
                        // aspect: [1, 1],
                        base64: true
                    })
                        .then(({uri, base64, width, height, cancelled}) => {
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
                                base64: `data:image/jpeg;base64,${base64}`,
                                width: width,
                                height: height,
                            });
                        })
                        .catch(reject)
                });
            };

            return new Promise((resolve, reject) => {
                permissions.get(permissions.CAMERA, permissions.CAMERA_ROLL)
                    .then(({status}) => {
                        // No permission?
                        if (status !== 'granted') {
                            // Need to ask for permissions
                            permissions.ask(permissions.CAMERA, permissions.CAMERA_ROLL)
                                .then(({status}) => {
                                    // User denied permissions
                                    if (status !== 'granted') {
                                        reject();

                                        return;
                                    }

                                    take()
                                        .then(resolve)
                                        .catch(reject)
                                });

                            return;
                        }

                        take()
                            .then(resolve)
                            .catch(reject)
                    })
                    .catch(reject)
            })
        },
        resize: (uri, width, height, compress) => {
            return new Promise((resolve, reject) => {
                ImageManipulator.manipulateAsync(
                    uri,
                    [
                        {
                            resize: {
                                width: width,
                                height: height
                            }
                        }
                    ],
                    {
                        compress: compress,
                        base64: true
                    }
                )
                    .then(({uri, base64}) => {
                        resolve({
                            uri: uri,
                            base64: `data:image/jpeg;base64,${base64}`
                        });
                    })
                    .catch(reject)
            });
        },
    },
    linking: {
        mail: (email, subject = null) => {
            let url = `mailto:${email}`;

            if (subject) {
                url = `${url}?subject=${subject}`;
            }

            return Linking.openURL(url);
        },
        url: (url) => {
            return Linking.openURL(url);
        }
    },
    localization: {
        timezone: Localization.timezone
    },
    network: {
        raw: () => {
            return new Promise((resolve) => {
                Promise.all([
                    new Promise((resolve) => {
                        Network.getIpAddressAsync()
                            .then(resolve)
                            .catch(() => {
                                resolve(null);
                            })
                    }),
                ])
                    .then((result) => {
                        resolve({
                            ipAddress: result[0],
                        });
                    })
            });
        }
    },
    notifications: {
        getToken: () => {
            return Notifications.getExpoPushTokenAsync();
        },
        getRawToken: (config) => {
            return new Promise((resolve, reject) => {
                Notifications.getDevicePushTokenAsync(config)
                    .then(({data, type}) => {
                        resolve(data);
                    })
                    .catch(reject);
            });
        },
        createGroup: (id, options) => {
            if (Platform.OS !== 'android') {
                return new Promise((resolve, reject) => {
                    resolve();
                });
            }

            return Notifications.createChannelAndroidAsync(id, options);
        },
        listen: (listener) => {
            return Notifications.addListener(listener);
        },
        clear: () => {
            return Notifications.setBadgeNumberAsync(0);
        }
    },
    permissions: permissions,
    props: (element, props) => {
        element.setNativeProps(props);
    },
    review: {
        available: () => {
            return StoreReview.isAvailableAsync();
        },
        request: () => {
            StoreReview.requestReview();
        }
    },
    secure: {
        set: (key, value) => {
            value = JSON.stringify(value);

            return SecureStore.setItemAsync(
                key,
                value
            );
        },
        get: (key) => {
            return new Promise((resolve, reject) => {
                SecureStore.getItemAsync(key)
                    .then((value) => {
                        if (value === null) {
                            resolve(undefined);

                            return;
                        }

                        value = JSON.parse(value);

                        resolve(value);
                    })
                    .catch((e) => {
                        SecureStore.deleteItemAsync(key);

                        reject(e);
                    });
            })
        },
        delete: (key) => {
            return SecureStore.deleteItemAsync(key);
        }
    },
    select: (options) => {
        if (options.mobile) {
            // let {mobile, ...options} = options;

            options = {
                ...options,
                android: options.mobile,
                ios: options.mobile,
            };
        }

        return Platform.select(options);
    },
    share: (title, message, url) => {
        return new Promise((resolve, reject) => {
            Share.share(
                {
                    title: title,
                    message: message,
                    url: url
                },
                {
                    subject: title,
                    dialogTitle: title,
                }
            )
                .then(() => {
                    resolve();
                })
                .catch(reject)
        });
    },
    styleSheet: {
        line: StyleSheet.hairlineWidth
    },
    store: {
        set: (key, value) => {
            value = JSON.stringify(value);

            return AsyncStorage.setItem(key, value);
        },
        get: (key) => {
            return new Promise((resolve) => {
                AsyncStorage.getItem(key)
                    .then((value) => {
                        if (value === null) {
                            resolve(undefined);

                            return;
                        }

                        value = JSON.parse(value);

                        resolve(value);
                    })
            })
        },
        delete: (key) => {
            return AsyncStorage.removeItem(key);
        },
        clear: () => {
            return AsyncStorage.clear();
        }
    },
    vibration: {
        start: (value) => {
            Vibration.vibrate(value);
        }
    }
}