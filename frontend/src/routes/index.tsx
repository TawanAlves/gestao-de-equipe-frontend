import React from "react";
// import "./App.css";
import Login from "@/pages/Login/Login";
import Membros from "@/pages/Membros/Membros";
import Dashboard from "@/pages/Dashboard/Dashboard";
import User from "@/pages/User/User";
import Geral from "@/pages/Geral/Geral";
import Historic from "@/pages/Historic/Historic";
import DailyRegister from "@/pages/DailyRegister/DailyRegister";
import BaseScreen from "@/components/Screen/BaseScreen";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoutes";
import { AdminRoute } from "./AdminRoute";
import { AuthProvider } from "@/contexts/AuthContext";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/base"
            element={
              <BaseScreen header="Base">
                <div>Base Test</div>
              </BaseScreen>
            }
          />
          <Route
            path="/membros"
            element={
              <AdminRoute>
                <Membros />
              </AdminRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/user"
            element={
              <PrivateRoute>
                <User />
              </PrivateRoute>
            }
          />
          <Route
            path="/geral"
            element={
              <PrivateRoute>
                <Geral />
              </PrivateRoute>
            }
          />
          <Route
            path="/historic"
            element={
              <PrivateRoute>
                <Historic />
              </PrivateRoute>
            }
          />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <DailyRegister />
              </PrivateRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default AppRoutes;
