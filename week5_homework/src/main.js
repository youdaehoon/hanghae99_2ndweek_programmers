import React from "react";
import styled from "styled-components";
//component import
import Card from "./Card";
import { useHistory } from "react-router-dom";
import { AiFillEdit } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { loadPostFB } from "./redux/modules/post";
import { getAuth } from "firebase/auth";


const Main=(props)=>{
    const history=useHistory();
    const dispatch=useDispatch();
    //여기부터//
    const auth=getAuth();
    const user=auth?.currentUser;
    //여기//

    const data= useSelector((state)=>{
        return state.post
    });
    console.log("main에서찍어보리기!",data)
    const id=data.user.id;
    React.useEffect(()=>{
        //여기부터//
      
        
        //여기//
        dispatch(loadPostFB(user));
    },[props.is_login]);
    
    return(
        <div>
         
            {data.list.map((v,i)=>{
               
                return (<Card key={i} text={v.text} img={v.img} date={v.date} nic={v.nic} type={v.type} id={v.id}/>)
            })}
            
            {props.is_login==true?<Btn onClick={()=>{history.push("/Makecard")}}><AiFillEdit size={35} color="white"/></Btn>:<></>}
            
        </div>
    );
};

export default Main;

const Btn=styled.div`
  position: fixed;
  right: 3em;
  bottom: 10%;
  background-color: #1b9cfc8c;
  height: 35px;
  width: 35px;
  border-radius: 50%;
  

`