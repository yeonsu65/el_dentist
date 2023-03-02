import logo from '../images/el_notext.png';
import locaimg from'../images/locaimg.png';
import kakao from '../images/bottom_sns_01.png';
import facebook from '../images/bottom_sns_02.png';
import instargram from '../images/bottom_sns_03.png';
import twitter from '../images/bottom_sns_04.png';
import kakaostory from '../images/bottom_sns_07.png';
import './Section5.css';
import time from '../images/time.png';
function Section5(){
  return(
    <div className='wrap_bg'>
      <div className='sc5wrap'>
        <img src={logo} className='logo'/>
        <div className='content'>
          <div className='left'>
            <h1>EL DENTAL HOSPITAL</h1>
            <img src={locaimg}/>
            <h2>EL 치과 병원</h2>
            <p>대전광역시 대덕구 신탄진로 782(구주소:신탄진동 175-1)</p>
            <span>1644-2872</span>
            <ul className='sns'>
              <li><img src={kakao}/></li>
              <li><img src={facebook}/></li>
              <li><img src={instargram}/></li>
              <li><img src={twitter}/></li>
              <li><img src={kakaostory}/></li>
            </ul>
          </div>
          <div className='right'>
            <img src={time}/>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Section5;