function solution(nums) {
    var answer = 0;
    var len = nums.length
    var A=[];
  
    // console.log(len)
    for(let i=0;i<len-2;i++){
        for(let j=i+1;j<len-1;j++){  // j=2로 실수한적 있음
            for(let k=j+1;k<len;k++){ //k=i+2로 실수한적있음
                A.push(nums[i]+nums[j]+nums[k]);
            }
                
        }
    }
    console.log(A)
    B = A; //  더해진 숫자가 같더라도 집합이 다르면 다른거로 봐야함(착각했엇음)
    // B=A
    // console.log(B)
    
    function is(n){
        if(n===2){
            return true;
              }
       
        for(let i=2; i<parseInt(n/2) ;i++){
            if(n%i==0){
                return false
            }
          
        }    
        return true
    }
    // var A=[1,2,3,4,5,6,7,8,9,10,11,12]
    // var B=[false]
    var count=0
    for(let j=0;j<B.length;j++){
        if(is(B[j])===true){
            count++;
            console.log(B[j])
        }
    }
    console.log(B,is(2))
    return answer=count;
}