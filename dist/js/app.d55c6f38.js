(function(t){function e(e){for(var n,r,o=e[0],c=e[1],l=e[2],d=0,m=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&m.push(s[r][0]),s[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(m.length)m.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,o=1;o<a.length;o++){var c=a[o];0!==s[c]&&(n=!1)}n&&(i.splice(e--,1),t=r(r.s=a[0]))}return t}var n={},s={app:0},i=[];function r(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=n,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("85ec"),s=a.n(n);s.a},"4d5a":function(t,e,a){"use strict";var n=a("bdde"),s=a.n(n);s.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("TopHeader"),a("tray")],1)},i=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"d-flex m-0 px-4 py-3",attrs:{id:"topHeader"}},[t._m(0),a("div",{staticClass:"text-right"},[a("h6",{staticClass:"total m-0 p-0"},[t._v("Total")]),a("h6",{staticClass:" m-0 p-0"},[a("span",{staticClass:"total"},[t._v("$")]),t._v(" "),a("span",{staticClass:"amount"},[t._v(t._s(t.totalAmount))])])])])])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[a("span",{staticClass:"my"},[t._v("My")]),t._v(" Menu")])])}],c={name:"TopHeader",computed:{totalAmount:function(){var t=0,e=this.$store.state.selectedItems;for(var a in e)t+=e[a].item.rate*e[a].count;return t}}},l=c,u=(a("4d5a"),a("2877")),d=Object(u["a"])(l,r,o,!1,null,"07fab3ba",null),m=d.exports,p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tray pt-3"},[t.yourOrder.length?a("div",{staticClass:"yourOrders"},t._l(t.yourOrder,(function(e){return a("span",{key:e.item.name,on:{click:function(a){t.selectedItem={item:e.item,count:e.count}}}},[t._v(" #"+t._s(e.item.name+"("+e.count+")")+" ")])})),0):t._e(),a("div",{attrs:{id:"filter"}},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.catagory,expression:"catagory"}],attrs:{name:"catagory",id:""},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.catagory=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"veg"}},[t._v("Vegetarian")]),a("option",{attrs:{value:"non-veg"}},[t._v("Non-Vegetarian")])]),a("div",{staticClass:"arrow"})]),a("br"),a("div",{staticClass:"menu"},[t._l(this.$store.state.filteredMenuItems,(function(e){return a("FoodItem",{key:e.id,attrs:{itemDetails:e},on:{clicked:function(a){t.selectedItem={item:e,count:0}}}})})),t.selectedItem?a("PopUp",{on:{closePopUp:function(e){t.selectedItem=null}}},[a("SelectedFood",{attrs:{slot:"content",selectedItem:t.selectedItem},on:{closePopUp:function(e){return t.$emit("closePopUp")}},slot:"content"})],1):t._e()],2)])},f=[],v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex mx-auto my-2 foodItem",on:{click:function(e){return t.$emit("clicked")}}},[t._m(0),a("div",{staticClass:"details ml-1"},[a("p",{staticClass:"foodName"},[t._v(t._s(t.itemDetails.name))]),a("br"),a("p",{staticClass:"desc"},[t._v(" "+t._s(t.itemDetails.desc)+" ")]),a("div",{staticClass:"priceTag"},[t._v(" $"+t._s(t.itemDetails.rate)+" ")])])])},h=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"image mr-1"},[n("img",{staticClass:"foodImage",attrs:{src:a("e2fb"),alt:"Food"}})])}],_={props:{itemDetails:Object},name:"FoodItem"},g=_,y=(a("ce0b"),Object(u["a"])(g,v,h,!1,null,"23263066",null)),b=y.exports,C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mask"},[a("div",{staticClass:"popUpWraper"},[a("div",{staticClass:"closePopUp",on:{click:function(e){return t.$emit("closePopUp")}}},[t._m(0)]),t._t("content")],2)])},I=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"barsContainer"},[a("div",{staticClass:"bar1"},[a("div",{staticClass:"bar2"})])])}],$={name:"PopUp"},k=$,O=(a("f2a4"),Object(u["a"])(k,C,I,!1,null,"295fc378",null)),w=O.exports,x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"d-inline"},[t._m(0),a("div",{staticClass:"details"},[a("div",{staticClass:"nameAndDesc"},[a("p",{staticClass:"foodName"},[t._v(t._s(t.selectedItem.item.name))]),a("br"),a("p",{staticClass:"desc"},[t._v(" "+t._s(t.selectedItem.item.desc)+" ")])]),a("div",{staticClass:"priceTag"},[t._v(" $"+t._s(t.selectedItem.item.rate)+" ")])]),a("div",{staticClass:"count d-flex"},[a("div",{staticClass:"name"},[t._v("Quantity")]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.quantity>0,expression:"quantity>0"}],staticClass:"minus",on:{click:function(e){t.quantity=t.quantity-1}}},[t._v("-")]),a("div",{staticClass:"quantity"},[t._v(t._s(t.quantity))]),a("div",{staticClass:"plus",on:{click:function(e){t.quantity=t.quantity+1}}},[t._v("+")])]),a("div",{staticClass:"save"},[a("button",{class:{activeButton:t.quantity>0},on:{click:function(e){return t.addItem(t.selectedItem)}}},[t._v("Add")])])])},P=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"image"},[n("img",{staticClass:"foodImage",attrs:{src:a("e2fb"),alt:"Food"}})])}],j=(a("a434"),{name:"SelectedFood",data:function(){return{quantity:0}},props:{selectedItem:Object},mounted:function(){this.selectedItem.count&&(this.quantity=this.selectedItem.count)},methods:{addItem:function(t){if(t.count=this.quantity,!t.count){var e=this.$store.state.selectedItems;for(var a in e)if(e[a].item.id===t.item.id)return e.splice(a,1),this.$store.state.selectedItems=e,void this.$parent.$emit("closePopUp")}if(t.count){var n=this.$store.state.selectedItems;for(var s in n)if(n[s].item.id===t.item.id)return n[s].count=t.count,this.$store.state.selectedItems=n,void this.$parent.$emit("closePopUp");this.$store.state.selectedItems.push({item:t.item,count:this.quantity})}this.$parent.$emit("closePopUp")}}}),T=j,q=(a("a770"),Object(u["a"])(T,x,P,!1,null,"44590e44",null)),M=q.exports,U={components:{FoodItem:b,PopUp:w,SelectedFood:M},name:"Tray",data:function(){return{catagory:"non-veg",selectedItem:null}},computed:{yourOrder:function(){return this.$store.state.selectedItems}},methods:{}},E=U,F=(a("6e22"),Object(u["a"])(E,p,f,!1,null,"379411ac",null)),S=F.exports,D={name:"App",components:{TopHeader:m,Tray:S}},A=D,N=(a("034f"),Object(u["a"])(A,s,i,!1,null,null,null)),B=N.exports,H=a("ca2f");n["a"].use(H["a"]);var K=new H["a"].Store({state:{total:100,menu:[],filteredMenuItems:[{name:"Tandoori Lamb Chops",desc:"Lamb chops marinated in strained yogurt and flavoursome masalas. Cooked till tender, this dish is guaranteed to impress.",rate:100,id:1,cat:"non-veg"},{name:"Keema Samosa with Yoghurt Dip",desc:"Make this ultimate Punjabi snack from scratch. Dough pockets stuffed with keema masala mixture",rate:30,id:2,cat:"non-veg"},{name:"Butter Chicken",desc:"Keeping the classic at the last! ",rate:500,id:3,cat:"non-veg"},{name:"Chicken 65",desc:"Chicken 65 is said to have originated in Madras (Chennai). ",rate:10008,id:4,cat:"non-veg"},{name:"Malabar Fish Biryani",desc:"This classic Malabar Fish Biryani can be devoured at all times. Enjoy the delicious taste of this ever-charming dish.",rate:30,id:5,cat:"non-veg"},{name:"Pina Colada Pork Ribs",desc:"The ingredients of the popular rum-based cocktail team up with pork ribs to create a lip-smacking treat.",rate:500,id:6,cat:"non-veg"},{name:"Mutton Korma",desc:"A flavourful mutton curry, where the meat is stirred with curd, garlic-ginger paste, cloves, cardamom and cinnamon sticks.",rate:10,id:7,cat:"non-veg"}],selectedCatagory:null,selectedItems:[]},actions:{}});n["a"].config.productionTip=!1,new n["a"]({store:K,render:function(t){return t(B)}}).$mount("#app")},"6e22":function(t,e,a){"use strict";var n=a("897d"),s=a.n(n);s.a},"85ec":function(t,e,a){},"897d":function(t,e,a){},"8a44":function(t,e,a){},a770:function(t,e,a){"use strict";var n=a("8a44"),s=a.n(n);s.a},bdde:function(t,e,a){},c859:function(t,e,a){},ce0b:function(t,e,a){"use strict";var n=a("c859"),s=a.n(n);s.a},d6de:function(t,e,a){},e2fb:function(t,e,a){t.exports=a.p+"img/burger.a70e6a3d.jpg"},f2a4:function(t,e,a){"use strict";var n=a("d6de"),s=a.n(n);s.a}});
//# sourceMappingURL=app.d55c6f38.js.map