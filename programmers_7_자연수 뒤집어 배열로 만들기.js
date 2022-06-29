function solution(n) {
  var answer = [];
  
 // //for 문 max:5.04ms
 //  a = String(n).split(""); // 문자화
 //  // console.log(a)
 //  b=a.length //범위
 //  c=[]; //빈 array
 //  for(i=0;i<b;i++){
 //      c[i]=Number(a[b-1-i]) //순서바꿔서 숫자화
 //  } 
 //   // console.log(c)
 //     return answer=c;

  
// // while문   max:8.92ms
//         A=[];
//     while(n>0){
//         A.push(n%10)
//         n=parseInt(n/10)
//     }
//     console.log(A)
//           return answer=A;
  
//한줄로해보기  
  var test=(n+"").split("").reverse().reduce((acc,cur)=>answer.push(parseInt(cur)),0)
  console.log(test)
      return answer
}