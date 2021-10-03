/* eslint-disable import/no-unresolved */
import React from 'react';
import { A11y, Autoplay, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

interface Props {
    pageName?: string;
}

const ImageSlider: React.FC<Props> = ({ pageName }) => {
    // const images = [
    //     'https://i.pinimg.com/236x/f4/a9/88/f4a988da04447569eb2737fd90abf7db.jpg',
    //     'https://i.pinimg.com/236x/fc/30/03/fc300326f05b858943d9c7b6d5902ee0.jpg',
    //     'https://i.pinimg.com/236x/f3/83/4f/f3834ffead6ebb10f4f797f613aa2ab2.jpg',
    //     'https://i.pinimg.com/564x/6f/c1/f4/6fc1f4b528dbbfcee91c65edba08942a.jpg',
    //     'https://images.pexels.com/photos/897624/pexels-photo-897624.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    // ];

    const images = [
        'https://picsum.photos/800/300/?random',
        'https://picsum.photos/800/301/?random',
        'https://picsum.photos/800/302/?random',
        'https://picsum.photos/800/303/?random',
        'https://picsum.photos/800/304/?random',
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
