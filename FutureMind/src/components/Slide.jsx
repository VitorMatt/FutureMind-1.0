import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Importação dos estilos do Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Slide() {
    return (
        <div style={{ width: '50%' }}>
            <Swiper
                // instalar módulos do Swiper
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide>
                    <div style={{ width: '100%' }}>
                        <h1>Slide 1</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <h1>Slide 2</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <h1>Slide 3</h1>
                </SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
            </Swiper>
        </div>
    );
}