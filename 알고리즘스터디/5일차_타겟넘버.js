//  https://school.programmers.co.kr/learn/courses/30/lessons/43165

/// *****************************************************
// //시간초과(test1,2)
// [+1+2 -1-2 +1-2 -1+2]
// A=[1,2];     1+2 1-2 -1+2 -1-2
// B=0;
// solution(A,B);



// function solution(numbers, target) {
//     var answer = 0;
//     let A=numbers;
//     let temp=[0]; //초기값
//     // 전략
//     // temp
//     // [0]  -[1,-1]-1꺼내고 계산에 이용[-1,]
//     // number
//     // [1,2]-[2]
//     while(A.length>0){
//         B=A.shift();              //어레이에서 한개씩 꺼낼꺼다
//         let len=temp.length;        
//         for(let i=0;i<len;i++){
//             // console.log(len)
//         temp.push(temp[0]+B)      
//         console.log(temp,"numbers의 젤앞에 수",B) 
//         temp.push(temp[0]-B)
//         console.log(temp,"numbers의 젤앞에 수",B)
//         temp.shift()
    
//         console.log('여기',temp,B)
//         }
        
//     }
//     temp=temp.filter(v=>v==target)
     
    
    
    
//     console.log( "중간최종",temp)
//     return answer=temp.length;
// }

// 
// ***********************************************************************************************************

// *****************************************************
// 답안보고 작성해보기!
// DFS(Depth First Search) vsBFS
function solution(numbers, target) {
    var answer = 0;
    dfs(0,0)
    function dfs(lv,sum){
        console.log(sum)
        if(lv==numbers.length){
            if(sum==target){
                answer++
            }
            return;
        }

        dfs(lv+1,sum+numbers[lv])//A
        dfs(lv+1,sum-numbers[lv])//B
    }
    return answer;
}
// ****************************************************
solution([1,1,1,1],2)



