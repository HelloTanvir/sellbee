import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import OnSale from '../../components/OnSale';

const SingleProduct = () => {
    const router = useRouter();

    const { singleProduct } = router.query;

    return (
        <div>
            <Head>
                <title>Products | {singleProduct}</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="mt-10">
                <div
                    className="font-bold tracking-wide mb-14 mx-p-w font-lato text-bg-primary"
                    style={{ fontSize: 10 }}
                >
                    <Link href="/">
                        <span className="cursor-pointer hover:underline">Home</span>
                    </Link>
                    <span className="mx-2">/</span>
                    <Link href="/">
                        <span className="cursor-pointer hover:underline">Clothings</span>
                    </Link>
                    <span className="mx-2">/</span>
                    <span className="text-xs">{singleProduct}</span>
                </div>

                {/* single product details */}
                <div className="flex mb-20 mx-p-w gap-14">
                    <div className="w-full max-w-sm bg-red-400">product img slider</div>

                    <div className="flex-1 bg-indigo-400">product details</div>
                </div>

                {/* single product review */}
                <div className="mb-20 mx-p-w">
                    single product review section (under construction)
                </div>

                <OnSale />
            </main>
        </div>
    );
};

export default SingleProduct;