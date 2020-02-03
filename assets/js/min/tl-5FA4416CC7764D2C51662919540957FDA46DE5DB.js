var mathMin=Math.min,mathMax=Math.max,mathRandom=Math.random,mathRound=Math.round;function boundAlpha(t){return t=parseFloat(t),(isNaN(t)||t<0||t>1)&&(t=1),t}function bound01(t,n){isOnePointZero(t)&&(t="100%");var e=isPercentage(t);return t=mathMin(n,mathMax(0,parseFloat(t))),e&&(t=parseInt(t*n,10)/100),Math.abs(t-n)<1e-6?1:t%n/parseFloat(n)}function clamp01(t){return mathMin(1,mathMax(0,t))}function parseIntFromHex(t){return parseInt(t,16)}function isOnePointZero(t){return"string"==typeof t&&-1!=t.indexOf(".")&&1===parseFloat(t)}function isPercentage(t){return"string"==typeof t&&-1!=t.indexOf("%")}function pad2(t){return 1==t.length?"0"+t:""+t}function convertToPercentage(t){return t<=1&&(t=100*t+"%"),t}function convertDecimalToHex(t){return Math.round(255*parseFloat(t)).toString(16)}function convertHexToDecimal(t){return parseIntFromHex(t)/255}window.AzrTool={rgbToHsl:function(t,n,e){t/=255,n/=255,e/=255;var r,o,a=Math.max(t,n,e),c=Math.min(t,n,e),i=(a+c)/2;if(a==c)r=o=0;else{var u=a-c;switch(o=i>.5?u/(2-a-c):u/(a+c),a){case t:r=(n-e)/u+(n<e?6:0);break;case n:r=(e-t)/u+2;break;case e:r=(t-n)/u+4}r/=6}return{h:r,s:o,l:i}},hslToRgb:function(t,n,e){var r,o,a;function c(t,n,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?t+6*(n-t)*e:e<.5?n:e<2/3?t+(n-t)*(2/3-e)*6:t}if(t=bound01(t,360),n=bound01(n,100),e=bound01(e,100),0===n)r=o=a=e;else{var i=e<.5?e*(1+n):e+n-e*n,u=2*e-i;r=c(u,i,t+1/3),o=c(u,i,t),a=c(u,i,t-1/3)}return{r:255*r,g:255*o,b:255*a}},rgbToHsv:function(t,n,e){t=bound01(t,255),n=bound01(n,255),e=bound01(e,255);var r,o,a=mathMax(t,n,e),c=mathMin(t,n,e),i=a,u=a-c;if(o=0===a?0:u/a,a==c)r=0;else{switch(a){case t:r=(n-e)/u+(n<e?6:0);break;case n:r=(e-t)/u+2;break;case e:r=(t-n)/u+4}r/=6}return{h:r,s:o,v:i}},hsvToRgb:function(t,n,e){t=6*bound01(t,360),n=bound01(n,100),e=bound01(e,100);var r=Math.floor(t),o=t-r,a=e*(1-n),c=e*(1-o*n),i=e*(1-(1-o)*n),u=r%6;return{r:255*[e,c,a,a,i,e][u],g:255*[i,e,e,c,a,a][u],b:255*[a,a,i,e,e,c][u]}},rgbToHex:function(t,n,e,r){var o=[pad2(mathRound(t).toString(16)),pad2(mathRound(n).toString(16)),pad2(mathRound(e).toString(16))];return r&&o[0].charAt(0)==o[0].charAt(1)&&o[1].charAt(0)==o[1].charAt(1)&&o[2].charAt(0)==o[2].charAt(1)?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0):o.join("")},rgbaToHex:function(t,n,e,r,o){var a=[pad2(mathRound(t).toString(16)),pad2(mathRound(n).toString(16)),pad2(mathRound(e).toString(16)),pad2(convertDecimalToHex(r))];return o&&a[0].charAt(0)==a[0].charAt(1)&&a[1].charAt(0)==a[1].charAt(1)&&a[2].charAt(0)==a[2].charAt(1)&&a[3].charAt(0)==a[3].charAt(1)?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0)+a[3].charAt(0):a.join("")},toHslString:function(t){return"hsl("+Math.round(360*t.h)+", "+Math.round(100*t.s)+"%, "+Math.round(100*t.l)+"%)"},toHsvString:function(t){return"hsv("+mathRound(360*t.h)+", "+mathRound(100*t.s)+"%, "+mathRound(100*t.v)+"%)"},hexToString:function(t){return"#"+this.rgbToHex(t.r,t.g,t.b)},rgbToString:function(t){return"rgb("+t.r+", "+t.g+", "+t.b+")"},getLuminance:function(){var t,n,e,r=this.toRgb();return t=r.r/255,n=r.g/255,e=r.b/255,.2126*(t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4))+.7152*(n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4))+.0722*(e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4))},hexToRgb:function(t){t=t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(t,n,e,r){return n+n+e+e+r+r});var n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return n?{r:parseInt(n[1],16),g:parseInt(n[2],16),b:parseInt(n[3],16)}:null}},[Element.prototype,Document.prototype,DocumentFragment.prototype].forEach(function(t){t.hasOwnProperty("prepend")||Object.defineProperty(t,"prepend",{configurable:!0,enumerable:!0,writable:!0,value:function(){var t=Array.prototype.slice.call(arguments),n=document.createDocumentFragment();t.forEach(function(t){var e=t instanceof Node;n.appendChild(e?t:document.createTextNode(String(t)))}),this.insertBefore(n,this.firstChild)}})}),function(){var t=document.getElementById("btn_convert_to_hex"),n=document.getElementById("btn_convert_to_rgb");null!==t?t.onclick=function(){var t=document.getElementById("red"),n=document.getElementById("green"),e=document.getElementById("blue");if(null!=t&&null!=n&&null!=e&&(t=t.value,n=n.value,e=e.value,!1!=(t>=0&&t<=255)&&!1!=(n>=0&&n<=255)&&!1!=(e>=0&&e<=255))){var r=document.createElement("div");r.className="row",r.innerHTML='<div class="cell color single">  <div class="box"></div>  <ul>    <li class="rgb"></li>    <li class="hex"></li>    <li class="hsl"></li>    <li class="hsv"></li>  </ul></div>';var o=window.AzrTool.toHslString(window.AzrTool.rgbToHsl(t,n,e)),a=window.AzrTool.toHsvString(window.AzrTool.rgbToHsv(t,n,e)),c=window.AzrTool.rgbToString({r:t,g:n,b:e}),i=window.AzrTool.hexToString({r:t,g:n,b:e});r.querySelector(".box").style.backgroundColor=c,r.querySelector(".rgb").textContent=c,r.querySelector(".hex").textContent=i,r.querySelector(".hsl").textContent=o,r.querySelector(".hsv").textContent=a,document.getElementById("images").prepend(r)}}:null!==n&&(n.onclick=function(){var t=document.getElementById("hex");if(!(null==t||t.value.length<1)){t="#"+t.value;var n=document.createElement("div");n.className="row",n.innerHTML='<div class="cell color single">  <div class="box"></div>  <ul>    <li class="rgb"></li>  </ul></div>';var e=window.AzrTool.rgbToString(window.AzrTool.hexToRgb(t));n.querySelector(".box").style.backgroundColor=e,n.querySelector(".rgb").textContent=e,document.getElementById("images").prepend(n)}})}();