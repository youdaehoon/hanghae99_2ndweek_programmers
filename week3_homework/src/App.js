import React from "react";
import Detail from "./Detail";
import styled from "styled-components";
import Main from "./main";
import{Route, Routes}from "react-router-dom"


function App() {

  return (
    <div className="App">
        <My_wrap>
       
          <Routes>
            <Route path="/" element={<Main />} />
                         
           <Route path="Detail" element={<Detail />}/>
          </Routes>
          
          
        </My_wrap>
    </div>
  );
};

const My_wrap = styled.div`
max-width: 350px;
    width: 80vw;
    height: 90vh;
    margin: 5vh auto;
    padding: 5vh 0px;
    border: 1px solid rgb(221, 221, 221);
    box-sizing: border-box;
    border-radius: 5px;
`;




export default App;
