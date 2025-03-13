import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { AppstoreAddOutlined, FireOutlined, HeartOutlined,StarOutlined,BugOutlined   } from '@ant-design/icons';  
import './Sidebar.css';  

const { Sider } = Layout;

function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Sider width={250} collapsible collapsed={collapsed} onCollapse={toggleSidebar}>
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        <Menu.Item key="1" icon={<AppstoreAddOutlined />}>
          <span>Todas</span>
        </Menu.Item>
        <Menu.Item key="2" icon={<BugOutlined />}>
          <span>Terror</span>
        </Menu.Item>
        <Menu.Item key="3" icon={<FireOutlined />}>
          <span>Acción</span>
        </Menu.Item>
        <Menu.Item key="4" icon={<HeartOutlined />}>
          <span>Romance</span>
        </Menu.Item>
        <Menu.Item key="5" icon={<StarOutlined />}>
          <span>Favoritos</span>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}

export default Sidebar;
