'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

var TabBox = function (_HTMLElement) {
    _inherits(TabBox, _HTMLElement);

    function TabBox() {
        _classCallCheck(this, TabBox);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(TabBox).apply(this, arguments));
    }

    _createClass(TabBox, [{
        key: 'createdCallback',
        value: function createdCallback() {}
    }, {
        key: 'attachedCallback',
        value: function attachedCallback() {}
    }, {
        key: 'detachedCallback',
        value: function detachedCallback() {}
    }, {
        key: 'attributeChanged',
        value: function attributeChanged() {}
    }, {
        key: 'switchItem',
        value: function switchItem() {}
    }, {
        key: 'render',
        value: function render() {}
    }]);

    return TabBox;
}(HTMLElement);

exports.default = TabBox;