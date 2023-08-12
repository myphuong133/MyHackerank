function solve(n, a) {
    if (a.length === 0) {
        return 0;
    }
    let result = 1;
    let f = [0];
    for (let i = 0; i < a.length; i++) {
        f[i] = 1;
        for (let j = 0; j < i ; j++) {
            if (a[j] < a[i]) {
                f[i] = Math.max(f[i],f[j] + 1);
            }
        }
        result = Math.max(result,f[i])
    }
    return result;
}
console.log(solve(1,[10, 22, 9, 33, 21, 50, 41, 60, 80]));