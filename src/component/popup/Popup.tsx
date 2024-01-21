import React, { useEffect } from 'react';
import { AC, HC, PC } from '../card';
import X from "../x/X";
import "./Popup.css"

type ButtonType = 'about' | 'history' | 'portfolio';

interface PopupProps {
  selectedBtn: ButtonType;
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ selectedBtn, onClose }) => {
  return (
    <div className="psh__portfolio-popup">
      <div className="psh__portfolio-popup-content">
        <div className="psh__portfolio-popup-header">
          <X onClose={onClose} />
        </div>
        <div className="psh__portfolio-popup-body">
          {selectedBtn === 'about' && <AC/>}
          {selectedBtn === 'history' && <HC />}
          {selectedBtn === 'portfolio' && <PC />}
          <button className='psh__portfolio-popup-button' onClick={onClose}>종료</button>
        </div>
      </div>
    </div>
  )
}

export default Popup