"use strict";

const type = process. env. type;

const configDevServer = require ("./webpack/configDevServer.js");
const configDevelopment = require ("./webpack/configDevelopment.js");
const configProduction = require ("./webpack/configProduction.js");



if (type == "production") {
  module. exports = configProduction ();
  return true;
}

if (type == "development") {
  module. exports = configDevelopment ();
  return true;
}

if (type == "devServer") {
  module. exports = configDevServer ();
  return true;
}
