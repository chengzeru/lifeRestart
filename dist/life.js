"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _property2 = _interopRequireDefault(require("./property.js"));

var _event2 = _interopRequireDefault(require("./event.js"));

var _talent2 = _interopRequireDefault(require("./talent.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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

var _property = /*#__PURE__*/new WeakMap();

var _event = /*#__PURE__*/new WeakMap();

var _talent = /*#__PURE__*/new WeakMap();

var _triggerTalents = /*#__PURE__*/new WeakMap();

var Life = /*#__PURE__*/function () {
  function Life() {
    _classCallCheck(this, Life);

    _classPrivateFieldInitSpec(this, _property, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _event, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _talent, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _triggerTalents, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(this, _property, new _property2["default"]());

    _classPrivateFieldSet(this, _event, new _event2["default"]());

    _classPrivateFieldSet(this, _talent, new _talent2["default"]());
  }

  _createClass(Life, [{
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

                _classPrivateFieldGet(this, _property).initial({
                  age: age
                });

                _classPrivateFieldGet(this, _talent).initial({
                  talents: talents
                });

                _classPrivateFieldGet(this, _event).initial({
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
      _classPrivateFieldSet(this, _triggerTalents, new Set());

      _classPrivateFieldGet(this, _property).restart(allocation);

      this.doTalent();

      _classPrivateFieldGet(this, _property).record();
    }
  }, {
    key: "getTalentAllocationAddition",
    value: function getTalentAllocationAddition(talents) {
      return _classPrivateFieldGet(this, _talent).allocationAddition(talents);
    }
  }, {
    key: "next",
    value: function next() {
      var _classPrivateFieldGet2 = _classPrivateFieldGet(this, _property).ageNext(),
          age = _classPrivateFieldGet2.age,
          event = _classPrivateFieldGet2.event,
          talent = _classPrivateFieldGet2.talent;

      var talentContent = this.doTalent(talent);
      var eventContent = this.doEvent(this.random(event));

      _classPrivateFieldGet(this, _property).record();

      var isEnd = _classPrivateFieldGet(this, _property).isEnd();

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

      if (talents) _classPrivateFieldGet(this, _property).change(_classPrivateFieldGet(this, _property).TYPES.TLT, talents);
      talents = _classPrivateFieldGet(this, _property).get(_classPrivateFieldGet(this, _property).TYPES.TLT).filter(function (talentId) {
        return !_classPrivateFieldGet(_this, _triggerTalents).has(talentId);
      });
      var contents = [];

      var _iterator = _createForOfIteratorHelper(talents),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var talentId = _step.value;

          var result = _classPrivateFieldGet(this, _talent)["do"](talentId, _classPrivateFieldGet(this, _property));

          if (!result) continue;

          _classPrivateFieldGet(this, _triggerTalents).add(talentId);

          var effect = result.effect,
              name = result.name,
              description = result.description,
              grade = result.grade;
          contents.push({
            type: _classPrivateFieldGet(this, _property).TYPES.TLT,
            name: name,
            grade: grade,
            description: description
          });
          if (!effect) continue;

          _classPrivateFieldGet(this, _property).effect(effect);
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
      var _classPrivateFieldGet3 = _classPrivateFieldGet(this, _event)["do"](eventId, _classPrivateFieldGet(this, _property)),
          effect = _classPrivateFieldGet3.effect,
          next = _classPrivateFieldGet3.next,
          description = _classPrivateFieldGet3.description,
          postEvent = _classPrivateFieldGet3.postEvent;

      _classPrivateFieldGet(this, _property).change(_classPrivateFieldGet(this, _property).TYPES.EVT, eventId);

      _classPrivateFieldGet(this, _property).effect(effect);

      var content = {
        type: _classPrivateFieldGet(this, _property).TYPES.EVT,
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
        var _ref2 = _slicedToArray(_ref, 1),
            eventId = _ref2[0];

        return _classPrivateFieldGet(_this2, _event).check(eventId, _classPrivateFieldGet(_this2, _property));
      });
      var totalWeights = 0;

      var _iterator2 = _createForOfIteratorHelper(events),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _step2$value = _slicedToArray(_step2.value, 2),
              weight = _step2$value[1];

          totalWeights += weight;
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      var random = Math.random() * totalWeights;

      var _iterator3 = _createForOfIteratorHelper(events),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var _step3$value = _slicedToArray(_step3.value, 2),
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
      return _classPrivateFieldGet(this, _talent).talentRandom(JSON.parse(localStorage.extendTalent || 'null'));
    }
  }, {
    key: "talentExtend",
    value: function talentExtend(talentId) {
      localStorage.extendTalent = JSON.stringify(talentId);
    }
  }, {
    key: "getRecord",
    value: function getRecord() {
      return _classPrivateFieldGet(this, _property).getRecord();
    }
  }, {
    key: "exclusive",
    value: function exclusive(talents, _exclusive) {
      return _classPrivateFieldGet(this, _talent).exclusive(talents, _exclusive);
    }
  }]);

  return Life;
}();

var _default = Life;
exports["default"] = _default;