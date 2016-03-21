'use strict';

System.register([], function (_export, _context) {
  var template, a;
  return {
    setters: [],
    execute: function () {
      template = '<article class="new-box"><dl class="new-content"><dt class="new-img"><img src="{{pic}}"alt=""></dt><dd><h2 class="new-title">{{title}}</h2><div class="new-body">{{content}}</div></dd></dl></article>';
      a = require('./a.js');

      exports.done = function () {
        a.done();
      };
    }
  };
});