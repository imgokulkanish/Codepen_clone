import React from 'react'
import Signupform from './Signupform'
import "./Form.css"
import { Link } from "react-router-dom";
const Form = () => {
    return (
        <>
        <div className="form-container">
            <span className="close-btn">x</span>
            <div className="form-content-left">
                <img src="https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="left" className="form-img"/>
            </div>
            <Signupform/>
        </div>
            
        </>
    )
}

export default Form