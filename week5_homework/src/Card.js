import React from "react";
import styled from "styled-components";
import { AiTwotoneHeart,AiFillDelete} from "react-icons/ai";
import { BsFillPencilFill } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import {  deletePostFB } from "./redux/modules/post";


const Card=(props)=>{
    const dispatch=useDispatch();
    const data= useSelector((state)=>{
        return state.post
    });
    
    const idFromLogin=data.user.id;
    const idFromMake=props.id
    const deleteCard=()=>{
        console.log("글만든사람",idFromMake,"현재로그인한사람",idFromLogin)
        if(idFromLogin==idFromMake){
            alert("응 너권한있어")
            dispatch(deletePostFB(props.date));
        }else{alert("응 너 권한없어~")}
        
    }
    
    return(
    <div>
        <div>
            <HeadCard>
                <div style={{display:"flex",flexDirection:"row",gap:"20px"}}>
                    <Text>게시자 사진</Text>
                    <Text>{props.nic}</Text>
                </div>
                
            
                <div>{props.date}</div>
            </HeadCard>
            <WrapIcon>
                <div onClick={deleteCard}><AiFillDelete/></div>
                <div ><BsFillPencilFill/></div>
            </WrapIcon>
        </div>
        
        <BodyCard type={props.type}>
            <BodyCh type={props.type}><img style={{width:"100%",height:"100%"}} src={props.img}/></BodyCh>
            <BodyCh type={props.type} style={{textAlign:"center"}}>{props.text}</BodyCh>
        </BodyCard>
        <BotCard>
            <div style={{display:"flex",flexDirection:"row",gap:"20px"}}>
                <Text>종아요 +1</Text><Text>댓글 +2</Text>
            </div>
            <div style={{justifyItem:"ritght"}}><AiTwotoneHeart/></div>
        </BotCard>
    </div>
    );
};

export default Card;


const HeadCard=styled.div`
    display: flex;
    flex-direction: row;

    height: 90px;
    font-size: 14px;
    justify-content:space-between;
`
const WrapIcon=styled.div`
display: flex;
flex-direction: row-reverse;
gap: 10px;
margin-bottom: 10px;
margin-top: -60px;

`
const Text=styled.div`
    font-size: 14px;
    
`

const BodyCard=styled.div`
    /* background-color: blue; */
    display: flex;
    flex-direction: ${props=>props.type=='1'? "row-reverse":props.type=='0'?"row":'column'};
    width: 100% ;
    height:  ${props=>props.type=='2'?"600px":'400px'};
    align-items: center;
  
`
const BodyCh=styled.div`
    /* background-color: green; */
    margin: auto;
    width:  ${props=>props.type=='2'?"100%":'50%'};
    height: ${props=>props.type=='2'?'50%':'100%'};
    border: 1px solid black;
`
const BotCard=styled.div`
    display: flex;
    flex-direction: row;
    height: 50px;
    justify-content: space-between;
    margin-bottom: 40px;
    margin-top: 10px;
`
