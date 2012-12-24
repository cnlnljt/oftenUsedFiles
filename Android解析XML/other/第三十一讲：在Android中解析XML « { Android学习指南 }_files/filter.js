function VaildURL(sUrl)
{
	return (/^(https?:\/\/)?[\w\-.]+\.(qq|paipai|soso|taotao)\.com($|\/|\\)/i).test(sUrl)||(/^[\w][\w\/\.\-_%]+$/i).test(sUrl)||(/^[\/\\][^\/\\]/i).test(sUrl) ? true : false;
}


function HtmlEncode(sStr)
{
	sStr = sStr.replace(/&/g,"&amp;");
	sStr = sStr.replace(/>/g,"&gt;");
	sStr = sStr.replace(/</g,"&lt;");
	sStr = sStr.replace(/"/g,"&quot;");
	sStr = sStr.replace(/'/g,"&#39;");
	return sStr;
}

function HtmlUnEncode(sStr)
{
	sStr = sStr.replace(/&amp;/g,"&");
	sStr = sStr.replace(/&gt;/g,">");
	sStr = sStr.replace(/&lt;/g,"<");
	sStr = sStr.replace(/&quot;/g,'"');
	sStr = sStr.replace(/&#39;/g,"'");
	return sStr;
}

function HtmlAttributeEncode(sStr)
{
	sStr = sStr.replace(/&/g,"&amp;");
	sStr = sStr.replace(/>/g,"&gt;");
	sStr = sStr.replace(/</g,"&lt;");
	sStr = sStr.replace(/"/g,"&quot;");
	sStr = sStr.replace(/'/g,"&#39;");
	sStr = sStr.replace(/=/g,"&#61;");
	sStr = sStr.replace(/`/g,"&#96;");
	return sStr;
}

function UriComponentEncode(sStr)
{
	sStr = encodeURIComponent(sStr);
	sStr = sStr.replace(/~/g,"%7E");
	sStr = sStr.replace(/!/g,"%21");
	sStr = sStr.replace(/\*/g,"%2A");
	sStr = sStr.replace(/\(/g,"%28");
	sStr = sStr.replace(/\)/g,"%29");
	sStr = sStr.replace(/'/g,"%27");
	sStr = sStr.replace(/\?/g,"%3F");
	sStr = sStr.replace(/;/g,"%3B");
	return sStr;
}


String.prototype.escHtmlEp = function() { return this.replace(/[&'"<>\/\\\-\x00-\x1f\x80-\xff]/g, function(r){ return "&#"+r.charCodeAt(0)+";" }); };

String.prototype.escHtml = function() { return this.replace(/[&'"<>\/\\\-\x00-\x09\x0b-\x0c\x1f\x80-\xff]/g, function(r){ return "&#"+r.charCodeAt(0)+";" }).replace(/\r\n/g, "<BR>").replace(/\n/g, "<BR>").replace(/\r/g, "<BR>").replace(/ /g, "&nbsp;"); };

String.prototype.escScript = function() { return this.replace(/[\\"']/g, function(r){ return "\\"+r; }).replace(/%/g, "\\x25").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\x01/g, "\\x01"); };

String.prototype.escUrl = function() { return escape(this).replace(/\+/g, "%2B"); };

String.prototype.escHrefScript = function() { return this.escScript().escMiniUrl().escHtmlEp(); };

String.prototype.escRegexp = function() { return this.replace(/[\\\^\$\*\+\?\{\}\.\(\)\[\]]/g, function(a,b){ return "\\"+a; }); };

/*  |xGv00|0da33a64b7f4045d6227f4dc9af17f52 */