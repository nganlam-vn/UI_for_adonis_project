import '../styles/home.css';
import { useState, useEffect } from 'react';
import { Flex, Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

function PageLayout({content, header, sider, footer}) {
   
  return(
    <Flex gap="middle" wrap>
    <Layout className='layoutStyle'>
    <Sider width="25%" className='siderStyle'>
        {sider}
      </Sider>
      <Layout>
        <Header className='headerStyle'>{header}</Header>
        <Content className='contentStyle'>
            {content}
          </Content>
        <Footer className='footerStyle'>{footer}</Footer>
      </Layout>
      
    </Layout>
  </Flex>
  );
}

export default PageLayout;