(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}(g.IMAGINARY || (g.IMAGINARY = {})).ContentSliderAnnouncer = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function (global){
!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).Durden=t()}}(function(){return function s(r,a,o){function u(e,t){if(!a[e]){if(!r[e]){var i="function"==typeof require&&require;if(!t&&i)return i(e,!0);if(h)return h(e,!0);var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}var l=a[e]={exports:{}};r[e][0].call(l.exports,function(t){return u(r[e][1][t]||t)},l,l.exports,s,r,a,o)}return a[e].exports}for(var h="function"==typeof require&&require,t=0;t<o.length;t++)u(o[t]);return u}({1:[function(t,e,i){"use strict";var n,l=(n=t("./tiling"))&&n.__esModule?n:{default:n};function s(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var r=function(){function o(t,e,i){var n=3<arguments.length&&void 0!==arguments[3]?arguments[3]:o.MAX_ANGLE;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,o),this.canvas=window.document.createElement("canvas"),t.appendChild(this.canvas),paper.setup(this.canvas),paper.view.applyMatrix=!1,this.tiling=new l.default(e,i),this.bcdeLen=50,this.transformTiles(this.bcdeLen,n,!0),paper.view.update(),paper.view.on("frame",function(){TWEEN.update()})}return function(t,e,i){e&&s(t.prototype,e),i&&s(t,i)}(o,[{key:"getShuffledTiles",value:function(){return o.shuffle(this.tiling.getAllTiles())}},{key:"getShuffledSuperTiles",value:function(){return o.shuffle(this.tiling.getAllSuperTiles())}},{key:"showTilesRandom",value:function(t){return o.setTileVisibilityAnimated(this.getShuffledTiles(),!0,t)}},{key:"showSuperTilesRandom",value:function(t){return o.setTileVisibilityAnimated(this.getShuffledSuperTiles(),!0,t)}},{key:"hideTilesRandom",value:function(t){return o.setTileVisibilityAnimated(this.getShuffledTiles(),!1,t)}},{key:"hideSuperTilesRandom",value:function(t){return o.setTileVisibilityAnimated(this.getShuffledSuperTiles(),!1,t)}},{key:"showTilesOrdered",value:function(t){return o.setTileVisibilityAnimated(this.tiling.getAllTiles(),!0,t)}},{key:"hideTilesOrdered",value:function(t){return o.setTileVisibilityAnimated(this.tiling.getAllTiles(),!1,t)}},{key:"showSuperTilesOrdered",value:function(t){return o.setTileVisibilityAnimated(this.tiling.getAllSuperTiles(),!0,t)}},{key:"hideSuperTilesOrdered",value:function(t){return o.setTileVisibilityAnimated(this.tiling.getAllSuperTiles(),!1,t)}},{key:"setTileVisibility",value:function(e){this.tiling.getAllTiles().forEach(function(t){t.path.opacity=e?1:0})}},{key:"getBounds",value:function(){var t=this.tiling.superTiles[0][0].group.bounds.center,e=this.tiling.superTiles[0][this.tiling.m-1].group.bounds.center,i=this.tiling.superTiles[this.tiling.n-1][0].group.bounds.center,n=this.tiling.superTiles[this.tiling.n-1][this.tiling.m-1].group.bounds.center,l=Math.min(t.x,i.x),s=Math.max(e.x,n.x),r=Math.min(t.y,e.y,i.y,n.y),a=Math.max(t.y,e.y,i.y,n.y);return new paper.Rectangle({from:new paper.Point(l,r),to:new paper.Point(s,a)})}},{key:"transformTilesAnimated",value:function(t,e,i,n){var l=this,s=1<arguments.length&&void 0!==e?e:o.MIN_ANGLE,r=2<arguments.length&&void 0!==i?i:o.MAX_ANGLE,a=3<arguments.length&&void 0!==n&&n;return new TWEEN.Tween({angle:s}).to({angle:r},t).easing(TWEEN.Easing.Sinusoidal.InOut).onUpdate(function(t){l.transformTiles(l.bcdeLen,t.angle,a)}).repeat(1/0).yoyo(!0).start()}},{key:"transformTiles",value:function(t,e,i){var n=2<arguments.length&&void 0!==i&&i;this.tiling.transform(t,e);var l=this.getBounds();n&&(paper.view.getViewSize().width>l.width||(paper.view.getViewSize().height,l.height),paper.view.setScaling(Math.max(paper.view.getViewSize().width/l.width,paper.view.getViewSize().height/l.height))),paper.view.setCenter(l.getCenter())}},{key:"setStroke",value:function(e,i){this.tiling.getAllTiles().forEach(function(t){t.setStroke(e,i)})}},{key:"colorSuperTilesRandom",value:function(i){this.tiling.getAllSuperTiles().forEach(function(t){var e=i[Math.floor(Math.random()*i.length)];t.tile1.path.fillColor=e,t.tile2.path.fillColor=e,t.tile3.path.fillColor=e,t.tile4.path.fillColor=e})}},{key:"colorTilesRandom",value:function(e){this.tiling.getAllTiles().forEach(function(t){t.path.fillColor=e[Math.floor(Math.random()*e.length)]})}},{key:"colorTilesPeriodic",value:function(i){this.tiling.getAllTiles().forEach(function(t,e){t.path.fillColor=i[e%i.length]})}},{key:"colorSuperTilesPeriodic",value:function(i){this.tiling.getAllTiles().forEach(function(t,e){t.path.fillColor=i[Math.floor(e/4)%i.length]})}}],[{key:"shuffle",value:function(t){for(var e=t.length;0!==e;){var i=Math.floor(Math.random()*e),n=t[e-=1];t[e]=t[i],t[i]=n}return t}},{key:"setTileVisibilityAnimated",value:function(n,l,t){var s=0;return new TWEEN.Tween({last:0}).to({last:n.length-1},t).easing(TWEEN.Easing.Cubic.In).onUpdate(function(t){for(var e=Math.floor(t.last),i=s;i<=e;i+=1)n[i].setVisibility(l);s=e}).start()}}]),o}();r.MAX_ANGLE=l.default.MAX_B,r.MIN_ANGLE=l.default.MIN_B,r.Themes={RGB:["#ff9999","#99ff99","#9999ff","#ff99ff"],Spring:["#54678C","#9BDAF2","#F2C12E","#F2E1C2","#D95252"],Flowers:["#D95B96","#BABF1B","#D9981E","#D9751E","#8C1616"],Autumn:["#A62447","#D9326F","#525F43","#6C2A35","#D9936A"],Winter:["#0B0340","#263973","#495F8C","#A0CCF2","#514071"],Christmas:["#F2293A","#F24464","#678C5D","#730202","#BFBFBD"]},e.exports={Durden:r,Themes:r.Themes,MIN_ANGLE:r.MIN_ANGLE,MAX_ANGLE:r.MAX_ANGLE}},{"./tiling":4}],2:[function(t,e,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n,l=(n=t("./tile"))&&n.__esModule?n:{default:n};function s(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var r=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.tile1=new l.default("#ff9999",!1,!1),this.tile2=new l.default("#99ff99",!0,!1),this.tile3=new l.default("#9999ff",!1,!0),this.tile4=new l.default("#ff99ff",!0,!0),this.group=new paper.Group([this.tile1.path,this.tile2.path,this.tile3.path,this.tile4.path]),this.group.applyMatrix=!1}return function(t,e,i){e&&s(t.prototype,e),i&&s(t,i)}(t,[{key:"transform",value:function(t,e){this.tile1.transform(t,e),this.tile2.copyShape(this.tile1,!1),this.tile3.copyShape(this.tile1,!1),this.tile4.copyShape(this.tile1,!1),this.tile2.path.rotate(this.tile1.vE.subtract(this.tile1.vA).getAngle()-this.tile2.vE.subtract(this.tile2.vA).getAngle()),this.tile2.path.translate(this.tile1.vA.subtract(this.tile2.vA)),this.tile3.path.rotate(this.tile1.vE.subtract(this.tile1.vD).getAngle()-this.tile3.vD.subtract(this.tile3.vC).getAngle()),this.tile3.path.translate(this.tile1.vE.subtract(this.tile3.vD)),this.tile4.path.rotate(this.tile3.vE.subtract(this.tile3.vA).getAngle()-this.tile4.vE.subtract(this.tile4.vA).getAngle()),this.tile4.path.translate(this.tile3.vA.subtract(this.tile4.vA))}},{key:"setVisibility",value:function(t){this.tile1.setVisibility(t),this.tile2.setVisibility(t),this.tile3.setVisibility(t),this.tile4.setVisibility(t)}},{key:"copyShape",value:function(t){this.tile1.copyShape(t.tile1),this.tile2.copyShape(t.tile2),this.tile3.copyShape(t.tile3),this.tile4.copyShape(t.tile4)}},{key:"north",get:function(){return this.group.localToParent(this.tile1.vA)}},{key:"nne",get:function(){return this.group.localToParent(this.tile1.vB)}},{key:"nee",get:function(){return this.group.localToParent(this.tile1.vC)}},{key:"south",get:function(){return this.group.localToParent(this.tile3.vA)}},{key:"se",get:function(){return this.group.localToParent(this.tile3.vB)}},{key:"ssw",get:function(){return this.group.localToParent(this.tile4.vB)}},{key:"sww",get:function(){return this.group.localToParent(this.tile4.vC)}},{key:"east",get:function(){return this.group.localToParent(this.tile1.vD)}},{key:"west",get:function(){return this.group.localToParent(this.tile2.vC)}},{key:"nw",get:function(){return this.group.localToParent(this.tile2.vB)}}]),t}();i.default=r},{"./tile":3}],3:[function(t,e,i){"use strict";function n(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var l=function(){function l(t){var e=1<arguments.length&&void 0!==arguments[1]&&arguments[1],i=2<arguments.length&&void 0!==arguments[2]&&arguments[2];!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,l),this.path=new paper.Path,this.path.closed=!0,this.path.applyMatrix=!1,this.path.scale(e?-1:1,i?-1:1),this.path.fillColor=t,this.path.strokeColor="#999999",this.path.strokeWidth=1;for(var n=0;n<5;n+=1)this.path.add(new paper.Point(0,0))}return function(t,e,i){e&&n(t.prototype,e),i&&n(t,i)}(l,[{key:"transform",value:function(e,t){var i=this.path.segments,n=360-2*t,l=(180-t)/2,s=2*Math.sin(t/2*Math.PI/180),r=Math.sqrt(s*s+4-2*s*2*Math.cos((n-l)*Math.PI/180)),a=[0,t,n,2*Math.asin(Math.sin((n-l)*Math.PI/180)/r*s)*180/Math.PI],o=0;[1,2,3,4].forEach(function(t){o+=180-a[t-1],i[t].point.set(i[t-1].point.add(new paper.Point({length:e,angle:o})))})}},{key:"setStroke",value:function(t,e){this.path.strokeWidth=t,this.path.strokeColor=e}},{key:"setColor",value:function(t){this.path.fillColor=t}},{key:"setVisibility",value:function(t){this.path.opacity=t?1:0}},{key:"copyShape",value:function(t,e){for(var i=!(1<arguments.length&&void 0!==e)||e,n=1;n<=4;n+=1)this.path.segments[n].point.set(t.path.segments[n].point);i&&this.path.setMatrix(t.path.getMatrix())}},{key:"vA",get:function(){return this.path.localToParent(this.path.segments[0].point)}},{key:"vB",get:function(){return this.path.localToParent(this.path.segments[1].point)}},{key:"vC",get:function(){return this.path.localToParent(this.path.segments[2].point)}},{key:"vD",get:function(){return this.path.localToParent(this.path.segments[3].point)}},{key:"vE",get:function(){return this.path.localToParent(this.path.segments[4].point)}}]),l}();i.default=l},{}],4:[function(t,e,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n,s=(n=t("./supertile"))&&n.__esModule?n:{default:n};function r(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var l=function(){function l(t,e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,l),this.n=t,this.m=e,this.superTiles=l.createMatrix(this.n,this.m);for(var i=0;i<this.n;i+=1)for(var n=0;n<this.m;n+=1)this.superTiles[i][n]=new s.default,n%2==1&&this.superTiles[i][n].group.scale(1,-1)}return function(t,e,i){e&&r(t.prototype,e),i&&r(t,i)}(l,[{key:"transform",value:function(t,e){var i=this.superTiles[0][0];i.transform(t,e);var n=180-i.tile4.vB.subtract(i.tile1.vC).getAngle(),l=e+i.tile2.vB.subtract(i.tile2.vA).getAngle();this.superTiles[0][0].group.rotation=n;for(var s=0;s<this.n;s+=1)for(var r=0;r<this.m;r+=1)if(0!==s||0!==r){this.superTiles[s][r].copyShape(i),this.superTiles[s][r].group.rotation=r%2==1?n+l:n;var a=[];0<s&&(r%2==1?a.push(this.superTiles[s-1][r].sww.subtract(this.superTiles[s][r].nne)):a.push(this.superTiles[s-1][r].nne.subtract(this.superTiles[s][r].sww))),0<r&&a.push(this.superTiles[s][r-1].south.subtract(this.superTiles[s][r].west)),1===a.length&&this.superTiles[s][r].group.translate(a[0]),2===a.length&&this.superTiles[s][r].group.translate(a[0].add(a[1]).multiply(.5))}}},{key:"getAllTiles",value:function(){var e=[];return this.superTiles.forEach(function(t){t.forEach(function(t){e.push(t.tile1),e.push(t.tile2),e.push(t.tile3),e.push(t.tile4)})}),e}},{key:"getAllSuperTiles",value:function(){var e=[];return this.superTiles.forEach(function(t){t.forEach(function(t){e.push(t)})}),e}}],[{key:"createMatrix",value:function(t,e){for(var i=[],n=0;n<t;n+=1){for(var l=[],s=0;s<e;s+=1)l.push([]);i.push(l)}return i}}]),l}();(i.default=l).MIN_B=74,l.MAX_B=156},{"./supertile":2}]},{},[1])(1)});


}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],2:[function(require,module,exports){
(function (global){
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.TextPoster = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

/**
 * Places poster-style text inside a container
 *
 * The container will be emptied of whatever children it has (which allows successive invocations).
 *
 * @param {HTMLElement} container
 *  A block element in which to place the text.
 * @param {String} text
 *  The text to typeset
 * @param {Object} options
 *  Options:
 *    - maxLineHeight (default: 0.2) Maximum line height (as a percentage of the block's width)
 *    - minLineHeight (default: 0.044) Minimum line height (as a percentage of the block's width)
 *    - lineSpacing (default: 0) Space, in pixels, to place between lines.
 */
function render(container, text) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var defaultOptions = {
    maxLineHeight: 0.2,
    minLineHeight: 0.044,
    lineSpacing: 0
  };

  var _Object$assign = Object.assign({}, defaultOptions, options),
      maxLineHeight = _Object$assign.maxLineHeight,
      minLineHeight = _Object$assign.minLineHeight,
      lineSpacing = _Object$assign.lineSpacing; // Clear the container


  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  var lineContainer = document.createElement('div');
  lineContainer.classList.add('line-container');
  container.append(lineContainer);
  var lastHeight = 0;
  var lines = text.split('\n').filter(function (each) {
    return each.length > 0;
  });
  lines.forEach(function (line) {
    var lineText = line;
    var smallText = false; // Check for escape characters

    if (line.trim().substr(0, 2) === '@@') {
      lineText = line.trim().substr(2).trim();
      smallText = true;
    }

    if (lineText.length > 0) {
      var words = lineText.split(' ');
      var fromWord = 0;
      var toWord = 0;

      while (fromWord < words.length) {
        var lineElement = document.createElement('div');
        lineElement.classList.add('line');
        lineContainer.append(lineElement);
        var sizeFactor = 1; // Add words until the line's height becomes smaller than the minimum

        do {
          toWord += 1;
          lineElement.textContent = words.slice(fromWord, toWord).join(' ');
          sizeFactor = container.clientWidth / lineElement.clientWidth;
        } while (toWord <= words.length && lineElement.clientHeight * sizeFactor / container.clientHeight >= minLineHeight); // If we exited the loop because the height became less than the minimum


        if (toWord <= words.length) {
          // If possible remove one word to go back above the minimum
          if (toWord > fromWord + 1) {
            toWord -= 1;
          }
        }

        lineElement.textContent = words.slice(fromWord, toWord).join(' ');

        if (smallText) {
          // Make the line the minimum height unless it doesn't fit and it needs shrinking
          // (this happens with single words that are very long)
          sizeFactor = Math.min(container.clientWidth / lineElement.clientWidth, minLineHeight * container.clientHeight / lineElement.clientHeight);
        } else {
          // Make the line the full width unless it goes over the max height and it needs
          // shrinking
          sizeFactor = Math.min(container.clientWidth / lineElement.clientWidth, maxLineHeight * container.clientHeight / lineElement.clientHeight);
        } // Center the line


        lineElement.style.left = "".concat((container.clientWidth - lineElement.clientWidth * sizeFactor) / 2, "px");
        lineElement.style.transform = "scale(".concat(sizeFactor, ")");
        lineElement.style.top = "".concat(lastHeight, "px");
        lastHeight += lineElement.clientHeight * sizeFactor + lineSpacing;
        fromWord = toWord;
      }
    }
  });
  lineContainer.style.top = "".concat((container.clientHeight - lastHeight) / 2, "px");
}

module.exports = {
  render: render
};

},{}]},{},[1])(1)
});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AnnouncerFrame =
/*#__PURE__*/
function () {
  function AnnouncerFrame() {
    _classCallCheck(this, AnnouncerFrame);

    this.busy = false;
    this.visible = false;
    this.wrapper = null;
    this.iframe = null;
    this.hideTimeout = null;
  }

  _createClass(AnnouncerFrame, [{
    key: "show",
    value: function show(announcerSrc, text) {
      var _this = this;

      var userOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      if (this.busy || this.visible) {
        return;
      }

      this.busy = true;
      var defaultOptions = {
        duration: 60000
      };
      var options = Object.assign({}, defaultOptions, userOptions);
      this.visible = true;
      this.wrapper = window.document.createElement('div');
      this.wrapper.classList.add('content-slider-announcer-wrapper');
      this.iframe = window.document.createElement('iframe');
      this.iframe.setAttribute('src', announcerSrc);
      this.iframe.setAttribute('allowtransparency', 'true');
      this.iframe.addEventListener('load', function () {
        _this.iframe.contentWindow.postMessage({
          type: 'announce',
          text: text,
          options: userOptions
        });
      });
      var eventMask = window.document.createElement('div');
      eventMask.classList.add('content-slider-announcer-eventMask');
      eventMask.addEventListener('click', function () {
        _this.hide();
      });
      this.wrapper.append(this.iframe);
      this.wrapper.append(eventMask);
      window.document.querySelector('body').append(this.wrapper);
      this.hideTimeout = setTimeout(function () {
        _this.hide();

        _this.clearTimeoutTimer();
      }, options.duration);
      this.busy = false;
    }
  }, {
    key: "hide",
    value: function hide() {
      var _this2 = this;

      if (this.busy || !this.visible) {
        return;
      }

      this.busy = true;
      this.iframe.contentWindow.postMessage({
        type: 'hide',
        duration: AnnouncerFrame.HIDE_DELAY
      });
      setTimeout(function () {
        _this2.destroyFrame();

        _this2.busy = false;
      }, AnnouncerFrame.HIDE_DELAY);
    }
  }, {
    key: "hideNow",
    value: function hideNow() {
      if (this.busy || !this.visible) {
        return;
      }

      this.busy = true;
      this.destroyFrame();
      this.busy = false;
    }
  }, {
    key: "destroyFrame",
    value: function destroyFrame() {
      this.clearTimeoutTimer();
      this.wrapper.remove();
      this.wrapper = null;
      this.iframe = null;
      this.visible = false;
    }
  }, {
    key: "clearTimeoutTimer",
    value: function clearTimeoutTimer() {
      if (this.hideTimeout !== null) {
        clearTimeout(this.hideTimeout);
        this.hideTimeout = null;
      }
    }
  }]);

  return AnnouncerFrame;
}();

exports["default"] = AnnouncerFrame;
AnnouncerFrame.HIDE_DELAY = 2000;

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _durden = _interopRequireDefault(require("@imaginary-maths/durden"));

var _textPoster = _interopRequireDefault(require("@imaginary-maths/text-poster"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Announcer =
/*#__PURE__*/
function () {
  function Announcer() {
    _classCallCheck(this, Announcer);

    this.container = window.document.createElement('div');
    this.container.classList.add('content-slider-announcement');
    window.document.querySelector('body').append(this.container);
    this.bgContainer = window.document.createElement('div');
    this.bgContainer.classList.add('content-slider-announcement-bg');
    this.container.append(this.bgContainer);
    this.txtContainer = window.document.createElement('div');
    this.txtContainer.classList.add('content-slider-announcement-txt');
    this.container.append(this.txtContainer);
    this.tiler = null;
    this.runningTween = null;
  }

  _createClass(Announcer, [{
    key: "announce",
    value: function announce(text) {
      var _this = this;

      var userOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var defaultOptions = {
        tilesAcross: 8,
        tilesVertically: 20,
        startAngle: 150,
        endAngle: _durden["default"].MIN_ANGLE,
        fadeInDuration: 5000,
        transformLoopDuration: 30000,
        strokeWidth: 1,
        strokeColor: '#000000',
        themes: []
      };
      var options = Object.assign({}, defaultOptions, userOptions);
      this.tiler = new _durden["default"].Durden(this.bgContainer, options.tilesAcross, options.tilesVertically, options.startAngle);
      this.tiler.setStroke(options.strokeWidth, options.strokeColor); // Color randomly with a default in case selecting a theme fails
      // because it was overriden with something in the wrong format

      this.tiler.colorTilesPeriodic(Announcer.DEFAULT_COLORS);
      this.selectTheme(options);
      this.tiler.setTileVisibility(false);
      this.runningTween = this.tiler.showTilesRandom(options.fadeInDuration).onComplete(function () {
        _this.runningTween = _this.tiler.transformTilesAnimated(options.transformLoopDuration, options.startAngle, options.endAngle, true);

        _textPoster["default"].render(_this.txtContainer, text);

        setTimeout(function () {
          _this.txtContainer.classList.add('visible');
        }, 0);
      });
    }
  }, {
    key: "selectTheme",
    value: function selectTheme(options) {
      var themes = options.themes;

      if (themes.length > 0) {
        var themeName = themes[Math.floor(Math.random() * themes.length)];
        var theme = options["theme_".concat(themeName)];

        if (theme && theme.mode && theme.colors instanceof Array) {
          if (theme.mode === 'random-supertile') {
            this.tiler.colorSuperTilesRandom(theme.colors);
          } else if (theme.mode === 'periodic-supertile') {
            this.tiler.colorSuperTilesPeriodic(theme.colors);
          } else if (theme.mode === 'periodic') {
            this.tiler.colorTilesPeriodic(theme.colors);
          } else {
            this.tiler.colorTilesRandom(theme.colors);
          }
        }
      }
    }
  }, {
    key: "hide",
    value: function hide() {
      var duration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2000;

      if (this.runningTween != null) {
        this.runningTween.stop();
      }

      this.txtContainer.classList.remove('visible');
      this.runningTween = this.tiler.hideSuperTilesOrdered(duration);
    }
  }]);

  return Announcer;
}();

exports["default"] = Announcer;
Announcer.DEFAULT_COLORS = ['#BF1736', '#0D1440', '#1438A6', '#0E2773'];

},{"@imaginary-maths/durden":1,"@imaginary-maths/text-poster":2}],5:[function(require,module,exports){
"use strict";

var _announcer = _interopRequireDefault(require("./announcer"));

var _announcerFrame = _interopRequireDefault(require("./announcer-frame"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var announcerFrame = null;
/**
 * Show an announcement on screen
 *
 * @param {string} announcerSrc
 *  URL of the index.html file of content-slider-announcer
 * @param {string} text
 *  Text to display
 * @param {object} options
 *  Options (see README)
 */

function createAnnouncement(announcerSrc, text) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (announcerFrame === null) {
    announcerFrame = new _announcerFrame["default"]();
  }

  announcerFrame.show(announcerSrc, text, options);
}
/**
 * Hide the announcement
 */


function hideAnnouncement() {
  if (announcerFrame !== null) {
    announcerFrame.hide();
  }
}
/**
 * Hide the announcement without animations / delay
 */


function hideAnnouncementNow() {
  if (announcerFrame !== null) {
    announcerFrame.hideNow();
  }
}
/**
 * Does initialization in the frame used to show the announcements
 *
 * This method is called within the framed index.html. It's not really
 * part of the public interface.
 */


function initFrame() {
  var announcer = new _announcer["default"]();
  window.addEventListener('message', function (event) {
    var type = event.data.type;

    if (type === 'announce') {
      var _event$data = event.data,
          text = _event$data.text,
          options = _event$data.options;
      announcer.announce(text, options);
    } else if (type === 'hide') {
      var duration = event.data.duration;
      announcer.hide(duration);
    }
  }, false);
}

module.exports = {
  initFrame: initFrame,
  createAnnouncement: createAnnouncement,
  hideAnnouncement: hideAnnouncement,
  hideAnnouncementNow: hideAnnouncementNow
};

},{"./announcer":4,"./announcer-frame":3}]},{},[5])(5)
});
