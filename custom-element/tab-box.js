
// 原型及生命周期方法
var proto = Object.create(HTMLElement.prototype, {
    createdCallback: {
        value: function () {
            console.log('created!');
        }
    },

    attachedCallback: {
        value: function () {
            console.log('attached!');
            this.items = this.querySelectorAll('tab-item');
            this.body = this.querySelector('tab-body');
            this.body.style.width = (this.items.length||1) * 100 + '%';

            var that=this;
            this.addEventListener('click', function (e) {
                var target = e.target;
                if (target.tagName.toLowerCase() != 'tab-item') return;
                var index = e.target.dataset.index;
                that.switchItem(index);
            }, false);
        }
    },

    detachedCallback: {
        value: function () {
            console.log('detached!');
        }
    },
    attributeChangedCallback: {
        value: function (attr, oldV, newV) {
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
    this.body.style.MozTransform = 'translate3d('+(-480*index)+'px, 0, 0)';
    this.body.style.WebkitTransform = 'translate3d('+(-480*index)+'px, 0, 0)';
    this.body.style.MsitTransform = 'translate3d('+(-480*index)+'px, 0, 0)';
};

// 原型方法
proto.render = function (data) {
    return Mustache.to_html(__template, data);
};

// 注册自定义标签
var TabBox = document.registerElement('tab-box', {
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
