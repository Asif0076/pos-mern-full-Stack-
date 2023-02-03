import '../styles/DefaultLayout.css';
import {useSelector} from "react-redux"
import {
  ShoppingCartOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserOutlined,
    LogoutOutlined,
    HomeOutlined,
    CopyOutlined,
    UnorderedListOutlined,
  } from '@ant-design/icons';
  import { Layout, Menu, theme } from 'antd';
  import React, { useState,useEffect } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import Spinner from './Spinner';

  const { Header, Sider, Content } = Layout;
 
 
  const DefaultLayout = ({ children }) => {
    const navigate = useNavigate()
    const {cartItems, loading} = useSelector((state) => state.rootRuducer)
    const [collapsed, setCollapsed ] = useState(false);

    const {
      token: { colorBgContainer },
    } = theme.useToken();

//to get local storage data
useEffect(() => {
localStorage.setItem('cardItems', JSON.stringify(cartItems))
},[cartItems])  

    return (
      <Layout>
        {loading && <Spinner/>}
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo">
            <h2 className='text-center text-light font-wight-bold'>ACE PIZZA</h2>
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={window.location.pathname}>
            <Menu.Item key='/' icon={<HomeOutlined />}>
            <Link to='/'>Home</Link>
            </Menu.Item>
            <Menu.Item key='/bills' icon={<CopyOutlined />}>
            <Link to='/bills' >Bills</Link>
            </Menu.Item>
            <Menu.Item key='/items' icon={<UnorderedListOutlined />}>
            <Link to='/items' >Items</Link>
            </Menu.Item>
            <Menu.Item key='/customers' icon={<UserOutlined />}>
            <Link to='/customers' >Customers</Link>
            </Menu.Item>
            <Menu.Item key='/logout' icon={<LogoutOutlined />}>
            LogOut
            </Menu.Item>
          </Menu>
          </Sider>
        
        <Layout className="site-layout">
          <Header
            style={{padding: 0,background: colorBgContainer,}}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: () => setCollapsed(!collapsed),
            })}

            <div className='card-item' onClick={() => navigate('/cart')}>
              <p>{cartItems.length}</p>
              <ShoppingCartOutlined/>
            </div>
          
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
           {children}
        
          </Content>
        </Layout>
      </Layout>
    );
  };
  export default DefaultLayout;