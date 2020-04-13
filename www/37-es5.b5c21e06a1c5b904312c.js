function _classCallCheck(n,l){if(!(n instanceof l))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,l){for(var e=0;e<l.length;e++){var o=l[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function _createClass(n,l,e){return l&&_defineProperties(n.prototype,l),e&&_defineProperties(n,e),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{"32z0":function(n,l,e){"use strict";e.r(l);var o=e("8Y7J"),t=e("s7LF"),a=function(){function n(l,e){_classCallCheck(this,n),this.router=l,this.menu=e,this.validation_messages={email:[{type:"required",message:"Email is required."},{type:"pattern",message:"Enter a valid email."}]},this.forgotPasswordForm=new t.g({email:new t.e("test@test.com",t.s.compose([t.s.required,t.s.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")]))})}return _createClass(n,[{key:"ngOnInit",value:function(){this.menu.enable(!1)}},{key:"recoverPassword",value:function(){console.log(this.forgotPasswordForm.value),this.router.navigate(["app/categories"])}}]),n}(),u=function n(){_classCallCheck(this,n)},r=e("pMnS"),i=e("MKJQ"),d=e("sZkV"),s=e("SVse"),c=e("iInd"),g=o["\u0275crt"]({encapsulation:0,styles:[["[_nghost-%COMP%]{--page-margin:var(--app-broad-margin);--page-background:var(--app-background-shade)}.forgot-password-content[_ngcontent-%COMP%]{--background:var(--page-background);--padding-start:var(--page-margin);--padding-end:var(--page-margin);--padding-top:var(--page-margin);--padding-bottom:var(--page-margin)}.forgot-password-content[_ngcontent-%COMP%]   .auth-title[_ngcontent-%COMP%]{color:var(--ion-color-primary);font-weight:700;margin-top:calc(var(--page-margin)/ 2);margin-bottom:calc(var(--page-margin) * (3/2));letter-spacing:.6px}.forgot-password-content[_ngcontent-%COMP%]   .recover-message[_ngcontent-%COMP%]{color:var(--ion-color-medium);margin:calc(var(--page-margin)/ 2) 0}.forgot-password-content[_ngcontent-%COMP%]   .inputs-list[_ngcontent-%COMP%]{--ion-item-background:var(--page-background)}.forgot-password-content[_ngcontent-%COMP%]   .inputs-list[_ngcontent-%COMP%]   .input-item[_ngcontent-%COMP%]{--padding-start:0px;--padding-end:0px;--inner-padding-end:0px}.forgot-password-content[_ngcontent-%COMP%]   .inputs-list[_ngcontent-%COMP%]   .error-container[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%]{margin:calc(var(--page-margin)/ 2) 0;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;color:var(--ion-color-danger);font-size:14px}.forgot-password-content[_ngcontent-%COMP%]   .inputs-list[_ngcontent-%COMP%]   .error-container[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{-webkit-padding-end:calc(var(--page-margin)/ 2);padding-inline-end:calc(var(--page-margin)/ 2)}.forgot-password-content[_ngcontent-%COMP%]   .reset-password-btn[_ngcontent-%COMP%]{margin:calc(var(--page-margin)/ 2) 0}"]],data:{}});function p(n){return o["\u0275vid"](0,[(n()(),o["\u0275eld"](0,0,null,null,4,"div",[["class","error-message"]],null,null,null,null,null)),(n()(),o["\u0275eld"](1,0,null,null,1,"ion-icon",[["name","information-circle-outline"]],null,null,null,i.hb,i.n)),o["\u0275did"](2,49152,null,0,d.C,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],{name:[0,"name"]},null),(n()(),o["\u0275eld"](3,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),o["\u0275ted"](4,null,["",""]))],(function(n,l){n(l,2,0,"information-circle-outline")}),(function(n,l){n(l,4,0,l.parent.context.$implicit.message)}))}function m(n){return o["\u0275vid"](0,[(n()(),o["\u0275eld"](0,0,null,null,2,null,null,null,null,null,null,null)),(n()(),o["\u0275and"](16777216,null,null,1,null,p)),o["\u0275did"](2,16384,null,0,s.NgIf,[o.ViewContainerRef,o.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),o["\u0275and"](0,null,null,0))],(function(n,l){var e=l.component;n(l,2,0,e.forgotPasswordForm.get("email").hasError(l.context.$implicit.type)&&(e.forgotPasswordForm.get("email").dirty||e.forgotPasswordForm.get("email").touched))}),null)}function f(n){return o["\u0275vid"](0,[(n()(),o["\u0275eld"](0,0,null,null,11,"ion-header",[],null,null,null,i.gb,i.m)),o["\u0275did"](1,49152,null,0,d.B,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),(n()(),o["\u0275eld"](2,0,null,0,9,"ion-toolbar",[["color","primary"]],null,null,null,i.Nb,i.T)),o["\u0275did"](3,49152,null,0,d.zb,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],{color:[0,"color"]},null),(n()(),o["\u0275eld"](4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,i.Y,i.e)),o["\u0275did"](5,49152,null,0,d.l,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),(n()(),o["\u0275eld"](6,0,null,0,2,"ion-back-button",[],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==o["\u0275nov"](n,8).onClick(e)&&t),t}),i.V,i.b)),o["\u0275did"](7,49152,null,0,d.g,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),o["\u0275did"](8,16384,null,0,d.h,[[2,d.fb],d.Gb],null,null),(n()(),o["\u0275eld"](9,0,null,0,2,"ion-title",[],null,null,null,i.Lb,i.R)),o["\u0275did"](10,49152,null,0,d.xb,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),(n()(),o["\u0275ted"](-1,0,["Forgot Password?"])),(n()(),o["\u0275eld"](12,0,null,null,27,"ion-content",[["class","forgot-password-content"]],null,null,null,i.bb,i.h)),o["\u0275did"](13,49152,null,0,d.u,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),(n()(),o["\u0275eld"](14,0,null,0,1,"h2",[["class","auth-title"]],null,null,null,null,null)),(n()(),o["\u0275ted"](-1,null,["Recover your password"])),(n()(),o["\u0275eld"](16,0,null,0,1,"p",[["class","recover-message"]],null,null,null,null,null)),(n()(),o["\u0275ted"](-1,null,[" Please enter your email address and we'll send you an email to reset your password. "])),(n()(),o["\u0275eld"](18,0,null,0,21,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(n,l,e){var t=!0,a=n.component;return"submit"===l&&(t=!1!==o["\u0275nov"](n,20).onSubmit(e)&&t),"reset"===l&&(t=!1!==o["\u0275nov"](n,20).onReset()&&t),"ngSubmit"===l&&(t=!1!==a.recoverPassword()&&t),t}),null,null)),o["\u0275did"](19,16384,null,0,t.w,[],null,null),o["\u0275did"](20,540672,null,0,t.h,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),o["\u0275prd"](2048,null,t.a,null,[t.h]),o["\u0275did"](22,16384,null,0,t.o,[[4,t.a]],null,null),(n()(),o["\u0275eld"](23,0,null,null,13,"ion-list",[["class","inputs-list"],["lines","full"]],null,null,null,i.ob,i.t)),o["\u0275did"](24,49152,null,0,d.O,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],{lines:[0,"lines"]},null),(n()(),o["\u0275eld"](25,0,null,0,8,"ion-item",[["class","input-item"]],null,null,null,i.lb,i.p)),o["\u0275did"](26,49152,null,0,d.H,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),(n()(),o["\u0275eld"](27,0,null,0,6,"ion-input",[["autocapitalize","off"],["clearInput",""],["formControlName","email"],["inputmode","email"],["placeholder","Email"],["type","email"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(n,l,e){var t=!0;return"ionBlur"===l&&(t=!1!==o["\u0275nov"](n,28)._handleBlurEvent(e.target)&&t),"ionChange"===l&&(t=!1!==o["\u0275nov"](n,28)._handleInputEvent(e.target)&&t),t}),i.ib,i.o)),o["\u0275did"](28,16384,null,0,d.Lb,[o.ElementRef],null,null),o["\u0275prd"](1024,null,t.l,(function(n){return[n]}),[d.Lb]),o["\u0275did"](30,671744,null,0,t.f,[[3,t.a],[8,null],[8,null],[6,t.l],[2,t.v]],{name:[0,"name"]},null),o["\u0275prd"](2048,null,t.m,null,[t.f]),o["\u0275did"](32,16384,null,0,t.n,[[4,t.m]],null,null),o["\u0275did"](33,49152,null,0,d.G,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],{autocapitalize:[0,"autocapitalize"],clearInput:[1,"clearInput"],inputmode:[2,"inputmode"],placeholder:[3,"placeholder"],type:[4,"type"]},null),(n()(),o["\u0275eld"](34,0,null,0,2,"div",[["class","error-container"]],null,null,null,null,null)),(n()(),o["\u0275and"](16777216,null,null,1,null,m)),o["\u0275did"](36,278528,null,0,s.NgForOf,[o.ViewContainerRef,o.TemplateRef,o.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),o["\u0275eld"](37,0,null,null,2,"ion-button",[["class","reset-password-btn"],["expand","block"],["type","submit"]],null,null,null,i.X,i.d)),o["\u0275did"](38,49152,null,0,d.k,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],{disabled:[0,"disabled"],expand:[1,"expand"],type:[2,"type"]},null),(n()(),o["\u0275ted"](-1,0,["Reset Password"]))],(function(n,l){var e=l.component;n(l,3,0,"primary"),n(l,20,0,e.forgotPasswordForm),n(l,24,0,"full"),n(l,30,0,"email"),n(l,33,0,"off","","email","Email","email"),n(l,36,0,e.validation_messages.email),n(l,38,0,!e.forgotPasswordForm.valid,"block","submit")}),(function(n,l){n(l,18,0,o["\u0275nov"](l,22).ngClassUntouched,o["\u0275nov"](l,22).ngClassTouched,o["\u0275nov"](l,22).ngClassPristine,o["\u0275nov"](l,22).ngClassDirty,o["\u0275nov"](l,22).ngClassValid,o["\u0275nov"](l,22).ngClassInvalid,o["\u0275nov"](l,22).ngClassPending),n(l,27,0,o["\u0275nov"](l,32).ngClassUntouched,o["\u0275nov"](l,32).ngClassTouched,o["\u0275nov"](l,32).ngClassPristine,o["\u0275nov"](l,32).ngClassDirty,o["\u0275nov"](l,32).ngClassValid,o["\u0275nov"](l,32).ngClassInvalid,o["\u0275nov"](l,32).ngClassPending)}))}var v=o["\u0275ccf"]("app-forgot-password",a,(function(n){return o["\u0275vid"](0,[(n()(),o["\u0275eld"](0,0,null,null,1,"app-forgot-password",[],null,null,null,f,g)),o["\u0275did"](1,114688,null,0,a,[c.m,d.Eb],null,null)],(function(n,l){n(l,1,0)}),null)}),{},{},[]),b=e("IheW"),C=e("ZpN7"),h=e("Kt/9"),P=e("j1ZV");e.d(l,"ForgotPasswordPageModuleNgFactory",(function(){return w}));var w=o["\u0275cmf"](u,[],(function(n){return o["\u0275mod"]([o["\u0275mpd"](512,o.ComponentFactoryResolver,o["\u0275CodegenComponentFactoryResolver"],[[8,[r.a,v]],[3,o.ComponentFactoryResolver],o.NgModuleRef]),o["\u0275mpd"](4608,s.NgLocalization,s.NgLocaleLocalization,[o.LOCALE_ID,[2,s["\u0275angular_packages_common_common_a"]]]),o["\u0275mpd"](4608,t.u,t.u,[]),o["\u0275mpd"](4608,t.d,t.d,[]),o["\u0275mpd"](4608,d.b,d.b,[o.NgZone,o.ApplicationRef]),o["\u0275mpd"](4608,d.Fb,d.Fb,[d.b,o.ComponentFactoryResolver,o.Injector]),o["\u0275mpd"](4608,d.Hb,d.Hb,[d.b,o.ComponentFactoryResolver,o.Injector]),o["\u0275mpd"](4608,b.h,b.n,[s.DOCUMENT,o.PLATFORM_ID,b.l]),o["\u0275mpd"](4608,b.o,b.o,[b.h,b.m]),o["\u0275mpd"](5120,b.a,(function(n){return[n]}),[b.o]),o["\u0275mpd"](4608,b.k,b.k,[]),o["\u0275mpd"](6144,b.i,null,[b.k]),o["\u0275mpd"](4608,b.g,b.g,[b.i]),o["\u0275mpd"](6144,b.b,null,[b.g]),o["\u0275mpd"](4608,b.f,b.j,[b.b,o.Injector]),o["\u0275mpd"](4608,b.c,b.c,[b.f]),o["\u0275mpd"](5120,o.APP_INITIALIZER,(function(n){return[C.b(n)]}),[h.a]),o["\u0275mpd"](1073742336,s.CommonModule,s.CommonModule,[]),o["\u0275mpd"](1073742336,t.t,t.t,[]),o["\u0275mpd"](1073742336,t.j,t.j,[]),o["\u0275mpd"](1073742336,t.q,t.q,[]),o["\u0275mpd"](1073742336,d.Bb,d.Bb,[]),o["\u0275mpd"](1073742336,c.p,c.p,[[2,c.u],[2,c.m]]),o["\u0275mpd"](1073742336,b.e,b.e,[]),o["\u0275mpd"](1073742336,b.d,b.d,[]),o["\u0275mpd"](1073742336,C.a,C.a,[]),o["\u0275mpd"](1073742336,P.a,P.a,[]),o["\u0275mpd"](1073742336,u,u,[]),o["\u0275mpd"](256,b.l,"XSRF-TOKEN",[]),o["\u0275mpd"](256,b.m,"X-XSRF-TOKEN",[]),o["\u0275mpd"](1024,c.k,(function(){return[[{path:"",component:a}]]}),[])])}))}}]);