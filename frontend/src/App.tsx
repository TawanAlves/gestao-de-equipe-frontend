import React from "react";
import "./App.css";
import Login from "@/pages/Login/Login";
import Membros from "@/pages/Membros/Membros";
import Dashboard from "@/pages/Dashboard/Dashboard";
import User from "@/pages/User/User";
import Geral from "@/pages/Geral/Geral";
import Historic from "@/pages/Historic/Historic";
import DailyRegister from "./pages/DailyRegister/DailyRegister";
import BaseScreen from "@/components/Screen/BaseScreen";

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
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/user" element={<User />} />
          <Route path="/geral" element={<Geral />} />
          <Route path="/historic" element={<Historic />} />
          <Route path="/dailyregister" element={<DailyRegister />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
