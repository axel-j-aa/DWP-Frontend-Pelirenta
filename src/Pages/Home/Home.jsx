import React from 'react';
import { Layout } from 'antd';
import CustomCard from '../../Components/Card/Card';  
import './Home.css';

const { Content } = Layout;

function Home() {
  return (
    <Layout style={{ minHeight: '100vh' }} className="home-layout">

      <Layout>

        <Layout style={{ marginLeft: 50, padding: 20 }}> 
          <Content style={{ background: '#fff', minHeight: 280 }}>
            <div className="home-content">
              <h2>Todas las Peliculas</h2>
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
