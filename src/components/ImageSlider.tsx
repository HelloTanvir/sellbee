/* eslint-disable import/no-unresolved */
import React from 'react';
import { A11y, Autoplay, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

interface Props {
    pageName?: string;
}

const ImageSlider: React.FC<Props> = ({ pageName }) => {
    const images = [
        'https://i.pinimg.com/564x/45/e5/9d/45e59d5690b02c68204015df3392cb72.jpg',
        'https://i.pinimg.com/564x/58/03/a7/5803a71f85f2017858689047f807964a.jpg',
        'https://i.pinimg.com/564x/ee/51/81/ee518105f86d7bc11d37ceb7d25ee971.jpg',
        'https://i.pinimg.com/564x/40/de/1e/40de1ec3b6eb9bbcdbeed8585ab6b091.jpg',
        'https://i.pinimg.com/564x/ad/29/ab/ad29ab336eeb93e022b6f9c79069c04a.jpg',
    ];

    return (
        <div
            className={`${pageName && pageName === 'all-categories' ? 'mb-11' : 'mb-16'}`}
            style={
                pageName && pageName === 'all-categories'
                    ? {}
                    : { marginLeft: '-60%', marginRight: '-60%' }
            }
        >
            <Swiper
                modules={[Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={pageName && pageName === 'all-categories' ? 60 : 0}
                centeredSlides
                slidesPerView={pageName && pageName === 'all-categories' ? 1 : 3}
                autoplay
                loop
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                {images.map((image) => (
                    <SwiperSlide key={image}>
                        <div
                            style={{
                                backgroundImage: `url(${image})`,
                                height: pageName && pageName === 'all-categories' ? 196 : 322,
                                borderRadius: 20,
                            }}
                            className="bg-no-repeat bg-cover"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};
export default ImageSlider;
