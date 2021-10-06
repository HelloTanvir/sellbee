import Head from 'next/head';
import React from 'react';

const OrderStatus = () => (
    <div>
        <Head>
            <title>SellBee | Order Status</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="relative">
            <img src="/bg-order-success.svg" alt="bg-order-success" className="w-full" />

            <div
                className="absolute z-10 flex flex-col items-center transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                style={{ maxWidth: 492 }}
            >
                <img src="/order-success.svg" alt="order-success" />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="492"
                    height="96"
                    viewBox="0 0 492 96"
                >
                    <text
                        id="Thank_You_"
                        data-name="Thank You!!"
                        transform="translate(0 76)"
                        fill="#493548"
                        fontSize="79"
                        fontFamily="Montserrat-ExtraBold, Montserrat"
                        fontWeight="800"
                    >
                        <tspan x="0" y="0">
                            Thank You!!
                        </tspan>
                    </text>
                </svg>
                <div className="px-6 text-xl font-semibold tracking-wide text-center font-poppins text-bg-primary">
                    Your order has been placed successfully. You can{' '}
                    <span style={{ color: '#0098BD' }} className="cursor-pointer">
                        track your order
                    </span>{' '}
                    here.
                </div>
            </div>
        </main>
    </div>
);

export default OrderStatus;
