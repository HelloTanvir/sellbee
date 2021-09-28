import React from 'react';

const FooterTop = () => (
    <div
        className="flex items-center gap-12 py-10 px-p-w"
        style={{ backgroundImage: 'linear-gradient(223deg, #6a8d92, #493548)' }}
    >
        <svg xmlns="http://www.w3.org/2000/svg" width="58" height="51" viewBox="0 0 58 51">
            <path
                id="Vector"
                d="M104.5,2901.5H78.722a3.209,3.209,0,0,1-3.222-3.188v-13.387c.244.181.516.388.83.628l.059.045c1.356,1.037,3.627,2.773,8.778,6.34.141.1.3.226.468.355l.02.015c1.374,1.053,3.673,2.816,5.957,2.816s4.581-1.762,5.954-2.814c.167-.128.34-.26.491-.372,5.142-3.561,7.416-5.3,8.774-6.337.308-.236.623-.477.892-.676v13.387A3.209,3.209,0,0,1,104.5,2901.5Zm25.778-9.562H110.944V2878.55l-.029.022a6.391,6.391,0,0,0-6.415-5.759H94.833v-3.188a3.209,3.209,0,0,1,3.223-3.188h32.222a3.209,3.209,0,0,1,3.222,3.188v19.125A3.209,3.209,0,0,1,130.278,2891.938Zm-9.668-19.128v6.38h6.44v-6.38Zm-29,19.128c-1.229,0-2.645-1.113-3.678-1.925-.325-.256-.6-.475-.833-.626-6.622-4.743-8.37-6.11-9.775-7.208l0,0c-.573-.448-1.067-.835-1.821-1.394v-1.594A3.209,3.209,0,0,1,78.722,2876H104.5a3.209,3.209,0,0,1,3.222,3.188v1.913c-.742.551-1.234.935-1.8,1.381l-.018.014c-1.4,1.1-3.144,2.459-9.778,7.212a6.76,6.76,0,0,0-1.343.789A6.61,6.61,0,0,1,91.611,2891.938Zm0-19.125H81.944v-19.125a3.209,3.209,0,0,1,3.222-3.188h32.223a3.209,3.209,0,0,1,3.222,3.188v9.563H98.056a6.417,6.417,0,0,0-6.445,6.375v3.187Z"
                transform="translate(-75.5 -2850.5)"
                fill="#fff"
                opacity="0.369"
            />
        </svg>

        <div className="flex flex-col flex-1 gap-4 text-white">
            <span className="relative text-lg font-extrabold font-lato w-max">
                Sign Up for Newsletter
                <img
                    src="/accessoryElement.svg"
                    alt="accessoryElement"
                    className="absolute -right-3 bottom-2"
                />
            </span>

            <span className="tracking-wide font-poppins" style={{ fontSize: 10, maxWidth: 550 }}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa iste necessitatibus
                exercitationem maiores eos incidunt mollitia expedita totam saepe eius?
            </span>
        </div>

        <div className="w-full" style={{ maxWidth: 400 }}>
            <div className="relative">
                <input
                    type="text"
                    className="z-10 w-full h-10 bg-white rounded-md outline-none placeholder-footer-input-placeholder"
                    style={{
                        fontSize: 9,
                        padding: '12px 15px',
                    }}
                    placeholder="Enter your email here"
                />

                <button
                    type="button"
                    style={{ backgroundColor: '#565656', height: 30, fontSize: 10 }}
                    className="absolute z-10 px-6 font-semibold tracking-wide text-white transform -translate-y-1/2 rounded-md font-lato top-1/2 right-2"
                >
                    SUBSCRIBE
                </button>

                <img
                    src="/accessoryElement.svg"
                    alt="accessoryElement"
                    className="absolute -right-3 -bottom-2"
                />
            </div>
        </div>
    </div>
);

export default FooterTop;
