export function incognitoAllowedCheck() {
  return new Promise((resolve) => {
    chrome.extension.isAllowedIncognitoAccess(resolve);
  });
}
