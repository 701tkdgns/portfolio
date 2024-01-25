import React from 'react';
import "./aboutCard.css";
import { RI, NI, TI, MDI, MYI, REI, HI, CI } from '../../Icons';

const AboutCard = () => {
  return (
    <div className='psh_portfolio_about-contents'>
      <h3>기술 스택</h3>
      <div className="psh_portfolio_about-body">
        <div className="psh_portfolio_about-summary">
          <div className="psh_portfolio_about-summary-container">
            {/* <h4 style={{ padding: '1rem' }}>summary</h4> */}
            <span><HI /> &nbsp; <CI /> &nbsp; <TI /> &nbsp; <RI /></span><br />
            <br />
            <span><NI /> &nbsp; <MYI /> &nbsp; <REI /> &nbsp; <MDI /></span><br />
            <span></span>
          </div>
        </div>
        <div className="psh_portfolio_about-stack">
          <div style={{ padding: '1rem 0' }}><h4>Front : 리액트JS, 타입스크립트, HTML, CSS</h4></div>
          <div><h4>BackEnd : 노드JS, 타입스크립트, MySQL, Redis, MongoDB</h4></div>
        </div>
      </div>
    </div>
  )
}

export default AboutCard