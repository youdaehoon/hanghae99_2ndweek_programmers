function solution(n) {
    var answer = 0;
    var b=Math.sqrt(n)
    var a=0;
    if(a=Number.isInteger(b)){answer=(b+1)*(b+1)}else{answer=-1}

    return answer;
}