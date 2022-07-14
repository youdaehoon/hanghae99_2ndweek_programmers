// 최초의 전략
// 내전략 최대자릿수 많큼 모든 배열의 숫자를 0을 붙여서 맞춘다
// sort한다.

// 2번전략
// 1의자리로 바꾼다 map을 이용해서



function solution(numbers) {
    var answer = '';
    
//    // **************************************************************
//     var temp=[];   
//    temp=numbers.map((v,i)=>{
//         while(v/10>1){
//             v=v/10;
//         }
//        return v;
//     })
//     // **************************************************************

    // 3과 30이 구분이 안된다 ㅠㅠㅠ 키우는 식으로 돌아가자
    
    //**************************************************************
     
    var max=Math.max(...numbers);
    var count=0;
    while(max/10>=1){
            max=max/10;
            count++
        }
    max=10**count;
    // console.log(count,max)
     
    // 로그를 이용해보자
    
    // console.log(Math.log(max))
    // 로그 계산시간 너무 오래 걸린다...
    // map으로 한번에 0붙여보자
    
    var temp=[];
    temp=numbers.map((v,i)=>{
        v=v+0.1;  // 같은 값을 다르게!!! 좋은아이디어
      while(v<max){v=v*10} 
        return v;
    })
    temp2=temp.slice();
    
    temp=temp.sort((a,b)=>{
        return b-a;
        
    })
    var temp3=[];
   temp.map((v,i)=>{
        temp2.map((va,id)=>{
            if(va==v)temp3.push(id)
        })
   })
temp3=[...new Set(temp3)]/// 같은게 여러개면 id를 중복해서 push한다;
    for(let i=0; i<temp3.length;i++){
        answer=answer+numbers[temp3[i]]+''
        
    }
    console.log(answer)
   
    return answer==0?"0":answer

//    //3이랑 30이랑 같다.. 같으면 자릿수 작은게 앞으로 와야한다!!!
//     // var level=new Array(numbers.length).fill(0);
//     // level=numbers.map((v,i)=>{
//     //     temp.
//     // })
//     //     console.log(temp,level)

//     /. 0처리안됨.. 시간에러
    

// //*********************************************************** 
    //답안지
//     numbers=numbers.map((v,i)=>{
//         return v+'';
//     })
//     numbers.sort((a,b)=>{
            
//                 return (b+a)-(a+b);
//                 })
//   answer=numbers.reduce((a,b)=>a=a+b)
    
//     console.log(numbers)
    
//     return answer==0?"0":answer;
}