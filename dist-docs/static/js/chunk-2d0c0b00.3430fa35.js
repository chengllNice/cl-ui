(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c0b00"],{"439d":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"doc-article monkey-view-doc"},[a("h1",[e._v("Tabs 标签页")]),a("p",[e._v("概述：导航选项卡组件，区分不同平级块内容。")]),e._m(0),a("code-wrap",{attrs:{id:"JCYF"}},[a("template",{slot:"description"},[a("p",[e._v("基础用法。"),a("code",[e._v("tab-pane")]),e._v("组件"),a("code",[e._v("c-key")]),e._v("是必选属性，唯一标识；"),a("code",[e._v("label")]),e._v("属性可以定义tab标签的名称，同时也支持"),a("code",[e._v("slot")]),e._v("实现label；"),a("code",[e._v("disabled")]),e._v("属性可以禁用标签页。"),a("code",[e._v("tabs")]),e._v("组件可以通过"),a("code",[e._v("v-model")]),e._v("实现双向绑定指定选中的tab页，值为"),a("code",[e._v("tab-pane")]),e._v("属性"),a("code",[e._v("c-key")]),e._v("的值。")])]),a("template",{slot:"title"},[e._v("基础用法 "),a("a",{attrs:{href:"#JCYF","data-title":"基础用法"}},[e._v("#")])]),a("template",{slot:"source"},[a("monkey-view-demo0")],1),a("template",{slot:"highlight"},[a("div",{directives:[{name:"highlight",rawName:"v-highlight"}]},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <Tabs v-model="activeTab">\n        <TabPane label="标签一" c-key="1" disabled>\n            标签一内容\n        </TabPane>\n        <TabPane label="标签二" c-key="2">\n            标签二内容\n        </TabPane>\n        <TabPane c-key="3">\n            <div slot="label">标签三</div>\n            标签三内容\n        </TabPane>\n        <TabPane label="标签四" c-key="4" disabled>\n            标签四内容\n        </TabPane>\n        <TabPane label="标签五" c-key="5">\n            标签五内容\n        </TabPane>\n    </Tabs>\n</template>\n<script>\n    export default {\n      data(){\n        return {\n          activeTab: \'2\'\n        }\n      }\n    }\n<\/script>\n\n')])])])])],2),a("code-wrap",{attrs:{id:"CC"}},[a("template",{slot:"description"},[a("p",[e._v("可以设置四种尺寸 "),a("code",[e._v("mini")]),a("code",[e._v("small")]),a("code",[e._v("large")]),e._v(" 不设置为默认尺寸。")])]),a("template",{slot:"title"},[e._v("尺寸 "),a("a",{attrs:{href:"#CC","data-title":"尺寸"}},[e._v("#")])]),a("template",{slot:"source"},[a("monkey-view-demo1")],1),a("template",{slot:"highlight"},[a("div",{directives:[{name:"highlight",rawName:"v-highlight"}]},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <h4>mini</h4>\n    <Tabs size="mini">\n        <TabPane label="标签一" c-key="1">\n            标签一内容\n        </TabPane>\n        <TabPane label="标签二" c-key="2">\n            标签二内容\n        </TabPane>\n        <TabPane c-key="3">\n            <div slot="label">标签三</div>\n            标签三内容\n        </TabPane>\n    </Tabs>\n    \n    <h4>small</h4>\n    <Tabs size="small">\n        <TabPane label="标签一" c-key="1">\n            标签一内容\n        </TabPane>\n        <TabPane label="标签二" c-key="2">\n            标签二内容\n        </TabPane>\n        <TabPane c-key="3">\n            <div slot="label">标签三</div>\n            标签三内容\n        </TabPane>\n    </Tabs>\n    \n    <h4>default</h4>\n    <Tabs>\n        <TabPane label="标签一" c-key="1">\n            标签一内容\n        </TabPane>\n        <TabPane label="标签二" c-key="2">\n            标签二内容\n        </TabPane>\n        <TabPane c-key="3">\n            <div slot="label">标签三</div>\n            标签三内容\n        </TabPane>\n    </Tabs>\n    \n    <h4>large</h4>\n    <Tabs size="large">\n        <TabPane label="标签一" c-key="1">\n            标签一内容\n        </TabPane>\n        <TabPane label="标签二" c-key="2">\n            标签二内容\n        </TabPane>\n        <TabPane c-key="3">\n            <div slot="label">标签三</div>\n            标签三内容\n        </TabPane>\n    </Tabs>\n</template>\n\n')])])])])],2),a("code-wrap",{attrs:{id:"KPLX"}},[a("template",{slot:"description"},[a("p",[e._v("设置"),a("code",[e._v('type="card"')]),e._v("可以实现卡片类型的tabs。")])]),a("template",{slot:"title"},[e._v("卡片类型 "),a("a",{attrs:{href:"#KPLX","data-title":"卡片类型"}},[e._v("#")])]),a("template",{slot:"source"},[a("monkey-view-demo2")],1),a("template",{slot:"highlight"},[a("div",{directives:[{name:"highlight",rawName:"v-highlight"}]},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <Tabs type="card">\n        <TabPane label="标签一" c-key="1">\n            标签一内容\n        </TabPane>\n        <TabPane label="标签二" c-key="2">\n            标签二内容\n        </TabPane>\n        <TabPane c-key="3">\n            <div slot="label">标签三</div>\n            标签三内容\n        </TabPane>\n    </Tabs>\n</template>\n\n')])])])])],2),a("code-wrap",{attrs:{id:"EWKZ"}},[a("template",{slot:"description"},[a("p",[a("code",[e._v("extra")]),e._v("slot支持额外扩展。")])]),a("template",{slot:"title"},[e._v("额外扩展 "),a("a",{attrs:{href:"#EWKZ","data-title":"额外扩展"}},[e._v("#")])]),a("template",{slot:"source"},[a("monkey-view-demo3")],1),a("template",{slot:"highlight"},[a("div",{directives:[{name:"highlight",rawName:"v-highlight"}]},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <Tabs align="left">\n        <Button size="small" slot="extra">ADD</Button>\n        <TabPane label="标签一" c-key="1">\n            标签一内容\n        </TabPane>\n        <TabPane label="标签二" c-key="2">\n            标签二内容\n        </TabPane>\n        <TabPane c-key="3">\n            <div slot="label">标签三</div>\n            标签三内容\n        </TabPane>\n    </Tabs>\n</template>\n\n')])])])])],2),a("code-wrap",{attrs:{id:"WZ"}},[a("template",{slot:"description"},[a("p",[e._v("设置"),a("code",[e._v("align")]),e._v("属性可以tabs在不同的位置出现，支持三种类型 "),a("code",[e._v("left")]),a("code",[e._v("center")]),a("code",[e._v("right")]),e._v("，默认为"),a("code",[e._v("left")]),e._v("。其中"),a("code",[e._v("left")]),a("code",[e._v("right")]),e._v("支持设置额外扩展，"),a("code",[e._v("center")]),e._v("不支持额外扩展。")])]),a("template",{slot:"title"},[e._v("位置 "),a("a",{attrs:{href:"#WZ","data-title":"位置"}},[e._v("#")])]),a("template",{slot:"source"},[a("monkey-view-demo4")],1),a("template",{slot:"highlight"},[a("div",{directives:[{name:"highlight",rawName:"v-highlight"}]},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <h4>left</h4>\n    <Tabs align="left">\n        <TabPane label="标签一" c-key="1">\n            标签一内容\n        </TabPane>\n        <TabPane label="标签二" c-key="2">\n            标签二内容\n        </TabPane>\n        <TabPane c-key="3">\n            <div slot="label">标签三</div>\n            标签三内容\n        </TabPane>\n    </Tabs>\n    \n    <h4>center</h4>\n    <Tabs align="center">\n        <TabPane label="标签一" c-key="1">\n            标签一内容\n        </TabPane>\n        <TabPane label="标签二" c-key="2">\n            标签二内容\n        </TabPane>\n        <TabPane c-key="3">\n            <div slot="label">标签三</div>\n            标签三内容\n        </TabPane>\n    </Tabs>\n    \n    <h4>right</h4>\n    <Tabs align="right">\n        <TabPane label="标签一" c-key="1">\n            标签一内容\n        </TabPane>\n        <TabPane label="标签二" c-key="2">\n            标签二内容\n        </TabPane>\n        <TabPane c-key="3">\n            <div slot="label">标签三</div>\n            标签三内容\n        </TabPane>\n    </Tabs>\n</template>\n\n')])])])])],2),a("code-wrap",{attrs:{id:"BK"}},[a("template",{slot:"description"},[a("p",[a("code",[e._v("border")]),e._v("属性设置边框。")])]),a("template",{slot:"title"},[e._v("边框 "),a("a",{attrs:{href:"#BK","data-title":"边框"}},[e._v("#")])]),a("template",{slot:"source"},[a("monkey-view-demo5")],1),a("template",{slot:"highlight"},[a("div",{directives:[{name:"highlight",rawName:"v-highlight"}]},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <Tabs border type="card">\n        <TabPane label="标签一" c-key="1">\n            标签一内容\n        </TabPane>\n        <TabPane label="标签二" c-key="2">\n            标签二内容\n        </TabPane>\n        <TabPane c-key="3">\n            <div slot="label">标签三</div>\n            标签三内容\n        </TabPane>\n    </Tabs>\n</template>\n\n')])])])])],2),a("code-wrap",{attrs:{id:"KGB"}},[a("template",{slot:"description"},[a("p",[e._v("设置"),a("code",[e._v("closable")]),e._v("属性实现可关闭的标签。")])]),a("template",{slot:"title"},[e._v("可关闭 "),a("a",{attrs:{href:"#KGB","data-title":"可关闭"}},[e._v("#")])]),a("template",{slot:"source"},[a("monkey-view-demo6")],1),a("template",{slot:"highlight"},[a("div",{directives:[{name:"highlight",rawName:"v-highlight"}]},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <Tabs closable type="card" @tab-remove="tabRemove">\n        <TabPane label="标签一" c-key="1">\n            标签一内容\n        </TabPane>\n        <TabPane label="标签二" c-key="2">\n            标签二内容\n        </TabPane>\n        <TabPane c-key="3">\n            <div slot="label">标签三</div>\n            标签三内容\n        </TabPane>\n    </Tabs>\n</template>\n<script>\n    export default {\n        data(){\n            return {\n                \n            }\n        },\n        methods: {\n            tabRemove(key){\n                this.$Message.info(`关闭key值为${key}标签`)\n            }\n        }\n    }\n<\/script>\n\n')])])])])],2),a("code-wrap",{attrs:{id:"JYDHXG"}},[a("template",{slot:"description"},[a("p",[a("code",[e._v("animation")]),e._v("属性控制是否使用动画效果，默认true。")])]),a("template",{slot:"title"},[e._v("禁用动画效果 "),a("a",{attrs:{href:"#JYDHXG","data-title":"禁用动画效果"}},[e._v("#")])]),a("template",{slot:"source"},[a("monkey-view-demo7")],1),a("template",{slot:"highlight"},[a("div",{directives:[{name:"highlight",rawName:"v-highlight"}]},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <Tabs :animation="false" type="card">\n        <TabPane label="标签一" c-key="1">\n            标签一内容\n        </TabPane>\n        <TabPane label="标签二" c-key="2">\n            标签二内容\n        </TabPane>\n        <TabPane c-key="3">\n            <div slot="label">标签三</div>\n            标签三内容\n        </TabPane>\n    </Tabs>\n</template>\n\n')])])])])],2),a("code-wrap",{attrs:{id:"ZDYYS"}},[a("template",{slot:"description"},[a("p",[a("code",[e._v("nav-style")]),e._v("属性设置支持自定义样式，详细配置见API。")])]),a("template",{slot:"title"},[e._v("自定义样式 "),a("a",{attrs:{href:"#ZDYYS","data-title":"自定义样式"}},[e._v("#")])]),a("template",{slot:"source"},[a("monkey-view-demo8")],1),a("template",{slot:"highlight"},[a("div",{directives:[{name:"highlight",rawName:"v-highlight"}]},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <Tabs :nav-style="navStyle">\n        <TabPane label="标签一" c-key="1">\n            标签一内容\n        </TabPane>\n        <TabPane label="标签二" c-key="2">\n            标签二内容\n        </TabPane>\n        <TabPane c-key="3">\n            <div slot="label">标签三</div>\n            标签三内容\n        </TabPane>\n    </Tabs>\n    \n    <Tabs type="card" :nav-style="navStyle">\n        <TabPane label="标签一" c-key="1">\n            标签一内容\n        </TabPane>\n        <TabPane label="标签二" c-key="2">\n            标签二内容\n        </TabPane>\n        <TabPane c-key="3">\n            <div slot="label">标签三</div>\n            标签三内容\n        </TabPane>\n    </Tabs>\n</template>\n<script>\n    export default {\n        data(){\n            return {\n                navStyle: {\n                    defaultBackground: \'#f8f8f9\',\n                    activeBackground: \'#ffffff\',\n                    defaultColor: \'#333333\',\n                    activeColor: \'#ff0000\',\n                    defaultBorderColor: \'#eeeeee\',\n                    activeBorderColor: \'#ff0000\',\n                }\n            }\n        }\n    }\n<\/script>\n\n')])])])])],2),e._m(1),e._m(2),e._m(3),e._m(4),e._m(5),e._m(6),e._m(7),e._m(8),e._m(9),e._m(10),e._m(11)],1)},l=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h2",{staticClass:"anchor-title",attrs:{id:"dai-ma-shi-li"}},[e._v("代码示例 "),a("a",{staticClass:"header-anchor",attrs:{href:"#dai-ma-shi-li"}},[e._v("#")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h2",{staticClass:"anchor-title",attrs:{id:"api"}},[e._v("API "),a("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[e._v("#")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h3",{staticClass:"anchor-title",attrs:{id:"tabs-props"}},[e._v("Tabs props "),a("a",{staticClass:"header-anchor",attrs:{href:"#tabs-props"}},[e._v("#")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("table",{staticClass:"doc-table"},[a("thead",[a("tr",[a("th",[e._v("属性")]),a("th",[e._v("类型")]),a("th",[e._v("说明")]),a("th",[e._v("默认值")])])]),a("tbody",[a("tr",[a("td",[e._v("type")]),a("td",[e._v("String")]),a("td",[e._v("标签页的类型，可选值 "),a("code",[e._v("card")]),a("code",[e._v("line")])]),a("td",[e._v("line")])]),a("tr",[a("td",[e._v("value")]),a("td",[e._v("String")]),a("td",[e._v("绑定的"),a("code",[e._v("tab-pane")]),e._v("属性"),a("code",[e._v("c-key")]),e._v("的值，可以使用v-model进行双向绑定")]),a("td",[e._v("-")])]),a("tr",[a("td",[e._v("size")]),a("td",[e._v("String")]),a("td",[e._v("尺寸，可选值 "),a("code",[e._v("mini")]),a("code",[e._v("small")]),a("code",[e._v("large")]),e._v("或者不设置")]),a("td",[e._v("-")])]),a("tr",[a("td",[e._v("closable")]),a("td",[e._v("Boolean")]),a("td",[e._v("是否可关闭")]),a("td",[e._v("-")])]),a("tr",[a("td",[e._v("align")]),a("td",[e._v("String")]),a("td",[e._v("标签页的位置，可选值 "),a("code",[e._v("left")]),a("code",[e._v("center")]),a("code",[e._v("right")]),e._v("，其中"),a("code",[e._v("left")]),a("code",[e._v("right")]),e._v("时可设置额外扩展，"),a("code",[e._v("center")]),e._v("时不可设置额外扩展")]),a("td",[e._v("left")])]),a("tr",[a("td",[e._v("border")]),a("td",[e._v("Boolean")]),a("td",[e._v("是否显示边框")]),a("td",[e._v("-")])]),a("tr",[a("td",[e._v("navStyle")]),a("td",[e._v("Object")]),a("td",[e._v("例如 "),a("code",[e._v("{defaultBackground: '', activeBackground: '',defaultColor: '',activeColor: '',defaultBorderColor: '',activeBorderColor: ''}")]),e._v("。"),a("code",[e._v("defaultBackground")]),e._v("为默认背景色；"),a("code",[e._v("activeBackground")]),e._v("为选中时的背景色；"),a("code",[e._v("defaultColor")]),e._v("为默认文字颜色；"),a("code",[e._v("activeColor")]),e._v("为选中时的文字颜色；"),a("code",[e._v("defaultBorderColor")]),e._v("为默认边框颜色；"),a("code",[e._v("activeBorderColor")]),e._v("为选中时的边框颜色。可以单独设置某一项而不必全部设置")]),a("td",[e._v("-")])]),a("tr",[a("td",[e._v("animation")]),a("td",[e._v("Boolean")]),a("td",[e._v("是否开启动画效果")]),a("td",[e._v("true")])])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h3",{staticClass:"anchor-title",attrs:{id:"tabs-event"}},[e._v("Tabs event "),a("a",{staticClass:"header-anchor",attrs:{href:"#tabs-event"}},[e._v("#")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("table",{staticClass:"doc-table"},[a("thead",[a("tr",[a("th",[e._v("事件名")]),a("th",[e._v("说明")]),a("th",[e._v("返回值")])])]),a("tbody",[a("tr",[a("td",[e._v("tab-click")]),a("td",[e._v("点击标签页时触发")]),a("td",[e._v("c-key")])]),a("tr",[a("td",[e._v("tab-remove")]),a("td",[e._v("关闭标签页时触发")]),a("td",[e._v("c-key")])])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h3",{staticClass:"anchor-title",attrs:{id:"tabs-slot"}},[e._v("Tabs slot "),a("a",{staticClass:"header-anchor",attrs:{href:"#tabs-slot"}},[e._v("#")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("table",{staticClass:"doc-table"},[a("thead",[a("tr",[a("th",[e._v("名称")]),a("th",[e._v("说明")])])]),a("tbody",[a("tr",[a("td",[e._v("extra")]),a("td",[e._v("额外扩展内容，"),a("code",[e._v('align="center"')]),e._v("时无效")])])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h3",{staticClass:"anchor-title",attrs:{id:"tabpane-props"}},[e._v("TabPane props "),a("a",{staticClass:"header-anchor",attrs:{href:"#tabpane-props"}},[e._v("#")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("table",{staticClass:"doc-table"},[a("thead",[a("tr",[a("th",[e._v("属性")]),a("th",[e._v("类型")]),a("th",[e._v("说明")]),a("th",[e._v("默认值")])])]),a("tbody",[a("tr",[a("td",[e._v("label")]),a("td",[e._v("String")]),a("td",[e._v("标签页的名称")]),a("td",[e._v("-")])]),a("tr",[a("td",[e._v("cKey")]),a("td",[e._v("String")]),a("td",[e._v("标签页的唯一标识，必选属性")]),a("td",[e._v("-")])]),a("tr",[a("td",[e._v("disabled")]),a("td",[e._v("Boolean")]),a("td",[e._v("是否禁用标签页")]),a("td",[e._v("-")])]),a("tr",[a("td",[e._v("order")]),a("td",[e._v("Number")]),a("td",[e._v("标签页的顺序，在"),a("code",[e._v("tab-pane")]),e._v("组件使用"),a("code",[e._v("v-if")]),e._v("属性时并不会按照预期的顺序进行排列，这时可以设置此属性实现预期标签的顺序，此值大于0并且不重复")]),a("td",[e._v("-")])])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h3",{staticClass:"anchor-title",attrs:{id:"tabpane-slot"}},[e._v("TabPane slot "),a("a",{staticClass:"header-anchor",attrs:{href:"#tabpane-slot"}},[e._v("#")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("table",{staticClass:"doc-table"},[a("thead",[a("tr",[a("th",[e._v("名称")]),a("th",[e._v("说明")])])]),a("tbody",[a("tr",[a("td",[e._v("label")]),a("td",[e._v("自定义"),a("code",[e._v("label")]),e._v("的内容")])])])])}],r=(a("5ab2"),a("6d57"),a("e10e"),a("ce3c"));function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function v(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){Object(r["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var c={name:"component-doc",components:{"monkey-view-demo0":function(){var e=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[[a("Tabs",{model:{value:e.activeTab,callback:function(t){e.activeTab=t},expression:"activeTab"}},[a("TabPane",{attrs:{label:"标签一","c-key":"1",disabled:""}},[e._v("\n            标签一内容\n        ")]),e._v(" "),a("TabPane",{attrs:{label:"标签二","c-key":"2"}},[e._v("\n            标签二内容\n        ")]),e._v(" "),a("TabPane",{attrs:{"c-key":"3"}},[a("div",{attrs:{slot:"label"},slot:"label"},[e._v("标签三")]),e._v("\n            标签三内容\n        ")]),e._v(" "),a("TabPane",{attrs:{label:"标签四","c-key":"4",disabled:""}},[e._v("\n            标签四内容\n        ")]),e._v(" "),a("TabPane",{attrs:{label:"标签五","c-key":"5"}},[e._v("\n            标签五内容\n        ")])],1)]],2)},t=[],a={data:function(){return{activeTab:"2"}}};return v({render:e,staticRenderFns:t},a)}(),"monkey-view-demo1":function(){var e=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[[a("h4",[e._v("mini")]),e._v(" "),a("Tabs",{attrs:{size:"mini"}},[a("TabPane",{attrs:{label:"标签一","c-key":"1"}},[e._v("\n            标签一内容\n        ")]),e._v(" "),a("TabPane",{attrs:{label:"标签二","c-key":"2"}},[e._v("\n            标签二内容\n        ")]),e._v(" "),a("TabPane",{attrs:{"c-key":"3"}},[a("div",{attrs:{slot:"label"},slot:"label"},[e._v("标签三")]),e._v("\n            标签三内容\n        ")])],1),e._v(" "),a("h4",[e._v("small")]),e._v(" "),a("Tabs",{attrs:{size:"small"}},[a("TabPane",{attrs:{label:"标签一","c-key":"1"}},[e._v("\n            标签一内容\n        ")]),e._v(" "),a("TabPane",{attrs:{label:"标签二","c-key":"2"}},[e._v("\n            标签二内容\n        ")]),e._v(" "),a("TabPane",{attrs:{"c-key":"3"}},[a("div",{attrs:{slot:"label"},slot:"label"},[e._v("标签三")]),e._v("\n            标签三内容\n        ")])],1),e._v(" "),a("h4",[e._v("default")]),e._v(" "),a("Tabs",[a("TabPane",{attrs:{label:"标签一","c-key":"1"}},[e._v("\n            标签一内容\n        ")]),e._v(" "),a("TabPane",{attrs:{label:"标签二","c-key":"2"}},[e._v("\n            标签二内容\n        ")]),e._v(" "),a("TabPane",{attrs:{"c-key":"3"}},[a("div",{attrs:{slot:"label"},slot:"label"},[e._v("标签三")]),e._v("\n            标签三内容\n        ")])],1),e._v(" "),a("h4",[e._v("large")]),e._v(" "),a("Tabs",{attrs:{size:"large"}},[a("TabPane",{attrs:{label:"标签一","c-key":"1"}},[e._v("\n            标签一内容\n        ")]),e._v(" "),a("TabPane",{attrs:{label:"标签二","c-key":"2"}},[e._v("\n            标签二内容\n        ")]),e._v(" "),a("TabPane",{attrs:{"c-key":"3"}},[a("div",{attrs:{slot:"label"},slot:"label"},[e._v("标签三")]),e._v("\n            标签三内容\n        ")])],1)]],2)},t=[],a={};return v({render:e,staticRenderFns:t},a)}(),"monkey-view-demo2":function(){var e=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[[a("Tabs",{attrs:{type:"card"}},[a("TabPane",{attrs:{label:"标签一","c-key":"1"}},[e._v("\n            标签一内容\n        ")]),e._v(" "),a("TabPane",{attrs:{label:"标签二","c-key":"2"}},[e._v("\n            标签二内容\n        ")]),e._v(" "),a("TabPane",{attrs:{"c-key":"3"}},[a("div",{attrs:{slot:"label"},slot:"label"},[e._v("标签三")]),e._v("\n            标签三内容\n        ")])],1)]],2)},t=[],a={};return v({render:e,staticRenderFns:t},a)}(),"monkey-view-demo3":function(){var e=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[[a("Tabs",{attrs:{align:"left"}},[a("Button",{attrs:{slot:"extra",size:"small"},slot:"extra"},[e._v("ADD")]),e._v(" "),a("TabPane",{attrs:{label:"标签一","c-key":"1"}},[e._v("\n            标签一内容\n        ")]),e._v(" "),a("TabPane",{attrs:{label:"标签二","c-key":"2"}},[e._v("\n            标签二内容\n        ")]),e._v(" "),a("TabPane",{attrs:{"c-key":"3"}},[a("div",{attrs:{slot:"label"},slot:"label"},[e._v("标签三")]),e._v("\n            标签三内容\n        ")])],1)]],2)},t=[],a={};return v({render:e,staticRenderFns:t},a)}(),"monkey-view-demo4":function(){var e=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[[a("h4",[e._v("left")]),e._v(" "),a("Tabs",{attrs:{align:"left"}},[a("TabPane",{attrs:{label:"标签一","c-key":"1"}},[e._v("\n            标签一内容\n        ")]),e._v(" "),a("TabPane",{attrs:{label:"标签二","c-key":"2"}},[e._v("\n            标签二内容\n        ")]),e._v(" "),a("TabPane",{attrs:{"c-key":"3"}},[a("div",{attrs:{slot:"label"},slot:"label"},[e._v("标签三")]),e._v("\n            标签三内容\n        ")])],1),e._v(" "),a("h4",[e._v("center")]),e._v(" "),a("Tabs",{attrs:{align:"center"}},[a("TabPane",{attrs:{label:"标签一","c-key":"1"}},[e._v("\n            标签一内容\n        ")]),e._v(" "),a("TabPane",{attrs:{label:"标签二","c-key":"2"}},[e._v("\n            标签二内容\n        ")]),e._v(" "),a("TabPane",{attrs:{"c-key":"3"}},[a("div",{attrs:{slot:"label"},slot:"label"},[e._v("标签三")]),e._v("\n            标签三内容\n        ")])],1),e._v(" "),a("h4",[e._v("right")]),e._v(" "),a("Tabs",{attrs:{align:"right"}},[a("TabPane",{attrs:{label:"标签一","c-key":"1"}},[e._v("\n            标签一内容\n        ")]),e._v(" "),a("TabPane",{attrs:{label:"标签二","c-key":"2"}},[e._v("\n            标签二内容\n        ")]),e._v(" "),a("TabPane",{attrs:{"c-key":"3"}},[a("div",{attrs:{slot:"label"},slot:"label"},[e._v("标签三")]),e._v("\n            标签三内容\n        ")])],1)]],2)},t=[],a={};return v({render:e,staticRenderFns:t},a)}(),"monkey-view-demo5":function(){var e=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[[a("Tabs",{attrs:{border:"",type:"card"}},[a("TabPane",{attrs:{label:"标签一","c-key":"1"}},[e._v("\n            标签一内容\n        ")]),e._v(" "),a("TabPane",{attrs:{label:"标签二","c-key":"2"}},[e._v("\n            标签二内容\n        ")]),e._v(" "),a("TabPane",{attrs:{"c-key":"3"}},[a("div",{attrs:{slot:"label"},slot:"label"},[e._v("标签三")]),e._v("\n            标签三内容\n        ")])],1)]],2)},t=[],a={};return v({render:e,staticRenderFns:t},a)}(),"monkey-view-demo6":function(){var e=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[[a("Tabs",{attrs:{closable:"",type:"card"},on:{"tab-remove":e.tabRemove}},[a("TabPane",{attrs:{label:"标签一","c-key":"1"}},[e._v("\n            标签一内容\n        ")]),e._v(" "),a("TabPane",{attrs:{label:"标签二","c-key":"2"}},[e._v("\n            标签二内容\n        ")]),e._v(" "),a("TabPane",{attrs:{"c-key":"3"}},[a("div",{attrs:{slot:"label"},slot:"label"},[e._v("标签三")]),e._v("\n            标签三内容\n        ")])],1)]],2)},t=[],a={data:function(){return{}},methods:{tabRemove:function(e){this.$Message.info("关闭key值为".concat(e,"标签"))}}};return v({render:e,staticRenderFns:t},a)}(),"monkey-view-demo7":function(){var e=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[[a("Tabs",{attrs:{animation:!1,type:"card"}},[a("TabPane",{attrs:{label:"标签一","c-key":"1"}},[e._v("\n            标签一内容\n        ")]),e._v(" "),a("TabPane",{attrs:{label:"标签二","c-key":"2"}},[e._v("\n            标签二内容\n        ")]),e._v(" "),a("TabPane",{attrs:{"c-key":"3"}},[a("div",{attrs:{slot:"label"},slot:"label"},[e._v("标签三")]),e._v("\n            标签三内容\n        ")])],1)]],2)},t=[],a={};return v({render:e,staticRenderFns:t},a)}(),"monkey-view-demo8":function(){var e=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[[a("Tabs",{attrs:{"nav-style":e.navStyle}},[a("TabPane",{attrs:{label:"标签一","c-key":"1"}},[e._v("\n            标签一内容\n        ")]),e._v(" "),a("TabPane",{attrs:{label:"标签二","c-key":"2"}},[e._v("\n            标签二内容\n        ")]),e._v(" "),a("TabPane",{attrs:{"c-key":"3"}},[a("div",{attrs:{slot:"label"},slot:"label"},[e._v("标签三")]),e._v("\n            标签三内容\n        ")])],1),e._v(" "),a("Tabs",{attrs:{type:"card","nav-style":e.navStyle}},[a("TabPane",{attrs:{label:"标签一","c-key":"1"}},[e._v("\n            标签一内容\n        ")]),e._v(" "),a("TabPane",{attrs:{label:"标签二","c-key":"2"}},[e._v("\n            标签二内容\n        ")]),e._v(" "),a("TabPane",{attrs:{"c-key":"3"}},[a("div",{attrs:{slot:"label"},slot:"label"},[e._v("标签三")]),e._v("\n            标签三内容\n        ")])],1)]],2)},t=[],a={data:function(){return{navStyle:{defaultBackground:"#f8f8f9",activeBackground:"#ffffff",defaultColor:"#333333",activeColor:"#ff0000",defaultBorderColor:"#eeeeee",activeBorderColor:"#ff0000"}}}};return v({render:e,staticRenderFns:t},a)}()}},i=c,o=a("9ca4"),b=Object(o["a"])(i,n,l,!1,null,null,null);t["default"]=b.exports}}]);
//# sourceMappingURL=chunk-2d0c0b00.3430fa35.js.map