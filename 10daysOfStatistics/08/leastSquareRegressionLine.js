function processData(input) {
    //Enter your code here
    const inputData = input.split('\n');
    const score = 80;
    let x = new Array;
    let y = new Array;

    for (let i = 0; i < inputData.length; i++) {
        let data = inputData[i].split(' ').map(a => parseInt(a));
        x.push(data[0]);
        y.push(data[1]);
    }

    const b = pearson(x, y) * (stdDev(y) / stdDev(x));
    const a = getMean(y) - b * getMean(x);

    const result = a + b * score;
    console.log(result.toFixed(3));
}

function  pearson(arrX, arrY) {
    if (arrX == null || arrY == null || arrX.length != arrY.length) {
        return null;
    }
    const xMean = getMean(arrX);
    const yMean = getMean(arrX);
    const n = arrX.length;

    let numerator = 0;
    for (let i = 0; i < n; i++) {
        numerator += (arrX[i] - xMean) * (arrY[i] - yMean);
    }
    return numerator / (n * stdDev(arrX) * stdDev(arrY));
}

function getMean(arr) {
    if (arr == null) {
        return null;
    }
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

function stdDev(arr) {
    let arrSum = 0, newArrSum  = 0
    arr.forEach((element) => arrSum += element)
    let mean = arrSum/arr.length
    
    let newArr = arr.map((x) => (x - mean) ** 2)
    newArr.forEach((element) => newArrSum += element)
    
    let stdDev = newArrSum/newArr.length
    return Math.sqrt(stdDev)
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
