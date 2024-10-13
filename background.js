const SERVER_URL = "https://dev3k.yespranav.com/api/webhook";
/**
 * @param {{html: string, url: string}} request */
const sendDataToServer = async (request) => {
  const res = await fetch(SERVER_URL, {
    method: "POST",
    body: JSON.stringify(request),
  });

  if (!res.ok) {
    console.error(`Failed to send to server:`, await res.text());
    throw new Error(`HTTP error! status: ${res.status}`);
  }

  console.log(`Successfully sent to server:`, await res.text());
};

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "processHTML") {
    console.log("Received processing request:", request);

    sendResponse({ status: "success" });

    sendDataToServer(request);
  }
});
