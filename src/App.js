import './App.css';
import { useState, useEffect } from 'react';
import { Flex, Layout, Card } from 'antd';
const { Header, Footer, Sider, Content } = Layout;


const CompanyUsers = ({username, email, password}) => {
  return (
    <Card>
      <h3>{username}</h3>
      <p>{email}</p>
      <p>{password}</p>
    </Card>
  );
}

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(
      'http://127.0.0.1:3333/users'
    )
    .then((res) => res.json())
    .then((data) => setData(data));
  }, []);
  console.log(data);
  return(
    <Flex gap="middle" wrap>
    <Layout className='layoutStyle'>
    <Sider width="25%" className='siderStyle'>
        Sider
      </Sider>
      <Layout>
        <Header className='headerStyle'>List of Company's Users</Header>
        <Content className='contentStyle'>
            <div>
            {data.map((user) => (
              <CompanyUsers
                key={user.id}
                username={user.username}
                email={user.email}
                password={user.password}
              />
            ))}
          </div>
          </Content>
        <Footer className='footerStyle'>Footer</Footer>
      </Layout>
      
    </Layout>
  </Flex>
  );
  
 

}

export default App;
