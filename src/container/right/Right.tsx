import React, { useState } from 'react';
import { About, History, Portfolio, Etc } from "../index";
import "./Right.css"
import Popup from '../../component/popup/Popup';

type ButtonType = 'about' | 'history' | 'portfolio';

interface RightProps {
  isPopupOpen: boolean;
  setIsPopupOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Right: React.FC<RightProps> = ({ isPopupOpen, setIsPopupOpen }) => {
  // const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedButton, setSelectedButton] = useState<ButtonType | null>(null);
  const openPopup = (button: ButtonType) => {
    setSelectedButton(button);
    setIsPopupOpen(true);
  }
  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedButton(null);
  }

  return (
    <div className='psh__portfolio-right'>
      <div className="psh__portfolio-right-container">
        <div className="psh__portfolio-right-header">
          <h1>박상훈 포트폴리오</h1>
          <hr className='psh__portfolio-right-divider' />
        </div>
        <div className="psh__portfolio-right-body">
          <About openPopup={() => openPopup('about')} />
          <History openPopup={() => openPopup('history')} />
          <Portfolio openPopup={() => openPopup('portfolio')} />
          <Etc />
        </div>
        {isPopupOpen && selectedButton && (
          <Popup selectedBtn={selectedButton} onClose={closePopup} />
        )}
      </div>
    </div>
  )
}

export default Right