import React from 'react';
import "./HistoryCard.css";

const HistoryCard = () => {
  return (
    <div className='psh_portfolio-history-card'>
      <h2>이력</h2>
      <div className="psh__history-data">
        <div><h3>경력</h3></div>
        <div>
          <h4>행복한다람쥐단 :<span> 2022/06 ~</span></h4>
        </div>
      </div>
      <div className="psh__history-data">
        <div><h3>자격증</h3></div>
        <div><h4>정보처리기사</h4></div>
      </div>
    </div>
  );  
}

export default HistoryCard