function _classCallCheck(n,l){if(!(n instanceof l))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,l){for(var e=0;e<l.length;e++){var t=l[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function _createClass(n,l,e){return l&&_defineProperties(n.prototype,l),e&&_defineProperties(n,e),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{"4/Id":function(n,l,e){"use strict";e.r(l);var t=e("8Y7J"),i=function(){function n(l){_classCallCheck(this,n),this.http=l}return _createClass(n,[{key:"getData",value:function(){return this.http.get("./assets/sample-data/notifications.json")}}]),n}(),o=function(){function n(l){_classCallCheck(this,n),this.notificationsService=l}return _createClass(n,[{key:"resolve",value:function(){return{source:this.notificationsService.getData()}}}]),n}(),u=o,a=function n(){_classCallCheck(this,n)},c=e("pMnS"),d=e("MKJQ"),r=e("sZkV"),s=e("M4wD"),g=e("B7gC"),p=e("6LEC"),f=e("2gss"),m=e("SVse"),C=function(){function n(l){_classCallCheck(this,n),this.route=l}return _createClass(n,[{key:"ngOnInit",value:function(){var n=this;this.route&&this.route.data&&this.route.data.subscribe((function(l){var e=l.data;e&&e.source.subscribe((function(l){l&&(n.notifications=l)}))}))}}]),n}(),b=e("iInd"),h=t["\u0275crt"]({encapsulation:0,styles:[["[_nghost-%COMP%]{--page-margin:var(--app-narrow-margin)}.notifications-content[_ngcontent-%COMP%]   ion-item-divider[_ngcontent-%COMP%]{--background:var(--ion-color-light);--padding-start:var(--page-margin)}.notifications-content[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%]{--padding-start:0px;--inner-padding-end:0px;padding:var(--page-margin);color:var(--ion-color-medium);box-shadow:inset 0 8px 2px -9px var(--ion-color-darkest)}.notifications-content[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%]   .notification-item-wrapper[_ngcontent-%COMP%]{--ion-grid-column-padding:0px;width:100%;-webkit-box-align:center;align-items:center}.notifications-content[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;justify-content:space-around;padding-left:var(--page-margin)}.notifications-content[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .details-name[_ngcontent-%COMP%]{margin-top:0;margin-bottom:5px;font-size:16px;font-weight:400;letter-spacing:.2px;color:var(--ion-color-secondary)}.notifications-content[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .details-description[_ngcontent-%COMP%]{font-size:12px;margin:0}.notifications-content[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%]   .date-wrapper[_ngcontent-%COMP%]{align-self:flex-start}.notifications-content[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%]   .date-wrapper[_ngcontent-%COMP%]   .notification-date[_ngcontent-%COMP%]{margin:0;font-size:12px;text-align:end}"],["app-image-shell.notification-image[_ngcontent-%COMP%]{--image-shell-border-radius:50%}"]],data:{}});function R(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,20,"ion-item",[["class","notification-item"],["lines","none"]],null,null,null,d.lb,d.p)),t["\u0275did"](1,49152,null,0,r.H,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{lines:[0,"lines"]},null),(n()(),t["\u0275eld"](2,0,null,0,18,"ion-row",[["class","notification-item-wrapper"]],null,null,null,d.wb,d.C)),t["\u0275did"](3,49152,null,0,r.gb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](4,0,null,0,6,"ion-col",[["size","2"]],null,null,null,d.ab,d.g)),t["\u0275did"](5,49152,null,0,r.t,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(n()(),t["\u0275eld"](6,0,null,0,4,"app-aspect-ratio",[],[[4,"padding",null]],null,null,s.b,s.a)),t["\u0275did"](7,49152,null,0,g.a,[],{ratio:[0,"ratio"]},null),t["\u0275pod"](8,{w:0,h:1}),(n()(),t["\u0275eld"](9,0,null,0,1,"app-image-shell",[["class","notification-image"]],[[2,"img-loaded",null],[4,"backgroundImage",null],[1,"display",0]],null,null,p.b,p.a)),t["\u0275did"](10,49152,null,0,f.a,[t.PLATFORM_ID],{src:[0,"src"],alt:[1,"alt"]},null),(n()(),t["\u0275eld"](11,0,null,0,5,"ion-col",[["class","details-wrapper"]],null,null,null,d.ab,d.g)),t["\u0275did"](12,49152,null,0,r.t,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](13,0,null,0,1,"h2",[["class","details-name"]],null,null,null,null,null)),(n()(),t["\u0275ted"](14,null,["",""])),(n()(),t["\u0275eld"](15,0,null,0,1,"p",[["class","details-description"]],null,null,null,null,null)),(n()(),t["\u0275ted"](16,null,["",""])),(n()(),t["\u0275eld"](17,0,null,0,3,"ion-col",[["class","date-wrapper"],["size","2"]],null,null,null,d.ab,d.g)),t["\u0275did"](18,49152,null,0,r.t,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(n()(),t["\u0275eld"](19,0,null,0,1,"h3",[["class","notification-date"]],null,null,null,null,null)),(n()(),t["\u0275ted"](20,null,["",""]))],(function(n,l){n(l,1,0,"none"),n(l,5,0,"2");var e=n(l,8,0,1,1);n(l,7,0,e),n(l,10,0,l.context.$implicit.image,"user image"),n(l,18,0,"2")}),(function(n,l){n(l,6,0,t["\u0275nov"](l,7).ratioPadding),n(l,9,0,t["\u0275nov"](l,10).imageLoaded,t["\u0275nov"](l,10).backgroundImage,t["\u0275nov"](l,10).display),n(l,14,0,l.context.$implicit.name),n(l,16,0,l.context.$implicit.message),n(l,20,0,l.context.$implicit.date)}))}function v(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,20,"ion-item",[["class","notification-item"],["lines","none"]],null,null,null,d.lb,d.p)),t["\u0275did"](1,49152,null,0,r.H,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{lines:[0,"lines"]},null),(n()(),t["\u0275eld"](2,0,null,0,18,"ion-row",[["class","notification-item-wrapper"]],null,null,null,d.wb,d.C)),t["\u0275did"](3,49152,null,0,r.gb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](4,0,null,0,6,"ion-col",[["size","2"]],null,null,null,d.ab,d.g)),t["\u0275did"](5,49152,null,0,r.t,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(n()(),t["\u0275eld"](6,0,null,0,4,"app-aspect-ratio",[],[[4,"padding",null]],null,null,s.b,s.a)),t["\u0275did"](7,49152,null,0,g.a,[],{ratio:[0,"ratio"]},null),t["\u0275pod"](8,{w:0,h:1}),(n()(),t["\u0275eld"](9,0,null,0,1,"app-image-shell",[["class","notification-image"]],[[2,"img-loaded",null],[4,"backgroundImage",null],[1,"display",0]],null,null,p.b,p.a)),t["\u0275did"](10,49152,null,0,f.a,[t.PLATFORM_ID],{src:[0,"src"],alt:[1,"alt"]},null),(n()(),t["\u0275eld"](11,0,null,0,5,"ion-col",[["class","details-wrapper"]],null,null,null,d.ab,d.g)),t["\u0275did"](12,49152,null,0,r.t,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](13,0,null,0,1,"h2",[["class","details-name"]],null,null,null,null,null)),(n()(),t["\u0275ted"](14,null,["",""])),(n()(),t["\u0275eld"](15,0,null,0,1,"p",[["class","details-description"]],null,null,null,null,null)),(n()(),t["\u0275ted"](16,null,["",""])),(n()(),t["\u0275eld"](17,0,null,0,3,"ion-col",[["class","date-wrapper"],["size","2"]],null,null,null,d.ab,d.g)),t["\u0275did"](18,49152,null,0,r.t,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(n()(),t["\u0275eld"](19,0,null,0,1,"h3",[["class","notification-date"]],null,null,null,null,null)),(n()(),t["\u0275ted"](20,null,["",""]))],(function(n,l){n(l,1,0,"none"),n(l,5,0,"2");var e=n(l,8,0,1,1);n(l,7,0,e),n(l,10,0,l.context.$implicit.image,"user image"),n(l,18,0,"2")}),(function(n,l){n(l,6,0,t["\u0275nov"](l,7).ratioPadding),n(l,9,0,t["\u0275nov"](l,10).imageLoaded,t["\u0275nov"](l,10).backgroundImage,t["\u0275nov"](l,10).display),n(l,14,0,l.context.$implicit.name),n(l,16,0,l.context.$implicit.message),n(l,20,0,l.context.$implicit.date)}))}function _(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,18,null,null,null,null,null,null,null)),(n()(),t["\u0275eld"](1,0,null,null,8,"ion-item-group",[],null,null,null,d.kb,d.r)),t["\u0275did"](2,49152,null,0,r.J,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](3,0,null,0,4,"ion-item-divider",[["sticky",""]],null,null,null,d.jb,d.q)),t["\u0275did"](4,49152,null,0,r.I,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{sticky:[0,"sticky"]},null),(n()(),t["\u0275eld"](5,0,null,0,2,"ion-label",[],null,null,null,d.mb,d.s)),t["\u0275did"](6,49152,null,0,r.N,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275ted"](-1,0,["Today"])),(n()(),t["\u0275and"](16777216,null,0,1,null,R)),t["\u0275did"](9,278528,null,0,m.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),t["\u0275eld"](10,0,null,null,8,"ion-item-group",[],null,null,null,d.kb,d.r)),t["\u0275did"](11,49152,null,0,r.J,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](12,0,null,0,4,"ion-item-divider",[["sticky",""]],null,null,null,d.jb,d.q)),t["\u0275did"](13,49152,null,0,r.I,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{sticky:[0,"sticky"]},null),(n()(),t["\u0275eld"](14,0,null,0,2,"ion-label",[],null,null,null,d.mb,d.s)),t["\u0275did"](15,49152,null,0,r.N,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275ted"](-1,0,["Yesterday"])),(n()(),t["\u0275and"](16777216,null,0,1,null,v)),t["\u0275did"](18,278528,null,0,m.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],(function(n,l){var e=l.component;n(l,4,0,""),n(l,9,0,e.notifications.today),n(l,13,0,""),n(l,18,0,e.notifications.yesterday)}),null)}function O(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,10,"ion-header",[],null,null,null,d.gb,d.m)),t["\u0275did"](1,49152,null,0,r.B,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](2,0,null,0,8,"ion-toolbar",[["color","primary"]],null,null,null,d.Nb,d.T)),t["\u0275did"](3,49152,null,0,r.zb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"]},null),(n()(),t["\u0275eld"](4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,d.Y,d.e)),t["\u0275did"](5,49152,null,0,r.l,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](6,0,null,0,1,"ion-menu-button",[],null,null,null,d.pb,d.w)),t["\u0275did"](7,49152,null,0,r.R,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](8,0,null,0,2,"ion-title",[],null,null,null,d.Lb,d.R)),t["\u0275did"](9,49152,null,0,r.xb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275ted"](-1,0,[" Notifications "])),(n()(),t["\u0275eld"](11,0,null,null,3,"ion-content",[["class","notifications-content"]],null,null,null,d.bb,d.h)),t["\u0275did"](12,49152,null,0,r.u,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275and"](16777216,null,0,1,null,_)),t["\u0275did"](14,16384,null,0,m.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(n,l){var e=l.component;n(l,3,0,"primary"),n(l,14,0,e.notifications)}),null)}var w=t["\u0275ccf"]("app-notifications",C,(function(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"app-notifications",[],null,null,null,O,h)),t["\u0275did"](1,114688,null,0,C,[b.a],null,null)],(function(n,l){n(l,1,0)}),null)}),{},{},[]),N=e("s7LF"),P=e("IheW"),M=e("ZpN7"),k=e("Kt/9"),y=e("j1ZV");e.d(l,"NotificationsPageModuleNgFactory",(function(){return D}));var D=t["\u0275cmf"](a,[],(function(n){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[c.a,w]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,m.NgLocalization,m.NgLocaleLocalization,[t.LOCALE_ID,[2,m["\u0275angular_packages_common_common_a"]]]),t["\u0275mpd"](4608,r.b,r.b,[t.NgZone,t.ApplicationRef]),t["\u0275mpd"](4608,r.Fb,r.Fb,[r.b,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](4608,r.Hb,r.Hb,[r.b,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](4608,N.u,N.u,[]),t["\u0275mpd"](4608,P.h,P.n,[m.DOCUMENT,t.PLATFORM_ID,P.l]),t["\u0275mpd"](4608,P.o,P.o,[P.h,P.m]),t["\u0275mpd"](5120,P.a,(function(n){return[n]}),[P.o]),t["\u0275mpd"](4608,P.k,P.k,[]),t["\u0275mpd"](6144,P.i,null,[P.k]),t["\u0275mpd"](4608,P.g,P.g,[P.i]),t["\u0275mpd"](6144,P.b,null,[P.g]),t["\u0275mpd"](4608,P.f,P.j,[P.b,t.Injector]),t["\u0275mpd"](4608,P.c,P.c,[P.f]),t["\u0275mpd"](5120,t.APP_INITIALIZER,(function(n){return[M.b(n)]}),[k.a]),t["\u0275mpd"](4608,i,i,[P.c]),t["\u0275mpd"](4608,o,o,[i]),t["\u0275mpd"](1073742336,m.CommonModule,m.CommonModule,[]),t["\u0275mpd"](1073742336,r.Bb,r.Bb,[]),t["\u0275mpd"](1073742336,N.t,N.t,[]),t["\u0275mpd"](1073742336,N.j,N.j,[]),t["\u0275mpd"](1073742336,P.e,P.e,[]),t["\u0275mpd"](1073742336,P.d,P.d,[]),t["\u0275mpd"](1073742336,M.a,M.a,[]),t["\u0275mpd"](1073742336,y.a,y.a,[]),t["\u0275mpd"](1073742336,b.p,b.p,[[2,b.u],[2,b.m]]),t["\u0275mpd"](1073742336,a,a,[]),t["\u0275mpd"](256,P.l,"XSRF-TOKEN",[]),t["\u0275mpd"](256,P.m,"X-XSRF-TOKEN",[]),t["\u0275mpd"](1024,b.k,(function(){return[[{path:"",component:C,resolve:{data:u}}]]}),[])])}))}}]);