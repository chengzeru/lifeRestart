"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkCondition = checkCondition;

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function parseCondition(condition) {
  var conditions = [];
  var length = condition.length;
  var stack = [];
  stack.unshift(conditions);
  var cursor = 0;

  var catchString = function catchString(i) {
    var str = condition.substring(cursor, i).trim();
    cursor = i;
    if (str) stack[0].push(str);
  };

  for (var i = 0; i < length; i++) {
    switch (condition[i]) {
      case ' ':
        continue;

      case '(':
        catchString(i);
        cursor++;
        var sub = [];
        stack[0].push(sub);
        stack.unshift(sub);
        break;

      case ')':
        catchString(i);
        cursor++;
        stack.shift();
        break;

      case '|':
      case '&':
        catchString(i);
        catchString(i + 1);
        break;

      default:
        continue;
    }
  }

  catchString(length);
  return conditions;
}

function checkCondition(property, condition) {
  var conditions = parseCondition(condition);
  return checkParsedConditions(property, conditions);
}

function checkParsedConditions(property, conditions) {
  if (!Array.isArray(conditions)) return checkProp(property, conditions);
  if (conditions.length == 0) return true;
  if (conditions.length == 1) return checkParsedConditions(property, conditions[0]);
  var ret = checkParsedConditions(property, conditions[0]);

  for (var i = 1; i < conditions.length; i += 2) {
    switch (conditions[i]) {
      case '&':
        if (ret) ret = checkParsedConditions(property, conditions[i + 1]);
        break;

      case '|':
        if (ret) return true;
        ret = checkParsedConditions(property, conditions[i + 1]);
        break;

      default:
        return false;
    }
  }

  return ret;
}

function checkProp(property, condition) {
  var length = condition.length;
  var i = condition.search(/[><\!\?=]/);
  var prop = condition.substring(0, i);
  var symbol = condition.substring(i, i += condition[i + 1] == '=' ? 2 : 1);
  var d = condition.substring(i, length);
  var propData = property.get(prop);
  var conditionData = d[0] == '[' ? JSON.parse(d) : Number(d);

  switch (symbol) {
    case '>':
      return propData > conditionData;

    case '<':
      return propData < conditionData;

    case '>=':
      return propData >= conditionData;

    case '<=':
      return propData <= conditionData;

    case '=':
      if (Array.isArray(propData)) return propData.includes(conditionData);
      return propData == conditionData;

    case '!=':
      if (Array.isArray(propData)) return !propData.includes(conditionData);
      return propData == conditionData;

    case '?':
      if (Array.isArray(propData)) {
        var _iterator = _createForOfIteratorHelper(propData),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var p = _step.value;
            if (conditionData.includes(p)) return true;
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        return false;
      }

      return conditionData.includes(propData);

    case '!':
      if (Array.isArray(propData)) {
        var _iterator2 = _createForOfIteratorHelper(propData),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _p = _step2.value;
            if (conditionData.includes(_p)) return false;
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        return true;
      }

      return !conditionData.includes(propData);

    default:
      return false;
  }
}