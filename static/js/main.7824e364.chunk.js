(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{205:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(36),r=a.n(i),l=(a(7),a(78)),o=a(6),s=a(13),m=a(11);var u=function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("p",{className:"location"},e.name))};function d(e){return c.a.createElement("p",{className:"weather-desc"},e.description)}function f(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("p",{className:"weather-desc"},"Feels like ",e.feelsLike,"\xba"))}function E(e){return c.a.createElement("div",{className:"temperature-chart"},c.a.createElement("p",{className:"temperature"},e.temp,c.a.createElement("span",{className:"degrees"},"\xba")))}function p(e){return c.a.createElement("div",{className:"sun-desc"},c.a.createElement("p",null,"Sunrise: ",e.sunrise," \xb7 Sunset: ",e.sunset))}var g={icons:{"01d":"wi wi-day-sunny","02d":"wi wi-day-cloudy","03d":"wi wi-cloudy","04d":"wi wi-cloudy","09d":"wi wi-showers","10d":"wi wi-day-rain","11d":"wi wi-day-thunderstorm","13d":"wi wi-day-snow-thunderstorm","50d":"wi wi-fog","01n":"wi wi-day-sunny","02n":"wi wi-day-cloudy","03n":"wi wi-cloudy","04n":"wi wi-cloudy","09n":"wi wi-showers","10n":"wi wi-day-rain","11n":"wi wi-day-thunderstorm","13n":"wi wi-day-snow-thunderstorm","50n":"wi wi-fog"}},w=(a(84),function(e){var t=e.iconId;if(!t)return"na";var a=g.icons[t];return a?c.a.createElement("i",{className:a}):"na"}),y=function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("tr",null,c.a.createElement("td",{className:"day-chart"},e.day),c.a.createElement("td",{className:"icon-chart"},c.a.createElement(w,{iconId:e.iconId})),c.a.createElement("td",{className:"max-chart"},e.temp_max.toFixed(0),"\xba"),c.a.createElement("td",{className:"min-chart"},e.temp_min.toFixed(0),"\xba")))},h=function(e){return new Date(1e3*e).toDateString().slice(0,3)},v=function(e,t){var a=(new Date).toTimeString().slice(0,9).split(":").join("").slice(0,4),n=b(e).toString().slice(0,9).split(":").join(""),c=b(t).toString().slice(0,9).split(":").join("");n=C(n),c=C(c);var i=0;return a>=n&&a<=c?(a=190,i=250):(a="30",i="40"),{background:"linear-gradient(#"+(a.toString(16)+a.toString(16)+i.toString(16))+",#333)",height:"80vh"}},b=function(e){var t=new Date(1e3*e),a=("0"+(t.getMonth()+1)).slice(-2);return t.getHours()+":"+a},C=function(e){return e.toString().length<4?"0"+e:e},k=function(e){var t=e.data;return c.a.createElement("div",null,c.a.createElement("table",{cellSpacing:"0",cellPadding:"0",className:"week-chart"},c.a.createElement("tbody",null,t.list.map((function(e,t){if(t%6===0)return c.a.createElement(y,{key:t,iconId:e.weather[0].icon,day:h(e.dt),temp:e.main.temp,temp_max:e.main.temp_max,temp_min:e.main.temp_min})})))))},S=a(37),x=a.n(S),N=function(e){var t=Object(n.useState)(new Date),a=Object(o.a)(t,2),i=a[0],r=a[1];Object(n.useEffect)((function(){var e=setInterval((function(){return l()}),1e3);return function(){clearInterval(e)}}));var l=function(){r(new Date)};return c.a.createElement(c.a.Fragment,null,c.a.createElement(x.a,{className:"weather-desc",format:"MMMM Do YYYY"}),c.a.createElement(x.a,{className:"weather-desc",format:"hh:mm:ss"},i))},j=a(72),F=function(e){var t=e.data,a=t.list.map((function(e){return h(e.main.dt)})),n=t.list.map((function(e){return e.main.temp}));console.log(t.list);var i={labels:a,datasets:[{label:"Forecast",barPercentage:.5,barThickness:3,maxBarThickness:80,minBarLength:2,backgroundColor:"white",borderSkipped:"top",borderColor:"white",data:n}]};return c.a.createElement(j.a,{data:i,options:{responsive:!0,scales:{xAxes:[{ticks:{fontColor:"#fff"},gridLines:{display:!0,color:"#bcbcf600"}}],yAxes:[{ticks:{fontColor:"#fff",callback:function(e,t,a){return e+" \xba"}},stacked:!0,gridLines:{display:!0,color:"#bcbcf6",drawOnChartArea:!1}}]},legend:{display:!1,labels:{fontColor:"white"}}}})},O=a(74),D=a(75),_=a.n(D).a.create({baseURL:"https://api.openweathermap.org",timeout:6e4}),A=function(e){var t=Object(n.useState)({}),a=Object(o.a)(t,2),i=a[0],r=a[1],l=Object(n.useState)(!1),s=Object(o.a)(l,2),m=s[0],g=s[1];return Object(n.useEffect)((function(){e.city&&function(e,t,a){_.get("/data/2.5/forecast?q=".concat(e,"&cnt=40&units=metric&appid=").concat("bb0eab3815c8289e5325c2c685b025d2")).then((function(e){t(e.data),e.data.list?a(!0):a(!1)}))}(e.city,r,g),console.log("canvas ef",i,e.city,m)}),[e.city]),c.a.createElement(c.a.Fragment,null,m&&i&&c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"weather-canvas",style:v(i.city.sunrise,i.city.sunset)},c.a.createElement("div",{className:"details"},c.a.createElement(O.CSSTransitionGroup,{transitionName:"example",transitionAppear:!0,transitionAppearTimeout:4e3,transitionEnter:!1,transitionLeave:!1},c.a.createElement(u,{name:i.city.name}),c.a.createElement(N,{date:i.list[0].dt}),c.a.createElement(d,{description:i.list[0].weather[0].description}),c.a.createElement(E,{temp:i.list[0].main.temp.toFixed(0),temp_max:i.list[0].main.temp_max.toFixed(0),temp_min:i.list[0].main.temp_min.toFixed(0)}),c.a.createElement(f,{feelsLike:i.list[0].main.feels_like.toFixed(0)}),c.a.createElement(p,{sunset:b(i.city.sunset),sunrise:b(i.city.sunrise)}))),c.a.createElement("div",{className:"chart"},c.a.createElement(F,{data:i})),c.a.createElement("div",{className:"table"},c.a.createElement(k,{data:i})))))};var I=function(e){e.setCity;var t=e.changeCity,a=(e.addCity,e.cityCollection),i=Object(n.useState)(""),r=Object(o.a)(i,2),l=r[0],s=r[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",null,c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),!a.includes(l)&&t(l),s("")}},c.a.createElement("input",{type:"text",placeholder:"enter your city",name:"name",value:l,onChange:function(e){return s(e.target.value)}}),c.a.createElement("input",{type:"submit",value:"+"}))))},L=function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("ul",{className:"delete-list"},e.cityCollection.map((function(t,a){return c.a.createElement("li",{className:"delete-bar",key:a},c.a.createElement("p",null,t),e.cityCollection.length>1&&c.a.createElement("button",{onClick:function(){e.DeleteCity(t)}},c.a.createElement("p",null,"Delete")))}))))},P=function(e){var t=e.changeCity,a=e.cityCollection;return c.a.createElement(c.a.Fragment,null,a.map((function(e,a){return c.a.createElement("li",{key:a},c.a.createElement(s.b,{to:"/"},c.a.createElement("button",{autoFocus:!0,onClick:function(){t(e)}},e)))})))},M=a(40),T=a.n(M),B=function(e){return c.a.createElement(c.a.Fragment,null,e.settingsPageActive?c.a.createElement(s.b,{onClick:function(){return e.setSettingsPageActive(!1)},to:"/"},c.a.createElement("img",{src:T.a,alt:"settingsIcon"})):c.a.createElement(s.b,{onClick:function(){return e.setSettingsPageActive(!0)},to:"/settings"},c.a.createElement("img",{src:T.a,alt:"settingsIcon"})))},Y=function(){var e=Object(n.useState)(null),t=Object(o.a)(e,2),a=t[0],i=t[1],r=Object(n.useState)([]),u=Object(o.a)(r,2),d=u[0],f=u[1],E=Object(n.useState)(!1),p=Object(o.a)(E,2),g=p[0],w=p[1];Object(n.useEffect)((function(){console.log("app ef",a),null===a&&y("Nuuk")}),[a]);var y=function(e){f((function(t){return[].concat(Object(l.a)(t),[e])})),i(e),w(!1)},h=function(e){var t=d.indexOf(e);d.splice(t,1),f(d),y(d[d.length-1])};return c.a.createElement(c.a.Fragment,null,c.a.createElement(s.a,null,c.a.createElement("nav",null,c.a.createElement("div",{id:"search-widget"},c.a.createElement(I,{setCity:i,changeCity:y,addCity:f,cityCollection:d}),c.a.createElement(B,{setSettingsPageActive:w,settingsPageActive:g})),c.a.createElement("ul",null,c.a.createElement(P,{changeCity:y,cityCollection:d}),c.a.createElement("li",null))),c.a.createElement(m.c,null,c.a.createElement(m.a,{exact:!0,path:"/settings",component:function(){return c.a.createElement(L,{cityCollection:d,DeleteCity:h})}}),c.a.createElement(m.a,{exact:!0,path:"/",component:function(){return c.a.createElement(A,{city:a,updateCity:y})}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(Y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},40:function(e,t,a){e.exports=a.p+"static/media/settingsIcon.4b9f9cf2.svg"},7:function(e,t,a){},79:function(e,t,a){e.exports=a(205)},84:function(e,t,a){}},[[79,1,2]]]);
//# sourceMappingURL=main.7824e364.chunk.js.map