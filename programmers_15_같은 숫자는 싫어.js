function solution(arr)
{
    //내가푼것 5점 26.81ms
    var answer = [];
    answer[0]=arr[0];
    arr=arr.reduce((acc,cur)=>acc==cur?acc=cur:(answer.push(cur)) && (acc=cur),arr[0])
    return answer
    
    
   //  // 답안지 57.16ms
   //  var answer=[];
   // return arr=arr.filter((e,i,a)=>e!=a[i+1])
    
    
}