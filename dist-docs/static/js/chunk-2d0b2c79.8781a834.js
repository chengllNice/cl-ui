(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b2c79"],{2621:function(t,e,r){"use strict";r.r(e);var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"doc-article monkey-view-doc"},[r("h1",[t._v("Progress 进度条")]),r("p",[t._v("展示当前操作的进度。比如文件上传。")]),t._m(0),r("code-wrap",{attrs:{id:"JCYF"}},[r("template",{slot:"description"},[r("p",[t._v("可以设置 "),r("code",[t._v("status")]),t._v("属性控制进度条的状态，可选值 "),r("code",[t._v("active")]),r("code",[t._v("success")]),r("code",[t._v("error")]),r("code",[t._v("warning")]),t._v("。")]),r("p",[t._v("可以设置 "),r("code",[t._v("show-info")]),t._v("属性设置是否显示info信息。")]),r("p",[t._v("可以使用 "),r("code",[t._v("slot模式")]),t._v("定义info信息。")])]),r("template",{slot:"title"},[t._v("基础用法 "),r("a",{attrs:{href:"#JCYF","data-title":"基础用法"}},[t._v("#")])]),r("template",{slot:"source"},[r("monkey-view-demo0")],1),r("template",{slot:"highlight"},[r("p"),r("p"),r("div",{directives:[{name:"highlight",rawName:"v-highlight"}]},[r("pre",{pre:!0},[r("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n    <Progress :percent="25"></Progress>\n    <Progress :percent="30" status="active"></Progress>\n    <Progress :percent="30" status="success"></Progress>\n    <Progress :percent="30" status="error"></Progress>\n    <Progress :percent="30" status="warning"></Progress>\n    <Progress :percent="30">\n        <span>30</span>\n    </Progress>\n    <Progress :percent="30" status="warning" :show-info="false"></Progress>\n</template>\n\n')])])])])],2),r("code-wrap",{attrs:{id:"DYKDHBFBNZXS"}},[r("template",{slot:"description"},[r("p",[t._v("可以设置 "),r("code",[t._v("stroke-width")]),t._v("属性控制进度条的宽度。")]),r("p",[t._v("可以设置 "),r("code",[t._v("infoInside")]),t._v("属性设置info信息内置显示。")])]),r("template",{slot:"title"},[t._v("定义宽度和百分比内置显示 "),r("a",{attrs:{href:"#DYKDHBFBNZXS","data-title":"定义宽度和百分比内置显示"}},[t._v("#")])]),r("template",{slot:"source"},[r("monkey-view-demo1")],1),r("template",{slot:"highlight"},[r("p"),r("div",{directives:[{name:"highlight",rawName:"v-highlight"}]},[r("pre",{pre:!0},[r("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n    <Progress stroke-width="25px" :percent="25"></Progress>\n    <Progress stroke-width="25px" infoInside :percent="25"></Progress>\n</template>\n\n')])])])])],2),r("code-wrap",{attrs:{id:"GSHXX"}},[r("template",{slot:"description"},[r("p",[t._v("可以设置 "),r("code",[t._v("valueFormat")]),t._v("属性格式化info信息。该属性需要传入一个 "),r("code",[t._v("function")]),t._v("类型的值。")])]),r("template",{slot:"title"},[t._v("格式化info信息 "),r("a",{attrs:{href:"#GSHXX","data-title":"格式化info信息"}},[t._v("#")])]),r("template",{slot:"source"},[r("monkey-view-demo2")],1),r("template",{slot:"highlight"},[r("div",{directives:[{name:"highlight",rawName:"v-highlight"}]},[r("pre",{pre:!0},[r("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n    <Progress :percent="25" :valueFormat="valueFormat"></Progress>\n</template>\n<script>\n    export default {\n      data(){\n        return {\n          \n        }\n      },\n      methods: {\n        valueFormat(value){\n          return value + \'百分比\'\n        }\n      }\n    }\n<\/script>\n\n')])])])])],2),r("code-wrap",{attrs:{id:"ZDYYS"}},[r("template",{slot:"description"},[r("p",[t._v("自定义颜色支持渐变色。")]),r("p",[t._v("可以设置 "),r("code",[t._v("bar-color")]),t._v("属性定义进度颜色。")]),r("p",[t._v("可以设置 "),r("code",[t._v("rail-color")]),t._v("属性定义轨道颜色。")])]),r("template",{slot:"title"},[t._v("自定义颜色 "),r("a",{attrs:{href:"#ZDYYS","data-title":"自定义颜色"}},[t._v("#")])]),r("template",{slot:"source"},[r("monkey-view-demo3")],1),r("template",{slot:"highlight"},[r("p"),r("p"),r("div",{directives:[{name:"highlight",rawName:"v-highlight"}]},[r("pre",{pre:!0},[r("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n    <Progress bar-color="#909399" rail-color="#e8e8e8" :percent="25"></Progress>\n    <Progress bar-color="linear-gradient(to left, #ffffff, pink)" rail-color="#e8e8e8" :percent="25"></Progress>\n</template>\n\n')])])])])],2),r("code-wrap",{attrs:{id:"YXJDT"}},[r("template",{slot:"description"},[r("p",[t._v("可以设置 "),r("code",[t._v("type='circle'")]),t._v("属性实现圆形进度条。")]),r("p",[t._v("可以设置 "),r("code",[t._v("width")]),t._v("属性控制圆形进度条的大小。")]),r("p",[t._v("可以使用 "),r("code",[t._v("strokeWidth")]),t._v("属性控制圆形进度条的线的宽度。")])]),r("template",{slot:"title"},[t._v("圆形进度条 "),r("a",{attrs:{href:"#YXJDT","data-title":"圆形进度条"}},[t._v("#")])]),r("template",{slot:"source"},[r("monkey-view-demo4")],1),r("template",{slot:"highlight"},[r("p"),r("p"),r("div",{directives:[{name:"highlight",rawName:"v-highlight"}]},[r("pre",{pre:!0},[r("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n    <Progress :percent="percent" type="circle"></Progress>\n    <ButtonGroup>\n        <Button icon="plus" @click="percentChange(\'plus\')"></Button>\n        <Button icon="minus" @click="percentChange(\'minus\')"></Button>\n    </ButtonGroup>\n    <br>\n    <Progress :percent="25" type="circle"></Progress>\n    <Progress :percent="25" type="circle" width="100"></Progress>\n    <Progress :percent="25" type="circle" width="100" strokeWidth="5"></Progress>\n    <br>\n    <Progress :percent="25" type="circle" status="success"></Progress>\n    <Progress :percent="25" type="circle" status="error"></Progress>\n    <Progress :percent="25" type="circle" status="warning"></Progress>\n</template>\n<script>\n    export default {\n      data(){\n        return {\n          percent: 0\n        }\n      },\n      methods: {\n        percentChange(type){\n          this.percent = type === \'plus\' ? this.percent + 10 : this.percent - 10;\n          if(this.percent > 100){\n            this.percent = 100\n          }else if(this.percent < 0){\n            this.percent = 0\n          }\n        }\n      }\n    }\n<\/script>\n')])])])])],2),r("code-wrap",{attrs:{id:"YBPJDT"}},[r("template",{slot:"description"},[r("p",[t._v("可以设置 "),r("code",[t._v("type='dashboard'")]),t._v("属性实现仪表盘式进度条。")])]),r("template",{slot:"title"},[t._v("仪表盘进度条 "),r("a",{attrs:{href:"#YBPJDT","data-title":"仪表盘进度条"}},[t._v("#")])]),r("template",{slot:"source"},[r("monkey-view-demo5")],1),r("template",{slot:"highlight"},[r("div",{directives:[{name:"highlight",rawName:"v-highlight"}]},[r("pre",{pre:!0},[r("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n    <Progress :percent="80" type="dashboard"></Progress>\n    <Progress :percent="25" type="dashboard" width="100"></Progress>\n    <Progress :percent="25" type="dashboard" width="100" strokeWidth="5"></Progress>\n</template>\n\n')])])])])],2),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5)],1)},n=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h2",{staticClass:"anchor-title",attrs:{id:"dai-ma-shi-li"}},[t._v("代码示例 "),r("a",{staticClass:"header-anchor",attrs:{href:"#dai-ma-shi-li"}},[t._v("#")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h2",{staticClass:"anchor-title",attrs:{id:"api"}},[t._v("API "),r("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h3",{staticClass:"anchor-title",attrs:{id:"progress-props"}},[t._v("Progress props "),r("a",{staticClass:"header-anchor",attrs:{href:"#progress-props"}},[t._v("#")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("table",{staticClass:"doc-table"},[r("thead",[r("tr",[r("th",[t._v("属性")]),r("th",[t._v("类型")]),r("th",[t._v("说明")]),r("th",[t._v("默认值")])])]),r("tbody",[r("tr",[r("td",[t._v("type")]),r("td",[t._v("String")]),r("td",[t._v("设置进度条的类型，可选值 "),r("code",[t._v("line")]),r("code",[t._v("circle")]),r("code",[t._v("dashboard")]),t._v("，分别为线性进度条、圆形进度条、仪表盘式进度条")]),r("td",[t._v("line")])]),r("tr",[r("td",[t._v("percent")]),r("td",[t._v("Number")]),r("td",[t._v("进度条进度值，必填项，范围0-100，百分比类型")]),r("td",[t._v("-")])]),r("tr",[r("td",[t._v("strokeWidth")]),r("td",[t._v("String, Number")]),r("td",[t._v("进度条线的宽度")]),r("td",[t._v("10")])]),r("tr",[r("td",[t._v("status")]),r("td",[t._v("String")]),r("td",[t._v("进度条状态")]),r("td",[t._v("-")])]),r("tr",[r("td",[t._v("valueFormat")]),r("td",[t._v("Function")]),r("td",[t._v("格式化进度值，默认格式化类型为percent + '%'")]),r("td",[t._v("-")])]),r("tr",[r("td",[t._v("showInfo")]),r("td",[t._v("Boolean")]),r("td",[t._v("是否显示进度信息")]),r("td",[t._v("true")])]),r("tr",[r("td",[t._v("infoInside")]),r("td",[t._v("Boolean")]),r("td",[t._v("进度信息内置，只在"),r("code",[t._v("inline")]),t._v("模式下有效")]),r("td",[t._v("-")])]),r("tr",[r("td",[t._v("railColor")]),r("td",[t._v("String")]),r("td",[t._v("进度条轨道颜色，支持渐变色")]),r("td",[t._v("-")])]),r("tr",[r("td",[t._v("barColor")]),r("td",[t._v("String")]),r("td",[t._v("进度条颜色，支持渐变色")]),r("td",[t._v("-")])]),r("tr",[r("td",[t._v("width")]),r("td",[t._v("String, Number")]),r("td",[t._v("设置进度条的宽度，圆形和仪表盘式进度条时有效")]),r("td",[t._v("126")])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h3",{staticClass:"anchor-title",attrs:{id:"progress-slot"}},[t._v("Progress slot "),r("a",{staticClass:"header-anchor",attrs:{href:"#progress-slot"}},[t._v("#")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("table",{staticClass:"doc-table"},[r("thead",[r("tr",[r("th",[t._v("名称")]),r("th",[t._v("说明")])])]),r("tbody",[r("tr",[r("td",[t._v("-")]),r("td",[t._v("自定义进度信息的显示内容")])])])])}],o=(r("5ab2"),r("6d57"),r("e10e"),r("ce3c"));function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,s)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){Object(o["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var i={name:"component-doc",components:{"monkey-view-demo0":function(){var t=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[[r("Progress",{attrs:{percent:25}}),t._v(" "),r("Progress",{attrs:{percent:30,status:"active"}}),t._v(" "),r("Progress",{attrs:{percent:30,status:"success"}}),t._v(" "),r("Progress",{attrs:{percent:30,status:"error"}}),t._v(" "),r("Progress",{attrs:{percent:30,status:"warning"}}),t._v(" "),r("Progress",{attrs:{percent:30}},[r("span",[t._v("30")])]),t._v(" "),r("Progress",{attrs:{percent:30,status:"warning","show-info":!1}})]],2)},e=[],r={};return c({render:t,staticRenderFns:e},r)}(),"monkey-view-demo1":function(){var t=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[[r("Progress",{attrs:{"stroke-width":"25px",percent:25}}),t._v(" "),r("Progress",{attrs:{"stroke-width":"25px",infoInside:"",percent:25}})]],2)},e=[],r={};return c({render:t,staticRenderFns:e},r)}(),"monkey-view-demo2":function(){var t=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[[r("Progress",{attrs:{percent:25,valueFormat:t.valueFormat}})]],2)},e=[],r={data:function(){return{}},methods:{valueFormat:function(t){return t+"百分比"}}};return c({render:t,staticRenderFns:e},r)}(),"monkey-view-demo3":function(){var t=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[[r("Progress",{attrs:{"bar-color":"#909399","rail-color":"#e8e8e8",percent:25}}),t._v(" "),r("Progress",{attrs:{"bar-color":"linear-gradient(to left, #ffffff, pink)","rail-color":"#e8e8e8",percent:25}})]],2)},e=[],r={};return c({render:t,staticRenderFns:e},r)}(),"monkey-view-demo4":function(){var t=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[[r("Progress",{attrs:{percent:t.percent,type:"circle"}}),t._v(" "),r("ButtonGroup",[r("Button",{attrs:{icon:"plus"},on:{click:function(e){return t.percentChange("plus")}}}),t._v(" "),r("Button",{attrs:{icon:"minus"},on:{click:function(e){return t.percentChange("minus")}}})],1),t._v(" "),r("br"),t._v(" "),r("Progress",{attrs:{percent:25,type:"circle"}}),t._v(" "),r("Progress",{attrs:{percent:25,type:"circle",width:"100"}}),t._v(" "),r("Progress",{attrs:{percent:25,type:"circle",width:"100",strokeWidth:"5"}}),t._v(" "),r("br"),t._v(" "),r("Progress",{attrs:{percent:25,type:"circle",status:"success"}}),t._v(" "),r("Progress",{attrs:{percent:25,type:"circle",status:"error"}}),t._v(" "),r("Progress",{attrs:{percent:25,type:"circle",status:"warning"}})]],2)},e=[],r={data:function(){return{percent:0}},methods:{percentChange:function(t){this.percent="plus"===t?this.percent+10:this.percent-10,this.percent>100?this.percent=100:this.percent<0&&(this.percent=0)}}};return c({render:t,staticRenderFns:e},r)}(),"monkey-view-demo5":function(){var t=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[[r("Progress",{attrs:{percent:80,type:"dashboard"}}),t._v(" "),r("Progress",{attrs:{percent:25,type:"dashboard",width:"100"}}),t._v(" "),r("Progress",{attrs:{percent:25,type:"dashboard",width:"100",strokeWidth:"5"}})]],2)},e=[],r={};return c({render:t,staticRenderFns:e},r)}()}},p=i,l=r("9ca4"),v=Object(l["a"])(p,s,n,!1,null,null,null);e["default"]=v.exports}}]);
//# sourceMappingURL=chunk-2d0b2c79.8781a834.js.map