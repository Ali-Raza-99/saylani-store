import { useState } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth"
import { app } from '../../Firebase';
import { Link } from 'react-router-dom';
import "./SignUp.css"

const auth = getAuth(app)

const SignUp = () => {

  const onFinish = (values) => {
    console.log('Received values of form: ', values)};
  // my work
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const createUser = () => {
    createUserWithEmailAndPassword(auth, email, password).then(value => alert('success'))
  }

  return (
    <>
    <h3 className="mt-4 display-8">SAYLANI ONLINE STORE LOGIN FORM</h3>
    <hr/>

    <div className='sign-up-page'>
<Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} onChange={e => setEmail(e.target.value)} value={email} type='email' required placeholder='enter your email' />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          onChange={e => setPassword(e.target.value)} value={password} type='passwrod' required placeholder='enter your password' 
        />
      </Form.Item>
     

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
         Log in
        </Button>
        {/* Or <a href="">register now!</a> */}
      </Form.Item>
    </Form>
    </div>
    </>
  )
}

export default SignUp


{/* <label>Email</label>
<input onChange={e => setEmail(e.target.value)} value={email} type='email' required placeholder='enter your email' />
<label>Password</label>
<input onChange={e => setPassword(e.target.value)} value={password} type='passwrod' required placeholder='enter your password' />
<button onClick={createUser}>SignUp</button> */}











