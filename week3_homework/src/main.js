import React, { useEffect, useState } from "react";


import styled from "styled-components";
import{useNavigate} from "react-router-dom"

const Main=()=>{
    const navigate=useNavigate();
    const day=["월","화","수","목","금","토","일"];
    
    //랜덤숫자 만들기
    const make_r=day.map((v,i)=>{
        return{
            day:v,
            num:
            Math.floor(Math.random() * (Math.floor(5) - Math.ceil(1) + 1)) +
            Math.ceil(1)
        };
    });
    let sum=0;
    const avg=make_r.map((v,i)=>{
            return sum+=v.num;
    });
    let num=Math.floor(sum/7*10)/10;

    const [A,SetA]=useState(num);
    const B=()=>{SetA(0)};

    useEffect(() => {
        console.log('컴포넌트가 화면에 나타남');
        return () => {
          console.log('컴포넌트가 화면에서 사라짐');
        };
      }, [sum]);



    console.log(make_r,sum)


    
   
   
    
    return(   
    <>
        <My_text>내 일주일은?</My_text>
                    
                    
                    <Score>


                                
                                    {make_r.map((v,i)=>{
                                        return(  
                                         <Week key={i} >
                                                 <div style={{width:'15%',textAlign:'center'}}>{v.day}</div>
                                                 <Star_Wrap>
                                                 {Array.from({length:5}, (val,ii)=>{    

                                                    return(
                                                         <div
                                                    style={{
                                                    border: "0.2px solid black",
                                                    backgroundColor: v.num<ii+1?"white":"yellow",
                                                    width:"20%",
                                                    height:"100%"

                                                    }}/>)
                                                    })}
                                                </Star_Wrap>    
                                        
                                        <div style={{width:'15%',height:"70%",backgroundColor: 'purple',
    border: 'none',
    borderRadius: '5px',
   textAlign:"center",
    color: 'rgb(255, 255, 255)'}}
                                        onClick={()=>{
                                              navigate('/Detail', {
                                                state: {
                                                    data1: v.day,
                                                  
                                                },
                                              });
                                        }}>
                                            go</div>
                                         </Week>     
                                   
                                       
                                         )

                                    })}
                               
                        
                        
                    </Score>
                
                    <Btn_wrap>
                    <div>평균평점</div>
                    <div>{A}점</div>
                    <button onClick={B}>reset</button>
                    </Btn_wrap>
                    </>

    
    );
};




const My_text = styled.h3`
   
    text-align: center;

`;
const Score=styled.div`
  width: 100%;
  height: 280px;
  /* background-color: red; */
  
`
const Star_Wrap=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 40px;
`

const Week=styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
`
const Btn_wrap=styled.div`
    width: 8rem;
    margin: 1rem auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    padding: 9px;
    font-size: 25px;
    font-weight: bold;
`


export default Main
