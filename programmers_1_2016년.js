function solution(a, b) {
    var answer = '';
    var whatday=['FRI','SAT','SUN','MON','TUE','WED','THU'];
    var month_day=
      [ 31,29,31,30,31,30,31,31,30,31,30,31];
    var day=0;
    var week=0;
    if(a==1){}
    else{
        for(i=0;i<a-1;i++){
        day=day+month_day[i]
    }
    }
    
    day=day+b;
    if(day%7==0){
        week=6
    }else{
        week=day%7-1
    }
    
    
    answer=whatday[week]

    
    return answer;
}