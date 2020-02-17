

//将鼠标转中文本转化为语音
// $('p').mouseup(function () {
// 	var txt = window.getSection ? window.getSection() : document.selection.createRange().text;
// 	alert(txt);
// })


// 因为content_script可以访问DOM,可以获取鼠标选取的文本内容；
// 但是由于其无法使用chrome提供的大部分api，所以我尝试将获取的文本内容发送给background(实际上应该
// 叫做event-page,因为ta的persistent是false，它的生命周期是：在被需要时加载，在空闲时被关闭，什么叫被需要时呢？
// 比如第一次安装、插件更新、有content-script向它发送消息，等等。)，让它在接受文本后将文本内容转化为语音并且读出来

// p_all = document.getElementsByTagName('p');
// for(var i=0;i<p_all.length;i++){
// 	p_all[i].style.color="red";
// }

document.addEventListener("mouseup", mouseUp, true);


window.text;
function mouseUp() {
	var text = "";
	if (window.getSelection) {
		text = window.getSelection().toString();
	} else if (document.selection && document.selection.type != "Control") {
		text = document.selection.createRange().text;
	}
	if ("" != text) {
		window.text = text;
	}

	//content_scripts——>background  例如
	chrome.runtime.sendMessage(
		{ content: window.text },
		function (response) {
			console.log(response);
		}
	);
}





