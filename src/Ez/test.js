let s = "13.5 4456.23423423 723424.12 234234.1 534234.432 15.5";
let x = 0;
solve(s, x);


function solve(s, x) {
    s.trim();
    let list = s.split(" ");
    console.log(list);
    let listFloat = [];
    for (let i = 0; i < list.length; i++) {
        listFloat.push(parseFloat(list[i]));
    }
    let maxGap = Math.abs(listFloat[0] - x);
    let result = listFloat[0];
    for (let i = 1; i < listFloat.length; i++) {
        let gap =Math.abs(listFloat[i] - x);
        if ( gap> maxGap){
            maxGap = gap;
            result = listFloat[i];
        }
    }
    return result;
}