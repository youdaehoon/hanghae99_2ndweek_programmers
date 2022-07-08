//  https://school.programmers.co.kr/learn/courses/30/lessons/42587


// function solution(priorities, location) {
//     var answer = 0;
//     let Pr=priorities;
//     let len=Pr.length
//     let Lo=location;
//     let temp=0;
//     let temp_A=[];
//     for(let i=0;i<len;i++){
//         temp=Pr.shift()
//         temp<Math.max(...Pr)?Pr.push(i):temp_A.push(i)
//     }

   

  
//     const X=temp_A.concat(Pr)
//     const a=X.map((v,idx)=>{if(v==Lo)answer=idx+1})
//     console.log(X,answer)
//     return answer;
// }

// let A=[1, 1, 9, 1, 1, 1];
// let B=0;


// solution(A,B)









// function solution(priorities, location) {
//     var answer = 0;
//     let Pr=priorities;
    
//     let Lo=location;


//     let temp_A= Recur(priorities)
//     const X=temp_A.concat(Pr)
//     const a=X.map((v,idx)=>{if(v==Lo)answer=idx+1})
//     console.log(X,answer)
//     return answer;
// }

function Recur(AA){
    let len=AA.length;
     
    let temp=0;
    let Pr=AA;
    let temp_A=[];
    let i=0;

    while(Pr.length>0){
        
        temp=Pr.shift()
        if(temp<Math.max(...Pr)){
            Pr.push(temp);
          
        
        }else {
            temp_A.push(temp)
          
        
        }
        console.log(temp_A,Pr.length,i)
        
    }
        
        
    
  
     
  
    
    return temp_A
}

let A=[3,1,4,1,1,2];
let B=0;

console.log(Recur(A))
// solution(A,B)





// function solution(priorities, location) {
//     var answer = 0;
//     let Pr=priorities;
//       const AA=Pr[location]

//     console.log(AA)

    // let cnt=1;
    // let Pr0=Pr.shift
    // let max=Math.max(Pr)
    // let temp=[];
    // if(Pr0<max){
    //     Pr.push(Pr0);
    //     if(Pr0==){
    //         cnt++;
    //     }
        
    //     Pr0=Pr0=Pr.shift;
    // } else{
    //     if(pr0==max){
    //         temp.push(pr0);
    //         Pr0=Pr0=Pr.shift;

    //     }

    // }
  
    
//     return ;
// }

// let A=[3,1,4,1,1,2];
// // let B=0;


// solution(A,B)
