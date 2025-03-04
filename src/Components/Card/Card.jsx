import React, { useState } from 'react';
import { Card, Modal, Button } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import './Card.css'; 

import sampleImage from '../../Assets/solo_leveling.jpg'; 

function CustomCard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Card
        hoverable
        cover={<img alt="Ejemplo" src={sampleImage} />}
        onClick={showModal}
      >
        <Card.Meta title="Película Ejemplo" description="Género: Acción" />
      </Card>

      <Modal 
        title="Película Ejemplo" 
        open={isModalOpen} 
        onCancel={handleCancel}
        footer={[
          <Button key="rentar" type="primary" icon={<ShoppingCartOutlined />} onClick={() => alert("Rentado!")}>
            Rentar
          </Button>
        ]}
      >
        <p>Descripción: Esta es una película de acción con muchas explosiones y escenas intensas.</p>
      </Modal>
    </>
  );
}

export default CustomCard;
