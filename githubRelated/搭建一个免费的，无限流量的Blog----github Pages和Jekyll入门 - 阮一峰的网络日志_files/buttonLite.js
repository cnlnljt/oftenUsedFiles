var BSHARE_SHOST_NAME="http://static.bshare.cn",BSHARE_BUTTON_HOST="http://b.bshare.cn",BSHARE_WEB_HOST="http://www.bshare.cn";(function(f,g){if(!f.bShareUtil||!f.bShareControl){var j=g.documentElement,e=navigator;f.bShareControl={count:0,viewed:!1,viewInfo:null,bShareLoad:!1,clicked:!1};var h=f.bShareUtil={requestedScripts:[],encode:encodeURIComponent,isIe6:/msie|MSIE 6/.test(e.userAgent),isIe7:/MSIE 7/.test(e.userAgent),isIe8:/MSIE 8/.test(e.userAgent),isIe9:/MSIE 9/.test(e.userAgent),isIe:/Microsoft Internet Explorer/.test(e.appName),isSt:g.compatMode==="CSS1Compat",isQk:function(){return h.isIe6||h.isIe&&!h.isSt},isTrue:function(a){return typeof a===
"boolean"?a:a.toLowerCase()==="true"},formatParam:function(a,b){if(a==="number")return parseInt(b,10);else if(a==="boolean")return h.isTrue(b);return b},isUndefined:function(a){return typeof a==="undefined"},arrayContains:function(a,b,c){for(var d=a.length;d--;)if(!h.isUndefined(b)&&a[d]===b)return!0;else if(!h.isUndefined(c)&&c.test(a[d]))return!0;return!1},loadScript:function(a,b){var c=h.requestedScripts;if(!h.arrayContains(c,a))/(bsMore(Org)?\.js|bshareS887(Org)?\.js)/.test(a)&&c.push(a),b=b||
function(){},c=g.createElement("script"),c.src=a,c.type="text/javascript",c.charset="utf-8",c.onload=b,c.onreadystatechange=function(){/(complete|loaded)/.test(this.readyState)&&b()},g.getElementsByTagName("head")[0].appendChild(c)},loadStyle:function(a){var b=g.createElement("style");b.type="text/css";b.styleSheet?b.styleSheet.cssText=a:b.appendChild(g.createTextNode(a));g.getElementsByTagName("head")[0].appendChild(b)},getOffset:function(a){for(var b={x:a.offsetLeft,y:a.offsetTop,h:a.offsetHeight,
w:a.offsetWidth};a=a.offsetParent;b.x+=a.offsetLeft,b.y+=a.offsetTop);return b},getElem:function(a,b,c,d){for(var a=a.getElementsByTagName(b),b=[],i=0,k=0,e=a.length;k<e;k++){var g=a[k];if(!c||g.className.indexOf(c)!==-1)b.push(g),typeof d==="function"&&d(g,i++)}return b},getText:function(a){return h.isIe?a.innerText:a.textContent},hasElem:function(a,b){for(var c=0,d=a.length;c<d;++c)if(a[c]===b)return!0;return!1},insertAfter:function(a,b){var c=b.parentNode;c.lastChild===b?c.appendChild(a):c.insertBefore(a,
b.nextSibling)},getWH:function(){return{h:(h.isSt?j:g.body).clientHeight,w:(h.isSt?j:g.body).clientWidth}},stopProp:function(a){a=a||f.event||{};a.stopPropagation?a.stopPropagation():a.cancelBubble=!0},getScript:function(a){for(var b=g.getElementsByTagName("script"),c=[],d=0,i=b.length;d<i;d++){var k=b[d].src;k&&k.search(a)>=0&&(k.toLowerCase().indexOf("bshare.cn")>-1||k.toLowerCase().indexOf("static.local"))&&c.push(b[d])}return c},parseOptions:function(a,b){var c={},d=a.indexOf("?");d&&(a=a.substring(d+
1));(d=a.indexOf("#"))&&(a=a.substring(d+1));for(var a=a.replace("+"," "),d=a.split(/[&;]/g),i=0,k=d.length;i<k;i++){var g=d[i].split("="),e=decodeURIComponent(g[0]),h=b?g[1]:null;if(!b)try{h=decodeURIComponent(g[1])}catch(f){}c[e]=h}return c},submitForm:function(a,b,c,d){var d=d||"post",i=g.createElement("form");g.body.appendChild(i);i.method=d;i.target=c;i.setAttribute("accept-charset","utf-8");i.action=a;for(var e in b)if(typeof b[e]!=="function")a=g.createElement("input"),a.type="hidden",a.name=
e,a.value=b[e],i.appendChild(a);if(h.isIe)g.charset="utf-8";i.submit();g.body.removeChild(i)},replaceParam:function(a,b,c){return c=b?c.replace(a,h.encode(b)):c.replace(a,"")},ready:function(a){if(g.addEventListener)g.addEventListener("DOMContentLoaded",function(){g.removeEventListener("DOMContentLoaded",arguments.callee,!1);a.call()},!1),f.addEventListener("load",a,!1);else if(g.attachEvent){g.attachEvent("onreadystatechange",function(){g.readyState==="complete"&&(g.detachEvent("onreadystatechange",
arguments.callee),a.call())});f.attachEvent("onload",a);var b=!1;try{b=f.frameElement===null}catch(c){}j.doScroll&&b&&function(){try{j.doScroll("left")}catch(b){setTimeout(arguments.callee,10);return}a.call()}()}else f.onload=a},createBuzzObject:function(a,b){if(f[a])return f[a];var c=f[a]={shost:f.BSHARE_SHOST_NAME,bhost:f.BSHARE_BUTTON_HOST,whost:f.BSHARE_WEB_HOST,defaultConfig:b,params:{type:0,publisherUuid:"",url:"",title:"",summary:"",content:"",pic:"",pics:"",video:"",vTag:"",vUid:"",vEmail:"",
product:"",price:"0",brand:"",tag:"",category:"",template:"1",apvuid:"",apts:"",apsign:""},isReady:!1,completed:!1,curb:0,preb:-1,entries:[],counters:[]};c.config={};for(var d in c.defaultConfig)c.config[d]=c.defaultConfig[d];c.imageBasePath=c.shost+"/frame/images/";c.jsBasePath=c.shost+"/b/";c.addEntry=function(a){if(typeof c.counters==="number")c.counters=[];c.entries.push(a);c.counters.push(0)};return f[a]},parseBuzzOptions:function(a,b,c,d,i){var k;k=(a=h.getScript(b)[a])?h.parseOptions(a.src):
{},a=k;i&&(a=i(a));for(var e in a)a[e]===void 0||a[e]===null||typeof c[e]==="number"&&a[e]===""||(c[e]!==void 0?c[e]=h.formatParam(typeof c[e],a[e]):d[e]!==void 0&&(d[e]=h.formatParam(typeof d[e],a[e])))}}}})(window,document);(function(f,g,j){var e=g.bShareUtil,h=g.bShareControl;if(!(h.count>0)){var a=e.createBuzzObject(f,{lang:"zh",height:0,width:0,image:"",bgc:"none",fgc:"#333",poptxtc:"#666",popbgc:"#f2f2f2",sn:!1,logo:!0,style:1,fs:0,inline:!1,beta:!1,popjs:"",popHCol:2,pop:0,mdiv:0,poph:"auto",bps:"",bps2:"",showShareCount:!0,icon:!0,text:null,promote:!1}),b=a.config,c=a.params;a.topMap={baiduhi:0,bsharesync:1,douban:2,facebook:3,feixin:4,ifengmb:5,itieba:6,kaixin001:7,msn:8,neteasemb:9,peoplemb:10,qqmb:11,qqxiaoyou:12,
qzone:13,renren:14,sinaminiblog:15,sinaqing:16,sohuminiblog:17,tianya:18,twitter:19};a.customization={};a.loadOptions=function(){e.parseBuzzOptions(0,/((bshare|static).*button(Lite)?(Org)?\.js|bshare_load)/,b,c,function(a){if(typeof g.bShareOpt!=="undefined")for(var b in g.bShareOpt)a[b]=g.bShareOpt[b];a.lang=a.lang==="en"?"en":"zh";if(a.h&&a.w&&a.img)a.height=a.h,a.width=a.w,a.image=a.img;a.bgc=a.bgcolor||void 0;a.fgc=a.textcolor||void 0;a.logo=!(a.logo&&a.logo.toLowerCase()==="false");a.popHCol=
a.pophcol||void 0;if(a.style)a.style="-1||0||1||2||3||4||5||10||11||999".indexOf(a.style)<0?void 0:parseInt(a.style,10);if(a.bp)a.style&&a.style===2?a.bps2=a.bp.split(","):a.bps=a.bp.split(",");a.showShareCount=a.style&&/(3|4|5)/.test(a.style)?!1:!(a.ssc&&a.ssc.toString().toLowerCase()==="false");a.type=g.BSHARE_BUTTON_TYPE||a.type;a.publisherUuid=a.uuid||void 0;return a});a.buttonType=c.type;for(var d in a.defaultConfig)a.defaultConfig[d]!==b[d]&&(a.customization[d]=b[d])};a.writeButton=function(){var d=
"",c={0:0,1:[110,85],10:[90,51],11:[82,82]},g={0:16,1:24,10:21,11:49},h=a.imageBasePath,f=b.style,l=b.image,n=b.showShareCount,m=b.width,p=b.height;f!==3&&f!==4&&f!==5&&(d='<div class="bsPromo bsPromo1"></div>');f>1&&f<6?a.writeBshareDiv(d):f===-1?(e.getElem(j,"div","bshare-custom",function(b){if(!b.childNodes[0].className||b.childNodes[0].className.indexOf("bsPromo")<0){var d=j.createElement("div");d.className="bsPromo bsPromo"+(a.isLite?2:1);b.insertBefore(d,b.childNodes[0])}}),(b.beta||b.popjs)&&
a.writeBshareDiv('<div class="buzzButton">'+b.text+"</div>","")):f>=0&&(f!==999&&(l=h+"button_custom",f===0?l=h+"logo_square_s.gif":(l+=f+"-"+(b.lang==="en"?"en":"zh"),n&&(l+="-c"),f===10&&(m=/(Blue|Red|Green|Grey|Orange)/.test(b.bgc)?b.bgc:"Orange",l+="-"+m),l+=".gif"),m=c[f][n?0:1],p=g[f]),d+='<div class="buzzButton bsStyle'+f+'" style="height:'+p+"px;color:"+b.fgc+";",f===0?(d+=b.icon?"background:transparent url("+l+") no-repeat;":"",d+='float:left"><div style="padding:0 4px'+(b.icon?" 0 21px":
" 0 0")+";"+(a.isLite?"height:16px;":"")+'"><span class="bshareText" style="line-height:18px;float:left;">'+(b.text===null?"\u5206\u4eab":b.text)+"</span></div></div>",n&&(d+='<div style="background:transparent url('+h+'counter_box.gif) no-repeat;float:left;width:40px;height:16px;text-align:center;font-weight:bold;">&nbsp;<span style="position:relative;line-height:16px;" class="shareCount"></span></div>')):(d+=";background:transparent url("+l+") no-repeat;text-align:center;width:"+m+'px;">',n&&f!==999&&(d+=
'<span style="font-weight:bold;position:relative;line-height:'+(f===10?"22":"25")+'px;" class="shareCount"></span>'),d+="</div>"),d+='<div style="clear:both;"></div>',a.writeBshareDiv(d,"font-size:12px;height:"+p+"px;width:"+m+"px;"))};a.commLoad=function(b){var i;if(b==="bsharesync")i=[a.whost,"/bsyncShare?site=",b].join(""),a.shareStats(b),e.submitForm(i,c,"_blank");else if(b==="email")i=[a.bhost,"/bshareEmail"].join(""),a.shareStats(b),e.submitForm(i,c,"_blank");else if(b==="clipboard")e.copy2Clipboard(),
a.shareStats(b);else if(b==="favorite")e.add2Bookmark(),a.shareStats(b);else if(b==="printer")e.add2Printer(),a.shareStats(b);else if(b){if(h.bShareLoad){i=[a.bhost,"/bshare_redirect?site=",b].join("");for(var f in c)!/(content|target)/.test(f)&&c[f]&&typeof c[f]!=="function"&&(i+="&"+f+"="+e.encode(c[f]))}else(i=g.BS_PURL_MAP[b])||alert(a.iL8n.loadFailed),b==="gmw"?i=e.replaceParam("${URL}",c.url.replace("http://",""),i):c.url&&(i=e.replaceParam("${URL}",c.url,i)),i=e.replaceParam("${TITLE}",c.title,
i),i=e.replaceParam("${CONTENT}",c.summary,i),i=e.replaceParam("${IMG}",c.pic,i),i=e.replaceParam("${VIDEO}",c.video,i);g.open(i,"","height=600,width=800,top=100,left=100,screenX=100,screenY=100,scrollbars=yes,resizable=yes")}};a.onLoad=function(){e.getElem(j,"a","bshareDiv",function(b,d){e.getElem(b,"div","buzzButton",function(b){b.onclick=function(b){return function(d){a.more(d,b);return!1}}(d)})});var d=b.showShareCount;if(b.style===0){var c=e.getElem(j,"div","buzzButton")[0].offsetWidth;d&&(c+=
41);e.getElem(j,"a","bshareDiv",function(a){a.style.width=c+"px"})}var f=a.entries.length;if(d&&f>0){for(var d="",h=0;h<f;h++){var o=a.entries[h];if(typeof o.url==="string"){if(e.isIe&&d.length+o.url.length>2E3)break;d!==""&&(d+="|");d+=o.url}}d!==""&&(d+="|");d+=g.location.href;a.count(d)}};a.renderButton=function(){e.loadStyle("a.bshareDiv,#bsPanel,#bsMorePanel,#bshareF{border:none;background:none;padding:0;margin:0;font:12px Helvetica,Calibri,Tahoma,Arial,\u5b8b\u4f53,sans-serif;line-height:14px;}#bsPanel div,#bsMorePanel div,#bshareF div{display:block;}.bsRlogo .bsPopupAwd,.bsRlogoSel .bsPopupAwd,.bsLogo .bsPopupAwd,.bsLogoSel .bsPopupAwd{ line-height:16px!important;}a.bshareDiv div,#bsFloatTab div{*display:inline;zoom:1;display:inline-block;}a.bshareDiv img,a.bshareDiv div,a.bshareDiv span,a.bshareDiv a,#bshareF table,#bshareF tr,#bshareF td{text-decoration:none;background:none;margin:0;padding:0;border:none;line-height:1.2}a.bshareDiv span{display:inline;float:none;}div.buzzButton{cursor:pointer;font-weight:bold;}.buzzButton .shareCount a{color:#333}.bsStyle1 .shareCount a{color:#fff}span.bshareText{white-space:nowrap;}span.bshareText:hover{text-decoration:underline;}a.bshareDiv .bsPromo,div.bshare-custom .bsPromo{display:none;position:absolute;z-index:100;}a.bshareDiv .bsPromo.bsPromo1,div.bshare-custom .bsPromo.bsPromo1{width:51px;height:18px;top:-18px;left:0;line-height:16px;font-size:12px !important;font-weight:normal !important;color:#fff;text-align:center;background:url("+
a.imageBasePath+"bshare_box_sprite2.gif) no-repeat 0 -606px;}div.bshare-custom .bsPromo.bsPromo2{background:url("+a.imageBasePath+"bshare_promo_sprite.gif) no-repeat;cursor:pointer;}");a.writeButton()};a.loadButtonStyle=function(){var d,c=b.style;if(b.beta)d=a.jsBasePath+"styles/bshareS888.js?v=20121224";else if(b.popjs)d=b.popjs;else if(b.style!==-1&&(d=a.jsBasePath+"styles/bshareS"+(c>1&&c<6?c:1)+".js?v=20121224",b.pop===-1&&(c<=1||c>=6)))d="";d&&e.loadScript(d)};a.international=function(d){var c=a.jsBasePath+
"langs/";c+=b.lang!=="zh"?"bs-lang-en.js?v=20121224":"bs-lang-zh.js?v=20121224";e.loadScript(c,d)};a.start=function(){e.loadEngine&&(e.loadEngine(f),a.isLite&&a.loadOptions(),a.international(function(){if(!a.completed){if(b.text===void 0||b.text===null)b.text=b.style===0?a.iL8n.shareTextShort:a.iL8n.shareText;a.isLite&&a.renderButton();var c={};switch(a.buttonType){case 15:c={position:0,boxHeight:500,boxWidth:664,closeTop:10,closeRight:16};break;default:c={position:0,boxHeight:488,boxWidth:588,closeTop:10,closeRight:88}}e.createShareBox(f,
c);a.initBox&&a.initBox();a.buttonType===1?a.show():(a.loadButtonStyle(),a.prepare(0),a.onLoad(),a.view(g.location.href),a.isLite&&b.mdiv>=0&&e.loadScript(a.jsBasePath+"components/bsMore.js?v=20121224"),setTimeout(function(){if(!h.bShareLoad&&(e.loadScript(a.jsBasePath+"components/bsPlatforms.js?v=20121224"),b.mdiv>=0&&e.loadScript(a.jsBasePath+"components/bsMore.js?v=20121224"),!a.isLite))a.more=function(b,c){typeof a.moreDiv==="function"&&a.moreDiv(b,c)}},3E3),a.completed=!0)}}))};a.init=function(){if(!a.isReady)a.isReady=
!0,e.loadScript(a.jsBasePath+"engines/bs-engine.js?v=20121224",a.start)}}})("bShare",window,document);(function(f,g,j){if(!(g.bShareControl.count>0)){g.bShareControl.count+=1;var e=g.bShareUtil,h=g[f],a=h.config;h.isLite=!0;h.customization.type="lite";h.writeBshareDiv=function(b,c){e.getElem(j,"a","bshareDiv",function(d){if(b)d.innerHTML=b;else if(d.innerHTML.length<24)d.innerHTML="";d.onclick=function(){return!1};d.style.cssText=(a.inline?"":"display:block;")+"text-decoration:none;padding:0;margin:0;"+c||""})};h.more=function(a,c){typeof h.moreDiv==="function"&&h.moreDiv(a,c)};h.show=function(){h.more()};
h.load=function(a){if(a)return h.click(),a!=="bsharesync"&&h.updateCounter(),h.prepare(),h.commLoad(a),!0};e.ready(h.init)}})("bShare",window,document);(function(){var f=window.bShare;if(!f)f=window.bShare={};f.pnMap={115:["115\u6536\u85cf\u5939",0],"139mail":["139\u90ae\u7bb1",2],"42qu":["42\u533a",3],"9dian":["\u8c46\u74e39\u70b9",6],baiducang:["\u767e\u5ea6\u641c\u85cf",7],baiduhi:["\u767e\u5ea6\u7a7a\u95f4",8],bgoogle:["Google\u4e66\u7b7e",10],bsharesync:["\u4e00\u952e\u901a",16],caimi:["\u8d22\u8ff7",17],cfol:["\u4e2d\u91d1\u5fae\u535a",18],chouti:["\u62bd\u5c49",20],clipboard:["\u590d\u5236\u7f51\u5740",21],cyolbbs:["\u4e2d\u9752\u8bba\u575b",22],cyzone:["\u521b\u4e1a\u5427",23],delicious:["\u7f8e\u5473\u4e66\u7b7e",24],dig24:["\u9012\u5ba2\u7f51",25],digg:["Digg",26],diglog:["\u5947\u5ba2\u53d1\u73b0",27],diigo:["Diigo",29],douban:["\u8c46\u74e3\u7f51",30],dream:["\u68a6\u5e7b\u4eba\u751f",31],duitang:["\u5806\u7cd6",32],eastdaymb:["\u4e1c\u65b9\u5fae\u535a",
33],email:["\u7535\u5b50\u90ae\u4ef6",34],evernote:["Evernote",35],facebook:["Facebook",36],fanfou:["\u996d\u5426",37],favorite:["\u6536\u85cf\u5939",38],feixin:["\u98de\u4fe1",39],friendfeed:["FriendFeed",40],fwisp:["Fwisp",42],ganniu:["\u8d76\u725b\u5fae\u535a",43],gmail:["Gmail",44],gmw:["\u5149\u660e\u7f51",45],gtranslate:["\u8c37\u6b4c\u7ffb\u8bd1",46],hemidemi:["\u9ed1\u7c73\u4e66\u7b7e",47],hexunmb:["\u548c\u8baf\u5fae\u535a",48],huaban:["\u82b1\u74e3",49],ifengkb:["\u51e4\u51f0\u5feb\u535a",50],ifengmb:["\u51e4\u51f0\u5fae\u535a",51],ifensi:["\u7c89\u4e1d\u7f51",52],instapaper:["Instapaper",53],itieba:["i\u8d34\u5427",54],joinwish:["\u597d\u613f\u7f51",55],kaixin001:["\u5f00\u5fc3\u7f51",56],laodao:["\u5520\u53e8\u7f51",57],leihou:["\u96f7\u7334",58],leshou:["\u4e50\u6536",
59],linkedin:["LinkedIn",60],livespace:["MS Livespace",61],mala:["\u9ebb\u8fa3\u5fae\u535a",63],masar:["\u739b\u6492\u7f51",65],meilishuo:["\u7f8e\u4e3d\u8bf4",66],miliao:["\u7c73\u804a",67],"mister-wong":["Mister Wong",68],mogujie:["\u8611\u83c7\u8857",69],moptk:["\u732b\u6251\u63a8\u5ba2",70],msn:["MSN",71],myshare:["MyShare",72],myspace:["MySpace",73],neteasemb:["\u7f51\u6613\u5fae\u535a",74],netvibes:["Netvibes",75],peoplemb:["\u4eba\u6c11\u5fae\u535a",76],pinterest:["Pinterest",79],poco:["Poco\u7f51",81],printer:["\u6253\u5370",82],printf:["Print Friendly",83],qqmb:["\u817e\u8baf\u5fae\u535a",84],qqshuqian:["QQ\u4e66\u7b7e",85],qqxiaoyou:["\u670b\u53cb\u7f51",86],qzone:["QQ\u7a7a\u95f4",87],readitlater:["ReadItLater",
88],reddit:["Reddit",89],redmb:["\u7ea2\u5fae\u535a",90],renjian:["\u4eba\u95f4\u7f51",91],renmaiku:["\u4eba\u8109\u5e93",92],renren:["\u4eba\u4eba\u7f51",93],shouji:["\u624b\u673a",95],sinaminiblog:["\u65b0\u6d6a\u5fae\u535a",96],sinaqing:["\u65b0\u6d6aQing",97],sinavivi:["\u65b0\u6d6aVivi",98],sohubai:["\u641c\u72d0\u767d\u793e\u4f1a",99],sohuminiblog:["\u641c\u72d0\u5fae\u535a",100],southmb:["\u5357\u65b9\u5fae\u535a",101],stumbleupon:["StumbleUpon",102],szone:["\u5b88\u682a\u7f51",103],taojianghu:["\u6dd8\u6c5f\u6e56",104],tianya:["\u5929\u6daf",105],tongxue:["\u540c\u5b66\u5fae\u535a",106],tuita:["\u63a8\u4ed6",107],tumblr:["Tumblr",108],twitter:["Twitter",109],ushi:["\u4f18\u58eb\u7f51",110],waakee:["\u6316\u5ba2",112],wealink:["\u82e5\u90bb\u7f51",113],woshao:["\u6211\u70e7\u7f51",115],
xianguo:["\u9c9c\u679c\u7f51",116],xiaomeisns:["\u6821\u5a92\u91c7\u901a",117],xinminmb:["\u65b0\u6c11\u5fae\u535a",118],xyweibo:["\u5fae\u535a\u6821\u56ed",119],yaolanmb:["\u6447\u7bee\u5fae\u535a",120],yijee:["\u6613\u96c6\u7f51",121],youdao:["\u6709\u9053\u4e66\u7b7e",122],zjol:["\u6d59\u6c5f\u5fae\u535a",124],xinhuamb:["\u65b0\u534e\u5fae\u535a"],szmb:["\u6df1\u5733\u5fae\u535a"],changshamb:["\u5fae\u957f\u6c99"],hefeimb:["\u5408\u80a5\u5fae\u535a"],wansha:["\u73a9\u5565e\u65cf"],"189share":["\u624b\u673a\u5feb\u4f20"],diandian:["\u70b9\u70b9\u7f51"],tianji:["\u5929\u9645\u7f51"],jipin:["\u5f00\u5fc3\u96c6\u54c1"],chezhumb:["\u8f66\u4e3b\u5fae\u535a"],gplus:["Google+"],yidongweibo:["\u79fb\u52a8\u5fae\u535a"],youdaonote:["\u6709\u9053\u7b14\u8bb0"],jschina:["\u5fae\u6c5f\u82cf"],mingdao:["\u660e\u9053"],jxcn:["\u6c5f\u897f\u5fae\u535a"],qileke:["\u5947\u4e50\u6536\u85cf"],sohukan:["\u641c\u72d0\u968f\u8eab\u770b"],maikunote:["\u9ea6\u5e93\u8bb0\u4e8b"],lezhimark:["\u4e50\u77e5\u4e66\u7b7e"],
"189mail":["189\u90ae\u7bb1"],wo:["WO+\u5206\u4eab"],gmweibo:["\u5149\u660e\u5fae\u535a"],jianweibo:["\u5409\u5b89\u5fae\u535a"],qingbiji:["\u8f7b\u7b14\u8bb0"]};f.iL8n={shareText:"\u5206\u4eab\u5230",shareTextShort:"\u5206\u4eab",shareTextPromote:"\u5206\u4eab\u6709\u793c",morePlats:"\u66f4\u591a\u5e73\u53f0...",morePlatsShort:"\u66f4\u591a...",viewShare:"\u67e5\u770b\u6211\u7684\u5206\u4eab...",regTitle:"\u6ce8\u518c\u6210\u4e3abShare\u7528\u6237",loginTitle:"\u767b\u5f55bShare",register:"\u6ce8\u518c",login:"\u767b\u5f55",whatsThis:"\u8fd9\u662f\u4ec0\u4e48\u5de5\u5177\uff1f",promote:"\u5206\u4eab\u6709\u793c",promoteShort:"\u5956",closeHint:"30\u5206\u949f\u5185\u4e0d\u518d\u51fa\u73b0\u6b64\u5206\u4eab\u6846",loadFailed:"\u7f51\u7edc\u592a\u6162\u65e0\u6cd5\u52a0\u8f7d\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5\u3002",loadFailed2:"\u5f88\u62b1\u6b49\uff0c\u65e0\u6cd5\u8fde\u63a5\u670d\u52a1\u5668\u3002\u8bf7\u7a0d\u540e\u91cd\u8bd5\uff01",notSupport:"\u4e0d\u652f\u6301\uff01",copySuccess:"\u590d\u5236\u6210\u529f\uff01\u60a8\u53ef\u4ee5\u7c98\u8d34\u5230QQ/MSN\u4e0a\u5206\u4eab\u7ed9\u60a8\u7684\u597d\u53cb\uff01",copyTip:"\u8bf7\u6309Ctrl+C\u590d\u5236\uff0c\u7136\u540e\u60a8\u53ef\u4ee5\u7c98\u8d34\u5230QQ/MSN\u4e0a\u5206\u4eab\u7ed9\u60a8\u7684\u597d\u53cb\uff01",
bookmarkTip:"\u6309\u4e86OK\u4ee5\u540e\uff0c\u8bf7\u6309Ctrl+D\uff08Macs\u7528Command+D\uff09\u3002",confirmClose:"\u5173\u95ed\u540e\uff0c\u8be5\u5206\u4eab\u6309\u94ae30\u5206\u949f\u5c06\u4e0d\u518d\u51fa\u73b0\uff0c\u60a8\u4e5f\u65e0\u6cd5\u4f7f\u7528\u5206\u4eab\u529f\u80fd\uff0c\u786e\u5b9a\u5417\uff1f"}})();
