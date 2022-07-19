import React from "react";
import styled from "styled-components";


const MakeCard=(props)=>{

    const refCard=React.useRef(null); 
    const refText=React.useRef(null); 
    const refDes=React.useRef(null); 
    const refEx=React.useRef(null);
    let evCnt=true; 
    const showEvent=()=>{
        console.log("idx는",props.idx%3)
        console.log(evCnt)
        if(evCnt){
          
        refCard.current.style.width='880px';
        refCard.current.style.height='300px';

        refCard.current.style.zindex="3";
       if(props.idx%3==1)
       {refCard.current.style.right="0x";
       refCard.current.style.bottom="184px";
    }
       if(props.idx%3==2){refCard.current.style.bottom="184px";} 
        


        console.log(refCard.current.style)
        refText.current.textContent=props.text;
        refDes.current.textContent=props.des;
        refEx.current.textContent=props.ex;
        evCnt=false;
        }else {
            refCard.current.style.height='150px';

            refCard.current.style.width="calc((900px - ((20px*2) + 50px)) / 3 )"
            refText.current.textContent=props.text;
            refCard.current.style.posirion="relative";
            refCard.current.style.right="0";
            refCard.current.style.bottom="0";

            refCard.current.style.zindex="2";
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
         <div style={{position:"relative"}}>
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
                <Btn><button>삭제하기!</button></Btn>
         </div>
               
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
    background-color: white;

    z-index: 2;

   

    width: calc((900px - ((20px*2) + 50px)) / 3);

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
const Btn=styled.div`
    position: fixed;
    bottom : 10%;
    right : 70px;
    color: #2A1A46;
`