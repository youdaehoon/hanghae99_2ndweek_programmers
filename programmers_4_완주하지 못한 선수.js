function solution(participant, completion) {
    var answer = '';
    //스터디 풀이법
    participant.sort();
    completion.sort();
    // console.log(participant,completion)
    for(i=0;i<participant.length;i++){
        if(participant[i]!=completion[i])return answer=participant[i];
    }
    
  
}