import React from 'react'
import "./About.css"
import Button from '../../component/button/Button'

interface PopupBtnProps {
    openPopup: () => void;
}

const About: React.FC<PopupBtnProps> = ({openPopup}) => {
    return (
        <div className="psh__portfolio-right-body-conatainer-about">
            <div className="psh__portfolio-right-body-conatainer-about-wrap">
                <h3>소개</h3>
                <Button props={'확인하기'} openPopup={openPopup} />
            </div>
        </div>
    )
}

export default About