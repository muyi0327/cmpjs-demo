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
    content: '<i class="icon">+</i><span class="text">关注</span>',
    lifecycle: {
        created: function () {
            console.log('created!')
        },
        inserted: function () {
            console.log('inserted!')
            this.state = this.dataset.state;
        },
        removed: function () {
            console.log('removed!')
        },
        attributeChanged: function (attrName, oldValue, newValue) {
            console.log(attrName + 'attributeChanged!')
            switch(attrName){
                case 'data-state':
                    this.render({state:newValue});
                    break;
            }
        }
    },
    methods: {
        render: function (data) {
            var state = data.state;
            this.querySelector('.text').innerText = stateData[state].text;
        }
    },
    events: {
        tap: function (e) {
            var that = this;
            fetch("http://localhost:3015/api/user/attention").then(function(res) {
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