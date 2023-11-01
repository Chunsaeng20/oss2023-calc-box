const lib = require("./lib");

if (process.argv.length <= 3)
{
    console.log("Insufficient parameter!");
    process.exit(1);
}

let command = process.argv[2];

let numbers = process.argv
    .slice(3, process.argv.length)
    .map((n) => parseFloat(n));

if (numbers.some((n) => isNaN(n)))
{
    console.log("Some arguments are not numbers!");
    process.exit(1);
}

let result;
switch (command)
{
    case "avg":
        result = lib.avg(numbers);
        break;
    case "prime":
        result = lib.prime(numbers[0]);
        break;
    case "fact":
        result = lib.fact(numbers[0]);
        break;
    default:
        console.log("Wrong command!");
        process.exit(1);
}

console.log(result);
