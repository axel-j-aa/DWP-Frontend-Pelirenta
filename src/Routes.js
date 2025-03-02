// routes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Pages/Login/Login';
import CrearCuenta from './Pages/CrearCuenta/CrearCuenta';
import Home from './Pages/Home/Home';
import Contactanos from './Pages/Contactanos/Contactanos';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/crearcuenta" element={<CrearCuenta />} />
      <Route path="/home" element={<Home />} />
      <Route path="/contactanos" element={<Contactanos />} />
    </Routes>
  );
}

export default AppRoutes;
