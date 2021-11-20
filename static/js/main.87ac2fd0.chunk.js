(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{12:function(e,t,n){e.exports={container:"Filter_container__oISjJ",title:"Filter_title__mtLuE",input:"Filter_input__2DoVp"}},18:function(e,t,n){e.exports={list:"ContactList_list__2T7aG"}},27:function(e,t,n){},28:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(10),i=n.n(r),s=(n(27),n(28),n(16)),o=n(3),u=n.n(o),l=n(40),b=n(7),m=n.n(b),d=n(5),j=Object(d.b)("phonebook/add"),p=Object(d.b)("phonebook/delete"),O=Object(d.b)("phonebook/handleFilter"),h=n(4),f=function(e){return e.contacts},_=function(e){return e.filter},x=function(e){var t=f(e);console.log(t);var n=_(e),a=n.toLowerCase();return n.length>0?t.filter((function(e){return e.name.toLowerCase().includes(a)})):t},v=n(1);function N(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),i=Object(s.a)(r,2),o=i[0],u=i[1],b=Object(h.c)(f),d=Object(h.b)(),p=Object(l.a)(),O=Object(l.a)(),_=function(e){var t=e.target,n=t.name,a=t.value;switch(n){case"name":c(a);break;case"number":u(a)}},x=function(){c(""),u("")};return Object(v.jsxs)("form",{className:m.a.form,onSubmit:function(e){e.preventDefault();var t={name:n,number:o,id:Object(l.a)()};b.find((function(e){return e.name===t.name}))?alert("".concat(t.name," is already in contacts")):d(j(t)),x()},children:[Object(v.jsxs)("label",{className:m.a.label,htmlFor:p,children:["Name",Object(v.jsx)("input",{className:m.a.input,type:"text",name:"name",id:p,value:n,onChange:_,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(v.jsxs)("label",{className:m.a.label,htmlFor:O,children:["Number",Object(v.jsx)("input",{className:m.a.input,type:"tel",name:"number",id:O,value:o,onChange:_,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(v.jsx)("button",{className:m.a.button,type:"submit",children:"Add contact"})]})}N.PropType={onSubmit:u.a.func.isRequired};var g=n(12),C=n.n(g);function y(){var e=Object(h.b)(),t=Object(h.c)(_);return Object(v.jsxs)("div",{className:C.a.container,children:[Object(v.jsx)("h3",{className:C.a.title,children:"Find contacts by name:"}),Object(v.jsx)("input",{type:"text",name:"filter",value:t,onChange:function(t){return e(O(t.target.value))},className:C.a.input})]})}y.PropsType={value:u.a.string,onChange:u.a.func.isRequired};var k=n(18),q=n.n(k),F=n(9),A=n.n(F);function R(e){var t=e.id,n=e.name,a=e.number,c=Object(h.b)();return Object(v.jsxs)("li",{className:A.a.list,children:[Object(v.jsxs)("p",{className:A.a.item,children:[n,":",Object(v.jsx)("span",{className:A.a.span,children:a})]}),Object(v.jsx)("button",{type:"submit",onClick:function(){return c(p(t))},className:A.a.button,children:"Delete"})]})}function w(){var e=Object(h.c)(x);return Object(v.jsx)("ul",{className:q.a.list,children:e.map((function(e){var t=e.id,n=e.name,a=e.number;return Object(v.jsx)(R,{id:t,name:n,number:a},t)}))})}function L(){return Object(v.jsx)("div",{className:"App",children:Object(v.jsxs)("div",{className:"container",children:[Object(v.jsx)("h2",{className:"title",children:"Phonebook"}),Object(v.jsx)(N,{}),Object(v.jsxs)("div",{children:[Object(v.jsx)("h2",{className:"title",children:"Contacts"}),Object(v.jsx)(y,{}),Object(v.jsx)(w,{})]})]})})}R.PropsTypes={id:u.a.number.isRequired,name:u.a.string.isRequired,number:u.a.number.isRequired,onDeleteContact:u.a.func.isRequired},w.PropsType={id:u.a.number.isRequired,name:u.a.string.isRequired,number:u.a.number.isRequired};var S,T=n(2),z=n(13),I=n(22),E=Object(d.c)([{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],(S={},Object(z.a)(S,j,(function(e,t){var n=t.payload;return[].concat(Object(I.a)(e),[n])})),Object(z.a)(S,p,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),S)),P=Object(d.c)("",Object(z.a)({},O,(function(e,t){return t.payload}))),D=n(19),J=n.n(D),B=n(6),M=n(20),Z=n.n(M),G=Object(T.b)({contacts:E,filter:P}),H={key:"contacts",storage:Z.a},V=Object(B.g)(H,G),K=Object(d.a)({reducer:V,middleware:function(e){return e({serializableCheck:{ignoredActions:[B.a,B.f,B.b,B.c,B.d,B.e]}}).concat(J.a)}}),Q=Object(B.h)(K),W=n(21);i.a.render(Object(v.jsx)(c.a.StrictMode,{children:Object(v.jsx)(W.a,{persistor:Q,loading:null,children:Object(v.jsx)(h.a,{store:K,children:Object(v.jsx)(L,{})})})}),document.getElementById("root"))},7:function(e,t,n){e.exports={form:"Form_form__2TM1N",label:"Form_label__15SAE",input:"Form_input__2ESfd",button:"Form_button__243jh"}},9:function(e,t,n){e.exports={button:"ContactListItem_button__22wLV",list:"ContactListItem_list__W6jNB",item:"ContactListItem_item__2THQn",span:"ContactListItem_span__3G7oz"}}},[[38,1,2]]]);
//# sourceMappingURL=main.87ac2fd0.chunk.js.map