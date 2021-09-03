"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _util = require("./functions/util.js");

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

var Property = /*#__PURE__*/function () {
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
          return (0, _util.clone)(_classPrivateFieldGet(this, _data)[prop]);

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
          _classPrivateFieldGet(this, _data)[prop] = (0, _util.clone)(value);
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
      return (0, _util.clone)(_classPrivateFieldGet(this, _record));
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
      return (0, _util.clone)(_classPrivateFieldGet(this, _ageData)[age]);
    }
  }]);

  return Property;
}();

var _default = Property;
exports["default"] = _default;