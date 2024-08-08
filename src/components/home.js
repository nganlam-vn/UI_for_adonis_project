import '../App.css';
import { useState, useEffect } from 'react';
import { Flex, Layout, Card } from 'antd';
import fetchAPI from '../fetch';
const { Header, Footer, Sider, Content } = Layout;


// const CompanyUsers = ({username, email, password}) => {
//   return (
//     <Card>
//       <h3>{username}</h3>
//       <p>{email}</p>
//       <p>{password}</p>
//     </Card>
//   );
// }

function Home() {
    const [username, setUsername] = useState(null);
    const [id, setId] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
   
  return(
    <Flex gap="middle" wrap>
    <Layout className='layoutStyle'>
    <Sider width="25%" className='siderStyle'>
        Sider
      </Sider>
      <Layout>
        <Header className='headerStyle'>List of Company's Users</Header>
        <Content className='contentStyle'>
    
          
          </Content>
        <Footer className='footerStyle'>Footer</Footer>
      </Layout>
      
    </Layout>
  </Flex>
  );
}

export default Home;