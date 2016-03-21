'use strict';

System.register([], function (_export, _context) {
    var template, a, Greeter, greeter;
    return {
        setters: [],
        execute: function () {
            template = '<article class="new-box"><dl class="new-content"><dt class="new-img"><img src="{{pic}}"alt=""></dt><dd><h2 class="new-title">{{title}}</h2><div class="new-body">{{content}}</div></dd></dl></article>';
            a = require('./a.js');

            exports.done = function (name) {
                a.done();
                console.log(name);
            };

            Greeter = function () {
                function Greeter(message) {
                    this.greeting = message;
                }
                Greeter.prototype.greet = function () {
                    return "Hello, " + this.greeting;
                };
                return Greeter;
            }();

            greeter = new Greeter("world");
        }
    };
});