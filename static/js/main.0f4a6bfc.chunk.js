(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{12:function(e,t,a){e.exports={dialogs:"Dialogs_dialogs__3psTL",dialogsItem:"Dialogs_dialogsItem__1J_bq",active:"Dialogs_active__1nRMj",messages:"Dialogs_messages__G7lBl"}},25:function(e,t,a){e.exports={header:"Header_header__3agPC"}},29:function(e,t,a){e.exports={userPhoto:"Users_userPhoto__F-xz9",selectedPage:"Users_selectedPage__wIp0u"}},30:function(e,t,a){e.exports={item:"Posts_item__2kBCa",posts:"Posts_posts__29I5L"}},31:function(e,t,a){e.exports={postsBlock:"Myposts_postsBlock__1MY7D",buttonSave:"Myposts_buttonSave__2W4xl"}},43:function(e,t,a){e.exports=a.p+"static/media/images.7b938c6b.png"},44:function(e,t,a){e.exports=a.p+"static/media/load.a1cd24dd.gif"},45:function(e,t,a){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__1pszp"}},46:function(e,t,a){e.exports=a(76)},51:function(e,t,a){},52:function(e,t,a){},6:function(e,t,a){e.exports={nav:"Navbar_nav__1hzsM",item:"Navbar_item__eAPnU",activeLink:"Navbar_activeLink__2ZU1O"}},76:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(17),o=a.n(r),c=a(4),l=(a(51),a(52),a(25)),i=a.n(l),u=function(){return s.a.createElement("header",{className:i.a.header},s.a.createElement("img",{className:i.a.pic,src:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ17IautckWSx6-VDw0UI7NAMIDsEqkOZ3i5g&usqp=CAU"}))},m=a(6),p=a.n(m),g=function(){return s.a.createElement("nav",{className:p.a.nav},s.a.createElement("div",{className:p.a.item},s.a.createElement(c.b,{to:"/profile",activeClassName:p.a.activeLink},"Profile")),s.a.createElement("div",{className:p.a.item},s.a.createElement(c.b,{to:"/messages",activeClassName:p.a.activeLink},"Messages")),s.a.createElement("div",{className:p.a.item},s.a.createElement(c.b,{to:"/users",activeClassName:p.a.activeLink},"Users")),s.a.createElement("div",{className:p.a.item},s.a.createElement(c.b,{to:"/news",activeClassName:p.a.activeLink},"News")),s.a.createElement("div",{className:p.a.item},s.a.createElement(c.b,{to:"/music",activeClassName:p.a.activeLink},"Music")),s.a.createElement("div",{className:p.a.item},s.a.createElement(c.b,{to:"/setting",activeClassName:p.a.activeLink},"Setting")))},d=a(3),E=a(21),f=a(1),v={dialogs:[{id:1,name:"Natallia"},{id:2,name:"Andrey"},{id:3,name:"Ksenya"},{id:4,name:"Danila"}],messages:[{id:1,message:"Hi!!!"},{id:2,message:"How are you?"},{id:3,message:"Yo-Yo-Yo!!!"},{id:4,message:"Yo-Yo-Yo!!!"}],newMessageBody:""},_=a(12),h=a.n(_),b=function(e){return s.a.createElement("div",{className:h.a.message},e.message)},P=function(e){return s.a.createElement("div",{className:h.a.dialog+" "+h.a.active},s.a.createElement(c.b,{to:"/dialogs/1"+e.id},e.name))},O=function(e){var t=e.dialogsPage.dialogs.map((function(e){return s.a.createElement(P,{name:e.name,id:e.id,key:e.id})})),a=e.dialogsPage.messages.map((function(e){return s.a.createElement(b,{message:e.message,id:e.id,key:e.id})})),n=s.a.createRef();return s.a.createElement("div",{className:h.a.dialogs},s.a.createElement("div",{className:h.a.dialogsItem},t),s.a.createElement("div",{className:h.a.message},s.a.createElement("div",null,a),s.a.createElement("div",null,s.a.createElement("textarea",{onChange:function(t){if(n.current){var a=n.current.value;e.updateNewMessageBody(a)}},ref:n,value:e.dialogsPage.newMessageBody,placeholder:"Enter your message"}," ")),s.a.createElement("div",null,s.a.createElement("button",{onClick:function(){e.sendMessage()}},"Send"))))},N=a(11),w=Object(N.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{sendMessage:function(){e({type:"SEND_MESSAGE"})},updateNewMessageBody:function(t){e({type:"UPDATE_NEW_MESSAGE_BODY_TEXT",newMessage:t})}}}))(O),j=a(19),C=a(20),T=a(23),S=a(22),y={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!1},k=a(16),U=a.n(k),F=a(29),x=a.n(F),M=a(43),I=a.n(M),L=function(e){for(var t=Math.ceil(e.totalUsersCount/e.pageSize),a=[],n=1;n<=t;n++)a.push(n);return s.a.createElement("div",null,s.a.createElement("div",null,a.map((function(t){return s.a.createElement("span",{onClick:function(){e.onPageChanged(t)},className:t===e.currentPage?x.a.selectedPage:""},t)}))),e.users.map((function(t){return s.a.createElement("div",{key:t.id},s.a.createElement("span",null,s.a.createElement("div",null,s.a.createElement(c.b,{to:"/profile"+t.id},s.a.createElement("img",{src:null!=t.photos.small?t.photos.small:I.a,className:x.a.userPhoto}))),s.a.createElement("div",null,t.followed?s.a.createElement("button",{onClick:function(){e.unFollow(t.id)}},"UnFollow"):s.a.createElement("button",{onClick:function(){e.follow(t.id)}},"Follow"))),s.a.createElement("span",null,s.a.createElement("span",null,s.a.createElement("div",null,t.name),s.a.createElement("div",null,t.status)),s.a.createElement("span",null,s.a.createElement("div",null,"city"),s.a.createElement("div",null,"u.location.country"))))})))},A=a(44),D=a.n(A),B=function(e){return s.a.createElement(s.a.Fragment,null,s.a.createElement("img",{src:D.a}))},G=function(e){Object(T.a)(a,e);var t=Object(S.a)(a);function a(){var e;Object(j.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).onPageChanged=function(t){e.props.setCurrentPage(t),e.props.toggleIsFetching(!0),U.a.get("https://social-network.samuraijs.com/api/1.0/users?page=".concat(t,"&count=").concat(e.props.pageSize)).then((function(t){e.props.toggleIsFetching(!1),e.props.setUsers(t.data.items)}))},e}return Object(C.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.props.toggleIsFetching(!0),U.a.get("https://social-network.samuraijs.com/api/1.0/users?page=".concat(this.props.currentPage,"&count=").concat(this.props.pageSize)).then((function(t){e.props.toggleIsFetching(!1),e.props.setUsers(t.data.items),e.props.setTotalUsersCount(t.data.totalCount)}))}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,this.props.isFetching?s.a.createElement(B,null):null,s.a.createElement(L,{users:this.props.users,pageSize:this.props.pageSize,totalUsersCount:this.props.totalUsersCount,currentPage:this.props.currentPage,follow:this.props.follow,unFollow:this.props.unFollow,onPageChanged:this.onPageChanged}))}}]),a}(s.a.Component),R=Object(N.b)((function(e){return{users:e.usersPage.users,pageSize:e.usersPage.pageSize,totalUsersCount:e.usersPage.totalUsersCount,currentPage:e.usersPage.currentPage,isFetching:e.usersPage.isFetching}}),{follow:function(e){return{type:"FOLLOW",userId:e}},unFollow:function(e){return{type:"UNFOLLOW",userId:e}},setUsers:function(e){return{type:"SET_USERS",users:e}},setCurrentPage:function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},setTotalUsersCount:function(e){return{type:"SET_TOTAL_USERS_COUNT",totalUsersCount:e}},toggleIsFetching:function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}}})(G),z=a(45),W=a.n(z),Y=function(e){return s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("img",{src:"http://proklumbu.com/wp-content/uploads/2017/06/tomswallpapers.com-9250.jpg"})),s.a.createElement("div",null,s.a.createElement("img",{src:"http://185504.selcdn.ru/static/mv-flowers.reshop.by/catalog/404/16942458315ec39932dd4b7_medium.jpg"})),s.a.createElement("div",{className:W.a.descriptionBlock},s.a.createElement("img",{src:e.profile.photos.large}),s.a.createElement("div",null,e.profile.status),"ava + description"))},H={posts:[{id:1,likeCount:215,message:"Hi!!!"},{id:2,likeCount:10,message:"Hello!!"},{id:3,likeCount:15,message:"How are you&"},{id:4,likeCount:43,message:"Good afternoon!!!"}],newPostText:"it-kamasutra.com",profile:null},q=a(30),X=a.n(q),J=function(e){return s.a.createElement("div",{className:X.a.posts},s.a.createElement("div",{className:X.a.item},s.a.createElement("img",{src:"https://cdn21.img.ria.ru/images/152706/30/1527063075_0:0:1920:1080_600x0_80_0_0_1619231de06a6127896bcf26500c320d.jpg",alt:"ava"}),e.message,s.a.createElement("div",null,s.a.createElement("span",null,"Like "),e.likeCount)))},Z=a(31),K=a.n(Z),Q=function(e){var t=e.posts.map((function(e){return s.a.createElement(J,{message:e.message,likeCount:e.likeCount,key:e.id})})),a=s.a.createRef();console.log(a);return s.a.createElement("div",{className:K.a.postsBlock},s.a.createElement("div",null,s.a.createElement("h3",null,"My Post"),s.a.createElement("div",null,s.a.createElement("textarea",{onChange:function(){if(a.current){var t=a.current.value;e.updateNewPostText(t),console.log(t)}},ref:a,value:e.newPostText}," ")),s.a.createElement("div",null,s.a.createElement("button",{className:K.a.buttonSave,onClick:function(){e.addPost()}},"Add post"))),t)},V=Object(N.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),(function(e){return{addPost:function(){e({type:"ADD_POST"})},updateNewPostText:function(t){e({type:"UPDATE_NEW_POST_TEXT",newText:t})}}}))(Q),$=function(e){return s.a.createElement("div",null,s.a.createElement(Y,{profile:e.profile}),s.a.createElement(V,null))},ee=function(e){Object(T.a)(a,e);var t=Object(S.a)(a);function a(){return Object(j.a)(this,a),t.apply(this,arguments)}return Object(C.a)(a,[{key:"componentDidMount",value:function(){var e=this;U.a.get("https://social-network.samuraijs.com/api/1.0/profile/22").then((function(t){e.props.setUserProfile(t.data)}))}},{key:"render",value:function(){return null===this.props.profile?s.a.createElement(B,null):s.a.createElement($,Object.assign({},this.props,{profile:this.props.profile}))}}]),a}(s.a.Component),te=Object(N.b)((function(e){return{profile:e.profilePage.profile}}),{setUserProfile:function(e){return{type:"SET_USER_PROFILE",profile:e}}})(ee),ae=function(){return s.a.createElement("div",{className:"app-wrapper"},s.a.createElement(u,null),s.a.createElement(g,null),s.a.createElement("div",{className:"app-wrapper-content"},s.a.createElement(d.a,{path:"/profile",render:function(){return s.a.createElement(te,null)}}),s.a.createElement(d.a,{path:"/messages",render:function(){return s.a.createElement(w,null)}}),s.a.createElement(d.a,{path:"/users",render:function(){return s.a.createElement(R,null)}})))},ne=a(15),se={},re=Object(ne.b)({profilePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_POST":var a={id:5,likeCount:0,message:e.newPostText};return Object(f.a)(Object(f.a)({},e),{},{posts:[].concat(Object(E.a)(e.posts),[a]),newPostText:""});case"UPDATE_NEW_POST_TEXT":return Object(f.a)(Object(f.a)({},e),{},{newPostText:t.newText});case"SET_USER_PROFILE":return Object(f.a)(Object(f.a)({},e),{},{profile:t.profile});default:return e}},dialogsPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_NEW_MESSAGE_BODY_TEXT":return Object(f.a)(Object(f.a)({},e),{},{newMessageBody:t.newMessage});case"SEND_MESSAGE":var a=e.newMessageBody;return Object(f.a)(Object(f.a)({},e),{},{messages:[].concat(Object(E.a)(e.messages),[{id:6,message:a}]),newMessageBody:""});default:return e}},sidebarPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se;return e},usersPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(f.a)(Object(f.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(f.a)(Object(f.a)({},e),{},{followed:!0}):e}))});case"UNFOLLOW":return Object(f.a)(Object(f.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(f.a)(Object(f.a)({},e),{},{followed:!1}):e}))});case"SET_USERS":return Object(f.a)(Object(f.a)({},e),{},{users:t.users});case"SET_CURRENT_PAGE":return Object(f.a)(Object(f.a)({},e),{},{currentPage:t.currentPage});case"SET_TOTAL_USERS_COUNT":return Object(f.a)(Object(f.a)({},e),{},{totalUsersCount:t.totalUsersCount});case"TOGGLE_IS_FETCHING":return Object(f.a)(Object(f.a)({},e),{},{isFetching:t.isFetching});default:return e}}}),oe=Object(ne.c)(re);o.a.render(s.a.createElement(c.a,null,s.a.createElement(N.a,{store:oe},s.a.createElement(ae,null))),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.0f4a6bfc.chunk.js.map