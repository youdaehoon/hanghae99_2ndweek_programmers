// https://programmers.co.kr/learn/courses/30/lessons/42586

//shift 예시 제일 앞 제거 및 가져오기
// let array = [100, 200, 300, 400 ,500];

// console.log(array.shift());  // 100
// console.log(array);  // [ 200, 300, 400, 500 ]


//pop 예시 제일 마지막 제거 및 가져오기
// let array = [100, 200, 300, 400 ,500];

// console.log(array.pop());  // 500
// console.log(array);  // [ 100, 200, 300, 400 ]
//8점
function solution(progresses, speeds) {
    var answer = [];
    var len=speeds.length;
    let arr=new Array();
    for(let i=0;i<speeds.length;i++){
        arr.push(until100(progresses[i],speeds[i])); 
        //함수로 만든 이유  각자더하고 100넘으면 그함수를 뺸다가 좀...

    }
    // console.log(arr)
    // arr 완료되는 날짜 저장
    // let pointer=0;
    let temp_c=1; //asnwer에 들어갈 수
    let st=arr.shift(); //비교할 대상이 들어가는 곳 shift는 원본에 영향을 주기떄문에 아래(1)이 반복구문이 될 수 있었다
    // console.log(st,arr)
    while(arr.length>0){
        if(st>=arr[0]){   //  기준보다 작으면   (arr[0]는 계속 변함 why? shift가 그러하니까)
            arr.shift(); //자르고
            temp_c++;   // 카운트올리고
        }else{ //기준보다 크면
            
            answer.push(temp_c) //카운트 저장하고
            st=arr.shift();  // 자르고,기준으로바꾸고
            temp_c=1;        // 카운트 초기화 후 진행gi
            
            
        }
      
        
    }
answer.push(temp_c) //마지막 temp_c는 while구문에서 안들어가서 따로 넣음
    function until100(a1,a2){

        let count =1;
        while(a1<100){
            a1+=a2;
            count++;
        }
        return count
    }
    
    return answer;
}

console.log(solution([95, 90, 99, 99, 80, 99],[1, 1, 1, 1, 1, 1]	))