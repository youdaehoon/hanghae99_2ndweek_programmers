import React from "react";
import styled from "styled-components";
import StarShow from "./StarShow";

const StarMake=()=>{
    const [squ_count,setcount]=React.useState(0);
    
    React.useEffect(() => {
        console.log('컴포넌트가 화면에 나타남');
        return () => {
          console.log('unmount시 squ_cont는',squ_count,'입니다');
       
        };
      }, []);



    return(
        <Star_Wrap>
            
                {Array.from({length:5}, (val,i)=>{    

                return( <div  key ={i} onClick={()=>
                {
                    setcount(i+1);
                    console.log('버튼을 누르면 squ_count:',squ_count,"입니다.");

                }

                }
                style={{
                border: "0.2px solid black",
                backgroundColor:squ_count<i+1?"white":"yellow",
                width:"20%",
                height:"100%"

                }}/>)
                })}
                <StarShow style={{dispaly:'null'}} detail_count={squ_count}/>
        
        </Star_Wrap>
    )
}
const Star_Wrap=styled.div`
display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 40px;
`
export default StarMake