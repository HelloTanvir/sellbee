import React from 'react';

interface Props {
    image: string;
    newPrice: number;
    oldPrice: number;
    name: string;
    stock?: number;
    description?: string;
    starCount?: number;
}

const Product: React.FC<Props> = ({
    image,
    name,
    oldPrice,
    newPrice,
    stock,
    description,
    starCount,
}) => (
    <div
        className={`flex flex-col ${
            description && starCount ? '' : 'items-center'
        } bg-white gap-4 pb-4 rounded-2xl`}
        style={{ boxShadow: '0px 3px 3px 0 rgba(0, 0, 0, 0.06)' }}
    >
        <img
            src={image}
            alt={name}
            className="object-cover w-full rounded-2xl"
            style={{ height: 133 }}
        />

        {description && starCount ? null : (
            <div className="flex flex-col items-center gap-1 font-poppins">
                <span className="text-sm font-semibold text-bg-primary">BDT {newPrice}</span>
                <span style={{ color: '#8D8D8D' }} className="text-xs font-normal">
                    BDT {oldPrice}
                </span>
            </div>
        )}

        {description && starCount ? (
            <div className="flex flex-col gap-1 px-4">
                <span className="font-semibold font-poppins">{name}</span>
                <span className="font-medium font-poppins" style={{ fontSize: 9 }}>
                    {description}
                </span>
            </div>
        ) : (
            <span className="font-semibold font-poppins" style={{ fontSize: 13, maxWidth: 124 }}>
                {name}
            </span>
        )}

        {description && starCount ? (
            <div className="flex px-4">
                <span className="text-sm font-semibold text-bg-primary">BDT {newPrice}</span>
                <span
                    style={{ color: '#8D8D8D' }}
                    className="self-center flex-1 ml-2 text-xs font-normal"
                >
                    BDT {oldPrice}
                </span>
                <div className="flex items-center">
                    {[...Array(starCount)].map((c, i) => (
                        // eslint-disable-next-line react/no-array-index-key
                        <span key={i} style={{ marginRight: i !== starCount - 1 ? 2 : 0 }}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="7.464"
                                height="6.786"
                                viewBox="0 0 7.464 6.786"
                            >
                                <path
                                    id="star"
                                    d="M153.331,696.736l-.911,1.754-2.038.282a.419.419,0,0,0-.247.724l1.475,1.365-.349,1.928a.442.442,0,0,0,.648.446l1.823-.91,1.824.91a.442.442,0,0,0,.647-.446l-.349-1.928,1.475-1.365a.419.419,0,0,0-.247-.724l-2.038-.282-.911-1.754A.458.458,0,0,0,153.331,696.736Z"
                                    transform="translate(-150 -696.5)"
                                />
                            </svg>
                        </span>
                    ))}
                </div>
            </div>
        ) : null}

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
