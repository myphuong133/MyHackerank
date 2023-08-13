
function findMin(x, y, s) {
    let result = 0;
    let actualPens = 0;
    while (actualPens < s){
        result ++;
        actualPens++;
        if (result % x === 0){
            actualPens += y;
        }
    }
    return result;
}
