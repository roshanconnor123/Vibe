const { remote, shell } = require("electron");
const fs = require("fs");
window.remote = remote;
window.shell = shell;
window.directory = __dirname;
window.access = fs.access;
window.electron = true;

