import React from "react";
import styled from "styled-components";
//componet
import Header from "./Header";
import Card from"./Card";
import Login from "./Login";
import Signup from "./Signup";
import Makecard from "./Makecard";
import Main from "./main";
import{Switch,Route}from"react-router-dom"
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./shared/firebase";


function App() {
  const [is_login, setIsLogin] = React.useState(false);
  

  // console.log("여기서 테스트!",auth.currentUser);
  // const user_docs=await getDocs(query(collection(db,'users'),where("id","==",refId.current.value)))
  //                       console.log(user_docs)

  const loginCheck = async (user) => {
    if (user) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  };
  

  React.useEffect(() => {
    onAuthStateChanged(auth, loginCheck);
  }, []);

  return (
    <Wrap>
       <Header is_login={is_login}/>
       <div>
       <Switch>
        {/* 라우트에서 props주는 법 */}
       <Route exact path="/" render={() => <Main is_login={is_login} />}/> 
       <Route exact path="/Login" component={Login} />
       <Route exact path="/Signup" component={Signup} />
       <Route exact path="/Makecard" component={Makecard} />

       </Switch>
       </div> 

       {/* <Card/> */}
       {/* <Login/> */}
       {/* <Signup/> */}
       {/* <Makecard/> */}
   
    </Wrap>
    
  );
}

export default App;

const Wrap=styled.div`
  width: 1000px;
  margin: 0 auto;
 
`


