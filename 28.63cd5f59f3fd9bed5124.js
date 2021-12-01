/*! For license information please see 28.63cd5f59f3fd9bed5124.js.LICENSE.txt */
(this.webpackJsonp=this.webpackJsonp||[]).push([[28],{"+SiF":function(e,t,a){"use strict";a.r(t);var n=a("pVnL"),r=a.n(n),c=a("J4zp"),o=a.n(c),l=a("QILm"),s=a.n(l),i=a("q1tI"),u=a.n(i);t.default=function CarouselClickable(e){var t=e.tag,a=void 0===t?"div":t,n=e.className,c=void 0===n?"":n,l=e.onClick,d=s()(e,["tag","className","onClick"]),m=Object(i.useState)({}),p=o()(m,2),f=p[0],b=p[1],C=a,y=["pointer",c].join(" ");return u.a.createElement(C,r()({className:y,onMouseDown:function handleMouseDown(e){b({x:e.clientX,y:e.clientY})},onMouseUp:function handleMouseUp(e){var t=e.clientX,a=e.clientY;t===f.x&&a===f.y&&l&&l()}},d))}},"5Z9a":function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),c=a("9kay"),o=a("2Jty"),l=a("RaRB"),s=a("VgBE"),i=a("LpC/"),u=a("+SiF"),d=a("/MKj"),m=a("3dGX"),p=a("RZjG"),f=a.n(p),b=a("ImCz");t.default=r.a.memo((function(e){var t=e.className,a=void 0===t?"":t,p=Object(d.useSelector)((function(e){return e.cardPromotion.hotDeals.data})),C=Object(c.useTranslation)().t,y=Object(d.useDispatch)();return Object(n.useEffect)((function(){y(Object(m.getHotDeals)())}),[]),r.a.createElement("div",{className:Object(s.clsx)(["promotion-hots-slide",a])},p?r.a.createElement(i.default,{settings:{dots:!0,arrows:!1,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:5e3,className:"center"}},p.map((function(e){return r.a.createElement("div",{key:e.code,className:"banner"},r.a.createElement(u.default,{style:{backgroundImage:"url('".concat(e.webImageUri?Object(s.largeSizeImgPromotion)(e.baseUrl+e.webImageUri):b.default,"')")},className:"banner__content",onClick:function onClick(t){return Object(o.goURL)(Object(l.default)(["card-promotion-details",{promotionId:e.id}]))}},r.a.createElement("div",{className:"content-text"},r.a.createElement("div",{className:"heading-5 m-heading-s name"},e.name),r.a.createElement("div",{className:"paragraph-2 m-paragraph-s mt-2 description"},e.shortDescription))))}))):r.a.createElement("div",{className:"failed-fetch"},r.a.createElement("img",{alt:"failed-fetch",src:f.a}),r.a.createElement("span",{className:"ml-2"},C("general.connection-failed"))))}))},BE3t:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),c=a("dury"),o=a("9kay"),l=a("FT44"),s=a("VgBE"),i=a("z8jw"),u=a.n(i);t.default=function LoginMessage(e){var t=e.show,a=e.onClose,n=e.messages,i=Object(o.useTranslation)().t;return r.a.createElement(c.default,{center:!0,show:t,containerClass:"login-modal"},r.a.createElement("img",{alt:"man",src:u.a}),r.a.createElement("div",{className:"heading-6 mt-6"},i("home.login.modal.title")),Object(s.ensureArray)(n).map((function(e,t){return r.a.createElement("div",{className:"mt-4 paragraph-3",key:t},e.xtext)})),r.a.createElement(l.default,{className:"mt-8",onClick:function onClick(){return"function"===typeof a&&a()}},i("home.login.modal.accept")))}},EOcD:function(e,t,a){"use strict";a.r(t);var n=a("pVnL"),r=a.n(n),c=a("QILm"),o=a.n(c),l=a("q1tI"),s=a.n(l),i=a("VgBE"),u=a("1/+k"),d=a("R8/Q"),m=a.n(d),p=a("ke2b"),f=a.n(p);t.default=function FilterAccount(e){var t=e.className,a=e.type,n=e.status,c=e.label,l=e.active,d=void 0!==l&&l,p=e.count,b=void 0===p?0:p,C=e.onClick,y=e.hideCheck,E=o()(e,["className","type","status","label","active","count","onClick","hideCheck"]),h=["wrap-filter-account"];d&&h.push("active"),n===u.STATUS_OF_TYPE.LOADING&&h.push("opacity-8"),t&&h.push(t);var g=(!n||n===u.STATUS_OF_TYPE.LOADED)&&!b,O=g?"".concat(a,"-disabled"):a;return s.a.createElement("div",{className:h.join(" ")},s.a.createElement("div",r()({},E,{onClick:function handleClick(){!g&&"function"===typeof C&&C()},className:["filter-account",g?"":"pointer"].join(" ")}),s.a.createElement("img",{className:"account-type-icon",src:Object(i.lowerCase)("/static/image/icon/56px/".concat(O,".svg")),alt:"Account type"}),!y&&s.a.createElement("img",{className:"status-icon",src:d?f.a:m.a,alt:"Icon check"})),s.a.createElement("div",{className:"account-label label-3 m-label-s mt-4"},c,n&&n!==u.STATUS_OF_TYPE.LOADED?"":" (".concat(b,")")))}},FbgF:function(e,t){e.exports="data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Cpath d='M22 12C22 12 19 18 12 18C5 18 2 12 2 12C2 12 5 6 12 6C19 6 22 12 22 12Z' stroke='%23005993' stroke-linecap='square'/%3E %3Cpath d='M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z' stroke='%23EA114E' stroke-linecap='square'/%3E %3Cpath d='M3 21L20 4' stroke='%23005993' stroke-linecap='square'/%3E %3C/svg%3E"},HsDU:function(e,t){e.exports="data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Cpath d='M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z' stroke='%23005993' stroke-linecap='square'/%3E %3Cpath d='M12 10L12 17' stroke='%23EE2E63'/%3E %3Cpath d='M12 7L12 9' stroke='%23EE2E63'/%3E %3C/svg%3E"},ImCz:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/artboard-2.0bf9f66a.png"},"LpC/":function(e,t,a){"use strict";a.r(t);var n=a("lSNA"),r=a.n(n),c=a("q1tI"),o=a.n(c),l=a("OS56"),s=a.n(l),i=a("VgBE"),u=a("wqvF"),d=a.n(u);function ownKeys(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(a),!0).forEach((function(t){r()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ownKeys(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var m=function CustomArrow(e){var t=e.className,a=e.onClick;return o.a.createElement("img",{alt:"arrow",className:t,onClick:a,src:d.a})};t.default=function Carousel(e){var t=e.settings,a=e.children,n=e.dotsOutside,r=e.arrowsOutside,c=_objectSpread(_objectSpread({appendDots:function appendDots(e){return o.a.createElement("div",null,e)},customPaging:function customPaging(e){return o.a.createElement("div",{className:"vt-carousel__dot"})},dots:!0,arrows:!1,infinite:!0,nextArrow:o.a.createElement(m,null),prevArrow:o.a.createElement(m,null)},t),{},{className:Object(i.clsx)(["vt-carousel",n&&"dots-outside",(null===t||void 0===t?void 0:t.className)||"",r&&"arrows-outside"])});return o.a.createElement(s.a,c,a)}},OPXa:function(e,t,a){"use strict";a.r(t);var n=a("pVnL"),r=a.n(n),c=a("QILm"),o=a.n(c),l=a("o0o1"),s=a.n(l),i=a("yXPU"),u=a.n(i),d=a("RIqP"),m=a.n(d),p=a("lSNA"),f=a.n(p),b=a("J4zp"),C=a.n(b),y=a("q1tI"),E=a.n(y),h=a("9kay"),g=a("/MKj"),O=a("VgBE"),v=a("0BeC"),j=a("/2R5"),w=a("PVQN"),S=a("VBPc"),k=a("Wcmu"),D=a("2Jty"),N=a("RaRB"),A=a("Qwzf"),x=a("1/+k"),_=a("sR6m"),T=a("Wyj4"),L=a("q0DL"),P=a("JQq4"),I=a("/6mA"),R=a("DJjK"),M=a("kzhu"),B=a("kwtJ"),q=a("9ieW"),U=a("Kz8V"),Y=a("EOcD"),F=a("YYlZ"),z=a("G+4/"),Z=a("eWbq"),V=a("BE3t"),G=a("mLIq"),K=a("L+1Y"),Q=a("cflx"),J=a("WISH"),W=a("xOxQ"),H=a("Q7ZI"),X=a("PNlo"),$=a("aTCE"),ee=a("XOnO"),te=a.n(ee),ae=a("FbgF"),ne=a.n(ae),re=a("HsDU"),ce=a.n(re);function ownKeys(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(a),!0).forEach((function(t){f()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ownKeys(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}t.default=function Home(e){var t,a,n,c=x.default.ACCOUNT_TYPE,l=x.default.ACCOUNT_TYPE_MAP,i=x.default.CARD_TYPE,d=x.default.STATUS_OF_TYPE,p=Object(h.useTranslation)().t,b=Object(g.useDispatch)(),ee=Object(g.useSelector)(S.getLoading),ae=Object(g.useSelector)(k.default.getUnreadMessage),re=Object(g.useSelector)((function(e){return e.filter.home})),oe=Object(y.useState)({}),le=C()(oe,2),se=le[0],ie=le[1],ue=Object(y.useState)(!1),de=C()(ue,2),me=de[0],pe=de[1],fe=Object(y.useState)(null),be=C()(fe,2),Ce=be[0],ye=be[1],Ee=Object(y.useState)(null),he=C()(Ee,2),ge=he[0],Oe=he[1],ve=Object(y.useState)(!1),je=C()(ve,2),we=je[0],Se=je[1],ke=Object(y.useState)(""),De=C()(ke,2),Ne=De[0],Ae=De[1],xe=Object(y.useState)({show:!1,cards:[],summary:x.default.summary([]),filters:{type:null!==re&&void 0!==re&&re.type?re.type:[c.PAYMENT]},showModalConfirm:!1}),_e=C()(xe,2),Te=_e[0],Le=_e[1],Pe=Te.show,Ie=Te.cards,Re=Te.summary,Me=Te.filters,Be=Object(H.default)(Me.type.includes(c.PAYMENT),!0).list,qe=Object(X.default)(Me.type.includes(c.CREDIT),!1),Ue=qe.list,Ye=qe.status,Fe=qe.refresh,ze=Object($.default)(Me.type.includes(c.CARD),!1),Ze=ze.list,Ve=ze.status,Ge=ze.refresh,Ke=(t={},f()(t,c.CARD,Ve),f()(t,c.CREDIT,Ye),t),Qe=(a={},f()(a,c.PAYMENT||"PAYMENT",q.default),f()(a,c.SAVING||"SAVING",B.default),f()(a,c.LOAN||"LOAN",R.default),f()(a,c.CARD||"CARD",I.default),f()(a,c.BONDS||"BONDS",M.default),f()(a,c.CREDIT||"CREDIT",U.default),a),Je=Ie.reduce((function(e,t){var a=e.countByType,n=e.groupCards;return{countByType:_objectSpread(_objectSpread({},a),{},f()({},t.type,a[t.type]?++a[t.type]:1)),groupCards:_objectSpread(_objectSpread({},n),{},f()({},t.type,n[t.type]?[].concat(m()(n[t.type]),[t]):[t]))}}),{countByType:{},groupCards:{}}),We=Je.countByType,He=Je.groupCards,Xe=Object.keys(Qe).reduce((function(e,t){return Me.type.includes(t)?[].concat(m()(e),m()(He[t]||[])):e}),[]),$e=function updateFilters(e,t,a){if("type"!==e)return Le((function(a){return _objectSpread(_objectSpread({},a),{},{filters:_objectSpread(_objectSpread({},a.filters),{},f()({},e,t))})}));if([c.CARD,c.CREDIT].includes(t)){if(Ke[t]===d.NULL)switch(t){case c.CARD:return Ge();case c.CREDIT:return Fe()}if(Ke[t]!==d.LOADED)return"unloaded"}var n=Me.type.includes(t)?a?Me.type:Me.type.filter((function(e){return e!==t})):[].concat(m()(Me.type),[t]);return Le((function(t){return _objectSpread(_objectSpread({},t),{},{filters:_objectSpread(_objectSpread({},Me),{},f()({},e,n.length?n:[c.PAYMENT]))})}))},et=function(){var e=u()(s.a.mark((function _callee(e){var t;return s.a.wrap((function _callee$(a){for(;;)switch(a.prev=a.next){case 0:if(e){a.next=2;break}return a.abrupt("return","Rejected");case 2:return a.prev=2,b(Object(j.setLoading)(!0)),t=A.default.getDefaultAccountCardPayload(se),a.next=7,A.default.setDefaultAccountCard(t);case 7:b(Object(L.updateDefault)(t)),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(2),Object(O.errorHandle)(a.t0);case 13:return a.prev=13,b(Object(j.setLoading)(!1)),a.finish(13);case 16:case"end":return a.stop()}}),_callee,null,[[2,10,13,16]])})));return function callSetDefaultAPI(t){return e.apply(this,arguments)}}(),tt=function(){var e=u()(s.a.mark((function _callee2(e){var t,a;return s.a.wrap((function _callee2$(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,b(Object(j.setLoading)(!0)),n.next=4,A.default.getCardStatements({ccAccount:e});case 4:t=n.sent,a=t.data,Ae(a.card_statement),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(0),Ae([]),Object(O.errorHandle)(n.t0);case 13:return n.prev=13,b(Object(j.setLoading)(!1)),Se(!0),n.finish(13);case 17:case"end":return n.stop()}}),_callee2,null,[[0,9,13,17]])})));return function handleGetStatement(t){return e.apply(this,arguments)}}();Object(_.default)((function(){b(Object(T.changeFilter)({filter:Me,page:"home"}))}),[Me]),Object(_.default)((function(){Ze.length&&Ke[c.CARD]===d.LOADED&&$e("type",c.CARD,!0)}),[Ke[c.CARD]]),Object(_.default)((function(){Ue.length&&Ke[c.CREDIT]===d.LOADED&&$e("type",c.CREDIT,!0)}),[Ke[c.CREDIT]]),Object(y.useEffect)((function(){var e=[].concat(m()(Be),m()(Ue.sort(x.compareCreditAccPriority)),m()(Ze.sort(x.compareCardPriority)));Le((function(t){return _objectSpread(_objectSpread({},t),{},{cards:e,summary:x.default.summary(e)})}))}),[Be,Ue,Ze]),Object(y.useEffect)((function(){b(Object(w.setCurrentAccount)("")),b(Object(w.setCurrentCard)(""))}),[]);var at=Xe.filter((function(e){return Me.type.includes(e.type)}));return E.a.createElement("div",{className:"home-page"},E.a.createElement(K.default,{yCenter:!0,xBetween:!0},E.a.createElement("span",{className:"heading heading-5 m-heading-m"},p("home.your_account"),E.a.createElement("img",{src:Pe?te.a:ne.a,className:"pointer",alt:"eye",onClick:function onClick(){return Le((function(e){return _objectSpread(_objectSpread({},e),{},{show:!Pe})}))}})),E.a.createElement("img",{onClick:function onClick(){return pe(!0)},className:"pointer view-details",src:ce.a,alt:"icon infor"})),E.a.createElement("div",{className:"summary"},Re.map((function(e,t){return E.a.createElement("div",{key:"".concat(t,"-type"),className:"item-type"},E.a.createElement(Y.default,{type:e.type,label:p(e.label),count:We[e.type],status:Ke[e.type],active:Me.type.includes(e.type),onClick:function onClick(){return Ke[e.type]!==d.LOADED||We[e.type]?$e("type",e.type):void 0}}),Ke[e.type]===d.LOADING&&E.a.createElement(P.default,{className:"scale-off-5 mt-4"}),Me.type.includes(e.type)&&e.description&&E.a.createElement(E.a.Fragment,null,E.a.createElement("div",{className:"balance-type"},p(e.description)),E.a.createElement("div",{className:"sum-balance"},e.sumBalance.map((function(e){var t=C()(e,2),a=t[0],n=t[1];return E.a.createElement("div",{key:"balance-".concat(a),className:"currency"},Pe?Object(O.formatCurrencyDynamicFloat)(n)||0:"*************"," "+a)})))))}))),E.a.createElement(W.default,{list:at,group:Me.type,RenderItem:function RenderItem(e){var t=e.card,a=o()(e,["card"]),n=t.type,s=Qe[n],u=t.type===c.PAYMENT?t._id:t.cardId;return E.a.createElement(s,r()({className:"block-item",show:Pe},t,{onClickStar:function onClickStar(){return function onConfirmChangeDefaultAccOrCard(e){ie(e),Le((function(e){return _objectSpread(_objectSpread({},e),{},{showModalConfirm:!e.showModalConfirm})}))}(_objectSpread(_objectSpread({},t),{},{card:t,cardID:u,cardType:n}))},goToAccountDetails:function goToAccountDetails(){return function handleGoToAccountDetails(e){Object.keys(l).includes(e.originType)&&b(Object(w.setCurrentAccount)(e)),Object(D.goURL)(Object(N.default)("payment-history",{accountNo:e.No}))}(t)},goToCardDetails:function goToCardDetails(){return function handleGoToCardDetails(e){Object.keys(i).includes(e.cardGrpCode)&&b(Object(w.setCurrentCard)(e)),Object(D.goURL)(Object(N.default)("payment-history-card",{cardNo:e._id}))}(t)},onClickLockCard:function onClickLockCard(){return ye(t)},onClickActiveCard:function onClickActiveCard(){return Oe(t)},getStatement:function getStatement(e){return tt(e)}},a))}}),E.a.createElement(z.default,{show:!!Ce,cardLockSelected:Ce,setCardLockSelected:ye}),E.a.createElement(Z.default,{show:!!ge,cardActiveSelected:ge,setCardActiveSelected:Oe,isActive:ge&&"declared"===ge.status}),E.a.createElement(Q.default,{show:me,onClose:function onClose(){return pe(!1)},details:Re.filter((function(e){return Me.type.includes(e.type)})).map((function(e){return _objectSpread(_objectSpread({},e),{},{count:We[e.type]})}))}),E.a.createElement(F.default,{center:!0,show:Te.showModalConfirm,setShow:function setShow(){return Le((function(e){return _objectSpread(_objectSpread({},e),{},{showModalConfirm:!e.showModalConfirm})}))},onConfirm:et,title:p("general.requestConfirm"),message:null!==se&&void 0!==se&&null!==(n=se.card)&&void 0!==n&&n.isDefault?p("home.confirmUnsetDefaultAccount"):p("home.confirmSetDefaultAccount"),card:null===se||void 0===se?void 0:se.card}),E.a.createElement(V.default,{messages:ae,show:!ee&&ae.length,onClose:function onClose(){return b(v.default.setUnreadMessage([]))}}),E.a.createElement(G.default,{show:we,onClose:function onClose(){return Se(!1)},statementLst:Ne}),E.a.createElement(J.default,{className:"mt-10"}))}},"R8/Q":function(e,t){e.exports="data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Cpath d='M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z' fill='%23C9D9EA'/%3E %3Cpath d='M10.1836 5.97402C10.3989 5.75866 10.7481 5.75866 10.9635 5.97402C11.1788 6.18938 11.1788 6.53856 10.9635 6.75392L7.65465 10.0627C7.43929 10.2781 7.09012 10.2781 6.87476 10.0627L5.03652 8.22451C4.82116 8.00914 4.82116 7.65997 5.03652 7.44461C5.25188 7.22925 5.60106 7.22925 5.81642 7.44461L7.26471 8.8929L10.1836 5.97402Z' fill='white'/%3E %3C/svg%3E"},WISH:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),c=a("9kay"),o=a("L+1Y"),l=a("/m4c"),s=a("5Z9a"),i=a("RaRB");t.default=r.a.memo((function index(){var e=Object(c.useTranslation)().t;return r.a.createElement("div",{className:"db-promotion"},r.a.createElement(o.default,{xBetween:!0,yBaseline:!0},r.a.createElement("div",{className:"heading-5"},e("home.label.promotion")),r.a.createElement(l.default,{href:Object(i.default)("card-promotion"),className:"text-primary label-3"},e("home.button.viewAll"))),r.a.createElement(s.default,{className:"mt-2 mt-md-6"}))}))},XOnO:function(e,t){e.exports="data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Cpath d='M22 12C22 12 19 18 12 18C5 18 2 12 2 12C2 12 5 6 12 6C19 6 22 12 22 12Z' stroke='%23005993' stroke-linecap='square'/%3E %3Cpath d='M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z' stroke='%23EA114E' stroke-linecap='square'/%3E %3C/svg%3E"},cflx:function(e,t,a){"use strict";a.r(t);var n=a("J4zp"),r=a.n(n),c=a("pVnL"),o=a.n(c),l=a("q1tI"),s=a.n(l),i=a("dury"),u=a("L+1Y"),d=a("EOcD"),m=a("9kay"),p=a("1/+k"),f=a("VgBE"),b=a("3YH8"),C=a.n(b),y=function Item(e){var t=e.item,a=Object(m.useTranslation)().t;return s.a.createElement(u.default,{className:"balance-item"},s.a.createElement(d.default,o()({className:"filter-view",hideCheck:!0},{type:t.type,label:a(t.label),count:t.count,status:p.STATUS_OF_TYPE.LOADED,active:!0,onClick:function onClick(){}})),s.a.createElement("div",{className:"ml-4"},s.a.createElement("div",{className:"text-secondary"},a(t.description||"home.card-desc")),t.description&&s.a.createElement("div",{className:"paragraph-2"},t.sumBalance.map((function(e){var t=r()(e,2),a=t[0],n=t[1];return s.a.createElement("div",{key:"details-balance-".concat(a),className:"mt-2"},"".concat(Object(f.formatCurrencyDynamicFloat)(n)||0," ").concat(a))})))))};t.default=function BalanceDetails(e){var t=e.show,a=e.onClose,n=e.details;return s.a.createElement(i.default,{show:t,onClose:a,rootClass:"modal-balance-details"},s.a.createElement(u.default,{xBetween:!0,yCenter:!0,className:"p-6 pb-0"},s.a.createElement("div",{className:"heading-6"},"Th\xf4ng tin t\xe0i kho\u1ea3n"),s.a.createElement("img",{onClick:a,src:C.a,className:"close-icon pointer",alt:"close"})),s.a.createElement(u.default,{wrap:!0},n.map((function(e,t){return s.a.createElement(y,{key:t,item:e})}))))}},ke2b:function(e,t){e.exports="data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Cpath d='M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z' fill='%23EA114E'/%3E %3Cpath d='M10.1836 5.97402C10.3989 5.75866 10.7481 5.75866 10.9635 5.97402C11.1788 6.18938 11.1788 6.53856 10.9635 6.75392L7.65465 10.0627C7.43929 10.2781 7.09012 10.2781 6.87476 10.0627L5.03652 8.22451C4.82116 8.00914 4.82116 7.65997 5.03652 7.44461C5.25188 7.22925 5.60106 7.22925 5.81642 7.44461L7.26471 8.8929L10.1836 5.97402Z' fill='white'/%3E %3C/svg%3E"},xOxQ:function(e,t,a){"use strict";a.r(t);var n=a("lSNA"),r=a.n(n),c=a("RIqP"),o=a.n(c),l=a("J4zp"),s=a.n(l),i=a("q1tI"),u=a.n(i),d=a("sZxp"),m=a.n(d),p=a("jzfa"),f=a("Q7ZI");function ownKeys(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(a),!0).forEach((function(t){r()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ownKeys(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var b=function calcItemsPerRow(e){return e>=1750?4:e>=1344?3:e>=1024?2:0},C=function calcGap(e){return e>1280?32:24};t.default=function ListAccount(e){var t=e.list,a=e.group,n=e.RenderItem,r=Object(f.default)().status===p.LOADING&&!t.length,c=Object(i.useState)(C(window.innerWidth)),l=s()(c,2),d=l[0],y=l[1],E=Object(i.useState)(window.innerWidth),h=s()(E,2),g=h[0],O=h[1],v=Object(i.useState)(b(window.innerWidth)),j=s()(v,2),w=j[0],S=j[1],k=!w,D=function getStyles(e){var t=Math.floor(e/w),a=e%w;return{top:"".concat(t*(176+d),"px"),left:"calc(((100% - ".concat(d*(w-1),"px) * ").concat(a," / ").concat(w,") + ").concat(a*d,"px)"),width:"calc((100% - ".concat(d*(w-1),"px) / ").concat(w),position:"absolute"}},N=Math.ceil(t.length/w),A=w?{height:"".concat(Math.max(N*(176+d)-(N>0?d:0),176),"px")}:{};return Object(i.useEffect)((function(){S(b(g)),y(C(g));var e=function handleResize(){return O(window.innerWidth)};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[g]),u.a.createElement("div",{className:"all-information",style:A},r?function renderSkeleton(){return k?u.a.createElement("div",{className:"row-account"},o()(new Array(3)).map((function(e,t){return u.a.createElement(m.a,{key:t,height:"176px",style:{borderRadius:"10px"}})}))):o()(new Array(w)).map((function(e,t){return u.a.createElement(m.a,{key:t,height:"176px",style:_objectSpread(_objectSpread({},D(t)),{},{borderRadius:"10px"})})}))}():k?function renderMobile(){return a.map((function(e,a){return u.a.createElement("div",{className:"row-account",key:a},t.filter((function(t){return t.type===e})).map((function(e){return u.a.createElement(n,{key:e.No,card:e})})))}))}():function renderDesktop(){return t.map((function(e,t){return u.a.createElement(n,{key:e.No,card:e,style:D(t)})}))}())}},z8jw:function(e,t,a){e.exports=a.p+"24017111bcac8f738ba4c5dbf8666439.svg"}}]);