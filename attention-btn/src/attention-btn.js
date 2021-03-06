'use strict'

var stateData = [{
    text: '关注'
},{
    text: '取消关注'
},{
    text: '相互关注'
},{
    text: '已关注'
}];

module.exports = xtag.register('attention-btn', {
    content: '<i class="icon">+</i><span class="text"></span>',
    lifecycle: {
        created: function () {
            console.log('created!')
        },
        inserted: function () {
            console.log('inserted!')
            this.state = this.dataset.state;
            this.originUrl = this.dataset.originUrl;
            this.render();
        },
        removed: function () {
            console.log('removed!')
        },
        attributeChanged: function (attrName, oldValue, newValue) {
            console.log(attrName + 'attributeChanged!')
            switch(attrName){
                case 'data-state':
                    this.state = newValue||0;
                    this.render();
                    break;
            }
        }
    },
    methods: {
        render: function () {
            var state = this.state;
            this.querySelector('.text').innerText = stateData[state].text;
        }
    },
    events: {
        tap: function (e) {
            var that = this;
            fetch(this.originUrl).then(function(res) {
                console.log(res);
                if (res.ok){
                    res.json().then(function (data) {
                        that.dataset.state = data;
                    })
                }
            }, function(e) {
                console.log("Fetch failed!", e);
            });

        }
    }
});
