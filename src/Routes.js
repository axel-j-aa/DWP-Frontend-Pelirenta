import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import CrearCuenta from "./Pages/CrearCuenta/CrearCuenta";
import Home from "./Pages/Home/Home";
import Contactanos from "./Pages/Contactanos/Contactanos";
import Perfil from "./Pages/Perfil/Perfil";
import Sidebar from "./Layouts/Sidebar/Sidebar";
import CustomHeader from "./Layouts/Header/Header";
import { Layout } from "antd";

const { Content } = Layout;

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/crearcuenta" element={<CrearCuenta />} />

      {/* Páginas con Sidebar y Header */}
      {["/home", "/contactanos", "/perfil"].map((path, index) => (
        <Route
          key={index}
          path={path}
          element={
            <Layout style={{ minHeight: "100vh" }}>
              <CustomHeader />
              <Layout>
                <Sidebar />
                <Layout style={{ marginLeft: 50, padding: 20 }}>
                  <Content style={{ background: "#fff", minHeight: 280 }}>
                    {path === "/home" && <Home />}
                    {path === "/contactanos" && <Contactanos />}
                    {path === "/perfil" && <Perfil />}
                  </Content>
                </Layout>
              </Layout>
            </Layout>
          }
        />
      ))}
    </Routes>
  );
}

export default AppRoutes;
