import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import{ createDicFB,createDic} from"./redux/modules/dic"
import { useHistory } from "react-router-dom";



const Detail=()=>{
    const text=React.useRef(null); 
    const des=React.useRef(null);
    const ex=React.useRef(null);


    const history=useHistory();  

    const dispatch=useDispatch()
    
   
    const makeCard=()=>{
        
        if(!text.current.value||!des.current.value||!ex.current.value){
            alert("빈칸을 모두 입력해주세요!")
        }else{

            dispatch(createDic(
                
                {
                text:text.current.value,
                des:des.current.value,
                ex:ex.current.value
            }
            
            
            
            ))
            dispatch(createDicFB({
                text:text.current.value,
                des:des.current.value,
                ex:ex.current.value
            }))   ////서버와 통신은 나중에!
            console.log("여기보세요",text.current.value,des.current.value,ex.current.value);
        history.push("/")
        }

    
        
    }
   
    return(
        
        <Container>
            <Label>용어</Label>
            <Input type="text" ref={text} />
            <Label>설명</Label>
            <Input type="text" ref={des} />
            <Label>예시</Label>
            <Input type="text" ref={ex} />
            <Btn onClick={makeCard}>작성하기</Btn>
        </Container>
    )
}

export default Detail

const Container=styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    width: 80%;
    padding: 40px;
`
const Label=styled.div`
    font-size: 10px;
    padding:5px 0 0 5px;
`
const Input=styled.input`
    height:30px;
    border: 0px;
    border-bottom: 1px solid;
    &:focus{
        outline: none;
        border: 0px;
        border-bottom: 2px solid;

    }
`
const Btn=styled.button`
    width :150px;
    margin: auto;
    margin-top: 20px;
    border-radius: 5px;
`