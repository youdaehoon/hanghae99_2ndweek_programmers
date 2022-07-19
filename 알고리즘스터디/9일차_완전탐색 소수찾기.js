https://school.programmers.co.kr/learn/courses/30/lessons/42839

function solution(numbers) {
    var answer = 0;
    var temp=[];
    numbers=numbers.split("").sort((a,b)=>a-b);
    // console.log(numbers)
    
    function AA(arr,fix){
        if(arr.length>0){
            for(let i=0;i<arr.length;i++){
                let newfix=fix+arr[i];//뒤에다 붙여나간다...
                let copy=arr.slice();//깊은복사
                copy.splice(i,1);//얕은복사 arr가 크기가 줄어둠
                if(is(parseInt(newfix))){
                    temp.push(newfix);
                }
                AA(copy,newfix)
                
            }
        }
    }
    AA(numbers,'')
    console.log(`소수문자:${temp}`)
    temp=temp.map((v)=>+v);//숫자로바꾸기
    console.log(`숫자로바꿔버렸!:${temp}`)
    temp=[...new Set(temp)]
    console.log(`중복없애버렸!:${temp}`)
    // console.log(temp)
    //splice원본에 영향이있음 배열=>얕은복사
    //slice원본에 영향없음 배열=>깊은복사
    //substring,substr 원본에 영향없음 string
//     var test=[1,2,3,4];
//     var A=test.splice(0,1);
//     console.log(test,A)
    
    
    
    function is(num){
        let i=2;
        if(num==0){return false}
        if(num==1) {return false}
        if(num==2) {return true}
       else{
            while(i<=parseInt(num/2)){
                 if(num%i==0)return false
                else{i++}
                  }
            return true
        }
    }
    

    
   
    return answer=temp.length;
}

let numbers="011"

solution(numbers)