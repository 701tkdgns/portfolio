import React from 'react';
import "./Right.css"

const Right = () => {
  return (
    <div className='psh__portfolio-right'>
      <div className="psh__portfolio-right-container">
        <div className="psh__portfolio-right-header">
          <h1>박상훈 포트폴리오</h1>
          <hr className='psh__portfolio-right-divider'/>
        </div>
        <div className="psh__portfolio-right-body">
          <div className="psh__portfolio-right-about">
            <div className="psh__portfolio-right-about-body">
              <button className='psh__portfolio-right-about-body-btn'>소개</button>
            </div>
          </div>
          <div className="psh__portfolio-right-history">
            <button className="psh__portfolio-right-history-btn">이력</button>
          </div>
          <div className="psh__portfolio-right-portfolio">
            <button className="psh__portfolio-right-portfolio-btn">포트폴리오</button>
          </div>
          <div className="psh__portfolio-right-blank">
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Right