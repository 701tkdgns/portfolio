import React from 'react'
import "./Left.css"

const Left = () => {
  return (
    <div className='psh__portfolio-left'>
      <div className="psh__portfolio-left-container">
        <div className="psh__portfolio-left-header">
          <div className="psh__portfolio-left-header-photo">
            <img src="/assets/profile.jpg" alt="profile" />
          </div>
        </div>
        <div className="psh__portfolio-left-body">
          <div className="psh__portfolio-left-body-profile">
            <h3 className='psh__portfolio-left-body-profile-title'>hello!</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Left