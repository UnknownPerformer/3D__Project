parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"tpCj":[function(require,module,exports) {
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function n(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),Object.defineProperty(e,"prototype",{writable:!1}),e}function i(e,t){s(e,t),t.add(e)}function s(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function a(e,t,n){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return n}Object.defineProperty(exports,"__esModule",{value:!0}),exports.Select=void 0;var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0,i=null!=t?t:"Placeholder по умолчанию",s=e.map(function(e){var t="";return e.id===n&&(i=e.value,t="selected"),'\n      <li class="select__item '.concat(t,'" data-type="item" data-id="').concat(e.id,'">').concat(e.value,"</li>\n    ")});return'\n    <div class="select__backdrop" data-type="backdrop"></div>\n    <div class="select__input" data-type="input">\n      <span data-type="value">'.concat(i,'</span>\n      <i class="fa fa-chevron-down" data-type="arrow"></i>\n    </div>\n    <div class="select__dropdown">\n      <ul class="select__list">\n        ').concat(s.join(""),"\n      </ul>\n    </div>\n  ")},l=new WeakSet,o=new WeakSet,r=function(){function t(n,s){e(this,t),i(this,o),i(this,l),this.$el=document.querySelector(n),this.options=s,this.selectedId=s.selectedId,a(this,l,d).call(this),a(this,o,u).call(this)}return n(t,[{key:"clickHandler",value:function(e){var t=e.target.dataset.type;if("input"===t)this.toggle();else if("item"===t){var n=e.target.dataset.id;this.select(n)}else"backdrop"===t&&this.close()}},{key:"isOpen",get:function(){return this.$el.classList.contains("open")}},{key:"current",get:function(){var e=this;return this.options.data.find(function(t){return t.id===e.selectedId})}},{key:"select",value:function(e){this.selectedId=e,this.$value.textContent=this.current.value,this.$el.querySelectorAll('[data-type="item"]').forEach(function(e){e.classList.remove("selected")}),this.$el.querySelector('[data-id="'.concat(e,'"]')).classList.add("selected"),this.close()}},{key:"toggle",value:function(){this.isOpen?this.close():this.open()}},{key:"open",value:function(){this.$el.classList.add("open"),this.$arrow.classList.remove("fa-chevron-down"),this.$arrow.classList.add("fa-chevron-up")}},{key:"close",value:function(){this.$el.classList.remove("open"),this.$arrow.classList.add("fa-chevron-down"),this.$arrow.classList.remove("fa-chevron-up")}},{key:"destroy",value:function(){this.$el.removeEventListener("click",this.clickHandler),this.$el.innerHTML=""}}]),t}();function d(){var e=this.options,t=e.placeholder,n=e.data;this.$el.classList.add("select"),this.$el.innerHTML=c(n,t,this.selectedId)}function u(){this.clickHandler=this.clickHandler.bind(this),this.$el.addEventListener("click",this.clickHandler),this.$arrow=this.$el.querySelector('[data-type="arrow"]'),this.$value=this.$el.querySelector('[data-type="value"]')}exports.Select=r;
},{}],"eHzx":[function(require,module,exports) {

},{"./assets\\fon7.jpg":[["fon7.c761b8ed.jpg","izCt"],"izCt"],"./assets\\1614408020_23-p-biznes-fon-temnii-31.jpg":[["1614408020_23-p-biznes-fon-temnii-31.c862933b.jpg","KTLX"],"KTLX"],"./assets\\9X_OQf4g4h4.jpg":[["9X_OQf4g4h4.29a65de8.jpg","XmjK"],"XmjK"],"./assets\\1643134158_87-adonius-club-p-fon-dlya-tsitat-871.jpg":[["1643134158_87-adonius-club-p-fon-dlya-tsitat-871.42dcbbd0.jpg","YrKz"],"YrKz"],"./assets\\1614406622_33-p-temnii-fon-dlya-fotoshopa-stena-36.jpg":[["1614406622_33-p-temnii-fon-dlya-fotoshopa-stena-36.121612aa.jpg","Xq1D"],"Xq1D"]}],"Focm":[function(require,module,exports) {
"use strict";var _select=require("./select");require("./index.scss");var burger=document.querySelector(".burger"),container=document.querySelector(".container"),screens=document.querySelectorAll(".screen"),header2=document.querySelector(".header_one"),header3=document.querySelector(".header_two"),header4=document.querySelector(".header_three"),header5=document.querySelector(".header_four"),header6=document.querySelector(".header_five"),main=document.getElementById("102"),btn=document.getElementById("101");function replaceBg(e){var t=document.getElementById(e);screens.forEach(function(e){e.style.display="none"}),t.style.display="block"}function changeBg(){document.querySelectorAll(".link").forEach(function(e,t){e.addEventListener("mouseenter",function(e){e.preventDefault(),replaceBg(e.target.dataset.link)}),e.addEventListener("click",function(e){e.preventDefault(),container.classList.toggle("active")})}),screens.forEach(function(e){e.style.display="none",screens[0].style.display="block"})}burger.addEventListener("click",function(){container.classList.toggle("active")}),header2.addEventListener("click",function(){container.classList.toggle("active")}),header3.addEventListener("click",function(){container.classList.toggle("active")}),header4.addEventListener("click",function(){container.classList.toggle("active")}),header5.addEventListener("click",function(){container.classList.toggle("active")}),header6.addEventListener("click",function(){container.classList.toggle("active")}),changeBg();var popupLinks=document.querySelectorAll(".popup-link"),popupLinks2=document.querySelectorAll(".popup-link2"),body=document.querySelector("body"),unlock=!0,timeout=800;if(popupLinks.length>0)for(var _loop=function(e){var t=popupLinks[e];t.addEventListener("click",function(e){var n=t.getAttribute("href").replace("#","");popupOpen(document.getElementById(n)),e.preventDefault()})},index=0;index<popupLinks.length;index++)_loop(index);if(popupLinks2.length>0)for(var _loop2=function(e){var t=popupLinks2[e];t.addEventListener("click",function(e){var n=t.getAttribute("href").replace("#","");popupOpen2(document.getElementById(n)),e.preventDefault()})},_index=0;_index<popupLinks2.length;_index++)_loop2(_index);var popupCloseIcon=document.querySelectorAll(".close-popup");if(popupCloseIcon.length>0)for(var _loop3=function(e){var t=popupCloseIcon[e];t.addEventListener("click",function(e){popupClose(t.closest(".popup")),e.preventDefault()})},_index2=0;_index2<popupCloseIcon.length;_index2++)_loop3(_index2);var popupCloseIcon2=document.querySelectorAll(".close-popup2");if(popupCloseIcon2.length>0)for(var _loop4=function(e){var t=popupCloseIcon2[e];t.addEventListener("click",function(e){popupClose2(t.closest(".popup2")),e.preventDefault()})},_index3=0;_index3<popupCloseIcon2.length;_index3++)_loop4(_index3);function popupOpen(e){if(e&&unlock){var t=document.querySelector(".popup.open");t&&popupClose(t,!1),e.classList.add("open"),e.addEventListener("click",function(e){e.target.closest(".popup_content")||popupClose(e.target.closest(".popup"))})}}function popupOpen2(e){if(e&&unlock){var t=document.querySelector(".popup2.open2");t&&popupClose2(t,!1),e.classList.add("open2"),e.addEventListener("click",function(e){e.target.closest(".popup_content2")||popupClose2(e.target.closest(".popup2"))})}}function popupClose(e){!(arguments.length>1&&void 0!==arguments[1])||arguments[1];unlock&&e.classList.remove("open")}function popupClose2(e){!(arguments.length>1&&void 0!==arguments[1])||arguments[1];unlock&&e.classList.remove("open2")}var result=document.querySelector("#result"),calc=document.querySelector(".calc");calc.addEventListener("click",function(event){if(event.target.classList.contains("calc_btn")){var value=event.target.innerText;switch(value){case"C":result.innerText="";break;case"=":result.innerText=eval(result.innerText);break;default:result.innerText+=value}}});var select=new _select.Select("#select",{placeholder:"Ready to learn",data:[{id:"1",value:"React"},{id:"2",value:"Bootstrap"},{id:"3",value:"TypeScript"},{id:"4",value:"Vue"},{id:"5",value:"Angular"},{id:"6",value:"Bulma"}],onSelect:function(e){console.log("Selected Item",e)}});
},{"./select":"tpCj","./index.scss":"eHzx"}]},{},["Focm"], null)
//# sourceMappingURL=/src.240db969.js.map