function solve(m, n,x ,arr) {
    var array = Array(m);
    for (var i = 0; i < m; i++) {
        array[i] = Array(n).fill(1);
    }

    for (let i = 0; i < arr.length; i++) {
        let centerRadarX = arr[i][0] - 1;
        let centerRadarY = arr[i][1] - 1;

            for (let k = -1; k < 2; k++) {
                for (let l = -1; l < 2; l++) {
                    if ((centerRadarX + k) < 0 || (centerRadarY + l) < 0) {
                        continue;
                    }
                    if ((centerRadarX + k) >= m || (centerRadarY + l) >= n) {
                        continue;
                    }
                    array[centerRadarX + k][centerRadarY + l] = 0;
                }
            }
    }
    let res = '';
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            res += array[i][j] + " "
        }
        res += "\n";
    }
    let safeNum = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (array[i][j] === 0){
                safeNum++;
            }
        }
    }
    console.log(safeNum);
    return safeNum;
}

let arr = [[1,1],[2,4], [4, 1], [4, 3]];
console.log(arr.length);
// solve(8, 8, 5,arr);
