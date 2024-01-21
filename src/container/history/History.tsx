import React from 'react'
import "./History.css"
import Button from '../../component/button/Button'

interface PopupBtnProps {
    openPopup: () => void;
}

const History: React.FC<PopupBtnProps> = ({openPopup}) => {
    return (
        <div className="psh__portfolio-right-body-conatainer-history">
            <div className="psh__portfolio-right-body-conatainer-history-wrap">
                <h3>이력</h3>
                <Button props={'확인하기'} openPopup={openPopup} />
            </div>
        </div>
    )
}

export default History