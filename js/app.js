const base = "https://cdn.jsdelivr.net/gh/Current922/resource@main/js/";
const scripts = [
  "runtime.9e292c7ee7c878c7.js",
  "polyfills.885d4e3ac3725967.js",
  "styles.a7a28e25e3d5cb6e.js",
  "vendor.7fc7e1afa743cfba.js",
  "main.dba7916a8ecba813.js",
];
for (const name of scripts) {
  const s = document.createElement("script");
  s.type = "module";
  s.src = base + name;
  document.body.appendChild(s);
}
