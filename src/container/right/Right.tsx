import React from 'react';
import "./Right.css"
import { About, History, Portfolio, Etc } from "../index";

const Right = () => {
  return (
    <div className='psh__portfolio-right'>
      <div className="psh__portfolio-right-header">
        <h1>Hello!</h1>
      </div>
      <div className="psh__portfolio-right-body">
        <div className="psh__portfolio-right-body-title">
          <h3>Take a see my profile</h3>
        </div>
        <div className="psh__portfolio-right-body-conatainer">
          <About />
          <History />
          <Portfolio />
          <Etc />
        </div>
      </div>
    </div>
  )
}

export default Right