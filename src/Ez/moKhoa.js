function solve(n, a, b) {
    let res = 0;
    for (let i = 0; i < a.length; i++) {
        let distance = Math.abs(a[i] - b[i]);
        res += Math.min(distance,10 - distance);
    }
    return res;
}

