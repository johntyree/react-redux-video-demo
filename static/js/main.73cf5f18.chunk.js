(this["webpackJsonpreact-redux-video-demo"]=this["webpackJsonpreact-redux-video-demo"]||[]).push([[0],{27:function(e,t,n){e.exports=n(57)},56:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),i=n.n(c),u=n(2),o=n(4),l=n(24),s=n(7),m=n(8),d=n(10),p=n(9),v=n(11),f=n(16),E=n.n(f),h=n(25),b=n(26),y=n.n(b).a.create({baseURL:"https://www.googleapis.com/youtube/v3",params:{part:"snippet",maxResults:5,key:"AIzaSyDUQVUYbByIN1P_XwfIgjRo9GX0NHGy40E"}}),g=function(e){return{type:"VIDEOS_UPDATED",payload:e}},O=function(e){return{type:"VIDEO_SELECTED",payload:e}},j=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(d.a)(this,Object(p.a)(t).call(this,e))).focus=function(){n.searchInput.current.focus(),n.searchInput.current.select()},n.submit=function(){n.focus(),n.props.submitSearch(n.props.term)},n.onInputChange=function(e){n.props.updateTerm(e.target.value)},n.onFormSubmit=function(e){e&&e.preventDefault(),n.submit()},n.searchInput=r.a.createRef(),n}return Object(v.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"search-bar ui segment"},r.a.createElement("form",{onSubmit:this.onFormSubmit,className:"ui form"},r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"Video Search"),r.a.createElement("input",{ref:this.searchInput,type:"text",value:this.props.term,onChange:this.onInputChange}))))}}]),t}(r.a.Component),N=Object(u.b)((function(e){return{term:e.term}}),{submitSearch:function(e){return function(){var t=Object(h.a)(E.a.mark((function t(n){var a;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.get("/search",{params:{q:e}});case 2:a=t.sent,n(g(a.data.items)),n(O(a.data.items[0]));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateTerm:function(e){return{type:"TERM_UPDATED",payload:e}}},null,{forwardRef:!0})(j),D=(n(56),Object(u.b)(null,{selectVideo:O})((function(e){var t=e.video,n=e.selectVideo;return r.a.createElement("div",{onClick:function(){return n(t)},className:"video-item item"},r.a.createElement("img",{className:"ui image",src:t.snippet.thumbnails.medium.url,alt:t.snippet.title}),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"header"},t.snippet.title)))}))),I=Object(u.b)((function(e){return{videos:e.videos}}))((function(e){var t=e.videos.map((function(e){return r.a.createElement(D,{key:e.id.videoId,video:e})}));return r.a.createElement("div",{className:"ui relaxed divided list"},t)})),S=Object(u.b)((function(e){return{video:e.selectedVideo}}))((function(e){var t=e.video;if(!t)return r.a.createElement("div",null,"Loading ...");var n="https://youtube.com/embed/"+t.id.videoId;return r.a.createElement("div",null,r.a.createElement("div",{className:"ui embed"},r.a.createElement("iframe",{title:"Video Player",src:n})),r.a.createElement("div",{className:"ui segment"},r.a.createElement("h4",{className:"ui header"},t.snippet.title),r.a.createElement("p",null,t.snippet.description)))})),w=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(d.a)(this,Object(p.a)(t).call(this,e))).searchBar=r.a.createRef(),n}return Object(v.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.searchBar.current.submit()}},{key:"render",value:function(){return r.a.createElement("div",{className:"ui container"},r.a.createElement(N,{ref:this.searchBar}),r.a.createElement("div",{className:"ui grid"},r.a.createElement("div",{className:"ui row"},r.a.createElement("div",{className:"eleven wide column"},r.a.createElement(S,null)),r.a.createElement("div",{className:"five wide column"},r.a.createElement(I,null)))))}}]),t}(r.a.Component),V=Object(o.c)({selectedVideo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;return"VIDEO_SELECTED"===t.type?t.payload:e},term:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;return"TERM_UPDATED"===t.type?t.payload:e},videos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"VIDEOS_UPDATED"===t.type?t.payload:e}}),T=0,k=Object(o.a)(l.a,(function(e){var t=e.getState;return function(e){return function(n){var a=T;console.group(n.type,a),T+=1;var r=e(n);return console.log("END  ",a,t()),console.groupEnd(),r}}})),x=Object(o.d)(V,{term:"bananas"},k);i.a.render(r.a.createElement(u.a,{store:x},r.a.createElement(w,null)),document.querySelector("#root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.73cf5f18.chunk.js.map