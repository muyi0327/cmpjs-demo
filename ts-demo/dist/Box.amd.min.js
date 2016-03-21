define(['exports', './a.js'], function (exports, a) {
    'use strict';

    var template = '<article class="new-box"><dl class="new-content"><dt class="new-img"><img src="{{pic}}"alt=""></dt><dd><h2 class="new-title">{{title}}</h2><div class="new-body">{{content}}</div></dd></dl></article>';

    exports.done = function (name) {
        a.done();
        console.log(name);
    };
    var Greeter = function () {
        function Greeter(message) {
            this.greeting = message;
        }
        Greeter.prototype.greet = function () {
            return "Hello, " + this.greeting;
        };
        return Greeter;
    }();
    var greeter = new Greeter("world");
});