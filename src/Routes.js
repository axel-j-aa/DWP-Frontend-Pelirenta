import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import CrearCuenta from "./Pages/CrearCuenta/CrearCuenta";
import Home from "./Pages/Home/Home";
import Contactanos from "./Pages/Contactanos/Contactanos";
import Perfil from "./Pages/Perfil/Perfil";
import MisRentas from "./Pages/MisRentas/MisRentas"; // Importar MisRentas
import Sidebar from "./Layouts/Sidebar/Sidebar";
import CustomHeader from "./Layouts/Header/Header";
import { Layout } from "antd";
import AppFooter from "./Layouts/Footer/Footer"; // Importar Footer

const { Content } = Layout;

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/crearcuenta" element={<CrearCuenta />} />

      {/* Rutas con Sidebar */}
      <Route
        path="/home"
        element={
          <Layout style={{ minHeight: "100vh" }}>
            <CustomHeader />
            <Layout>
              <Sidebar />
              <Layout style={{ marginLeft: 50, padding: 20 }}>
                <Content style={{ background: "#fff", minHeight: 280 }}>
                  <Home />
                </Content>
              </Layout>
            </Layout>
            <AppFooter />
          </Layout>
        }
      />

      {/* Rutas sin Sidebar */}
      {["/contactanos", "/perfil", "/misrentas"].map((path, index) => (
        <Route
          key={index}
          path={path}
          element={
            <Layout style={{ minHeight: "100vh" }}>
              <CustomHeader />
              <Content style={{ background: "#fff", minHeight: 280, padding: 20 }}>
                {path === "/contactanos" && <Contactanos />}
                {path === "/perfil" && <Perfil />}
                {path === "/misrentas" && <MisRentas />}
              </Content>
              <AppFooter />
            </Layout>
          }
        />
      ))}
    </Routes>
  );
}

export default AppRoutes;
