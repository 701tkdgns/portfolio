import React from 'react'
import Github from '../../component/github/Github'
import Gmail from '../../component/popup/Gmail'
import "./Left.css"
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'

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
            <h3 className='psh__portfolio-left-body-profile-title'>psh</h3>
            &nbsp;
            <div className="psh__portfolio-left-body-profile-context">
              <h4>I'm SangHoon Park</h4>
              <div className='psh__portfolio-left-body-profile-list'>
                <Github />
                <div id="clickable">
                  <Gmail />
                  <Tooltip anchorSelect="#clickable" clickable>
                    <p>714tkdgns@gmail.com</p>
                  </Tooltip>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Left