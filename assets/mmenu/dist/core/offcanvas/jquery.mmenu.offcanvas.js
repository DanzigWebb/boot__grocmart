!function(e){var t="mmenu",n="offCanvas";e[t].addons[n]={setup:function(){if(this.opts[n]){var o=this.opts[n],s=this.conf[n];r=e[t].glbl,this._api=e.merge(this._api,["open","close","setPage"]),"object"!=typeof o&&(o={}),o=this.opts[n]=e.extend(!0,{},e[t].defaults[n],o),"string"!=typeof s.page.selector&&(s.page.selector="> "+s.page.nodetype),this.vars.opened=!1;var a=[i.menu+"_offcanvas"];e[t].support.csstransforms||a.push(i["no-csstransforms"]),e[t].support.csstransforms3d||a.push(i["no-csstransforms3d"]),this.bind("initMenu:after",function(){var e=this;this._initBlocker(),this.setPage(r.$page),this["_initWindow_"+n](),this.$menu.addClass(a.join(" ")).parent("."+i.wrapper).removeClass(i.wrapper),this.$menu[s.menu.insertMethod](s.menu.insertSelector);var t=window.location.hash;if(t){var o=this._getOriginalMenuId();o&&o==t.slice(1)&&setTimeout(function(){e.open()},1e3)}}),this.bind("setPage:after",function(e){r.$blck.children("a").attr("href","#"+e.attr("id"))}),this.bind("open:start:sr-aria",function(){this.__sr_aria(this.$menu,"hidden",!1)}),this.bind("close:finish:sr-aria",function(){this.__sr_aria(this.$menu,"hidden",!0)}),this.bind("initMenu:after:sr-aria",function(){this.__sr_aria(this.$menu,"hidden",!0)}),this.bind("initBlocker:after:sr-text",function(){r.$blck.children("a").html(this.__sr_text(this.i18n(this.conf.screenReader.text.closeMenu)))})}},add:function(){i=e[t]._c,o=e[t]._d,s=e[t]._e,i.add("slideout page no-csstransforms3d"),o.add("style")},clickAnchor:function(e,t){var o=this;if(this.opts[n]){var s=this._getOriginalMenuId();if(s&&e.is('[href="#'+s+'"]')){if(t)return this.open(),!0;var a=e.closest("."+i.menu);if(a.length){var p=a.data("mmenu");if(p&&p.close)return p.close(),o.__transitionend(a,function(){o.open()},o.conf.transitionDuration),!0}return this.open(),!0}if(r.$page)return s=r.$page.first().attr("id"),s&&e.is('[href="#'+s+'"]')?(this.close(),!0):void 0}}},e[t].defaults[n]={blockUI:!0,moveBackground:!0},e[t].configuration[n]={menu:{insertMethod:"prependTo",insertSelector:"body"},page:{nodetype:"div",selector:null,noSelector:[],wrapIfNeeded:!0}},e[t].prototype.open=function(){if(this.trigger("open:before"),!this.vars.opened){var e=this;this._openSetup(),setTimeout(function(){e._openFinish()},this.conf.openingInterval),this.trigger("open:after")}},e[t].prototype._openSetup=function(){var t=this,a=this.opts[n];this.closeAllOthers(),r.$page.each(function(){e(this).data(o.style,e(this).attr("style")||"")}),r.$wndw.trigger(s.resize+"-"+n,[!0]);var p=[i.wrapper+"_opened"];a.blockUI&&p.push(i.wrapper+"_blocking"),"modal"==a.blockUI&&p.push(i.wrapper+"_modal"),a.moveBackground&&p.push(i.wrapper+"_background"),r.$html.addClass(p.join(" ")),setTimeout(function(){t.vars.opened=!0},this.conf.openingInterval),this.$menu.addClass(i.menu+"_opened")},e[t].prototype._openFinish=function(){var e=this;this.__transitionend(r.$page.first(),function(){e.trigger("open:finish")},this.conf.transitionDuration),this.trigger("open:start"),r.$html.addClass(i.wrapper+"_opening")},e[t].prototype.close=function(){if(this.trigger("close:before"),this.vars.opened){var t=this;this.__transitionend(r.$page.first(),function(){t.$menu.removeClass(i.menu+"_opened");var n=[i.wrapper+"_opened",i.wrapper+"_blocking",i.wrapper+"_modal",i.wrapper+"_background"];r.$html.removeClass(n.join(" ")),r.$page.each(function(){e(this).attr("style",e(this).data(o.style))}),t.vars.opened=!1,t.trigger("close:finish")},this.conf.transitionDuration),this.trigger("close:start"),r.$html.removeClass(i.wrapper+"_opening"),this.trigger("close:after")}},e[t].prototype.closeAllOthers=function(){r.$body.find("."+i.menu+"_offcanvas").not(this.$menu).each(function(){var n=e(this).data(t);n&&n.close&&n.close()})},e[t].prototype.setPage=function(t){this.trigger("setPage:before",t);var o=this,s=this.conf[n];t&&t.length||(t=r.$body.find(s.page.selector).not("."+i.menu).not("."+i.wrapper+"__blocker"),s.page.noSelector.length&&(t=t.not(s.page.noSelector.join(", "))),t.length>1&&s.page.wrapIfNeeded&&(t=t.wrapAll("<"+this.conf[n].page.nodetype+" />").parent())),t.addClass(i.page+" "+i.slideout).each(function(){e(this).attr("id",e(this).attr("id")||o.__getUniqueId())}),r.$page=t,this.trigger("setPage:after",t)},e[t].prototype["_initWindow_"+n]=function(){r.$wndw.off(s.keydown+"-"+n).on(s.keydown+"-"+n,function(e){if(r.$html.hasClass(i.wrapper+"_opened")&&9==e.keyCode)return e.preventDefault(),!1});var e=0;r.$wndw.off(s.resize+"-"+n).on(s.resize+"-"+n,function(t,n){if(1==r.$page.length&&(n||r.$html.hasClass(i.wrapper+"_opened"))){var o=r.$wndw.height();(n||o!=e)&&(e=o,r.$page.css("minHeight",o))}})},e[t].prototype._initBlocker=function(){var t=this,o=this.opts[n],a=this.conf[n];this.trigger("initBlocker:before"),o.blockUI&&(r.$blck||(r.$blck=e('<div class="'+i.wrapper+"__blocker "+i.slideout+'" />').append("<a />")),r.$blck.appendTo(a.menu.insertSelector).off(s.touchstart+"-"+n+" "+s.touchmove+"-"+n).on(s.touchstart+"-"+n+" "+s.touchmove+"-"+n,function(e){e.preventDefault(),e.stopPropagation(),r.$blck.trigger(s.mousedown+"-"+n)}).off(s.mousedown+"-"+n).on(s.mousedown+"-"+n,function(e){e.preventDefault(),r.$html.hasClass(i.wrapper+"_modal")||(t.closeAllOthers(),t.close())}),this.trigger("initBlocker:after"))};var i,o,s,r}(jQuery);