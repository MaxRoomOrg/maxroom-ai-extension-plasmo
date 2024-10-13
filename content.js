chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "getHTML") {
    // const _html = document.documentElement.outerHTML;
    const _html = document.body.innerHTML;
    const url = window.location.href;
    sendResponse({ html: _html, url: url });
  }
  return true; // ! response is sent asynchronously
});
