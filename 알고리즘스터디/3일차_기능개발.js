// https://programmers.co.kr/learn/courses/30/lessons/42586

//shift 예시 제일 앞 제거 및 가져오기
// let array = [100, 200, 300, 400 ,500];

// console.log(array.shift());  // 100
// console.log(array);  // [ 200, 300, 400, 500 ]


//pop 예시 제일 마지막 제거 및 가져오기
// let array = [100, 200, 300, 400 ,500];

// console.log(array.pop());  // 500
// console.log(array);  // [ 100, 200, 300, 400 ]



function solution(progresses, speeds) {
    var answer = [];
    var len=speeds.length;
    let arr=new Array(len).fill(0);
    for(let i=0;i<speeds.length;i++){
        arr.push(until100(progresses[i],speeds[i]));

    }
    
    return answer;
}

function until100(a1,a2){

    let count =1;
    whiile(a1<100){
        a1+=a2;
        count++
    }
    return count
}