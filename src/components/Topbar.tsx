import Link from 'next/link';
import React from 'react';
import { FaPhoneAlt, FaTruck } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';

const Topbar = () => (
    <div
        className="flex gap-5 text-white px-p-w bg-bg-primary"
        style={{ paddingTop: 7.35, paddingBottom: 7.35 }}
    >
        <div className="flex items-center gap-3">
            <FaPhoneAlt className="text-sm" />
            <span className="text-xs">+8801720636876</span>
        </div>

        <div className="flex items-center flex-1 gap-3">
            <GrMail className="text-lg" />
            <span className="text-xs">support@sellbee.com</span>
        </div>

        <div className="flex items-center gap-3 pr-5 border-r" style={{ borderColor: '#FFC19E' }}>
            <FaTruck className="text-base" />
            <Link href="/track-order">
                <span className="text-xs">Track Your Order</span>
            </Link>
        </div>

        <div className="flex items-center gap-3">
            <span className="text-xs">BDT - Taka</span>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="9.096"
                height="6.548"
                viewBox="0 0 7.096 3.548"
            >
                <path
                    id="Rectangle_2"
                    data-name="Rectangle 2"
                    d="M868,12.1h7.1l-3.548,3.548Z"
                    transform="translate(-868 -12.096)"
                    fill="#fff"
                />
            </svg>
        </div>

        <div className="flex items-center gap-3">
            <span className="text-xs">EN</span>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="9.096"
                height="6.548"
                viewBox="0 0 7.096 3.548"
            >
                <path
                    id="Rectangle_2"
                    data-name="Rectangle 2"
                    d="M868,12.1h7.1l-3.548,3.548Z"
                    transform="translate(-868 -12.096)"
                    fill="#fff"
                />
            </svg>
        </div>
    </div>
);

export default Topbar;
