"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _util = require("./functions/util.js");

var _summary3 = require("./functions/summary.js");

var _life2 = _interopRequireDefault(require("./life.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

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

var _life = /*#__PURE__*/new WeakMap();

var _pages = /*#__PURE__*/new WeakMap();

var _talentSelected = /*#__PURE__*/new WeakMap();

var _totalMax = /*#__PURE__*/new WeakMap();

var _isEnd = /*#__PURE__*/new WeakMap();

var _selectedExtendTalent = /*#__PURE__*/new WeakMap();

var _hintTimeout = /*#__PURE__*/new WeakMap();

var App = /*#__PURE__*/function () {
  function App() {
    _classCallCheck(this, App);

    _classPrivateFieldInitSpec(this, _life, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _pages, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _talentSelected, {
      writable: true,
      value: new Set()
    });

    _classPrivateFieldInitSpec(this, _totalMax, {
      writable: true,
      value: 20
    });

    _classPrivateFieldInitSpec(this, _isEnd, {
      writable: true,
      value: false
    });

    _classPrivateFieldInitSpec(this, _selectedExtendTalent, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _hintTimeout, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(this, _life, new _life2["default"]());
  }

  _createClass(App, [{
    key: "initial",
    value: function () {
      var _initial = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _this = this;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.initPages();
                this["switch"]('loading');
                _context.next = 4;
                return _classPrivateFieldGet(this, _life).initial();

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

        _classPrivateFieldGet(_this2, _life).talentRandom().forEach(function (talent) {
          var li = createTalent(talent);
          ul.append(li);
          li.click(function () {
            if (li.hasClass('selected')) {
              li.removeClass('selected');

              _classPrivateFieldGet(_this2, _talentSelected)["delete"](talent);
            } else {
              if (_classPrivateFieldGet(_this2, _talentSelected).size == 3) {
                _this2.hint('只能选3个天赋');

                return;
              }

              var exclusive = _classPrivateFieldGet(_this2, _life).exclusive(Array.from(_classPrivateFieldGet(_this2, _talentSelected)).map(function (_ref2) {
                var id = _ref2.id;
                return id;
              }), talent.id);

              if (exclusive != null) {
                var _iterator = _createForOfIteratorHelper(_classPrivateFieldGet(_this2, _talentSelected)),
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

              _classPrivateFieldGet(_this2, _talentSelected).add(talent);
            }
          });
        });
      });
      talentPage.find('#next').click(function () {
        if (_classPrivateFieldGet(_this2, _talentSelected).size != 3) {
          _this2.hint('请选择3个天赋');

          return;
        }

        _classPrivateFieldSet(_this2, _totalMax, 20 + _classPrivateFieldGet(_this2, _life).getTalentAllocationAddition(Array.from(_classPrivateFieldGet(_this2, _talentSelected)).map(function (_ref3) {
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
        propertyPage.find('#total').text("\u53EF\u7528\u5C5E\u6027\u70B9\uFF1A".concat(_classPrivateFieldGet(_this2, _totalMax) - total()));
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
          if (total() == _classPrivateFieldGet(_this2, _totalMax)) {
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

          if (t > _classPrivateFieldGet(_this2, _totalMax)) {
            val -= t - _classPrivateFieldGet(_this2, _totalMax);
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
        var t = _classPrivateFieldGet(_this2, _totalMax);

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
        if (total() != _classPrivateFieldGet(_this2, _totalMax)) {
          _this2.hint("\u4F60\u8FD8\u6709".concat(_classPrivateFieldGet(_this2, _totalMax) - total(), "\u5C5E\u6027\u70B9\u6CA1\u6709\u5206\u914D\u5B8C"));

          return;
        }

        _classPrivateFieldGet(_this2, _life).restart({
          CHR: groups.CHR.get(),
          INT: groups.INT.get(),
          STR: groups.STR.get(),
          MNY: groups.MNY.get(),
          SPR: 5,
          TLT: Array.from(_classPrivateFieldGet(_this2, _talentSelected)).map(function (_ref4) {
            var id = _ref4.id;
            return id;
          })
        });

        _this2["switch"]('trajectory');

        _classPrivateFieldGet(_this2, _pages).trajectory.born();
      }); // Trajectory

      var trajectoryPage = $("\n        <div id=\"main\">\n            <ul id=\"lifeTrajectory\" class=\"lifeTrajectory\"></ul>\n            <button id=\"summary\" class=\"mainbtn\" style=\"top:auto; bottom:0.1rem\">\u4EBA\u751F\u603B\u7ED3</button>\n        </div>\n        ");
      trajectoryPage.find('#lifeTrajectory').click(function () {
        if (_classPrivateFieldGet(_this2, _isEnd)) return;

        var trajectory = _classPrivateFieldGet(_this2, _life).next();

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
          _classPrivateFieldSet(_this2, _isEnd, true);

          trajectoryPage.find('#summary').show();
        }
      });
      trajectoryPage.find('#summary').click(function () {
        _this2["switch"]('summary');
      }); // Summary

      var summaryPage = $("\n        <div id=\"main\">\n            <div class=\"head\">\u4EBA\u751F\u603B\u7ED3</div>\n            <ul id=\"judge\" class=\"judge\" style=\"bottom: calc(35% + 2.5rem)\">\n                <li class=\"grade2\"><span>\u989C\u503C\uFF1A</span>9\u7EA7 \u7F8E\u82E5\u5929\u4ED9</li>\n                <li><span>\u667A\u529B\uFF1A</span>4\u7EA7 \u667A\u529B\u4E00\u822C</li>\n                <li><span>\u4F53\u8D28\uFF1A</span>1\u7EA7 \u6781\u5EA6\u865A\u5F31</li>\n                <li><span>\u5BB6\u5883\uFF1A</span>6\u7EA7 \u5C0F\u5EB7\u4E4B\u5BB6</li>\n                <li><span>\u4EAB\u5E74\uFF1A</span>3\u5C81 \u65E9\u592D</li>\n                <li><span>\u5FEB\u4E50\uFF1A</span>3\u7EA7 \u4E0D\u592A\u5E78\u798F\u7684\u4EBA\u751F</li>\n            </ul>\n            <div class=\"head\" style=\"top:auto; bottom:35%\">\u5929\u8D4B\uFF0C\u4F60\u53EF\u4EE5\u9009\u4E00\u4E2A\uFF0C\u4E0B\u8F88\u5B50\u8FD8\u80FD\u62BD\u5230</div>\n            <ul id=\"talents\" class=\"selectlist\" style=\"top:calc(65% + 0.5rem); bottom:8rem\">\n                <li class=\"grade2b\">\u9ED1\u5E55\uFF08\u9762\u8BD5\u4E00\u5B9A\u6210\u529F\uFF09</li>\n            </ul>\n            <button id=\"again\" class=\"mainbtn\" style=\"top:auto; bottom:0.1em\"><span class=\"iconfont\">&#xe6a7;</span>\u518D\u6B21\u91CD\u5F00</button>\n        </div>\n        ");
      summaryPage.find('#again').click(function () {
        _this2.times++;

        _classPrivateFieldGet(_this2, _life).talentExtend(_classPrivateFieldGet(_this2, _selectedExtendTalent));

        _classPrivateFieldSet(_this2, _selectedExtendTalent, null);

        _classPrivateFieldGet(_this2, _talentSelected).clear();

        _classPrivateFieldSet(_this2, _totalMax, 20);

        _classPrivateFieldSet(_this2, _isEnd, false);

        _this2["switch"]('index');
      });

      _classPrivateFieldSet(this, _pages, {
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

            _classPrivateFieldSet(_this2, _totalMax, 20);
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

            _classPrivateFieldSet(_this2, _isEnd, false);
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

            _classPrivateFieldGet(_this2, _talentSelected).forEach(function (talent) {
              var li = createTalent(talent);
              talents.append(li);
              li.click(function () {
                if (li.hasClass('selected')) {
                  _classPrivateFieldSet(_this2, _selectedExtendTalent, null);

                  li.removeClass('selected');
                } else if (_classPrivateFieldGet(_this2, _selectedExtendTalent) != null) {
                  _this2.hint('只能继承一个天赋');

                  return;
                } else {
                  _classPrivateFieldSet(_this2, _selectedExtendTalent, talent.id);

                  li.addClass('selected');
                }
              });
            });

            var records = _classPrivateFieldGet(_this2, _life).getRecord();

            var s = function s(type, func) {
              var value = func(records.map(function (_ref6) {
                var v = _ref6[type];
                return v;
              }));

              var _summary = (0, _summary3.summary)(type, value),
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
              var _s = s('CHR', _util.max),
                  judge = _s.judge,
                  grade = _s.grade,
                  value = _s.value;

              return "<li class=\"grade".concat(grade, "\"><span>\u989C\u503C\uFF1A</span>").concat(value, " ").concat(judge, "</li>");
            }(), function () {
              var _s2 = s('INT', _util.max),
                  judge = _s2.judge,
                  grade = _s2.grade,
                  value = _s2.value;

              return "<li class=\"grade".concat(grade, "\"><span>\u667A\u529B\uFF1A</span>").concat(value, " ").concat(judge, "</li>");
            }(), function () {
              var _s3 = s('STR', _util.max),
                  judge = _s3.judge,
                  grade = _s3.grade,
                  value = _s3.value;

              return "<li class=\"grade".concat(grade, "\"><span>\u4F53\u8D28\uFF1A</span>").concat(value, " ").concat(judge, "</li>");
            }(), function () {
              var _s4 = s('MNY', _util.max),
                  judge = _s4.judge,
                  grade = _s4.grade,
                  value = _s4.value;

              return "<li class=\"grade".concat(grade, "\"><span>\u5BB6\u5883\uFF1A</span>").concat(value, " ").concat(judge, "</li>");
            }(), function () {
              var _s5 = s('SPR', _util.max),
                  judge = _s5.judge,
                  grade = _s5.grade,
                  value = _s5.value;

              return "<li class=\"grade".concat(grade, "\"><span>\u5FEB\u4E50\uFF1A</span>").concat(value, " ").concat(judge, "</li>");
            }(), function () {
              var _s6 = s('AGE', _util.max),
                  judge = _s6.judge,
                  grade = _s6.grade,
                  value = _s6.value;

              return "<li class=\"grade".concat(grade, "\"><span>\u4EAB\u5E74\uFF1A</span>").concat(value, " ").concat(judge, "</li>");
            }(), function () {
              var m = function m(type) {
                return (0, _util.max)(records.map(function (_ref7) {
                  var value = _ref7[type];
                  return value;
                }));
              };

              var value = Math.floor((0, _util.sum)(m('CHR'), m('INT'), m('STR'), m('MNY'), m('SPR')) * 2 + m('AGE') / 2);

              var _summary2 = (0, _summary3.summary)('SUM', value),
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
      var p = _classPrivateFieldGet(this, _pages)[page];

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

      if (_classPrivateFieldGet(this, _hintTimeout)) {
        clearTimeout(_classPrivateFieldGet(this, _hintTimeout));

        _classPrivateFieldSet(this, _hintTimeout, null);
      }

      hideBanners();
      requestAnimationFrame(function () {
        var banner = $(".banner.".concat(type));
        banner.addClass('visible');
        banner.find('.banner-message').text(message);

        if (type != 'error') {
          _classPrivateFieldSet(_this3, _hintTimeout, setTimeout(hideBanners, 3000));
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
}();

var _default = App;
exports["default"] = _default;