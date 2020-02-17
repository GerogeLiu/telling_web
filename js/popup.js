//popup.js

// chrome.extension.onMessage.addListener(
//     function (request, sender, sendResponse) {
//         alert("Popup收到");
//         sendResponse("popup返回值");
//         var temp = document.createElement('p');
//         temp.innerHTML = JSON.stringify(request);
//         document.h2.appendChild(temp);
//     }
// );


var bg = chrome.extension.getBackgroundPage();

$(function () {
    $('#send').click(function () {
        var txt = document.getElementById('text_to_convert').value;
        var span = document.getElementById('state');
        span.innerHTML = txt;
        //清空输入框中的内容
        document.getElementById('text_to_convert').value = '';
        bg.say(txt);
    });
})


//bg.say();//访问background.js中的函数




