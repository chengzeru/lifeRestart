"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clone = clone;
exports.max = max;
exports.min = min;
exports.sum = sum;
exports.average = average;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function clone(value) {
  switch (_typeof(value)) {
    case 'object':
      if (Array.isArray(value)) return value.map(function (v) {
        return clone(v);
      });
      var newObj = {};

      for (var key in value) {
        newObj[key] = clone(value[key]);
      }

      return newObj;

    default:
      return value;
  }
}

function max() {
  for (var _len = arguments.length, arr = new Array(_len), _key = 0; _key < _len; _key++) {
    arr[_key] = arguments[_key];
  }

  return Math.max.apply(Math, _toConsumableArray(arr.flat()));
}

function min() {
  for (var _len2 = arguments.length, arr = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    arr[_key2] = arguments[_key2];
  }

  return Math.min.apply(Math, _toConsumableArray(arr.flat()));
}

function sum() {
  var s = 0;

  for (var _len3 = arguments.length, arr = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    arr[_key3] = arguments[_key3];
  }

  arr.flat().forEach(function (v) {
    return s += v;
  });
  return s;
}

function average() {
  for (var _len4 = arguments.length, arr = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    arr[_key4] = arguments[_key4];
  }

  var s = sum.apply(void 0, arr);
  return s / arr.flat().length;
}