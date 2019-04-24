import React, { Component } from 'react';
import './App.scss';
import {Layout} from 'antd';
import Menu from '@/components/layout/menu';
import styled from "styled-components";
const LogoCon = styled.div`
    width:200px;
    height:100px;
    background:blue;
    margin-bottom:20px;
`;

const { Header, Content, Sider } = Layout;
class App extends Component {
    render() {
    return (
        <Layout style={{ minHeight: '100vh',background:'#fff' }}>
            <Sider style={{background:"#fff",width:200}}>
                <LogoCon/>
                <Menu/>
            </Sider>
            <Layout>
                <Header>
                    111
                </Header>
                <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                    {this.props.children}
                </Content>
            </Layout>
        </Layout>
        );
    }
}

export default App;
