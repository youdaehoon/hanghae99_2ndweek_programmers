function solution(strings, n) {
    var answer = [];
    var A=[];
    var B=[];
        
    for(let i=0;i<strings.length;i++){
        A.push(strings[i].substr(n,1)+strings[i])
        
    }

    A.sort()
    console.log(A)
     for(let i=0;i<strings.length;i++){
       B.push(A[i].substr(1,A[i].length-1))
        
    }
    console.log(B)
    return answer=B;
}