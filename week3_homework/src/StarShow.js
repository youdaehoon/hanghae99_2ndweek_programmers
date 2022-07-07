import React from "react";
import styled from "styled-components";




const StarShow=(props)=>{
    const A=props.detail_count==undefined?0:props.detail_count
    const [show_count,setcount]=React.useState(A);
           console.log('자식컴포넌트가 받은 props는',show_count,'입니다')
     
          

    React.useEffect(() => {
      
        return () => {
            
        };
      }, []);
    return(
        <Star_Wrap>






            {Array.from({length:5}, (val,i)=>{    
                   
            return( 
            <div  key ={i}
                style={{
                border: "0.2px solid black",
                backgroundColor:show_count<i+1?"white":"yellow",
                width:"20%",
                height:"100%"

}}
/>)
}
)}
        </Star_Wrap>
        
    );
}

export default StarShow

const Star_Wrap=styled.div`
display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 40px;
`