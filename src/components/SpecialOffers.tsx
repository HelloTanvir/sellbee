import React from 'react';
import Product from './Product';

const SpecialOffers = () => {
    const products = [
        {
            name: 'test 1',
            oldPrice: 100,
            newPrice: 50,
            image: 'https://picsum.photos/800/300/?random',
        },
        {
            name: 'test 2',
            oldPrice: 100,
            newPrice: 50,
            image: 'https://picsum.photos/800/301/?random',
        },
        {
            name: 'test 3',
            oldPrice: 100,
            newPrice: 50,
            image: 'https://picsum.photos/800/302/?random',
        },
        {
            name: 'test 4',
            oldPrice: 100,
            newPrice: 50,
            image: 'https://picsum.photos/800/303/?random',
        },
        {
            name: 'test 5',
            oldPrice: 100,
            newPrice: 50,
            image: 'https://picsum.photos/800/304/?random',
        },
        {
            name: 'test 6',
            oldPrice: 100,
            newPrice: 50,
            image: 'https://picsum.photos/800/304/?random',
        },
        {
            name: 'test 7',
            oldPrice: 100,
            newPrice: 50,
            image: 'https://picsum.photos/800/304/?random',
        },
    ];

    return (
        <div className="mb-16 px-p-w">
            <div className="text-2xl font-semibold tracking-wide font-poppins mb-7">
                Special Offers
            </div>

            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, 160px)',
                    gridRowGap: 40,
                    gridColumnGap: 32,
                }}
            >
                {products.map((product) => (
                    <Product
                        key={product.image}
                        name={product.name}
                        oldPrice={product.oldPrice}
                        newPrice={product.newPrice}
                        image={product.image}
                    />
                ))}
            </div>
        </div>
    );
};

export default SpecialOffers;
