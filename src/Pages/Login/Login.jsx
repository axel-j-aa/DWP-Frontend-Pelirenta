import React from "react";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import { Link, useNavigate } from 'react-router-dom';  
import './Login.css';

function Login() {
  const navigate = useNavigate();  

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/home'); 
  }

  return (
    <div className="centered-background">
      <div className="login-container">
        <form onSubmit={handleSubmit}>
          <h1>Iniciar sesión</h1>
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
          <button type="submit">Login</button>

          <div className="register-link">
            <p>
              No tienes cuenta? <Link to="/crearcuenta">Registrar</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
