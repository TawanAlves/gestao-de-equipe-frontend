import React from "react";
import "./App.css";
import Login from "./pages/Login/Login";
import Membros from "./pages/Membros/Membros";
import BaseScreen from "../src/components/Screen/BaseScreen"

import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      {/* <BaseScreen /> */}
      <BrowserRouter>
      <Routes>        
          <Route path="/" element={<Login />} />
          {/* <Route path="/base" element={<BaseScreen />} /> */}
          <Route path="/membros" element={<Membros />} />      
      </Routes>   
    </BrowserRouter>
    </div>
  );
}

export default App;