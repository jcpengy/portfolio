(this.webpackJsonpportfolio2021=this.webpackJsonpportfolio2021||[]).push([[0],{18:function(e,t,s){},36:function(e,t,s){"use strict";s.r(t);var a=s(2),c=s(12),i=s.n(c),n=(s(27),s(18),s(16)),r=s(19),l=(s(28),s(29),s(6)),o=s(7),j=s(8),d=s(10),b=s(9),m=s.p+"static/media/body.5bf4bbc2.png",h=s(0),p=function(e){Object(d.a)(s,e);var t=Object(b.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(j.a)(s,[{key:"render",value:function(){return Object(h.jsx)("span",{"aria-label":this.props.copy,role:this.props.role,children:this.props.copy.split("").map((function(e,t){var s={"animation-delay":t/20+"s"};return Object(h.jsx)("span",{"aria-hidden":"true",style:s,children:e},t)}))})}}]),s}(a.Component),O=function(e){Object(d.a)(s,e);var t=Object(b.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(j.a)(s,[{key:"render",value:function(){return Object(h.jsx)("h1",{className:"h1 home",children:Object(h.jsx)(p,{copy:"jess peng",role:"heading"})})}}]),s}(a.Component),x=function(e){Object(d.a)(s,e);var t=Object(b.a)(s);function s(e){var a;return Object(o.a)(this,s),(a=t.call(this,e)).state={droidX:0,mouseX:0,toTheRight:!0,speed:2,accelMod:1},a}return Object(j.a)(s,[{key:"handleMouseMove",value:function(e){this.setState({mouseX:e.pageX})}},{key:"handleSpeedChange",value:function(e){parseFloat(e.target.value)&&this.setState({speed:e.target.value})}},{key:"handleAccelChange",value:function(e){parseFloat(e.target.value)&&this.setState({accelMod:e.target.value})}},{key:"movement",value:function(){var e=this.state,t=e.droidX,s=e.mouseX,a=e.speed,c=e.accelMod;if(1!==Math.abs(Math.round(t)-s)){var i=s-t,n=Math.abs(i*c)/100;t<s?this.setState({droidX:t+a*n,toTheRight:!0}):this.setState({droidX:t-a*n,toTheRight:!1})}}},{key:"componentWillMount",value:function(){this.setState({mouseX:300})}},{key:"componentDidMount",value:function(){var e=this;document.addEventListener("mousemove",(function(t){return e.handleMouseMove(t)})),setInterval(this.movement.bind(this),1)}},{key:"componentWillUnmount",value:function(){var e=this;document.removeEventListener("mousemove",(function(t){return e.handleMouseMove(t)}))}},{key:"render",value:function(){var e=this.state,t=(e.speed,e.accelMod,e.droidX),s=e.mouseX,a=e.toTheRight;return Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:"liljess",style:{WebkitTransform:"translateX(".concat(t,"px)")},children:[Object(h.jsxs)("div",{className:"body",style:{WebkitTransform:"translateX(".concat((s-t)/15,"px) rotateZ(").concat((s-t)/15,"deg)")},children:[Object(h.jsx)("img",{className:"img-body",src:m}),Object(h.jsxs)("div",{className:"eyes "+(a?"right":""),children:[Object(h.jsx)("div",{className:"eye one"}),Object(h.jsx)("div",{className:"eye two"}),Object(h.jsx)("div",{className:"mouth",children:Object(h.jsx)("img",{className:"img-mouth",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAAjCAYAAAAwnJLLAAAACXBIWXMAAAsSAAALEgHS3X78AAAC0klEQVRYhd1ZS2sTURT+bnAXgt2pAZtU1HX8BU4ioRul+QlBcW1wrSRrEami9bFJghURi6TLEpHUjeKiRlAXKti0mi6dJD/gyhnuwGQyMzmTTMhMPjg0dM7jfvfc57lCSgkOhBAZAEtKdV9Kuc8ynCM8yQkhCgCKANY8mrgLoA2gJaVsBEVFCJEGkHb4xO9YImcXAJSlFn32KTqAGtk7+fUSFbOk4upj4tJ36siCp08HYsUJSDlJWzU27Roc0ACsUzamiEO2mpP/oWEphCBi1YBGlhVfLBkxs0TEjgcY476UsjT0H0svZgLK2Dyl5jgs1TCKOjmSyhC5AOdZWCRjJTfJyhhmaRkLitqY/wU4scOCCzG1kCwiiscsR6qxqNY3kctexGAwwN/uEfb2PuPd2yaazZ2Z9c3Kyhlkc5fQ7/ex9fqVH1PaalDhzh03fPj4Sd66XQ5sDt4o3ZTV+qb8+u37UMTOwaHM51f9+EKBG1TXe64ECfR968220Tg/ZOLxuGFDtuNikI4P30b6WMrk2A+42bx67TrbK2WP296Y2rxZePp4A71enz3oT5w85WeOsNDtHrF1YzSa1NlvLGjheP7iJdv5r58/WHrJZJLts7X7nq0bM224Fvfu3sHB4R+WLq2qHHAzTHGfPdngNrVj3ArUxfA31+rylTWkUik8eviAa+KJfH4Vp5eXHVUSiQTOnjuPXFZDuVz2sx3UrQfnRTuCFe0Xx0UhphuHE9vNuLEg5CojZQZVkBlXv4hE1mZdQ5mXFEZu4jaCtYgScy4z2MgtRbDsUBvh4VF2ixLBEWKe5CJEcJ1dlHUhGMY5qPuuOHuQLIRom6iZy30g5Cz74Dw3+pZb6XxqcrYsTlPfnympqchZSJZmSNJ8MfJNyhT246MXhBCaOnhrqlQ46QNHR2WpoQqrOsPGFYGQc4IiTDD/EszXWWq0Wd4wf7enJTMEAP8BZCCmiSlWHTUAAAAASUVORK5CYII="})})]}),Object(h.jsxs)("div",{className:"pupils "+(a?"right":""),children:[Object(h.jsx)("div",{className:"pupil one"}),Object(h.jsx)("div",{className:"pupil two"})]}),Object(h.jsxs)("div",{className:"eyebrows "+(a?"right":""),children:[Object(h.jsx)("div",{className:"eyebrow one"}),Object(h.jsx)("div",{className:"eyebrow two"})]})]}),Object(h.jsxs)("div",{className:"scooter",children:[Object(h.jsx)("div",{className:"scooter base"}),Object(h.jsx)("div",{className:"scooter top",style:{WebkitTransform:"translateX(".concat((s-t)/15,"px) rotateZ(").concat((s-t)/5,"deg)")}}),Object(h.jsx)("div",{className:"scooter handle",style:{WebkitTransform:"translateX(".concat((s-t)/10,"px) rotateZ(").concat((s-t)/5,"deg)")}})]}),Object(h.jsx)("div",{className:"ball-left",style:{WebkitTransform:"rotateZ(".concat(t,"deg)")},children:Object(h.jsx)("div",{className:"ring one"})}),Object(h.jsx)("div",{className:"ball-right",style:{WebkitTransform:"rotateZ(".concat(t,"deg)")},children:Object(h.jsx)("div",{className:"ring one"})}),Object(h.jsx)("div",{className:"shadow"})]}),Object(h.jsx)("div",{className:"instructions",children:Object(h.jsx)("p",{children:"move your mouse."})})]})}}]),s}(a.Component),g=(s(31),s.p+"static/media/syria2.cef31bc6.jpg"),u=s.p+"static/media/syriacover.c2ea5c58.jpg",f=(s.p,s.p+"static/media/thaicave-cutout.e6249d47.png"),v=(s.p,s.p+"static/media/2080card.5c10eba2.png"),N=(s.p,s.p+"static/media/fitfamilies.fcf93aa0.gif"),y=(s.p,s.p+"static/media/playfulpalette.6e73bc0f.png"),w=s.p+"static/media/playfulpalette2.3c52fcee.jpg",k=(s.p,s.p+"static/media/playfulpalette-results2.c08213a8.png"),A=s.p+"static/media/kessler-1.249a22e5.png",T=s.p+"static/media/kessler-2.7fc546a0.png",C=s.p+"static/media/kessler-3.57f67ddb.png",M=s.p+"static/media/kessler-4.6336b42e.png",P=s.p+"static/media/kessler-5.bf1ffa41.png",S=s.p+"static/media/kessler-6.d3c8241d.png",X=s.p+"static/media/kesslerstation.3ff90a9c.png",E=(s.p,s.p+"static/media/kessler-cover.6b9d33d5.png"),I=(s.p,s.p+"static/media/032-github.ba48702d.svg"),R=s.p+"static/media/116-youtube.68f4fe73.svg",U=s.p+"static/media/heart-icon.ee43563e.png",K=s.p+"static/media/036-googledrive.135e686f.svg",W=function(e){Object(d.a)(s,e);var t=Object(b.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(j.a)(s,[{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:"content-container playful-palette",children:[Object(h.jsx)("div",{className:"row portfolio",children:Object(h.jsxs)("p",{className:"p playfulpalette",children:["1 of 4",Object(h.jsx)("span",{children:Object(h.jsx)("h3",{className:"h3 playful-palette",children:"Adobe's Playful Palette"})})]})}),Object(h.jsxs)("div",{children:[Object(h.jsx)("p",{className:"tags",children:"coding"}),Object(h.jsx)("p",{className:"tags",children:"ux design"})]}),Object(h.jsxs)("div",{className:"row",children:[Object(h.jsxs)("div",{className:"col-sm-6",children:[Object(h.jsx)("img",{className:"portfolio-img",src:w,alt:"Playful Palette"}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("img",{className:"portfolio-img",src:k,alt:"Playful Palette Results"}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{})]}),Object(h.jsxs)("div",{className:"col-sm-6",children:[Object(h.jsx)("img",{className:"portfolio-img",src:y,alt:"Playful Palette"}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsxs)("p",{className:"p playfulpalette",children:["For my senior design project, I recreated",Object(h.jsx)("span",{children:Object(h.jsx)("a",{href:"https://research.adobe.com/publication/playful-palette-an-interactive-parametric-color-mixer-for-artists/",target:"_blank",children:"Adobe's Playful Palette"})}),", an interactive parametric color mixer for artists that mimics and enhances the traditional painting process. The palette allows you to blend color blobs to create gradients and easily recolor strokes with an infinite history. ",Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),"Tools Used: WebGL, JavaScript, HTML/CSS"]}),Object(h.jsxs)("div",{className:"icons portfolio",children:[Object(h.jsx)("a",{href:"https://docs.google.com/document/d/1AE245QrD4Qwe_OkZKNu6Izy1jiXGPli55S3L2oGW-_8/edit?usp=sharing",target:"_blank",children:Object(h.jsx)("img",{className:"icon",src:K,alt:"Google Drive"})}),Object(h.jsx)("a",{href:"https://www.youtube.com/watch?v=Zh1XR9ykuUw&t=1s",target:"_blank",children:Object(h.jsx)("img",{className:"icon",src:R,alt:"Youtube"})}),Object(h.jsx)("a",{href:"https://github.com/jesspeng/playful-palette",target:"_blank",children:Object(h.jsx)("img",{className:"icon",src:I,alt:"Github"})})]})]})]}),Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"col"}),Object(h.jsx)("div",{className:"col"})]})]}),Object(h.jsxs)("div",{className:"content-container imagineering",children:[Object(h.jsx)("div",{className:"row portfolio",children:Object(h.jsxs)("p",{className:"p imagineering",children:["2 of 4",Object(h.jsx)("span",{children:Object(h.jsx)("h3",{className:"h3 imagineering",children:"Kessler Project"})})]})}),Object(h.jsxs)("div",{children:[Object(h.jsx)("p",{className:"tags",children:"experience design"}),Object(h.jsx)("p",{className:"tags",children:"3d modeling"}),Object(h.jsx)("p",{className:"tags",children:"infographics"}),Object(h.jsx)("p",{className:"tags",children:"digital painting"})]}),Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"col-sm-7",children:Object(h.jsx)("div",{class:"slider",children:Object(h.jsxs)("div",{class:"slides",children:[Object(h.jsx)("div",{id:"slide-1",children:Object(h.jsx)("img",{className:"portfolio-img",src:E,alt:"Kessler"})}),Object(h.jsx)("div",{id:"slide-2",children:Object(h.jsx)("img",{className:"portfolio-img",src:A,alt:"Kessler"})}),Object(h.jsx)("div",{id:"slide-3",children:Object(h.jsx)("img",{className:"portfolio-img",src:T,alt:"Kessler"})}),Object(h.jsx)("div",{id:"slide-4",children:Object(h.jsx)("img",{className:"portfolio-img",src:C,alt:"Kessler"})}),Object(h.jsx)("div",{id:"slide-5",children:Object(h.jsx)("img",{className:"portfolio-img",src:M,alt:"Kessler"})}),Object(h.jsx)("div",{id:"slide-6",children:Object(h.jsx)("img",{className:"portfolio-img",src:P,alt:"Kessler"})}),Object(h.jsx)("div",{id:"slide-7",children:Object(h.jsx)("img",{className:"portfolio-img",src:S,alt:"Kessler"})})]})})}),Object(h.jsxs)("div",{className:"col-sm-5",children:[Object(h.jsx)("br",{}),Object(h.jsx)("img",{width:"80%",src:X,alt:"Kessler"}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsxs)("p",{className:"p imagineering",children:["Chosen as one of 6 teams from over 250 nationally for the 2019 Disney Imagineering Imaginations Design Competition, my team conceptualized and created Kessler Project, an all-day space adventure that allows guests to experience the excitement of space travel. I led design and development of all visual art, both 2d and 3d, for our submission slides and presentation to the Imagineering executives.",Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),"Read more about it ",Object(h.jsx)("span",{children:Object(h.jsx)("a",{href:"http://www.philly.com/philly/education/disney-college-contest-yields-careers-as-imagineers-20180119.html",target:"_blank",children:"here"})})," and ",Object(h.jsx)("span",{children:Object(h.jsx)("a",{href:"https://disneyimaginations.com/2018-imaginations-finalists/",target:"_blank",children:"here"})}),". ",Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),"Tools Used: Maya, KeyShot, Photoshop, Illustrator"]})]})]})]}),Object(h.jsxs)("div",{className:"content-container nyt",children:[Object(h.jsx)("div",{className:"row portfolio",children:Object(h.jsxs)("p",{className:"p nyt",children:["3 of 4",Object(h.jsx)("span",{children:Object(h.jsx)("h3",{className:"h3 nyt",children:"The New York Times"})})]})}),Object(h.jsxs)("div",{children:[Object(h.jsx)("p",{className:"tags",children:"prototyping"}),Object(h.jsx)("p",{className:"tags",children:"research"}),Object(h.jsx)("p",{className:"tags",children:"coding"}),Object(h.jsx)("p",{className:"tags",children:"animation"})]}),Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{children:Object(h.jsxs)("p",{className:"p nyt",children:["As a Graphics intern on the Immersive Storytelling team, I prototyped 3-D assets to visualize AR moments, researched and tested emerging technologies, and contributed cover images and assets ",Object(h.jsx)("span",{children:Object(h.jsx)("a",{href:"https://www.nytimes.com/interactive/2018/06/24/world/middleeast/douma-syria-chemical-attack-augmented-reality-ar-ul.html",target:"_blank",children:"here"})})," and ",Object(h.jsx)("span",{children:Object(h.jsx)("a",{href:"https://www.nytimes.com/interactive/2018/07/21/world/asia/thai-cave-rescue-ar-ul.html?mtrref=undefined&gwh=52CFC0C2E69BFBA38E84AF8D367CCE69&gwt=regi&assetType=REGIWALL",target:"_blank",children:"here"})}),".",Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),"Tools Used: Maya, Photoshop, Illustrator, After Effects, Sketchfab"]})}),Object(h.jsxs)("div",{className:"col-sm-7",children:[Object(h.jsx)("img",{className:"portfolio-img",src:u,alt:"The New York Times"}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("img",{className:"portfolio-img",src:f,alt:"The New York Times"}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{})]}),Object(h.jsxs)("div",{className:"col-sm-5",children:[Object(h.jsx)("img",{className:"portfolio-img",src:g,alt:"The New York Times"}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsxs)("p",{className:"p nyt",children:["I also did some front-end development for our intern-led 3-D Crossword ",Object(h.jsx)("span",{children:Object(h.jsx)("a",{href:"https://johnwestwig.github.io/three-d-crossword/",target:"_blank",children:"project"})}),"."]})]})]})]}),Object(h.jsxs)("div",{className:"content-container molex",children:[Object(h.jsx)("div",{className:"row portfolio",children:Object(h.jsxs)("p",{className:"p molex",children:["4 of 4",Object(h.jsx)("span",{children:Object(h.jsx)("h3",{className:"h3 molex",children:"molex"})})]})}),Object(h.jsxs)("div",{children:[Object(h.jsx)("p",{className:"tags",children:"visual design"}),Object(h.jsx)("p",{className:"tags",children:"animation"}),Object(h.jsx)("p",{className:"tags",children:"photography"})]}),Object(h.jsxs)("div",{className:"row",children:[Object(h.jsxs)("div",{className:"col-sm-8",children:[Object(h.jsx)("img",{src:v,alt:"Molex",width:"100%"}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{})]}),Object(h.jsxs)("div",{className:"col-sm-4",children:[Object(h.jsx)("img",{src:N,alt:"Molex",width:"100%"}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsxs)("p",{className:"p molex",children:["As a Product Management Intern under the Power Signal Business Unit, I designed 3-D visuals and animations to market the company's new line of power connectors. I also developed VR mockups and introduced KeyShot to the Digital Marketing Team to add dynamic content to their web and mobile platforms.",Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),"Tools Used: Maya, KeyShot, Illustrator, After Effects"]})]})]})]}),Object(h.jsxs)("div",{className:"content-container footer",children:["Any questions? Feel free to email me at pengjess2@gmail.com.",Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),"Made with ",Object(h.jsx)("span",{children:Object(h.jsx)("img",{width:"20px",src:U,alt:"Heart"})})," by Jess Peng"]})]})}}]),s}(a.Component),Z=(s.p,function(e){Object(d.a)(s,e);var t=Object(b.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(j.a)(s,[{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:"content-container about",children:[Object(h.jsx)("h1",{className:"h1 header",children:"about me"}),Object(h.jsx)("div",{className:"row",children:Object(h.jsxs)("div",{className:"col",children:[Object(h.jsx)("h4",{children:"Hi! I'm Jess."}),Object(h.jsxs)("p",{className:"p about",children:["I am currently a Tech Consultant on Adobe Campaign. I majored in ",Object(h.jsx)("span",{children:Object(h.jsx)("a",{href:"http://cg.cis.upenn.edu/dmd.html",target:"_blank",children:"Digital Media Design"})})," and minored in Fine Arts at the University of Pennsylvania, where I graduated from the School of Engineering in May 2019.",Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),"In my free time, I like graphic designing, cartooning on @peng.and.ink, watching stand-up/reality tv, and running. ",Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),"If you want to collaborate or have any questions, feel free to email me at pengjess2@gmail.com."]})]})})]}),Object(h.jsxs)("div",{className:"content-container footer",children:["Any questions? Feel free to email me at pengjess2@gmail.com.",Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),"Made with ",Object(h.jsx)("span",{children:Object(h.jsx)("img",{width:"20px",src:U,alt:"Heart"})})," by Jess Peng"]})]})}}]),s}(a.Component)),J=s.p+"static/media/previous.d2bbc770.svg",D=s.p+"static/media/052-linkedin.7e47fa38.svg",L=s.p+"static/media/044-instagram.a5596a9d.svg",H=s.p+"static/media/007-behance.77b8e277.svg";Object(l.glide)({name:"glide-left"}),Object(l.glide)({name:"glide-right",direction:"right"});var B={display:"flex",flexDirection:"row",flexWrap:"wrap",alignItems:"center",justifyContent:"center"};document.getElementById("root").style.height="100vh";var F=function(){return Object(h.jsx)(r.a,{children:Object(h.jsxs)(l.Navigation,{children:[Object(h.jsx)(l.Route,{exact:!0,path:"/",children:Object(h.jsxs)(l.Screen,{style:Object(n.a)({backgroundColor:"#e5a5eb"},B),children:[Object(h.jsx)(x,{}),Object(h.jsxs)("div",{className:"container home",children:[Object(h.jsx)("div",{className:"row",children:Object(h.jsx)(O,{})}),Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)(l.Link,{to:"/portfolio",transition:"glide-right",children:Object(h.jsx)("button",{className:"home-btn portfolio",children:"Portfolio"})}),Object(h.jsx)(l.Link,{to:"/about",transition:"glide-left",children:Object(h.jsx)("button",{className:"home-btn about",children:"About"})})]})]}),Object(h.jsxs)("div",{className:"nav home",children:[Object(h.jsx)("a",{href:"https://www.behance.net/jpeng",target:"_blank",children:Object(h.jsx)("img",{className:"nav-btn",src:H})}),Object(h.jsx)("a",{href:"https://www.linkedin.com/in/jess-peng/",target:"_blank",children:Object(h.jsx)("img",{className:"nav-btn",src:D})}),Object(h.jsx)("a",{href:"https://www.instagram.com/peng.and.ink/?hl=en",target:"_blank",children:Object(h.jsx)("img",{className:"nav-btn",src:L})})]})]})}),Object(h.jsxs)(l.Route,{exact:!0,path:"/portfolio",screen:!0,screenProps:{style:Object(n.a)({},B)},children:[Object(h.jsx)(W,{}),Object(h.jsxs)("div",{className:"nav portfolio",children:[Object(h.jsx)("a",{href:"https://www.behance.net/jpeng",target:"_blank",children:Object(h.jsx)("img",{className:"nav-btn",src:H})}),Object(h.jsx)("a",{href:"https://www.linkedin.com/in/jess-peng/",target:"_blank",children:Object(h.jsx)("img",{className:"nav-btn",src:D})}),Object(h.jsx)("a",{href:"https://www.instagram.com/peng.and.ink/?hl=en",target:"_blank",children:Object(h.jsx)("img",{className:"nav-btn",src:L})}),Object(h.jsx)(l.Link,{to:"/",transition:"glide-left",children:Object(h.jsx)("img",{className:"nav-btn back-portfolio",src:J})})]})]}),Object(h.jsxs)(l.Route,{exact:!0,path:"/about",screen:!0,screenProps:{style:Object(n.a)({backgroundColor:"white"},B)},children:[Object(h.jsx)(Z,{}),Object(h.jsxs)("div",{className:"nav about",children:[Object(h.jsx)(l.Link,{to:"/",transition:"glide-right",children:Object(h.jsx)("img",{className:"nav-btn back-about",src:J})}),Object(h.jsx)("a",{href:"https://www.behance.net/jpeng",target:"_blank",children:Object(h.jsx)("img",{className:"nav-btn about",src:H})}),Object(h.jsx)("a",{href:"https://www.linkedin.com/in/jess-peng/",target:"_blank",children:Object(h.jsx)("img",{className:"nav-btn about",src:D})}),Object(h.jsx)("a",{href:"https://www.instagram.com/peng.and.ink/?hl=en",target:"_blank",children:Object(h.jsx)("img",{className:"nav-btn about",src:L})})]})]})]})})};i.a.render(Object(h.jsx)(F,{}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.db379e24.chunk.js.map