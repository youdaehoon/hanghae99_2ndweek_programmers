function solution(s) {
    var answer = [];
    var eng=['zero','one','two','three','four','five','six','seven','eight','nine']
  
   //split 이용
    for(i=0;i<10;i++){
        s=s.split(eng[i])
        // console.log(i,s)
        s=s.join(i)
    }              
     return answer=Number(s);
    
 // //replace 이용
 //   s=s.replace(/zero/g,0) 
 //   s=s.replace(/one/g,1) 
 //   s=s.replace(/two/g,2) 
 //   s=s.replace(/three/g,3) 
 //   s=s.replace(/four/g,4) 
 //   s=s.replace(/five/g,5) 
 //   s=s.replace(/six/g,6) 
 //   s=s.replace(/seven/g,7) 
 //   s=s.replace(/eight/g,8) 
 //   s=s.replace(/nine/g,9)
 //   return answer=Number(s);
    
    
}