import React from 'react';
import { Layout } from 'antd';
import Sidebar from '../../Components/Card/Card';  
import CustomCard from '../../Layouts/Sidebar/Sidebar';
import CustomHeader from '../../Layouts/Header/Header';
import './Home.css';

const { Content } = Layout;

function Home() {
  return (
    <Layout style={{ minHeight: '100vh' }} className="home-layout">
      <CustomHeader />
      <Layout>
        <Sidebar />
        <Layout style={{ marginLeft: 50, padding: 20 }}> 
          <Content style={{ background: '#fff', minHeight: 280 }}>
            <div className="home-content">
              <h2>Bienvenido a la página principal</h2>
              <div className="cards-container">
                <CustomCard />
                <CustomCard />
                <CustomCard />
                <CustomCard />
                <CustomCard />
                <CustomCard />
              </div>
            </div>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default Home;
