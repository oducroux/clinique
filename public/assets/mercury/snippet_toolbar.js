!function(){var t={}.hasOwnProperty,e=function(e,i){function o(){this.constructor=e}for(var n in i)t.call(i,n)&&(e[n]=i[n]);return o.prototype=i.prototype,e.prototype=new o,e.__super__=i.prototype,e};this.Mercury.SnippetToolbar=function(i){function o(t,e){this.document=t,this.options=null!=e?e:{},this._boundEvents=[],o.__super__.constructor.call(this,this.options)}return e(o,i),o.prototype.build=function(){var e,i,o,n,s,r;this.element=jQuery("<div>",{"class":"mercury-toolbar mercury-snippet-toolbar",style:"display:none"}),this.element.appendTo(null!=(n=jQuery(this.options.appendTo).get(0))?n:"body"),s=Mercury.config.toolbars.snippets,r=[];for(i in s)t.call(s,i)&&(o=s[i],e=this.buildButton(i,o),e?r.push(e.appendTo(this.element)):r.push(void 0));return r},o.prototype.bindEvents=function(){var t=this;return this.bindReleasableEvent(Mercury,"show:toolbar",function(e,i){return i.snippet?(i.snippet.mouseout(function(){return t.hide()}),t.show(i.snippet)):void 0}),this.bindReleasableEvent(Mercury,"hide:toolbar",function(e,i){return i.type&&"snippet"===i.type?t.hide(i.immediately):void 0}),this.bindReleasableEvent(jQuery(this.document),"scroll",function(){return t.visible?t.position():void 0}),this.element.mousemove(function(){return clearTimeout(t.hideTimeout)}),this.element.mouseout(function(){return t.hide()})},o.prototype.bindReleasableEvent=function(t,e,i){return t.on(e,i),this._boundEvents.push([t,e,i])},o.prototype.show=function(t){return this.snippet=t,Mercury.tooltip.hide(),this.position(),this.appear()},o.prototype.position=function(){var t,e,i;return e=this.snippet.offset(),i=e.top+Mercury.displayRect.top-jQuery(this.document).scrollTop()-this.height()+10,t=e.left-jQuery(this.document).scrollLeft(),this.element.css({top:i,left:t})},o.prototype.appear=function(){return clearTimeout(this.hideTimeout),this.visible?void 0:(this.visible=!0,this.element.css({display:"block",opacity:0}),this.element.stop().animate({opacity:1},200,"easeInOutSine"))},o.prototype.hide=function(t){var e=this;return null==t&&(t=!1),clearTimeout(this.hideTimeout),t?(this.element.hide(),this.visible=!1):this.hideTimeout=setTimeout(function(){return e.element.stop().animate({opacity:0},300,"easeInOutSine",function(){return e.element.hide()}),e.visible=!1},500)},o.prototype.release=function(){var t,e,i,o,n,s,r;for(this.element.off(),this.element.remove(),s=this._boundEvents,o=0,n=s.length;n>o;o++)r=s[o],i=r[0],t=r[1],e=r[2],i.off(t,e);return this._boundEvents=[]},o}(Mercury.Toolbar)}.call(this);