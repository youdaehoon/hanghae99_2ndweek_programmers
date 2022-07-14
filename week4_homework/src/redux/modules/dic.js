import { db } from "../../firebase";
import{collection, getDocs, addDoc } from"firebase/firestore"


// 액션 타입을 정해줍니다.
const CREATE = "dic/CREATE";
const LOAD = "dic/LOAD";


// 초기 상태값을 만들어줍니다.
const initialState = {
    is_loaded:false,

    list:[
            
    ]
    
};

// 액션 생성 함수예요.
// 액션을 만들어줄 함수죠!



export const createDic = (dic) => {
return { type: CREATE, dic };
};

export const loadDic = (dic) => {
    return { type: LOAD, dic };
    };

// middlewares
export const loadDicFB=()=>{
    return async function(dispatch){
        const dic_data= await getDocs(collection(db,"dic"));
        

        let dic_list=[];
        dic_data.forEach((v)=>{
            dic_list.push({...v.data()})
        })
     
        dispatch(loadDic(dic_list))// 스토어에 넣는다

    }
}
export const createDicFB=(dic)=>{
    return async function(dispatch){
         await addDoc(collection(db,"dic"),dic);//서버에 저장한다.
    }
}


// 리듀서예요.
// 실질적으로 store에 들어가 있는 데이터를 변경하는 곳이죠!
export default function reducer(state = initialState, action = {}) {
switch (action.type) {
case "dic/LOAD":
    console.log('로드했어용!',action.dic)
    return{ list : action.dic , is_loaded : true};
    
case "dic/CREATE":
    console.log('먹히냐고')
    // console.log("스테이트확인 크리에이트",state)
const new_dic_list = [...state.list, action.dic];
return { ...state,list: new_dic_list };

default:
return state;
}
}