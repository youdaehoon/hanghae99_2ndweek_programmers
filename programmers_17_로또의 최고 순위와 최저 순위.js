function solution(lottos, win_nums) {
    // 5.09ms
    var answer = [];
    var count=0;
    var A=[];
    lottos.reduce((acc,cur)=>{if(cur==0){count+=1}},0);
    var C=lottos.sort((a,b)=>a-b);
    var B=lottos.sort((a,b)=>a-b).slice(count,C.length);
    var count1=0;
    for(let i=0;i<win_nums.length;i++){
        if(win_nums.includes(B[i])){count1+=1}
    }
    
    console.log(count,count1)
    return answer=[7-count-count1>5?6:7-count-count1,7-count1>5?6:7-count1];
    
// //     filter 4.2ms
//     var answer=[];
//     var count0=0;
//     var count=0;
//     lottos=lottos.filter((a)=>{if(a==0)count0++; return a!=0})
//     count=win_nums.filter((a)=>lottos.includes(a)).length
//     console.log(7-count0-count,7-count)
//     answer[0]=7-count0-count>5?6:7-count0-count
//     answer[1]=7-count>5?6:7-count
//     return answer
}