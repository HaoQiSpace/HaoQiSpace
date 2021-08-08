(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{520:function(t,s,n){"use strict";n.r(s);var a=n(6),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"变量提升"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#变量提升"}},[t._v("#")]),t._v(" 变量提升")]),t._v(" "),n("p",[t._v("在了解变量提升之前，先看下下面的例子")]),t._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// undefined")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br")])]),n("p",[t._v("发现浏览器并没有报错，而是输出 undefined，那么说明：变量 a 已经存在了，即：在 js 代码执行之前，还做了 "),n("code",[t._v("变量提升")])]),t._v(" "),n("p",[t._v("机制：当栈内存（ 作用域 ）形成，JS 代码自上而下执行之前，浏览器首先会把所有带关键词"),n("code",[t._v("（ var / function ）")]),t._v("的进行提前声明或者定义")]),t._v(" "),n("p",[n("strong",[t._v("变量提升阶段")])]),t._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sum")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 匿名函数之函数表达式")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("fn")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 代码执行到此处：会把函数值赋值给 fn，")]),t._v("\n\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br")])]),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"title"}),n("ol",[n("li",[t._v("带 "),n("code",[t._v("VAR")]),t._v(" 的只声明未定义")]),t._v(" "),n("li",[t._v("带 "),n("code",[t._v("FUNCTION")]),t._v(" 的声明和赋值都完成了")])])]),n("p",[n("a",{attrs:{href:"https://www.w3school.com.cn/js/index.asp",target:"_blank",rel:"noopener noreferrer"}},[t._v("W3school 基础"),n("OutboundLink")],1),t._v(" || "),n("a",{attrs:{href:"https://zh.javascript.info/",target:"_blank",rel:"noopener noreferrer"}},[t._v("现代教程"),n("OutboundLink")],1),t._v(" || "),n("a",{attrs:{href:"https://github.com/lydiahallie/javascript-questions",target:"_blank",rel:"noopener noreferrer"}},[t._v("github 进阶问题"),n("OutboundLink")],1),t._v(" || "),n("a",{attrs:{href:"https://github.com/stephentian/33-js-concepts",target:"_blank",rel:"noopener noreferrer"}},[t._v("33 个进阶知识点"),n("OutboundLink")],1),t._v(" || "),n("a",{attrs:{href:"https://es6.ruanyifeng.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("阮一峰 ES6"),n("OutboundLink")],1),t._v(" || "),n("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN JS API"),n("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);