chrome.runtime.onInstalled.addListener(() => {
  chrome.declarativeNetRequest.updateDynamicRules({
    removeRuleIds: [1],
    addRules: [
      {
        id: 1,
        action: {
          type: "redirect",
          redirect: {
            regexSubstitution: "ftl\\2",
          },
        },
        condition: { 
          regexFilter: "^(http)(s?://.*)",
          resourceTypes: ["main_frame"],
          excludedRequestDomains: ["teams.microsoft.com"],
        },
      },
    ],
  });
});
