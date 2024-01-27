import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Tooltip } from 'react-tooltip';
import 'react-toastify/dist/ReactToastify.css';
import Github from '../../component/Icons/github/Github';
import Gmail from '../../component/popup/Gmail';
import "./Left.css";

const Left = () => {
  const homepage = process.env.PUBLIC_URL;

  const handleGithubLink = () => {
    window.open("https://github.com/701tkdgns", "_blank");
  };

  const clipEmail = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success("Copied to clipboard");
    } catch (error) {
      toast.error("Failed to copy to clipboard");
    }
  };

  return (
    <div className='psh__portfolio-left'>
      
      <div className="psh__portfolio-left-container">
        <div className="psh__portfolio-left-header">
          <div className="psh__portfolio-left-header-photo">
            <img src={homepage + '/assets/profile.jpg'} alt="profile" />
          </div>
        </div>
        <div className="psh__portfolio-left-body">
          <div className="psh__portfolio-left-body-profile">
            <h3 className='psh__portfolio-left-body-profile-title'>I'm SangHoon Park</h3>
            &nbsp;
            <div className="psh__portfolio-left-body-profile-context">
              <div className='psh__portfolio-left-body-profile-list'>
                <Github onClick={() => handleGithubLink()} />
                <div id="clickable" onClick={() => clipEmail("714tkdgns@gmail.com")}>
                  <Gmail />
                  <Tooltip id="clickable" clickable>
                    <p>714tkdgns@gmail.com</p>
                  </Tooltip>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>

  );
};

export default Left;