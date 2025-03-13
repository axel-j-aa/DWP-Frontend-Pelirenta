import React from "react";
import { Layout } from "antd";
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import "./Footer.css";

const { Footer } = Layout;

const AppFooter = () => {
  return (
    <Footer className="footer-container">
      <div className="footer-content">
        <div className="footer-info">
          <h3>Empresa: Pelirenta</h3>
          <p>Correo: contacto@pelirenta.com</p>
          <p>Teléfono: +52 55 1234 5678</p>
          <p>Dirección: Av. Pie de la Cuesta 2501</p>
        </div>
        <div className="footer-socials">
          <FacebookOutlined className="social-icon" />
          <TwitterOutlined className="social-icon" />
          <InstagramOutlined className="social-icon" />
          <YoutubeOutlined className="social-icon" />
        </div>
      </div>
      <div className="footer-copy">&copy; 2025 Pelirenta</div>
    </Footer>
  );
};

export default AppFooter;
