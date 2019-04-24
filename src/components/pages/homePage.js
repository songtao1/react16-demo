import React, { Component } from 'react';
import styled from "styled-components";
import {Button} from "antd";
const Con = styled.div`
    font-size:30px;
    color:red;
`;
class HomePage extends Component{
    componentDidMount(){
        this.props.getData();
    }
    render(){
        const {homeData,broadcastList} = this.props;
        console.log(111,homeData,broadcastList)
        return(
            <Con>
                1112343
                <span className="home-text">1111</span>
                <Button onClick={()=>{this.props.setData()}}>click</Button>
            </Con>
        )
    }
}
export default HomePage;








