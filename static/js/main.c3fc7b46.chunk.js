(this.webpackJsonpuptime=this.webpackJsonpuptime||[]).push([[0],{171:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(59),r=a.n(l),i=(a(71),a(8)),c=a(9),m=a(11),u=a(10),s=a(12),p=a(63),h=a(13),S=a(16),d=function(e){function t(e){var a;Object(i.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={on:!1,main:!1,open:!1,start:!1,end:!1,timePast:"",input:!1,inputValue:"",inputStartMillisec:"",inputStart:"",inputEnd:"",value:"",openStart:"",openEnd:"",hasPassed:!1,openComponent:!1,compDidMount:!1,startMilis:""},a.handleChange=a.handleChange.bind(Object(S.a)(a));var n=localStorage.getItem("hourPrice"),o=localStorage.getItem("firstShiftStart"),l=localStorage.getItem("firstShiftEnd"),r=localStorage.getItem("secondShiftStart"),c=localStorage.getItem("secondShiftEnd"),s=localStorage.getItem("thirdShiftStart"),p=localStorage.getItem("thirdShiftEnd");return a.msToTime=function(e){parseInt(e%1e3/100);var t=parseInt(e/1e3%60),a=parseInt(e/6e4%60),n=parseInt(e/36e5%24);return(n=n<10?"0"+n:n)+":"+(a=a<10?"0"+a:a)+":"+(t=t<10?"0"+t:t)},a.openPrice=function(e){return(e/1e3/60*(Number(n)/60)).toFixed(2)+"$"},a.openPriceTimer=function(e){return(e/1e3/60*(Number(n)/60)).toFixed(2)+"$"},a.normalPrice=function(e){return 60*(e/Number(n))*60*1e3+a.state.inputStartMillisec},a.normalPriceLS=function(e){var t=60*(e/Number(n))*60*1e3+Number(localStorage.getItem(a.props.nmb+"normalStart"));return console.log(a.msToTime(t)),t},a.over=function(){var e=localStorage.getItem(a.props.nmb+"normalStart"),t=a.normalPrice(localStorage.getItem(a.props.nmb+"timePrice"));return a.msToTime(e+t)},a.toggle=function(){a.setState({on:!a.state.on})},a.toggleOpen=function(){a.setState({on:!a.state.on,open:!a.state.open,main:!a.state.main})},a.toggleStart=function(){a.setState({open:!a.state.open,start:!a.state.start,openStart:Date.now()}),localStorage.setItem(a.props.nmb+"started",Date.now()),localStorage.setItem(a.props.nmb+"normalEnd",24)},a.toggleEnd=function(){var e=[localStorage.getItem(a.props.nmb)];a.setState({start:!a.state.start,end:!a.state.end,openEnd:Date.now(),timePast:""}),!1!==a.state.hasPassed&&a.setState({hasPassed:!a.state.hasPassed}),localStorage.setItem(a.props.nmb,Date.now()-a.state.openStart);var t=[localStorage.getItem(a.props.nmb)].concat(e);localStorage.setItem(a.props.nmb,t),localStorage.removeItem(a.props.nmb+"started"),localStorage.removeItem(a.props.nmb+"normalEnd");var n=(new Date).getHours();if(Number(n)>=o&&Number(n)<l){localStorage.setItem(a.props.nmb+"firstShift",Date.now()-a.state.openStart);var i=[localStorage.getItem(a.props.nmb+"firstShift")].concat(e);localStorage.setItem(a.props.nmb+"firstShift",i)}if(Number(n)>=r&&Number(n)<c){localStorage.setItem(a.props.nmb+"secondShift",Date.now()-a.state.openStart);var m=[localStorage.getItem(a.props.nmb+"secondShift")].concat(e);localStorage.setItem(a.props.nmb+"secondShift",m)}if(Number(n)>=s&&Number(n)<p){localStorage.setItem(a.props.nmb+"thirdShift",Date.now()-a.state.openStart);var u=[localStorage.getItem(a.props.nmb+"thirdShift")].concat(e);localStorage.setItem(a.props.nmb+"thirdShift",u)}},a.toggleClose=function(){a.setState({end:!a.state.end,main:!a.state.main,timePast:""})},a.inputPay=function(e){if("Enter"===e.key){e.preventDefault(),a.setState({input:!a.state.input,main:!a.state.main,on:!a.state.on,inputStartMillisec:Date.now(),inputStart:a.msToTime(Date.now()),value:a.props.value});var t=[localStorage.getItem(a.props.nmb)];localStorage.setItem(a.props.nmb,(a.normalPrice(a.state.inputValue)-a.state.inputStartMillisec).toFixed(0));var n=[localStorage.getItem(a.props.nmb)].concat(t);localStorage.setItem(a.props.nmb,n),localStorage.setItem(a.props.nmb+"normal",(a.normalPrice(a.state.inputValue)-a.state.inputStartMillisec).toFixed(0)),localStorage.setItem(a.props.nmb+"normalStart",Date.now()),localStorage.setItem(a.props.nmb+"timePrice",a.state.inputValue);var i=a.normalPriceLS(localStorage.getItem(a.props.nmb+"timePrice")),m=new Date(i).getHours(),u=new Date(i).getMinutes();if(localStorage.setItem(a.props.nmb+"normalEnd",m+"."+u),Number(m)>=o&&Number(m)<l){var h=[localStorage.getItem(a.props.nmb+"firstShift")].filter((function(e){return null!==e}));localStorage.setItem(a.props.nmb+"firstShift",(a.normalPrice(a.state.inputValue)-a.state.inputStartMillisec).toFixed(0));var S=[localStorage.getItem(a.props.nmb+"firstShift")].concat(h).filter((function(e){return null!==e}));localStorage.setItem(a.props.nmb+"firstShift",S)}if(Number(m)>=r&&Number(m)<c){var d=[localStorage.getItem(a.props.nmb+"secondShift")];localStorage.setItem(a.props.nmb+"secondShift",(a.normalPrice(a.state.inputValue)-a.state.inputStartMillisec).toFixed(0));var g=[localStorage.getItem(a.props.nmb+"secondShift")].concat(d);localStorage.setItem(a.props.nmb+"secondShift",g)}if(Number(m)>=s&&Number(m)<p){var f=[localStorage.getItem(a.props.nmb+"thirdShift")];localStorage.setItem(a.props.nmb+"thirdShift",(a.normalPrice(a.state.inputValue)-a.state.inputStartMillisec).toFixed(0));var E=[localStorage.getItem(a.props.nmb+"thirdShift")].concat(f);localStorage.setItem(a.props.nmb+"thirdShift",E)}}},a.toggleCloseInput=function(){a.setState({input:!a.state.input,main:!a.state.main,inputEnd:""}),localStorage.removeItem(a.props.nmb+"normal"),localStorage.removeItem(a.props.nmb+"normalStart"),localStorage.removeItem(a.props.nmb+"normalEnd"),localStorage.removeItem(a.props.nmb+"timePrice")},a.hasPassed=function(){a.setState({hasPassed:!a.state.hasPassed})},a}return Object(s.a)(t,e),Object(c.a)(t,[{key:"handleChange",value:function(e){this.setState({inputValue:e.target.value})}},{key:"componentDidMount",value:function(){this.setState({openStart:localStorage.getItem(this.props.nmb+"started")}),null!==localStorage.getItem(this.props.nmb+"started")&&this.setState({main:!this.state.main,start:!this.state.start}),null!==localStorage.getItem(this.props.nmb+"normal")&&this.setState({main:!this.state.main,input:!this.state.input,compDidMount:!this.state.compDidMount})}},{key:"render",value:function(){return o.a.createElement("div",{style:{border:"1px solid black",marginBottom:"40px"}},!this.state.main&&null===localStorage.getItem(this.props.nmb+"started")&&o.a.createElement("button",{onClick:this.toggle},"".concat(this.props.nmb)),this.state.on&&o.a.createElement("div",null,o.a.createElement("input",{type:"number",placeholder:"payment",onChange:this.handleChange,onKeyDown:this.inputPay.bind(this)}),o.a.createElement("button",{onClick:this.toggleOpen.bind(this)},"Open")),this.state.open&&o.a.createElement("div",null,o.a.createElement("button",{onClick:this.toggleStart.bind(this)},"Start")),this.state.start&&o.a.createElement("div",null,o.a.createElement("h1",null,"Component ",this.props.nmb),o.a.createElement("h2",null,"Time started: ",this.msToTime(this.state.openStart)),o.a.createElement("button",{onClick:this.hasPassed.bind(this)},"Time/price untill now"),this.state.hasPassed&&o.a.createElement("div",null,o.a.createElement("h2",null,"Time past: ",this.msToTime(Date.now()-this.state.openStart)),o.a.createElement("h2",null,"Price: ",this.openPriceTimer(Date.now()-this.state.openStart))),o.a.createElement("button",{onClick:this.toggleEnd.bind(this)},"End")),this.state.end&&o.a.createElement("div",null,o.a.createElement("h1",null,"Component ",this.props.nmb),o.a.createElement("h2",null,"Started: ",this.msToTime(this.state.openStart)),o.a.createElement("h2",null,"Finished: ",this.msToTime(this.state.openEnd)),o.a.createElement("h2",null,"Time played: ",this.msToTime(this.state.openEnd-this.state.openStart)),o.a.createElement("h2",null,"Price: ",this.openPrice(this.state.openEnd-this.state.openStart)),o.a.createElement("button",{onClick:this.toggleClose.bind(this)},"Close")),this.state.input&&o.a.createElement("div",null,o.a.createElement("h1",null,"Component ",this.props.nmb),o.a.createElement("h2",null,"Time Start: ",null!==localStorage.getItem(this.props.nmb+"normal")&&!0===this.state.compDidMount?this.msToTime(localStorage.getItem(this.props.nmb+"normalStart")):this.state.inputStart),o.a.createElement("h2",null,"Time End: ",null!==localStorage.getItem(this.props.nmb+"normal")&&!0===this.state.compDidMount?this.msToTime(this.normalPriceLS(localStorage.getItem(this.props.nmb+"timePrice"))):this.msToTime(this.normalPrice(this.state.inputValue))),o.a.createElement("h2",null,"Price: ",null!==localStorage.getItem(this.props.nmb+"normal")&&!0===this.state.compDidMount?localStorage.getItem(this.props.nmb+"timePrice"):this.state.inputValue),o.a.createElement("button",{onClick:this.toggleCloseInput.bind(this)},"Close")))}}]),t}(n.Component),g=a(60),f=function(e){function t(e){var a;Object(i.a)(this,t),a=Object(m.a)(this,Object(u.a)(t).call(this,e));var n=localStorage.getItem("1normalEnd"),o=localStorage.getItem("2normalEnd"),l=localStorage.getItem("3normalEnd"),r=localStorage.getItem("4normalEnd"),c=localStorage.getItem("5normalEnd"),s=localStorage.getItem("6normalEnd"),p=localStorage.getItem("7normalEnd"),h=localStorage.getItem("8normalEnd"),S=localStorage.getItem("9normalEnd"),d=localStorage.getItem("10normalEnd");return a.state={chartData:{labels:["1","2","3","4","5","6","7","8","9","10"],datasets:[{data:[n,o,l,r,c,s,p,h,S,d],backgroundColor:"blue"}],scales:{yAxes:[{ticks:{beginAtZero:!0}}]}}},a}return Object(s.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(g.a,{data:this.state.chartData,options:{legend:{display:!1},tooltips:{callbacks:{label:function(e){return e.yLabel}}},animation:{duration:0},hover:{animationDuration:0},responsiveAnimationDuration:0,maintainAspectRatio:!1}}))}}]),t}(n.Component),E=function(e){function t(e){var a;Object(i.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).hourPrice=function(){localStorage.setItem("hourPrice",a.state.e)},a.firstShiftStart=function(){var e=document.getElementById("firstShiftStart"),t=e.options[e.selectedIndex].value;localStorage.setItem("firstShiftStart",t),alert("First shift start succesfully entered!")},a.firstShiftEnd=function(){var e=document.getElementById("firstShiftEnd"),t=e.options[e.selectedIndex].value;localStorage.setItem("firstShiftEnd",t),alert("First shift end succesfully entered!")},a.secondShiftStart=function(){var e=document.getElementById("secondShiftStart"),t=e.options[e.selectedIndex].value;localStorage.setItem("secondShiftStart",t),alert("Second shift start succesfully entered!")},a.secondShiftEnd=function(){var e=document.getElementById("secondShiftEnd"),t=e.options[e.selectedIndex].value;localStorage.setItem("secondShiftEnd",t),alert("Second shift end succesfully entered!")},a.thirdShiftStart=function(){var e=document.getElementById("thirdShiftStart"),t=e.options[e.selectedIndex].value;localStorage.setItem("thirdShiftStart",t),alert("Third shift start succesfully entered!")},a.thirdShiftEnd=function(){var e=document.getElementById("thirdShiftEnd"),t=e.options[e.selectedIndex].value;localStorage.setItem("thirdShiftEnd",t),alert("Third shift end succesfully entered!")},a.state={e:"",chart:!1},a.indexed=a.indexed.bind(Object(S.a)(a)),a.handleChange=function(e){a.setState({e:e.target.value})};var n=localStorage.getItem("hourPrice"),o=null!==localStorage.getItem(1)?localStorage.getItem(1).split(",").reduce((function(e,t){return Number(e)+Number(t)})):0,l=null!==localStorage.getItem(2)?localStorage.getItem(2).split(",").reduce((function(e,t){return Number(e)+Number(t)})):0,r=null!==localStorage.getItem(3)?localStorage.getItem(3).split(",").reduce((function(e,t){return Number(e)+Number(t)})):0,c=null!==localStorage.getItem("1firstShift")?localStorage.getItem("1firstShift").split(",").reduce((function(e,t){return Number(e)+Number(t)})):0,s=null!==localStorage.getItem("1secondShift")?localStorage.getItem("1secondShift").split(",").reduce((function(e,t){return Number(e)+Number(t)})):0,p=null!==localStorage.getItem("1thirdShift")?localStorage.getItem("1thirdShift").split(",").reduce((function(e,t){return Number(e)+Number(t)})):0,h=null!==localStorage.getItem("2firstShift")?localStorage.getItem("2firstShift").split(",").reduce((function(e,t){return Number(e)+Number(t)})):0,d=null!==localStorage.getItem("2secondShift")?localStorage.getItem("2secondShift").split(",").reduce((function(e,t){return Number(e)+Number(t)})):0,g=null!==localStorage.getItem("2thirdShift")?localStorage.getItem("2thirdShift").split(",").reduce((function(e,t){return Number(e)+Number(t)})):0,f=null!==localStorage.getItem("3firstShift")?localStorage.getItem("3firstShift").split(",").reduce((function(e,t){return Number(e)+Number(t)})):0,E=null!==localStorage.getItem("3secondShift")?localStorage.getItem("3secondShift").split(",").reduce((function(e,t){return Number(e)+Number(t)})):0,b=null!==localStorage.getItem("3thirdShift")?localStorage.getItem("3thirdShift").split(",").reduce((function(e,t){return Number(e)+Number(t)})):0,v=null!==localStorage.getItem("4firstShift")?localStorage.getItem("4firstShift").split(",").reduce((function(e,t){return Number(e)+Number(t)})):0,I=null!==localStorage.getItem("4secondShift")?localStorage.getItem("4secondShift").split(",").reduce((function(e,t){return Number(e)+Number(t)})):0,N=null!==localStorage.getItem("4thirdShift")?localStorage.getItem("4thirdShift").split(",").reduce((function(e,t){return Number(e)+Number(t)})):0,P=null!==localStorage.getItem("5firstShift")?localStorage.getItem("5firstShift").split(",").reduce((function(e,t){return Number(e)+Number(t)})):0,C=null!==localStorage.getItem("5secondShift")?localStorage.getItem("5secondShift").split(",").reduce((function(e,t){return Number(e)+Number(t)})):0,y=null!==localStorage.getItem("5thirdShift")?localStorage.getItem("5thirdShift").split(",").reduce((function(e,t){return Number(e)+Number(t)})):0,T=null!==localStorage.getItem("6firstShift")?localStorage.getItem("6firstShift").split(",").reduce((function(e,t){return Number(e)+Number(t)})):0,x=null!==localStorage.getItem("6secondShift")?localStorage.getItem("6secondShift").split(",").reduce((function(e,t){return Number(e)+Number(t)})):0,D=null!==localStorage.getItem("6thirdShift")?localStorage.getItem("6thirdShift").split(",").reduce((function(e,t){return Number(e)+Number(t)})):0,k=null!==localStorage.getItem("7firstShift")?localStorage.getItem("7firstShift").split(",").reduce((function(e,t){return Number(e)+Number(t)})):0,O=null!==localStorage.getItem("7secondShift")?localStorage.getItem("7secondShift").split(",").reduce((function(e,t){return Number(e)+Number(t)})):0,j=null!==localStorage.getItem("7thirdShift")?localStorage.getItem("7thirdShift").split(",").reduce((function(e,t){return Number(e)+Number(t)})):0,w=null!==localStorage.getItem("8firstShift")?localStorage.getItem("8firstShift").split(",").reduce((function(e,t){return Number(e)+Number(t)})):0,F=null!==localStorage.getItem("8secondShift")?localStorage.getItem("8secondShift").split(",").reduce((function(e,t){return Number(e)+Number(t)})):0,M=null!==localStorage.getItem("8thirdShift")?localStorage.getItem("8thirdShift").split(",").reduce((function(e,t){return Number(e)+Number(t)})):0,R=null!==localStorage.getItem("9firstShift")?localStorage.getItem("9firstShift").split(",").reduce((function(e,t){return Number(e)+Number(t)})):0,V=null!==localStorage.getItem("9secondShift")?localStorage.getItem("9secondShift").split(",").reduce((function(e,t){return Number(e)+Number(t)})):0,$=null!==localStorage.getItem("9thirdShift")?localStorage.getItem("9thirdShift").split(",").reduce((function(e,t){return Number(e)+Number(t)})):0,B=null!==localStorage.getItem("10firstShift")?localStorage.getItem("10firstShift").split(",").reduce((function(e,t){return Number(e)+Number(t)})):0,A=null!==localStorage.getItem("10secondShift")?localStorage.getItem("10secondShift").split(",").reduce((function(e,t){return Number(e)+Number(t)})):0,L=null!==localStorage.getItem("10thirdShift")?localStorage.getItem("10thirdShift").split(",").reduce((function(e,t){return Number(e)+Number(t)})):0;return a.shiftReport1=function(){var e=((Number(c)+Number(h)+Number(f)+Number(v)+Number(P)+Number(T)+Number(k)+Number(w)+Number(R)+Number(B))/36e5*Number(n)).toFixed(2);return console.log(e+"$"),e+"$"},a.shiftReport2=function(){var e=((Number(s)+Number(d)+Number(E)+Number(I)+Number(C)+Number(x)+Number(O)+Number(F)+Number(V)+Number(A))/36e5*Number(n)).toFixed(2);return console.log(e+"$"),e+"$"},a.shiftReport3=function(){var e=((Number(p)+Number(g)+Number(b)+Number(N)+Number(y)+Number(D)+Number(j)+Number(M)+Number($)+Number(L))/36e5*Number(n)).toFixed(2);return console.log(e+"$"),e+"$"},a.dailyReport=function(){var e=((Number(o)+Number(l)+Number(r))/36e5*Number(n)).toFixed(2);return console.log(e+"$"),e+"$"},a.toggle=function(){a.setState({chart:!a.state.chart})},a}return Object(s.a)(t,e),Object(c.a)(t,[{key:"indexed",value:function(e){return e}},{key:"render",value:function(){return o.a.createElement("div",{className:"components"},o.a.createElement(d,{className:"comp",nmb:this.indexed(1)}),o.a.createElement(d,{className:"comp",nmb:this.indexed(2)}),o.a.createElement(d,{className:"comp",nmb:this.indexed(3)}),o.a.createElement(d,{className:"comp",nmb:this.indexed(4)}),o.a.createElement(d,{className:"comp",nmb:this.indexed(5)}),o.a.createElement(d,{className:"comp",nmb:this.indexed(6)}),o.a.createElement(d,{className:"comp",nmb:this.indexed(7)}),o.a.createElement(d,{className:"comp",nmb:this.indexed(8)}),o.a.createElement(d,{className:"comp",nmb:this.indexed(9)}),o.a.createElement(d,{className:"comp",nmb:this.indexed(10)}),o.a.createElement("div",{id:"adminDash"},o.a.createElement("h2",null,"Admin Dashboard"),o.a.createElement("button",{onClick:this.toggle},"See Chart"),this.state.chart&&o.a.createElement(f,null),o.a.createElement("div",{id:"reports"},o.a.createElement("h2",null,"Reports"),o.a.createElement("h4",null,"Daily report"),this.dailyReport(),o.a.createElement("h5",null,"Shifts reports"),o.a.createElement("h6",null,"First shift: ",this.shiftReport1()),o.a.createElement("h6",null,"Second shift: ",this.shiftReport2()),o.a.createElement("button",{onClick:this.shiftReport3},"Shift3"),o.a.createElement("h6",null,"Third shift: ",this.shiftReport3())),o.a.createElement("h2",null,"Techical adjustments"),o.a.createElement("input",{type:"number",placeholder:"Enter hour price and press Enter",value:this.state.e,onChange:this.handleChange.bind(this),onKeyDown:this.hourPrice}),o.a.createElement("div",{id:"firstShift"},o.a.createElement("select",{id:"firstShiftStart"},o.a.createElement("option",{value:"None"},"Select first shift start"),o.a.createElement("option",{value:"1"},"1"),o.a.createElement("option",{value:"2"},"2"),o.a.createElement("option",{value:"3"},"3"),o.a.createElement("option",{value:"4"},"4"),o.a.createElement("option",{value:"5"},"5"),o.a.createElement("option",{value:"6"},"6"),o.a.createElement("option",{value:"7"},"7"),o.a.createElement("option",{value:"8"},"8"),o.a.createElement("option",{value:"9"},"9"),o.a.createElement("option",{value:"10"},"10"),o.a.createElement("option",{value:"11"},"11"),o.a.createElement("option",{value:"12"},"12"),o.a.createElement("option",{value:"13"},"13"),o.a.createElement("option",{value:"14"},"14"),o.a.createElement("option",{value:"15"},"15"),o.a.createElement("option",{value:"16"},"16"),o.a.createElement("option",{value:"17"},"17"),o.a.createElement("option",{value:"18"},"18"),o.a.createElement("option",{value:"19"},"19"),o.a.createElement("option",{value:"20"},"20"),o.a.createElement("option",{value:"21"},"21"),o.a.createElement("option",{value:"22"},"22"),o.a.createElement("option",{value:"23"},"23"),o.a.createElement("option",{value:"24"},"24")),o.a.createElement("button",{id:"btnFirstShiftStart",onClick:this.firstShiftStart},"Select")),o.a.createElement("div",null,o.a.createElement("select",{id:"firstShiftEnd"},o.a.createElement("option",{value:"None"},"Select first shift end"),o.a.createElement("option",{value:"1"},"1"),o.a.createElement("option",{value:"2"},"2"),o.a.createElement("option",{value:"3"},"3"),o.a.createElement("option",{value:"4"},"4"),o.a.createElement("option",{value:"5"},"5"),o.a.createElement("option",{value:"6"},"6"),o.a.createElement("option",{value:"7"},"7"),o.a.createElement("option",{value:"8"},"8"),o.a.createElement("option",{value:"9"},"9"),o.a.createElement("option",{value:"10"},"10"),o.a.createElement("option",{value:"11"},"11"),o.a.createElement("option",{value:"12"},"12"),o.a.createElement("option",{value:"13"},"13"),o.a.createElement("option",{value:"14"},"14"),o.a.createElement("option",{value:"15"},"15"),o.a.createElement("option",{value:"16"},"16"),o.a.createElement("option",{value:"17"},"17"),o.a.createElement("option",{value:"18"},"18"),o.a.createElement("option",{value:"19"},"19"),o.a.createElement("option",{value:"20"},"20"),o.a.createElement("option",{value:"21"},"21"),o.a.createElement("option",{value:"22"},"22"),o.a.createElement("option",{value:"23"},"23"),o.a.createElement("option",{value:"24"},"24")),o.a.createElement("button",{id:"btnFirstShiftEnd",onClick:this.firstShiftEnd},"Select")),o.a.createElement("div",{id:"secondShift"},o.a.createElement("select",{id:"secondShiftStart"},o.a.createElement("option",{value:"None"},"Select second shift start"),o.a.createElement("option",{value:"1"},"1"),o.a.createElement("option",{value:"2"},"2"),o.a.createElement("option",{value:"3"},"3"),o.a.createElement("option",{value:"4"},"4"),o.a.createElement("option",{value:"5"},"5"),o.a.createElement("option",{value:"6"},"6"),o.a.createElement("option",{value:"7"},"7"),o.a.createElement("option",{value:"8"},"8"),o.a.createElement("option",{value:"9"},"9"),o.a.createElement("option",{value:"10"},"10"),o.a.createElement("option",{value:"11"},"11"),o.a.createElement("option",{value:"12"},"12"),o.a.createElement("option",{value:"13"},"13"),o.a.createElement("option",{value:"14"},"14"),o.a.createElement("option",{value:"15"},"15"),o.a.createElement("option",{value:"16"},"16"),o.a.createElement("option",{value:"17"},"17"),o.a.createElement("option",{value:"18"},"18"),o.a.createElement("option",{value:"19"},"19"),o.a.createElement("option",{value:"20"},"20"),o.a.createElement("option",{value:"21"},"21"),o.a.createElement("option",{value:"22"},"22"),o.a.createElement("option",{value:"23"},"23"),o.a.createElement("option",{value:"24"},"24")),o.a.createElement("button",{id:"btnSecondShiftStart",onClick:this.secondShiftStart},"Select")),o.a.createElement("div",null,o.a.createElement("select",{id:"secondShiftEnd"},o.a.createElement("option",{value:"None"},"Select second shift end"),o.a.createElement("option",{value:"1"},"1"),o.a.createElement("option",{value:"2"},"2"),o.a.createElement("option",{value:"3"},"3"),o.a.createElement("option",{value:"4"},"4"),o.a.createElement("option",{value:"5"},"5"),o.a.createElement("option",{value:"6"},"6"),o.a.createElement("option",{value:"7"},"7"),o.a.createElement("option",{value:"8"},"8"),o.a.createElement("option",{value:"9"},"9"),o.a.createElement("option",{value:"10"},"10"),o.a.createElement("option",{value:"11"},"11"),o.a.createElement("option",{value:"12"},"12"),o.a.createElement("option",{value:"13"},"13"),o.a.createElement("option",{value:"14"},"14"),o.a.createElement("option",{value:"15"},"15"),o.a.createElement("option",{value:"16"},"16"),o.a.createElement("option",{value:"17"},"17"),o.a.createElement("option",{value:"18"},"18"),o.a.createElement("option",{value:"19"},"19"),o.a.createElement("option",{value:"20"},"20"),o.a.createElement("option",{value:"21"},"21"),o.a.createElement("option",{value:"22"},"22"),o.a.createElement("option",{value:"23"},"23"),o.a.createElement("option",{value:"24"},"24")),o.a.createElement("button",{id:"btnSecondShiftEnd",onClick:this.secondShiftEnd},"Select")),o.a.createElement("div",{id:"thirdShift"},o.a.createElement("select",{id:"thirdShiftStart"},o.a.createElement("option",{value:"None"},"Select third shift start"),o.a.createElement("option",{value:"1"},"1"),o.a.createElement("option",{value:"2"},"2"),o.a.createElement("option",{value:"3"},"3"),o.a.createElement("option",{value:"4"},"4"),o.a.createElement("option",{value:"5"},"5"),o.a.createElement("option",{value:"6"},"6"),o.a.createElement("option",{value:"7"},"7"),o.a.createElement("option",{value:"8"},"8"),o.a.createElement("option",{value:"9"},"9"),o.a.createElement("option",{value:"10"},"10"),o.a.createElement("option",{value:"11"},"11"),o.a.createElement("option",{value:"12"},"12"),o.a.createElement("option",{value:"13"},"13"),o.a.createElement("option",{value:"14"},"14"),o.a.createElement("option",{value:"15"},"15"),o.a.createElement("option",{value:"16"},"16"),o.a.createElement("option",{value:"17"},"17"),o.a.createElement("option",{value:"18"},"18"),o.a.createElement("option",{value:"19"},"19"),o.a.createElement("option",{value:"20"},"20"),o.a.createElement("option",{value:"21"},"21"),o.a.createElement("option",{value:"22"},"22"),o.a.createElement("option",{value:"23"},"23"),o.a.createElement("option",{value:"24"},"24")),o.a.createElement("button",{id:"btnThirdShiftStart",onClick:this.thirdShiftStart},"Select")),o.a.createElement("div",null,o.a.createElement("select",{id:"thirdShiftEnd"},o.a.createElement("option",{value:"None"},"Select third shift end"),o.a.createElement("option",{value:"1"},"1"),o.a.createElement("option",{value:"2"},"2"),o.a.createElement("option",{value:"3"},"3"),o.a.createElement("option",{value:"4"},"4"),o.a.createElement("option",{value:"5"},"5"),o.a.createElement("option",{value:"6"},"6"),o.a.createElement("option",{value:"7"},"7"),o.a.createElement("option",{value:"8"},"8"),o.a.createElement("option",{value:"9"},"9"),o.a.createElement("option",{value:"10"},"10"),o.a.createElement("option",{value:"11"},"11"),o.a.createElement("option",{value:"12"},"12"),o.a.createElement("option",{value:"13"},"13"),o.a.createElement("option",{value:"14"},"14"),o.a.createElement("option",{value:"15"},"15"),o.a.createElement("option",{value:"16"},"16"),o.a.createElement("option",{value:"17"},"17"),o.a.createElement("option",{value:"18"},"18"),o.a.createElement("option",{value:"19"},"19"),o.a.createElement("option",{value:"20"},"20"),o.a.createElement("option",{value:"21"},"21"),o.a.createElement("option",{value:"22"},"22"),o.a.createElement("option",{value:"23"},"23"),o.a.createElement("option",{value:"24"},"24")),o.a.createElement("button",{id:"btnThirdShiftEnd",onClick:this.thirdShiftEnd},"Select"))))}}]),t}(n.Component),b=a(62),v=a.n(b)()(),I=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement(p.a,{history:v,basename:"/StefanVasic123/uptime"},o.a.createElement("div",null,o.a.createElement(h.c,null,o.a.createElement(h.a,{path:"/",exact:!0,component:Object(h.f)(E)}),o.a.createElement(h.a,{path:"/comp",exact:!0,component:Object(h.f)(d)}))))}}]),t}(n.Component);r.a.render(o.a.createElement(I,null),document.getElementById("root"))},66:function(e,t,a){e.exports=a(171)},71:function(e,t,a){}},[[66,1,2]]]);
//# sourceMappingURL=main.c3fc7b46.chunk.js.map