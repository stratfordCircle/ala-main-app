(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{"8SZI":function(l,n,e){"use strict";e.r(n);var t=e("8Y7J");class o{constructor(l){this.menu=l,this.slidesOptions={zoom:{toggle:!1}},this.isFirstSlide=!0,this.isLastSlide=!1}ngOnInit(){this.menu.enable(!1)}ngAfterViewInit(){this.slides.isBeginning().then(l=>{this.isFirstSlide=l}),this.slides.isEnd().then(l=>{this.isLastSlide=l}),this.slides.ionSlideWillChange.subscribe(l=>{this.slides.isBeginning().then(l=>{this.isFirstSlide=l}),this.slides.isEnd().then(l=>{this.isLastSlide=l})})}skipWalkthrough(){this.slides.length().then(l=>{this.slides.slideTo(l)})}}class i{}var a=e("pMnS"),u=e("MKJQ"),d=e("sZkV"),r=e("M4wD"),s=e("B7gC"),c=e("6LEC"),g=e("2gss"),p=e("iInd"),h=e("SVse"),m=t["\u0275crt"]({encapsulation:0,styles:[["[_nghost-%COMP%]{--page-margin:var(--app-broad-margin);--page-background:var(--app-background);--page-swiper-pagination-space:40px;--page-swiper-pagination-height:18px;--page-pagination-bullet-size:10px;--page-first-slide-background:#c1ebff;--page-second-slide-background:#a9ebd2;--page-third-slide-background:#f0cbe5;--page-last-slide-background:#eef3ff;--page-vector-decoration-fill:var(--ion-color-light-shade)}ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{--ion-toolbar-background:transparent}ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{--color:var(--ion-color-lightest)}ion-content[_ngcontent-%COMP%]{position:absolute;top:0}.walkthrough-slides[_ngcontent-%COMP%]{--bullet-background:var(--ion-color-dark);--bullet-background-active:var(--ion-color-dark);height:100%}.walkthrough-slides[_ngcontent-%COMP%]   .slide-inner-row[_ngcontent-%COMP%]{height:100%;width:100%;padding:0;padding-top:var(--app-header-height);border-bottom:var(--page-swiper-pagination-space) solid transparent;background-clip:padding-box;background-color:var(--page-vector-decoration-fill)}.illustration-and-decoration-slide[_ngcontent-%COMP%]   .slide-inner-row[_ngcontent-%COMP%]{--ion-grid-column-padding:0px;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-flow:column;-webkit-box-pack:start;justify-content:flex-start;-webkit-box-align:center;align-items:center}.illustration-and-decoration-slide[_ngcontent-%COMP%]   .illustration-col[_ngcontent-%COMP%]{-webkit-box-flex:0;flex-grow:0;flex-shrink:0;min-height:auto;min-height:-webkit-fit-content;min-height:-moz-fit-content;min-height:fit-content;max-width:30vh;padding:0}.illustration-and-decoration-slide[_ngcontent-%COMP%]   .decoration-col[_ngcontent-%COMP%]{-webkit-box-flex:0;flex-grow:0;flex-shrink:1;min-height:12vh;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.illustration-and-decoration-slide[_ngcontent-%COMP%]   .decoration-col[_ngcontent-%COMP%]   .vector-decoration[_ngcontent-%COMP%]{fill:currentColor;color:var(--page-vector-decoration-fill);background-color:var(--page-background);padding-bottom:4px;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);shape-rendering:geometricprecision;height:calc(100% + 1px)}.illustration-and-decoration-slide[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%]{-webkit-box-flex:1;flex-grow:1;flex-shrink:0;min-height:auto;background-color:var(--page-background);margin-bottom:-1px;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.illustration-and-decoration-slide[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]{margin:calc(var(--page-margin) * -1) var(--page-margin) 0;text-align:left}.illustration-and-decoration-slide[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   .info-title[_ngcontent-%COMP%]{margin:0;margin-bottom:var(--page-margin);color:var(--ion-color-dark)}.illustration-and-decoration-slide[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   .info-paragraph[_ngcontent-%COMP%]{color:var(--ion-color-medium-shade);font-size:14px;margin:0 0 calc(var(--page-margin)/ 2)}.illustration-and-decoration-slide[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   .info-paragraph[_ngcontent-%COMP%]:last-child{margin-bottom:0}.first-slide[_ngcontent-%COMP%]{--page-vector-decoration-fill:var(--page-first-slide-background)}.second-slide[_ngcontent-%COMP%]{--page-vector-decoration-fill:var(--page-second-slide-background)}.third-slide[_ngcontent-%COMP%]{--page-vector-decoration-fill:var(--page-third-slide-background)}.last-slide[_ngcontent-%COMP%]{--page-vector-decoration-fill:var(--page-last-slide-background)}.last-slide[_ngcontent-%COMP%]   .slide-inner-row[_ngcontent-%COMP%]{border-width:0}.last-slide[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%]{padding:var(--page-margin)}.last-slide[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%]   .info-outer[_ngcontent-%COMP%]{height:100%;-webkit-box-align:end;align-items:flex-end;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.last-slide[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%]   .info-outer[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]{margin:calc(var(--page-margin) * -1) 0 0}.last-slide[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%]   .info-outer[_ngcontent-%COMP%]   .call-to-actions-wrapper[_ngcontent-%COMP%]{max-height:-webkit-fit-content;max-height:-moz-fit-content;max-height:fit-content}.last-slide[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%]   .get-started-button[_ngcontent-%COMP%]{margin:0}.last-slide[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%]   .alt-call-to-action-row[_ngcontent-%COMP%]{padding-top:5px;-webkit-box-align:center;align-items:center;-webkit-box-pack:space-evenly;justify-content:space-evenly}.last-slide[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%]   .alt-call-to-action-row[_ngcontent-%COMP%]   .cta-leading-text[_ngcontent-%COMP%]{color:var(--ion-color-medium);font-size:16px}.last-slide[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%]   .alt-call-to-action-row[_ngcontent-%COMP%]   .login-button[_ngcontent-%COMP%]{--color:var(--ion-color-secondary);margin:0}.first-slide-active[_nghost-%COMP%]   .skip-walkthrough-button[_ngcontent-%COMP%]{visibility:hidden}.last-slide-active[_nghost-%COMP%]     .walkthrough-slides .swiper-pagination{display:none}.last-slide-active[_nghost-%COMP%]   .skip-walkthrough-button[_ngcontent-%COMP%]{visibility:hidden}[_nghost-%COMP%]     .walkthrough-slides .swiper-pagination{height:var(--page-swiper-pagination-height);line-height:1;bottom:calc((var(--page-swiper-pagination-space) - var(--page-swiper-pagination-height))/ 2)}[_nghost-%COMP%]     .walkthrough-slides .swiper-pagination .swiper-pagination-bullet{width:var(--page-pagination-bullet-size);height:var(--page-pagination-bullet-size)}"],["app-image-shell.illustration-image[_ngcontent-%COMP%]{--image-shell-loading-background:transparent;--image-shell-spinner-color:var(--ion-color-lightest)}"],["@media only screen and (min-device-width:320px) and (max-device-width:480px) and (-webkit-min-device-pixel-ratio:2) and (device-aspect-ratio:2/3){.illustration-and-decoration-slide[_ngcontent-%COMP%]   .illustration-col[_ngcontent-%COMP%]{max-width:30vh;padding:0}.illustration-and-decoration-slide[_ngcontent-%COMP%]   .decoration-col[_ngcontent-%COMP%]{min-height:12vh}.illustration-and-decoration-slide[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   .info-title[_ngcontent-%COMP%]{margin-bottom:calc(var(--page-margin)/ 2);font-size:20px}}@media only screen and (min-device-width:320px) and (max-device-width:568px) and (-webkit-min-device-pixel-ratio:2) and (device-aspect-ratio:40/71){.illustration-and-decoration-slide[_ngcontent-%COMP%]   .illustration-col[_ngcontent-%COMP%]{max-width:32vh;padding:0}.illustration-and-decoration-slide[_ngcontent-%COMP%]   .decoration-col[_ngcontent-%COMP%]{min-height:12vh}.illustration-and-decoration-slide[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   .info-title[_ngcontent-%COMP%]{margin-bottom:calc(var(--page-margin)/ 2);font-size:20px}}@media only screen and (min-device-width:375px) and (max-device-width:667px) and (-webkit-min-device-pixel-ratio:2){.illustration-and-decoration-slide[_ngcontent-%COMP%]   .illustration-col[_ngcontent-%COMP%]{max-width:36vh;padding:2vh 0}.illustration-and-decoration-slide[_ngcontent-%COMP%]   .decoration-col[_ngcontent-%COMP%]{min-height:14vh}}@media only screen and (min-device-width:375px) and (max-device-width:812px) and (-webkit-min-device-pixel-ratio:3){.illustration-and-decoration-slide[_ngcontent-%COMP%]   .illustration-col[_ngcontent-%COMP%]{max-width:34vh;padding:6vh 0}.illustration-and-decoration-slide[_ngcontent-%COMP%]   .decoration-col[_ngcontent-%COMP%]{min-height:12vh}}@media only screen and (min-device-width:414px) and (max-device-width:736px) and (-webkit-min-device-pixel-ratio:3){.illustration-and-decoration-slide[_ngcontent-%COMP%]   .illustration-col[_ngcontent-%COMP%]{max-width:38vh;padding:4vh 0}.illustration-and-decoration-slide[_ngcontent-%COMP%]   .decoration-col[_ngcontent-%COMP%]{min-height:14vh}}"]],data:{}});function f(l){return t["\u0275vid"](0,[t["\u0275qud"](402653184,1,{slides:0}),(l()(),t["\u0275eld"](1,0,null,null,8,"ion-header",[["class","ion-no-border"]],null,null,null,u.gb,u.m)),t["\u0275did"](2,49152,null,0,d.B,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](3,0,null,0,6,"ion-toolbar",[],null,null,null,u.Nb,u.T)),t["\u0275did"](4,49152,null,0,d.zb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](5,0,null,0,4,"ion-buttons",[["slot","end"]],null,null,null,u.Y,u.e)),t["\u0275did"](6,49152,null,0,d.l,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](7,0,null,0,2,"ion-button",[["class","skip-walkthrough-button"],["fill","clear"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.skipWalkthrough()&&t),t}),u.X,u.d)),t["\u0275did"](8,49152,null,0,d.k,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{fill:[0,"fill"]},null),(l()(),t["\u0275ted"](-1,0,["skip"])),(l()(),t["\u0275eld"](10,0,null,null,136,"ion-content",[],null,null,null,u.bb,u.h)),t["\u0275did"](11,49152,null,0,d.u,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](12,0,null,0,134,"ion-slides",[["class","walkthrough-slides"],["pager","true"]],null,null,null,u.Db,u.J)),t["\u0275did"](13,49152,[[1,4]],0,d.ob,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{options:[0,"options"],pager:[1,"pager"]},null),(l()(),t["\u0275eld"](14,0,null,0,27,"ion-slide",[["class","first-slide illustration-and-decoration-slide"]],null,null,null,u.Cb,u.I)),t["\u0275did"](15,49152,null,0,d.nb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](16,0,null,0,25,"ion-row",[["class","slide-inner-row"]],null,null,null,u.wb,u.C)),t["\u0275did"](17,49152,null,0,d.gb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](18,0,null,0,6,"ion-col",[["class","illustration-col"]],null,null,null,u.ab,u.g)),t["\u0275did"](19,49152,null,0,d.t,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](20,0,null,0,4,"app-aspect-ratio",[],[[4,"padding",null]],null,null,r.b,r.a)),t["\u0275did"](21,49152,null,0,s.a,[],{ratio:[0,"ratio"]},null),t["\u0275pod"](22,{w:0,h:1}),(l()(),t["\u0275eld"](23,0,null,0,1,"app-image-shell",[["animation","spinner"],["class","illustration-image"]],[[2,"img-loaded",null],[4,"backgroundImage",null],[1,"display",0]],null,null,c.b,c.a)),t["\u0275did"](24,49152,null,0,g.a,[t.PLATFORM_ID],{src:[0,"src"],alt:[1,"alt"]},null),(l()(),t["\u0275eld"](25,0,null,0,3,"ion-col",[["class","decoration-col"]],null,null,null,u.ab,u.g)),t["\u0275did"](26,49152,null,0,d.t,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](27,0,null,0,1,":svg:svg",[[":xml:space","preserve"],[":xmlns:xlink","http://www.w3.org/1999/xlink"],["class","vector-decoration"],["height","100px"],["preserveAspectRatio","none"],["style","enable-background:new 0 0 90 20;"],["version","1.1"],["viewBox","0 0 90 20"],["width","100%"],["x","0px"],["xmlns","http://www.w3.org/2000/svg"],["y","0px"]],null,null,null,null,null)),(l()(),t["\u0275eld"](28,0,null,null,0,":svg:path",[["d","M0 0 V5 H5 C25 5 25 20 45 20 S65 5 85 5 H90 V0 Z"]],null,null,null,null,null)),(l()(),t["\u0275eld"](29,0,null,0,12,"ion-col",[["class","info-col"]],null,null,null,u.ab,u.g)),t["\u0275did"](30,49152,null,0,d.t,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](31,0,null,0,10,"div",[["class","info-wrapper"]],null,null,null,null,null)),(l()(),t["\u0275eld"](32,0,null,null,1,"h3",[["class","info-title"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["This App is built with Ionic 5"])),(l()(),t["\u0275eld"](34,0,null,null,4,"p",[["class","info-paragraph"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,[" It was created by the "])),(l()(),t["\u0275eld"](36,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["IonicThemes"])),(l()(),t["\u0275ted"](-1,null,[" team to help you jump start your Ionic app development. "])),(l()(),t["\u0275eld"](39,0,null,null,2,"p",[["class","info-paragraph"]],null,null,null,null,null)),(l()(),t["\u0275eld"](40,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["You will love Ionic 5, and if you get lost, remember we have lots of tutorials to help you."])),(l()(),t["\u0275eld"](42,0,null,0,23,"ion-slide",[["class","second-slide illustration-and-decoration-slide"]],null,null,null,u.Cb,u.I)),t["\u0275did"](43,49152,null,0,d.nb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](44,0,null,0,21,"ion-row",[["class","slide-inner-row"]],null,null,null,u.wb,u.C)),t["\u0275did"](45,49152,null,0,d.gb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](46,0,null,0,6,"ion-col",[["class","illustration-col"]],null,null,null,u.ab,u.g)),t["\u0275did"](47,49152,null,0,d.t,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](48,0,null,0,4,"app-aspect-ratio",[],[[4,"padding",null]],null,null,r.b,r.a)),t["\u0275did"](49,49152,null,0,s.a,[],{ratio:[0,"ratio"]},null),t["\u0275pod"](50,{w:0,h:1}),(l()(),t["\u0275eld"](51,0,null,0,1,"app-image-shell",[["animation","spinner"],["class","illustration-image"]],[[2,"img-loaded",null],[4,"backgroundImage",null],[1,"display",0]],null,null,c.b,c.a)),t["\u0275did"](52,49152,null,0,g.a,[t.PLATFORM_ID],{src:[0,"src"],alt:[1,"alt"]},null),(l()(),t["\u0275eld"](53,0,null,0,3,"ion-col",[["class","decoration-col"]],null,null,null,u.ab,u.g)),t["\u0275did"](54,49152,null,0,d.t,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](55,0,null,0,1,":svg:svg",[[":xml:space","preserve"],[":xmlns:xlink","http://www.w3.org/1999/xlink"],["class","vector-decoration"],["height","100px"],["preserveAspectRatio","none"],["style","enable-background:new 0 0 64 24;"],["version","1.1"],["viewBox","0 0 64 24"],["width","100%"],["x","0px"],["xmlns","http://www.w3.org/2000/svg"],["y","0px"]],null,null,null,null,null)),(l()(),t["\u0275eld"](56,0,null,null,0,":svg:path",[["d","M0 0 L64 0 L64 24 Q56 24 48 16 Q34 0 22 10 Q10 22 0 8 Z"]],null,null,null,null,null)),(l()(),t["\u0275eld"](57,0,null,0,8,"ion-col",[["class","info-col"]],null,null,null,u.ab,u.g)),t["\u0275did"](58,49152,null,0,d.t,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](59,0,null,0,6,"div",[["class","info-wrapper"]],null,null,null,null,null)),(l()(),t["\u0275eld"](60,0,null,null,1,"h3",[["class","info-title"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["How to use this template?"])),(l()(),t["\u0275eld"](62,0,null,null,1,"p",[["class","info-paragraph"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,[" We want to help you build better and faster Ionic apps. We have put a lot of effort building and styling each component of this template. "])),(l()(),t["\u0275eld"](64,0,null,null,1,"p",[["class","info-paragraph"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,[" You are free to reuse and modify every component of this template. "])),(l()(),t["\u0275eld"](66,0,null,0,36,"ion-slide",[["class","third-slide illustration-and-decoration-slide"]],null,null,null,u.Cb,u.I)),t["\u0275did"](67,49152,null,0,d.nb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](68,0,null,0,34,"ion-row",[["class","slide-inner-row"]],null,null,null,u.wb,u.C)),t["\u0275did"](69,49152,null,0,d.gb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](70,0,null,0,6,"ion-col",[["class","illustration-col"]],null,null,null,u.ab,u.g)),t["\u0275did"](71,49152,null,0,d.t,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](72,0,null,0,4,"app-aspect-ratio",[],[[4,"padding",null]],null,null,r.b,r.a)),t["\u0275did"](73,49152,null,0,s.a,[],{ratio:[0,"ratio"]},null),t["\u0275pod"](74,{w:0,h:1}),(l()(),t["\u0275eld"](75,0,null,0,1,"app-image-shell",[["animation","spinner"],["class","illustration-image"]],[[2,"img-loaded",null],[4,"backgroundImage",null],[1,"display",0]],null,null,c.b,c.a)),t["\u0275did"](76,49152,null,0,g.a,[t.PLATFORM_ID],{src:[0,"src"],alt:[1,"alt"]},null),(l()(),t["\u0275eld"](77,0,null,0,3,"ion-col",[["class","decoration-col"]],null,null,null,u.ab,u.g)),t["\u0275did"](78,49152,null,0,d.t,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](79,0,null,0,1,":svg:svg",[[":xml:space","preserve"],[":xmlns:xlink","http://www.w3.org/1999/xlink"],["class","vector-decoration"],["height","100px"],["preserveAspectRatio","none"],["style","enable-background:new 0 0 64 24;"],["version","1.1"],["viewBox","0 0 64 14"],["width","100%"],["x","0px"],["xmlns","http://www.w3.org/2000/svg"],["y","0px"]],null,null,null,null,null)),(l()(),t["\u0275eld"](80,0,null,null,0,":svg:path",[["d","M0 0 V5 H5 C19 5 25 14 32 14 S45 5 59 5 H64 V0 Z"]],null,null,null,null,null)),(l()(),t["\u0275eld"](81,0,null,0,21,"ion-col",[["class","info-col"]],null,null,null,u.ab,u.g)),t["\u0275did"](82,49152,null,0,d.t,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](83,0,null,0,19,"div",[["class","info-wrapper"]],null,null,null,null,null)),(l()(),t["\u0275eld"](84,0,null,null,1,"h3",[["class","info-title"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Which components are available in this Ionic 5 app?"])),(l()(),t["\u0275eld"](86,0,null,null,16,"p",[["class","info-paragraph"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,[" Tabs, Notifications, Profile, SideMenu, Authentication, Getting Started, Walkthrough, Forms and Validations, Categories, "])),(l()(),t["\u0275eld"](88,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Travel"])),(l()(),t["\u0275ted"](-1,null,[", "])),(l()(),t["\u0275eld"](91,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Fashion"])),(l()(),t["\u0275ted"](-1,null,[", "])),(l()(),t["\u0275eld"](94,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Food"])),(l()(),t["\u0275ted"](-1,null,[", "])),(l()(),t["\u0275eld"](97,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Deals"])),(l()(),t["\u0275ted"](-1,null,[" and "])),(l()(),t["\u0275eld"](100,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Real Estate"])),(l()(),t["\u0275ted"](-1,null,[" listings and details page and many more! "])),(l()(),t["\u0275eld"](103,0,null,0,43,"ion-slide",[["class","last-slide illustration-and-decoration-slide"]],null,null,null,u.Cb,u.I)),t["\u0275did"](104,49152,null,0,d.nb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](105,0,null,0,41,"ion-row",[["class","slide-inner-row"]],null,null,null,u.wb,u.C)),t["\u0275did"](106,49152,null,0,d.gb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](107,0,null,0,6,"ion-col",[["class","illustration-col"]],null,null,null,u.ab,u.g)),t["\u0275did"](108,49152,null,0,d.t,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](109,0,null,0,4,"app-aspect-ratio",[],[[4,"padding",null]],null,null,r.b,r.a)),t["\u0275did"](110,49152,null,0,s.a,[],{ratio:[0,"ratio"]},null),t["\u0275pod"](111,{w:0,h:1}),(l()(),t["\u0275eld"](112,0,null,0,1,"app-image-shell",[["animation","spinner"],["class","illustration-image"]],[[2,"img-loaded",null],[4,"backgroundImage",null],[1,"display",0]],null,null,c.b,c.a)),t["\u0275did"](113,49152,null,0,g.a,[t.PLATFORM_ID],{src:[0,"src"],alt:[1,"alt"]},null),(l()(),t["\u0275eld"](114,0,null,0,3,"ion-col",[["class","decoration-col"]],null,null,null,u.ab,u.g)),t["\u0275did"](115,49152,null,0,d.t,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](116,0,null,0,1,":svg:svg",[[":xml:space","preserve"],[":xmlns:xlink","http://www.w3.org/1999/xlink"],["class","vector-decoration"],["height","100px"],["preserveAspectRatio","none"],["style","enable-background:new 0 0 64 24;"],["version","1.1"],["viewBox","0 0 64 18"],["width","100%"],["x","0px"],["xmlns","http://www.w3.org/2000/svg"],["y","0px"]],null,null,null,null,null)),(l()(),t["\u0275eld"](117,0,null,null,0,":svg:path",[["d","M0 0 L64 0 L64 10 Q56 24 46 12 Q34 0 26 8 Q10 22 0 8 Z"]],null,null,null,null,null)),(l()(),t["\u0275eld"](118,0,null,0,28,"ion-col",[["class","info-col"]],null,null,null,u.ab,u.g)),t["\u0275did"](119,49152,null,0,d.t,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](120,0,null,0,26,"ion-row",[["class","info-outer"]],null,null,null,u.wb,u.C)),t["\u0275did"](121,49152,null,0,d.gb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](122,0,null,0,6,"ion-col",[],null,null,null,u.ab,u.g)),t["\u0275did"](123,49152,null,0,d.t,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](124,0,null,0,4,"div",[["class","info-wrapper"]],null,null,null,null,null)),(l()(),t["\u0275eld"](125,0,null,null,1,"h3",[["class","info-title"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["It's time to start"])),(l()(),t["\u0275eld"](127,0,null,null,1,"p",[["class","info-paragraph"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,[" Hope you like this Ionic 5 template and please let us know your feedback so we can keep improving it! Enjoy ;) "])),(l()(),t["\u0275eld"](129,0,null,0,17,"ion-col",[["class","call-to-actions-wrapper"]],null,null,null,u.ab,u.g)),t["\u0275did"](130,49152,null,0,d.t,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](131,0,null,0,5,"ion-button",[["class","get-started-button"],["expand","block"]],null,[[null,"click"]],(function(l,n,e){var o=!0;return"click"===n&&(o=!1!==t["\u0275nov"](l,133).onClick()&&o),"click"===n&&(o=!1!==t["\u0275nov"](l,135).onClick(e)&&o),o}),u.X,u.d)),t["\u0275did"](132,49152,null,0,d.k,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{expand:[0,"expand"]},null),t["\u0275did"](133,16384,null,0,p.n,[p.m,p.a,[8,null],t.Renderer2,t.ElementRef],{routerLink:[0,"routerLink"]},null),t["\u0275pad"](134,1),t["\u0275did"](135,737280,null,0,d.Jb,[h.LocationStrategy,d.Gb,t.ElementRef,p.m,[2,p.n]],null,null),(l()(),t["\u0275ted"](-1,0,["Get Started"])),(l()(),t["\u0275eld"](137,0,null,0,9,"ion-row",[["class","alt-call-to-action-row"]],null,null,null,u.wb,u.C)),t["\u0275did"](138,49152,null,0,d.gb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](139,0,null,0,1,"span",[["class","cta-leading-text"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Already have an account?"])),(l()(),t["\u0275eld"](141,0,null,0,5,"ion-button",[["class","login-button"],["fill","clear"]],null,[[null,"click"]],(function(l,n,e){var o=!0;return"click"===n&&(o=!1!==t["\u0275nov"](l,143).onClick()&&o),"click"===n&&(o=!1!==t["\u0275nov"](l,145).onClick(e)&&o),o}),u.X,u.d)),t["\u0275did"](142,49152,null,0,d.k,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{fill:[0,"fill"]},null),t["\u0275did"](143,16384,null,0,p.n,[p.m,p.a,[8,null],t.Renderer2,t.ElementRef],{routerLink:[0,"routerLink"]},null),t["\u0275pad"](144,1),t["\u0275did"](145,737280,null,0,d.Jb,[h.LocationStrategy,d.Gb,t.ElementRef,p.m,[2,p.n]],null,null),(l()(),t["\u0275ted"](-1,0,[" Login here "]))],(function(l,n){var e=n.component;l(n,8,0,"clear"),l(n,13,0,e.slidesOptions,"true");var t=l(n,22,0,915,849);l(n,21,0,t),l(n,24,0,"./assets/sample-images/walkthrough/walkthrough-illustration-1.svg","walkthrough");var o=l(n,50,0,1096,806);l(n,49,0,o),l(n,52,0,"./assets/sample-images/walkthrough/walkthrough-illustration-2.svg","walkthrough");var i=l(n,74,0,918,703);l(n,73,0,i),l(n,76,0,"./assets/sample-images/walkthrough/walkthrough-illustration-3.svg","walkthrough");var a=l(n,111,0,924,819);l(n,110,0,a),l(n,113,0,"./assets/sample-images/walkthrough/walkthrough-illustration-4.svg","walkthrough"),l(n,132,0,"block");var u=l(n,134,0,"/getting-started");l(n,133,0,u),l(n,135,0),l(n,142,0,"clear");var d=l(n,144,0,"/auth/login");l(n,143,0,d),l(n,145,0)}),(function(l,n){l(n,20,0,t["\u0275nov"](n,21).ratioPadding),l(n,23,0,t["\u0275nov"](n,24).imageLoaded,t["\u0275nov"](n,24).backgroundImage,t["\u0275nov"](n,24).display),l(n,48,0,t["\u0275nov"](n,49).ratioPadding),l(n,51,0,t["\u0275nov"](n,52).imageLoaded,t["\u0275nov"](n,52).backgroundImage,t["\u0275nov"](n,52).display),l(n,72,0,t["\u0275nov"](n,73).ratioPadding),l(n,75,0,t["\u0275nov"](n,76).imageLoaded,t["\u0275nov"](n,76).backgroundImage,t["\u0275nov"](n,76).display),l(n,109,0,t["\u0275nov"](n,110).ratioPadding),l(n,112,0,t["\u0275nov"](n,113).imageLoaded,t["\u0275nov"](n,113).backgroundImage,t["\u0275nov"](n,113).display)}))}function b(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"app-walkthrough",[],[[2,"first-slide-active",null],[2,"last-slide-active",null]],null,null,f,m)),t["\u0275did"](1,4308992,null,0,o,[d.Eb],null,null)],(function(l,n){l(n,1,0)}),(function(l,n){l(n,0,0,t["\u0275nov"](n,1).isFirstSlide,t["\u0275nov"](n,1).isLastSlide)}))}var v=t["\u0275ccf"]("app-walkthrough",o,b,{},{},[]),w=e("s7LF"),C=e("IheW"),k=e("ZpN7"),M=e("Kt/9"),P=e("j1ZV");e.d(n,"WalkthroughPageModuleNgFactory",(function(){return O}));var O=t["\u0275cmf"](i,[],(function(l){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[a.a,v]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,h.NgLocalization,h.NgLocaleLocalization,[t.LOCALE_ID,[2,h["\u0275angular_packages_common_common_a"]]]),t["\u0275mpd"](4608,w.u,w.u,[]),t["\u0275mpd"](4608,d.b,d.b,[t.NgZone,t.ApplicationRef]),t["\u0275mpd"](4608,d.Fb,d.Fb,[d.b,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](4608,d.Hb,d.Hb,[d.b,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](4608,C.h,C.n,[h.DOCUMENT,t.PLATFORM_ID,C.l]),t["\u0275mpd"](4608,C.o,C.o,[C.h,C.m]),t["\u0275mpd"](5120,C.a,(function(l){return[l]}),[C.o]),t["\u0275mpd"](4608,C.k,C.k,[]),t["\u0275mpd"](6144,C.i,null,[C.k]),t["\u0275mpd"](4608,C.g,C.g,[C.i]),t["\u0275mpd"](6144,C.b,null,[C.g]),t["\u0275mpd"](4608,C.f,C.j,[C.b,t.Injector]),t["\u0275mpd"](4608,C.c,C.c,[C.f]),t["\u0275mpd"](5120,t.APP_INITIALIZER,(function(l){return[k.b(l)]}),[M.a]),t["\u0275mpd"](1073742336,h.CommonModule,h.CommonModule,[]),t["\u0275mpd"](1073742336,w.t,w.t,[]),t["\u0275mpd"](1073742336,w.j,w.j,[]),t["\u0275mpd"](1073742336,d.Bb,d.Bb,[]),t["\u0275mpd"](1073742336,p.p,p.p,[[2,p.u],[2,p.m]]),t["\u0275mpd"](1073742336,C.e,C.e,[]),t["\u0275mpd"](1073742336,C.d,C.d,[]),t["\u0275mpd"](1073742336,k.a,k.a,[]),t["\u0275mpd"](1073742336,P.a,P.a,[]),t["\u0275mpd"](1073742336,i,i,[]),t["\u0275mpd"](256,C.l,"XSRF-TOKEN",[]),t["\u0275mpd"](256,C.m,"X-XSRF-TOKEN",[]),t["\u0275mpd"](1024,p.k,(function(){return[[{path:"",component:o}]]}),[])])}))}}]);