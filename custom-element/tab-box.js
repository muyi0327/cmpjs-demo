
// 原型及生命周期方法
var proto = Object.create(HTMLElement.prototype, {
    createdCallback: {
        value:function(){
            console.log('created!');
        }
    },
    detachedCallback: {
        value:function(){
            console.log('detached!');
        }
    },
    attributeChangedCallback: {
        value:function(attr, oldV, newV){
            console.log('attribute changed!');
            console.log(attr);
            console.log(oldV);
            console.log(newV);
        }
    }
});

proto.attachedCallback = function(){
    console.log('attached!');
    var that;
    this.addEventListener('click', function(e){
        var index = e.terget.dataSet.index;
        console.log(e)
        that.switchItem(index);
    }, false);
}

// 原型方法
proto.switchItem = function(index){
    consolg.log(index);
};

// 原型方法
proto.render = function(data){
    return Mustache.to_html(__template, data);
};

// 注册自定义标签
var TabBox = document.registerElement('tag-box', {
    prototype: proto
});

// 注册自定义标签
['tab-header', 'tab-item', 'tab-body', 'tab-block'].forEach(function(tagName){
    document.registerElement(tagName, {
        prototype:  Object.create(HTMLElement.prototype)
    });
});

window.TabBox = TabBox;

module.exports = TabBox;