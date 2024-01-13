function processData(input) {
    //Enter your code here
    const inputData = input.split("\n")
    const size = parseInt(inputData[0])
    const arrX = inputData[1].trim().split(' ').map(a => parseFloat(a));
    const arrY = inputData[2].trim().split(' ').map(a => parseFloat(a));
    
    console.log(pearson(arrX, arrY, size).toFixed(3));
}

function  pearson(arrX, arrY, n) {
    if (arrX == null || arrY == null || arrX.length != arrY.length) {
        return null;
    }
    const xMean = getMean(arrX);
    const yMean = getMean(arrX);

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
