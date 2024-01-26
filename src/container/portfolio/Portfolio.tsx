import React from 'react'
import Button from '../../component/button/Button'
import "./Portfolio.css"

interface PopupBtnProps {
    openPopup: () => void;
}

const Portfolio: React.FC<PopupBtnProps> = ({openPopup}) => {
    return (
        <div className="psh__portfolio-right-body-conatainer-portfolio">
            <div className="psh__portfolio-right-body-conatainer-portfolio-wrap">
                <h3>포트폴리오</h3>
                <Button props={'확인하기'} openPopup={openPopup} />
            </div>
        </div>
    )
}

export default Portfolio