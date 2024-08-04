import './App.css';
import { useState, useEffect } from 'react';
import { Flex, Layout, Form, Input, Button, Checkbox } from 'antd';
import fetchAPI from './fetch';
const { Header, Footer, Sider, Content } = Layout;

function Forms() {
    const [username, setUsername] = useState(null);
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
            <Header className='headerStyle'>List of Company's Users</Header>
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
                    label="Email"
                    name="email"
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
                    name="username"
                    rules={[
                        {
                        required: true,
                        message: 'Please input username!',
                        },
                    ]}

                    >
                    <Input type='text' onChange={(e) => setUsername(e.target.value)} value={username} />
                    </Form.Item>

                    <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                        required: true,
                        message: 'Please input password!',
                        },
                    ]}
                    >
                    <Input.Password type='text' onChange={(e) => setPassword(e.target.value)} value={password}/>
                    </Form.Item>

                    <Form.Item
                    name="remember"
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
                    onClick={async()=> {
                        let result = await fetchAPI('/store', 'POST', {
                            username, email, password
                        })
                        console.log(result)
                        if (result.ok) { //.ok check if the status code is 200
                            alert('User added successfully')
                        } else {
                            alert('Failed to add user')
                        };
                    }} >
                        Add 
                    </Button>
                    <Button type="primary" className='buttonStyle' htmlType="submit">
                        Delete 
                    </Button>
                    <Button type="primary" className='buttonStyle' htmlType="submit">
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