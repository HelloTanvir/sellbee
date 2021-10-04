import Link from 'next/link';
import React from 'react';

const BestDeals = () => {
    const products = [
        {
            name: 'test 1',
            price: 50,
            starCount: 4,
            reviewCount: 12,
            image: 'https://picsum.photos/800/300/?random',
        },
        {
            name: 'test 2',
            price: 50,
            starCount: 4,
            reviewCount: 12,
            image: 'https://picsum.photos/800/301/?random',
        },
        {
            name: 'test 3',
            price: 50,
            starCount: 4,
            reviewCount: 12,
            image: 'https://picsum.photos/800/302/?random',
        },
        {
            name: 'test 4',
            price: 50,
            starCount: 4,
            reviewCount: 12,
            image: 'https://picsum.photos/800/303/?random',
        },
        {
            name: 'test 5',
            price: 50,
            starCount: 4,
            reviewCount: 12,
            image: 'https://picsum.photos/800/304/?random',
        },
        {
            name: 'test 6',
            price: 50,
            starCount: 4,
            reviewCount: 12,
            image: 'https://picsum.photos/800/304/?random',
        },
        {
            name: 'test 7',
            price: 50,
            starCount: 4,
            reviewCount: 12,
            image: 'https://picsum.photos/800/304/?random',
        },
        {
            name: 'test 8',
            price: 50,
            starCount: 4,
            reviewCount: 12,
            image: 'https://picsum.photos/800/304/?random',
        },
        {
            name: 'test 9',
            price: 50,
            starCount: 4,
            reviewCount: 12,
            image: 'https://picsum.photos/800/304/?random',
        },
    ];

    return (
        <div className="mb-32 mx-p-w">
            <div className="font-semibold font-poppins mb-7" style={{ fontSize: 25 }}>
                Best Deals
            </div>

            <div
                className="px-3"
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, 140px)',
                    gridRowGap: 50,
                    gridColumnGap: 64,
                }}
            >
                {products.map((product) => (
                    <div
                        key={product.image}
                        className="flex justify-between"
                        style={{ height: 70 }}
                    >
                        <Link href={`/products/${product.name}`}>
                            <img
                                src={product.image}
                                alt={product.name}
                                className="object-cover w-16 h-full cursor-pointer rounded-xl"
                            />
                        </Link>

                        <div className="flex flex-col justify-between">
                            <span className="font-medium font-poppins" style={{ fontSize: 9 }}>
                                {product.name}
                            </span>
                            <div className="flex items-center">
                                {[...Array(product.starCount)].map((c, i) => (
                                    // eslint-disable-next-line react/no-array-index-key
                                    <span key={i} style={{ marginRight: 2 }}>
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
                                <span
                                    className="font-light font-poppins"
                                    style={{ color: '#BABABA', fontSize: 9 }}
                                >
                                    ({product.reviewCount})
                                </span>
                            </div>
                            <span className="text-xs font-semibold font-poppins">
                                BDT {product.price}
                            </span>
                            <div className="flex gap-2">
                                <button
                                    type="button"
                                    className="p-1"
                                    style={{
                                        borderRadius: 3,
                                        boxShadow: '3px 3px 6px 0 rgba(0, 0, 0, 0.16)',
                                    }}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="11"
                                        height="11"
                                        viewBox="0 0 11 11"
                                    >
                                        <defs>
                                            <pattern
                                                id="pattern"
                                                preserveAspectRatio="xMidYMid slice"
                                                width="100%"
                                                height="100%"
                                                viewBox="0 0 48 48"
                                            >
                                                <image
                                                    width="48"
                                                    height="48"
                                                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC5ElEQVRoge2ZT0gUURzHf5oXixQiqUPXyqAy8GJCp6iDlIfokFQeEgPzEnkIvaQHO1RQUIcUCk8RoUl1CISg9rAXrUt/LkUQePBUCAWV//r9et/J1+7szrz3Zny7sl/4iPOc75vv19ndeTNLtA60lTlfpkh2amZWypRmvcBVJovfxzBeSowhWxZZ8wrIKdnEvML2ZSodXWSWSYWvI5U1tIBISryk0imRG15UtABhxyyMPWuVNEQ9lB9eFFlA1Ibx6dRjFtY0MrTljEcW2MJ8wfhM6jELawYZZpkGbbxogWrmObPEzJP/AvPIIpmqMV60wAC2hzGB7wJC8LHZj/GCBVqY30yGqaHSKbCBecEsMIcop8AZbFwn9Vr7ybTjjx+Ar4uXfvx2ZJtF1hVk974ccOXvjwz5X5iZktELjFD5STJbF6hldpF6o7uqBnPVGvqsCwyR+qQS31fmlOGBdXUw3zCXzHnFwGtVoBP7TzF9zDsceL/BgQM1wfsWc01h7rMx/VYFnjFzzAHmCbMP/sGYfl2D8O7FXE2Y+2lMv1WBPqBfSEaZYzH9uo7Dq19Ig/njyOlN/N+V0FGFVsNRqhQo6wLdlHyBbkOfU4GT8B0x9IXpKOY6YehzKtAKX5ehL0zB2Txo6HNeSnxnHhn6wjTO/GA2GvqcCogmSZXYZuENtJ1U+McWXucCwcvoroVXDyGPTVosvc7L6YcI0GHhPQ3vA8tjJ1JgM6nF2C/mnIGvCx65Xay3PHYiBUQ7mDeYZ4JpLLLvHlKvd9n3Nby2SqyASJ6n3qHV+wQJd5O5BG7RaknZ5zaZf+rkKtECgeTO6gbzkfJvvmVMnibsTOhYqRTQJWdlN3D9b4cp9QJpq1LAtyoFfGv9FJAvD+75zWKl+6Sy02fmPSXzmHCtJFllHfVJNnpJnQpZoxwm/19oRyEZJ5H5ghSoInWJXyL/z/rjsshcQ/Z/kjWKPPv0/dw/ik5Kbj3lX38AQnfvv79VraYAAAAASUVORK5CYII="
                                                />
                                            </pattern>
                                        </defs>
                                        <rect
                                            id="_2639786_buy_icon"
                                            data-name="2639786_buy_icon"
                                            width="11"
                                            height="11"
                                            fill="url(#pattern)"
                                        />
                                    </svg>
                                </button>

                                <button
                                    type="button"
                                    className="p-1"
                                    style={{
                                        borderRadius: 3,
                                        boxShadow: '3px 3px 6px 0 rgba(0, 0, 0, 0.16)',
                                    }}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="14"
                                        height="14"
                                        viewBox="0 0 14 14"
                                    >
                                        <image
                                            id="_2639786_buy_icon"
                                            data-name="2639786_buy_icon"
                                            width="14"
                                            height="14"
                                            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACjklEQVRoge2YP2gUURDGJ4oKUS6CpoikOrukCHooYmGqCwmxTHHFFaaJhVeGsxcbhRMPomAXCJImlZ0hfwwpLHJFIGKTgN2FELBIUDTkjzM8F2f39t3uvnm7e+B+8IMQdr6Z7/b27XsHkCmTFV1E3iANxiryEumz4H8BmUE+IkMW/Fo0gZxp2EcGLfovCr18dRs5Bn2IdaH/FPNqCL20Kvxt5PAC3CEkdyGRAH7aYY2rAp/UAsywxmsCn9QCjLHG9IxcM/RJLcAl5JA1Lxn6pBaA9IE1nzP0SDXAY9b8O3IH1IoVhSn494Kc11wzjJRBvTN0PjdNAvQjp+BeUqPyjvkVhF7TJiE2hU1XmNe40OuTSYDnwqZfmVdZ6PXKJMB9YVObX6FRkwDnkL0OCPAbuWwSgDTXAQGWTIcnlUI0oIe9iFSQnyEDLIBaQmsh/J9KAvQgRwENRtj1RRZCF2AW1NfT0bcA/1uSAKS1gAYVz/VOCL8A3uGvIwdtvPc91xupGhDgF6h1nusBuJc+CkBv4/Psf3R3Pwd4v5cOTxoMaELQJ1701OXY31fA/UmGGZ54ZCMAiR9yotwJP4Udnui3FYAfciQhchGG37I1PIkfckxDRBmeqNkM4D3kRA0RdXjCaPvQTvyQEwZ6sJ+AergbEWtF2wed+CFHelYIYtn28KRe5EfMgztMxhGAJD0jhOELqN9tY1EXUkdOYhp+A7kR1/BcA6DOqW9B7XmkPAO1anUlMXymTtJVJA/mt15abyx6ydBW13n4aLN3L8F6serQuoI0Qe00k6gXa9dnAOJhQvViNTUDhDkP2KgX67VPcxoq167IYr1Y3aB+M3I2ddvI3QTrrYkeunyK9Zky/Zf6A6GTmc6RIpQVAAAAAElFTkSuQmCC"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BestDeals;
