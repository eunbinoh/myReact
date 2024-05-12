import { useState } from 'react';
import '../assets/style/App.css';
import history from '../data/history';

function About() {
  const [historys, setHistory ] = useState(history);
  const [tabs, setTabs ] = useState(0);

  return (
    <div className="about-container">
      <img src="/assets/img/water-half.jpg"/>
      <div className="context">
        <div className="main">
          <span className="title">Water Water Exchange ?</span>
          <span > <p>` Excercise to Saving Time & Property ` </p></span>
          <span > <p>Item-Item </p> 거래과정에서 낭비되는 시간과 소비를 줄임으로써</span>
          <span > <p>흐르는 물</p>과 같은 운동을 만들어보자는 뜻을 담은</span>
          <span > <p>물물교환</p> 프로그램 입니다.</span>
        </div>
        
        <div className="sub">
          <span className="title-point">@Point </span>
          <span>1. 물건의 가격이 아닌, 상대방의 수요가 교환물건의 가치를 결정</span>
          <span>2. 교환되어 소유자가 바뀐 물건은 다시 재거래&기록 확인 가능</span>
          <span>3. 댓글로 경매 시스템 유사 교환가치를 설득 or 협의 가능</span>
          <span>4. 일상 포스팅을 통한 사용자 감성과 아이템 스토리 공유</span>
          <span className="title-proceed">@Proceeding </span>
          <span >-  거래완료 전 예약확정 상태로 1:1 채팅기능 제공 예정 </span>
          <span >-  거래완료 후 직거래/택배/등 교환시스템 제외 </span>
        </div>
      </div>
    </div> 
  )
}


export default About;