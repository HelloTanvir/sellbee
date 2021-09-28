import React from 'react';

interface Props {
    image: string;
    newPrice: number;
    oldPrice: number;
    name: string;
    stock?: number;
}

const Product: React.FC<Props> = ({ image, name, oldPrice, newPrice, stock }) => (
    <div
        className="flex flex-col items-center gap-4 pb-4 rounded-2xl"
        style={{ boxShadow: '0px 3px 3px 0 rgba(0, 0, 0, 0.06)' }}
    >
        <img
            src={image}
            alt={name}
            className="object-cover w-full rounded-2xl"
            style={{ height: 133 }}
        />

        <div className="flex flex-col items-center gap-1 font-poppins">
            <span className="text-sm font-semibold text-bg-primary">BDT {newPrice}</span>
            <span style={{ color: '#8D8D8D' }} className="text-xs font-normal">
                BDT {oldPrice}
            </span>
        </div>

        <span className="font-semibold font-poppins" style={{ fontSize: 13, maxWidth: 124 }}>
            {name}
        </span>

        {stock ? (
            <>
                <div className="flex flex-col items-center gap-1">
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

                    <span style={{ color: '#8D8D8D' }} className="text-xs font-light font-lato">
                        {stock} Left Stock
                    </span>
                </div>

                <button
                    type="button"
                    className="w-32 py-2 text-xs font-light tracking-wide text-center border rounded-md border-bg-primary text-bg-primary"
                >
                    Add to cart
                </button>
            </>
        ) : null}
    </div>
);

export default Product;
