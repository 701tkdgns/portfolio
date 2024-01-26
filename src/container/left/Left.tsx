import React from 'react'
import Github from '../../component/Icons/github/Github'
import Gmail from '../../component/popup/Gmail'
import "./Left.css"
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'

const Left = () => {
  const homepage = process.env.homepage;
  const handleGithubLink = () => {
    window.open("https://github.com/701tkdgns", "_blank");
  }

  const clipEmail = (text: string) => {
    navigator.clipboard.writeText(text);
  }

  return (
    <div className='psh__portfolio-left'>
      <div className="psh__portfolio-left-container">
        <div className="psh__portfolio-left-header">
          <div className="psh__portfolio-left-header-photo">
            <img src={homepage+'/assets/profile.jpg'} alt="profile" />
          </div>
        </div>
        <div className="psh__portfolio-left-body">
          <div className="psh__portfolio-left-body-profile">
            <h3 className='psh__portfolio-left-body-profile-title'>I'm SangHoon Park</h3>
            &nbsp;
            <div className="psh__portfolio-left-body-profile-context">
              <div className='psh__portfolio-left-body-profile-list'>
                <Github onClick={() => handleGithubLink()}/>
                <div id="clickable">
                  <Gmail onClick={() => clipEmail("714tkdgns@gmail.com")}/>
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