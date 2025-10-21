(() => {
  window.__WEB_SOCKET_URL__ = "wss://labnest.vip:8002";
  window.__MAIN_FULL_URL__ = "https://labnest.vip:8002";
  window.__MAIN_URL__ = "labnest.vip:8002";

  const base = "https://cdn.jsdelivr.net/gh/Current922/resource@main/js/";
  const scripts = [
    "runtime.9e292c7ee7c878c7.js",
    "polyfills.885d4e3ac3725967.js",
    "styles.a7a28e25e3d5cb6e.js",
    "vendor.7fc8e1afa743cfbb.js",
    "main.dba7916a8ecba815.js",
  ];
  for (const name of scripts) {
    const s = document.createElement("script");
    s.type = "module";
    s.src = base + name;
    document.body.appendChild(s);
  }
})();
