function processData(input) {
    //Enter your code here
    const inputData = input.split('\n');
    const features = inputData[0].split(' ').map(a => parseInt(a));
    let m = features[0];
    let n = features[1];
    let X = createMatrix(n, m + 1);
    let Y = createMatrix(n, 1);
    for (let row = 0; row < n; row++) {
        let data = inputData[row + 1].split(' '). map(a => parseFloat(a));
        //console.log(data);
        X[row][0] = 1;
        for (let col = 1; col <= m; col++) {
            X[row][col] = data[col - 1];
        }
        Y[row][0] = data[m];
    }

    const xtx = multiply(transpose(X),X);
    const xtxInv = invert(xtx);
    const xty = multiply(transpose(X), Y);
    const B = multiply(xtxInv, xty);
    const sizeB = B.length;

    const q = parseInt(inputData[n + 1]);
    for (let i = 0; i < q; i++) {
        let data = inputData[i + 9].split(' '). map(a => parseFloat(a));
        let result = B[0][0];
        for (let row = 1; row < sizeB; row++) {
            result += data[row - 1] * B[row][0];
        }
        console.log(result);
    }
}

function createMatrix(length) {
    let arr = new Array(length || 0),
        i = length;

    if (arguments.length > 1) {
        let args = Array.prototype.slice.call(arguments, 1);
        while(i--) arr[length-1 - i] = createMatrix.apply(this, args);
    }

    return arr;
}

function multiply(A, B) {
    const aRows = A.length;
    const aCols = A[0].length;
    const bRows = B.length;
    const bCols = B[0].length;

    let C = createMatrix(aRows, bCols);
    let cRows = C.length;
    let cCols = C[0].length;

    for (let row = 0; row < cRows; row++) {
        for (let col = 0; col < cCols; col++) {
            C[row][col] = 0;
            for (let k = 0; k < aCols; k++) {
                C[row][col] += A[row][k] * B[k][col];
            }
        }
    }
    return C;
}

function transpose(matrix) {
    const originalRows = matrix.length;
    const originalCols = matrix[0].length;
    const rows = originalCols;
    const cols = originalRows;
    let result = createMatrix(rows, cols);

    for (let row = 0; row < originalRows; row++) {
        for (let col = 0; col < originalCols; col++) {
            result[col][row] = matrix[row][col];
        }
    }
    return result;
}

function invert(M){

    if(M.length !== M[0].length) return;

    let i=0, ii=0, j=0, dim=M.length, e=0, t=0;
    let I = [], C = [];
    for(i = 0; i < dim; i += 1){
        I[I.length] = [];
        C[C.length] = [];
        for(j = 0; j < dim; j += 1){

            if(i == j) {
                I[i][j] = 1;
            }
            else {
                I[i][j] = 0;
            }

            C[i][j] = M[i][j];
        }
    }

    for(i = 0; i < dim; i += 1){
        e = C[i][i];

        if(e == 0) {
            for(ii= i + 1; ii < dim; ii += 1) {
                if(C[ii][i] != 0) {
                    for(j=0; j<dim; j++) {
                        e = C[i][j];
                        C[i][j] = C[ii][j];
                        C[ii][j] = e;
                        e = I[i][j];
                        I[i][j] = I[ii][j];
                        I[ii][j] = e;
                    }
                    break;
                }
            }
            e = C[i][i];
            if(e == 0) return;
        }
        for(j = 0; j < dim; j++){
            C[i][j] = C[i][j] / e;
            I[i][j] = I[i][j] / e;
        }
        for(ii = 0; ii < dim; ii++){
            if(ii == i) continue;

            e = C[ii][i];

            for(j = 0; j < dim; j++){
                C[ii][j] -= e*C[i][j];
                I[ii][j] -= e*I[i][j];
            }
        }
    }
    return I;
}



function gaussian(a, index) {
    const n = index.length;
    const c = new Array(n);

    for (let i = 0; i < n; ++i) index[i] = i;

    for (let i = 0; i < n; ++i) {
        let c1 = 0;
        for (let j = 0; j < n; ++j) {
            const c0 = Math.abs(a[i][j]);
            if (c0 > c1) c1 = c0;
        }
        c[i] = c1;
    }

    let k = 0;
    for (let j = 0; j < n-1; ++j) {
        let pi1 = 0;

        for (let i = j; i < n; ++i) {
            let pi0 = Math.abs(a[index[i]][j]);
            pi0 /= c[index[i]];

            if (pi0 > pi1) {
                pi1 = pi0;
                k = i;
            }
        }

        const itmp = index[j];
        index[j] = index[k];
        index[k] = itmp;
        for (let i = j+1; i<n; ++i) {
            const pj = a[index[i]][j]/a[index[j]][j];

            a[index[i]][j] = pj;

            for (let l = j+1; l<n; ++l)
                a[index[i]][l] -= pj*a[index[j]][l];
        }
    }
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
