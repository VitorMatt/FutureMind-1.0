import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Slide() {


    return (

        <div style={{width: '50%'}}>

        <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
            <div style={{width: '100%'}}>

            <h1>
                Slide 1
            </h1>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <h1>

            Slide 2
            </h1>
            </SwiperSlide>
        <SwiperSlide>
            <h1>

            Slide 3
            </h1>
            </SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        ...
      </Swiper>
        </div>
    )
}