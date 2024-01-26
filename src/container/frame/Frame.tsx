import React, { useState } from 'react';
import { Left, Right } from "../index";
import "./Frame.css";

const Frame = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    return (
        <div className='psh__portfolio--frame'>
            <Left />
            <Right isPopupOpen={isPopupOpen} setIsPopupOpen={setIsPopupOpen} />
            {/* {isPopupOpen && <div className='psh__portfolio-dark-bg'></div>} */}
        </div>
    )
}

export default Frame