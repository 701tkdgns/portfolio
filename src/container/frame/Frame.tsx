import React from 'react';
import { Left, Right } from "../index";
import "./Frame.css";

const Frame = () => {
    return (
        <div className='psh__portfolio--frame'>
            <Left />
            <Right />
        </div>
    )
}

export default Frame