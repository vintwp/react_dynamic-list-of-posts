(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],{17:function(e,t,s){},19:function(e,t,s){},21:function(e,t,s){"use strict";s.r(t);var c=s(8),n=s.n(c),a=s(2),i=s(1),r=s.n(i),o=(s(15),s(16),s(17),s(10)),l=s(9),d=s(7),j=s.n(d),m=s(3),u=s.n(m),b="https://mate.academy/students-api";function h(e){return new Promise((function(t){setTimeout(t,e)}))}function O(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,c={method:t};return s&&(c.body=JSON.stringify(s),c.headers={"Content-Type":"application/json; charset=UTF-8"}),h(300).then((function(){return fetch(b+e,c)})).then((function(e){return e.json()}))}var f=function(e){return O(e)},x=function(e,t){return O(e,"POST",t)},p=function(e){return O(e,"DELETE")},N=(s(19),s(0)),v=function(){return Object(N.jsx)("div",{className:"Loader","data-cy":"Loader",children:Object(N.jsx)("div",{className:"Loader__content"})})},y=/^\s+|\s+$|\s+(?=\s)/g,g=function(e){var t=e.postId,s=e.onAddComment,c=Object(i.useState)(""),n=Object(a.a)(c,2),r=n[0],o=n[1],l=Object(i.useState)(!1),d=Object(a.a)(l,2),j=d[0],m=d[1],b=Object(i.useState)(""),h=Object(a.a)(b,2),O=h[0],f=h[1],x=Object(i.useState)(!1),p=Object(a.a)(x,2),v=p[0],g=p[1],C=Object(i.useState)(""),S=Object(a.a)(C,2),w=S[0],E=S[1],k=Object(i.useState)(!1),P=Object(a.a)(k,2),T=P[0],I=P[1],F=Object(i.useState)(!1),A=Object(a.a)(F,2),L=A[0],D=A[1],U=!1;return Object(N.jsxs)("form",{"data-cy":"NewCommentForm",onSubmit:function(e){if(e.preventDefault(),r||(m(!0),U=!0),O||(g(!0),U=!0),w||(I(!0),U=!0),!U){var c={postId:t,name:r,email:O,body:w};D(!0),s(c).finally((function(){E(""),D(!1)}))}},children:[Object(N.jsxs)("div",{className:"field","data-cy":"NameField",children:[Object(N.jsx)("label",{className:"label",htmlFor:"comment-author-name",children:"Author Name"}),Object(N.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(N.jsx)("input",{type:"text",name:"name",id:"comment-author-name",placeholder:"Name Surname",className:u()("input",{"is-danger":j}),value:r,onChange:function(e){j&&m(!1),o(e.target.value.replace(y," "))}}),Object(N.jsx)("span",{className:"icon is-small is-left",children:Object(N.jsx)("i",{className:"fas fa-user"})}),j&&Object(N.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:Object(N.jsx)("i",{className:"fas fa-exclamation-triangle"})})]}),j&&Object(N.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Name is required"})]}),Object(N.jsxs)("div",{className:"field","data-cy":"EmailField",children:[Object(N.jsx)("label",{className:"label",htmlFor:"comment-author-email",children:"Author Email"}),Object(N.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(N.jsx)("input",{type:"email",name:"email",id:"comment-author-email",placeholder:"email@test.com",className:u()("input",{"is-danger":v}),value:O,onChange:function(e){v&&g(!1),f(e.target.value)}}),Object(N.jsx)("span",{className:"icon is-small is-left",children:Object(N.jsx)("i",{className:"fas fa-envelope"})}),v&&Object(N.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:Object(N.jsx)("i",{className:"fas fa-exclamation-triangle"})})]}),v&&Object(N.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Email is required"})]}),Object(N.jsxs)("div",{className:"field","data-cy":"BodyField",children:[Object(N.jsx)("label",{className:"label",htmlFor:"comment-body",children:"Comment Text"}),Object(N.jsx)("div",{className:"control",children:Object(N.jsx)("textarea",{id:"comment-body",name:"body",placeholder:"Type comment here",className:u()("input",{"is-danger":T}),value:w,onChange:function(e){T&&I(!1),E(e.target.value.replace(y," "))}})}),T&&Object(N.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Enter some text"})]}),Object(N.jsxs)("div",{className:"field is-grouped",children:[Object(N.jsx)("div",{className:"control",children:Object(N.jsx)("button",{type:"submit",className:u()("button","is-link",{"is-loading":L}),children:"Add"})}),Object(N.jsx)("div",{className:"control",children:Object(N.jsx)("button",{type:"reset",className:"button is-link is-light",onClick:function(){o(""),m(!1),f(""),g(!1),E(""),I(!1)},children:"Clear"})})]})]})},C=function(e){var t=e.post,s=e.comments,c=e.hasError,n=e.isLoading,r=e.onDeleteComment,o=e.onAddComment,l=t.id,d=t.title,j=t.body,m=Object(i.useState)(!1),u=Object(a.a)(m,2),b=u[0],h=u[1];return Object(N.jsx)("div",{className:"content","data-cy":"PostDetails",children:Object(N.jsxs)("div",{className:"content","data-cy":"PostDetails",children:[Object(N.jsxs)("div",{className:"block",children:[Object(N.jsx)("h2",{"data-cy":"PostTitle",children:"".concat(l,": ").concat(d)}),Object(N.jsx)("p",{"data-cy":"PostBody",children:j})]}),Object(N.jsxs)("div",{className:"block",children:[n&&Object(N.jsx)(v,{}),c&&!n&&Object(N.jsx)("div",{className:"notification is-danger","data-cy":"CommentsError",children:"Something went wrong"}),0===s.length&&!n&&Object(N.jsx)("p",{className:"title is-4","data-cy":"NoCommentsMessage",children:"No comments yet"}),s.length>0&&!n&&Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)("p",{className:"title is-4",children:"Comments:"}),s.map((function(e){return Object(N.jsxs)("article",{className:"message is-small","data-cy":"Comment",children:[Object(N.jsxs)("div",{className:"message-header",children:[Object(N.jsx)("a",{href:"mailto:".concat(e.email),"data-cy":"CommentAuthor",children:e.name}),Object(N.jsx)("button",{"data-cy":"CommentDelete",type:"button",className:"delete is-small","aria-label":"delete",onClick:function(){return r(e.id)},children:"delete button"})]}),Object(N.jsx)("div",{className:"message-body","data-cy":"CommentBody",children:e.body})]},e.id)}))]}),!c&&!n&&!b&&Object(N.jsx)("button",{"data-cy":"WriteCommentButton",type:"button",className:"button is-link",onClick:function(){return h(!0)},children:"Write a comment"})]}),b&&Object(N.jsx)(g,{postId:l,onAddComment:o})]})})},S=function(e){var t=e.selectedPost,s=Object(i.useState)([]),c=Object(a.a)(s,2),n=c[0],r=c[1],d=Object(i.useState)(!1),m=Object(a.a)(d,2),b=m[0],h=m[1],O=Object(i.useState)(!1),v=Object(a.a)(O,2),y=v[0],g=v[1];Object(i.useEffect)((function(){if(t){var e="/comments?postId="+t.id;h(!0),f(e).then(r).catch((function(){return g(!0)})).finally((function(){return h(!1)}))}}),[t]),Object(i.useEffect)((function(){y&&setTimeout((function(){g(!1)}),3e3)}),[y]);var S=function(){var e=Object(l.a)(j.a.mark((function e(t){var s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x("/comments",t);case 3:s=e.sent,r((function(e){return[].concat(Object(o.a)(e),[s])})),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),g(!0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(N.jsx)("div",{"data-cy":"Sidebar",className:u()("tile","is-parent","is-8-desktop","Sidebar",{"Sidebar--open":t}),children:Object(N.jsx)("div",{className:"tile is-child box is-success ",children:t&&Object(N.jsx)(C,{post:t,comments:n,hasError:y,isLoading:b,onDeleteComment:function(e){var t="/comments/"+e;r((function(t){return t.filter((function(t){return t.id!==e}))})),p(t).catch((function(){r(n),g(!0)}))},onAddComment:S})})})},w=r.a.memo(S),E=function(e){var t=e.post,s=e.handlerOpenComments,c=e.openedPostId;return Object(N.jsxs)("tr",{"data-cy":"Post",children:[Object(N.jsx)("td",{"data-cy":"PostId",children:t.id}),Object(N.jsx)("td",{"data-cy":"PostTitle",children:t.title}),Object(N.jsx)("td",{className:"has-text-right is-vcentered",children:Object(N.jsx)("button",{type:"button","data-cy":"PostButton",className:u()("button","is-link",{"is-light":c!==t.id}),onClick:function(){return s(t)},children:c===t.id?"Close":"Open"})})]})},k=function(e){var t=e.posts,s=e.onSelectPost,c=Object(i.useState)(0),n=Object(a.a)(c,2),r=n[0],o=n[1],l=function(e){o((function(t){return t===e.id?0:e.id})),s(e)};return Object(N.jsxs)("div",{"data-cy":"PostsList",children:[Object(N.jsx)("p",{className:"title",children:"Posts:"}),Object(N.jsxs)("table",{className:"table is-fullwidth is-striped is-hoverable is-narrow",children:[Object(N.jsx)("thead",{children:Object(N.jsxs)("tr",{className:"has-background-link-light",children:[Object(N.jsx)("th",{children:"#"}),Object(N.jsx)("th",{children:"Title"}),Object(N.jsx)("th",{children:" "})]})}),Object(N.jsx)("tbody",{children:t.map((function(e){return Object(N.jsx)(E,{post:e,handlerOpenComments:l,openedPostId:r},e.id)}))})]})]})},P=function(e){var t=e.users,s=e.selectedUser,c=e.onUserSelect,n=Object(i.useState)(!1),r=Object(a.a)(n,2),o=r[0],l=r[1];return Object(N.jsxs)("div",{"data-cy":"UserSelector",className:u()("dropdown",{"is-active":o}),children:[Object(N.jsx)("div",{className:"dropdown-trigger",children:Object(N.jsxs)("button",{type:"button",className:"button","aria-haspopup":"true","aria-controls":"dropdown-menu",onClick:function(){l(!0)},children:[Object(N.jsx)("span",{children:s?s.name:"Choose a user"}),Object(N.jsx)("span",{className:"icon is-small",children:Object(N.jsx)("i",{className:"fas fa-angle-down","aria-hidden":"true"})})]})}),Object(N.jsx)("div",{className:"dropdown-menu",id:"dropdown-menu",role:"menu",children:Object(N.jsx)("div",{className:"dropdown-content",children:t.map((function(e,t){return Object(N.jsx)("a",{href:"#user-".concat(t+1),className:u()("dropdown-item",{"is-active":(null===s||void 0===s?void 0:s.id)===e.id}),onClick:function(){return function(e){e.id!==(null===s||void 0===s?void 0:s.id)&&c(e),l(!1)}(e)},children:e.name},e.id)}))})})]})},T=r.a.memo(P),I=function(e){var t=e.data,s=t.typeNotification,c=t.text,n=t.dataCypress;return Object(N.jsx)("div",{className:u()("notification",{"is-warning":"warning"===s,"is-danger":"danger"===s}),"data-cy":n,children:c})};var F=function(){var e=Object(i.useState)([]),t=Object(a.a)(e,2),s=t[0],c=t[1],n=Object(i.useState)([]),r=Object(a.a)(n,2),o=r[0],l=r[1],d=Object(i.useState)(null),j=Object(a.a)(d,2),m=j[0],u=j[1],b=Object(i.useState)(null),h=Object(a.a)(b,2),O=h[0],x=h[1],p=Object(i.useState)(!1),y=Object(a.a)(p,2),g=y[0],C=y[1],S=Object(i.useState)(!0),E=Object(a.a)(S,2),P=E[0],F=E[1],A=Object(i.useState)(null),L=Object(a.a)(A,2),D=L[0],U=L[1];Object(i.useEffect)((function(){f("/users").then((function(e){var t=e.slice(0,25);c(t)})).catch((function(){throw new Error("Something wrong")}))}),[]);var B=Object(i.useCallback)((function(e){u(e),x(null)}),[]),M=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(t){var s={typeNotification:"danger",text:"Error loading posts",dataCypress:"PostsLoadingError"};return F(!0),void U(s)}if(0===e.length&&!t){var c={typeNotification:"warning",text:"No posts yet",dataCypress:"NoPostsYet"};return F(!0),void U(c)}F(!1),l(e)};Object(i.useEffect)((function(){m&&(F(!1),C(!0),f("/posts?userId="+m.id).then((function(e){M(e,!1)})).catch((function(){return M(o,!0)})).finally((function(){return C(!1)})))}),[m]);return Object(N.jsx)("main",{className:"section",children:Object(N.jsx)("div",{className:"container",children:Object(N.jsxs)("div",{className:"tile is-ancestor",children:[Object(N.jsx)("div",{className:"tile is-parent",children:Object(N.jsxs)("div",{className:"tile is-child box is-success",children:[Object(N.jsx)("div",{className:"block",children:Object(N.jsx)(T,{users:s,selectedUser:m,onUserSelect:B})}),Object(N.jsxs)("div",{className:"block","data-cy":"MainContent",children:[!m&&Object(N.jsx)("p",{"data-cy":"NoSelectedUser",children:"No user selected"}),g&&Object(N.jsx)(v,{}),P&&D&&Object(N.jsx)(I,{data:D}),o.length>0&&!P&&!g&&Object(N.jsx)(k,{posts:o,onSelectPost:function(e){O&&O.id===e.id?x(null):x(e)}})]})]})}),Object(N.jsx)(w,{selectedPost:O})]})})})};n.a.render(Object(N.jsx)(F,{}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.1cdc42d6.chunk.js.map