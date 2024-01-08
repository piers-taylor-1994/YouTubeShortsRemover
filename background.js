// chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
//     if (changeInfo.status == 'complete')
//             chrome.tabs.executeScript(tabId, {file:"code.js"});
//     });

//     chrome.browserAction.onClicked.addListener(function(tab) {
//     chrome.tabs.executeScript({
//         code: 'document.body.style.backgroundColor="green"'
//     });
//     });

// window.addEventListener('load', function () {
//     document.body.style.backgroundColor = "red";
//     document.getElementById("content").style.backgroundColor = "green";

//     var node = document.querySelector('[title="Shorts"]');

//     var nodeParent = node.parentElement;
//     if (nodeParent) nodeParent.remove();

//     var node2 = document.querySelector("#dismissible");
//     node2.style.backgroundColor = "blue";
// }, false)


// var domReady = new Promise(function (resolve) {
//     document.addEventListener("DOMContentLoaded", resolve, false);
// })
// var loadReady = new Promise(function (resolve) {
//     document.addEventListener("load", resolve, false);
// })

// Promise.all([domReady, loadReady]).then(function () {
//     document.body.style.backgroundColor = "red";
//     document.getElementById("content").style.backgroundColor = "green";

//     var node = document.querySelector('[title="Shorts"]');

//     var nodeParent = node.parentElement;
//     if (nodeParent) nodeParent.remove();

//     var node2 = document.querySelector("#dismissible.ytd-rich-shelf-renderer");
//     node2.style.backgroundColor = "blue";
// });

//https://www.hairizuan.com/chrome-extension-to-get-rid-of-youtube-shorts/#:~:text=The%20following%20piece%20of%20javascript,shelf%2Drenderer')%3B%20aa.

// (function listener() {
//     var node = document.querySelector('[title="Shorts"]');
//     if (node) {
//         var nodeParent = node.parentElement;
//         if (nodeParent) nodeParent.remove();
//     }

//     // Remove all youtube shorts shelves
//     aa = document.querySelectorAll('.ytd-rich-grid-renderer');
//     // console.log(aa);
//     aa.forEach((a) => { 
//         a.style.backgroundColor = "pink";
//     });
//     console.info("deleted youtube shorts shelves");

//     // Remove all youtube shorts video
//     bb = document.querySelectorAll('#video-title');
//     bb.forEach(item => {
//         if (item.getAttribute('href') == null) { return; }
//         if (item.href.includes('https://www.youtube.com/shorts')) {
//             item.closest('ytd-video-renderer').remove();
//         }
//         console.info('deleted youtube shorts video');
//     });
// })();

function listener() {
    var node = document.querySelector('[title="Shorts"]');
    if (node) {
        var nodeParent = node.parentElement;
        if (nodeParent) nodeParent.remove();
    }

    let aa = document.querySelectorAll('ytd-rich-grid-renderer');
    aa.forEach((a) => {
        let cc = a.querySelector("#contents").querySelectorAll('ytd-rich-section-renderer');
        cc.forEach((c) => {
            if (c.innerText.includes("shorts")) c.remove();
        })
    });

    // Remove all youtube shorts video
    // bb = document.querySelectorAll('#video-title');
    // bb.forEach(item => {
    //     if (item.getAttribute('href') == null) { return; }
    //     if (item.href.includes('https://www.youtube.com/shorts')) {
    //         item.closest('ytd-video-renderer').remove();
    //     }
    //     console.info('deleted youtube shorts video');
    // });
}
  
window.addEventListener("load", () => listener(), false);

var timeout = null;
window.addEventListener("scroll", function () {
    if (timeout) {
        clearTimeout(timeout);
    }
    timeout = setTimeout(listener, 500);
}, false);