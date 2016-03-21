(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './a.js'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./a.js'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.a);
    global.unknown = mod.exports;
  }
})(this, function (exports, a) {
  'use strict';

  var template = '<article class="new-box"><dl class="new-content"><dt class="new-img"><img src="{{pic}}"alt=""></dt><dd><h2 class="new-title">{{title}}</h2><div class="new-body">{{content}}</div></dd></dl></article>';

  exports.done = function () {
    a.done();
  };
});