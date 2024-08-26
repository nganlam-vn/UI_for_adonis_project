import '../styles/home.css';
import { useState, useEffect } from 'react';
import { Flex, Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

function PageLayout({content, header, sider, footer}) {
   
  return(
    <Flex gap="middle" wrap>
    <Layout className='layoutStyle'>
    
      <Layout >
        <Header className='headerStyle'>{header}</Header>
        <Content className='contentStyle'>
            {content}
          </Content>
      </Layout>
      
    </Layout>
  </Flex>
  );
}

export default PageLayout;