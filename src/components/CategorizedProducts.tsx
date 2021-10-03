import React from 'react';
import { RiArrowDownSFill } from 'react-icons/ri';
import Product from './Product';

const CategorizedProducts = () => {
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
            image: 'https://picsum.photos/800/305/?random',
        },
        {
            name: 'test 6',
            oldPrice: 100,
            newPrice: 50,
            image: 'https://picsum.photos/800/304/?random',
        },
        {
            name: 'test 4',
            oldPrice: 100,
            newPrice: 50,
            image: 'https://picsum.photos/800/303/?random',
        },
    ];

    return (
        <div>
            <div className="flex items-center justify-between mb-7">
                <span className="text-2xl font-semibold tracking-wide font-poppins">
                    Laptop Products
                </span>
                <div className="flex items-center gap-3">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10.001"
                        height="9.5"
                        viewBox="0 0 10.001 9.5"
                    >
                        <path
                            id="Vector"
                            d="M2865.031,423h-1.979a.491.491,0,0,1-.469-.508v-1.7a.491.491,0,0,1,.469-.509h1.979a.491.491,0,0,1,.469.509v1.7A.491.491,0,0,1,2865.031,423Zm-3.542,0h-1.978a.491.491,0,0,1-.469-.508v-1.7a.491.491,0,0,1,.469-.509h1.978a.491.491,0,0,1,.47.509v1.7A.491.491,0,0,1,2861.489,423Zm-3.541,0h-1.98a.491.491,0,0,1-.469-.508v-1.7a.491.491,0,0,1,.469-.509h1.98a.491.491,0,0,1,.468.509v1.7A.49.49,0,0,1,2857.948,423Zm7.083-3.393h-1.979a.491.491,0,0,1-.469-.509v-1.7a.491.491,0,0,1,.469-.509h1.979a.491.491,0,0,1,.469.509v1.7A.491.491,0,0,1,2865.031,419.607Zm-3.542,0h-1.978a.491.491,0,0,1-.469-.509v-1.7a.491.491,0,0,1,.469-.509h1.978a.491.491,0,0,1,.47.509v1.7A.491.491,0,0,1,2861.489,419.607Zm-3.541,0h-1.98a.491.491,0,0,1-.469-.509v-1.7a.491.491,0,0,1,.469-.509h1.98a.491.491,0,0,1,.468.509v1.7A.49.49,0,0,1,2857.948,419.607Zm7.083-3.393h-1.979a.491.491,0,0,1-.469-.509v-1.7a.491.491,0,0,1,.469-.509h1.979a.491.491,0,0,1,.469.509v1.7A.491.491,0,0,1,2865.031,416.214Zm-3.542,0h-1.978a.491.491,0,0,1-.469-.509v-1.7a.491.491,0,0,1,.469-.509h1.978a.491.491,0,0,1,.47.509v1.7A.491.491,0,0,1,2861.489,416.214Zm-3.541,0h-1.98a.491.491,0,0,1-.469-.509v-1.7a.491.491,0,0,1,.469-.509h1.98a.491.491,0,0,1,.468.509v1.7A.49.49,0,0,1,2857.948,416.214Z"
                            transform="translate(-2855.499 -413.5)"
                            fill="#493548"
                        />
                    </svg>

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="9.499"
                        height="9"
                        viewBox="0 0 9.499 9"
                    >
                        <path
                            id="Vector"
                            d="M2886.054,422.5h-5.244a.465.465,0,0,1-.446-.482v-1.607a.466.466,0,0,1,.446-.482h5.244a.465.465,0,0,1,.445.482v1.607A.465.465,0,0,1,2886.054,422.5Zm-6.729,0h-1.88a.465.465,0,0,1-.445-.482v-1.607a.465.465,0,0,1,.445-.482h1.88a.466.466,0,0,1,.446.482v1.607A.465.465,0,0,1,2879.325,422.5Zm6.729-3.214h-5.244a.466.466,0,0,1-.446-.482V417.2a.466.466,0,0,1,.446-.482h5.244a.465.465,0,0,1,.445.482V418.8A.465.465,0,0,1,2886.054,419.286Zm-6.729,0h-1.88a.465.465,0,0,1-.445-.482V417.2a.465.465,0,0,1,.445-.482h1.88a.466.466,0,0,1,.446.482V418.8A.466.466,0,0,1,2879.325,419.286Zm6.729-3.215h-5.244a.465.465,0,0,1-.446-.482v-1.607a.466.466,0,0,1,.446-.482h5.244a.465.465,0,0,1,.445.482v1.607A.465.465,0,0,1,2886.054,416.071Zm-6.729,0h-1.88a.465.465,0,0,1-.445-.482v-1.607a.465.465,0,0,1,.445-.482h1.88a.466.466,0,0,1,.446.482v1.607A.465.465,0,0,1,2879.325,416.071Z"
                            transform="translate(-2877 -413.5)"
                            fill="#d2d2d2"
                        />
                    </svg>

                    <span
                        className="mx-3 font-normal font-lato"
                        style={{ color: '#A3A3A3', fontSize: 8 }}
                    >
                        Show by
                    </span>

                    <div className="flex items-center gap-1 cursor-pointer">
                        <span className="font-semibold font-lato" style={{ fontSize: 8 }}>
                            Popularity
                        </span>
                        <RiArrowDownSFill />
                    </div>
                </div>
            </div>

            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, 160px)',
                    gridRowGap: 40,
                    gridColumnGap: 32,
                    justifyContent: 'center',
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

            <div className="flex items-center justify-between mt-7">
                <span className="font-normal font-lato" style={{ color: '#A3A3A3', fontSize: 8 }}>
                    Showing 9 of 120 results
                </span>

                <div className="flex gap-1">
                    <span
                        className="flex items-center justify-center h-6 font-bold text-white cursor-pointer bg-bg-primary font-lato"
                        style={{ fontSize: 8, borderRadius: 6.5, width: 29.5 }}
                    >
                        1
                    </span>
                    <span
                        className="flex items-center justify-center h-6 px-3 font-extrabold cursor-pointer text-bg-primary font-lato"
                        style={{
                            fontSize: 8,
                            borderRadius: 6.5,
                            backgroundColor: 'rgba(73, 53, 72, 0.12)',
                            width: 29.5,
                        }}
                    >
                        2
                    </span>
                    <span
                        className="flex items-center justify-center h-6 px-3 font-bold cursor-pointer text-bg-primary font-lato"
                        style={{
                            fontSize: 8,
                            borderRadius: 6.5,
                            backgroundColor: 'rgba(73, 53, 72, 0.12)',
                            width: 29.5,
                        }}
                    >
                        3
                    </span>
                    <span
                        className="flex items-center justify-center h-6 px-3 font-bold cursor-pointer text-bg-primary font-lato"
                        style={{
                            fontSize: 8,
                            borderRadius: 6.5,
                            backgroundColor: 'rgba(73, 53, 72, 0.12)',
                            width: 29.5,
                        }}
                    >
                        ...
                    </span>
                </div>
            </div>
        </div>
    );
};

export default CategorizedProducts;
