"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _util = require("./functions/util.js");

var _condition = require("./functions/condition.js");

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

var _talents = /*#__PURE__*/new WeakMap();

var Talent = /*#__PURE__*/function () {
  function Talent() {
    _classCallCheck(this, Talent);

    _classPrivateFieldInitSpec(this, _talents, {
      writable: true,
      value: void 0
    });
  }

  _createClass(Talent, [{
    key: "initial",
    value: function initial(_ref) {
      var talents = _ref.talents;

      _classPrivateFieldSet(this, _talents, talents);

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

      return (0, _condition.checkCondition)(property, condition);
    }
  }, {
    key: "get",
    value: function get(talentId) {
      var talent = _classPrivateFieldGet(this, _talents)[talentId];

      if (!talent) throw new Error("[ERROR] No Talent[".concat(talentId, "]"));
      return (0, _util.clone)(talent);
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

      var _iterator = _createForOfIteratorHelper(talends),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var talent = _step.value;

          var _iterator2 = _createForOfIteratorHelper(exclusive),
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

      for (var talentId in _classPrivateFieldGet(this, _talents)) {
        var _classPrivateFieldGet2 = _classPrivateFieldGet(this, _talents)[talentId],
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

        var _iterator3 = _createForOfIteratorHelper(talents),
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

      if (condition && !(0, _condition.checkCondition)(property, condition)) return null;
      return {
        effect: effect,
        grade: grade,
        name: name,
        description: description
      };
    }
  }]);

  return Talent;
}();

var _default = Talent;
exports["default"] = _default;