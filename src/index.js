const fs = require("fs");
const path = require("path");

// Build paths relative to current file
const inputPath = path.join(__dirname, "input.txt");   // input.txt in same folder as index.js
const outputPath = path.join(__dirname, "output.txt"); // output.txt will be created here

// Read the file
const data = fs.readFileSync(inputPath, "utf8");

// Split lines and sum numbers
let ans = 0;
const lines = data.trim().split("\n");

lines.forEach(line => {
  const parts = line.split(" ");       // ["apple", "10"]
  ans += parseInt(parts[1], 10);       // add the number
});

// Write the result
fs.writeFileSync(outputPath, ans.toString());
console.log(`Sum written to ${outputPath}: ${ans}`);
