import React, {useState} from 'react';
import "./HistoryCard.css";

const HistoryCard = () => {
  return (
    <div className='psh_portfolio-history-card'>
      <h3>이력</h3>
      <div className="psh__history-data">
        <div>
            학력
        </div>
      </div>
      <div className="psh__history-data">
        <div>
            경력
        </div>
      </div>
    </div>
  );  
}

export default HistoryCard