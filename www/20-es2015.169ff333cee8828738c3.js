(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{FksN:function(n,l,e){"use strict";e.r(l);var t=e("8Y7J");class i{constructor(n){this.route=n}get isShell(){return!(!this.listing||!this.listing.isShell)}ngOnInit(){this.route.data.subscribe(n=>{n.data.state.subscribe(n=>{this.listing=n},n=>{})},n=>{})}}var o=e("r7vE");class a{constructor(n){this.realEstateService=n}resolve(){const n=this.realEstateService.getListingDataSource();return this.realEstateService.getListingStore(n)}}const c=a;class s{}var u=e("pMnS"),r=e("MKJQ"),d=e("sZkV"),g=e("SVse"),m=e("TAV1"),p=e("zK/y"),h=e("iInd"),f=e("6LEC"),C=e("2gss"),b=e("M4wD"),_=e("B7gC"),O=t["\u0275crt"]({encapsulation:0,styles:[["[_nghost-%COMP%]{--page-margin:var(--app-broad-margin);--page-background:var(--app-background);--page-amenity-vertical-gutter:6px;--page-amenity-horizontal-gutter:4px;--page-color:#d9453a}.real-estate-listing-content[_ngcontent-%COMP%]{--background:var(--page-background)}.listing-item[_ngcontent-%COMP%]   .image-row[_ngcontent-%COMP%]{--ion-grid-column-padding:0px}.listing-item[_ngcontent-%COMP%]   .image-row[_ngcontent-%COMP%]   .image-anchor[_ngcontent-%COMP%]{display:block}.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]{--ion-grid-column-padding:0px;padding-bottom:var(--page-margin)}.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .details-col[_ngcontent-%COMP%]{padding:calc(var(--page-margin)/ 2) var(--page-margin) 0}.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .details-col[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]{-webkit-box-pack:justify;justify-content:space-between}.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .details-col[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .item-price[_ngcontent-%COMP%]{margin:0 0 5px;font-weight:500;color:var(--ion-color-dark-tint);display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .details-col[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .item-price[_ngcontent-%COMP%]   .price-icon[_ngcontent-%COMP%]{margin-right:5px}.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .details-col[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .item-address[_ngcontent-%COMP%]{margin:0;font-size:14px;color:var(--ion-color-medium-tint)}.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .details-col[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .bookmark-col[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-pack:end;justify-content:flex-end}.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .details-col[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .bookmark-col[_ngcontent-%COMP%]   .like-icon[_ngcontent-%COMP%]{font-size:32px;color:var(--page-color)}.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .accommodations-col[_ngcontent-%COMP%]{padding:0 var(--page-margin) var(--page-margin)}.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .accommodations-col[_ngcontent-%COMP%]   .accommodations-wrapper[_ngcontent-%COMP%]{padding-top:calc(var(--page-margin))}.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .accommodations-col[_ngcontent-%COMP%]   .item-accommodation[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:center;align-items:center;max-width:-webkit-fit-content;max-width:-moz-fit-content;max-width:fit-content}.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .accommodations-col[_ngcontent-%COMP%]   .item-accommodation[_ngcontent-%COMP%] + .item-accommodation[_ngcontent-%COMP%]{padding-left:calc((var(--page-margin)/ 2) * 3)}.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .accommodations-col[_ngcontent-%COMP%]   .item-accommodation[_ngcontent-%COMP%]   .accommodation-property[_ngcontent-%COMP%]{font-size:12px;color:var(--ion-color-medium-tint)}.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .accommodations-col[_ngcontent-%COMP%]   .item-accommodation[_ngcontent-%COMP%]   .accommodation-value[_ngcontent-%COMP%]{display:inline-block;font-weight:400;font-size:14px;color:var(--ion-color-medium-tint);margin-top:4px}.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .accommodations-col[_ngcontent-%COMP%]   .item-accommodation[_ngcontent-%COMP%]   .accommodation-name[_ngcontent-%COMP%]{display:inline-block;font-size:12px;color:var(--ion-color-medium-tint)}.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .accommodations-col[_ngcontent-%COMP%]   .item-accommodation[_ngcontent-%COMP%]   .accommodation-icon[_ngcontent-%COMP%]{color:var(--ion-color-medium-tint);font-size:30px}.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .amenities-col[_ngcontent-%COMP%]{padding:0 var(--page-margin) calc(var(--page-margin)/ 2);background:var(--app-background-shade)}.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .amenities-col[_ngcontent-%COMP%]   .amenities-title[_ngcontent-%COMP%]{margin:var(--page-margin) 0 calc(var(--page-margin)/ 2);font-size:12px;text-transform:uppercase;letter-spacing:1px;color:var(--ion-color-medium-shade)}.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .amenities-col[_ngcontent-%COMP%]   .amenities-wrapper[_ngcontent-%COMP%]{margin:0 calc(var(--page-amenity-horizontal-gutter) * -1)}.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .amenities-col[_ngcontent-%COMP%]   .amenities-wrapper[_ngcontent-%COMP%]   .item-amenity[_ngcontent-%COMP%]{padding:var(--page-amenity-vertical-gutter) var(--page-amenity-horizontal-gutter);display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center}.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .amenities-col[_ngcontent-%COMP%]   .amenities-wrapper[_ngcontent-%COMP%]   .item-amenity[_ngcontent-%COMP%]   .amenity-icon[_ngcontent-%COMP%]{color:var(--ion-color-medium-tint);font-size:30px;flex-shrink:0}.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .amenities-col[_ngcontent-%COMP%]   .amenities-wrapper[_ngcontent-%COMP%]   .item-amenity[_ngcontent-%COMP%]   .amenity-value[_ngcontent-%COMP%]{display:block;font-weight:300;font-size:12px;color:var(--ion-color-medium-tint);margin-left:calc(var(--page-amenity-horizontal-gutter) * 2);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}"],["[_nghost-%COMP%]{--shell-color:#d9453a;--shell-color-rgb:217,69,58}app-image-shell.item-picture[_ngcontent-%COMP%]{--image-shell-loading-background:rgba(var(--shell-color-rgb), .10);--image-shell-spinner-color:rgba(var(--shell-color-rgb), .25)}.item-price[_ngcontent-%COMP%]   app-text-shell[_ngcontent-%COMP%]{--text-shell-line-color:rgba(var(--shell-color-rgb), .25);min-width:50px;max-width:100px}.item-price[_ngcontent-%COMP%]   app-text-shell.text-loaded[_ngcontent-%COMP%]{max-width:inherit}.item-address[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-color:rgba(var(--shell-color-rgb), .20);--text-shell-line-height:14px;max-width:60%}.item-address[_ngcontent-%COMP%] > app-text-shell.text-loaded[_ngcontent-%COMP%]{max-width:inherit}.accommodation-value[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-color:rgba(var(--shell-color-rgb), .10);--text-shell-line-height:14px;min-width:30px}.accommodation-value[_ngcontent-%COMP%] > app-text-shell.text-loaded[_ngcontent-%COMP%]{min-width:0}.amenity-value[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-color:rgba(var(--shell-color-rgb), .05);--text-shell-line-height:12px;min-width:50px}.amenity-value[_ngcontent-%COMP%] > app-text-shell.text-loaded[_ngcontent-%COMP%]{min-width:0}"]],data:{}});function M(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"ion-icon",[["class","like-icon"],["name","heart"]],null,null,null,r.hb,r.n)),t["\u0275did"](1,49152,null,0,d.C,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null)],(function(n,l){n(l,1,0,"heart")}),null)}function x(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"ion-icon",[["class","like-icon"],["name","heart-outline"]],null,null,null,r.hb,r.n)),t["\u0275did"](1,49152,null,0,d.C,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null)],(function(n,l){n(l,1,0,"heart-outline")}),null)}function P(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"ion-icon",[["class","amenity-icon"]],null,null,null,r.hb,r.n)),t["\u0275did"](1,49152,null,0,d.C,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{src:[0,"src"]},null)],(function(n,l){n(l,1,0,l.parent.context.$implicit.icon)}),null)}function w(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,6,"ion-col",[["class","item-amenity"],["size","4"]],null,null,null,r.ab,r.g)),t["\u0275did"](1,49152,null,0,d.t,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(n()(),t["\u0275and"](16777216,null,0,1,null,P)),t["\u0275did"](3,16384,null,0,g.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275eld"](4,0,null,0,2,"span",[["class","amenity-value"]],null,null,null,null,null)),(n()(),t["\u0275eld"](5,0,null,null,1,"app-text-shell",[],[[2,"text-loaded",null]],null,null,m.b,m.a)),t["\u0275did"](6,49152,null,0,p.a,[],{data:[0,"data"]},null)],(function(n,l){n(l,1,0,"4"),n(l,3,0,l.context.$implicit.icon),n(l,6,0,l.context.$implicit.name)}),(function(n,l){n(l,5,0,t["\u0275nov"](l,6).textLoaded)}))}function v(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,3,"ion-col",[["class","has-more-amenities"]],null,null,null,r.ab,r.g)),t["\u0275did"](1,49152,null,0,d.t,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](2,0,null,0,1,"span",[["class","amenities-count"]],null,null,null,null,null)),(n()(),t["\u0275ted"](3,null,["+",""]))],null,(function(n,l){n(l,3,0,l.parent.parent.context.$implicit.amenities.length-4)}))}function R(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,10,"ion-col",[["class","amenities-col"],["size","12"]],null,null,null,r.ab,r.g)),t["\u0275did"](1,49152,null,0,d.t,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(n()(),t["\u0275eld"](2,0,null,0,1,"h5",[["class","amenities-title"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["Amenities"])),(n()(),t["\u0275eld"](4,0,null,0,6,"ion-row",[["class","amenities-wrapper"]],null,null,null,r.wb,r.C)),t["\u0275did"](5,49152,null,0,d.gb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](6,0,null,0,4,null,null,null,null,null,null,null)),(n()(),t["\u0275and"](16777216,null,null,1,null,w)),t["\u0275did"](8,278528,null,0,g.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),t["\u0275and"](16777216,null,null,1,null,v)),t["\u0275did"](10,16384,null,0,g.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(n,l){var e=l.component;n(l,1,0,"12");var t=l.parent.context.$implicit.amenities.slice(0,4);n(l,8,0,t),n(l,10,0,3==e.i&&l.parent.context.$implicit.amenities.length>4)}),null)}function k(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,77,"div",[["class","listing-item"]],null,null,null,null,null)),(n()(),t["\u0275eld"](1,0,null,null,12,"ion-row",[["class","image-row"]],null,null,null,r.wb,r.C)),t["\u0275did"](2,49152,null,0,d.gb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](3,0,null,0,10,"ion-col",[["size","12"]],null,null,null,r.ab,r.g)),t["\u0275did"](4,49152,null,0,d.t,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(n()(),t["\u0275eld"](5,0,null,0,8,"a",[["class","image-anchor"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(n,l,e){var i=!0;return"click"===l&&(i=!1!==t["\u0275nov"](n,6).onClick(e)&&i),"click"===l&&(i=!1!==t["\u0275nov"](n,7).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&i),i}),null,null)),t["\u0275did"](6,737280,null,0,d.Jb,[g.LocationStrategy,d.Gb,t.ElementRef,h.m,[2,h.n]],null,null),t["\u0275did"](7,671744,null,0,h.o,[h.m,h.a,g.LocationStrategy],{routerLink:[0,"routerLink"]},null),t["\u0275pad"](8,2),(n()(),t["\u0275eld"](9,0,null,null,4,"app-image-shell",[["animation","spinner"],["class","item-picture"]],[[2,"img-loaded",null],[4,"backgroundImage",null],[1,"display",0]],null,null,f.b,f.a)),t["\u0275did"](10,49152,null,0,C.a,[t.PLATFORM_ID],{display:[0,"display"],src:[1,"src"]},null),(n()(),t["\u0275eld"](11,0,null,0,2,"app-aspect-ratio",[],[[4,"padding",null]],null,null,b.b,b.a)),t["\u0275did"](12,49152,null,0,_.a,[],{ratio:[0,"ratio"]},null),t["\u0275pod"](13,{w:0,h:1}),(n()(),t["\u0275eld"](14,0,null,null,63,"ion-row",[["class","description-row"]],null,null,null,r.wb,r.C)),t["\u0275did"](15,49152,null,0,d.gb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](16,0,null,0,19,"ion-col",[["class","details-col"],["size","12"]],null,null,null,r.ab,r.g)),t["\u0275did"](17,49152,null,0,d.t,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(n()(),t["\u0275eld"](18,0,null,0,17,"ion-row",[["class","details-wrapper"]],null,null,null,r.wb,r.C)),t["\u0275did"](19,49152,null,0,d.gb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](20,0,null,0,9,"ion-col",[],null,null,null,r.ab,r.g)),t["\u0275did"](21,49152,null,0,d.t,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](22,0,null,0,4,"h4",[["class","item-price"]],null,null,null,null,null)),(n()(),t["\u0275eld"](23,0,null,null,1,"span",[["class","price-icon"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["$"])),(n()(),t["\u0275eld"](25,0,null,null,1,"app-text-shell",[],[[2,"text-loaded",null]],null,null,m.b,m.a)),t["\u0275did"](26,49152,null,0,p.a,[],{data:[0,"data"]},null),(n()(),t["\u0275eld"](27,0,null,0,2,"p",[["class","item-address"]],null,null,null,null,null)),(n()(),t["\u0275eld"](28,0,null,null,1,"app-text-shell",[],[[2,"text-loaded",null]],null,null,m.b,m.a)),t["\u0275did"](29,49152,null,0,p.a,[],{data:[0,"data"]},null),(n()(),t["\u0275eld"](30,0,null,0,5,"ion-col",[["class","bookmark-col"],["size","2"]],null,null,null,r.ab,r.g)),t["\u0275did"](31,49152,null,0,d.t,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(n()(),t["\u0275and"](16777216,null,0,1,null,M)),t["\u0275did"](33,16384,null,0,g.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,0,1,null,x)),t["\u0275did"](35,16384,null,0,g.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275eld"](36,0,null,0,39,"ion-col",[["class","accommodations-col"],["size","12"]],null,null,null,r.ab,r.g)),t["\u0275did"](37,49152,null,0,d.t,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(n()(),t["\u0275eld"](38,0,null,0,37,"ion-row",[["class","accommodations-wrapper"]],null,null,null,r.wb,r.C)),t["\u0275did"](39,49152,null,0,d.gb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](40,0,null,0,8,"ion-col",[["class","item-accommodation"]],null,null,null,r.ab,r.g)),t["\u0275did"](41,49152,null,0,d.t,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](42,0,null,0,1,"ion-icon",[["class","accommodation-icon"],["src","./assets/custom-icons/real-estate/guests.svg"]],null,null,null,r.hb,r.n)),t["\u0275did"](43,49152,null,0,d.C,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{src:[0,"src"]},null),(n()(),t["\u0275eld"](44,0,null,0,1,"span",[["class","accommodation-property"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["Guests"])),(n()(),t["\u0275eld"](46,0,null,0,2,"span",[["class","accommodation-value"]],null,null,null,null,null)),(n()(),t["\u0275eld"](47,0,null,null,1,"app-text-shell",[],[[2,"text-loaded",null]],null,null,m.b,m.a)),t["\u0275did"](48,49152,null,0,p.a,[],{data:[0,"data"]},null),(n()(),t["\u0275eld"](49,0,null,0,8,"ion-col",[["class","item-accommodation"]],null,null,null,r.ab,r.g)),t["\u0275did"](50,49152,null,0,d.t,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](51,0,null,0,1,"ion-icon",[["class","accommodation-icon"],["src","./assets/custom-icons/real-estate/bedrooms.svg"]],null,null,null,r.hb,r.n)),t["\u0275did"](52,49152,null,0,d.C,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{src:[0,"src"]},null),(n()(),t["\u0275eld"](53,0,null,0,1,"span",[["class","accommodation-property"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["Bedrooms"])),(n()(),t["\u0275eld"](55,0,null,0,2,"span",[["class","accommodation-value"]],null,null,null,null,null)),(n()(),t["\u0275eld"](56,0,null,null,1,"app-text-shell",[],[[2,"text-loaded",null]],null,null,m.b,m.a)),t["\u0275did"](57,49152,null,0,p.a,[],{data:[0,"data"]},null),(n()(),t["\u0275eld"](58,0,null,0,8,"ion-col",[["class","item-accommodation"]],null,null,null,r.ab,r.g)),t["\u0275did"](59,49152,null,0,d.t,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](60,0,null,0,1,"ion-icon",[["class","accommodation-icon"],["src","./assets/custom-icons/real-estate/bathroom.svg"]],null,null,null,r.hb,r.n)),t["\u0275did"](61,49152,null,0,d.C,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{src:[0,"src"]},null),(n()(),t["\u0275eld"](62,0,null,0,1,"span",[["class","accommodation-property"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["Bathrooms"])),(n()(),t["\u0275eld"](64,0,null,0,2,"span",[["class","accommodation-value"]],null,null,null,null,null)),(n()(),t["\u0275eld"](65,0,null,null,1,"app-text-shell",[],[[2,"text-loaded",null]],null,null,m.b,m.a)),t["\u0275did"](66,49152,null,0,p.a,[],{data:[0,"data"]},null),(n()(),t["\u0275eld"](67,0,null,0,8,"ion-col",[["class","item-accommodation"]],null,null,null,r.ab,r.g)),t["\u0275did"](68,49152,null,0,d.t,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](69,0,null,0,1,"ion-icon",[["class","accommodation-icon"],["src","./assets/custom-icons/real-estate/patio.svg"]],null,null,null,r.hb,r.n)),t["\u0275did"](70,49152,null,0,d.C,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{src:[0,"src"]},null),(n()(),t["\u0275eld"](71,0,null,0,1,"span",[["class","accommodation-property"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["Patios"])),(n()(),t["\u0275eld"](73,0,null,0,2,"span",[["class","accommodation-value"]],null,null,null,null,null)),(n()(),t["\u0275eld"](74,0,null,null,1,"app-text-shell",[],[[2,"text-loaded",null]],null,null,m.b,m.a)),t["\u0275did"](75,49152,null,0,p.a,[],{data:[0,"data"]},null),(n()(),t["\u0275and"](16777216,null,0,1,null,R)),t["\u0275did"](77,16384,null,0,g.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(n,l){n(l,4,0,"12"),n(l,6,0);var e=n(l,8,0,"/app/categories/real-estate/",l.context.$implicit.slug);n(l,7,0,e),n(l,10,0,"cover",l.context.$implicit.picture);var t=n(l,13,0,365,125);n(l,12,0,t),n(l,17,0,"12"),n(l,26,0,l.context.$implicit.price),n(l,29,0,l.context.$implicit.address),n(l,31,0,"2"),n(l,33,0,l.context.$implicit.liked),n(l,35,0,!l.context.$implicit.liked),n(l,37,0,"12"),n(l,43,0,"./assets/custom-icons/real-estate/guests.svg"),n(l,48,0,null==l.context.$implicit.accommodations?null:l.context.$implicit.accommodations.guests),n(l,52,0,"./assets/custom-icons/real-estate/bedrooms.svg"),n(l,57,0,null==l.context.$implicit.accommodations?null:l.context.$implicit.accommodations.bedrooms),n(l,61,0,"./assets/custom-icons/real-estate/bathroom.svg"),n(l,66,0,null==l.context.$implicit.accommodations?null:l.context.$implicit.accommodations.bathrooms),n(l,70,0,"./assets/custom-icons/real-estate/patio.svg"),n(l,75,0,null==l.context.$implicit.accommodations?null:l.context.$implicit.accommodations.patios),n(l,77,0,l.context.$implicit.amenities)}),(function(n,l){n(l,5,0,t["\u0275nov"](l,7).target,t["\u0275nov"](l,7).href),n(l,9,0,t["\u0275nov"](l,10).imageLoaded,t["\u0275nov"](l,10).backgroundImage,t["\u0275nov"](l,10).display),n(l,11,0,t["\u0275nov"](l,12).ratioPadding),n(l,25,0,t["\u0275nov"](l,26).textLoaded),n(l,28,0,t["\u0275nov"](l,29).textLoaded),n(l,47,0,t["\u0275nov"](l,48).textLoaded),n(l,56,0,t["\u0275nov"](l,57).textLoaded),n(l,65,0,t["\u0275nov"](l,66).textLoaded),n(l,74,0,t["\u0275nov"](l,75).textLoaded)}))}function y(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,11,"ion-header",[],null,null,null,r.gb,r.m)),t["\u0275did"](1,49152,null,0,d.B,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](2,0,null,0,9,"ion-toolbar",[["color","primary"]],null,null,null,r.Nb,r.T)),t["\u0275did"](3,49152,null,0,d.zb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"]},null),(n()(),t["\u0275eld"](4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,r.Y,r.e)),t["\u0275did"](5,49152,null,0,d.l,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](6,0,null,0,2,"ion-back-button",[["defaultHref","app/categories"]],null,[[null,"click"]],(function(n,l,e){var i=!0;return"click"===l&&(i=!1!==t["\u0275nov"](n,8).onClick(e)&&i),i}),r.V,r.b)),t["\u0275did"](7,49152,null,0,d.g,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{defaultHref:[0,"defaultHref"]},null),t["\u0275did"](8,16384,null,0,d.h,[[2,d.fb],d.Gb],{defaultHref:[0,"defaultHref"]},null),(n()(),t["\u0275eld"](9,0,null,0,2,"ion-title",[],null,null,null,r.Lb,r.R)),t["\u0275did"](10,49152,null,0,d.xb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275ted"](-1,0,["Real Estate Listing"])),(n()(),t["\u0275eld"](12,0,null,null,3,"ion-content",[["class","real-estate-listing-content"]],null,null,null,r.bb,r.h)),t["\u0275did"](13,49152,null,0,d.u,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275and"](16777216,null,0,1,null,k)),t["\u0275did"](15,278528,null,0,g.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],(function(n,l){var e=l.component;n(l,3,0,"primary"),n(l,7,0,"app/categories"),n(l,8,0,"app/categories"),n(l,15,0,e.listing.items)}),null)}function N(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"app-real-estate-listing",[],[[2,"is-shell",null]],null,null,y,O)),t["\u0275did"](1,114688,null,0,i,[h.a],null,null)],(function(n,l){n(l,1,0)}),(function(n,l){n(l,0,0,t["\u0275nov"](l,1).isShell)}))}var E=t["\u0275ccf"]("app-real-estate-listing",i,N,{},{},[]),I=e("s7LF"),D=e("IheW"),z=e("ZpN7"),T=e("Kt/9"),Z=e("j1ZV");e.d(l,"RealEstateListingPageModuleNgFactory",(function(){return L}));var L=t["\u0275cmf"](s,[],(function(n){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[u.a,E]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,g.NgLocalization,g.NgLocaleLocalization,[t.LOCALE_ID,[2,g["\u0275angular_packages_common_common_a"]]]),t["\u0275mpd"](4608,I.u,I.u,[]),t["\u0275mpd"](4608,d.b,d.b,[t.NgZone,t.ApplicationRef]),t["\u0275mpd"](4608,d.Fb,d.Fb,[d.b,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](4608,d.Hb,d.Hb,[d.b,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](4608,D.h,D.n,[g.DOCUMENT,t.PLATFORM_ID,D.l]),t["\u0275mpd"](4608,D.o,D.o,[D.h,D.m]),t["\u0275mpd"](5120,D.a,(function(n){return[n]}),[D.o]),t["\u0275mpd"](4608,D.k,D.k,[]),t["\u0275mpd"](6144,D.i,null,[D.k]),t["\u0275mpd"](4608,D.g,D.g,[D.i]),t["\u0275mpd"](6144,D.b,null,[D.g]),t["\u0275mpd"](4608,D.f,D.j,[D.b,t.Injector]),t["\u0275mpd"](4608,D.c,D.c,[D.f]),t["\u0275mpd"](5120,t.APP_INITIALIZER,(function(n){return[z.b(n)]}),[T.a]),t["\u0275mpd"](4608,o.a,o.a,[D.c]),t["\u0275mpd"](4608,a,a,[o.a]),t["\u0275mpd"](1073742336,g.CommonModule,g.CommonModule,[]),t["\u0275mpd"](1073742336,I.t,I.t,[]),t["\u0275mpd"](1073742336,I.j,I.j,[]),t["\u0275mpd"](1073742336,d.Bb,d.Bb,[]),t["\u0275mpd"](1073742336,h.p,h.p,[[2,h.u],[2,h.m]]),t["\u0275mpd"](1073742336,D.e,D.e,[]),t["\u0275mpd"](1073742336,D.d,D.d,[]),t["\u0275mpd"](1073742336,z.a,z.a,[]),t["\u0275mpd"](1073742336,Z.a,Z.a,[]),t["\u0275mpd"](1073742336,s,s,[]),t["\u0275mpd"](256,D.l,"XSRF-TOKEN",[]),t["\u0275mpd"](256,D.m,"X-XSRF-TOKEN",[]),t["\u0275mpd"](1024,h.k,(function(){return[[{path:"",component:i,resolve:{data:c}}]]}),[])])}))},"f/Ol":function(n,l,e){"use strict";e.d(l,"b",(function(){return r})),e.d(l,"a",(function(){return d}));var t=e("jtHE"),i=e("LRne"),o=e("itXk"),a=e("3E0/"),c=e("lJxs"),s=e("JX91"),u=e("Kt/9");class r{constructor(){this.isShell=!1}}class d{constructor(n){this.shellModel=n,this.networkDelay=u.a.settings&&u.a.settings.networkDelay?u.a.settings.networkDelay:0,this.timeline=new t.a(1)}static AppendShell(n,l,e=400){const t=Object(i.a)(!0).pipe(Object(a.a)(e));return Object(o.a)([t,n]).pipe(Object(c.a)(([n,l])=>Object.assign(l,{isShell:!1})),Object(s.a)(Object.assign(l,{isShell:!0})))}load(n){d.AppendShell(n,this.shellModel,this.networkDelay).subscribe(n=>{this.timeline.next(n)})}get state(){return this.timeline.asObservable()}}},jtHE:function(n,l,e){"use strict";e.d(l,"a",(function(){return u}));var t=e("XNiG"),i=e("qgXg"),o=e("quSY"),a=e("pxpQ"),c=e("9ppp"),s=e("Ylt2");class u extends t.a{constructor(n=Number.POSITIVE_INFINITY,l=Number.POSITIVE_INFINITY,e){super(),this.scheduler=e,this._events=[],this._infiniteTimeWindow=!1,this._bufferSize=n<1?1:n,this._windowTime=l<1?1:l,l===Number.POSITIVE_INFINITY?(this._infiniteTimeWindow=!0,this.next=this.nextInfiniteTimeWindow):this.next=this.nextTimeWindow}nextInfiniteTimeWindow(n){const l=this._events;l.push(n),l.length>this._bufferSize&&l.shift(),super.next(n)}nextTimeWindow(n){this._events.push(new r(this._getNow(),n)),this._trimBufferThenGetEvents(),super.next(n)}_subscribe(n){const l=this._infiniteTimeWindow,e=l?this._events:this._trimBufferThenGetEvents(),t=this.scheduler,i=e.length;let u;if(this.closed)throw new c.a;if(this.isStopped||this.hasError?u=o.a.EMPTY:(this.observers.push(n),u=new s.a(this,n)),t&&n.add(n=new a.a(n,t)),l)for(let o=0;o<i&&!n.closed;o++)n.next(e[o]);else for(let o=0;o<i&&!n.closed;o++)n.next(e[o].value);return this.hasError?n.error(this.thrownError):this.isStopped&&n.complete(),u}_getNow(){return(this.scheduler||i.a).now()}_trimBufferThenGetEvents(){const n=this._getNow(),l=this._bufferSize,e=this._windowTime,t=this._events,i=t.length;let o=0;for(;o<i&&!(n-t[o].time<e);)o++;return i>l&&(o=Math.max(o,i-l)),o>0&&t.splice(0,o),t}}class r{constructor(n,l){this.time=n,this.value=l}}},pxpQ:function(n,l,e){"use strict";e.d(l,"b",(function(){return o})),e.d(l,"a",(function(){return c}));var t=e("7o/Q"),i=e("WMd4");function o(n,l=0){return function(e){return e.lift(new a(n,l))}}class a{constructor(n,l=0){this.scheduler=n,this.delay=l}call(n,l){return l.subscribe(new c(n,this.scheduler,this.delay))}}class c extends t.a{constructor(n,l,e=0){super(n),this.scheduler=l,this.delay=e}static dispatch(n){const{notification:l,destination:e}=n;l.observe(e),this.unsubscribe()}scheduleMessage(n){this.destination.add(this.scheduler.schedule(c.dispatch,this.delay,new s(n,this.destination)))}_next(n){this.scheduleMessage(i.a.createNext(n))}_error(n){this.scheduleMessage(i.a.createError(n)),this.unsubscribe()}_complete(){this.scheduleMessage(i.a.createComplete()),this.unsubscribe()}}class s{constructor(n,l){this.notification=n,this.destination=l}}},qgXg:function(n,l,e){"use strict";var t=e("3N8a");class i extends t.a{constructor(n,l){super(n,l),this.scheduler=n,this.work=l}schedule(n,l=0){return l>0?super.schedule(n,l):(this.delay=l,this.state=n,this.scheduler.flush(this),this)}execute(n,l){return l>0||this.closed?super.execute(n,l):this._execute(n,l)}requestAsyncId(n,l,e=0){return null!==e&&e>0||null===e&&this.delay>0?super.requestAsyncId(n,l,e):n.flush(this)}}var o=e("IjjT");class a extends o.a{}e.d(l,"a",(function(){return c}));const c=new a(i)}}]);