/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

// UNUSED EXPORTS: default

;// CONCATENATED MODULE: ./src/functions/summary.js
var data = {
  "CHR": [{
    "judge": "地狱",
    "grade": 0
  }, {
    "min": 1,
    "judge": "折磨",
    "grade": 0
  }, {
    "min": 2,
    "judge": "不佳",
    "grade": 0
  }, {
    "min": 4,
    "judge": "普通",
    "grade": 0
  }, {
    "min": 7,
    "judge": "优秀",
    "grade": 1
  }, {
    "min": 9,
    "judge": "罕见",
    "grade": 2
  }, {
    "min": 11,
    "judge": "逆天",
    "grade": 3
  }],
  "MNY": [{
    "judge": "地狱",
    "grade": 0
  }, {
    "min": 1,
    "judge": "折磨",
    "grade": 0
  }, {
    "min": 2,
    "judge": "不佳",
    "grade": 0
  }, {
    "min": 4,
    "judge": "普通",
    "grade": 0
  }, {
    "min": 7,
    "judge": "优秀",
    "grade": 1
  }, {
    "min": 9,
    "judge": "罕见",
    "grade": 2
  }, {
    "min": 11,
    "judge": "逆天",
    "grade": 3
  }],
  "SPR": [{
    "judge": "地狱",
    "grade": 0
  }, {
    "min": 1,
    "judge": "折磨",
    "grade": 0
  }, {
    "min": 2,
    "judge": "不幸",
    "grade": 0
  }, {
    "min": 4,
    "judge": "普通",
    "grade": 0
  }, {
    "min": 7,
    "judge": "幸福",
    "grade": 1
  }, {
    "min": 9,
    "judge": "极乐",
    "grade": 2
  }, {
    "min": 11,
    "judge": "天命",
    "grade": 3
  }],
  "INT": [{
    "judge": "地狱",
    "grade": 0
  }, {
    "min": 1,
    "judge": "折磨",
    "grade": 0
  }, {
    "min": 2,
    "judge": "不佳",
    "grade": 0
  }, {
    "min": 4,
    "judge": "普通",
    "grade": 0
  }, {
    "min": 7,
    "judge": "优秀",
    "grade": 1
  }, {
    "min": 9,
    "judge": "罕见",
    "grade": 2
  }, {
    "min": 11,
    "judge": "逆天",
    "grade": 3
  }, {
    "min": 21,
    "judge": "识海",
    "grade": 3
  }, {
    "min": 131,
    "judge": "元神",
    "grade": 3
  }, {
    "min": 501,
    "judge": "仙魂",
    "grade": 3
  }],
  "STR": [{
    "judge": "地狱",
    "grade": 0
  }, {
    "min": 1,
    "judge": "折磨",
    "grade": 0
  }, {
    "min": 2,
    "judge": "不佳",
    "grade": 0
  }, {
    "min": 4,
    "judge": "普通",
    "grade": 0
  }, {
    "min": 7,
    "judge": "优秀",
    "grade": 1
  }, {
    "min": 9,
    "judge": "罕见",
    "grade": 2
  }, {
    "min": 11,
    "judge": "逆天",
    "grade": 3
  }, {
    "min": 21,
    "judge": "凝气",
    "grade": 3
  }, {
    "min": 101,
    "judge": "筑基",
    "grade": 3
  }, {
    "min": 401,
    "judge": "金丹",
    "grade": 3
  }, {
    "min": 1001,
    "judge": "元婴",
    "grade": 3
  }, {
    "min": 2001,
    "judge": "仙体",
    "grade": 3
  }],
  "AGE": [{
    "judge": "胎死腹中",
    "grade": 0
  }, {
    "min": 1,
    "judge": "早夭",
    "grade": 0
  }, {
    "min": 10,
    "judge": "少年",
    "grade": 0
  }, {
    "min": 18,
    "judge": "盛年",
    "grade": 0
  }, {
    "min": 40,
    "judge": "中年",
    "grade": 0
  }, {
    "min": 60,
    "judge": "花甲",
    "grade": 1
  }, {
    "min": 70,
    "judge": "古稀",
    "grade": 1
  }, {
    "min": 80,
    "judge": "杖朝",
    "grade": 2
  }, {
    "min": 90,
    "judge": "南山",
    "grade": 2
  }, {
    "min": 95,
    "judge": "不老",
    "grade": 3
  }, {
    "min": 100,
    "judge": "修仙",
    "grade": 3
  }, {
    "min": 500,
    "judge": "仙寿",
    "grade": 3
  }],
  "SUM": [{
    "judge": "地狱",
    "grade": 0
  }, {
    "min": 41,
    "judge": "折磨",
    "grade": 0
  }, {
    "min": 50,
    "judge": "不佳",
    "grade": 0
  }, {
    "min": 60,
    "judge": "普通",
    "grade": 0
  }, {
    "min": 80,
    "judge": "优秀",
    "grade": 1
  }, {
    "min": 100,
    "judge": "罕见",
    "grade": 2
  }, {
    "min": 110,
    "judge": "逆天",
    "grade": 3
  }, {
    "min": 120,
    "judge": "传说",
    "grade": 3
  }]
};

function summary_summary(type, value) {
  var length = data[type].length;

  while (length--) {
    var _data$type$length = data[type][length],
        min = _data$type$length.min,
        judge = _data$type$length.judge,
        grade = _data$type$length.grade;
    if (min == void 0 || value >= min) return {
      judge: judge,
      grade: grade
    };
  }
}


;// CONCATENATED MODULE: ./src/property.js
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }



var _ageData = /*#__PURE__*/new WeakMap();

var _data = /*#__PURE__*/new WeakMap();

var _record = /*#__PURE__*/new WeakMap();

var property_Property = /*#__PURE__*/(/* unused pure expression or super */ null && (function () {
  function Property() {
    _classCallCheck(this, Property);

    _defineProperty(this, "TYPES", {
      AGE: "AGE",
      CHR: "CHR",
      INT: "INT",
      STR: "STR",
      MNY: "MNY",
      SPR: "SPR",
      LIF: "LIF",
      TLT: "TLT",
      EVT: "EVT"
    });

    _classPrivateFieldInitSpec(this, _ageData, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _data, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _record, {
      writable: true,
      value: void 0
    });
  }

  _createClass(Property, [{
    key: "initial",
    value: function initial(_ref) {
      var age = _ref.age;

      _classPrivateFieldSet(this, _ageData, age);

      for (var a in age) {
        var _event, _talent;

        var _age$a = age[a],
            event = _age$a.event,
            talent = _age$a.talent;
        if (!Array.isArray(event)) event = ((_event = event) === null || _event === void 0 ? void 0 : _event.split(',')) || [];
        event = event.map(function (v) {
          var value = "".concat(v).split('*').map(function (n) {
            return Number(n);
          });
          if (value.length == 1) value.push(1);
          return value;
        });
        if (!Array.isArray(talent)) talent = ((_talent = talent) === null || _talent === void 0 ? void 0 : _talent.split(',')) || [];
        talent = talent.map(function (v) {
          return Number(v);
        });
        age[a] = {
          event: event,
          talent: talent
        };
      }
    }
  }, {
    key: "restart",
    value: function restart(data) {
      var _classPrivateFieldSet2;

      _classPrivateFieldSet(this, _data, (_classPrivateFieldSet2 = {}, _defineProperty(_classPrivateFieldSet2, this.TYPES.AGE, -1), _defineProperty(_classPrivateFieldSet2, this.TYPES.CHR, 0), _defineProperty(_classPrivateFieldSet2, this.TYPES.INT, 0), _defineProperty(_classPrivateFieldSet2, this.TYPES.STR, 0), _defineProperty(_classPrivateFieldSet2, this.TYPES.MNY, 0), _defineProperty(_classPrivateFieldSet2, this.TYPES.SPR, 0), _defineProperty(_classPrivateFieldSet2, this.TYPES.LIF, 1), _defineProperty(_classPrivateFieldSet2, this.TYPES.TLT, []), _defineProperty(_classPrivateFieldSet2, this.TYPES.EVT, []), _classPrivateFieldSet2));

      for (var key in data) {
        this.change(key, data[key]);
      }

      _classPrivateFieldSet(this, _record, []);
    }
  }, {
    key: "get",
    value: function get(prop) {
      switch (prop) {
        case this.TYPES.AGE:
        case this.TYPES.CHR:
        case this.TYPES.INT:
        case this.TYPES.STR:
        case this.TYPES.MNY:
        case this.TYPES.SPR:
        case this.TYPES.LIF:
        case this.TYPES.TLT:
        case this.TYPES.EVT:
          return clone(_classPrivateFieldGet(this, _data)[prop]);

        default:
          return 0;
      }
    }
  }, {
    key: "set",
    value: function set(prop, value) {
      switch (prop) {
        case this.TYPES.AGE:
        case this.TYPES.CHR:
        case this.TYPES.INT:
        case this.TYPES.STR:
        case this.TYPES.MNY:
        case this.TYPES.SPR:
        case this.TYPES.LIF:
        case this.TYPES.TLT:
        case this.TYPES.EVT:
          _classPrivateFieldGet(this, _data)[prop] = clone(value);
          break;

        default:
          return 0;
      }
    }
  }, {
    key: "record",
    value: function record() {
      var _classPrivateFieldGet2;

      _classPrivateFieldGet(this, _record).push((_classPrivateFieldGet2 = {}, _defineProperty(_classPrivateFieldGet2, this.TYPES.AGE, this.get(this.TYPES.AGE)), _defineProperty(_classPrivateFieldGet2, this.TYPES.CHR, this.get(this.TYPES.CHR)), _defineProperty(_classPrivateFieldGet2, this.TYPES.INT, this.get(this.TYPES.INT)), _defineProperty(_classPrivateFieldGet2, this.TYPES.STR, this.get(this.TYPES.STR)), _defineProperty(_classPrivateFieldGet2, this.TYPES.MNY, this.get(this.TYPES.MNY)), _defineProperty(_classPrivateFieldGet2, this.TYPES.SPR, this.get(this.TYPES.SPR)), _classPrivateFieldGet2));
    }
  }, {
    key: "getRecord",
    value: function getRecord() {
      return clone(_classPrivateFieldGet(this, _record));
    }
  }, {
    key: "change",
    value: function change(prop, value) {
      if (Array.isArray(value)) {
        var _iterator = _createForOfIteratorHelper(value),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var v = _step.value;
            this.change(prop, Number(v));
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        return;
      }

      switch (prop) {
        case this.TYPES.AGE:
        case this.TYPES.CHR:
        case this.TYPES.INT:
        case this.TYPES.STR:
        case this.TYPES.MNY:
        case this.TYPES.SPR:
        case this.TYPES.LIF:
          _classPrivateFieldGet(this, _data)[prop] += Number(value);
          break;

        case this.TYPES.TLT:
        case this.TYPES.EVT:
          var _v = _classPrivateFieldGet(this, _data)[prop];

          if (value < 0) {
            var index = _v.indexOf(value);

            if (index != -1) _v.splice(index, 1);
          }

          if (!_v.includes(value)) _v.push(value);
          break;

        default:
          return;
      }
    }
  }, {
    key: "effect",
    value: function effect(effects) {
      for (var prop in effects) {
        this.change(prop, Number(effects[prop]));
      }
    }
  }, {
    key: "isEnd",
    value: function isEnd() {
      return this.get(this.TYPES.LIF) < 1;
    }
  }, {
    key: "ageNext",
    value: function ageNext() {
      this.change(this.TYPES.AGE, 1);
      var age = this.get(this.TYPES.AGE);

      var _this$getAgeData = this.getAgeData(age),
          event = _this$getAgeData.event,
          talent = _this$getAgeData.talent;

      return {
        age: age,
        event: event,
        talent: talent
      };
    }
  }, {
    key: "getAgeData",
    value: function getAgeData(age) {
      return clone(_classPrivateFieldGet(this, _ageData)[age]);
    }
  }]);

  return Property;
}()));

/* harmony default export */ const property = ((/* unused pure expression or super */ null && (property_Property)));
;// CONCATENATED MODULE: ./src/event.js
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || event_unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function event_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = event_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function event_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return event_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return event_arrayLikeToArray(o, minLen); }

function event_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function event_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function event_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function event_createClass(Constructor, protoProps, staticProps) { if (protoProps) event_defineProperties(Constructor.prototype, protoProps); if (staticProps) event_defineProperties(Constructor, staticProps); return Constructor; }

function event_classPrivateFieldInitSpec(obj, privateMap, value) { event_checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function event_checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function event_classPrivateFieldGet(receiver, privateMap) { var descriptor = event_classExtractFieldDescriptor(receiver, privateMap, "get"); return event_classApplyDescriptorGet(receiver, descriptor); }

function event_classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function event_classPrivateFieldSet(receiver, privateMap, value) { var descriptor = event_classExtractFieldDescriptor(receiver, privateMap, "set"); event_classApplyDescriptorSet(receiver, descriptor, value); return value; }

function event_classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function event_classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }




var _events = /*#__PURE__*/new WeakMap();

var event_Event = /*#__PURE__*/(/* unused pure expression or super */ null && (function () {
  function Event() {
    event_classCallCheck(this, Event);

    event_classPrivateFieldInitSpec(this, _events, {
      writable: true,
      value: void 0
    });
  }

  event_createClass(Event, [{
    key: "initial",
    value: function initial(_ref) {
      var events = _ref.events;

      event_classPrivateFieldSet(this, _events, events);

      for (var id in events) {
        var event = events[id];
        if (!event.branch) continue;
        event.branch = event.branch.map(function (b) {
          b = b.split(':');
          b[1] = Number(b[1]);
          return b;
        });
      }
    }
  }, {
    key: "check",
    value: function check(eventId, property) {
      var _this$get = this.get(eventId),
          include = _this$get.include,
          exclude = _this$get.exclude,
          NoRandom = _this$get.NoRandom;

      if (NoRandom) return false;
      if (exclude && checkCondition(property, exclude)) return false;
      if (include) return checkCondition(property, include);
      return true;
    }
  }, {
    key: "get",
    value: function get(eventId) {
      var event = event_classPrivateFieldGet(this, _events)[eventId];

      if (!event) throw new Error("[ERROR] No Event[".concat(eventId, "]"));
      return clone(event);
    }
  }, {
    key: "information",
    value: function information(eventId) {
      var _this$get2 = this.get(eventId),
          description = _this$get2.event;

      return {
        description: description
      };
    }
  }, {
    key: "do",
    value: function _do(eventId, property) {
      var _this$get3 = this.get(eventId),
          effect = _this$get3.effect,
          branch = _this$get3.branch,
          description = _this$get3.event,
          postEvent = _this$get3.postEvent;

      if (branch) {
        var _iterator = event_createForOfIteratorHelper(branch),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var _step$value = _slicedToArray(_step.value, 2),
                cond = _step$value[0],
                next = _step$value[1];

            if (checkCondition(property, cond)) return {
              effect: effect,
              next: next,
              description: description
            };
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }

      return {
        effect: effect,
        postEvent: postEvent,
        description: description
      };
    }
  }]);

  return Event;
}()));

/* harmony default export */ const src_event = ((/* unused pure expression or super */ null && (event_Event)));
;// CONCATENATED MODULE: ./src/talent.js
function talent_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = talent_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function talent_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return talent_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return talent_arrayLikeToArray(o, minLen); }

function talent_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function talent_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function talent_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function talent_createClass(Constructor, protoProps, staticProps) { if (protoProps) talent_defineProperties(Constructor.prototype, protoProps); if (staticProps) talent_defineProperties(Constructor, staticProps); return Constructor; }

function talent_classPrivateFieldInitSpec(obj, privateMap, value) { talent_checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function talent_checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function talent_classPrivateFieldGet(receiver, privateMap) { var descriptor = talent_classExtractFieldDescriptor(receiver, privateMap, "get"); return talent_classApplyDescriptorGet(receiver, descriptor); }

function talent_classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function talent_classPrivateFieldSet(receiver, privateMap, value) { var descriptor = talent_classExtractFieldDescriptor(receiver, privateMap, "set"); talent_classApplyDescriptorSet(receiver, descriptor, value); return value; }

function talent_classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function talent_classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }




var _talents = /*#__PURE__*/new WeakMap();

var talent_Talent = /*#__PURE__*/(/* unused pure expression or super */ null && (function () {
  function Talent() {
    talent_classCallCheck(this, Talent);

    talent_classPrivateFieldInitSpec(this, _talents, {
      writable: true,
      value: void 0
    });
  }

  talent_createClass(Talent, [{
    key: "initial",
    value: function initial(_ref) {
      var talents = _ref.talents;

      talent_classPrivateFieldSet(this, _talents, talents);

      for (var id in talents) {
        var talent = talents[id];
        talent.id = Number(id);
        talent.grade = Number(talent.grade);
      }
    }
  }, {
    key: "check",
    value: function check(talentId, property) {
      var _this$get = this.get(talentId),
          condition = _this$get.condition;

      return checkCondition(property, condition);
    }
  }, {
    key: "get",
    value: function get(talentId) {
      var talent = talent_classPrivateFieldGet(this, _talents)[talentId];

      if (!talent) throw new Error("[ERROR] No Talent[".concat(talentId, "]"));
      return clone(talent);
    }
  }, {
    key: "information",
    value: function information(talentId) {
      var _this$get2 = this.get(talentId),
          grade = _this$get2.grade,
          name = _this$get2.name,
          description = _this$get2.description;

      return {
        grade: grade,
        name: name,
        description: description
      };
    }
  }, {
    key: "exclusive",
    value: function exclusive(talends, exclusiveId) {
      var _this$get3 = this.get(exclusiveId),
          exclusive = _this$get3.exclusive;

      if (!exclusive) return null;

      var _iterator = talent_createForOfIteratorHelper(talends),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var talent = _step.value;

          var _iterator2 = talent_createForOfIteratorHelper(exclusive),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var e = _step2.value;
              if (talent == e) return talent;
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return null;
    }
  }, {
    key: "talentRandom",
    value: function talentRandom(include) {
      // 1000, 100, 10, 1
      var talentList = {};

      for (var talentId in talent_classPrivateFieldGet(this, _talents)) {
        var _classPrivateFieldGet2 = talent_classPrivateFieldGet(this, _talents)[talentId],
            id = _classPrivateFieldGet2.id,
            grade = _classPrivateFieldGet2.grade,
            name = _classPrivateFieldGet2.name,
            description = _classPrivateFieldGet2.description;

        if (id == include) {
          include = {
            grade: grade,
            name: name,
            description: description,
            id: id
          };
          continue;
        }

        if (!talentList[grade]) talentList[grade] = [{
          grade: grade,
          name: name,
          description: description,
          id: id
        }];else talentList[grade].push({
          grade: grade,
          name: name,
          description: description,
          id: id
        });
      }

      return new Array(10).fill(1).map(function (v, i) {
        if (!i && include) return include;
        var gradeRandom = Math.random();
        var grade;
        if (gradeRandom >= 0.111) grade = 0;else if (gradeRandom >= 0.011) grade = 1;else if (gradeRandom >= 0.001) grade = 2;else grade = 3;

        while (talentList[grade].length == 0) {
          grade--;
        }

        var length = talentList[grade].length;
        var random = Math.floor(Math.random() * length) % length;
        return talentList[grade].splice(random, 1)[0];
      });
    }
  }, {
    key: "allocationAddition",
    value: function allocationAddition(talents) {
      if (Array.isArray(talents)) {
        var addition = 0;

        var _iterator3 = talent_createForOfIteratorHelper(talents),
            _step3;

        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var talent = _step3.value;
            addition += this.allocationAddition(talent);
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }

        return addition;
      }

      return Number(this.get(talents).status) || 0;
    }
  }, {
    key: "do",
    value: function _do(talentId, property) {
      var _this$get4 = this.get(talentId),
          effect = _this$get4.effect,
          condition = _this$get4.condition,
          grade = _this$get4.grade,
          name = _this$get4.name,
          description = _this$get4.description;

      if (condition && !checkCondition(property, condition)) return null;
      return {
        effect: effect,
        grade: grade,
        name: name,
        description: description
      };
    }
  }]);

  return Talent;
}()));

/* harmony default export */ const talent = ((/* unused pure expression or super */ null && (talent_Talent)));
;// CONCATENATED MODULE: ./src/life.js
function life_slicedToArray(arr, i) { return life_arrayWithHoles(arr) || life_iterableToArrayLimit(arr, i) || life_unsupportedIterableToArray(arr, i) || life_nonIterableRest(); }

function life_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function life_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function life_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function life_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = life_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function life_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return life_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return life_arrayLikeToArray(o, minLen); }

function life_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function life_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function life_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function life_createClass(Constructor, protoProps, staticProps) { if (protoProps) life_defineProperties(Constructor.prototype, protoProps); if (staticProps) life_defineProperties(Constructor, staticProps); return Constructor; }

function life_classPrivateFieldInitSpec(obj, privateMap, value) { life_checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function life_checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function life_classPrivateFieldGet(receiver, privateMap) { var descriptor = life_classExtractFieldDescriptor(receiver, privateMap, "get"); return life_classApplyDescriptorGet(receiver, descriptor); }

function life_classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function life_classPrivateFieldSet(receiver, privateMap, value) { var descriptor = life_classExtractFieldDescriptor(receiver, privateMap, "set"); life_classApplyDescriptorSet(receiver, descriptor, value); return value; }

function life_classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function life_classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }





var _property = /*#__PURE__*/new WeakMap();

var _event = /*#__PURE__*/new WeakMap();

var _talent = /*#__PURE__*/new WeakMap();

var _triggerTalents = /*#__PURE__*/new WeakMap();

var life_Life = /*#__PURE__*/(/* unused pure expression or super */ null && (function () {
  function Life() {
    life_classCallCheck(this, Life);

    life_classPrivateFieldInitSpec(this, _property, {
      writable: true,
      value: void 0
    });

    life_classPrivateFieldInitSpec(this, _event, {
      writable: true,
      value: void 0
    });

    life_classPrivateFieldInitSpec(this, _talent, {
      writable: true,
      value: void 0
    });

    life_classPrivateFieldInitSpec(this, _triggerTalents, {
      writable: true,
      value: void 0
    });

    life_classPrivateFieldSet(this, _property, new Property());

    life_classPrivateFieldSet(this, _event, new Event());

    life_classPrivateFieldSet(this, _talent, new Talent());
  }

  life_createClass(Life, [{
    key: "initial",
    value: function () {
      var _initial = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var age, talents, events;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return json('age');

              case 2:
                age = _context.sent;
                _context.next = 5;
                return json('talents');

              case 5:
                talents = _context.sent;
                _context.next = 8;
                return json('events');

              case 8:
                events = _context.sent;

                life_classPrivateFieldGet(this, _property).initial({
                  age: age
                });

                life_classPrivateFieldGet(this, _talent).initial({
                  talents: talents
                });

                life_classPrivateFieldGet(this, _event).initial({
                  events: events
                });

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function initial() {
        return _initial.apply(this, arguments);
      }

      return initial;
    }()
  }, {
    key: "restart",
    value: function restart(allocation) {
      life_classPrivateFieldSet(this, _triggerTalents, new Set());

      life_classPrivateFieldGet(this, _property).restart(allocation);

      this.doTalent();

      life_classPrivateFieldGet(this, _property).record();
    }
  }, {
    key: "getTalentAllocationAddition",
    value: function getTalentAllocationAddition(talents) {
      return life_classPrivateFieldGet(this, _talent).allocationAddition(talents);
    }
  }, {
    key: "next",
    value: function next() {
      var _classPrivateFieldGet2 = life_classPrivateFieldGet(this, _property).ageNext(),
          age = _classPrivateFieldGet2.age,
          event = _classPrivateFieldGet2.event,
          talent = _classPrivateFieldGet2.talent;

      var talentContent = this.doTalent(talent);
      var eventContent = this.doEvent(this.random(event));

      life_classPrivateFieldGet(this, _property).record();

      var isEnd = life_classPrivateFieldGet(this, _property).isEnd();

      var content = [talentContent, eventContent].flat();
      return {
        age: age,
        content: content,
        isEnd: isEnd
      };
    }
  }, {
    key: "doTalent",
    value: function doTalent(talents) {
      var _this = this;

      if (talents) life_classPrivateFieldGet(this, _property).change(life_classPrivateFieldGet(this, _property).TYPES.TLT, talents);
      talents = life_classPrivateFieldGet(this, _property).get(life_classPrivateFieldGet(this, _property).TYPES.TLT).filter(function (talentId) {
        return !life_classPrivateFieldGet(_this, _triggerTalents).has(talentId);
      });
      var contents = [];

      var _iterator = life_createForOfIteratorHelper(talents),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var talentId = _step.value;

          var result = life_classPrivateFieldGet(this, _talent)["do"](talentId, life_classPrivateFieldGet(this, _property));

          if (!result) continue;

          life_classPrivateFieldGet(this, _triggerTalents).add(talentId);

          var effect = result.effect,
              name = result.name,
              description = result.description,
              grade = result.grade;
          contents.push({
            type: life_classPrivateFieldGet(this, _property).TYPES.TLT,
            name: name,
            grade: grade,
            description: description
          });
          if (!effect) continue;

          life_classPrivateFieldGet(this, _property).effect(effect);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return contents;
    }
  }, {
    key: "doEvent",
    value: function doEvent(eventId) {
      var _classPrivateFieldGet3 = life_classPrivateFieldGet(this, _event)["do"](eventId, life_classPrivateFieldGet(this, _property)),
          effect = _classPrivateFieldGet3.effect,
          next = _classPrivateFieldGet3.next,
          description = _classPrivateFieldGet3.description,
          postEvent = _classPrivateFieldGet3.postEvent;

      life_classPrivateFieldGet(this, _property).change(life_classPrivateFieldGet(this, _property).TYPES.EVT, eventId);

      life_classPrivateFieldGet(this, _property).effect(effect);

      var content = {
        type: life_classPrivateFieldGet(this, _property).TYPES.EVT,
        description: description,
        postEvent: postEvent
      };
      if (next) return [content, this.doEvent(next)].flat();
      return [content];
    }
  }, {
    key: "random",
    value: function random(events) {
      var _this2 = this;

      events = events.filter(function (_ref) {
        var _ref2 = life_slicedToArray(_ref, 1),
            eventId = _ref2[0];

        return life_classPrivateFieldGet(_this2, _event).check(eventId, life_classPrivateFieldGet(_this2, _property));
      });
      var totalWeights = 0;

      var _iterator2 = life_createForOfIteratorHelper(events),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _step2$value = life_slicedToArray(_step2.value, 2),
              weight = _step2$value[1];

          totalWeights += weight;
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      var random = Math.random() * totalWeights;

      var _iterator3 = life_createForOfIteratorHelper(events),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var _step3$value = life_slicedToArray(_step3.value, 2),
              eventId = _step3$value[0],
              _weight = _step3$value[1];

          if ((random -= _weight) < 0) return eventId;
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      return events[events.length - 1];
    }
  }, {
    key: "talentRandom",
    value: function talentRandom() {
      return life_classPrivateFieldGet(this, _talent).talentRandom(JSON.parse(localStorage.extendTalent || 'null'));
    }
  }, {
    key: "talentExtend",
    value: function talentExtend(talentId) {
      localStorage.extendTalent = JSON.stringify(talentId);
    }
  }, {
    key: "getRecord",
    value: function getRecord() {
      return life_classPrivateFieldGet(this, _property).getRecord();
    }
  }, {
    key: "exclusive",
    value: function exclusive(talents, _exclusive) {
      return life_classPrivateFieldGet(this, _talent).exclusive(talents, _exclusive);
    }
  }]);

  return Life;
}()));

/* harmony default export */ const life = ((/* unused pure expression or super */ null && (life_Life)));
;// CONCATENATED MODULE: ./src/app.js
function app_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = app_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function app_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return app_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return app_arrayLikeToArray(o, minLen); }

function app_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function app_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function app_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { app_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { app_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function app_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function app_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function app_createClass(Constructor, protoProps, staticProps) { if (protoProps) app_defineProperties(Constructor.prototype, protoProps); if (staticProps) app_defineProperties(Constructor, staticProps); return Constructor; }

function app_classPrivateFieldInitSpec(obj, privateMap, value) { app_checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function app_checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function app_classPrivateFieldGet(receiver, privateMap) { var descriptor = app_classExtractFieldDescriptor(receiver, privateMap, "get"); return app_classApplyDescriptorGet(receiver, descriptor); }

function app_classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function app_classPrivateFieldSet(receiver, privateMap, value) { var descriptor = app_classExtractFieldDescriptor(receiver, privateMap, "set"); app_classApplyDescriptorSet(receiver, descriptor, value); return value; }

function app_classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function app_classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }





var _life = /*#__PURE__*/new WeakMap();

var _pages = /*#__PURE__*/new WeakMap();

var _talentSelected = /*#__PURE__*/new WeakMap();

var _totalMax = /*#__PURE__*/new WeakMap();

var _isEnd = /*#__PURE__*/new WeakMap();

var _selectedExtendTalent = /*#__PURE__*/new WeakMap();

var _hintTimeout = /*#__PURE__*/new WeakMap();

var App = /*#__PURE__*/(/* unused pure expression or super */ null && (function () {
  function App() {
    app_classCallCheck(this, App);

    app_classPrivateFieldInitSpec(this, _life, {
      writable: true,
      value: void 0
    });

    app_classPrivateFieldInitSpec(this, _pages, {
      writable: true,
      value: void 0
    });

    app_classPrivateFieldInitSpec(this, _talentSelected, {
      writable: true,
      value: new Set()
    });

    app_classPrivateFieldInitSpec(this, _totalMax, {
      writable: true,
      value: 20
    });

    app_classPrivateFieldInitSpec(this, _isEnd, {
      writable: true,
      value: false
    });

    app_classPrivateFieldInitSpec(this, _selectedExtendTalent, {
      writable: true,
      value: null
    });

    app_classPrivateFieldInitSpec(this, _hintTimeout, {
      writable: true,
      value: void 0
    });

    app_classPrivateFieldSet(this, _life, new Life());
  }

  app_createClass(App, [{
    key: "initial",
    value: function () {
      var _initial = app_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _this = this;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.initPages();
                this["switch"]('loading');
                _context.next = 4;
                return app_classPrivateFieldGet(this, _life).initial();

              case 4:
                this["switch"]('index');

                window.onerror = function (event, source, lineno, colno, error) {
                  _this.hint("[ERROR] at (".concat(source, ":").concat(lineno, ":").concat(colno, ")\n\n").concat((error === null || error === void 0 ? void 0 : error.stack) || error || 'unknow Error'), 'error');
                };

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function initial() {
        return _initial.apply(this, arguments);
      }

      return initial;
    }()
  }, {
    key: "initPages",
    value: function initPages() {
      var _this2 = this;

      // Loading
      var loadingPage = $("\n        <div id=\"main\">\n            <div id=\"title\">\n                \u4EBA\u751F\u91CD\u5F00\u6A21\u62DF\u5668<br>\n                <div style=\"font-size:1.5rem; font-weight:normal;\">\u52A0\u8F7D\u4E2D...</div>\n            </div>\n        </div>\n        "); // Index

      var indexPage = $("\n        <div id=\"main\">\n            <div id=\"cnt\" class=\"head\">\u5DF2\u91CD\u5F001\u6B21</div>\n            <button id=\"rank\">\u6392\u884C\u699C</button>\n            <div id=\"title\">\n                \u4EBA\u751F\u91CD\u5F00\u6A21\u62DF\u5668<br>\n                <div style=\"font-size:1.5rem; font-weight:normal;\">\u8FD9\u5783\u573E\u4EBA\u751F\u4E00\u79D2\u4E5F\u4E0D\u60F3\u5446\u4E86</div>\n            </div>\n            <button id=\"restart\" class=\"mainbtn\"><span class=\"iconfont\">&#xe6a7;</span>\u7ACB\u5373\u91CD\u5F00</button>\n        </div>\n        ");
      indexPage.find('#restart').click(function () {
        return _this2["switch"]('talent');
      });
      indexPage.find('#rank').click(function () {
        return _this2.hint('别卷了！没有排行榜');
      }); // Talent

      var talentPage = $("\n        <div id=\"main\">\n            <div class=\"head\" style=\"font-size: 1.6rem\">\u5929\u8D4B\u62BD\u5361</div>\n            <button id=\"random\" class=\"mainbtn\" style=\"top: 50%;\">10\u8FDE\u62BD\uFF01</button>\n            <ul id=\"talents\" class=\"selectlist\"></ul>\n            <button id=\"next\" class=\"mainbtn\" style=\"top:auto; bottom:0.1em\">\u8BF7\u9009\u62E93\u4E2A</button>\n        </div>\n        ");

      var createTalent = function createTalent(_ref) {
        var grade = _ref.grade,
            name = _ref.name,
            description = _ref.description;
        return $("<li class=\"grade".concat(grade, "b\">").concat(name, "\uFF08").concat(description, "\uFF09</li>"));
      };

      talentPage.find('#random').click(function () {
        talentPage.find('#random').hide();
        var ul = talentPage.find('#talents');

        app_classPrivateFieldGet(_this2, _life).talentRandom().forEach(function (talent) {
          var li = createTalent(talent);
          ul.append(li);
          li.click(function () {
            if (li.hasClass('selected')) {
              li.removeClass('selected');

              app_classPrivateFieldGet(_this2, _talentSelected)["delete"](talent);
            } else {
              if (app_classPrivateFieldGet(_this2, _talentSelected).size == 3) {
                _this2.hint('只能选3个天赋');

                return;
              }

              var exclusive = app_classPrivateFieldGet(_this2, _life).exclusive(Array.from(app_classPrivateFieldGet(_this2, _talentSelected)).map(function (_ref2) {
                var id = _ref2.id;
                return id;
              }), talent.id);

              if (exclusive != null) {
                var _iterator = app_createForOfIteratorHelper(app_classPrivateFieldGet(_this2, _talentSelected)),
                    _step;

                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    var _step$value = _step.value,
                        name = _step$value.name,
                        id = _step$value.id;

                    if (id == exclusive) {
                      _this2.hint("\u4E0E\u5DF2\u9009\u62E9\u7684\u5929\u8D4B\u3010".concat(name, "\u3011\u51B2\u7A81"));

                      return;
                    }
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }

                return;
              }

              li.addClass('selected');

              app_classPrivateFieldGet(_this2, _talentSelected).add(talent);
            }
          });
        });
      });
      talentPage.find('#next').click(function () {
        if (app_classPrivateFieldGet(_this2, _talentSelected).size != 3) {
          _this2.hint('请选择3个天赋');

          return;
        }

        app_classPrivateFieldSet(_this2, _totalMax, 20 + app_classPrivateFieldGet(_this2, _life).getTalentAllocationAddition(Array.from(app_classPrivateFieldGet(_this2, _talentSelected)).map(function (_ref3) {
          var id = _ref3.id;
          return id;
        })));

        _this2["switch"]('property');
      }); // Property

      var propertyPage = $("\n        <div id=\"main\">\n            <div class=\"head\" style=\"font-size: 1.6rem\">\n                \u8C03\u6574\u521D\u59CB\u5C5E\u6027<br>\n                <div id=\"total\" style=\"font-size:1rem; font-weight:normal;\">\u53EF\u7528\u5C5E\u6027\u70B9\uFF1A0</div>\n            </div>\n            <ul id=\"propertyAllocation\" class=\"propinitial\"></ul>\n            <button id=\"random\" class=\"mainbtn\" style=\"top:auto; bottom:7rem\">\u968F\u673A\u5206\u914D</button>\n            <button id=\"start\" class=\"mainbtn\" style=\"top:auto; bottom:0.1rem\">\u5F00\u59CB\u65B0\u4EBA\u751F</button>\n        </div>\n        ");
      var groups = {};

      var total = function total() {
        var t = 0;

        for (var type in groups) {
          t += groups[type].get();
        }

        return t;
      };

      var freshTotal = function freshTotal() {
        propertyPage.find('#total').text("\u53EF\u7528\u5C5E\u6027\u70B9\uFF1A".concat(app_classPrivateFieldGet(_this2, _totalMax) - total()));
      };

      var getBtnGroups = function getBtnGroups(name, min, max) {
        var group = $("<li>".concat(name, "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>"));
        var btnSub = $("<span class=\"iconfont propbtn\">&#xe6a5;</span>");
        var inputBox = $("<input value=\"0\">");
        var btnAdd = $("<span class=\"iconfont propbtn\">&#xe6a6;</span>");
        group.append(btnSub);
        group.append(inputBox);
        group.append(btnAdd);

        var limit = function limit(v) {
          v = Number(v) || 0;
          v = Math.round(v);
          return v < min ? min : v > max ? max : v;
        };

        var get = function get() {
          return Number(inputBox.val());
        };

        var set = function set(v) {
          inputBox.val(limit(v));
          freshTotal();
        };

        btnAdd.click(function () {
          if (total() == app_classPrivateFieldGet(_this2, _totalMax)) {
            _this2.hint('没用可分配的点数了');

            return;
          }

          set(get() + 1);
        });
        btnSub.click(function () {
          return set(get() - 1);
        });
        inputBox.on('input', function () {
          var t = total();
          var val = get();

          if (t > app_classPrivateFieldGet(_this2, _totalMax)) {
            val -= t - app_classPrivateFieldGet(_this2, _totalMax);
          }

          val = limit(val);

          if (val != inputBox.val()) {
            set(val);
          }

          freshTotal();
        });
        return {
          group: group,
          get: get,
          set: set
        };
      };

      groups.CHR = getBtnGroups("颜值", 0, 10); // 颜值 charm CHR

      groups.INT = getBtnGroups("智力", 0, 10); // 智力 intelligence INT

      groups.STR = getBtnGroups("体质", 0, 10); // 体质 strength STR

      groups.MNY = getBtnGroups("家境", 0, 10); // 家境 money MNY

      var ul = propertyPage.find('#propertyAllocation');

      for (var type in groups) {
        ul.append(groups[type].group);
      }

      propertyPage.find('#random').click(function () {
        var t = app_classPrivateFieldGet(_this2, _totalMax);

        var arr = [10, 10, 10, 10];

        while (t > 0) {
          var sub = Math.round(Math.random() * (Math.min(t, 10) - 1)) + 1;

          while (true) {
            var select = Math.floor(Math.random() * 4) % 4;
            if (arr[select] - sub < 0) continue;
            arr[select] -= sub;
            t -= sub;
            break;
          }
        }

        groups.CHR.set(10 - arr[0]);
        groups.INT.set(10 - arr[1]);
        groups.STR.set(10 - arr[2]);
        groups.MNY.set(10 - arr[3]);
      });
      propertyPage.find('#start').click(function () {
        if (total() != app_classPrivateFieldGet(_this2, _totalMax)) {
          _this2.hint("\u4F60\u8FD8\u6709".concat(app_classPrivateFieldGet(_this2, _totalMax) - total(), "\u5C5E\u6027\u70B9\u6CA1\u6709\u5206\u914D\u5B8C"));

          return;
        }

        app_classPrivateFieldGet(_this2, _life).restart({
          CHR: groups.CHR.get(),
          INT: groups.INT.get(),
          STR: groups.STR.get(),
          MNY: groups.MNY.get(),
          SPR: 5,
          TLT: Array.from(app_classPrivateFieldGet(_this2, _talentSelected)).map(function (_ref4) {
            var id = _ref4.id;
            return id;
          })
        });

        _this2["switch"]('trajectory');

        app_classPrivateFieldGet(_this2, _pages).trajectory.born();
      }); // Trajectory

      var trajectoryPage = $("\n        <div id=\"main\">\n            <ul id=\"lifeTrajectory\" class=\"lifeTrajectory\"></ul>\n            <button id=\"summary\" class=\"mainbtn\" style=\"top:auto; bottom:0.1rem\">\u4EBA\u751F\u603B\u7ED3</button>\n        </div>\n        ");
      trajectoryPage.find('#lifeTrajectory').click(function () {
        if (app_classPrivateFieldGet(_this2, _isEnd)) return;

        var trajectory = app_classPrivateFieldGet(_this2, _life).next();

        var age = trajectory.age,
            content = trajectory.content,
            isEnd = trajectory.isEnd;
        var li = $("<li><span>".concat(age, "\u5C81\uFF1A</span>").concat(content.map(function (_ref5) {
          var type = _ref5.type,
              description = _ref5.description,
              grade = _ref5.grade,
              name = _ref5.name,
              postEvent = _ref5.postEvent;

          switch (type) {
            case 'TLT':
              return "\u5929\u8D4B\u3010".concat(name, "\u3011\u53D1\u52A8\uFF1A").concat(description);

            case 'EVT':
              return description + (postEvent ? "<br>".concat(postEvent) : '');
          }
        }).join('<br>'), "</li>"));
        li.appendTo('#lifeTrajectory');
        $("#lifeTrajectory").scrollTop($("#lifeTrajectory")[0].scrollHeight);

        if (isEnd) {
          app_classPrivateFieldSet(_this2, _isEnd, true);

          trajectoryPage.find('#summary').show();
        }
      });
      trajectoryPage.find('#summary').click(function () {
        _this2["switch"]('summary');
      }); // Summary

      var summaryPage = $("\n        <div id=\"main\">\n            <div class=\"head\">\u4EBA\u751F\u603B\u7ED3</div>\n            <ul id=\"judge\" class=\"judge\" style=\"bottom: calc(35% + 2.5rem)\">\n                <li class=\"grade2\"><span>\u989C\u503C\uFF1A</span>9\u7EA7 \u7F8E\u82E5\u5929\u4ED9</li>\n                <li><span>\u667A\u529B\uFF1A</span>4\u7EA7 \u667A\u529B\u4E00\u822C</li>\n                <li><span>\u4F53\u8D28\uFF1A</span>1\u7EA7 \u6781\u5EA6\u865A\u5F31</li>\n                <li><span>\u5BB6\u5883\uFF1A</span>6\u7EA7 \u5C0F\u5EB7\u4E4B\u5BB6</li>\n                <li><span>\u4EAB\u5E74\uFF1A</span>3\u5C81 \u65E9\u592D</li>\n                <li><span>\u5FEB\u4E50\uFF1A</span>3\u7EA7 \u4E0D\u592A\u5E78\u798F\u7684\u4EBA\u751F</li>\n            </ul>\n            <div class=\"head\" style=\"top:auto; bottom:35%\">\u5929\u8D4B\uFF0C\u4F60\u53EF\u4EE5\u9009\u4E00\u4E2A\uFF0C\u4E0B\u8F88\u5B50\u8FD8\u80FD\u62BD\u5230</div>\n            <ul id=\"talents\" class=\"selectlist\" style=\"top:calc(65% + 0.5rem); bottom:8rem\">\n                <li class=\"grade2b\">\u9ED1\u5E55\uFF08\u9762\u8BD5\u4E00\u5B9A\u6210\u529F\uFF09</li>\n            </ul>\n            <button id=\"again\" class=\"mainbtn\" style=\"top:auto; bottom:0.1em\"><span class=\"iconfont\">&#xe6a7;</span>\u518D\u6B21\u91CD\u5F00</button>\n        </div>\n        ");
      summaryPage.find('#again').click(function () {
        _this2.times++;

        app_classPrivateFieldGet(_this2, _life).talentExtend(app_classPrivateFieldGet(_this2, _selectedExtendTalent));

        app_classPrivateFieldSet(_this2, _selectedExtendTalent, null);

        app_classPrivateFieldGet(_this2, _talentSelected).clear();

        app_classPrivateFieldSet(_this2, _totalMax, 20);

        app_classPrivateFieldSet(_this2, _isEnd, false);

        _this2["switch"]('index');
      });

      app_classPrivateFieldSet(this, _pages, {
        loading: {
          page: loadingPage,
          clear: function clear() {}
        },
        index: {
          page: indexPage,
          btnRank: indexPage.find('#rank'),
          btnRestart: indexPage.find('#restart'),
          hint: indexPage.find('.hint'),
          cnt: indexPage.find('#cnt'),
          clear: function clear() {
            indexPage.find('.hint').hide();
            var times = _this2.times;
            var btnRank = indexPage.find('#rank');
            var cnt = indexPage.find('#cnt');

            if (times > 0) {
              btnRank.show();
              cnt.show();
              cnt.text("\u5DF2\u91CD\u5F00".concat(times, "\u6B21"));
              return;
            }

            btnRank.hide();
            cnt.hide();
          }
        },
        talent: {
          page: talentPage,
          clear: function clear() {
            talentPage.find('ul.selectlist').empty();
            talentPage.find('#random').show();

            app_classPrivateFieldSet(_this2, _totalMax, 20);
          }
        },
        property: {
          page: propertyPage,
          clear: function clear() {
            freshTotal();
          }
        },
        trajectory: {
          page: trajectoryPage,
          clear: function clear() {
            trajectoryPage.find('#lifeTrajectory').empty();
            trajectoryPage.find('#summary').hide();

            app_classPrivateFieldSet(_this2, _isEnd, false);
          },
          born: function born() {
            trajectoryPage.find('#lifeTrajectory').trigger("click");
          }
        },
        summary: {
          page: summaryPage,
          clear: function clear() {
            var judge = summaryPage.find('#judge');
            var talents = summaryPage.find('#talents');
            judge.empty();
            talents.empty();

            app_classPrivateFieldGet(_this2, _talentSelected).forEach(function (talent) {
              var li = createTalent(talent);
              talents.append(li);
              li.click(function () {
                if (li.hasClass('selected')) {
                  app_classPrivateFieldSet(_this2, _selectedExtendTalent, null);

                  li.removeClass('selected');
                } else if (app_classPrivateFieldGet(_this2, _selectedExtendTalent) != null) {
                  _this2.hint('只能继承一个天赋');

                  return;
                } else {
                  app_classPrivateFieldSet(_this2, _selectedExtendTalent, talent.id);

                  li.addClass('selected');
                }
              });
            });

            var records = app_classPrivateFieldGet(_this2, _life).getRecord();

            var s = function s(type, func) {
              var value = func(records.map(function (_ref6) {
                var v = _ref6[type];
                return v;
              }));

              var _summary = summary(type, value),
                  judge = _summary.judge,
                  grade = _summary.grade;

              return {
                judge: judge,
                grade: grade,
                value: value
              };
            };

            console.table(records);
            console.debug(records);
            judge.append([function () {
              var _s = s('CHR', max),
                  judge = _s.judge,
                  grade = _s.grade,
                  value = _s.value;

              return "<li class=\"grade".concat(grade, "\"><span>\u989C\u503C\uFF1A</span>").concat(value, " ").concat(judge, "</li>");
            }(), function () {
              var _s2 = s('INT', max),
                  judge = _s2.judge,
                  grade = _s2.grade,
                  value = _s2.value;

              return "<li class=\"grade".concat(grade, "\"><span>\u667A\u529B\uFF1A</span>").concat(value, " ").concat(judge, "</li>");
            }(), function () {
              var _s3 = s('STR', max),
                  judge = _s3.judge,
                  grade = _s3.grade,
                  value = _s3.value;

              return "<li class=\"grade".concat(grade, "\"><span>\u4F53\u8D28\uFF1A</span>").concat(value, " ").concat(judge, "</li>");
            }(), function () {
              var _s4 = s('MNY', max),
                  judge = _s4.judge,
                  grade = _s4.grade,
                  value = _s4.value;

              return "<li class=\"grade".concat(grade, "\"><span>\u5BB6\u5883\uFF1A</span>").concat(value, " ").concat(judge, "</li>");
            }(), function () {
              var _s5 = s('SPR', max),
                  judge = _s5.judge,
                  grade = _s5.grade,
                  value = _s5.value;

              return "<li class=\"grade".concat(grade, "\"><span>\u5FEB\u4E50\uFF1A</span>").concat(value, " ").concat(judge, "</li>");
            }(), function () {
              var _s6 = s('AGE', max),
                  judge = _s6.judge,
                  grade = _s6.grade,
                  value = _s6.value;

              return "<li class=\"grade".concat(grade, "\"><span>\u4EAB\u5E74\uFF1A</span>").concat(value, " ").concat(judge, "</li>");
            }(), function () {
              var m = function m(type) {
                return max(records.map(function (_ref7) {
                  var value = _ref7[type];
                  return value;
                }));
              };

              var value = Math.floor(sum(m('CHR'), m('INT'), m('STR'), m('MNY'), m('SPR')) * 2 + m('AGE') / 2);

              var _summary2 = summary('SUM', value),
                  judge = _summary2.judge,
                  grade = _summary2.grade;

              return "<li class=\"grade".concat(grade, "\"><span>\u603B\u8BC4\uFF1A</span>").concat(value, " ").concat(judge, "</li>");
            }()].join(''));
          }
        }
      });
    }
  }, {
    key: "switch",
    value: function _switch(page) {
      var p = app_classPrivateFieldGet(this, _pages)[page];

      if (!p) return;
      $('#main').detach();
      p.clear();
      p.page.appendTo('body');
    }
  }, {
    key: "hint",
    value: function hint(message) {
      var _this3 = this;

      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'info';

      if (app_classPrivateFieldGet(this, _hintTimeout)) {
        clearTimeout(app_classPrivateFieldGet(this, _hintTimeout));

        app_classPrivateFieldSet(this, _hintTimeout, null);
      }

      hideBanners();
      requestAnimationFrame(function () {
        var banner = $(".banner.".concat(type));
        banner.addClass('visible');
        banner.find('.banner-message').text(message);

        if (type != 'error') {
          app_classPrivateFieldSet(_this3, _hintTimeout, setTimeout(hideBanners, 3000));
        }
      });
    }
  }, {
    key: "times",
    get: function get() {
      return JSON.parse(localStorage.times || '0') || 0;
    },
    set: function set(v) {
      localStorage.times = JSON.stringify(parseInt(v) || 0);
    }
  }]);

  return App;
}()));

/* harmony default export */ const app = ((/* unused pure expression or super */ null && (App)));
/******/ })()
;