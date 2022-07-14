import React from"react"
import{Route,Switch,useHistory} from"react-router-dom"
import Detail from "./Detail";
import Dic from "./Dic";
import styled from "styled-components";



function App() {
  const history=useHistory();

  return (
    <Container>
        <Title onClick={()=>history.push("/")}>MY DIVTIONARY</Title>
      <Switch>
        <Route exact path="/" component={Dic} />
        <Route exact path="/detail/" component={Detail} />

       
      </Switch>
     
     
    </Container>
  );
}

export default App;


const Container = styled.div`
max-width: 70%;
min-height: 60vh;
width:70%;
background-color: #fff;
padding: 16px;
margin: 20px auto;
border-radius: 5px;
border: 1px solid #ddd;
`;

const Title=styled.div`
    padding: 20px;
/* width: 100 vw; */
    height: 150px;
    background-color: #2A1A46;
    color: white;
    font-family: ChosunGu, "Noto Sans SC", sans-serif;
    font-size: 50px;
    `;