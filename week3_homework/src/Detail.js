import React from "react";
import styled from "styled-components";
import{useNavigate,useLocation} from"react-router-dom"
const Detail=()=>{
    const navigate=useNavigate();

    const location= useLocation();
    const [squ_count,setcount]=React.useState(0);
  

    return (
        <div>
        <Title> {location.state.data1}요일 평점남기기 </Title>
        <Circle>
        {Array.from({length:5}, (val,i)=>{    

return( <div  key ={i} onClick={()=>
{
    setcount(i+1);


}

}
style={{
border: "0.2px solid black",
backgroundColor:squ_count<i+1?"white":"yellow",
width:"20%",
height:"100%"

}}/>)
})}
       
        </Circle>
        <Btn onClick={()=>{
            navigate("/")
        }}>평점남기기</Btn>
        </div>
    );
};

export default Detail;

const Title=styled.h3`
  
    font-size: 1.17em;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem 0px;
    width: 100%;
    
`
const Circle=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 40px;

`
const Btn=styled.button`
    width: 100%;
    background-color: purple;
    border: none;
    border-radius: 5px;
    padding: 1rem;
    color: rgb(255, 255, 255);
`