(this.webpackJsonpnetflix=this.webpackJsonpnetflix||[]).push([[0],{37:function(e,t,a){e.exports=a(90)},69:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){},89:function(e,t,a){},90:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(29),o=a.n(c),i=a(14),l=a(15),s=a(18),u=a(17),m=a(30),h=a.n(m).a.initializeApp({apiKey:"AIzaSyBYeD_eYdJ2TlD0zxBMEZzAnxfCCYYPKFA",authDomain:"netflix-clone-3b88e.firebaseapp.com",databaseURL:"https://netflix-clone-3b88e.firebaseio.com",projectId:"netflix-clone-3b88e",storageBucket:"netflix-clone-3b88e.appspot.com",messagingSenderId:"695577069308",appId:"1:695577069308:web:2d3a6fd5a6875a9f5bb979",measurementId:"G-CKK37M7HE0"}),d=a(10),f=a.n(d),p=a(16),v=a(9),g=a(31),b=a.n(g).a.create({baseURL:"https://api.themoviedb.org/3"}),E=(a(69),a(32)),w=a(35),y=a.n(w);var k=function(e){var t=e.title,a=e.fetchUrl,c=e.isLargeRow,o=Object(n.useState)([]),i=Object(v.a)(o,2),l=i[0],s=i[1],u=Object(n.useState)(""),m=Object(v.a)(u,2),h=m[0],d=m[1];return Object(n.useEffect)((function(){function e(){return(e=Object(p.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.get(a);case 2:return t=e.sent,s(t.data.results),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[a]),r.a.createElement("div",{className:"row"},r.a.createElement("h1",null,t),r.a.createElement("div",{className:"row-posters"},l.map((function(e){return r.a.createElement("img",{onClick:function(){return function(e){h?d(""):y()((null===e||void 0===e?void 0:e.name)||"").then((function(e){var t=new URLSearchParams(new URL(e).search);d(t.get("v"))}))}(e)},key:e.id,className:"row-poster ".concat(c&&"row-posterLarge"),src:"".concat("https://image.tmdb.org/t/p/original/").concat(c?e.poster_path:e.backdrop_path),alt:e.name})}))),h&&r.a.createElement(E.a,{videoId:h,opts:{height:"300",width:"100%",playerVars:{autoplay:1}}}))},O="a33ac2c06a287e8ba5259a9f4d39d70f",N={fetchTrending:"/trending/all/week?api_key=".concat(O,"&language=en-US"),fetchNetflixOriginals:"/discover/tv?api_key=".concat(O,"&with_networks=213"),fetchTopRated:"/movie/top_rated?api_key=".concat(O,"&language=en-US"),fetchActionMovies:"/discover/movie?api_key=".concat(O,"&with_genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat(O,"&with_genres=35"),fetchHorrorMovies:"/discover/movie?api_key=".concat(O,"&with_genres=27"),fetchRomanceMovies:"/discover/movie?api_key=".concat(O,"&with_genres=10749"),fetchDocumentaries:"/discover/movie?api_key=".concat(O,"&with_genres=99")};a(85),a(86);var j=function(){var e=Object(n.useState)(!1),t=Object(v.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){window.addEventListener("scroll",(function(){window.scrollY>100?c(!0):c(!1)}))}),[]),r.a.createElement("div",{className:"nav ".concat(a&&"nav-black")},r.a.createElement("img",{className:"logo",src:"https://pmcvariety.files.wordpress.com/2020/05/netflix-logo.png?w=681&h=383&crop=1",alt:"netflix  logo"}),r.a.createElement("button",{className:"butt",onClick:function(){h.auth().signOut()}},"Log Out"))};a(87);var _=function(){var e=Object(n.useState)([]),t=Object(v.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){function e(){return(e=Object(p.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.get(N.fetchHorrorMovies);case 2:return t=e.sent,c(t.data.results[Math.floor(Math.random()*t.data.results.length-1)]),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),console.log(a),r.a.createElement("header",{className:"banner",style:{backgroundSize:"cover",backgroundImage:"url(https://image.tmdb.org/t/p/original/".concat(null===a||void 0===a?void 0:a.backdrop_path,")"),backgroundPosition:"center"}},r.a.createElement("div",{className:"banner-contents"},r.a.createElement("h1",{className:"banner-title"},(null===a||void 0===a?void 0:a.title)||(null===a||void 0===a?void 0:a.name)||(null===a||void 0===a?void 0:a.original_name)),r.a.createElement("div",null,r.a.createElement("button",{className:"banner-buttons"},"play"),r.a.createElement("button",{className:"banner-buttons"},"My List")),r.a.createElement("h1",{className:"banner-des"},null===a||void 0===a?void 0:a.overview),r.a.createElement("div",{class:"banner--fadeBottom"})))};var x=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(j,null),r.a.createElement(_,null),r.a.createElement(k,{title:"NETFLIX ORIGINALS",fetchUrl:N.fetchNetflixOriginals,isLargeRow:!0}),r.a.createElement(k,{title:"Trending Now",fetchUrl:N.fetchTrending}),r.a.createElement(k,{title:"Top Rated",fetchUrl:N.fetchTopRated}),r.a.createElement(k,{title:"Action Movies",fetchUrl:N.fetchActionMovies}),r.a.createElement(k,{title:"Comedy Movies",fetchUrl:N.fetchComedyMovies}),r.a.createElement(k,{title:"Horror Movies",fetchUrl:N.fetchHorrorMovies}),r.a.createElement(k,{title:"Romance Movies",fetchUrl:N.fetchRomanceMovies}),r.a.createElement(k,{title:"Documentaries",fetchUrl:N.fetchDocumentaries}))},C=(a(88),a(36)),M=a(11),S=(a(89),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={email:"",password:""},n.handleChange=n.handleChange.bind(Object(M.a)(n)),n.login=n.login.bind(Object(M.a)(n)),n}return Object(l.a)(a,[{key:"login",value:function(e){e.preventDefault(),h.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))}},{key:"handleChange",value:function(e){this.setState(Object(C.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){return r.a.createElement("div",{className:"form"},r.a.createElement("form",null,r.a.createElement("h1",{style:{color:"white"}},"Sign In"),r.a.createElement("div",{className:"input"},r.a.createElement("input",{className:"form-1",name:"email",type:"email",required:!0,placeholder:"Email or phone number",onChange:this.handleChange,value:this.state.email})),r.a.createElement("div",{className:"input"},r.a.createElement("input",{className:"form-1",name:"password",type:"password",required:!0,placeholder:"Password",onChange:this.handleChange,value:this.state.password})),r.a.createElement("div",{className:"input"},r.a.createElement("button",{className:"but",onClick:this.login},"Sign In"))))}}]),a}(r.a.Component));var U=function(){return r.a.createElement("div",{className:"a"},r.a.createElement("img",{className:"logo",src:"https://pmcvariety.files.wordpress.com/2020/05/netflix-logo.png?w=681&h=383&crop=1",alt:"netflix  logo"}),r.a.createElement(S,null))},L=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={user:{}},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.authListener()}},{key:"authListener",value:function(){var e=this;h.auth().onAuthStateChanged((function(t){t?e.setState({user:t}):e.setState({user:null})}))}},{key:"render",value:function(){return r.a.createElement("div",null,this.state.user?r.a.createElement(x,null):r.a.createElement(U,null))}}]),a}(r.a.Component);o.a.render(r.a.createElement(L,null),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.c0221639.chunk.js.map