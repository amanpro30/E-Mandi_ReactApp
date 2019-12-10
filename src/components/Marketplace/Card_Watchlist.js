import React, {Component} from 'react';
import { Card, Form, Col, Button, Badge } from "react-bootstrap";
import {connect} from 'react-redux';
import Axios from 'axios';

class Order_Card extends Component{
    state={
        cropDetail:[]
    }
    headers = {
        "Content-Type": "application/json",
        accept: "application/json",
        Authorization: `JWT ${localStorage.getItem('token')}`,
      }
    componentDidMount(){
        Axios.get('http://localhost:8000/crop/crop1/'+this.props.crop+'/',{ headers: this.headers }).then(res=>{ console.log('**',res.data); this.setState({cropDetail:res.data});});
    }
    render(){
        return(
            Object.values(this.state.cropDetail).map(k => { return (<h1>{k['cropName']} {k['varietyName']} )</h1> 
             })
        )
    }
}

const mapStateToProps = state =>{
    return{
    username:state.auth.username,
    }
  };
  
export default connect(mapStateToProps, null)(Order_Card);