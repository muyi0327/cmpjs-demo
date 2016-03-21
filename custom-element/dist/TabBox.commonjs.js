'use strict';

var __template = '<tab-box><tab-header>{{#cates}}<tab-item class="cur"data-id="{{cid}}"data-index="{{@index}}">{{name}}</tab-item>{{/cates}}</tab-header><tab-body>{{#cates}}<tab-block>{{content}}</tab-block>{{/cates}}</tab-body></tab-box>';
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
__cmp__importComponentStyle("tab-box{width:480px;height:360px;border:1px solid darkolivegreen;display:block}tab-box tab-header{height:60px;line-height:60px;display:flex}tab-box tab-header tab-item{flex:1;text-align:center;background:green}tab-box tab-header tab-item.cur{background:#fff}tab-box tab-body{height:300px;position:relative;display:block}tab-box tab-body tab-block{width:100%;height:100%;background:darkseagreen;box-sizing:border-box;border:10px solid #fff;position:absolute;z-index:1;top:0;padding:12px}", "TabBox");

// 原型及生命周期方法
var proto = Object.create(HTMLElement.prototype, {
    createdCallback: {
        value: function value() {
            console.log('created!');
        }
    },
    detachedCallback: {
        value: function value() {
            console.log('detached!');
        }
    },
    attributeChangedCallback: {
        value: function value(attr, oldV, newV) {
            console.log('attribute changed!');
            console.log(attr);
            console.log(oldV);
            console.log(newV);
        }
    }
});

proto.attachedCallback = function () {
    console.log('attached!');
    var that;
    this.addEventListener('click', function (e) {
        var index = e.terget.dataSet.index;
        console.log(e);
        that.switchItem(index);
    }, false);
};

// 原型方法
proto.switchItem = function (index) {
    consolg.log(index);
};

// 原型方法
proto.render = function (data) {
    return Mustache.to_html(__template, data);
};

// 注册自定义标签
var TabBox = document.registerElement('tag-box', {
    prototype: proto
});

// 注册自定义标签
['tab-header', 'tab-item', 'tab-body', 'tab-block'].forEach(function (tagName) {
    document.registerElement(tagName, {
        prototype: Object.create(HTMLElement.prototype)
    });
});

window.TabBox = TabBox;

module.exports = TabBox;