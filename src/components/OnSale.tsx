import React from 'react';
import Product from './Product';

const OnSale = () => {
    const products = [
        {
            name: 'test 1',
            oldPrice: 100,
            newPrice: 50,
            stock: 100,
            image: 'https://picsum.photos/800/300/?random',
        },
        {
            name: 'test 2',
            oldPrice: 100,
            newPrice: 50,
            stock: 100,
            image: 'https://picsum.photos/800/301/?random',
        },
        {
            name: 'test 3',
            oldPrice: 100,
            newPrice: 50,
            stock: 100,
            image: 'https://picsum.photos/800/302/?random',
        },
        {
            name: 'test 4',
            oldPrice: 100,
            newPrice: 50,
            stock: 100,
            image: 'https://picsum.photos/800/303/?random',
        },
        {
            name: 'test 5',
            oldPrice: 100,
            newPrice: 50,
            stock: 100,
            image: 'https://picsum.photos/800/304/?random',
        },
        {
            name: 'test 6',
            oldPrice: 100,
            newPrice: 50,
            stock: 100,
            image: 'https://picsum.photos/800/304/?random',
        },
        {
            name: 'test 7',
            oldPrice: 100,
            newPrice: 50,
            stock: 100,
            image: 'https://picsum.photos/800/304/?random',
        },
        {
            name: 'test 8',
            oldPrice: 100,
            newPrice: 50,
            stock: 100,
            image: 'https://picsum.photos/800/304/?random',
        },
        {
            name: 'test 9',
            oldPrice: 100,
            newPrice: 50,
            stock: 100,
            image: 'https://picsum.photos/800/304/?random',
        },
    ];

    return (
        <div className="mb-16 px-p-w">
            <div className="flex gap-2 mb-7">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13.5"
                    height="15.5"
                    viewBox="0 0 13.5 15.5"
                >
                    <path
                        id="Vector"
                        d="M81.75,2073.5a6.873,6.873,0,0,1-6.75-6.975c0-2.206,2.129-5.791,5.063-8.525a23.6,23.6,0,0,1,2.993,3.365,18.056,18.056,0,0,1,1.695-1.815c2.147,2,3.749,5.333,3.749,6.975A6.873,6.873,0,0,1,81.75,2073.5Zm-1.664-10.656h0c-1.547,1.862-2.193,2.823-2.193,3.958a3.7,3.7,0,0,0,3.944,3.792,4.029,4.029,0,0,0,2.327-.732,3.619,3.619,0,0,0,1.007-4.644c-.1-.191-.213-.395-.339-.6l-1.767,2.025c-.02-.025-2.765-3.548-2.979-3.794Z"
                        transform="translate(-75 -2058)"
                        fill="#493548"
                    />
                </svg>
                <span className="text-2xl font-semibold tracking-wide font-poppins">On Sale</span>
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
                        stock={product.stock}
                    />
                ))}
            </div>
        </div>
    );
};

export default OnSale;
