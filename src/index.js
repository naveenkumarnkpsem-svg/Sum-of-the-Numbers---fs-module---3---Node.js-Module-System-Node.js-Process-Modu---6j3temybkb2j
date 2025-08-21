const fs = require("fs");
const data = fs.readFileSync("input.txt", "utf8");
let x = data.trim().split("\n")
let ans = 0
x.map((g)  => {
    let a = g.split(" ");
    ans+=parseInt(a[1]);



})
fs.writeFileSync("output.txt", ans.toString());
