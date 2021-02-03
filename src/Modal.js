import { Component } from "react";
// import React, {Component} from 'react';
import ReactDOM from 'react-dom';


const modalRoot = document.getElementById('modal');
const element = document.createElement('div');


class Modal extends Component {
    componentDidMount(){
        modalRoot.appendChild(element)
    }
    componentWillUnmount(){
        modalRoot.removeChild(element)
    }
    render() {
        return ReactDOM.createPortal(this.props.children, element)

        
    }
        
    

}



export default Modal;

// return ( props.displayModal ? modal : null);
