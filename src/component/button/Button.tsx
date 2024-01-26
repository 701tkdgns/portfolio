import React from 'react'
import "./Button.css"

interface buttonInterFace {
  props : string;
  openPopup: () => void;
}

const Button: React.FC<buttonInterFace> = ({props, openPopup}) => {
  return (
    <button onClick={openPopup} className='psh__portfolio-button'>{props}</button>
  )
}

export default Button