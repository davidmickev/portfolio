(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,function(e,t,a){},,,,function(e,t,a){e.exports=a(15)},,,,,function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(4),l=a(5),r=a(0),s=a.n(r),o=a(6),c=a.n(o);a(3);var i=function(){return String("#"+Math.floor(16777215*Math.random()).toString(16))};a(12),a(13);var m=function(){return s.a.createElement("div",{className:"App"},s.a.createElement("div",{id:"links"},s.a.createElement("button",{className:"purple",style:{color:"blue"}},"About"),s.a.createElement("button",{className:"blue"},"Portfolio"),s.a.createElement("button",{className:"green"},"Contact")),s.a.createElement("div",{id:"content"},s.a.createElement("div",{id:"name"},s.a.createElement("span",{className:"logo"},s.a.createElement("span",{id:"1",className:"letter",style:{color:i()}},"D"),s.a.createElement("span",{id:"2",className:"letter",style:{color:i()}},"a"),s.a.createElement("span",{id:"3",className:"letter",style:{color:i()}},"v"),s.a.createElement("span",{id:"4",className:"letter",style:{color:i()}},"i"),s.a.createElement("span",{id:"5",className:"letter",style:{color:i()}},"d")),s.a.createElement("span",{className:"logo"},s.a.createElement("span",{id:"6",className:"letter",style:{color:i()}},"M"),s.a.createElement("span",{id:"7",className:"letter",style:{color:i()}},"i"),s.a.createElement("span",{id:"8",className:"letter",style:{color:i()}},"c"),s.a.createElement("span",{id:"9",className:"letter",style:{color:i()}},"k"),s.a.createElement("span",{id:"10",className:"letter",style:{color:i()}},"e"),s.a.createElement("span",{id:"11",className:"letter",style:{color:i()}},"v"),s.a.createElement("span",{id:"12",className:"letter",style:{color:i()}},"i"),s.a.createElement("span",{id:"13",className:"letter",style:{color:i()}},"c"),s.a.createElement("span",{id:"14",className:"letter",style:{color:i()}},"i"),s.a.createElement("span",{id:"15",className:"letter",style:{color:i()}},"u"),s.a.createElement("span",{id:"16",className:"letter",style:{color:i()}},"s"))),s.a.createElement("p",null,"My desire is to create."),s.a.createElement("p",null,"Website down 8/4 changing format and interactions."),s.a.createElement("section",{class:"et-hero-tabs"},s.a.createElement("h1",null,"STICKY SLIDER NAV"),s.a.createElement("h3",null,"Sliding content with sticky tab nav"),s.a.createElement("div",{class:"et-hero-tabs-container"},s.a.createElement("a",{class:"et-hero-tab",href:"#tab-es6"},"ES6"),s.a.createElement("a",{class:"et-hero-tab",href:"#tab-flexbox"},"Flexbox"),s.a.createElement("a",{class:"et-hero-tab",href:"#tab-react"},"React"),s.a.createElement("a",{class:"et-hero-tab",href:"#tab-angular"},"Angular"),s.a.createElement("a",{class:"et-hero-tab",href:"#tab-other"},"Other"),s.a.createElement("span",{class:"et-hero-tab-slider"}))),s.a.createElement("main",{class:"et-main"},s.a.createElement("section",{class:"et-slide",id:"tab-es6"},s.a.createElement("h1",null,"ES6"),s.a.createElement("h3",null,"something about es6")),s.a.createElement("section",{class:"et-slide",id:"tab-flexbox"},s.a.createElement("h1",null,"Flexbox"),s.a.createElement("h3",null,"something about flexbox")),s.a.createElement("section",{class:"et-slide",id:"tab-react"},s.a.createElement("h1",null,"React"),s.a.createElement("h3",null,"something about react")),s.a.createElement("section",{class:"et-slide",id:"tab-angular"},s.a.createElement("h1",null,"Angular"),s.a.createElement("h3",null,"something about angular")),s.a.createElement("section",{class:"et-slide",id:"tab-other"},s.a.createElement("h1",null,"Other"),s.a.createElement("h3",null,"something about other")))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var h=a(1),u=a.n(h);a(14);c.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(m,null)),document.getElementById("root")),Array.from(document.getElementsByClassName("letter")).forEach((function(e){e.addEventListener("mouseover",(function(t){e.classList.add("hovered"),e.style.color=i(),e.style.opacity=".9"})),e.addEventListener("animationend",(function(t){e.classList.remove("hovered")}))})),new(function(){function e(){var t=this;Object(n.a)(this,e),this.currentId=null,this.currentTab=null,this.tabContainerHeight=70;u()(window).scroll((function(){t.onScroll()})),u()(window).resize((function(){t.onResize()}))}return Object(l.a)(e,[{key:"onTabClick",value:function(e,t){e.preventDefault();var a=u()(t.attr("href")).offset().top-this.tabContainerHeight+1;u()("html, body").animate({scrollTop:a},600)}},{key:"onScroll",value:function(){this.checkTabContainerPosition(),this.findCurrentTabSelector()}},{key:"onResize",value:function(){this.currentId&&this.setSliderCss()}},{key:"checkTabContainerPosition",value:function(){var e=u()(".et-hero-tabs").offset().top+u()(".et-hero-tabs").height()-this.tabContainerHeight;u()(window).scrollTop()>e?u()(".et-hero-tabs-container").addClass("et-hero-tabs-container--top"):u()(".et-hero-tabs-container").removeClass("et-hero-tabs-container--top")}},{key:"findCurrentTabSelector",value:function(e){var t,a,n=this;u()(".et-hero-tab").each((function(){var e=u()(this).attr("href"),l=u()(e).offset().top-n.tabContainerHeight,r=u()(e).offset().top+u()(e).height()-n.tabContainerHeight;u()(window).scrollTop()>l&&u()(window).scrollTop()<r&&(t=e,a=u()(this))})),this.currentId==t&&null!==this.currentId||(this.currentId=t,this.currentTab=a,this.setSliderCss())}},{key:"setSliderCss",value:function(){var e=0,t=0;this.currentTab&&(e=this.currentTab.css("width"),t=this.currentTab.offset().left),u()(".et-hero-tab-slider").css("width",e),u()(".et-hero-tab-slider").css("left",t)}}]),e}()),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.d9406da2.chunk.js.map