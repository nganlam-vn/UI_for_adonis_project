import React from 'react';
import '../App.css';
import { useState, useEffect } from 'react';
import { getUsers, deleteUser, updateUser } from '../services/userServices';
import { Flex, Layout, Form, Input, Button, Checkbox } from 'antd';
import User from './User';
const { Header, Footer, Sider, Content } = Layout;

const Forms = ({ user, onEdit, onDelete }) =>{
    const [username, setUsername] = useState(null);
    const [id, setId] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const onFinish = (values) => {
        console.log('Success:', values);
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

    return(
        <Flex gap="middle" wrap>
        <Layout className='layoutStyle'>
        <Sider width="25%" className='siderStyle'>
            Sider
          </Sider>
          <Layout>
            <Header className='headerStyle'>Manage Users</Header>
            <Content className='contentStyle'>
                <Form
                    name="basic"
                    labelCol={{
                    span: 8,
                    }}
                    
                    wrapperCol={{
                    span: 16,
                    }}
                    style={{
                    maxWidth: 600,
                    }}
                    initialValues={{
                    remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item 
                    label="ID"
                    rules={[
                        {
                        required: true,
                        message: 'Please input id!',
                        },
                    ]}
                    >
                    <Input type='text' onChange={(e) => setId(e.target.value)} value={id}/>
                    </Form.Item>
                    <Form.Item 
                    label="Email"
                 
                    rules={[
                        {
                        required: true,
                        message: 'Please input email!',
                        },
                    ]}
                    >
                    <Input type='text' onChange={(e) => setEmail(e.target.value)} value={email} />
                    </Form.Item>
                    <Form.Item
                    label="Username"
                   
                    rules={[
                        {
                        required: true,
                        message: 'Please input username!',
                        },
                    ]}

                    >
                    <Input type='text' onChange={(e) => setUsername(e.target.value)} value={username}  />
                    </Form.Item>

                    <Form.Item
                    label="Password"
                    
                    rules={[
                        {
                        required: true,
                        message: 'Please input password!',
                        },
                    ]}
                    >
                    <Input.Password type='text' onChange={(e) => setPassword(e.target.value)} value={password} />
                    </Form.Item>

                    <Form.Item
                   
                    valuePropName="checked"
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                    >
                   
                    </Form.Item>

                    <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                    >
                    <Button className='buttonStyle' type="primary" htmlType="submit"
                      
                     >
                        Add 
                    </Button>
                    <Button type="primary" className='buttonStyle' htmlType="submit"
                       onClick={() => onDelete(id)}
                      >
                        Delete 
                    </Button>
                    <Button type="primary" className='buttonStyle' htmlType="submit"
                       >
                        Update 
                    </Button>
                    </Form.Item>
                </Form>
              </Content>
           
            <Footer className='footerStyle'>Footer</Footer>
          </Layout>
          
        </Layout>
      </Flex>
      
    );
}
export default Forms;