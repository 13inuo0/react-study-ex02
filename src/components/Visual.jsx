import { SwiperSlide, Swiper } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import 'swiper/css/pagination';
import { Autoplay, Pagination } from "swiper/modules";

export default function Visual() {
  return (
    <div className="visual-container">
      <Swiper
        loop={true}
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        pagination={{ clickable: true }}>
        <SwiperSlide>
          <img src="https://picsum.photos/800/300" alt="slide1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/801/300" alt="slide2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/802/300" alt="slide3" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
