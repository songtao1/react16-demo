import React, { Component,useState,useEffect } from 'react';
import styled from "styled-components";
import {Button,Input} from "antd";
const Con = styled.div`
    font-size:30px;
    color:red;
`;
class HomePage extends Component{
    componentDidMount(){
        this.props.getData();
    }
    input = React.createRef();
    hookFnc = () => {
        console.log()
    }
    
    render(){
        const {homeData,broadcastList} = this.props;
        console.log(111,homeData,broadcastList)
        return(
            <Con> 
                22111
                <span className="home-text">1111</span>
                <Button onClick={()=>{this.props.setData()}}>click</Button>
            </Con>    
        )
    }
}
// export default HomePage;

// function HomePage(){
//     const [count,setCount] = useState(1);
//     const hookFnc =  () =>{
//         setCount(count+1)
//         console.log(count)
//     }
//     return(
//         <div>  
//             {count}
//             <Button onClick={hookFnc}>clik</Button>
//         </div>   
//     )  
// }
export default HomePage





