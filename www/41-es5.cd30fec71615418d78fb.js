function _defineProperties(e,n){for(var l=0;l<n.length;l++){var t=n[l];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function _createClass(e,n,l){return n&&_defineProperties(e.prototype,n),l&&_defineProperties(e,l),e}function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{FSnT:function(e,n,l){"use strict";l.r(n);var t=l("8Y7J"),o=function e(){_classCallCheck(this,e)},a=l("pMnS"),r=l("MKJQ"),i=l("sZkV"),u=function(){function e(n){_classCallCheck(this,e),this._elementRef=n,this.$mapReady=new t.EventEmitter,this._mapIdledOnce=!1}return _createClass(e,[{key:"ngOnInit",value:function(){this.initMap()}},{key:"initMap",value:function(){var e=this;this._el=this._elementRef.nativeElement,this._map=new google.maps.Map(this._el,this.mapOptions);var n=this._map.addListener("idle",(function(){console.log("mapReady - IDLE"),e._mapIdledOnce||(e.$mapReady.emit(e._map),e._mapIdledOnce=!0,google.maps.event.removeListener(n))}))}}]),e}(),c=t["\u0275crt"]({encapsulation:2,styles:[],data:{}});function d(e){return t["\u0275vid"](0,[],null,null)}var s=l("mrSG"),p=l("gcOT").a.Geolocation,m=function(){function e(n){_classCallCheck(this,e),this.loadingController=n,this.mapOptions={zoom:15,center:{lat:-34.9199842,lng:-56.149849}}}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this._GoogleMap.$mapReady.subscribe((function(n){e.map=n})),this.createLoader()}},{key:"createLoader",value:function(){return s.__awaiter(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.loadingController.create({message:"Trying to get your current location..."});case 2:this.loadingElement=e.sent;case 3:case"end":return e.stop()}}),e,this)})))}},{key:"presentLoader",value:function(){return s.__awaiter(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.loadingElement.present();case 2:case"end":return e.stop()}}),e,this)})))}},{key:"dismissLoader",value:function(){return s.__awaiter(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=this.loadingElement,!e.t0){e.next=4;break}return e.next=4,this.loadingElement.dismiss();case 4:case"end":return e.stop()}}),e,this)})))}},{key:"geolocateMe",value:function(){var e=this;this.presentLoader(),p.getCurrentPosition().then((function(n){var l=new google.maps.LatLng(n.coords.latitude,n.coords.longitude);e.map.panTo(l),new google.maps.Marker({position:l,title:"You are here!"}).setMap(e.map)})).catch((function(e){console.log("Error getting current location",e)})).finally((function(){return e.dismissLoader()}))}}]),e}(),f=t["\u0275crt"]({encapsulation:0,styles:[["google-map[_ngcontent-%COMP%]{display:block;width:100%;height:100%}"]],data:{}});function g(e){return t["\u0275vid"](0,[t["\u0275qud"](402653184,1,{_GoogleMap:0}),(e()(),t["\u0275eld"](1,0,null,null,10,"ion-header",[],null,null,null,r.gb,r.m)),t["\u0275did"](2,49152,null,0,i.B,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(e()(),t["\u0275eld"](3,0,null,0,8,"ion-toolbar",[["color","primary"]],null,null,null,r.Nb,r.T)),t["\u0275did"](4,49152,null,0,i.zb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"]},null),(e()(),t["\u0275eld"](5,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,r.Y,r.e)),t["\u0275did"](6,49152,null,0,i.l,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(e()(),t["\u0275eld"](7,0,null,0,1,"ion-menu-button",[],null,null,null,r.pb,r.w)),t["\u0275did"](8,49152,null,0,i.R,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(e()(),t["\u0275eld"](9,0,null,0,2,"ion-title",[],null,null,null,r.Lb,r.R)),t["\u0275did"](10,49152,null,0,i.xb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(e()(),t["\u0275ted"](-1,0,["Maps & Geolocation"])),(e()(),t["\u0275eld"](12,0,null,null,9,"ion-content",[],null,null,null,r.bb,r.h)),t["\u0275did"](13,49152,null,0,i.u,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(e()(),t["\u0275eld"](14,0,null,0,5,"ion-fab",[["horizontal","end"],["slot","fixed"],["vertical","top"]],null,null,null,r.eb,r.j)),t["\u0275did"](15,49152,null,0,i.w,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(e()(),t["\u0275eld"](16,0,null,0,3,"ion-fab-button",[["color","secondary"]],null,[[null,"click"]],(function(e,n,l){var t=!0;return"click"===n&&(t=!1!==e.component.geolocateMe()&&t),t}),r.db,r.k)),t["\u0275did"](17,49152,null,0,i.x,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"]},null),(e()(),t["\u0275eld"](18,0,null,0,1,"ion-icon",[["name","locate"]],null,null,null,r.hb,r.n)),t["\u0275did"](19,49152,null,0,i.C,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null),(e()(),t["\u0275eld"](20,0,null,0,1,"google-map",[],null,null,null,d,c)),t["\u0275did"](21,114688,[[1,4]],0,u,[t.ElementRef],{mapOptions:[0,"mapOptions"]},null)],(function(e,n){var l=n.component;e(n,4,0,"primary"),e(n,15,0,"end","top"),e(n,17,0,"secondary"),e(n,19,0,"locate"),e(n,21,0,l.mapOptions)}),null)}var h=t["\u0275ccf"]("app-maps",m,(function(e){return t["\u0275vid"](0,[(e()(),t["\u0275eld"](0,0,null,null,1,"app-maps",[],null,null,null,g,f)),t["\u0275did"](1,114688,null,0,m,[i.Db],null,null)],(function(e,n){e(n,1,0)}),null)}),{},{},[]),v=l("SVse"),R=l("s7LF"),b=l("IheW"),C=l("ZpN7"),_=l("Kt/9"),y=l("j1ZV"),k=l("iInd");l.d(n,"MapsPageModuleNgFactory",(function(){return w}));var w=t["\u0275cmf"](o,[],(function(e){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[a.a,h]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,v.NgLocalization,v.NgLocaleLocalization,[t.LOCALE_ID,[2,v["\u0275angular_packages_common_common_a"]]]),t["\u0275mpd"](4608,i.b,i.b,[t.NgZone,t.ApplicationRef]),t["\u0275mpd"](4608,i.Fb,i.Fb,[i.b,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](4608,i.Hb,i.Hb,[i.b,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](4608,R.u,R.u,[]),t["\u0275mpd"](4608,b.h,b.n,[v.DOCUMENT,t.PLATFORM_ID,b.l]),t["\u0275mpd"](4608,b.o,b.o,[b.h,b.m]),t["\u0275mpd"](5120,b.a,(function(e){return[e]}),[b.o]),t["\u0275mpd"](4608,b.k,b.k,[]),t["\u0275mpd"](6144,b.i,null,[b.k]),t["\u0275mpd"](4608,b.g,b.g,[b.i]),t["\u0275mpd"](6144,b.b,null,[b.g]),t["\u0275mpd"](4608,b.f,b.j,[b.b,t.Injector]),t["\u0275mpd"](4608,b.c,b.c,[b.f]),t["\u0275mpd"](5120,t.APP_INITIALIZER,(function(e){return[C.b(e)]}),[_.a]),t["\u0275mpd"](1073742336,v.CommonModule,v.CommonModule,[]),t["\u0275mpd"](1073742336,i.Bb,i.Bb,[]),t["\u0275mpd"](1073742336,R.t,R.t,[]),t["\u0275mpd"](1073742336,R.j,R.j,[]),t["\u0275mpd"](1073742336,b.e,b.e,[]),t["\u0275mpd"](1073742336,b.d,b.d,[]),t["\u0275mpd"](1073742336,C.a,C.a,[]),t["\u0275mpd"](1073742336,y.a,y.a,[]),t["\u0275mpd"](1073742336,k.p,k.p,[[2,k.u],[2,k.m]]),t["\u0275mpd"](1073742336,o,o,[]),t["\u0275mpd"](256,b.l,"XSRF-TOKEN",[]),t["\u0275mpd"](256,b.m,"X-XSRF-TOKEN",[]),t["\u0275mpd"](1024,k.k,(function(){return[[{path:"",component:m}]]}),[])])}))}}]);