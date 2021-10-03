import Link from 'next/link';
import React from 'react';
import { BsGrid } from 'react-icons/bs';
import { FaUserCircle } from 'react-icons/fa';
import { GiShoppingCart } from 'react-icons/gi';
import { ImSearch } from 'react-icons/im';
import Navbar from './Navbar';
import Topbar from './Topbar';

const Header = () => (
    <div className="font-lato">
        <Topbar />

        <div className="flex items-center justify-between px-10 py-5 space-x-9">
            <div className="cursor-pointer">
                <Link href="/">
                    <img src="/logo.svg" alt="logo" />
                </Link>
            </div>

            <div className="flex-1 px-8">
                <div className="relative">
                    <input
                        type="text"
                        className="w-full rounded-md outline-none placeholder-header-input-placeholder"
                        style={{
                            fontSize: 9,
                            height: 35,
                            padding: '12px 15px',
                            backgroundColor: '#F1F1F1',
                        }}
                        placeholder="Search for product, categories, posts..."
                    />
                    <ImSearch
                        style={{ color: '#80B192' }}
                        className="absolute text-xs transform -translate-y-1/2 top-1/2 right-5"
                    />
                </div>
            </div>

            {/* icon */}
            <BsGrid />

            {/* backet */}
            <GiShoppingCart />

            {/* profile btn */}
            <div
                className="flex items-center px-6 space-x-3 text-white rounded-md cursor-pointer"
                style={{
                    backgroundImage: 'linear-gradient(#6A8D92, #4B4E6D)',
                    height: 35,
                }}
            >
                <FaUserCircle />
                <span style={{ fontSize: 9 }}>MY ACCOUNT</span>
            </div>
        </div>

        <Navbar />
    </div>
);

export default Header;
