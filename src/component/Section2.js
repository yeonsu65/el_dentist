import banner1 from '../images/middle4_banner_01.png';
import banner2 from '../images/middle4_banner_03.jpg';
import banner3 from '../images/middle4_banner_05.jpg';
import banner4 from '../images/middle4_banner_07.jpg';
import banner5 from '../images/middle4_banner_09_01.jpg';
import banner6 from '../images/middle4_banner_11.jpg';
import './Section2.css';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolumeHigh } from '@fortawesome/free-solid-svg-icons'
import { faQuestion } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
function Section2(){
  return(
    <>
  <div className='sc2wrap'>
    <div>
      <div className='top'>
        <a href='/'><img src={banner1}/></a>
        <a href='/'><img src={banner2}/></a>
      </div>
      <div className='bottom'>
        <a href='/'><img src={banner4}/></a>
        <a href='/'><img src={banner5}/></a>
        <a href='/'><img src={banner6}/></a>
      </div>
    </div>
    <a href='/'><img src={banner3}/></a>

  </div>
    <div className='menubox'>
      <a href='javascript:void(0)'>
        <span>공지사항을 확인하세요.</span><br/>
        공지사항
        <FontAwesomeIcon icon={faVolumeHigh}/>
      </a>
      <a href='javascript:void(0)'>
        <span>치과치료에 대한 궁금증을 해결하세요.</span><br/>
        질문과 답변<FontAwesomeIcon icon={faQuestion}/>
      </a>
      <a href='javascript:void(0)'>
        <span>스타들이 선택한 이엘치과병원</span><br/>
        이엘치과를 방문한 스타<FontAwesomeIcon icon={faStar}/>
      </a>
    </div>
    </>
  );
}
export default Section2;