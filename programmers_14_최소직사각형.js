function solution(sizes) {
    var [a,b]=sizes.reduce(([v0,h0],[v1,h1])=>[Math.max(Math.max(v1,h1),v0),Math.max(Math.min(v1,h1),h0)])
    return a*b
   }