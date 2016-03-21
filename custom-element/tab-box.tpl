<tab-box>
    <tab-header>
    {{#cates}}
        <tab-item class="cur" data-id="{{cid}}" data-index="{{@index}}">{{name}}</tab-item>
    {{/cates}}
    </tab-header>
    <tab-body>
    {{#cates}}
        <tab-block>{{content}}</tab-block>
    {{/cates}}
    </tab-body>
</tab-box>
