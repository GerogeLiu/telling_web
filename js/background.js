//background.js


// 文本转语音的方法
function say(txt) {
	var msg = new SpeechSynthesisUtterance(txt);
	speechSynthesis.speak(msg);
}


// 监听消息
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
	// code...
	say(request.content);
	sendResponse('我已收到你的消息：' + JSON.stringify(request));//做出回应
});



