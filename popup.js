const createButton = document.getElementById("sendHTML");

createButton.addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, { action: "getHTML" }, (response) => {
      if (chrome.runtime.lastError) {
        console.error(chrome.runtime.lastError);
        return;
      }
      if (response && response.html) {
        chrome.runtime.sendMessage(
          { action: "processHTML", ...response },
          (response) => {
            if (chrome.runtime.lastError) {
              console.error(chrome.runtime.lastError);
            } else {
              //   statusElement.textContent = "Done";
            }
          }
        );
      } else {
        console.error(`No HTML received`);
        // statusElement.textContent = "Error";
      }
    });
  });
});
