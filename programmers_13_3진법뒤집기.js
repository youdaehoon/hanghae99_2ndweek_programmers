function solution(n) {
    var answer = 0;
    A=(n.toString(3)+"").split('').reverse().join("")
    //    3진법      문자화    배열    배열뒤집기   문자화
    answer=parseInt(A,3) //3진법 문자
    // console.log(A,typeof(A),typeof(answer))
    return answer;
    
    
//     A=[...n.toString(3)].reverse().join("")
//     answer=parseInt(A,3)
//     console.log(A,typeof(A))
//     return answer;
}