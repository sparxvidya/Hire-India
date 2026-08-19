// Combines every per-category seed file into one array.
// Each category lives in its own small file so it's easy to find/edit.
const engineering = require("./engineering");
const product = require("./product");
const data = require("./data");
const design = require("./design");
const marketing = require("./marketing");
const finance = require("./finance");
const hr = require("./hr");

module.exports = [
  ...engineering,
  ...product,
  ...data,
  ...design,
  ...marketing,
  ...finance,
  ...hr,
];
