import React from "react";
import { Layout, Menu, Input } from "antd";
import { HomeOutlined, PhoneOutlined, UserOutlined, SearchOutlined } from "@ant-design/icons";
import { Link } from 'react-router-dom';
import "./Header.css";
import logo from "../../Assets/Fondo.jpg";

const { Header } = Layout;

function CustomHeader() {
  return (
    <Header className="custom-header">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>

      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]} className="menu">
        <Menu.Item key="1" icon={<HomeOutlined />}>
          <Link to="/home">Home</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<PhoneOutlined />}>
          <Link to="/contactanos">Contáctanos</Link> 
        </Menu.Item>
        <Menu.Item key="3" icon={<UserOutlined />}>
          Perfil
        </Menu.Item>
      </Menu>

      <Input
        className="search-bar"
        placeholder="Buscar..."
        prefix={<SearchOutlined style={{ color: "rgba(0,0,0,0.45)" }} />}
      />
    </Header>
  );
}

export default CustomHeader;
