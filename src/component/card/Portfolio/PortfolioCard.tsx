import React from 'react'
import './portFolioCard.css'

const PortfolioCard = () => {
  return (
    <div className='psh_portfolio_portfolio-contents'>
      <h3>포트폴리오</h3>
      <div className="psh_portfolio_portfolio">
        <div>
          <ul>
            <li>1. <a href="https://www.roblox.com/games/10825715607/unnamed" target='blank'>원자력환경공단 메타버스 클라이언트 개발</a><br/> : 2022/09 ~ 2022/11</li>
            <li>2. <a href="https://www.gigca.or.kr/gjgcavr2/tech_tour.html" target='blank'>광주그린카 진흥원 웹 VR 개발</a> : 2022/12 ~ 2023/01</li>
            <li>3. <a href="https://store.steampowered.com/app/2216600/_/?l=koreana" target='blank'>조선메타실록 QA</a> : 2023/03 ~ 2023/06</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default PortfolioCard