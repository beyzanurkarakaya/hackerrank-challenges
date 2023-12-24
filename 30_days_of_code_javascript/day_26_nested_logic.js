function processData(input) {
    //Enter your code here
    let dates = input.split("\n")
    let first = dates[0].split(" ").map(Number)
    let second = dates[1].split(" ").map(Number)
    let actDate = new Date(first[2] , first[1] , first[0])
    let expDate = new Date(second[2] , second[1] , second[0])
    let result = 0
    
    if (actDate <= expDate)
        result = 0
    else if (first[1] == second[1] && first[2] == second[2])
        result = 15 * (first[0] - second[0])
    else if (first[2] == second[2])
        result = 500 * (first[1] - second[1])
    else
        result = 10000

    console.log(result)
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
