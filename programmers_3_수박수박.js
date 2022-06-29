function solution(n) {
    var answer = '';
    answer= '수박'.repeat(parseInt(n/2+1)).substr(0,n)
    
    return answer;
}