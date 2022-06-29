function solution(arr, divisor) {
    var answer = [];
    var answer=arr.sort((a,b)=>{return a-b;}).filter(number=>number%divisor==0)
    
    return answer.length==0? [-1]:answer;
}