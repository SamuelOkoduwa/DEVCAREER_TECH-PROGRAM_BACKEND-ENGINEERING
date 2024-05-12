const process = require('process');


function getCmdArguements() {
    const rawArgs = process.argv;
    const args = {}

    rawArgs.forEach(arg => {
        const [key, value] = arg.split('=');
        args[key] = value;
    });

    return args;
}

const args = getCmdArguements();

if (Object.keys(args).includes("--help")) {
    console.log(`
Welcome to Math CLI!
      Operations supported are:
        - add: Add two numbers, e.g. "ops="add" num1=1 num2=2"
        - sub: Subtract two numbers, e.g. "ops="sub" num1=1 num2=2"
        - div: Divide two numbers, e.g. "ops="div" num1=1 num2=2"
        - mul: Multiply two numbers, e.g. "ops="mul" num1=1 num2=2"
    `)
} else {
    if (args["ops"] && args["ops"] === "add") {
        console.log("Adding num1 and num2");
        console.log(args["num1"] + args["num2"]);
    } else if (args["ops"] && args["ops"] === "sub") {
        console.log("Subtracting num1 and num2");
        console.log(args["num1"] - args["num2"]);
    } else if (args["ops"] && args["ops"] === "mul") {
        console.log("Multiplying num1 and num2");
        console.log(args["num1"] * args["num2"]);
    } else if (args["ops"] && args["ops"] === "div") {
        console.log("Dividing num1 and num2");
        console.log(args["num1"] / args["num2"]);
    } else {
        console.log("Operation not supported");
    }
}

process.exit(0);

