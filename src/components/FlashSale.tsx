/* eslint-disable import/no-unresolved */
import Link from 'next/link';
import React from 'react';
import { A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const FlashSale = () => {
    const slides = [
        { name: 'test 1', price: 100, count: 100, image: 'https://picsum.photos/800/300/?random' },
        { name: 'test 2', price: 100, count: 100, image: 'https://picsum.photos/800/301/?random' },
        { name: 'test 3', price: 100, count: 100, image: 'https://picsum.photos/800/302/?random' },
        { name: 'test 4', price: 100, count: 100, image: 'https://picsum.photos/800/303/?random' },
        { name: 'test 5', price: 100, count: 100, image: 'https://picsum.photos/800/304/?random' },
    ];

    return (
        <div
            style={{ backgroundColor: '#a1e887' }}
            className="flex gap-24 px-16 py-12 rounded-2xl mx-p-w mb-7"
        >
            <div className="flex flex-col flex-1 gap-3 text-white">
                <span className="text-2xl font-semibold tracking-wide font-poppins">
                    Flash Sale
                </span>

                <span className="font-lato" style={{ fontSize: 9 }}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta architecto porro
                    quia, eius recusandae aut.
                </span>

                <span className="mt-8 text-xl font-bold tracking-widest font-lato">
                    05 : 42 : 19 : 54
                </span>
            </div>

            <div className="flex flex-col justify-between w-full" style={{ maxWidth: '70%' }}>
                <Swiper
                    className="w-full"
                    // modules={[Pagination, A11y]}
                    modules={[A11y]}
                    slidesPerView={3}
                    spaceBetween={30}
                    // pagination={{ clickable: true }}
                >
                    {slides.map((slide) => (
                        <SwiperSlide key={slide.image}>
                            <div className="flex w-64 gap-3 py-2 pl-2 bg-white rounded-xl font-poppins">
                                <Link href={`/products/${slide.name}`}>
                                    <img
                                        src={slide.image}
                                        alt={slide.name}
                                        className="object-cover w-16 h-20 cursor-pointer rounded-xl"
                                    />
                                </Link>

                                <div className="flex flex-col justify-between pb-2">
                                    <span
                                        className="font-medium tracking-wide"
                                        style={{ fontSize: 10 }}
                                    >
                                        {slide.name}
                                    </span>

                                    <div className="flex flex-col">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-xs font-semibold tracking-wide">
                                                BDT {slide.price}
                                            </span>

                                            <span
                                                style={{ color: '#A7A7A7', fontSize: 10 }}
                                                className="font-normal"
                                            >
                                                {slide.count} left
                                            </span>
                                        </div>
                                        <div
                                            style={{
                                                height: 5,
                                                borderRadius: 2.5,
                                                backgroundColor: 'rgba(20, 20, 255, 0.3)',
                                            }}
                                            className="relative w-32"
                                        >
                                            <div
                                                className="absolute top-0 bottom-0 left-0 w-4/5 bg-bg-primary"
                                                style={{ borderRadius: 2.5 }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <span
                    className="self-end font-bold text-white cursor-pointer font-poppins"
                    style={{ fontSize: 8 }}
                >
                    View more
                </span>
            </div>
        </div>
    );
};

export default FlashSale;
