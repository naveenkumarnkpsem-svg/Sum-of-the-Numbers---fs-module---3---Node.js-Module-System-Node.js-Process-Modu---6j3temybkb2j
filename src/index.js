const fs = require("fs");
let input = __dirname + "/input.txt";
let output = __dirname + "/output.txt";
const data = fs.readFileSync(input, "utf8").trim();
let lines = data.split("\n");

let ans = 0;

lines.forEach((line) => {
  let parts = line.split(" ");
  ans += parseInt(parts[1]);
});

console.log(ans);
fs.writeFileSync(output, ans.toString());