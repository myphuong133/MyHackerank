function solve(k, n) {
    let listStudent = [];
    for (let i = 1; i <= n; i++) {
        let num = i;
        for (let j = 0; j < k; j++) {
            num = Math.pow(num, 2);
        }
        listStudent.push(num);
    }
    console.log(listStudent);
    let sum = 0;
    sum = listStudent.reduce((partialSum, a) => partialSum + a, 0);
    sum = sum.toString();
    return parseInt(sum[sum.length - 1]);
}

solve(1, 3);