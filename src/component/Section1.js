// import Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination,Autoplay } from "swiper";
import scimg1 from '../images/sc1.png';
import scimg2 from '../images/sc1-2.png';
import scimg3 from '../images/sc1-3.png';
// Import Swiper styles
import './Section1.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
SwiperCore.use([Navigation, Pagination, Autoplay])	// 추가

function Section1() {
  return(
    <div className='sc1'>
      <h1><span>이엘치과</span><br/>둘러보기</h1>
      <Swiper
        className="banner"
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop='true'
        autoplay={{ delay: 5000 }}	// 추가
      >
        <SwiperSlide><img src={scimg1}/></SwiperSlide>
        <SwiperSlide><img src={scimg2}/></SwiperSlide>
        <SwiperSlide><img src={scimg3}/></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Section1;