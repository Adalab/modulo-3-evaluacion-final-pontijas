(this["webpackJsonpmy-react-project"]=this["webpackJsonpmy-react-project"]||[]).push([[0],{19:function(e,a,t){e.exports=t.p+"static/media/logo.75509f2e.png"},20:function(e,a,t){e.exports=t(31)},25:function(e,a,t){},31:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(16),l=t.n(r),i=(t(25),t(13)),o=t(5),m=t(6),s=(t(8),function(e){return c.a.createElement(m.b,{to:"/character/".concat(e.character.id),className:"card__link"},c.a.createElement("section",{className:"card__container"},c.a.createElement("img",{src:e.character.image,alt:"Imagen de ".concat(e.character.name),title:"Imagen de ".concat(e.character.name),className:"card__img"}),c.a.createElement("section",{className:"card__info"},c.a.createElement("h4",null,e.character.name),c.a.createElement("p",null,e.character.species))))}),u=function(e){var a=e.characters.map((function(e){return c.a.createElement("li",{key:e.id,className:"list__item"},c.a.createElement(s,{character:e}))}));return c.a.createElement("div",null,c.a.createElement("ul",{className:"list__container"},a))},d=function(e){return c.a.createElement("form",{className:"filter__container"},c.a.createElement("label",{className:"filter__label"},"Filter by name"),c.a.createElement("input",{type:"text",className:"filter__input",placeholder:"Character name",onChange:function(a){e.handleFilter({value:a.target.value,key:"name"})}}))},h=function(e){return console.log("recibo esto en Modal",e.character),c.a.createElement("div",{className:"modal__container"},c.a.createElement("div",{className:"modal__header"},c.a.createElement("h2",{className:"modal__title"},"Name"),c.a.createElement(m.b,{to:"/",className:"modal__link"},"Go Back")),c.a.createElement("section",{className:"modal__info"},c.a.createElement("img",{src:"https://via.placeholder.com/200",alt:"Character",title:"Character image"}),c.a.createElement("ul",null,c.a.createElement("li",{className:"modal__list-item"},"specie: "),c.a.createElement("li",{className:"modal__list-item"},"origin: "),c.a.createElement("li",{className:"modal__list-item"},"status: "),c.a.createElement("li",{className:"modal__list-item"},"episodes: "))))},_=function(){return fetch("https://rickandmortyapi.com/api/character").then((function(e){return e.json()})).then((function(e){return console.log("data",e),e.results.map((function(e){return{id:e.id,name:e.name,image:e.image,species:e.species,origin:e.origin.name,status:e.status,episodes:e.episode.length}}))}))},f=t(19),p=t.n(f),E=function(){var e=Object(n.useState)([]),a=Object(i.a)(e,2),t=a[0],r=a[1],l=Object(n.useState)(""),m=Object(i.a)(l,2),s=m[0],f=m[1];Object(n.useEffect)((function(){_().then((function(e){return r(e)}))}),[]);var E=t.filter((function(e){return e.name.toUpperCase().includes(s.toUpperCase())}));return c.a.createElement("div",{className:"App__container"},c.a.createElement("header",{className:"header__container",id:"header"},c.a.createElement("img",{src:p.a,title:"Rick y Morty",alt:"Rick y Morty",className:"header__logo"})),c.a.createElement("main",{className:"main__container"},c.a.createElement(d,{handleFilter:function(e){f(e.value)}}),c.a.createElement(u,{characters:E}),c.a.createElement(o.c,null,c.a.createElement(o.a,{path:"/character/:id",render:function(e){var a=e.match.params.id,n=t.find((function(e){return e.id===parseInt(a)}));return c.a.createElement(h,{character:n})}}))),c.a.createElement("footer",{className:"footer__container"},c.a.createElement("a",{className:"footer__btn",href:"#header"},"go to top")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(m.a,null,c.a.createElement(E,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,a,t){}},[[20,1,2]]]);
//# sourceMappingURL=main.e61c20ff.chunk.js.map