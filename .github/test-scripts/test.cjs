const { npmRunPath } = require("@esm2cjs/npm-run-path");
const assert = require("assert");

assert(typeof npmRunPath === "function");
