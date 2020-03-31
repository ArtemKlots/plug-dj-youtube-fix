const API_KEY = '***';

chrome.webRequest.onBeforeRequest.addListener((details) => {
    const cutUrl = details.url.substring(0, details.url.indexOf("&key="));
    const newUrl = cutUrl + '&key=' + API_KEY;
    return {redirectUrl: newUrl};
}, {urls: ["https://content.googleapis.com/youtube/*"]}, ["blocking"]);
