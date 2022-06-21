const concat = require("concat");
(async function build() {
  const files = [
    "./dist/micro-fe/runtime.js",
    "./dist/micro-fe/polyfills.js",
    "./dist/micro-fe/main.js",
  ];
  await concat(files, "./dist/micro-fe/micro-fe.js");
})();
