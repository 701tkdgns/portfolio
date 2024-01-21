import React, { useEffect } from 'react'
import "./Popup.css"


interface PopupProps {
  onClose : () => void;
}

const Popup : React.FC<PopupProps> = ({ onClose }) => {
  return (
    <div className="psh__portfolio-popup">
      <div className="psh__portfolio-popup-content">
        <p>이곳에 팝업 내용을 추가하세요.</p>
        <button onClick={onClose}>닫기</button>
      </div>
    </div>
  )
}

export default Popup