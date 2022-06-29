function solution(answers) {
    var answer = [];
    var sol1=[1,2,3,4,5];
    var sol2=[2,1,2,3,2,4,2,5];
    var sol3=[3,3,1,1,2,2,4,4,5,5]
    var result=[0,0,0]
    for(let i=0;i<answers.length+1;i++){
        if(sol1[i%5]==answers[i]){result[0]++};
        if(sol2[i%8]==answers[i]){result[1]++};
        if(sol3[i%10]==answers[i]){result[2]++};
    }
    console.log(result)
    var A=[];
    var re=Math.max(...result);
    for(let j=0;j<result.length;j++){
        if(result[j] == re){ A.push(j+1)
            
        }
    }
    console.log(A)
    return answer=A;
}