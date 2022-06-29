function solution(n)
{
    var answer = 0;
    // // while구문 사용
    // var a=0;
    // while(n>0){
    //     a = n%10+a
    //     n = parseInt(n/10)
    // }
    // answer=a
    
    //reduce함수 사용
    var test= (n+'').split('').reduce((acc,cur)=>{return acc+=parseInt(cur)},0)
    // console.log(test)
    answer=test;
    
    return answer;
}