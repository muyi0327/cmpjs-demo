xtag.register('x-foo', {
    content: '?input /?',
    lifecycle:{
        created: function(){
            this.xtag.input = this.querySelector('input');
        }
    },
    accessors: {
        disabled: {
            // The `attribute` property links node.bar gets/sets to the bar="" attribute
            attribute: {
                // Including the boolean property turns this into a boolean attribute/setter
                boolean: true,
                // The property field allows you reflect changes down to a cached node.
                // Notice the input element is cached to the `input` property in `created`
                property: 'input'
            },
            get: function(){
                // do something when the getter is accessed
            },
            set: function(value){
                // act on the value being passed to the setter
            }
        }
    }
});