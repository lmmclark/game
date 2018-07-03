import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link  } from 'react-router-dom';
import 'antd/dist/antd.css';
import logo from '../logo.svg';
import './Navi.css'
import AddClass from '../AddClass/AddClass'
import AddStudent from '../AddStudent/AddStudent'
import ShowAll from '../ShowAll/ShowAll'
const { Header, Content, Footer, Sider } = Layout;

class Index extends Component {
    state = {
        collapsed: false,
        mode: 'inline',
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    render() {
        return (
          <Router>
            <Layout>
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                >
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">
                            <Link to="/main/classEntry">
                              <Icon type="video-camera" />
                              <span className="nav-text">班级录入</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                          <Link to="/main/studentEntry">
                            <Icon type="user" />
                            <span className="nav-text">学生录入</span>
                          </Link>
                        </Menu.Item>
                        <Menu.Item key="3">
                          <Link to="/main/showAll">
                            <Icon type="upload" />
                            <span className="nav-text">数据统计</span>
                          </Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#000', padding: 0 }}>
                        <span style={{color:'#fff', paddingLeft:'2%', fontSize:'1.4em'}}>
                            <Icon
                                className="trigger"
                                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                onClick={this.toggle}
                                style={{cursor: 'pointer'}}
                            />
                        </span>
                        <span style={{color:'#fff', paddingLeft:'2%', fontSize:'1.4em'}}>班级人员管理系统(新版本)</span>
                        <span style={{color:'#fff', float:'right', paddingRight:'1%'}}>
                            <img src={logo} className="App-logo" alt="logo" />
                        </span>
                    </Header>
                    <Content style={{ margin: '0 16px' }}>
                        <Route path="/main/classEntry" component={AddClass} />
                        <Route path="/main/studentEntry" component={AddStudent} />
                        <Route path="/main/showAll" component={ShowAll} />
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                         ©2018 Created by limm
                    </Footer>
                </Layout>
            </Layout>
          </Router>
        );
    }
}

export default Index;
