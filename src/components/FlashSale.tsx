/* eslint-disable import/no-unresolved */
import React from 'react';
import Slider from 'react-slick';

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
            className="flex gap-24 py-8 px-14 rounded-2xl mx-p-w"
        >
            <div className="flex flex-col gap-3 text-white bg-red-400" style={{ flex: 1.2 }}>
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

            <div className="bg-red-400" style={{ flex: 2.8 }}>
                <Slider infinite slidesToShow={2} speed={300}>
                    {slides.map((slide) => (
                        <div className="flex w-56 gap-2 py-2 pl-2 bg-white rounded-xl font-poppins">
                            <img
                                src={slide.image}
                                alt={slide.name}
                                className="w-16 h-20 rounded-xl"
                            />
                            <div className="flex flex-col justify-between">
                                <span
                                    className="font-medium tracking-wide"
                                    style={{ fontSize: 10 }}
                                >
                                    {slide.name}
                                </span>

                                <div className="flex flex-col">
                                    <div className="flex">
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
                                    <div>sroll effect</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default FlashSale;
