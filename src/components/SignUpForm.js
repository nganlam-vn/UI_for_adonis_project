import React from 'react';
import '../App.css';
import { useState} from 'react';
import { Flex, Layout, Form, Input, Button } from 'antd';
const { Header, Footer, Sider, Content } = Layout;


const Forms = ({onCreate }) =>{
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [email, setEmail] = useState(null);
    const onFinish = (values) => {
        console.log('Success:', values);
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

    return(
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
                   
                    rules={[
                        {
                        required: true,
                        message: 'Please input email!',
                        },
                    ]}

                    >
                    <Input type='text' onChange={(e) => setEmail(e.target.value)} value={email}  />
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
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                    >
                    <Button type="primary" className='buttonStyle' htmlType="submit"
                       onClick={() => onCreate(username, email, password)}>
                        Sign Up 
                    </Button>
                   
                    </Form.Item>
                </Form>
      
    );
}
export default Forms;