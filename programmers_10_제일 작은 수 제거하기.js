function solution(arr) {
    var answer = [];
    var min=Math.min(...arr)
    // console.log(min)
    arr.length!=1?answer=arr.filter(a=>a!=min):answer=[-1]
    return answer;
}