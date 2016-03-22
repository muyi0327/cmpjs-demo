(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define([], factory);
    } else if (typeof exports !== "undefined") {
        factory();
    } else {
        var mod = {
            exports: {}
        };
        factory();
        global.unknown = mod.exports;
    }
})(this, function () {
    'use strict';

    var __template = '<tab-box><tab-header>{{#cates}} {{#show}}<tab-item class="cur"data-id="{{cid}}"data-index="{{index}}">{{name}}</tab-item>{{/show}} {{^show}}<tab-item data-id="{{cid}}"data-index="{{index}}">{{name}}</tab-item>{{/show}} {{/cates}}</tab-header><tab-body>{{#cates}}<tab-block>{{content}}</tab-block>{{/cates}}</tab-body></tab-box>';
    function __cmp__importComponentStyle(code, componentName) {
        var styleId = 'cmpjs_' + componentName;
        if (document.querySelector('#' + styleId)) {
            return;
        }
        var style = document.createElement("style");
        style.type = "text/css";
        style.id = styleId;
        try {
            style.appendChild(document.createTextNode(code));
        } catch (ex) {
            style.styleSheet.cssText = code;
        }
        var head = document.getElementsByTagName("head")[0];
        head.appendChild(style);
    }
    __cmp__importComponentStyle("tab-box{width:480px;height:360px;border:1px solid darkolivegreen;display:block;overflow:hidden}tab-box tab-header{height:60px;line-height:60px;display:flex}tab-box tab-header tab-item{flex:1;text-align:center;background:green}tab-box tab-header tab-item.cur{background:#fff}tab-box tab-body{height:300px;overflow:hidden;display:block;font-size:0;white-space:nowrap;transform:translate3d(0, 0, 0);transition:transform 0.5s}tab-box tab-body tab-block{height:100%;width:480px;display:inline-block;font-size:14px;background:darkseagreen;box-sizing:border-box;border:10px solid #fff;padding:12px}", "tab-box");
    var a = 123;
});