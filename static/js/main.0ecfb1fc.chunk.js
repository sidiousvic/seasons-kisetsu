(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e,t,a){e.exports=a.p+"static/media/spring.c40db678.gif"},function(e,t,a){e.exports=a.p+"static/media/summer.9298b8aa.gif"},function(e,t,a){e.exports=a.p+"static/media/fall.3549beaa.gif"},function(e,t,a){e.exports=a.p+"static/media/winter.23ab9479.gif"},,,,,,,,function(e,t,a){e.exports=a(19)},,,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(6),s=a(7),i=a(10),r=a(8),o=a(11),l=a(0),c=a.n(l),m=a(9),u=a.n(m),g=(a(18),a(1)),p=a.n(g),f=a(2),d=a.n(f),w=a(3),b=a.n(w),h=a(4),x=a.n(h),v=function(e){var t=function(e,t){console.log(t);var a={};return 3===t||4===t||5===t?e>0?(a.text="Ume are blossoming")&&(a.image=p.a)&&(a.season="spring"):(a.text="Momiji are falling")&&(a.image=b.a)&&(a.season="Fall"):6===t||7===t||8===t?e>0?(a.text="Koi are swimming")&&(a.image=d.a)&&(a.season="summer"):(a.text="Snow is piling")&&(a.image=x.a)&&(a.season="winter"):9===t||10===t||11===t?e<0?(a.text="Ume are blossoming")&&(a.image=p.a)&&(a.season="spring"):(a.text="Momiji are falling")&&(a.image=b.a)&&(a.season="fall"):12!==t&&1!==t&&2!==t||(e<0?(a.text="Koi are swimming")&&(a.image=d.a)&&(a.season="summer"):(a.text="Snow is piling")&&(a.image=x.a)&&(a.season="winter")),console.log(a),a}(e.lat,9);return c.a.createElement("div",{className:"season-display"},c.a.createElement("h1",null,"It's ",t.season,", ",t.text,c.a.createElement("span",{className:"blink-ellipsis"},"...")),c.a.createElement("img",{alt:"season",src:t.image}))},E=function(e){function t(){var e,a;Object(n.a)(this,t);for(var s=arguments.length,o=new Array(s),l=0;l<s;l++)o[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(r.a)(t)).call.apply(e,[this].concat(o)))).state={lat:null,errMessage:""},a}return Object(o.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.navigator.geolocation.getCurrentPosition(function(t){return e.setState({lat:t.coords.latitude})},function(t){return e.setState({errMessage:t.message})})}},{key:"render",value:function(){return this.state.errMessage||this.state.lat?!this.state.err&&this.state.lat?c.a.createElement(v,{lat:this.state.lat}):this.state.errMessage?c.a.createElement("div",null,"Error: ",this.state.errMessage):void 0:c.a.createElement("div",{className:"season-display"},c.a.createElement("h1",null,"LOADING",c.a.createElement("span",{className:"blink-ellipsis"},"...")))}}]),t}(c.a.Component);u.a.render(c.a.createElement(E,null),document.querySelector("#root"))}],[[12,1,2]]]);
//# sourceMappingURL=main.0ecfb1fc.chunk.js.map