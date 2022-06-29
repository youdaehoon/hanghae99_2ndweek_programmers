function solution(s) {
    var answer = '';
     var test=s.toUpperCase() ;
     answer=test.replace(/(\w)(\w)/g, (a)=> a[0].toUpperCase() + a[1].toLowerCase())



    console.log(test)
    return answer;
}