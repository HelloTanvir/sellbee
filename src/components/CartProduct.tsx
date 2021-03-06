import React from 'react';

interface Props {
    selected?: boolean;
}

const CartProduct: React.FC<Props> = ({ selected }) => (
    <div
        className="flex items-center py-4 pl-4 pr-8 rounded-md"
        style={{ boxShadow: '0px 2px 2px 0 rgba(0, 0, 0, 0.06)' }}
    >
        <input type="checkbox" className="cursor-pointer" />

        <span className="w-20 h-20 mx-5">
            <img
                src="https://i.pinimg.com/564x/c7/f6/bd/c7f6bdef61e2558147339c0057eee2e8.jpg"
                alt="product"
                className="object-cover w-full h-full rounded-md"
            />
        </span>

        <div className="flex flex-col flex-1 h-full">
            <div className="flex justify-between flex-1">
                <span className="font-semibold font-poppins" style={{ fontSize: 10 }}>
                    LED Monitor With High Quality In The World
                </span>
                <span
                    className="font-normal font-poppins"
                    style={{ fontSize: 9, color: '#4D4D4D' }}
                >
                    SKU 12314124124
                </span>
            </div>
            <div>
                <span className="text-xs font-semibold font-poppins text-bg-primary">976.33</span>
                <div className="flex items-end justify-between">
                    <span
                        style={{ color: '#AEAEAE', fontSize: 8 }}
                        className="font-semibold tracking-wide font-poppins"
                    >
                        +Add note
                    </span>
                    <div className="flex items-center gap-8">
                        <div
                            className="flex items-center gap-10 px-3 border rounded-md h-9"
                            style={{ borderColor: '#D8D8D8' }}
                        >
                            <span className="cursor-pointer">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="9.5"
                                    height="2"
                                    viewBox="0 0 9.5 2"
                                >
                                    <rect
                                        id="_-"
                                        data-name="-"
                                        width="9.5"
                                        height="2"
                                        fill="#d2d2d2"
                                    />
                                </svg>
                            </span>
                            <span
                                className="font-bold font-lato"
                                style={{ fontSize: 10, color: '#FF7020' }}
                            >
                                1
                            </span>
                            <span className="cursor-pointer">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="8.784"
                                    height="9.045"
                                    viewBox="0 0 8.784 9.045"
                                >
                                    <path
                                        id="_"
                                        data-name="+"
                                        d="M3788.783,558.443v3.69h3.5v1.647h-3.5v3.708h-1.8V563.78H3783.5v-1.647h3.483v-3.69Z"
                                        transform="translate(-3783.5 -558.443)"
                                        fill="#d2d2d2"
                                    />
                                </svg>
                            </span>
                        </div>

                        <span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                height="28"
                                viewBox="0 0 30 28"
                            >
                                <g id="delete" transform="translate(-4789 -286)">
                                    <g
                                        id="background"
                                        transform="translate(4789 286)"
                                        fill="none"
                                        stroke="#d8d8d8"
                                        strokeWidth="0.5"
                                    >
                                        <rect width="30" height="28" rx="6" stroke="none" />
                                        <rect
                                            x="0.25"
                                            y="0.25"
                                            width="29.5"
                                            height="27.5"
                                            rx="5.75"
                                            fill="none"
                                        />
                                    </g>
                                    <path
                                        id="Vector"
                                        d="M4806.469,305.5h-4.938a.928.928,0,0,1-.66-.28,1.056,1.056,0,0,1-.3-.687l-.426-7.283h7.714l-.426,7.283a1.058,1.058,0,0,1-.3.687A.926.926,0,0,1,4806.469,305.5Zm1.708-8.937h-8.357a.311.311,0,0,1-.227-.1.35.35,0,0,1-.094-.243v-.688a.355.355,0,0,1,.094-.243.312.312,0,0,1,.227-.1h2.411l.188-.4a.5.5,0,0,1,.177-.21.466.466,0,0,1,.253-.076h2.3a.454.454,0,0,1,.254.077.5.5,0,0,1,.178.209l.189.4h2.41a.314.314,0,0,1,.228.1.355.355,0,0,1,.094.243v.688a.349.349,0,0,1-.094.243A.307.307,0,0,1,4808.178,296.562Z"
                                        fill="#a4a4a4"
                                    />
                                </g>
                            </svg>
                        </span>

                        <span>
                            {selected ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="30"
                                    height="28"
                                    viewBox="0 0 30 28"
                                >
                                    <g id="wishlist" transform="translate(-4828 -286)">
                                        <rect
                                            id="background"
                                            width="30"
                                            height="28"
                                            rx="6"
                                            transform="translate(4828 286)"
                                            fill="#493548"
                                        />
                                        <path
                                            id="Vector"
                                            d="M4847.432,296.15a2.965,2.965,0,0,0-4.009.288l-.423.43-.423-.43a2.965,2.965,0,0,0-4.009-.288,3.018,3.018,0,0,0-.213,4.409l4.157,4.237a.68.68,0,0,0,.974,0l4.157-4.237a3.016,3.016,0,0,0-.21-4.409Z"
                                            fill="#fff"
                                        />
                                    </g>
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="30"
                                    height="28"
                                    viewBox="0 0 30 28"
                                >
                                    <g id="wishlist" transform="translate(-4828 -391)">
                                        <g
                                            id="background"
                                            transform="translate(4828 391)"
                                            fill="none"
                                            stroke="#d8d8d8"
                                            strokeWidth="0.5"
                                        >
                                            <rect width="30" height="28" rx="6" stroke="none" />
                                            <rect
                                                x="0.25"
                                                y="0.25"
                                                width="29.5"
                                                height="27.5"
                                                rx="5.75"
                                                fill="none"
                                            />
                                        </g>
                                        <path
                                            id="Vector"
                                            d="M4847.432,401.149a2.966,2.966,0,0,0-4.009.288l-.423.43-.423-.43a2.966,2.966,0,0,0-4.009-.288,3.018,3.018,0,0,0-.213,4.409l4.157,4.237a.68.68,0,0,0,.974,0l4.157-4.237a3.016,3.016,0,0,0-.21-4.409Z"
                                            fill="#a4a4a4"
                                        />
                                    </g>
                                </svg>
                            )}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default CartProduct;
