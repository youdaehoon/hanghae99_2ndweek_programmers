function solution(x) {
    var answer = true;
    let A
    A=(x+"").split("").reduce((acc, cur) => { return acc += Number(cur); }, 0)
    
    return x%A==0;
}