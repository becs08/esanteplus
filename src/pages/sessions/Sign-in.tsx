import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Form, Input, Switch } from 'antd';
import { LoginOutlined } from '@ant-design/icons/lib';
import PublicLayout from '../../layout/public/Public';


const SignIn = () => {
  const [form] = Form.useForm(); 
  const [loginValue, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const login = () => {
    form
      .validateFields()
      .then(() => {
        console.log('loginValue:', loginValue);
        console.log('password:', password);
        
        if (loginValue === 'becaye' && password === 'passer') {
          navigate('/secretaire');
        } else if (loginValue === 'nafi' && password === 'passer') {
          navigate('/medecin');
        } else {
          navigate('/admin');
        }
      })
      .catch((error) => {
        console.error('Error during form validation:', error);
      });
};

  return (
    <PublicLayout bgImg={`${window.origin}/content/connexion.jpg`}>
      <h4 className='mt-0 mb-1'>Connexion</h4>

      <p className='text-color-200'>Connectez-vous pour accéder à votre compte</p>

      <Form form={form} layout='vertical' className='mb-4'>
        <Form.Item name='login' rules={[{ required: true, message: <></> }]}>
          <Input
            placeholder='Login'
            value={loginValue}
            onChange={e => setLogin(e.target.value)}
          />
        </Form.Item>
        <Form.Item name='password' rules={[{ required: true, message: <></> }]}>
          <Input
            placeholder='Mot de passe'
            type='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </Form.Item>

        <div className='d-flex align-items-center mb-4'>
          <Switch defaultChecked /> <span className='ml-2'>Se souvenir de moi</span>
        </div>

        <Button
          block={false}
          type='primary'
          onClick={login}
          htmlType='submit'
          icon={<LoginOutlined style={{ fontSize: '1.3rem' }} />}
        >
          Connexion
        </Button>
      </Form>
      <br />
      <p className='mb-1'>
        <a href='#'>Mot de passe oublié ?</a>
      </p>

      <p>
        Vous n'avez pas de compte <Link to='../sign-up'>S'inscrire !</Link>
      </p>
    </PublicLayout>
  );
};

export default SignIn;
