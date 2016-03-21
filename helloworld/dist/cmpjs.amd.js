define(['exports', './a.js'], function (exports, a) {
  'use strict';

  var template = '<article class="new-box"><dl class="new-content"><dt class="new-img"><img src="{{pic}}"alt=""></dt><dd><h2 class="new-title">{{title}}</h2><div class="new-body">{{content}}</div></dd></dl></article>';

  exports.done = function () {
    a.done();
  };
});