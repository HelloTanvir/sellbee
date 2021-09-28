import React from 'react';
import { SiPaypal } from 'react-icons/si';

const Bottombar = () => (
    <div
        className="flex text-white bg-bg-secondary px-p-w"
        style={{ paddingTop: 7.35, paddingBottom: 7.35 }}
    >
        <span className="flex-1 text-xs">Roney.LIVE - © 2021 All Rights Reserved</span>

        <div className="flex items-center gap-3">
            <span className="mr-2 text-xs">Payment</span>
            <SiPaypal className="cursor-pointer" />
            <SiPaypal className="cursor-pointer" />
            <SiPaypal className="cursor-pointer" />
        </div>
    </div>
);

export default Bottombar;
