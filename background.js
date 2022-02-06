let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ color });
    console.log('Default background color set to %cgreen', `color: ${color}`);
});

function generatePDF(arg1, arg2) {
    debugger
    console.log("Generating PDF")
    console.log(arg1)
    console.log(arg2)
}

chrome.contextMenus.create({
    title: "Create PDF",
    contexts: ["page"], //this is the default value but just being explicit here,
    id: "Some event name"
});

chrome.contextMenus.onClicked.addListener(generatePDF)