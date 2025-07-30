//NON EXTRA
//console.log("hello worlds!");
//ESECUZIONE TERMINAL: node index.js

//EXTRA

const cosaScrivo = require("./consoleLogModify.js");

const outputConsole = process.argv[2];
const output = cosaScrivo(outputConsole);

console.log(output);