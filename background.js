// chrome.runtime.onInstalled.addListener(() => {
//     chrome.storage.sync.set({ color });
// });

// async function getCurrentTab() {
//     let queryOptions = { active: true, currentWindow: true };
//     let [tab] = await chrome.tabs.query(queryOptions);
//     return tab;
// }

// getCurrentTab().then((tab) => {
//     const { id: tabId } = tab
//     chrome.scripting.executeScript(
//         {
//             target: { tabId: tabId },
//             files: ['pdf-lib.js'],
//         },
//     );
// })

// chrome.ta



function generatePDF(arg1, arg2) {
    console.log("Generating PDF")
    console.log(arg1)
    console.log(arg2)
}

chrome.contextMenus.create({
    title: "Create PDF",
    contexts: ["page"], //this is the default value but just being explicit here,
    id: Date.now().toString()
});

chrome.contextMenus.onClicked.addListener(generatePDF)