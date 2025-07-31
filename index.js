//NON EXTRA
//console.log("hello worlds!");
//ESECUZIONE TERMINAL: node index.js

//EXTRA

let output = "";
const cosaScrivo = require("./consoleLogModify.js");

let outputConsole = process.argv[2];
if(outputConsole !== undefined){
    output = cosaScrivo(outputConsole);
}
else{
    output = "non è stato inserito niente in input..."
}
console.log(output);