import "./App.css";

import 'bootstrap/dist/css/bootstrap.min.css';


import Bookticket from "./components/Bookticket";

import SignUp from "./components/signup";
import React from 'react';
import {  Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import Bookedmenu from "./components/Bookedmenu";
function App() {
  return (

      <Routes>
        <Route  path="/" element={<> <Welcome/></>}/>

      
        <Route path="/booking" element= {<Bookticket />} />
              
        {/* <Route path="/booking/:movieid" element= {<Bookticket />} /> */}
        <Route path="/bookmenu" element= {  <Bookedmenu/>} />

        {/* <Route path="/bookmenu/:price/:count/:movieid" element= {  <Bookedmenu/>} /> */}
        <Route path="/signup" element= {<SignUp />} />
      </Routes>
  );
}

export default App;