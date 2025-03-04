import React from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, MailOutlined, LockOutlined } from '@ant-design/icons';
import './Perfil.css';

function Perfil() {
  return (
    <div className="perfil-container">
      <div className="content-wrapper">
        {/* Sección de Texto */}
        <div className="text-section">
          <h1>Perfil</h1>
          <p>Actualiza tu información de perfil</p>
        </div>

        {/* Sección del Formulario */}
        <div className="form-section">
          <h2>Información Personal</h2>
          <Form
            name="profile-form"
            className="profile-form"
            initialValues={{ remember: true }}
            onFinish={handleFormSubmit}
          >
            <Form.Item
              name="name"
              rules={[{ required: true, message: 'Por favor ingresa tu nombre' }]}
            >
              <Input prefix={<UserOutlined />} placeholder="Nombre completo" />
            </Form.Item>

            <Form.Item
              name="email"
              rules={[{ required: true, message: 'Por favor ingresa tu correo' }]}
            >
              <Input prefix={<MailOutlined />} placeholder="Correo electrónico" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Por favor ingresa tu contraseña' }]}
            >
              <Input.Password prefix={<LockOutlined />} placeholder="Nueva contraseña" />
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
              <Input.Password prefix={<LockOutlined />} placeholder="Confirmar contraseña" />
            </Form.Item>

            <Form.Item>
              <Button className="save-button" type="primary" htmlType="submit">
                Guardar Cambios
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );

  function handleFormSubmit(values) {
    console.log('Datos enviados:', values);
  }
}

export default Perfil;
