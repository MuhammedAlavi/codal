const fs = require("fs");

const { HTML_DIR } = require("../constants");

const rootDirectory = new fs.Dir();
rootDirectory.path = HTML_DIR;

const list = rootDirectory.read();
function readHtmlFile(fileAddress) {
  fs.readFile(fileAddress, "utf-8", (err, data) => {
    if (err) {
      console.error("cant read file!");
    }
    console.log(data);
  });
}
