import React from "react";
import { MailOutlined, LockOutlined, UserOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import "./CrearCuenta.css";

function CrearCuenta() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/home"); 
  };

  return (
    <div className="centered-background">
      <div className="login-container">
        <form onSubmit={handleSubmit}>
          <h1>Crear Cuenta</h1>
          <div className="input-box">
            <input 
              placeholder="Nombre" 
              type="text" 
              required 
            />
            <UserOutlined className="icon" />
          </div>
          <div className="input-box">
            <input 
              placeholder="Correo electrónico" 
              type="email" 
              required 
            />
            <MailOutlined className="icon" />
          </div>
          <div className="input-box">
            <input 
              placeholder="Contraseña" 
              type="password" 
              required 
            />
            <LockOutlined className="icon" />
          </div>
          <button type="submit">Registrar</button>

          <div className="register-link">
            <p>
              ¿Ya tienes cuenta? <Link to="/">Iniciar sesión</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CrearCuenta;
