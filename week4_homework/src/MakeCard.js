import React from "react";
import styled from "styled-components";

const MakeCard=(props)=>{

    const refCard=React.useRef(null); 
    const refText=React.useRef(null); 
    const refDes=React.useRef(null); 
    const refEx=React.useRef(null);
    let evCnt=true; 
    const showEvent=()=>{
        console.log(evCnt)
        if(evCnt){
        refCard.current.style.width='1400px';
        refText.current.textContent=props.text;
        refDes.current.textContent=props.des;
        refEx.current.textContent=props.ex;
        evCnt=false;
        }else {
            refCard.current.style.width="calc((1200px - (10px * 2+20px*2)) / 3)"
            refText.current.textContent=props.text;
            refDes.current.textContent=props.des.length>14?props.des.substring(0,15)+`...`:props.des;
            refEx.current.textContent=props.ex.length>14?props.ex.substring(0,15)+`...`:props.ex;
            evCnt=true;

        }

      
    }

    React.useEffect(() => {
        // 여기가 rendering 때 실행될 구문이 들어가는 부분입니다.
        // componentDidMount, componentDidUpdate일 때 동작하는 부분이 여기예요.
        refCard.current.addEventListener("click", showEvent);
        
        return () => {
            // 여기가 clean up 부분입니다.
            // componentWillUnmount 때 동작하는 부분이 여기예요.
            (refCard.current)?.removeEventListener("click", showEvent);
        };
      }, []);

    
    return(
                <Card ref={refCard}>
                    <div>
                    <CardTitle >단어</CardTitle>
                    <CardContent ref={refText} style={{fontWeight:'bold'}}  >{props.text}</CardContent>
                    </div>
                    <div>
                    <CardTitle>설명</CardTitle>
                    <CardContent ref={refDes} >{props.des.length>14?props.des.substring(0,15)+`...`:props.des}</CardContent>
                    </div>
                    <div>
                    <CardTitle>예시</CardTitle>
                    <CardContent style={{color:"blue"}} ref={refEx}>{props.ex.length>14?props.ex.substring(0,15)+`...`:props.ex}</CardContent>
                    </div>
                    
                </Card>
    );
}

export default MakeCard;

const Card=styled.div`

    padding-top: 10px;
    border: 2px solid #7d7d7d;
    height: 150px;
    display: flex;
    flex-direction: column;
    padding-left: 10px;

    width: calc((1200px - (10px * 2+20px*2)) / 3);

    position: relative;
    border-radius: 10px;
`

const CardTitle=styled.div`
    font-size: 5px;
    margin: 5px;
    font-family: ChosunGu, "Noto Sans SC", sans-serif;

`
const CardContent=styled.div`
`