import React from 'react';
import Bottombar from './Bottombar';
import FooterTop from './FooterTop';

const Footer = () => (
    <>
        <FooterTop />

        <div className="relative flex justify-between py-20 px-p-w bg-bg-primary font-lato">
            <div className="absolute bottom-0 left-0">
                <img src="/footer-styled-bg.svg" alt="svg-design" />
            </div>
            <div className="z-10 flex flex-col">
                <img src="/logo-light.svg" alt="logo" style={{ maxWidth: 138 }} />

                <span className="mt-2 mb-5 text-white" style={{ maxWidth: 220, fontSize: 10 }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere iure ipsum
                    delectus cupiditate dicta assumenda aut fugit rem non similique? Magnam
                    blanditiis quia fugiat placeat!
                </span>
                <div className="flex gap-1">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="29"
                        height="29"
                        viewBox="0 0 29 29"
                    >
                        <g id="Group_24" data-name="Group 24" transform="translate(-75 -3100.5)">
                            <rect
                                id="background"
                                width="29"
                                height="29"
                                rx="6"
                                transform="translate(75 3100.5)"
                                fill="#fff"
                            />
                            <path
                                id="Vector"
                                d="M89.75,3119.6a36.429,36.429,0,0,1-4.883-.269,1.558,1.558,0,0,1-1.105-1.121,18.547,18.547,0,0,1,0-6.2,1.592,1.592,0,0,1,1.105-1.139,44.454,44.454,0,0,1,9.767,0,1.592,1.592,0,0,1,1.105,1.139,18.547,18.547,0,0,1,0,6.2,1.558,1.558,0,0,1-1.105,1.121A36.429,36.429,0,0,1,89.75,3119.6Zm-1.279-6.395h0v3.807l3.268-1.9Z"
                                fill="#ff7020"
                            />
                        </g>
                    </svg>

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="29"
                        height="29"
                        viewBox="0 0 29 29"
                    >
                        <g id="Group_20" data-name="Group 20" transform="translate(-111 -3100.5)">
                            <rect
                                id="background"
                                width="29"
                                height="29"
                                rx="6"
                                transform="translate(111 3100.5)"
                                fill="#fff"
                            />
                            <path
                                id="Vector"
                                d="M129.414,3119.6h-8.23a.675.675,0,0,1-.684-.663v-7.873a.675.675,0,0,1,.684-.663h8.23a.676.676,0,0,1,.686.663v7.873A.676.676,0,0,1,129.414,3119.6Zm-2.841-4.614c.74,0,.74.673.74,1.165v2.136h1.423v-2.406c0-1.087-.207-2.093-1.708-2.093a1.518,1.518,0,0,0-1.348.708h-.019v-.6h-1.365v4.391h1.423v-2.173C125.717,3115.556,125.819,3114.986,126.572,3114.986Zm-4.594-1.091v4.391H123.4l0-4.391Zm.711-2.181a.791.791,0,1,0,.825.791A.81.81,0,0,0,122.69,3111.714Z"
                                fill="#4e4e4e"
                                opacity="0.451"
                            />
                        </g>
                    </svg>

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="29"
                        height="29"
                        viewBox="0 0 29 29"
                    >
                        <g id="Group_21" data-name="Group 21" transform="translate(-147 -3100.5)">
                            <rect
                                id="background"
                                width="29"
                                height="29"
                                rx="6"
                                transform="translate(147 3100.5)"
                                fill="#fff"
                            />
                            <path
                                id="Vector"
                                d="M164.9,3113.045c.006.085.006.17.006.256,0,2.6-1.815,5.6-5.131,5.6a4.8,4.8,0,0,1-2.77-.883,3.471,3.471,0,0,0,2.674-.816,1.834,1.834,0,0,1-1.686-1.365,2.076,2.076,0,0,0,.34.031,1.753,1.753,0,0,0,.475-.067,1.933,1.933,0,0,1-1.446-1.931v-.024a1.7,1.7,0,0,0,.815.25,2.019,2.019,0,0,1-.8-1.638,2.088,2.088,0,0,1,.246-.993,5,5,0,0,0,3.718,2.059,2.426,2.426,0,0,1-.044-.451,1.89,1.89,0,0,1,1.8-1.968,1.733,1.733,0,0,1,1.318.622,3.385,3.385,0,0,0,1.145-.475,1.939,1.939,0,0,1-.793,1.084,3.374,3.374,0,0,0,1.038-.3,4.083,4.083,0,0,1-.9,1.017Z"
                                fill="#4e4e4e"
                                opacity="0.451"
                            />
                        </g>
                    </svg>

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="29"
                        height="29"
                        viewBox="0 0 29 29"
                    >
                        <g id="Group_22" data-name="Group 22" transform="translate(-183 -3100.5)">
                            <rect
                                id="background"
                                width="29"
                                height="29"
                                rx="6"
                                transform="translate(183 3100.5)"
                                fill="#fff"
                            />
                            <path
                                id="Vector"
                                d="M199.485,3115.55l.249-1.593h-1.556v-1.034a.8.8,0,0,1,.915-.86h.707v-1.356a8.777,8.777,0,0,0-1.256-.108,1.962,1.962,0,0,0-2.119,2.144v1.214H195v1.593h1.425v3.85h1.753v-3.85Z"
                                fill="#4e4e4e"
                                opacity="0.451"
                            />
                        </g>
                    </svg>

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="29"
                        height="29"
                        viewBox="0 0 29 29"
                    >
                        <g id="Group_23" data-name="Group 23" transform="translate(-219 -3100.5)">
                            <rect
                                id="background"
                                width="29"
                                height="29"
                                rx="6"
                                transform="translate(219 3100.5)"
                                fill="#fff"
                            />
                            <path
                                id="Vector"
                                d="M233.4,3119.4c-.779,0-1.475-.012-1.815-.031a2.611,2.611,0,0,1-1.844-.71,2.581,2.581,0,0,1-.71-1.844c-.042-.729-.042-2.9,0-3.631a2.434,2.434,0,0,1,2.554-2.553c.338-.019,1.033-.03,1.815-.03s1.477.011,1.815.03a2.438,2.438,0,0,1,2.554,2.555c.042.729.042,2.9,0,3.629a2.436,2.436,0,0,1-2.554,2.554C234.875,3119.388,234.179,3119.4,233.4,3119.4Zm0-.792.313,0h.018c.137,0,.288,0,.447,0a6.2,6.2,0,0,0,1.816-.182,1.487,1.487,0,0,0,.836-.837,7.92,7.92,0,0,0,.179-2.28v-.009c0-.113,0-.216,0-.3s0-.191,0-.3v-.01a7.926,7.926,0,0,0-.179-2.28,1.49,1.49,0,0,0-.836-.837,6.307,6.307,0,0,0-1.83-.181l-.426,0h-.029l-.308,0h-.332c-.138,0-.29,0-.448,0a6.183,6.183,0,0,0-1.812.182,1.492,1.492,0,0,0-.837.837,8.054,8.054,0,0,0-.178,2.289c0,.113,0,.216,0,.305s0,.193,0,.307v.007a7.925,7.925,0,0,0,.179,2.28,1.491,1.491,0,0,0,.837.837,6.3,6.3,0,0,0,1.83.181l.426,0h.029Zm0-1.347a2.26,2.26,0,1,1,2.26-2.26A2.262,2.262,0,0,1,233.4,3117.26Zm0-3.727a1.467,1.467,0,1,0,1.467,1.467A1.468,1.468,0,0,0,233.4,3113.533Zm2.349-.353a.53.53,0,1,1,.53-.53A.53.53,0,0,1,235.75,3113.18Z"
                                fill="#4e4e4e"
                                opacity="0.451"
                            />
                        </g>
                    </svg>
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <span className="mb-2 text-sm font-bold tracking-wide text-white uppercase">
                    quick links
                </span>
                <span className="text-xs font-light text-gray-300">About Us</span>
                <span className="text-xs font-light text-gray-300">Contact Us</span>
                <span className="text-xs font-light text-gray-300">Products</span>
                <span className="text-xs font-light text-gray-300">Login</span>
                <span className="text-xs font-light text-gray-300">Sign Up</span>
            </div>

            <div className="flex flex-col gap-2">
                <span className="mb-2 text-sm font-bold tracking-wide text-white uppercase">
                    customer area
                </span>
                <span className="text-xs font-light text-gray-300">My Account</span>
                <span className="text-xs font-light text-gray-300">Orders</span>
                <span className="text-xs font-light text-gray-300">Tracking List</span>
                <span className="text-xs font-light text-gray-300">Terms</span>
                <span className="text-xs font-light text-gray-300">Privacy Policy</span>
                <span className="text-xs font-light text-gray-300">My Cart</span>
            </div>

            <div className="flex flex-col gap-5" style={{ maxWidth: 310 }}>
                <span className="mb-2 text-sm font-bold tracking-wide text-white uppercase">
                    contact
                </span>
                <span className="text-white" style={{ fontSize: 10 }}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum accusantium
                    magni eveniet, dolor commodi sed!
                </span>
                <div className="flex gap-4">
                    <svg
                        className="self-center"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="25.5"
                        viewBox="0 0 24 25.5"
                    >
                        <path
                            id="Vector"
                            d="M641.268,3101H632.75a2.395,2.395,0,0,1,0-4.781h1.5a2.326,2.326,0,0,1,2.25,2.39h4.768a2.049,2.049,0,0,0,1.982-2.1c0-.081,0-8.135-.005-8.254h.006a10.63,10.63,0,0,0-2.859-7.322,9.4,9.4,0,0,0-6.891-3.038c-5.376,0-9.75,4.647-9.75,10.36v.8a.776.776,0,0,1-.751.8h-.75a.776.776,0,0,1-.751-.8v-.8a13.857,13.857,0,0,1,3.57-8.937,11.225,11.225,0,0,1,16.86,0,13.857,13.857,0,0,1,3.57,8.937v8.254A4.375,4.375,0,0,1,641.268,3101Zm-2.518-7.969H638a1.551,1.551,0,0,1-1.5-1.594v-5.578a1.551,1.551,0,0,1,1.5-1.594h.75a3.1,3.1,0,0,1,3,3.188v2.391A3.1,3.1,0,0,1,638.75,3093.031Zm-9.751,0h-.75a3.1,3.1,0,0,1-3-3.187v-2.391a3.1,3.1,0,0,1,3-3.188H629a1.551,1.551,0,0,1,1.5,1.594v5.578A1.551,1.551,0,0,1,629,3093.031Z"
                            transform="translate(-621.5 -3075.5)"
                            fill="#fff"
                        />
                    </svg>

                    <div className="flex flex-col justify-between">
                        <span style={{ fontSize: 10 }} className="tracking-wide text-white">
                            Have any question?
                        </span>
                        <span className="text-xs text-white">01720636876</span>
                    </div>
                    <button
                        type="button"
                        className="px-5 py-2 ml-12 text-xs font-bold tracking-wide uppercase bg-white border rounded-md"
                        style={{ borderColor: '#3D7BD8', color: '#3D7BD8' }}
                    >
                        live chat
                    </button>
                </div>
                <div className="flex justify-between">
                    <button
                        type="button"
                        className="flex items-center gap-4 py-2 pl-3 pr-10 rounded-md"
                        style={{ backgroundColor: '#A1E887' }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="15"
                            height="19"
                            viewBox="0 0 15 19"
                        >
                            <path
                                id="Vector"
                                d="M638.3,3159c-1.858,0-3.679-3.648-4.225-5.312a11.241,11.241,0,0,1-.573-3.444,6.072,6.072,0,0,1,1.459-4.222,4.4,4.4,0,0,1,3.127-1.428,5.868,5.868,0,0,1,1.938.509,3.906,3.906,0,0,0,1.106.328,3.4,3.4,0,0,0,.957-.3,6.609,6.609,0,0,1,2.331-.593c.083,0,.163,0,.24.01a4.224,4.224,0,0,1,3.375,1.892,4.005,4.005,0,0,0-1.993,3.6v.012a4.256,4.256,0,0,0,2.46,3.886c-.512,1.639-2.185,5.031-4.09,5.061a3.585,3.585,0,0,1-1.424-.362,4.027,4.027,0,0,0-1.621-.4,4.358,4.358,0,0,0-1.737.416,3.629,3.629,0,0,1-1.284.344Zm2.923-14.462c-.069,0-.138,0-.205-.009a4.219,4.219,0,0,1,1.02-3.05,4.127,4.127,0,0,1,2.706-1.479v.014a4.169,4.169,0,0,1-.958,3.062A3.375,3.375,0,0,1,641.221,3144.538Z"
                                transform="translate(-633.5 -3140)"
                                fill="#fff"
                            />
                        </svg>

                        <div className="flex flex-col gap-1">
                            <span className="text-white" style={{ fontSize: 6 }}>
                                Download on this
                            </span>
                            <span className="font-black text-white" style={{ fontSize: 10 }}>
                                App Store
                            </span>
                        </div>
                    </button>
                    <button
                        type="button"
                        className="flex items-center gap-4 py-2 pl-3 pr-10 rounded-md"
                        style={{ backgroundColor: '#A1E887' }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="13"
                            height="16"
                            viewBox="0 0 13 16"
                        >
                            <path
                                id="Vector"
                                d="M765.611,3160h0a1.236,1.236,0,0,1-.61-1.1V3145.1a1.236,1.236,0,0,1,.611-1.1l7.229,8-7.228,8Zm1.629-.407h0l6.213-6.912,1.693,1.878Zm8.691-5.575h0L774.079,3152l1.851-2.016,1.66,1.066a1.234,1.234,0,0,1,.41.944,1.251,1.251,0,0,1-.376.957l-1.692,1.065Zm-2.479-2.695h0l-6.217-6.916,7.911,5.038-1.692,1.877Z"
                                transform="translate(-765 -3144)"
                                fill="#fff"
                            />
                        </svg>

                        <div className="flex flex-col gap-1">
                            <span className="text-white" style={{ fontSize: 6 }}>
                                GET IT ON
                            </span>
                            <span className="font-black text-white" style={{ fontSize: 10 }}>
                                Google Play
                            </span>
                        </div>
                    </button>
                </div>
            </div>
        </div>

        <Bottombar />
    </>
);

export default Footer;
