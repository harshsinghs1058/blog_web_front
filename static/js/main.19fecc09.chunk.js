(this.webpackJsonpblog_web_frontend=this.webpackJsonpblog_web_frontend||[]).push([[0],{239:function(e,t,r){},242:function(e,t,r){},243:function(e,t,r){},244:function(e,t,r){"use strict";r.r(t);var s=r(2),a=r.n(s),n=r(36),c=r.n(n),l=r(19),o=r(3),i=r(8),d=r.n(i),b=r(10),u=r(4),j=r(55),x=r(22),m=r(115),h=r(50),f=r(1),g=a.a.createContext(void 0),O=function(e){var t=e.children,r=Object(s.useState)({userSignedIn:!1,name:"",email:"",userID:"",userDesc:"",userImg:""}),a=Object(u.a)(r,2),n=a[0],c=a[1];Object(s.useEffect)((function(){var e=localStorage.getItem("authBlog");if(e){var t=JSON.parse(e);e&&c(t)}}),[]);var l=[n,function(e,t,r,s,a){c({userSignedIn:!0,name:e,email:t,userID:r,userDesc:s,userImg:a})},function(){c({userSignedIn:!1,name:"",email:"",userID:"",userDesc:"",userImg:""})}];return Object(f.jsx)(g.Provider,{value:l,children:t})},p=function(){var e=Object(s.useContext)(g);if(void 0===e)throw new Error("useAuth can only be used inside AuthProvider");return e};function v(){var e=p(),t=Object(u.a)(e,3),r=t[0],s=(t[1],t[2]),a=Object(o.f)();return Object(f.jsxs)("nav",{className:" h-20 flex items-center justify-between px-10 bg-maximum_blue_purple sticky top-0 z-50",children:[Object(f.jsx)("section",{className:"text-black text-4xl font-bold inline cursor-pointer transform transition duration-500 hover:scale-110 ",onClick:function(){return a("/home")},children:"Blog It"}),Object(f.jsxs)("div",{className:"w-2/5 h-12 relative flex items-center",children:[Object(f.jsx)(j.a,{className:"ml-4 text-2xl cursor-pointer absolute right-5"}),Object(f.jsx)("input",{className:"h-12 w-full justify-center items-center rounded-xl bg-white border-2 hover:border-black  outline-none text-lg focus:ring inline pl-3 pr-16 focus:border-black",placeholder:"Search"})]}),Object(f.jsx)(c,{})]});function n(e){var t=e.Icon,r=e.text,s=e.OnClick;return Object(f.jsxs)("div",{className:"flex flex-col items-center  cursor-pointer group mx-4 hover:text-black",onClick:s,children:[Object(f.jsx)(t,{className:"group-hover:animate-bounce text-2xl "}),Object(f.jsxs)("div",{children:[" ",r]})]})}function c(){return r.userSignedIn?Object(f.jsxs)("section",{className:"text-white text-l flex flex-row ",children:[Object(f.jsx)(n,{text:"New Blog",Icon:m.a,OnClick:function(){return a("/createBlog")}}),Object(f.jsx)(n,{text:"Settings",Icon:h.a}),Object(f.jsx)(n,{text:"Profile",Icon:j.c,OnClick:function(){return a("/profile")}}),Object(f.jsx)(n,{text:"Sign Out",Icon:j.b,OnClick:function(){localStorage.setItem("authBlog",JSON.stringify({userSignedIn:!1,name:"",email:"",userID:""})),s(),a("/home")}}),Object(f.jsx)("button",{className:"text-black border-light_pink border-4 rounded-2xl ml-5 px-5 text-2xl w-52 h-12 bg-gray-300 font-bold  bg-lemon_yellow_crayola hover:bg-light_pink hover:border-black hover:border-2 hover:text-black transform duration-300 hover:scale-110",onClick:function(){return a("/contactUs")},children:"Contact Us"})]}):Object(f.jsxs)("div",{className:"flex",children:[Object(f.jsx)("div",{children:Object(f.jsxs)("button",{className:"text-black border-light_pink border-4 rounded-2xl ml-5 px-10 text-2xl w-52 h-12 font-bold  bg-white hover:bg-light_pink hover:border-black hover:border-2 hover:text-black transform duration-300 hover:scale-110 flex items-center",onClick:function(){return a("/signIn")},children:[Object(f.jsx)(x.b,{className:"inline mr-2"}),"Sign in"]})}),Object(f.jsx)("button",{className:"text-black border-light_pink border-4 rounded-2xl ml-5 px-10 text-2xl w-52 h-12 font-bold  bg-lemon_yellow_crayola hover:bg-light_pink hover:border-black hover:border-2 hover:text-black transform duration-300 hover:scale-110",onClick:function(){return a("/signUp")},children:"SignUp"})]})}}var N=r(14),w=r.n(N);function y(){var e=Object(o.g)().blogID,t=Object(s.useState)({}),r=Object(u.a)(t,2),a=r[0],n=r[1],c=Object(s.useState)({}),l=Object(u.a)(c,2),i=l[0],j=l[1];Object(s.useEffect)((function(){var e=!0;return x().then((function(t){e&&(n(t.data.blogData),j(t.data.bloggerData))})),function(){return e=!1}}),[]);var x=function(){var t=Object(b.a)(d.a.mark((function t(){var r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.a.get("http://localhost:9000/api/blog/blogID",{params:{blogID:String(e)}});case 2:return r=t.sent,console.log(r),t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return a.title?(console.log(a),Object(f.jsxs)("div",{children:[Object(f.jsx)(v,{}),Object(f.jsxs)("div",{children:[Object(f.jsxs)("div",{className:"fixed mt-3 w-1/4 flex flex-col items-center px-10 ",children:[Object(f.jsx)("img",{src:i.userImg,alt:"dp",className:"h-52 w-52 rounded-full inline mr-3"}),Object(f.jsx)("div",{className:"text-3xl mt-3",children:i.name}),Object(f.jsx)("div",{className:"text-l mt-3",children:i.userDesc}),Object(f.jsx)("textarea",{placeholder:"Comment",className:"w-full border-2 rounded-xl border-black text-l h-15v mt-3 p-2",maxLength:100}),Object(f.jsx)("button",{className:"bg-baby_blue_eyes mt-5 px-5 text-2xl border-2 border-light_pink rounded-xl font-bold hover:bg-celeste transform duration-300 hover:scale-110",children:"Add Comment"})]}),Object(f.jsxs)("div",{className:" w-1/2 mt-5   mx-auto",children:[Object(f.jsx)("div",{className:"text-6xl font-bold mb-3",children:a.title}),Object(f.jsx)("div",{className:"text-2xl text-gray-700 mb-3",children:a.desc}),Object(f.jsxs)("div",{className:"flex items-center mb-3",children:[Object(f.jsx)("div",{className:"font-bold mb-3 mr-1",children:i.name}),Object(f.jsxs)("div",{className:"font-bold mb-3",children:["| ",a.time.slice(0,10)]})]}),Object(f.jsx)("img",{src:a.imgURL,alt:"imp"}),Object(f.jsx)("div",{className:"text-2xl mb-5",dangerouslySetInnerHTML:{__html:a.blogBody}})]})]})]})):Object(f.jsxs)("div",{children:[Object(f.jsx)(v,{}),Object(f.jsxs)("div",{className:"flex items-center flex-col font-bold justify-center h-80v text-4xl",children:["Blog Not found",Object(f.jsx)("div",{children:"Please refresh the page"})]})]})}function k(){var e=Object(o.f)();return Object(f.jsxs)("div",{className:"border-dotted border-2 rounded-2xl fixed w-1/5 right-10 h-80v overflow-hidden bg-baby_powder transform  hover:scale-110 my-10 flex items-center flex-col ",children:[Object(f.jsx)("div",{className:"text-4xl font-bold my-3 text-maximum_blue_purple",children:"Categories"}),t("Fashion"),t("Travel"),t("Entertainment"),t("Health"),t("Fitness"),t("Music"),t("Financial"),t("Education"),t("Cryptocurrency"),t("Food ")]});function t(t){return Object(f.jsx)("button",{className:"text-black font-bold text-2xl rounded-2xl px-5 my-2 hover:bg-celeste hover:text-3xl hover:border-2 hover:border-black cursor-pointer",onClick:function(){e("/category/".concat(t),{replace:!0})},children:t})}}function S(){var e=Object(o.f)(),t=Object(s.useState)([]),r=Object(u.a)(t,2),a=r[0],n=r[1],c=Object(o.g)().category;Object(s.useEffect)((function(){var e=!0;return l().then((function(t){e&&n(t)})),function(){return e=!1}}),[c]);var l=function(){var e=Object(b.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.get("http://localhost:9000/api/blog/category",{params:{category:c}});case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(f.jsxs)("div",{className:"bg-baby_blue_eyes h-100v",children:[Object(f.jsx)(v,{}),Object(f.jsxs)("div",{className:"flex",children:[Object(f.jsx)("div",{className:"grid grid-cols-3 w-3/4 ",children:a.length>0?a.map((function(t){return function(t){return Object(f.jsxs)("div",{className:"m-5 h-96 rounded-lg overflow-hidden shadow-lg inline transform bg-mauve hover:scale-110",onClick:function(){e("/".concat(t._id,"/blog"))},children:[Object(f.jsx)("img",{className:"w-full h-44 object-cover",src:t.imgURL,alt:"Sunset in the mountains"}),Object(f.jsxs)("div",{className:"px-6 py-4",children:[Object(f.jsx)("div",{className:"font-bold text-xl mb-2",children:String(t.title).substring(0,22)+"..."}),Object(f.jsx)("p",{className:"text-gray-700 text-base",children:String(t.desc).substring(0,100)})]}),Object(f.jsx)("div",{className:"px-6 pt-4 pb-2 ",children:Object(f.jsxs)("span",{className:"inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2",children:["#",t.category]})})]},t._id)}(t)})):Object(f.jsx)("div",{className:"text-6xl font-bold flex items-center h-80v justify-center w-100v",children:"No Blog Found"})}),Object(f.jsx)("div",{children:Object(f.jsx)(k,{})})]})]})}function I(){return Object(f.jsxs)("div",{className:" bg-baby_blue_eyes h-100v",children:[Object(f.jsx)(v,{}),Object(f.jsx)("div",{className:"flex mx-auto mt-2 rounded-xl bg-white w-30v dark:bg-gray-900 border-2 border-black",children:Object(f.jsx)("div",{className:"max-w-6xl mx-auto px-4",children:Object(f.jsx)("div",{className:"mt-8 overflow-hidden",children:Object(f.jsxs)("div",{className:"grid grid-cols-1 ",children:[Object(f.jsxs)("div",{className:"p-6 mr-2 bg-gray-100 dark:bg-gray-800 ",children:[Object(f.jsx)("h1",{className:"text-4xl sm:text-5xl text-gray-800 dark:text-white font-extrabold tracking-tight",children:"Get in touch"}),Object(f.jsx)("p",{className:"text-normal text-lg sm:text-2xl font-medium text-gray-600 dark:text-gray-400 mt-2",children:"Fill in the form to start a conversation"}),Object(f.jsxs)("div",{className:"flex items-center mt-2 text-gray-600 dark:text-gray-400",children:[Object(f.jsx)("svg",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",viewBox:"0 0 24 24",className:"w-8 h-8 text-gray-500",children:Object(f.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})}),Object(f.jsx)("div",{className:"ml-4 text-md tracking-wide font-semibold w-40",children:"info@example.org"})]})]}),Object(f.jsxs)("form",{className:"p-6 flex flex-col justify-center",children:[Object(f.jsxs)("div",{className:"flex flex-col mt-2",children:[Object(f.jsx)("label",{for:"email",className:"hidden",children:"Email"}),Object(f.jsx)("input",{type:"email",name:"email",id:"email",placeholder:"Email",className:"w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"})]}),Object(f.jsxs)("div",{className:"flex flex-col mt-2",children:[Object(f.jsx)("label",{for:"tel",className:"hidden",children:"Number"}),Object(f.jsx)("textarea",{type:"tel",name:"tel",id:"tel",placeholder:"Message",className:"w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none h-48"})]}),Object(f.jsx)("button",{type:"submit",className:"w-32 bg-indigo-600 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-indigo-500 transition ease-in-out duration-300",children:"Submit"})]})]})})})})]})}var C=r(116),_=r(37),B=r(66),D=r.n(B);r(238);function P(){var e=Object(o.f)();return Object(f.jsxs)("div",{className:"h-80v flex flex-col items-center justify-center",children:[Object(f.jsx)(h.b,{className:"text-red-600 text-9xl"}),Object(f.jsx)("div",{className:"text-4xl font-bold mt - 8",children:"Please Log In To Access this page"}),Object(f.jsx)("button",{className:"text-black border-light_pink border-4 rounded-2xl text-2xl w-52 h-12 font-bold  bg-celeste hover:bg-light_pink hover:border-black hover:border-2 hover:text-black transform duration-300 hover:scale-110 mt-8",onClick:function(){return e("/signIn")},children:"Sign In"})]})}function E(){var e=p(),t=Object(u.a)(e,1)[0],r=Object(s.useState)(_.EditorState.createEmpty()),a=Object(u.a)(r,2),n=a[0],l=a[1],i=Object(s.useState)(""),j=Object(u.a)(i,2),x=j[0],m=j[1],h=Object(s.useState)(""),g=Object(u.a)(h,2),O=g[0],N=g[1],y=Object(s.useState)(!1),k=Object(u.a)(y,2),S=k[0],I=k[1],B=Object(s.useState)(""),E=Object(u.a)(B,2),L=E[0],F=E[1],U=Object(s.useState)(!1),z=Object(u.a)(U,2),M=z[0],T=z[1],A=Object(s.useState)("Fashion"),R=Object(u.a)(A,2),V=R[0],q=R[1],J=Object(o.f)(),H=function(e){l(e)},Z=function(){var e=Object(b.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(T(!0),!(x&&L&&O&&n.getCurrentContent().hasText())){e.next=4;break}return e.next=4,w.a.post("http://localhost:9000/api/blog/createBlog",{title:x,category:V,userID:t.userID,desc:L,blogBody:D()(Object(_.convertToRaw)(n.getCurrentContent())),imgURL:O}).then((function(e){console.log(e),alert("Blog created successfully"),J("/".concat(e.data.blog._id,"/blog"),{replace:!0})})).catch((function(e){alert(e)}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(f.jsxs)("div",{children:[Object(f.jsx)(v,{}),t.userSignedIn?Object(f.jsxs)("div",{children:[Object(f.jsxs)("div",{className:"text-6xl font-bold flex items-center justify-evenly h-40 bg-yellow-400 border-2 border-black",children:[Object(f.jsx)("div",{children:"Create New Blog"}),Object(f.jsx)("button",{className:"bg-baby_blue_eyes mt-5 px-5 text-3xl border-2 border-light_pink rounded-xl font-bold hover:bg-celeste transform duration-300 hover:scale-110 block mb-5 h-24 w-52",onClick:function(){T(!0),x&&L&&O&&n.getCurrentContent().hasText()&&I(!S)},children:S?"Back":"Preview"}),Object(f.jsx)("button",{className:"bg-baby_blue_eyes mt-5 px-5 text-3xl border-2 border-light_pink rounded-xl font-bold hover:bg-celeste transform duration-300 hover:scale-110 block mb-5 h-24 w-52",onClick:Z,children:"Add Blog"})]}),Object(f.jsx)("div",{className:"mx-auto w-1/2",children:S?c.a.createPortal(Object(f.jsxs)("div",{className:"w-1/2 pt-5 border-2 rounded-xl border-black p-2 absolute left-0 right-0 mx-auto mt-5 mb-10",children:[Object(f.jsx)("div",{className:"text-6xl font-bold mb-5",children:x}),Object(f.jsx)("div",{className:"text-2xl text-gray-700 mb-5",children:L}),Object(f.jsx)("div",{className:"text-2xl font-bold mb-5",children:"".concat(t.name," | ").concat((new Date).toISOString().slice(0,10))}),Object(f.jsx)("img",{src:O,alt:"Invalid Pic",className:"w-full min-h-10 mb-5"}),Object(f.jsxs)("div",{className:"text-2xl text-gray-700 mb-5",children:["#",V]}),Object(f.jsx)("div",{className:"text-2xl mb-5",dangerouslySetInnerHTML:{__html:D()(Object(_.convertToRaw)(n.getCurrentContent()))}})]}),document.getElementById("model")):Object(f.jsxs)("div",{className:"mx-2",children:[Object(f.jsx)("h1",{className:"ml-5 mt-3 text-xl",children:"Title"}),Object(f.jsx)("input",{className:"border-2 rounded-xl px-3 w-full mt-3 py-2 text-xl hover:border-black  focus:ring",placeholder:"Blog Title",value:x,onChange:function(e){return m(e.target.value)},autoFocus:!0}),!x&&M&&Object(f.jsx)("p",{className:"text-red-600 ml-5",children:"Title is required"}),Object(f.jsx)("h1",{className:"ml-5 mt-3 text-xl",children:"Description"}),Object(f.jsx)("textarea",{className:"border-2 rounded-xl px-3 w-full mt-3 py-2 text-xl hover:border-black focus:ring",value:L,placeholder:"Description",onChange:function(e){return F(e.target.value)}}),!L&&M&&Object(f.jsx)("p",{className:"text-red-600 ml-5",children:"Description is required"}),Object(f.jsx)("h1",{className:"ml-5 mt-3 text-xl",children:"Image URL"}),Object(f.jsx)("input",{className:"border-2 rounded-xl px-3 w-full mt-3 py-2 text-xl hover:border-black focus:ring",placeholder:"Image URL",value:O,onChange:function(e){return N(e.target.value)}}),!O&&M&&Object(f.jsx)("p",{className:"text-red-600 ml-5",children:"imgUrl is required"}),Object(f.jsx)("div",{className:"border-2 rounded-xl px-3 w-full mt-3 py-2 text-xl hover:border-black focus:ring",children:Object(f.jsxs)("div",{className:"flex items-center justify-evenly",children:[Object(f.jsx)("div",{children:"Select Category"}),Object(f.jsx)("svg",{className:"w-2 h-2 absolute top-0 cursor-pointer right-0 m-4 text-gray-400",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 412 232",children:Object(f.jsx)("path",{d:"M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z",fill:"#648299",fillRule:"nonzero"})}),Object(f.jsxs)("select",{className:"text-gray-400  cursor-pointer ",value:V,onChange:function(e){return q(e.target.value)},children:[Object(f.jsx)("option",{children:"Fashion"}),Object(f.jsx)("option",{children:"Travel"}),Object(f.jsx)("option",{children:"Entertainment"}),Object(f.jsx)("option",{children:"Health"}),Object(f.jsx)("option",{children:"Fitness"}),Object(f.jsx)("option",{children:"Music"}),Object(f.jsx)("option",{children:"Financial"}),Object(f.jsx)("option",{children:"Education"}),Object(f.jsx)("option",{children:"Cryptocurrency"}),Object(f.jsx)("option",{children:"Food "})]})]})}),Object(f.jsx)(C.Editor,{editorClassName:"h-80 mt-3 px-3 py-3 ",wrapperClassName:" border-2 rounded-xl p-3 hover:border-black mb-2 mt-5 ",placeholder:"Start Writing your blog",editorState:n,onEditorStateChange:H}),!n.getCurrentContent().hasText()&&M&&Object(f.jsx)("p",{className:"text-red-600 ml-5 mb-10",children:"Blog Body is required"})]})})]}):Object(f.jsx)(P,{})]})}function L(e){var t=e.element,r=Object(o.f)();return Object(f.jsxs)("div",{className:"m-5 h-96 rounded-lg overflow-hidden shadow-lg inline transform bg-mauve hover:scale-110",onClick:function(){r("/".concat(t._id,"/blog"))},children:[Object(f.jsx)("img",{className:"w-full h-44 object-cover",src:t.imgURL,alt:"Sunset in the mountains"}),Object(f.jsxs)("div",{className:"px-6 py-4",children:[Object(f.jsx)("div",{className:"font-bold text-xl mb-2",children:String(t.title).substring(0,22)+"..."}),Object(f.jsx)("p",{className:"text-gray-700 text-base",children:String(t.desc).substring(0,100)})]}),Object(f.jsx)("div",{className:"px-6 pt-4 pb-2 ",children:Object(f.jsxs)("span",{className:"inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2",children:["#",t.category]})})]},t._id)}function F(){var e=Object(s.useState)([]),t=Object(u.a)(e,2),r=t[0],a=t[1];console.log(r),Object(s.useEffect)((function(){var e=!0;return n().then((function(t){e&&a(t)})),function(){return e=!1}}),[]);var n=function(){var e=Object(b.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.get("http://localhost:9000/api/blog/AllBlogs");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(f.jsxs)("div",{className:"bg-baby_blue_eyes block h-full min-h-screen",children:[Object(f.jsx)(v,{}),Object(f.jsxs)("div",{className:"flex",children:[Object(f.jsx)("div",{className:"grid grid-cols-3 w-3/4 ",children:r.length>0?r.map((function(e){return Object(f.jsx)(L,{element:e})})):Object(f.jsx)("h1",{children:"Loading Blogs"})}),Object(f.jsx)("div",{children:k()})]})]})}function U(){var e=Object(s.useState)([]),t=Object(u.a)(e,2),r=t[0],a=t[1],n=p(),c=Object(u.a)(n,1)[0];Object(s.useEffect)((function(){var e=!0;return l().then((function(t){e&&a(t)})),function(){return e=!1}}),[]);var l=function(){var e=Object(b.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.get("http://localhost:9000/api/blog/myblogs",{params:{userID:c.userID}});case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function o(){return Object(f.jsx)("div",{className:"grid grid-cols-3  ",children:r.length>0?r.map((function(e){return Object(f.jsx)(L,{element:e})})):Object(f.jsx)("h1",{children:"Loading Blogs"})})}return c.userSignedIn?Object(f.jsxs)("div",{className:"bg-baby_blue_eyes min-h-screen",children:[Object(f.jsx)(v,{}),Object(f.jsxs)("div",{className:"flex",children:[Object(f.jsxs)("div",{className:"ml-10 w-1/4",children:[Object(f.jsx)("img",{src:c.userImg,alt:"Profile pic",className:"bg-white w-full mt-10 rounded-xl border-2 border-black mb-3"}),Object(f.jsx)("div",{className:"text-4xl font-bold mb-2",children:c.name}),Object(f.jsx)("div",{className:"text-2xl mb-2",children:c.userDesc})]}),Object(f.jsxs)("div",{className:"w-full",children:[Object(f.jsx)("div",{className:"text-4xl ml-4 mt-8 font-bold",children:"My Blogs"}),Object(f.jsx)(o,{})]})]})]}):Object(f.jsx)(P,{})}r(239);var z=r(53),M={name:"",email:"",password:"",confirmPassword:""},T=function(e){var t={};return e.name||(t.name="Name is required"),e.email?/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e.email)||(t.email="Invalid email"):t.email="Email is required",e.password.length<8&&(t.password="Min length should be 8"),e.confirmPassword.length<8&&(t.confirmPassword="Min length should be 8"),e.password!==e.confirmPassword&&(t.confirmPassword="Password mismatch"),t};function A(e){var t=Object(o.f)(),r=Object(s.useState)(!1),a=Object(u.a)(r,2),n=a[0],c=a[1],i=p(),j=Object(u.a)(i,2),m=(j[0],j[1]),h=Object(z.a)({initialValues:M,validate:T}),g=function(){var e=Object(b.a)(d.a.mark((function e(r){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),c(!0),h.errors.name||h.errors.email||h.errors.password||h.errors.confirmPassword){e.next=11;break}return e.prev=3,e.next=6,w.a.post("http://localhost:9000/api/user/signUp",h.values).then(function(){var e=Object(b.a)(d.a.mark((function e(r){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:201===r.status?(m(r.data.user.name,r.data.user.email,r.data.user._id,r.data.user.userDesc,r.data.user.userImg),localStorage.setItem("authBlog",JSON.stringify({userSignedIn:!0,name:r.data.user.name,email:r.data.user.email,userID:r.data.user._id,userDesc:r.data.user.userDesc,userImg:r.data.user.userImg})),t("/home")):alert(r.data);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(3),e.t0.response?alert(e.t0.response.data.message):alert(e.t0.response.data);case 11:case"end":return e.stop()}}),e,null,[[3,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsxs)("div",{id:"sign_up_page",children:[Object(f.jsx)("div",{id:"left",children:Object(f.jsx)(l.b,{to:"/",children:"BlogSite"})}),Object(f.jsxs)("form",{id:"form",onSubmit:g,children:[Object(f.jsx)("div",{id:"welcome",children:"Create Account"}),Object(f.jsxs)("div",{children:[Object(f.jsxs)("div",{className:"flex items-center",children:[Object(f.jsx)(x.d,{fontSize:"20px"}),Object(f.jsx)("input",{type:"text",placeholder:"Enter Name",name:"name",onChange:h.handleChange,value:h.values.name,onBlur:h.handleBlur,autoFocus:!0,className:"border-2 border-b-2 focus:border-2"})]}),h.touched.name&&h.errors.name&&Object(f.jsx)("div",{className:"error",children:h.errors.name})]}),Object(f.jsxs)("div",{children:[Object(f.jsxs)("div",{className:"flex items-center",children:[Object(f.jsx)(x.c,{fontSize:"20px"}),Object(f.jsx)("input",{type:"text",placeholder:"Email",formNoValidate:!0,name:"email",onChange:h.handleChange,value:h.values.email,onBlur:h.handleBlur,className:"border-2 border-b-2 focus:border-2"})]}),(n||h.touched.email)&&h.errors.email&&Object(f.jsx)("div",{className:"error",children:h.errors.email})]}),Object(f.jsxs)("div",{children:[Object(f.jsxs)("div",{className:"flex items-center",children:[Object(f.jsx)(x.a,{fontSize:"20px"}),Object(f.jsx)("input",{type:"password",placeholder:"Enter Password",formNoValidate:!0,name:"password",onChange:h.handleChange,value:h.values.password,onBlur:h.handleBlur,className:"border-2 border-b-2 focus:border-2"})]}),(n||h.touched.password)&&h.errors.password&&Object(f.jsx)("div",{className:"error",children:h.errors.password})]}),Object(f.jsxs)("div",{children:[" ",Object(f.jsxs)("div",{className:"flex items-center",children:[Object(f.jsx)(x.a,{fontSize:"20px"}),Object(f.jsx)("input",{type:"password",placeholder:"Confirm Password",formNoValidate:!0,name:"confirmPassword",onChange:h.handleChange,value:h.values.confirmPassword,onBlur:h.handleBlur,className:"border-2 border-b-2 focus:border-2"})]}),(n||h.touched.confirmPassword)&&h.errors.confirmPassword&&Object(f.jsx)("div",{className:"error",children:h.errors.confirmPassword})]}),Object(f.jsx)("button",{id:"btn_sign_up",children:"Continue"}),Object(f.jsxs)("span",{children:["Already Member?",Object(f.jsx)(l.b,{to:"/signIn",children:"Login"})]})]})]})}r(242);var R={email:"",password:""},V=function(e){var t={};return e.email?/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e.email)||(t.email="Invalid email"):t.email="Email is required",e.password.length<8&&(t.password="Min length should be 8"),t};function q(){var e=Object(s.useState)(!1),t=Object(u.a)(e,2),r=t[0],a=t[1],n=p(),c=Object(u.a)(n,2),i=(c[0],c[1]),j=Object(o.f)(),m=Object(z.a)({initialValues:R,validate:V}),h=function(){var e=Object(b.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),a(!0),m.errors.email||m.errors.password){e.next=11;break}return e.prev=3,e.next=6,w.a.post("http://localhost:9000/api/user/signIn",m.values).then(function(){var e=Object(b.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:202===t.status?(i(t.data.user.name,t.data.user.email,t.data.user._id,t.data.user.userDesc,t.data.user.userImg),localStorage.setItem("authBlog",JSON.stringify({userSignedIn:!0,name:t.data.user.name,email:t.data.user.email,userID:t.data.user._id,userDesc:t.data.user.userDesc,userImg:t.data.user.userImg})),j("/home")):alert("Please Reload some error has occurred");case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(3),e.t0.response?alert(e.t0.response.data.message):alert(e.t0);case 11:case"end":return e.stop()}}),e,null,[[3,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsxs)("div",{id:"sign_in_page",children:[Object(f.jsx)("div",{id:"left",children:Object(f.jsx)(l.b,{to:"/",children:"BlogSite"})}),Object(f.jsxs)("form",{id:"form",onSubmit:h,children:[Object(f.jsx)("p",{id:"welcome",children:"Welcome Back"}),Object(f.jsxs)("div",{children:[Object(f.jsxs)("div",{className:"flex items-center",children:[Object(f.jsx)(x.c,{fontSize:"20px"}),Object(f.jsx)("input",{type:"text",placeholder:"Email",formNoValidate:!0,name:"email",onChange:m.handleChange,value:m.values.email,onBlur:m.handleBlur,autoFocus:!0,className:"border-2 border-b-2 focus:border-2"})]}),(r||m.touched.email)&&m.errors.email&&Object(f.jsx)("div",{className:"error",children:m.errors.email})]}),Object(f.jsxs)("div",{children:[Object(f.jsxs)("div",{className:"flex items-center",children:[Object(f.jsx)(x.a,{fontSize:"20px"}),Object(f.jsx)("input",{type:"password",placeholder:"Enter Password",formNoValidate:!0,name:"password",onChange:m.handleChange,value:m.values.password,onBlur:m.handleBlur,className:"border-2  hover:border-b-2  focus:border-2"})]}),(r||m.touched.password)&&m.errors.password&&Object(f.jsx)("div",{className:"error",children:m.errors.password})]}),Object(f.jsx)("span",{id:"forgot",children:Object(f.jsx)(l.b,{to:"/forget-password",children:"Forgot Password ?"})}),Object(f.jsx)("button",{id:"btn_sign_in",children:"Continue "}),Object(f.jsxs)("span",{children:["New to blogSite? ",Object(f.jsx)(l.b,{to:"/signUp",children:"Join now"})]})]})]})}r(243);var J=function(){return Object(f.jsx)(l.a,{children:Object(f.jsxs)(o.c,{children:[Object(f.jsx)(o.a,{exact:!0,path:"/",element:Object(f.jsx)(F,{})}),Object(f.jsx)(o.a,{exact:!0,path:"/signUp",element:Object(f.jsx)(A,{})}),Object(f.jsx)(o.a,{exact:!0,path:"/signIn",element:Object(f.jsx)(q,{})}),Object(f.jsx)(o.a,{exact:!0,path:"/:blogID/blog",element:Object(f.jsx)(y,{})}),Object(f.jsx)(o.a,{exact:!0,path:"/createBlog",element:Object(f.jsx)(E,{})}),Object(f.jsx)(o.a,{exact:!0,path:"/home",element:Object(f.jsx)(F,{})}),Object(f.jsx)(o.a,{exact:!0,path:"/category/:category",element:Object(f.jsx)(S,{})}),Object(f.jsx)(o.a,{exact:!0,path:"/profile",element:Object(f.jsx)(U,{})}),Object(f.jsx)(o.a,{exact:!0,path:"/contactUs",element:Object(f.jsx)(I,{})})]})})};c.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(O,{children:Object(f.jsx)(J,{})})}),document.getElementById("root"))}},[[244,1,2]]]);
//# sourceMappingURL=main.19fecc09.chunk.js.map