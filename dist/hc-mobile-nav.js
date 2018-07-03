/*!
 * jQuery HC-MobileNav
 * ===================
 * Version: 2.0.4
 * Author: Some Web Media
 * Author URL: http://somewebmedia.com
 * Plugin URL: https://github.com/somewebmedia/hc-mobile-nav
 * Description: jQuery plugin for converting menus to mobile navigations
 * License: MIT
 */
!function(y,C){"use strict";var t,k=C.document,w=(t=y("head"),function(e,n,l){var a=t.find("style#"+n);a.length?a.html(e):l?y('<style id="'+n+'">'+e+"</style>").prependTo(t):y('<style id="'+n+'">'+e+"</style>").appendTo(t)});y.fn.extend({hcMobileNav:function(e){if(!this.length)return this;var a,f=y.extend({},{maxWidth:1024,transition:!0,transitionSide:"left",levelSpacing:40,labels:{close:"Close",back:"Back"}},e),h=y(k.getElementsByTagName("html")[0]),m=y(k),b=y(k.body),g=(a=function(e){var n=["Webkit","Moz","Ms","O"],l=(k.body||k.documentElement).style,a=e.charAt(0).toUpperCase()+e.slice(1);if(void 0!==l[e])return e;for(var t=0;t<n.length;t++)if(void 0!==l[n[t]+a])return n[t]+a;return!1}("transform"),function(e,n){if(a&&f.transition){var l="left"===f.transitionSide?n:-n;e[0].style[a]="translate3d("+l+"px,0,0)"}});return this.each(function(){var e=y(this),s=void 0,l=0;if(e.is("ul"))s=e.clone().wrap("<nav></nav>").parent();else if(e.is("nav"))s=e.clone();else if(!(s=e.find("nav, ul").first().clone()).length)return void console.log("%c! HC MobileNav:%c There is no <nav> or <ul> elements in your menu.","color: red","color: black");var n=s.find("ul");if(n.length){var a=n.find("li"),t={},r=void 0,o=function(n){return function(e){e.stopPropagation(),!0===n&&e.preventDefault(),!1,h.removeClass("hc-yscroll"),b.removeClass("hc-nav-open"),a.filter(".level-open").removeClass("level-open"),s.find(".sub-level-open").removeClass("sub-level-open"),s.removeAttr("style"),l&&(b.css("top","").scrollTop(l),h.scrollTop(l),l=0)}},c=function(l,e){return function(e){e.stopPropagation(),e.preventDefault();var n=r.filter("[data-level="+l+"]");n.off("click").removeClass("sub-level-open"),n.find(".level-open").removeClass("level-open"),n.find(".sub-level-open").removeClass("sub-level-open"),g(s,l*f.levelSpacing)}};s.on("click touchstart",function(e){e.stopPropagation()}).removeAttr("id").removeClass().addClass("hc-mobile-nav").find("[id]").removeAttr("id"),f.transition&&s.addClass("transform-"+f.transitionSide),n.each(function(){var e=y(this),n=e.parents("li").length;t[n]?t[n]=t[n].add(e):t[n]=e});var i=function(e){var i=Number(e);0===i?t[i].wrapAll('<div class="menu-wrap"></div>'):t[i].wrap('<div class="menu-wrap"></div>'),t[i].each(function(e){var n=y(this),l=0!==i?e:0;n.parent().attr("data-level",i).attr("data-index",l);var a,t,o=n.children("li").filter(function(){return y(this).find("ul").length});y('<span class="next">').click((a=i,t=l,function(e){e.stopPropagation(),e.preventDefault();var n=y(this),l=r.filter("[data-level="+a+"][data-index="+t+"]");return n.closest("li").addClass("level-open"),l.addClass("sub-level-open").on("click",c(a,t)),g(s,(a+1)*f.levelSpacing),!1})).appendTo(o.addClass("has-subnav").children("a")),0!==i&&y('<li class="menu-item back"><a href="#">'+f.labels.back+"<span></span></a></li>").prependTo(n).children("a").click(c(i-1,l))})};for(var d in t)i(d);r=s.find(".menu-wrap");var v=y('<a class="hc-menu-trigger"><span></span></a>').on("click",function(e){e.preventDefault(),e.stopPropagation(),!0,l=h.scrollTop()||b.scrollTop(),b.addClass("hc-nav-open"),k.body.scrollHeight>k.body.offsetHeight&&h.addClass("hc-yscroll"),l&&b.css("top",-l)});y('<li class="menu-item close"><a href="#">'+f.labels.close+"<span></span></a></li>").prependTo(t[0].first()).children("a").click(o(!0)),a.children("a").click(o());var p="ontouchstart"in C?"touchstart":"click";m.on(p,"body.hc-nav-open",o()),b.prepend(s),e.addClass("hc-nav").after(v);var u="@media screen and (max-width: "+(f.maxWidth-1)+"px) {\n          .hc-menu-trigger,\n          .hc-mobile-nav,\n          body:after {\n            display: block;\n          }\n          .hc-nav {\n            display: none;\n          }\n        }";w(u,"hc-mobile-nav-style")}else console.log("%c! HC MobileNav:%c Menu must contain <ul> element.","color: red","color: black")})}})}(jQuery,"undefined"!=typeof window?window:this);