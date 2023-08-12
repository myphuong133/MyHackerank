function solve(arr) {
    let result = -1;
    for (let i =1;i<arr.length;i++){
        if (arr[i] !== arr[i-1]){
            return i;
        }
        if (arr[0] === 1 || arr[i] === 1){
            result = 0;
        }
    }
    return result;
}
// asdfasdf