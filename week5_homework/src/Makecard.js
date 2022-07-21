import React from "react";
import styled from "styled-components";


import { useDispatch,useSelector } from "react-redux";
import { createPostFB, updatePostFB} from "./redux/modules/post";
import { getAuth } from "firebase/auth";
import { useHistory, useLocation } from "react-router-dom";
import { uploadBytes,ref,getDownloadURL } from "firebase/storage";
import { storage } from "./shared/firebase";



const Makecard=()=>{
    const [lay,setLay]=React.useState(1);
    const [pic,setPic]=React.useState('');
    const [picdata,setpicdata]=React.useState(null);
    const location=useLocation();
    const history=useHistory();
    const modifyProps=location.state==undefined?false:location.state;
    const modifyFB=()=>{
        
        console.log(modifyProps);
        
        dispatch(updatePostFB(  {
            img:pic,
            text:refText.current.value,
            type:lay,
            nic: data.user.nick,
            date:modifyProps.date,
            id:data.user.id,

           
        })
          
        )
        history.push("/")
    }
    
    const data= useSelector((state)=>{
        return state.post
    });
    console.log('data:',data.user.id)

    const fileInput=React.useRef(null);
    const refText=React.useRef(null);
    const refBtn=React.useRef(null);
    const dispatch=useDispatch();

    React.useEffect(()=>{
        if(modifyProps!==false){
            refText.current.value=modifyProps.text;
            setLay(modifyProps.type);
            setPic(modifyProps.img);
        }
      

    },[])




    const currentTimer=()=>{
        const date= new Date();
        const myDate=`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
        return myDate;
    }

    const select=(e)=>{
  
        console.log(lay)
        
        setPic(URL.createObjectURL(e.target.files[0]));
        setpicdata(e.target.files[0])
       
     
    }

    // uploadBytes(storageRef, file).then((snapshot) => {
    //     console.log('Uploaded a blob or file!');
    //     });

    const uploadFB= async()=>{
        if(!refText.current.value||picdata==null){
           alert("모두입력해주세요!")
            
    }
        else{
            refBtn.current.disabled="false";
            console.log("picdata확인",picdata)
        const uploaded_file= await uploadBytes(ref(storage,`images/${picdata.name}`),picdata);
        const timeCurrent=currentTimer();
        console.log(timeCurrent);
        
        const file_url=await getDownloadURL(uploaded_file.ref);
        setPic(file_url)
        console.log("파일 유알엘은",file_url,"pic 는",pic)
        dispatch(createPostFB({
            img:file_url,
            text:refText.current.value,
            type:lay,
            nic: data.user.nick,
            date:timeCurrent,
            id:data.user.id,

           
        }))
        history.push("/")

        }
        
        

    }
  

    return(
        <Wrap>
           
            <Title>{modifyProps==false?"게시글작성":"게시글수정"}</Title>
            <WrapUpload>
                <Input ></Input> <input type={"file"} ref={fileInput} onChange={select}></input>
            </WrapUpload>
            <WrapLayout>
                <div>레이아웃 고르기</div>
                <div style={{display:"flex",gap:"40px"}}>
                    <div onClick={()=>{setLay(0)}}>오른쪽</div>
                    <div onClick={()=>{setLay(1)}}>왼쪽</div>
                    <div onClick={()=>{setLay(2); console.log(lay)}}>하단</div>
                </div>
             </WrapLayout>
                           
             <BodyCard  lay={lay}>
                <BodyCh lay={lay}>{pic?<img style={{height:"100%",width:"100%"}} src={pic}/>:<img style={{height:"100%",width:"100%"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ5d7jcPWuyY9dvTyIPo8aJFyh5cC5PH3GK_snQKuyZw&s=36"/>}</BodyCh>
                <BodyCh lay={lay}>설명</BodyCh>
             </BodyCard>
            <WrapText>
                <Text>게시물 내용</Text>
                <Textarea ref={refText}></Textarea>
                {modifyProps==false?
                <Btn onClick={uploadFB} ref={refBtn}>게시글 작성</Btn>
                :
                <Btn onClick={modifyFB}>게시글 수정</Btn>
            }
                
            </WrapText>
        </Wrap>
    );
};

export default Makecard;
const Wrap=styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`
const Title=styled.div`
    font-size: 2em;
    font-weight: bold;
    margin-bottom: 30px;
`
const WrapUpload=styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
const WrapLayout=styled.div`
    display: flex;
    flex-direction: row;
    
    justify-content: space-between;
    font-weight: bold;
`

const BodyCard=styled.div`
    /* background-color: blue; */
    display: flex;
    flex-direction: ${props=>props.lay==1? "row-reverse":props.lay==0?"row":'column'};
    width: 100% ;
    height:  ${props=>props.lay==2?"600px":'400px'};
    align-items: center;
  
`
const BodyCh=styled.div`
    /* background-color: green; */
    margin: auto;
    width:  ${props=>props.lay==2?"100%":'50%'};
    height: ${props=>props.lay==2?'50%':'100%'};
    border: 1px solid black;
`

const Input=styled.input`
    width:  50%;
    padding: 10px;
    border : 2px solid rgb(37, 204, 247);
    border-radius: 3px;
    margin-bottom: 20px;;
    box-sizing: border-box;
`
const Btn=styled.button`
    height: 40px;
    width: 100%;
    border: none;
    background-color: #1b9cfc8c;
    border-radius: 3px;
    color: white;
    
`

const WrapText=styled.div`
    display: flex;
    flex-direction: column;
    height: 400px;
`
const Text=styled.div`
    font-size: 8px;
    margin: 5px 0px;
`
const Textarea=styled.textarea`
    height:150px;
    margin-bottom: 20px;
`




