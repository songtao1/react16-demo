import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
// import styled from 'styled-components';
import {Link} from 'react-router-dom';
const SubMenu = Menu.SubMenu;
class MenuCon extends Component{
    state = {
        openKeys: ['sub1'],
    };
    rootSubmenuKeys = ['sub1', 'sub2'];
    onOpenChange = (openKeys) => {
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
          this.setState({ openKeys });
        } else {
          this.setState({
            openKeys: latestOpenKey ? [latestOpenKey] : [],
          });
        }
    }
    render(){
        return(
        <div className="menu-con">
            <Menu
                className
                mode="inline"
                openKeys={this.state.openKeys}
                onOpenChange={this.onOpenChange}
                style={{ width: 200 }}
            >
            <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
                <Menu.Item key="1"><Link to="/home">home</Link></Menu.Item>
                <Menu.Item key="2"><Link to="/com">com</Link></Menu.Item>
                <Menu.Item key="3">Option 3</Menu.Item>
                <Menu.Item key="4">Option 4</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
                <Menu.Item key="5">Option 5</Menu.Item>
                <Menu.Item key="6">Option 6</Menu.Item>
                <SubMenu key="sub3" title="Submenu">
                    <Menu.Item key="7">Option 7</Menu.Item>
                    <Menu.Item key="8">Option 8</Menu.Item>
                </SubMenu>
                </SubMenu>
            </Menu>
        </div>
        )
    }
}
export default MenuCon;