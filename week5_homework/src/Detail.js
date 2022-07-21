import React from 'react'
import Card from './Card'
import styled from 'styled-components'
import { useHistory, useLocation } from 'react-router-dom'
import { AiTwotoneHeart,AiFillDelete} from "react-icons/ai";
import { BsFillPencilFill } from "react-icons/bs";

const Detail = () => {
    const location=useLocation();
    console.log(location.state)
    const props=location.state;
    const history=useHistory();
  return (
    <div>
        <div>
            <HeadCard  >
                <div style={{display:"flex",flexDirection:"row",gap:"20px"}}>
                    <Text>게시자 사진</Text>
                    <Text>{props.nic}</Text>
                </div>
                
            
                <div>{props.date}</div>
            </HeadCard>
            <WrapIcon>
                {/* <div onClick={deleteCard}><AiFillDelete/></div>
                <div onClick={updateCard}><BsFillPencilFill/></div> */}
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
        <Btn onClick={()=>{history.push("/")}}>돌아가기</Btn>
    </div>
  )
}

export default Detail


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
const Btn=styled.button`
    height: 40px;
    width: 100%;
    border: none;
    background-color: #1b9cfc8c;
    border-radius: 3px;
    color: white;
    
`
