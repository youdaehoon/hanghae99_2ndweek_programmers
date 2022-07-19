function solution(maps) {
    
    //************************************************** */
    let answer=0;
    let n=maps.length;
    let m=maps[0].length;
    let count=0;
    let route=[]; //count의 배열 담을 곳;
    let dx=[0,0,1,-1];
    let dy=[1,-1,0,0];
    function DFS(x,y){
        
        if(x==n&&y==n){
            route.push(count);
        }else{
            for(let i=0;i<4;i++){
                let nx=x+dx[i];
                let ny=x+dy[i];

                if(nx>=0&&ny>=0&&maps[nx][ny]==1&&ny<=m&&nx<=n){
                    maps[nx][ny]=0;
                    count++;
                    DFS(nx,ny);
                    maps[nx][ny]=1;
                    count--

                }
            }
        }
       
    }
    DFS(0,0)








    //************************************************** */

    // //************************************************** */
    // //답안지
    // let answer = 0;
    // let n = maps.length - 1;
    // let m = maps[0].length - 1;
    
    // let dx = [-1, 0, 1, 0], dy = [0, 1, 0, -1];
    // let routes = [], count = 1;
    
    // function DFS(x, y) {
    //     if(x === n && y === m) {
    //         routes.push(count);
    //     } else {
    //         for(let i = 0; i < 4; i++) {
    //             let nx = x + dx[i];
    //             let ny = y + dy[i];

    //             if(nx >= 0 && nx <= n && ny >= 0 && ny <= m && maps[nx][ny] === 1) {
    //                 maps[nx][ny] = 0; //갔던길 안가게 끊어 버리기
    //                 count++;
    //                 DFS(nx, ny);
    //                 maps[nx][ny] = 1;// 다시복구
    //                 count--; //??
    //             }
    //         }
    //     }
    // }
    
    // maps[0][0] = 0;
    // DFS(0, 0);
    // console.log(routes)
    // if(routes.length) {
    //     answer = Math.min(...routes);//최소값
    // } else {
    //     answer = -1;
    // }
    // //************************************************** */

    return answer;
}

let A={name:"god현오"}

let {name}=A;
console.log(name)