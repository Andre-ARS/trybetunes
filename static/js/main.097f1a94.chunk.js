(this.webpackJsonptrybetunes=this.webpackJsonptrybetunes||[]).push([[0],{19:function(e,t,a){e.exports={profile_page:"style_profile_page__3zeWp",profile_container:"style_profile_container__79MHG",profile_info:"style_profile_info__UBONJ",img_wrapper:"style_img_wrapper__MXTC8",user_icon:"style_user_icon__3GBNm",infos:"style_infos__AsIRU"}},21:function(e,t,a){e.exports={container:"style_container__3TbXE",header__user:"style_header__user__33ewe",header__navigation:"style_header__navigation__1C6QO",select__page:"style_select__page__kfR-_",page__change:"style_page__change__23ejg",left__square:"style_left__square__2eGOG",right__square:"style_right__square__1-Qff"}},24:function(e,t,a){e.exports={container:"style_container__2ZmMH",login__form:"style_login__form__2-I-8",input:"style_input__jh8re",person:"style_person__123ka",loading:"style_loading__3FG6K"}},25:function(e,t,a){e.exports={search__page:"style_search__page__josSg",search__bar:"style_search__bar__3Apq-",result__text:"style_result__text__2mUvt",album__warapper:"style_album__warapper__11RmW",track__list:"style_track__list__27Rr7"}},27:function(e,t,a){e.exports={album__page:"style_album__page__HMTs8",album__container:"style_album__container__1ocb2",album__info:"style_album__info__1fnQy",track__list:"style_track__list__JgJUt"}},28:function(e,t,a){e.exports={profile_page:"style_profile_page__1zu-c",form_container:"style_form_container__3kDxc",form:"style_form__24Yba",img_selector:"style_img_selector__bGlSs"}},29:function(e,t,a){e.exports={card__container:"style_card__container__3QFi7",play:"style_play__P4W5V",favorite__check:"style_favorite__check__Febzl"}},30:function(e,t,a){e.exports={fav_page:"style_fav_page__2j5hh",favorite_container:"style_favorite_container__2RTIL",favorite__tracks:"style_favorite__tracks__3zcIs"}},35:function(e,t,a){e.exports={loading:"style_loading__q6NqH"}},44:function(e,t,a){},46:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),s=a(34),c=a.n(s),i=(a(44),a(20)),o=a(5),l=a(6),u=a(8),d=a(7),h=a(17),j=a(11),m=a(4),f=a.n(m),b=a(10),p=a(3),_=a(18),v=a(13),g=a(9),O=a.n(g),x=(a(46),a(1)),y=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).timeChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(_.a)({},a,r),(function(){var e=document.querySelector("#aud");e.currentTime=e.duration*r/100}))},n.playMusic=function(){var e=document.querySelector("#aud");(0,n.props.setPlay)();var t=Object(p.a)(n),a=t.props.play,r=t.state.volume,s=a?e.play():e.pause();return e.volume=r/100,s},n.getTime=function(e){var t=Math.floor(e/60),a=Math.floor(e%60),n=a<10?"0".concat(a):a;return"".concat(t,":").concat(n)},n.getICon=function(){var e=n.state,t=e.volume;return e.muted?Object(x.jsx)(v.e,{}):"0"===t?Object(x.jsx)(v.f,{}):t<60?Object(x.jsx)(v.d,{}):Object(x.jsx)(v.g,{})},n.switchMusic=function(e,t){var a=Object(p.a)(n),r=a.props.setPlay,s=a.state.progress,c=document.querySelector("#aud");"prev"===t&&s>10?c.currentTime=0:(e(c),r(!1))},n.progressUpdate=function(e){var t=e.target,a=t.currentTime,r=t.duration;n.setState({progress:a/r*100,currentTime:n.getTime(a)})},n.setMute=function(){var e=document.querySelector("#aud"),t=n.state.muted;e.muted=!t,n.setState({muted:!t})},n.volumeChange=function(e){var t=e.target.value,a=n.state.muted,r=document.querySelector("#aud");r.muted=a,a||n.setState({volume:t},(function(){r.volume=t/100}))},n.formatTitle=function(e){var t=e.indexOf("("),a=e.slice(0,t),n=-1!==t?a:e;return n.length>16?n.slice(0,13).concat("..."):n},n.formatName=function(e){return e.length>15?e.slice(0,12).concat("..."):e},n.state={progress:0,currentTime:"0:00",volume:60,muted:!1},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state,t=e.progress,a=e.currentTime,n=e.volume,r=e.muted,s=this.props,c=s.trackList,i=s.isChecked,o=s.track,l=s.event,u=s.nextSong,d=s.prevSong,h=s.play,j=this.timeChange,m=this.playMusic,f=this.switchMusic,b=this.progressUpdate,p=this.getICon,_=this.volumeChange,g=this.setMute,y=this.formatTitle,k=this.formatName;return Object(x.jsxs)("div",{className:O.a.player,children:[c&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("div",{className:O.a.music_info,children:[Object(x.jsx)("img",{src:c[o].artworkUrl100,alt:"",className:O.a.album_img}),Object(x.jsxs)("div",{className:O.a.names,children:[Object(x.jsx)("p",{className:O.a.track,title:c[o].trackName,children:y(c[o].trackName)}),Object(x.jsx)("p",{className:O.a.artist,title:c[o].artistName,children:k(c[o].artistName)})]}),Object(x.jsxs)("label",{htmlFor:"fav",className:O.a.favorite__check,children:[Object(x.jsx)("input",{type:"checkbox",id:"fav",name:o,checked:i,onChange:l}),i?Object(x.jsx)(v.i,{}):Object(x.jsx)(v.h,{})]})," "]}),Object(x.jsxs)("audio",{"data-testid":"audio-component",id:"aud",className:O.a.audio,src:c[o].previewUrl,controls:!0,onEnded:function(){return f(u)},onTimeUpdate:b,children:[Object(x.jsx)("track",{kind:"captions"}),"O seu navegador n\xe3o suporta o elemento","  ",Object(x.jsx)("code",{children:"audio"}),"."]})]}),Object(x.jsxs)("section",{className:O.a.progress_container,children:[Object(x.jsxs)("div",{className:O.a.player_controls,children:[Object(x.jsx)("button",{type:"button",className:O.a.controls,onClick:function(){return f(d,"prev")},children:Object(x.jsx)(v.c,{})}),Object(x.jsx)("button",{type:"button",className:"".concat(O.a.play," ").concat(O.a.controls),onClick:m,children:h?Object(x.jsx)(v.a,{}):Object(x.jsx)(v.j,{})}),Object(x.jsx)("button",{type:"button",name:"next",className:O.a.controls,onClick:function(){return f(u)},children:Object(x.jsx)(v.b,{})})]}),Object(x.jsxs)("div",{className:O.a.progress,children:[Object(x.jsx)("p",{className:O.a.current_time,children:a}),Object(x.jsxs)("div",{className:O.a.progress_bar,children:[Object(x.jsx)("input",{type:"range",name:"progress",max:"100",value:t,onInput:j}),Object(x.jsx)("div",{className:O.a.thumb,style:{width:"".concat(t,"%")}})]}),Object(x.jsx)("p",{className:O.a.total_time,children:"0:29"})]})]}),Object(x.jsxs)("div",{className:O.a.volume_controls,children:[Object(x.jsx)("button",{type:"button",onClick:g,className:O.a.volume_btn,children:p()}),Object(x.jsxs)("div",{className:O.a.volume_bar,children:[Object(x.jsx)("div",{className:O.a.thumb,style:{width:"".concat(r?"0":n,"%")}}),Object(x.jsx)("input",{type:"range",onInput:_,value:r?"0":n})]})]})]})}}]),a}(n.Component),k=a(23),S=a(35),N=a.n(S),C=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.status,a=e.redirect;return Object(x.jsx)("section",{className:N.a.loading,children:t?Object(x.jsx)(j.a,{to:a}):Object(x.jsx)("p",{children:"Carregando..."})})}}]),a}(n.Component),I=C,w="user",F=function(e){return localStorage.setItem(w,JSON.stringify(e))},U=function(e){return function(t){setTimeout((function(){t(e)}),1500)}},P=function(){return new Promise((function(e){var t=JSON.parse(localStorage.getItem(w));null===t&&(t={}),U(t)(e)}))},q=function(e){return new Promise((function(t){F(Object(i.a)(Object(i.a)({},{name:"",email:"",image:"",description:""}),e)),U("OK")(t)}))},M=function(e){return new Promise((function(t){F(Object(i.a)({},e)),U("OK")(t)}))},A=a(21),T=a.n(A),D=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={userName:"",image:""},n.namefetch=n.namefetch.bind(Object(p.a)(n)),n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.namefetch()}},{key:"namefetch",value:function(){var e=Object(b.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P();case 2:t=e.sent,this.setState({userName:t.name,image:t.image});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.userName,a=e.image;return Object(x.jsxs)("header",{"data-testid":"header-component",className:T.a.container,children:[Object(x.jsxs)("nav",{className:T.a.header__navigation,children:[Object(x.jsx)(h.b,{"data-testid":"link-to-search",to:"/search",children:"Search"}),Object(x.jsx)(h.b,{"data-testid":"link-to-favorites",to:"/favorites",children:"Favorites"}),Object(x.jsx)(h.b,{"data-testid":"link-to-profile",to:"/profile",children:"Profile"})]}),Object(x.jsxs)("div",{className:T.a.select__page,children:[Object(x.jsx)("div",{className:T.a.left__square}),Object(x.jsx)("div",{className:T.a.page__change}),Object(x.jsx)("div",{className:T.a.right__square})]}),t?Object(x.jsxs)("div",{className:T.a.header__user,children:[a?Object(x.jsx)("img",{src:a,alt:""}):Object(x.jsx)("p",{children:Object(x.jsx)(k.a,{})}),Object(x.jsx)("span",{"data-testid":"header-user-name",children:t})]}):Object(x.jsx)(I,{})]})}}]),a}(n.Component),R=D,J=a(29),L=a.n(J),V=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).charCheck=function(e){return e&&e.length>30?e.slice(0,27).concat("..."):e},n.getFav=function(){var e=n.props,t=e.favSongs,a=e.id;t.some((function(e){return e.trackId===a}))?n.setState({isChecked:!0}):n.setState({isChecked:!1})},n.state={isChecked:!1},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.getFav()}},{key:"render",value:function(){var e=this.props,t=e.name,a=e.id,n=e.event,r=e.index,s=e.img,c=e.selectMusic,i=e.track,o=this.state.isChecked,l=this.charCheck,u=i===r?"#2CB67D":"",d=i===r?"#222225":"";return Object(x.jsxs)("div",{style:{backgroundColor:d},className:L.a.card__container,children:[s&&Object(x.jsx)("img",{src:s,alt:""}),Object(x.jsx)("button",{type:"button",className:L.a.play,onClick:function(){return c(r)},children:Object(x.jsx)(v.l,{})}),Object(x.jsx)("p",{title:t,style:{color:u},children:l(t)}),Object(x.jsxs)("label",{htmlFor:a,className:L.a.favorite__check,children:[Object(x.jsx)("input",{type:"checkbox",id:a,"data-testid":"checkbox-music-".concat(a),onChange:n,name:r,checked:o}),o?Object(x.jsx)(v.i,{}):Object(x.jsx)(v.h,{})]})]},a)}}]),a}(n.Component),G=a(39),W="favorite_songs";JSON.parse(localStorage.getItem(W))||localStorage.setItem(W,JSON.stringify([]));var E=function(){return JSON.parse(localStorage.getItem(W))},H=function(e){return localStorage.setItem(W,JSON.stringify(e))},K=function(e){return function(t){setTimeout((function(){t(e)}),500)}},z=function(){return new Promise((function(e){var t=E();K(t)(e)}))},B=function(e){return new Promise((function(t){if(e){var a=E();H([].concat(Object(G.a)(a),[e]))}K("OK")(t)}))},Q=function(e){return new Promise((function(t){var a=E();H(a.filter((function(t){return t.trackId!==e.trackId}))),K("OK")(t)}))},X=function(){var e=Object(b.a)(f.a.mark((function e(t){var a,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://itunes.apple.com/lookup?id=".concat(t,"&entity=song"));case 2:return a=e.sent,e.next=5,a.json();case 5:return n=e.sent,e.abrupt("return",n.results);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Y=X,Z=a(27),$=a.n(Z),ee=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handlePageSelector=function(){var e=document.querySelector(".style_select__page__kfR-_"),t=document.querySelectorAll("a")[0];e.style.left="0",t.style.color="#16161A"},n.setPlay=function(e){void 0!==e?n.setState({play:e}):n.setState((function(e){return{play:!e.play}}))},n.getFavorite=function(){var e=Object(p.a)(n).state,t=e.favSongs,a=e.trackList[e.track].trackId;t.some((function(e){return e.trackId===a}))?n.setState({isChecked:!0}):n.setState({isChecked:!1})},n.nextSong=function(e){var t=Object(p.a)(n).state,a=t.track;a!==t.trackList.length-1?n.setState({track:a+1},(function(){e.play(),n.getFavorite()})):n.setState({track:1},(function(){e.play(),n.getFavorite()}))},n.prevSong=function(e){var t=Object(p.a)(n).state,a=t.track,r=t.trackList;a>1?n.setState({track:a-1},(function(){e.play(),n.getFavorite()})):n.setState({track:r.length-1},(function(){e.play(),n.getFavorite()}))},n.selectMusic=function(e){var t=document.querySelector("#aud");n.setState({track:e,play:!1},(function(){t.play(),n.getFavorite()}))},n.charCheck=function(e){return e&&e.length>25?e.slice(0,22).concat("..."):e},n.state={artistName:"",favSongs:JSON.parse(localStorage.getItem("favorite_songs"))||[],isChecked:!1,track:1,play:!0},n.musicFetch=n.musicFetch.bind(Object(p.a)(n)),n.renderTracks=n.renderTracks.bind(Object(p.a)(n)),n.onInputChange=n.onInputChange.bind(Object(p.a)(n)),n.fetchFav=n.fetchFav.bind(Object(p.a)(n)),n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.musicFetch(),this.fetchFav(),this.handlePageSelector()}},{key:"componentWillUnmount",value:function(){document.querySelectorAll("a")[0].style.color="#fffffe"}},{key:"onInputChange",value:function(e){var t=this,a=e.target,n=a.name,r=a.checked;this.setState({loading:!0},Object(b.a)(f.a.mark((function e(){var a,s,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.state,s=a.trackList,c=a.isChecked,r){e.next=6;break}return e.next=4,Q(s[n]);case 4:e.next=8;break;case 6:return e.next=8,B(s[n]);case 8:t.setState({loading:!1,favSongs:JSON.parse(localStorage.getItem("favorite_songs")),isChecked:!c});case 9:case"end":return e.stop()}}),e)}))))}},{key:"fetchFav",value:function(){var e=Object(b.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z();case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"musicFetch",value:function(){var e=Object(b.a)(f.a.mark((function e(){var t,a,n=this;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.id,e.next=3,Y(t);case 3:a=e.sent,this.setState({trackList:a,artistName:a[0].artistName,albumName:a[0].collectionName,album:a[0].artworkUrl100},(function(){return n.getFavorite()}));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"renderTracks",value:function(){var e=this,t=this.state,a=t.trackList,n=t.favSongs,r=t.track,s=this.onInputChange;if(a)return a.map((function(t,a){var c=t.trackName,i=t.previewUrl,o=t.trackId;return 0!==a&&Object(x.jsx)(V,{name:c,id:o,url:i,event:s,index:a,favSongs:n,selectMusic:e.selectMusic,track:r},c)}))}},{key:"render",value:function(){var e=this.state,t=e.trackList,a=e.artistName,n=e.albumName,r=e.album,s=e.loading,c=e.favSongs,i=e.isChecked,o=e.track,l=e.play,u=this.getFavorite,d=this.onInputChange,h=this.nextSong,j=this.prevSong,m=this.setPlay,f=this.charCheck;return Object(x.jsxs)("main",{"data-testid":"page-album",className:$.a.album__page,children:[Object(x.jsx)(R,{}),Object(x.jsxs)("section",{className:$.a.album__container,children:[Object(x.jsxs)("div",{className:$.a.album__info,children:[Object(x.jsx)("img",{src:r,alt:n}),Object(x.jsx)("h2",{"data-testid":"album-name",title:n,children:f(n)}),Object(x.jsx)("h3",{"data-testid":"artist-name",children:a})]}),Object(x.jsx)("div",{className:$.a.track__list,children:s?Object(x.jsx)(I,{}):this.renderTracks()})]}),t&&Object(x.jsx)(y,{trackList:t,favSongs:c,getFavorite:u,isChecked:i,track:o,event:d,nextSong:h,prevSong:j,play:l,setPlay:m})]})}}]),a}(n.Component),te=ee,ae=a(30),ne=a.n(ae),re=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handlePageSelector=function(){var e=document.querySelector(".style_select__page__kfR-_"),t=document.querySelectorAll("a")[1];e.style.left="133px",t.style.color="#16161A"},n.nextSong=function(e){var t=Object(p.a)(n).state,a=t.track;a!==t.favSongs.length-1?n.setState({track:a+1},(function(){e.play(),n.fetchFavorites()})):n.setState({track:0},(function(){e.play(),n.fetchFavorites()}))},n.prevSong=function(e){var t=Object(p.a)(n).state,a=t.track,r=t.favSongs;a>0?n.setState({track:a-1},(function(){e.play(),n.fetchFavorites()})):n.setState({track:r.length-1},(function(){e.play(),n.fetchFavorites()}))},n.selectMusic=function(e){var t=document.querySelector("#aud");n.setState({track:e,play:!1},(function(){return t.play()}))},n.setPlay=function(e){void 0!==e?n.setState({play:e}):n.setState((function(e){return{play:!e.play}}))},n.state={favSongs:"",track:0,isChecked:!0,play:!0},n.fetchFavorites=n.fetchFavorites.bind(Object(p.a)(n)),n.renderTracks=n.renderTracks.bind(Object(p.a)(n)),n.onInputChange=n.onInputChange.bind(Object(p.a)(n)),n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.fetchFavorites(),this.handlePageSelector()}},{key:"componentWillUnmount",value:function(){document.querySelectorAll("a")[1].style.color="#fffffe"}},{key:"onInputChange",value:function(e){var t=this,a=e.target.name;this.setState({loading:!0},Object(b.a)(f.a.mark((function e(){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.state.favSongs,e.next=3,Q(n[a]);case 3:t.setState({loading:!1,favSongs:JSON.parse(localStorage.getItem("favorite_songs"))});case 4:case"end":return e.stop()}}),e)}))))}},{key:"fetchFavorites",value:function(){var e=this;this.setState({loading:!0},Object(b.a)(f.a.mark((function t(){var a;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,z();case 2:a=t.sent,e.setState({favSongs:a,loading:!1});case 4:case"end":return t.stop()}}),t)}))))}},{key:"renderTracks",value:function(){var e=this.state,t=e.favSongs,a=e.track,n=this.onInputChange,r=this.selectMusic;if(t)return t.map((function(e,s){var c=e.trackName,i=e.previewUrl,o=e.trackId,l=e.artworkUrl100;return Object(x.jsx)(V,{name:c,id:o,url:i,event:n,index:s,favSongs:t,img:l,selectMusic:r,track:a},c)}))}},{key:"render",value:function(){var e=this.state,t=e.loading,a=e.favSongs,n=e.track,r=e.isChecked,s=e.play,c=this.onInputChange,i=this.setPlay,o=this.prevSong,l=this.nextSong;return console.log(a),Object(x.jsxs)("div",{"data-testid":"page-favorites",className:ne.a.fav_page,children:[Object(x.jsx)(R,{}),Object(x.jsx)("h2",{children:"M\xfasicas Favoritas:"}),Object(x.jsx)("div",{className:ne.a.favorite_container,children:Object(x.jsx)("div",{className:ne.a.favorite__tracks,children:t?Object(x.jsx)(I,{}):this.renderTracks()})}),a.length>0&&Object(x.jsx)(y,{trackList:a,track:n,isChecked:r,event:c,play:s,nextSong:l,prevSong:o,setPlay:i})]})}}]),a}(n.Component),se=a(24),ce=a.n(se),ie=a.p+"static/media/audio__player.e6d8152f.svg",oe=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={btnDisable:!0,name:"",loading:!1,status:""},n.onInputChange=n.onInputChange.bind(Object(p.a)(n)),n.addUser=n.addUser.bind(Object(p.a)(n)),n}return Object(l.a)(a,[{key:"onInputChange",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(_.a)({btnDisable:n.length<3},a,n))}},{key:"addUser",value:function(){var e=Object(b.a)(f.a.mark((function e(){var t,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({loading:!0}),t=this.state.name,e.next=4,q({name:t});case 4:a=e.sent,this.setState({status:a});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.btnDisable,a=e.name,n=e.loading,r=e.status,s=this.onInputChange,c=this.addUser;return n?Object(x.jsx)("div",{className:ce.a.loading,children:Object(x.jsx)(I,{status:r,redirect:"/search"})}):Object(x.jsxs)("div",{"data-testid":"page-login",className:ce.a.container,children:[Object(x.jsx)("img",{src:ie,alt:""}),Object(x.jsxs)("form",{className:ce.a.login__form,children:[Object(x.jsx)("h1",{children:"LogIn"}),Object(x.jsx)(v.k,{className:ce.a.person}),Object(x.jsx)("input",{type:"text","data-testid":"login-name-input",name:"name",id:"nameInput",placeholder:"Nome",value:a,onChange:s,className:ce.a.input}),Object(x.jsx)("button",{disabled:t,type:"button","data-testid":"login-submit-button",onClick:c,children:"Entrar"})]})]})}}]),a}(n.Component),le=oe,ue=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(x.jsx)("div",{"data-testid":"page-not-found"})}}]),a}(n.Component),de=ue,he=a(19),je=a.n(he),me=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handlePageSelector=function(){var e=document.querySelector(".style_select__page__kfR-_"),t=document.querySelectorAll("a")[2];e.style.left="266.5px",t.style.color="#16161A"},n.renderProfileInfo=function(){var e=n.state.profile,t=e.name,a=e.image,r=e.description,s=e.email;return Object(x.jsxs)("section",{className:je.a.profile_info,children:[Object(x.jsxs)("div",{className:je.a.img_wrapper,children:[a?Object(x.jsx)("img",{src:a,alt:t,"data-testid":"profile-image"}):Object(x.jsx)(k.a,{className:je.a.user_icon}),Object(x.jsx)(h.b,{to:"/profile/edit",children:Object(x.jsx)("button",{type:"button",children:"Editar perfil"})})]}),Object(x.jsxs)("div",{className:je.a.infos,children:[Object(x.jsx)("strong",{children:"Nome"}),Object(x.jsx)("p",{children:t})]}),Object(x.jsxs)("div",{className:je.a.infos,children:[Object(x.jsx)("strong",{children:"E-mail"}),Object(x.jsx)("p",{children:s})]}),Object(x.jsxs)("div",{className:je.a.infos,children:[Object(x.jsx)("strong",{children:"Descri\xe7\xe3o"}),Object(x.jsx)("p",{children:r})]})]})},n.state={profile:""},n.fetchUser=n.fetchUser.bind(Object(p.a)(n)),n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.fetchUser(),this.handlePageSelector()}},{key:"componentWillUnmount",value:function(){document.querySelectorAll("a")[2].style.color="#fffffe"}},{key:"fetchUser",value:function(){var e=this;this.setState({loading:!0},Object(b.a)(f.a.mark((function t(){var a;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P();case 2:a=t.sent,e.setState({profile:a,loading:!1});case 4:case"end":return t.stop()}}),t)}))))}},{key:"render",value:function(){var e=this.state.loading;return Object(x.jsxs)("div",{"data-testid":"page-profile",className:je.a.profile_page,children:[Object(x.jsx)(R,{}),Object(x.jsx)("div",{className:je.a.profile_container,children:e?Object(x.jsx)(I,{}):this.renderProfileInfo()})]})}}]),a}(n.Component),fe=a(28),be=a.n(fe),pe=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handlePageSelector=function(){var e=document.querySelector(".style_select__page__kfR-_"),t=document.querySelectorAll("a")[2];e.style.left="266.5px",t.style.color="#16161A"},n.editForm=function(){var e=Object(p.a)(n),t=e.state,a=t.disable,r=t.name,s=t.image,c=t.description,i=t.email,o=t.redirect,l=e.onInputChange,u=e.saveUser;return Object(x.jsxs)("div",{className:be.a.form_container,children:[Object(x.jsxs)("form",{className:be.a.form,children:[Object(x.jsxs)("div",{className:be.a.img_selector,children:[s?Object(x.jsx)("img",{src:s,alt:r}):Object(x.jsx)(k.a,{}),Object(x.jsx)("input",{type:"text",name:"image",id:"image",placeholder:"Insira um link","data-testid":"edit-input-image",value:s,onChange:l})]}),Object(x.jsxs)("label",{htmlFor:"name",children:[Object(x.jsx)("p",{children:"Nome"}),Object(x.jsx)("input",{type:"text","data-testid":"edit-input-name",name:"name",id:"name",value:r,onChange:l})]}),Object(x.jsxs)("label",{htmlFor:"email",children:[Object(x.jsx)("p",{children:"E-mail"}),Object(x.jsx)("input",{type:"email","data-testid":"edit-input-email",name:"email",id:"email",value:i,onChange:l})]}),Object(x.jsxs)("label",{htmlFor:"description",children:[Object(x.jsx)("p",{children:"Descri\xe7\xe3o"}),Object(x.jsx)("textarea",{cols:"30",rows:"10","data-testid":"edit-input-description",id:"description",name:"description",value:c,onChange:l})]}),Object(x.jsx)("button",{disabled:a,"data-testid":"edit-button-save",type:"button",onClick:u,children:"Salvar"})]}),o&&Object(x.jsx)(j.a,{to:"/profile"})]})},n.state={profile:"",disable:!0,name:"",image:"",description:"",email:""},n.fetchUser=n.fetchUser.bind(Object(p.a)(n)),n.onInputChange=n.onInputChange.bind(Object(p.a)(n)),n.saveValidation=n.saveValidation.bind(Object(p.a)(n)),n.setValue=n.setValue.bind(Object(p.a)(n)),n.saveUser=n.saveUser.bind(Object(p.a)(n)),n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.fetchUser(),this.handlePageSelector()}},{key:"componentWillUnmount",value:function(){document.querySelectorAll("a")[2].style.color="#fffffe"}},{key:"onInputChange",value:function(e){var t=this,a=e.target,n=a.name,r=a.value;this.setState(Object(_.a)({},n,r),(function(){return t.saveValidation()}))}},{key:"setValue",value:function(){var e=this,t=this.state.profile,a=t.name,n=t.image,r=t.description,s=t.email;this.setState({name:a,image:n,description:r,email:s},(function(){return e.saveValidation()}))}},{key:"saveValidation",value:function(){var e=this.state,t=e.name,a=e.image,n=e.description,r=e.email,s=/\S+@\S+\.\S+/.test(r);t&&a&&n&&s?this.setState({disable:!1}):this.setState({disable:!0})}},{key:"fetchUser",value:function(){var e=this;this.setState({loading:!0},Object(b.a)(f.a.mark((function t(){var a;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P();case 2:a=t.sent,e.setState({profile:a,loading:!1},(function(){return e.setValue()}));case 4:case"end":return t.stop()}}),t)}))))}},{key:"saveUser",value:function(){var e=Object(b.a)(f.a.mark((function e(){var t,a,n,r,s,c,i;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state,a=t.name,n=t.image,r=t.description,s=t.email,c=this.props.history.push,i={name:a,image:n,description:r,email:s},c("/profile"),e.next=6,M(i);case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.loading;return Object(x.jsxs)("div",{"data-testid":"page-profile-edit",className:be.a.profile_page,children:[Object(x.jsx)(R,{}),e?Object(x.jsx)(I,{}):this.editForm()]})}}]),a}(n.Component);pe.defaultProps={history:void 0};var _e=pe,ve=a(38),ge=function(){var e=Object(b.a)(f.a.mark((function e(t){var a,n,r,s,c,i;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=encodeURI(t).replaceAll("%20","+"),n="https://itunes.apple.com/search?entity=album&term=".concat(a,"&attribute=allArtistTerm"),e.next=4,fetch(n);case 4:return r=e.sent,e.next=7,r.json();case 7:return s=e.sent,c=s.results,i=c.map((function(e){return{artistId:e.artistId,artistName:e.artistName,collectionId:e.collectionId,collectionName:e.collectionName,collectionPrice:e.collectionPrice,artworkUrl100:e.artworkUrl100,releaseDate:e.releaseDate,trackCount:e.trackCount}})),e.abrupt("return",i);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Oe=ge,xe=a(25),ye=a.n(xe),ke=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handlePageSelector=function(){var e=document.querySelector(".style_select__page__kfR-_"),t=document.querySelectorAll("a")[0];e.style.left="0",t.style.color="#16161A"},n.state={arstistName:"",disable:!0},n.onInputChange=n.onInputChange.bind(Object(p.a)(n)),n.fetchArtist=n.fetchArtist.bind(Object(p.a)(n)),n.albumRender=n.albumRender.bind(Object(p.a)(n)),n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.handlePageSelector()}},{key:"componentWillUnmount",value:function(){document.querySelectorAll("a")[0].style.color="#fffffe"}},{key:"onInputChange",value:function(e){var t,a=e.target,n=a.name,r=a.value;this.setState((t={},Object(_.a)(t,n,r),Object(_.a)(t,"disable",r.length<2),t))}},{key:"fetchArtist",value:function(e){var t=this;e.preventDefault();var a=this.state.arstistName;this.setState({loading:!0,artist:a},Object(b.a)(f.a.mark((function e(){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Oe(a);case 2:n=e.sent,t.setState({arstistName:"",disable:!0,albuns:n.length>0?n:"not found",loading:!1});case 4:case"end":return e.stop()}}),e)}))))}},{key:"albumRender",value:function(){var e=this.state,t=e.loading,a=e.albuns,n=e.artist;if(t&&!a)return Object(x.jsx)(I,{});if(Array.isArray(a)){var r=a.map((function(e){var t=e.artistName,a=e.collectionId,n=e.collectionName,r=e.artworkUrl100,s=n.length<=17?n:n.slice(0,13).concat("..."),c=t.length<=13?t:t.slice(0,9).concat("...");return Object(x.jsxs)(h.b,{to:"/album/".concat(a),"data-testid":"link-to-album-".concat(a),className:ye.a.album__warapper,children:[Object(x.jsx)("img",{src:r,alt:n}),Object(x.jsx)("h3",{children:s}),Object(x.jsx)("h4",{children:c})]},a)}));return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("h2",{className:ye.a.result__text,children:"Resultado de \xe1lbuns de: ".concat(n)}),Object(x.jsx)("div",{className:ye.a.track__list,children:r})]})}return"not found"===a?Object(x.jsx)("h2",{children:"Nenhum \xe1lbum foi encontrado"}):void 0}},{key:"render",value:function(){var e=this.state,t=e.arstistName,a=e.disable,n=this.onInputChange,r=this.fetchArtist,s=this.albumRender;return Object(x.jsxs)("div",{"data-testid":"page-search",className:ye.a.search__page,children:[Object(x.jsx)(R,{}),Object(x.jsxs)("form",{className:ye.a.search__bar,children:[Object(x.jsx)("input",{type:"text","data-testid":"search-artist-input",name:"arstistName",value:t,onChange:n}),Object(x.jsx)("button",{disabled:a,type:"submit","data-testid":"search-artist-button",onClick:r,children:Object(x.jsx)(ve.a,{})})]}),s()]})}}]),a}(n.Component),Se=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(x.jsx)(h.a,{children:Object(x.jsxs)(j.d,{children:[Object(x.jsx)(j.b,{exact:!0,path:"/",render:function(e){return Object(x.jsx)(le,Object(i.a)({},e))}}),Object(x.jsx)(j.b,{exact:!0,path:"/search",component:ke}),Object(x.jsx)(j.b,{exact:!0,path:"/album/:id",render:function(e){return Object(x.jsx)(te,Object(i.a)({},e))}}),Object(x.jsx)(j.b,{exact:!0,path:"/favorites",component:re}),Object(x.jsx)(j.b,{exact:!0,path:"/profile",component:me}),Object(x.jsx)(j.b,{exact:!0,path:"/profile/edit",render:function(e){return Object(x.jsx)(_e,Object(i.a)({},e))}}),Object(x.jsx)(j.b,{exact:!0,path:"*",component:de})]})})}}]),a}(r.a.Component),Ne=Se;c.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(Ne,{})}),document.getElementById("root"))},9:function(e,t,a){e.exports={player:"style_player__Rx3VF",music_info:"style_music_info__2oMeL",names:"style_names__1kqgM",track:"style_track__3PHJ0",artist:"style_artist__GPwVy",controls:"style_controls__2njYa",play:"style_play__3dCSw",audio:"style_audio__1djGG",album_img:"style_album_img__1GWrF",favorite__check:"style_favorite__check__2LInh",progress_container:"style_progress_container__bNUIl",player_controls:"style_player_controls__D4cm_",progress:"style_progress__1_yV_",thumb:"style_thumb__2D3AC",progress_bar:"style_progress_bar__2RIeI",volume_controls:"style_volume_controls__3AVpW",volume_bar:"style_volume_bar__2lJRe",volume_btn:"style_volume_btn__1My3C"}}},[[56,1,2]]]);
//# sourceMappingURL=main.097f1a94.chunk.js.map