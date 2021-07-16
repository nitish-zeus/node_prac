const { readFile, writeFile } = require("fs");

readFile("./content/first.txt", 'utf8',(err, result) => {
  if (err) {
    return;
  } else {
    console.log(result);
  }
});
