import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, MailOutlined, LockOutlined } from '@ant-design/icons';
import './Perfil.css';

function Perfil() {
  const [isEditable, setIsEditable] = useState(false);

  const handleEdit = () => {
    setIsEditable(true);
  };

  const handleConfirm = () => {
    console.log('Información confirmada');
    setIsEditable(false);
  };

  return (
    <div className="perfil-container">
      <div className="content-wrapper">
        <div className="text-section">
          <h1>Perfil
          <p>Actualiza tu información de perfil</p>
          </h1>
        </div>

        <div className="form-section">
          <h2>Información Personal</h2>
          <Form name="profile-form" className="profile-form">
            <Form.Item
              name="name"
              rules={[{ required: true, message: 'Por favor ingresa tu nombre' }]}
            >
              <Input 
                prefix={<UserOutlined />} 
                placeholder="Nombre completo" 
                disabled={!isEditable}
              />
            </Form.Item>

            <Form.Item
              name="email"
              rules={[{ required: true, message: 'Por favor ingresa tu correo' }]}
            >
              <Input 
                prefix={<MailOutlined />} 
                placeholder="Correo electrónico" 
                disabled={!isEditable}
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Por favor ingresa tu contraseña' }]}
            >
              <Input.Password 
                prefix={<LockOutlined />} 
                placeholder="Nueva contraseña" 
                disabled={!isEditable}
              />
            </Form.Item>

            <Form.Item
              name="confirmPassword"
              dependencies={['password']}
              rules={[
                { required: true, message: 'Por favor confirma tu contraseña' },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('Las contraseñas no coinciden'));
                  },
                }),
              ]}
            >
              <Input.Password 
                prefix={<LockOutlined />} 
                placeholder="Confirmar contraseña" 
                disabled={!isEditable}
              />
            </Form.Item>

            {/* Contenedor de los botones */}
            <div className="button-group">
              <Button className="edit-button" onClick={handleEdit}>
                Editar
              </Button>
              <Button 
                className="confirm-button" 
                onClick={handleConfirm} 
                disabled={!isEditable}
              >
                Confirmar
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Perfil;
