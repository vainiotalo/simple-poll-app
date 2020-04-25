(this["webpackJsonppoll-front"]=this["webpackJsonppoll-front"]||[]).push([[0],{38:function(e,t,n){e.exports=n(71)},43:function(e,t,n){},62:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(32),o=n.n(r),c=n(5),i=(n(43),n(33)),u=n(36),s=n(7),m=n(15),p=n.n(m),d=function(){return p.a.get("/api/polls")},E=function(e){return p.a.post("/api/polls",e)},f=function(e,t){return p.a.put("".concat("/api/polls","/").concat(t),e)},b=function(e){return p.a.delete("".concat("/api/polls","/").concat(e))},h=n(9),v=n(10),g=n(12),O=n(11),y=n(16),w=n(37),j=n(19),S=n.n(j),C=function(e){var t=e.handleSubmit,n=e.handleChange,a=e.handleArray,r=e.inputObject,o=l.a.createElement("span",{role:"img","aria-label":"smiley"},"\ud83d\ude42");return l.a.createElement("form",{onSubmit:t},l.a.createElement("div",{className:"Poll"},l.a.createElement("h1",null,"SIMPLE P",o,"LL APP"),l.a.createElement("h2",null,"Enter your question:"),l.a.createElement("input",{name:"question",value:r.question,onChange:n,placeholder:"Question"}),l.a.createElement("h2",null,"Enter answer options:"),Array.from(r.options).map((function(e,t){return l.a.createElement("div",{key:t},l.a.createElement("input",{name:"options",value:e,placeholder:"Option ".concat(t+1),onChange:function(e){return a(e,t)}}))})),l.a.createElement("br",null),l.a.createElement("button",{type:"submit"},"Create Poll")))},k=function(e){Object(g.a)(n,e);var t=Object(O.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).addQuestion=function(e){e.preventDefault();var t=a.state.options.filter((function(e){return""!==e})),n=t.map((function(e){return 0})),l=Boolean(t.length<2||Object(w.a)(new Set(t)).length<t.length),r={question:a.state.question,options:t,answerCount:n};switch(a.state.question){case"":alert("Please enter a question"),l&&alert("Please enter at least two unique answer options");break;default:l?alert("Please enter at least two unique answer options"):window.confirm("Save this poll?")&&E(r).then((function(e){a.props.onSubmit(e.data),a.setState({question:"",options:["",""]})}))}},a.handleQuestion=function(e){a.setState({question:e.target.value})},a.handleOptions=function(e,t){var n,l=function(n){return S()(n,Object(y.a)({},t,{$set:e.target.value}))};a.setState({options:l(a.state.options)}),t===a.state.options.length-1&&t<=28&&a.setState({options:l((n=a.state.options,S()(n,{$push:[""]})))})},a.state={question:"",options:["",""]},a}return Object(v.a)(n,[{key:"render",value:function(){return l.a.createElement("div",{className:"poll-maker"},l.a.createElement(C,{handleSubmit:this.addQuestion,handleChange:this.handleQuestion,handleArray:this.handleOptions,inputObject:this.state}))}}]),n}(a.Component),q=(n(62),function(e){var t=e.polls,n=e.onDelete;return l.a.createElement("div",{className:"poll-directory"},l.a.createElement("h2",null,"Open polls:"),l.a.createElement("table",null,l.a.createElement("tbody",null,t.map((function(e){return l.a.createElement("tr",{key:e.id+""},l.a.createElement("td",null,l.a.createElement(c.b,{to:"/".concat(e.id)},e.question)),l.a.createElement("td",null,l.a.createElement("button",{onClick:n,id:e.id},"delete")))})))))}),A=(n(68),function(e){Object(g.a)(n,e);var t=Object(O.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(v.a)(n,[{key:"render",value:function(){return l.a.createElement("div",{className:"main",id:"container"},l.a.createElement("div",{id:"pollmaker"},l.a.createElement(k,{onSubmit:this.props.onSubmit})),l.a.createElement("div",{id:"directory"},l.a.createElement(q,{polls:this.props.polls,onDelete:this.props.onDelete})))}}]),n}(a.Component)),N=function(e){Object(g.a)(n,e);var t=Object(O.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).updateValue=function(e){a.setState({selectedOption:e.target.value,selectedIndex:e.target.id})},a.saveAnswer=function(e){e.preventDefault(),a.props.onAnswer(a.props.poll,a.state.selectedIndex),a.setState({redirect:!0})},a.state={selectedOption:"",selectedIndex:0,redirect:!1},a}return Object(v.a)(n,[{key:"render",value:function(){var e=this,t=this.props.poll,n=l.a.createElement("span",{role:"img","aria-label":"smiley"},"\ud83d\ude42");return void 0===t?null:this.state.redirect?l.a.createElement(s.a,{to:"/".concat(t.id,"/r")}):l.a.createElement("div",{className:"poll"},l.a.createElement(c.b,{to:"/"},l.a.createElement("button",null,"back")),l.a.createElement("form",{method:"POST",action:"/api/polls/".concat(t.id),onSubmit:this.saveAnswer},l.a.createElement("h2",null,t.question,n),l.a.createElement("table",null,l.a.createElement("tbody",null,t.options.map((function(t,n){return l.a.createElement("tr",{key:n},l.a.createElement("td",null,l.a.createElement("label",null,l.a.createElement("input",{type:"radio",value:t,id:n,checked:e.state.selectedOption===t,onChange:e.updateValue}),"  ".concat(t))))})))),l.a.createElement("br",null),l.a.createElement("button",{type:"submit"},l.a.createElement("strong",null,"Answer!")),l.a.createElement(c.b,{to:"/".concat(t.id,"/r")},l.a.createElement("button",null,"Results"))))}}]),n}(a.Component),P=(n(69),function(e){var t=e.percentage;return l.a.createElement("div",{className:"filler",style:{width:"".concat(t,"%")}})}),D=function(e){var t=e.percentage;return l.a.createElement("div",{className:"result-bar"},l.a.createElement(P,{percentage:t}))},I=(n(70),function(e){var t=e.poll;if(void 0===t)return null;var n=function(e){return e/t.answerCount.reduce((function(e,t){return e+t}),0)*100},a=l.a.createElement("span",{role:"img","aria-label":"smiley"},"\ud83d\ude42");return l.a.createElement("div",{className:"poll-results"},l.a.createElement(c.b,{to:"/".concat(t.id,"/")},l.a.createElement("button",null,"back")),l.a.createElement("h2",null,t.question,a),l.a.createElement("table",{id:"results"},l.a.createElement("tbody",null,t.options.map((function(e,a){return l.a.createElement("tr",{key:a},l.a.createElement("td",{id:"result"},l.a.createElement("p",{class:"split-para"},l.a.createElement("strong",null,e),l.a.createElement("span",null,"".concat(t.answerCount[a]," votes"))),l.a.createElement(D,{percentage:n(t.answerCount[a])})),l.a.createElement("td",{id:"percentage"},"".concat(Math.round(n(t.answerCount[a])),"%")))})))))}),Q=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],r=t[1];Object(a.useEffect)((function(){d().then((function(e){r(e.data)}))}),[]);var o=Object(s.g)("/:id"),c=o?n.find((function(e){return e.id===o.params.id})):null;return l.a.createElement(s.d,null,l.a.createElement(s.b,{path:"/:id/r"},l.a.createElement(I,{poll:c})),l.a.createElement(s.b,{path:"/:id"},l.a.createElement(N,{poll:c,onAnswer:function(e,t){var a=e.answerCount;a[Number(t)]+=1;var l=Object(i.a)({},e,{answerCount:a});f(l,e.id).then((function(t){r(n.map((function(t){return t!==e?t:l})))}))}})),l.a.createElement(s.b,{path:"/"},l.a.createElement(A,{polls:n,onSubmit:function(e){r(n.concat(e))},onDelete:function(e){var t=JSON.stringify([e.target.id]);t=t.substring(2,t.length-2),window.confirm("Are you sure you want to delete this poll?")&&b(t).then((function(e){r(n.filter((function(e){return e.id!==t})))}))}})),l.a.createElement(s.b,{render:function(){return l.a.createElement(s.a,{to:"/"})}}))};o.a.render(l.a.createElement(c.a,null,l.a.createElement(Q,null)),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.ad1ef2cb.chunk.js.map