(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{18:function(e,t,n){e.exports=n(40)},40:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(17),c=n.n(o),u=n(2),s=n(4),l=function(e){var t=e.searchName,n=e.handler;return r.a.createElement("p",null,"Filter: ",r.a.createElement("input",{value:t,onChange:n}))},m=(n(7),n(3)),i=n.n(m),d=function(e){console.log("Uploading ".concat(e.name,"...")),i.a.post("".concat("/api","/persons"),e).then((function(e){return console.log("Uploaded ".concat(e.data.name))}))},b=function(e){return console.log("Deleting ".concat(e,"...")),i.a.delete("".concat("/api","/persons/").concat(e))},f=function(){return i.a.get("".concat("/api","/persons")).then((function(e){return e.data}))},p=function(e){var t=e.states,n=e.stateSetters,a=e.newTextHandler,o=t.newName,c=t.newNumber,u=t.persons,s=n.setNewName,l=n.setNewNumber,m=n.setPersons,i=n.setStatus,b=a("Name",s),f=a("Number",l);return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t={name:o,number:c},n=u.findIndex((function(e){return e.name===t.name})),a=u[n];console.log(a),a?(window.confirm("".concat(t.name," already exists in phonebook, would you like to update number from \n            ").concat(a.number," to ").concat(t.number,"? "))&&window.alert("FUNCTION NOT IMPLEMENTED"),s(""),l("")):""===t.name?window.alert("Name cannot be empty"):(m(u.concat(t)),d(t),i({statusText:"Added ".concat(t.name),statusType:"success"}),s(""),l(""))}},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:o,onChange:b}),r.a.createElement("div",null,"number: ",r.a.createElement("input",{value:c,onChange:f}))),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add"))),r.a.createElement("div",null,"debug: ",o))},g=function(e){var t=e.name,n=e.states,a=e.stateSetters,o=n.persons,c=a.setPersons;return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{value:t,onClick:function(e){var t=e.target;if(window.confirm("Confirm delete ".concat(t.value,"?"))){var n=Object(u.a)(o),a=n.splice(n.findIndex((function(e){return e.name===t.value})),1)[0].id;b(a).then((function(e){console.log("Deleted ".concat(e.name)),c(n)}))}}},"delete"))},E={success:{color:"green",background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10},failure:{color:"red",background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10}},h=function(e){return E[e]},v=function(e){var t=e.status,n=e.setStatus,a=t.statusText,o=t.statusType;return a?(setTimeout((function(){return n({})}),5e3),r.a.createElement("div",{style:h(o)},a)):null},N=function(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(""),m=Object(s.a)(c,2),i=m[0],d=m[1],b=Object(a.useState)(""),E=Object(s.a)(b,2),h=E[0],N=E[1],w=Object(a.useState)([]),S=Object(s.a)(w,2),O=S[0],j=S[1],y=Object(a.useState)({}),k=Object(s.a)(y,2),T=k[0],C=k[1],x={newName:n,newNumber:i,searchName:h,persons:O,status:T},U={setNewName:o,setNewNumber:d,setSearchName:N,setPersons:j,setStatus:C},I=function(e,t){return function(n){var a=n.target.value;console.log(e," ",a),t(a)}},P=I("Search Name",N);Object(a.useEffect)((function(){f().then((function(e){return j(e)}))}),[T]);var D=Object(u.a)(O);if(""!==h){var F=h.toUpperCase();console.log("Searching term: ",F),console.log(O[0].name.toUpperCase().startsWith(F)),D=D.filter((function(e){return e.name.toUpperCase().startsWith(F)}))}return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(v,{status:T,setStatus:C}),r.a.createElement(l,{searchName:h,handler:P}),r.a.createElement("h2",null,"Add a new"),r.a.createElement(p,{states:x,stateSetters:U,newTextHandler:I}),r.a.createElement("h2",null,"Numbers"),D.map((function(e){return r.a.createElement("div",{key:e.name},e.name," ",e.number,r.a.createElement(g,{name:e.name,states:x,stateSetters:U}),r.a.createElement("br",null))})))};c.a.render(r.a.createElement(N,null),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.5bdc58e7.chunk.js.map