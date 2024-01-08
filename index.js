// This is the proper way to do it
// Inject CSS that dives into the parent -> child -> child etc then display: none !important!!
// const css = "body { background-color: red; }";

// chrome.scripting.insertCSS({
//     target: { tabId: tabs.id },
//     css : css,
// });



function listener() {
    //TODO: Mobile elements
    
    //location.href.includes("m.youtube.com/feed/explore")
    //document.querySelectorAll('[href^="/shorts/"]').forEach ????
    let node = document.querySelector('[title="Shorts"]');
    if (node) {
        let nodeParent = node.parentElement;
        if (nodeParent) nodeParent.style.display = "none";
    }

    let parent = document.querySelectorAll('ytd-rich-grid-renderer');
    parent.forEach((a) => {
        let child = a.querySelector("#contents").querySelectorAll('ytd-rich-section-renderer');
        child.forEach((c) => {
            if (c.innerText.includes("Shorts")) c.style.display = "none";
        })
    });

    let historyParent = document.querySelectorAll('ytd-section-list-renderer');
    historyParent.forEach((a) => {
        let historyChild = a.querySelector("#contents").querySelectorAll('ytd-reel-shelf-renderer');
        historyChild.forEach((c) => {
            if (c.innerText.includes("Shorts")) c.style.display = "none";
        })
    });
}

let timeout = null;
const observer = new MutationObserver(mutationList =>
    mutationList.filter(m => m.type === 'childList').forEach(m => {
        m.addedNodes.forEach(() => {
            if (timeout) {
                clearTimeout(timeout);
            }
            timeout = setTimeout(listener, 1);
        });
    }));
observer.observe(document, { childList: true, subtree: true });  