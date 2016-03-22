'use strict';

System.register([], function (_export, _context) {
    var __template, proto, TabBox;

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
    return {
        setters: [],
        execute: function () {
            __template = '<tab-box><tab-header>{{#cates}} {{#show}}<tab-item class="cur"data-id="{{cid}}"data-index="{{index}}">{{name}}</tab-item>{{/show}} {{^show}}<tab-item data-id="{{cid}}"data-index="{{index}}">{{name}}</tab-item>{{/show}} {{/cates}}</tab-header><tab-body>{{#cates}}<tab-block>{{content}}</tab-block>{{/cates}}</tab-body></tab-box>';
            __cmp__importComponentStyle("tab-box{width:480px;height:360px;border:1px solid darkolivegreen;display:block;overflow:hidden}tab-box tab-header{height:60px;line-height:60px;display:flex}tab-box tab-header tab-item{flex:1;text-align:center;background:green}tab-box tab-header tab-item.cur{background:#fff}tab-box tab-body{height:300px;overflow:hidden;display:block;font-size:0;white-space:nowrap;transform:translate3d(0, 0, 0);transition:transform 0.5s}tab-box tab-body tab-block{height:100%;width:480px;display:inline-block;font-size:14px;background:darkseagreen;box-sizing:border-box;border:10px solid #fff;padding:12px}", "TabBox");

            // 原型及生命周期方法
            proto = Object.create(HTMLElement.prototype, {
                createdCallback: {
                    value: function value() {
                        console.log('created!');
                    }
                },

                attachedCallback: {
                    value: function value() {
                        console.log('attached!');
                        this.items = this.querySelectorAll('tab-item');
                        this.body = this.querySelector('tab-body');
                        this.body.style.width = (this.items.length || 1) * 100 + '%';

                        var that = this;
                        this.addEventListener('click', function (e) {
                            var target = e.target;
                            if (target.tagName.toLowerCase() != 'tab-item') return;
                            var index = e.target.dataset.index;
                            that.switchItem(index);
                        }, false);
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


            // 原型方法
            proto.switchItem = function (index) {
                this.querySelector('.cur').classList.remove('cur');
                this.items[index].classList.add('cur');
                this.body.style.MozTransform = 'translate3d(' + -480 * index + 'px, 0, 0)';
                this.body.style.WebkitTransform = 'translate3d(' + -480 * index + 'px, 0, 0)';
                this.body.style.MsitTransform = 'translate3d(' + -480 * index + 'px, 0, 0)';
            };

            // 原型方法
            proto.render = function (data) {
                return Mustache.to_html(__template, data);
            };

            // 注册自定义标签
            TabBox = document.registerElement('tab-box', {
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
        }
    };
});