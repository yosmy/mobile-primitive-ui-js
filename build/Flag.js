"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _uiSpec = require("@yosmy/ui-spec");

var _Image = _interopRequireDefault(require("./Image"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var flags = {
  "ad": require("./flags/ad.png"),
  "ae": require("./flags/ae.png"),
  "af": require("./flags/af.png"),
  "ag": require("./flags/ag.png"),
  "ai": require("./flags/ai.png"),
  "al": require("./flags/al.png"),
  "am": require("./flags/am.png"),
  "ao": require("./flags/ao.png"),
  "aq": require("./flags/aq.png"),
  "ar": require("./flags/ar.png"),
  "as": require("./flags/as.png"),
  "at": require("./flags/at.png"),
  "au": require("./flags/au.png"),
  "aw": require("./flags/aw.png"),
  "ax": require("./flags/ax.png"),
  "az": require("./flags/az.png"),
  "ba": require("./flags/ba.png"),
  "bb": require("./flags/bb.png"),
  "bd": require("./flags/bd.png"),
  "be": require("./flags/be.png"),
  "bf": require("./flags/bf.png"),
  "bg": require("./flags/bg.png"),
  "bh": require("./flags/bh.png"),
  "bi": require("./flags/bi.png"),
  "bj": require("./flags/bj.png"),
  "bl": require("./flags/bl.png"),
  "bm": require("./flags/bm.png"),
  "bn": require("./flags/bn.png"),
  "bo": require("./flags/bo.png"),
  "bq": require("./flags/bq.png"),
  "br": require("./flags/br.png"),
  "bs": require("./flags/bs.png"),
  "bt": require("./flags/bt.png"),
  "bv": require("./flags/bv.png"),
  "bw": require("./flags/bw.png"),
  "by": require("./flags/by.png"),
  "bz": require("./flags/bz.png"),
  "ca": require("./flags/ca.png"),
  "cc": require("./flags/cc.png"),
  "cd": require("./flags/cd.png"),
  "cf": require("./flags/cf.png"),
  "cg": require("./flags/cg.png"),
  "ch": require("./flags/ch.png"),
  "ci": require("./flags/ci.png"),
  "ck": require("./flags/ck.png"),
  "cl": require("./flags/cl.png"),
  "cm": require("./flags/cm.png"),
  "cn": require("./flags/cn.png"),
  "co": require("./flags/co.png"),
  "cr": require("./flags/cr.png"),
  "cu": require("./flags/cu.png"),
  "cv": require("./flags/cv.png"),
  "cw": require("./flags/cw.png"),
  "cx": require("./flags/cx.png"),
  "cy": require("./flags/cy.png"),
  "cz": require("./flags/cz.png"),
  "de": require("./flags/de.png"),
  "dj": require("./flags/dj.png"),
  "dk": require("./flags/dk.png"),
  "dm": require("./flags/dm.png"),
  "do": require("./flags/do.png"),
  "dz": require("./flags/dz.png"),
  "ec": require("./flags/ec.png"),
  "ee": require("./flags/ee.png"),
  "eg": require("./flags/eg.png"),
  "eh": require("./flags/eh.png"),
  "er": require("./flags/er.png"),
  "es": require("./flags/es.png"),
  "et": require("./flags/et.png"),
  "eu": require("./flags/eu.png"),
  "fi": require("./flags/fi.png"),
  "fj": require("./flags/fj.png"),
  "fk": require("./flags/fk.png"),
  "fm": require("./flags/fm.png"),
  "fo": require("./flags/fo.png"),
  "fr": require("./flags/fr.png"),
  "ga": require("./flags/ga.png"),
  "gb": require("./flags/gb.png"),
  "gb-eng": require("./flags/gb-eng.png"),
  "gb-nir": require("./flags/gb-nir.png"),
  "gb-sct": require("./flags/gb-sct.png"),
  "gb-wls": require("./flags/gb-wls.png"),
  "gd": require("./flags/gd.png"),
  "ge": require("./flags/ge.png"),
  "gf": require("./flags/gf.png"),
  "gg": require("./flags/gg.png"),
  "gh": require("./flags/gh.png"),
  "gi": require("./flags/gi.png"),
  "gl": require("./flags/gl.png"),
  "gm": require("./flags/gm.png"),
  "gn": require("./flags/gn.png"),
  "gp": require("./flags/gp.png"),
  "gq": require("./flags/gq.png"),
  "gr": require("./flags/gr.png"),
  "gs": require("./flags/gs.png"),
  "gt": require("./flags/gt.png"),
  "gu": require("./flags/gu.png"),
  "gw": require("./flags/gw.png"),
  "gy": require("./flags/gy.png"),
  "hk": require("./flags/hk.png"),
  "hm": require("./flags/hm.png"),
  "hn": require("./flags/hn.png"),
  "hr": require("./flags/hr.png"),
  "ht": require("./flags/ht.png"),
  "hu": require("./flags/hu.png"),
  "id": require("./flags/id.png"),
  "ie": require("./flags/ie.png"),
  "il": require("./flags/il.png"),
  "im": require("./flags/im.png"),
  "in": require("./flags/in.png"),
  "io": require("./flags/io.png"),
  "iq": require("./flags/iq.png"),
  "ir": require("./flags/ir.png"),
  "is": require("./flags/is.png"),
  "it": require("./flags/it.png"),
  "je": require("./flags/je.png"),
  "jm": require("./flags/jm.png"),
  "jo": require("./flags/jo.png"),
  "jp": require("./flags/jp.png"),
  "ke": require("./flags/ke.png"),
  "kg": require("./flags/kg.png"),
  "kh": require("./flags/kh.png"),
  "ki": require("./flags/ki.png"),
  "km": require("./flags/km.png"),
  "kn": require("./flags/kn.png"),
  "kp": require("./flags/kp.png"),
  "kr": require("./flags/kr.png"),
  "kw": require("./flags/kw.png"),
  "ky": require("./flags/ky.png"),
  "kz": require("./flags/kz.png"),
  "la": require("./flags/la.png"),
  "lb": require("./flags/lb.png"),
  "lc": require("./flags/lc.png"),
  "li": require("./flags/li.png"),
  "lk": require("./flags/lk.png"),
  "lr": require("./flags/lr.png"),
  "lt": require("./flags/lt.png"),
  "lu": require("./flags/lu.png"),
  "lv": require("./flags/lv.png"),
  "ly": require("./flags/ly.png"),
  "ma": require("./flags/ma.png"),
  "mc": require("./flags/mc.png"),
  "md": require("./flags/md.png"),
  "me": require("./flags/me.png"),
  "mf": require("./flags/mf.png"),
  "mg": require("./flags/mg.png"),
  "mh": require("./flags/mh.png"),
  "mk": require("./flags/mk.png"),
  "ml": require("./flags/ml.png"),
  "mm": require("./flags/mm.png"),
  "mn": require("./flags/mn.png"),
  "mo": require("./flags/mo.png"),
  "mp": require("./flags/mp.png"),
  "mq": require("./flags/mq.png"),
  "mr": require("./flags/mr.png"),
  "ms": require("./flags/ms.png"),
  "mt": require("./flags/mt.png"),
  "mu": require("./flags/mu.png"),
  "mv": require("./flags/mv.png"),
  "mw": require("./flags/mw.png"),
  "mx": require("./flags/mx.png"),
  "my": require("./flags/my.png"),
  "mz": require("./flags/mz.png"),
  "na": require("./flags/na.png"),
  "nc": require("./flags/nc.png"),
  "ne": require("./flags/ne.png"),
  "nf": require("./flags/nf.png"),
  "ng": require("./flags/ng.png"),
  "ni": require("./flags/ni.png"),
  "nl": require("./flags/nl.png"),
  "no": require("./flags/no.png"),
  "np": require("./flags/np.png"),
  "nr": require("./flags/nr.png"),
  "nu": require("./flags/nu.png"),
  "nz": require("./flags/nz.png"),
  "om": require("./flags/om.png"),
  "pa": require("./flags/pa.png"),
  "pe": require("./flags/pe.png"),
  "pf": require("./flags/pf.png"),
  "pg": require("./flags/pg.png"),
  "ph": require("./flags/ph.png"),
  "pk": require("./flags/pk.png"),
  "pl": require("./flags/pl.png"),
  "pm": require("./flags/pm.png"),
  "pn": require("./flags/pn.png"),
  "pr": require("./flags/pr.png"),
  "ps": require("./flags/ps.png"),
  "pt": require("./flags/pt.png"),
  "pw": require("./flags/pw.png"),
  "py": require("./flags/py.png"),
  "qa": require("./flags/qa.png"),
  "re": require("./flags/re.png"),
  "ro": require("./flags/ro.png"),
  "rs": require("./flags/rs.png"),
  "ru": require("./flags/ru.png"),
  "rw": require("./flags/rw.png"),
  "sa": require("./flags/sa.png"),
  "sb": require("./flags/sb.png"),
  "sc": require("./flags/sc.png"),
  "sd": require("./flags/sd.png"),
  "se": require("./flags/se.png"),
  "sg": require("./flags/sg.png"),
  "sh": require("./flags/sh.png"),
  "si": require("./flags/si.png"),
  "sj": require("./flags/sj.png"),
  "sk": require("./flags/sk.png"),
  "sl": require("./flags/sl.png"),
  "sm": require("./flags/sm.png"),
  "sn": require("./flags/sn.png"),
  "so": require("./flags/so.png"),
  "sr": require("./flags/sr.png"),
  "ss": require("./flags/ss.png"),
  "st": require("./flags/st.png"),
  "sv": require("./flags/sv.png"),
  "sx": require("./flags/sx.png"),
  "sy": require("./flags/sy.png"),
  "sz": require("./flags/sz.png"),
  "tc": require("./flags/tc.png"),
  "td": require("./flags/td.png"),
  "tf": require("./flags/tf.png"),
  "tg": require("./flags/tg.png"),
  "th": require("./flags/th.png"),
  "tj": require("./flags/tj.png"),
  "tk": require("./flags/tk.png"),
  "tl": require("./flags/tl.png"),
  "tm": require("./flags/tm.png"),
  "tn": require("./flags/tn.png"),
  "to": require("./flags/to.png"),
  "tr": require("./flags/tr.png"),
  "tt": require("./flags/tt.png"),
  "tv": require("./flags/tv.png"),
  "tw": require("./flags/tw.png"),
  "tz": require("./flags/tz.png"),
  "ua": require("./flags/ua.png"),
  "ug": require("./flags/ug.png"),
  "um": require("./flags/um.png"),
  "us": require("./flags/us.png"),
  "uy": require("./flags/uy.png"),
  "uz": require("./flags/uz.png"),
  "va": require("./flags/va.png"),
  "vc": require("./flags/vc.png"),
  "ve": require("./flags/ve.png"),
  "vg": require("./flags/vg.png"),
  "vi": require("./flags/vi.png"),
  "vn": require("./flags/vn.png"),
  "vu": require("./flags/vu.png"),
  "wf": require("./flags/wf.png"),
  "ws": require("./flags/ws.png"),
  "ye": require("./flags/ye.png"),
  "yt": require("./flags/yt.png"),
  "za": require("./flags/za.png"),
  "zm": require("./flags/zm.png"),
  "zw": require("./flags/zw.png")
};

var Flag = function Flag(props) {
  var width, height;

  switch (props.size) {
    case "xs":
      width = 7;
      height = 7 * 3 / 4;
      break;

    case "sm":
      width = 14;
      height = 14 * 3 / 4;
      break;

    case "md":
      width = 28;
      height = 28 * 3 / 4;
      break;

    case "lg":
      width = 56;
      height = 56 * 3 / 4;
      break;

    case undefined:
      width = 14;
      height = 14 * 3 / 4;
      break;

    default:
      throw new Error("invalid size ".concat(size));
  }

  var style = _objectSpread({
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowColor: "#000",
    shadowOpacity: 0.2
  }, props.style);

  var flag = flags[props.country.toLowerCase()];

  if (!flag) {
    return null;
  }

  return _react["default"].createElement(_Image["default"], _extends({}, props, {
    source: flag,
    width: width,
    height: height,
    style: style,
    resizeMode: "stretch"
  }));
};

Flag.propTypes = _uiSpec.FlagProps;
var _default = Flag;
exports["default"] = _default;