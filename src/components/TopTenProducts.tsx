import React from 'react';
// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from 'swiper/react';
import Product from './Product';

const TopTenProducts = () => {
    const products = [
        {
            name: 'test 1',
            oldPrice: 100,
            newPrice: 50,
            description: '4.3m solid',
            starCount: 4,
            image: 'https://picsum.photos/800/300/?random',
        },
        {
            name: 'test 2',
            oldPrice: 100,
            newPrice: 50,
            description: '4.3m solid',
            starCount: 4,
            image: 'https://picsum.photos/800/301/?random',
        },
        {
            name: 'test 3',
            oldPrice: 100,
            newPrice: 50,
            description: '4.3m solid',
            starCount: 4,
            image: 'https://picsum.photos/800/302/?random',
        },
        {
            name: 'test 4',
            oldPrice: 100,
            newPrice: 50,
            description: '4.3m solid',
            starCount: 4,
            image: 'https://picsum.photos/800/303/?random',
        },
        {
            name: 'test 5',
            oldPrice: 100,
            newPrice: 50,
            description: '4.3m solid',
            starCount: 4,
            image: 'https://picsum.photos/800/304/?random',
        },
        {
            name: 'test 6',
            oldPrice: 100,
            newPrice: 50,
            description: '4.3m solid',
            starCount: 4,
            image: 'https://picsum.photos/800/304/?random',
        },
        {
            name: 'test 7',
            oldPrice: 100,
            newPrice: 50,
            description: '4.3m solid',
            starCount: 4,
            image: 'https://picsum.photos/800/304/?random',
        },
    ];

    return (
        <div
            className="flex justify-between py-10 mb-16 px-p-w"
            style={{ backgroundImage: 'linear-gradient(244deg, #4b4e6d 75%, #4b4e6d 0%)' }}
        >
            <span
                className="mt-8 text-lg font-bold tracking-wide text-white font-poppins"
                style={{ maxWidth: 120 }}
            >
                Top 10 Selected Products On the Week
            </span>

            <div className="w-full" style={{ maxWidth: '70%' }}>
                <Swiper className="w-full" slidesPerView={4} spaceBetween={30}>
                    {products.map((product) => (
                        <SwiperSlide key={product.image}>
                            <div className="w-48">
                                <Product
                                    name={product.name}
                                    oldPrice={product.oldPrice}
                                    newPrice={product.newPrice}
                                    image={product.image}
                                    description={product.description}
                                    starCount={product.starCount}
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default TopTenProducts;
