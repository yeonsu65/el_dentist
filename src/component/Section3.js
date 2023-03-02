import logo from '../images/el_notext.png';
import img1 from '../images/2-2.jpg'
import img2 from '../images/5-3.jpg'
import img3 from '../images/4-3.jpg'
import './Section3.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination,Autoplay } from "swiper";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
SwiperCore.use([ Pagination, Autoplay])	// 추가
function Section3(){
  return(
    <>
      <hr></hr>
    <div className='bn_wrap'>
      <div className='left'>
        <h2><img src={logo}/><span>이엘치과</span>만의<br/>특별함</h2>
        <Swiper
          className="infobg"
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}	// 추가
        >
          <SwiperSlide><img src={img1}/></SwiperSlide>
          <SwiperSlide><img src={img2}/></SwiperSlide>
          <SwiperSlide><img src={img3}/></SwiperSlide>
        </Swiper>
      </div>
      <div className='right'>
        <ol>
          <li>최적의 의료시스템과 의료진을 갖춘 치과병원</li>
          <li>대학병원급의 의료시스템과 경제적인 치료비용</li>
          <li>1만여회가 넘는 임플란트 보철 성공적 경력과 시스템 구축</li>
          <li>대덕구 유일의 소아치과 센터가 있습니다.</li>
          <li>12단계 철저하고 안전한 위생관리 시스템으로 99.9% 감염예방</li>
          <li>7000여건 이상의 경력을 지닌 병원장이 진료하는 교정센터</li>
          <li>평일 야간진료와 사랑니 당일 방치가 가능</li>
          <li>100여대가 동시주차 가능한 주차시설 완비한 주차도우미 상시대기</li>
          <li>이엘치과병원은 특허 상표를 등록한 전국 단일 치과 병원</li>
          <li>마취과 전문의 상주로 안전한 수면치료 시스템을 갖춘병원</li>
        </ol>
        <a href='javascript:void(0)'>더보기<span>+</span></a>
      </div>
    </div>
    </>
  );

}
export default Section3;