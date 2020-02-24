import * as React from "react";
import Button from 'antd/es/button';
import './style.scss';
import "../../components/Greeting";
import { Greeting } from "../../components/Greeting";

export class Content extends React.Component{
    render(){
        return <div className="content">
            <Greeting name='pangqiu' greeting="hello ~"/>
        </div>
    }
}