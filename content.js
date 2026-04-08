document.addEventListener("click", (e) => {
  const link = e.target.closest("a[href]");
  if (!link) return;

  const url = link.href;
  if (!url.match(/^https?:\/\//)) return;

  const excludedDomains = [
    "teams.microsoft.com",
    "login.microsoftonline.com",
    "outlook.office.com",
    "outlook.office365.com",
  ];

  try {
    const hostname = new URL(url).hostname;
    if (excludedDomains.some((d) => hostname === d || hostname.endsWith("." + d))) return;
  } catch {
    return;
  }

  e.preventDefault();
  e.stopPropagation();

  const ftlUrl = url.replace(/^https:/, "ftls:").replace(/^http:/, "ftl:");
  window.location.href = ftlUrl;
}, true);
