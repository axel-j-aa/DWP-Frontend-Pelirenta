import React from "react";
import { MailOutlined, LockOutlined,UserOutlined  } from "@ant-design/icons";
import { Link } from 'react-router-dom';  // Asegúrate de importar Link

function Login() {
  return (
    <div className="login-container">
      <form>
        <h1>Iniciar sesión</h1>
        <div className="input-box">
          <input placeholder="Nombre" type="text" required />
          <UserOutlined  className="icon" />
        </div>
        <div className="input-box">
          <input placeholder="Correo electrónico" type="email" required />
          <MailOutlined className="icon" />
        </div>
        <div className="input-box">
          <input placeholder="Contraseña" type="password" required />
          <LockOutlined className="icon" />
        </div>
        <button type="submit">Crear</button>

        <div className="register-link">
          <p>
            Ya tienes cuenta? <Link to="/">Iniciar Sesión</Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
