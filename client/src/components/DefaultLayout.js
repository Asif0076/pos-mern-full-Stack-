import '../styles/DefaultLayout.css';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
  } from '@ant-design/icons';
  import { Layout, Menu, theme } from 'antd';
  import React, { useState } from 'react';
import { Link } from 'react-router-dom';
  const { Header, Sider, Content } = Layout;
 
 
  const DefaultLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
      token: { colorBgContainer },
    } = theme.useToken();

    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo">
            <h2 className='text-center text-light font-wight-bold'>ACE PIZZA</h2>
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={window.location.pathname}>
            <Menu.Item key='/' icon={<UserOutlined />}>
            <Link to='/'>Home</Link>
            </Menu.Item>
            <Menu.Item key='/bills' icon={<UserOutlined />}>
            <Link to='/bills' >Bills</Link>
            </Menu.Item>
            <Menu.Item key='/items' icon={<UserOutlined />}>
            <Link to='/items' >Items</Link>
            </Menu.Item>
            <Menu.Item key='/customers' icon={<UserOutlined />}>
            <Link to='/customers' >Customers</Link>
            </Menu.Item>
            <Menu.Item key='/logout' icon={<UserOutlined />}>
            LogOut
            </Menu.Item>
          </Menu>
          

        </Sider>
        <Layout className="site-layout">
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          >
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: () => setCollapsed(!collapsed),
            })}
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    );
  };
  export default DefaultLayout;