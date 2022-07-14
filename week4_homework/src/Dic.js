import React from "react";
import styled from"styled-components";
import{useDispatch, useSelector} from"react-redux"
import{useHistory} from"react-router-dom";
import { loadDicFB } from "./redux/modules/dic";
import { FiPlusCircle } from "react-icons/fi";

import MakeCard from "./MakeCard";




const Dic=()=>{
    const history=useHistory();
    const dispatch=useDispatch();
    const data=useSelector((state)=>{
        return state.dic.list
    });


  
    
    const is_loaded=useSelector(state=>{
        return state.dic.is_loaded});
        console.log("체크",is_loaded)
    // console.log(data,data.length,Array.from(data.length))
    React.useEffect(  ()=>{
            dispatch(loadDicFB())
            console.log("data확인",data)
            // refCard.current.addEventListener("click",showEvent);
            return()=>{
                // refCard.current.removeEventListener("click",showEvent);
            }
        

    
        
     },[]);



    return (
        <div>
              
                <Container>
                { data.map((v,idx)=>{return(
                   
                    <MakeCard key={idx} text={v.text} des={v.des} ex={v.ex} />

                )
                    
                    
                
                })
            }
                </Container>
               
                
               <Btn onClick={()=>{history.push("/detail/")}}><FiPlusCircle size={40}>작성하기</FiPlusCircle></Btn> 
        </div>
       
    )
} 

export default Dic;


const Container=styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 20px;
    margin-top: 20px;
    overflow: hidden;


`





const Btn=styled.div`
    position: fixed;
    bottom : 10%;
    right : 70px;
    color: #2A1A46;
`