(this["webpackJsonptrading-bot"]=this["webpackJsonptrading-bot"]||[]).push([[0],{23:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(7),r=n.n(a),s=n(12),o=n(8),c=n(9),i=n(11),l=n(10),u=n(1),b=n(3),d=n.n(b),j=n(15),h=n.n(j),m=(n(23),n(31)),O=n(32),p=n(33),y=n(34),f=n(35),v=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={dateAndTimeUTC:null},a}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this;setInterval((function(){e.setState({dateAndTimeUTC:Date(Date.now())})}),1e3)}},{key:"getHoursUntilMarketsOpen",value:function(){var e=new Date(Date.now()),t=(e.getTimezoneOffset()- -300)/60,n=(e.getHours()>16?24-e.getHours()+9.5:e.getHours()<9.5?9.5-e.getHours():-1e3)+t;return console.log(n),n>0?Object(u.jsxs)("p",{children:["NYSE Opens in : ",n," hours"]}):Object(u.jsx)("p",{children:"NYSE Markets Status: Open"})}},{key:"render",value:function(){return Object(u.jsx)(m.a,{children:Object(u.jsxs)(O.a,{children:[Object(u.jsx)(p.a,{color:"light",light:!0,expand:"md",md:"auto",children:Object(u.jsx)(y.a,{href:"/",children:"Trading Bot"})}),Object(u.jsxs)(f.a,{md:"auto",children:[Object(u.jsx)(O.a,{children:Object(u.jsx)("h6",{children:this.state.dateAndTimeUTC})}),Object(u.jsx)(O.a,{children:this.getHoursUntilMarketsOpen()})]})]})})}}]),n}(d.a.Component),x=n(14),g=n.n(x),k=n(36),C=n(37),w=n(38),D=n(39),S=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={symbol:a.props.symbol,name:a.props.name,currentPrice:0,highPriceDay:0,lowPriceDay:0,openPriceDay:0,previousDayClosePrice:0,mic:"",marketOpen:!1,historyPeriod:"D",historyDay:null,historyWeek:null,historyMonth:null,historyHalfYear:null,historyYear:null,historyAllTime:null},console.log("Created a stock object! "+a.state.name),a}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=Object(s.a)(r.a.mark((function e(){var t=this;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setInterval(Object(s.a)(r.a.mark((function e(){var n,a,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://finnhub.io/api/v1/quote?symbol="+t.state.symbol+"&token=bv184tv48v6p0f6idl20");case 2:return n=e.sent,e.next=5,n.json();case 5:a=e.sent,console.log(a),t.setState({currentPrice:a.c}),s=document.getElementById(t.state.symbol).getContext("2d"),new g.a(s,{type:"line",data:{labels:[],datasets:[{label:t.state.symbol,backgroundColor:"rgb(100%, 54.9%, 0%)",borderColor:"rgb(15.1%, 63.6%, 15.1%)",data:[]}]},options:{}});case 10:case"end":return e.stop()}}),e)}))),3e3);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(u.jsxs)(k.a,{children:[Object(u.jsx)(C.a,{children:Object(u.jsx)(m.a,{children:Object(u.jsxs)(O.a,{children:[Object(u.jsxs)(f.a,{md:"auto",children:[Object(u.jsx)(w.a,{tag:"h5",children:this.state.name}),Object(u.jsx)(D.a,{tag:"h6",className:"mb-2 text-muted",children:this.state.currentPrice})]}),Object(u.jsx)(f.a,{md:"auto",children:Object(u.jsx)(w.a,{tag:"h6",children:this.state.symbol})})]})})}),Object(u.jsx)("canvas",{id:this.state.symbol})]})}}]),n}(b.Component),M=(n(28),n(14)),P=n(29),T=(d.a.Component,function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).state={},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=Object(s.a)(r.a.mark((function e(){var t,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=document.getElementById("myChart").getContext("2d"),n=new M(t,{type:"line",data:{labels:[],datasets:[{label:"My First dataset",backgroundColor:"rgb(255, 99, 132)",borderColor:"rgb(255, 99, 132)",data:[]}]},options:{}}),console.log(n);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(u.jsx)("h2",{children:"Graph From chart.js"})}}]),n}(d.a.Component)),A=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={stockSymbol:"GOOGL"},a}return Object(c.a)(n,[{key:"componentDidMount",value:function(){console.log(this.state.stockSymbol)}},{key:"render",value:function(){return this.state.stockSymbol=document.getElementById("stockSymbol"),console.log(this.state.stockSymbol),Object(u.jsx)("div",{className:"page",children:Object(u.jsxs)("div",{className:"header",children:[Object(u.jsx)(v,{}),Object(u.jsx)(S,{name:"Apple",symbol:"AAPL"}),Object(u.jsx)(T,{})]})})}}]),n}(d.a.Component);h.a.render(Object(u.jsx)(A,{}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.00eac7c2.chunk.js.map