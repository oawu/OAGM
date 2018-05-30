/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2015 - 2018, OAF2E
 * @license     http://opensource.org/licenses/MIT  MIT License
 * @link        https://www.ioa.tw/
 */

function OAGM(t){this._div=null,this._option=Object.assign({className:"",top:0,left:0,width:32,height:32,map:null,position:null},t),this._option.map&&this.setMap(this._option.map)}function initOAGM(){OAGM.prototype=new google.maps.OverlayView,Object.assign(OAGM.prototype,{setPoint:function(){if(!this._option.position)return this._div.style.left="-999px",void(this._div.style.top="-999px");var t=this.getProjection().fromLatLngToDivPixel(this._option.position);t&&(this._div.style.left=t.x-this._option.width/2+this._option.left+"px",this._div.style.top=t.y-this._option.height/2+this._option.top+"px")},draw:function(){if(!this._div){console.error("x"),this._div=document.createElement("div"),this._div.style.position="absolute",this._div.className=this._option.className,this._div.style.width=this._option.width+"px",this._div.style.height=this._option.height+"px";var i=this;google.maps.event.addDomListener(this._div,"click",function(t){t.stopPropagation&&t.stopPropagation(),google.maps.event.trigger(i,"click")}),this.getPanes().overlayImage.appendChild(this._div)}this.setPoint()},remove:function(){return this._div&&(this._div.parentNode.removeChild(this._div),this._div=null),this},setWidth:function(t){return this._option.width=t,this._div.style.width=this._option.width+"px",this.setPoint(),this},setHeight:function(t){return this._option.height=t,this._div.style.height=this._option.height+"px",this.setPoint(),this},setTop:function(t){return this._option.top=t,this._div.style.top=this._option.top+"px",this.setPoint(),this},setLeft:function(t){return this._option.left=t,this._div.style.left=this._option.left+"px",this.setPoint(),this},setPosition:function(t){return this.map&&(this._option.position=t,this.setPoint()),this},getPosition:function(){return this._option.position}})}