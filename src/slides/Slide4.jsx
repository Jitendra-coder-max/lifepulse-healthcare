import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Footnotes from "../popups/Footnotes";
import References from "../popups/References";
import Slide5 from "../popups/Slide5";

const Slide4 = ({ onNavigate }) => {
    const [showFootnotes, setShowFootnotes] = useState(false);
    const [showReferences, setShowReferences] = useState(false);
    const [showSlide5, setShowSlide5] = useState(false);

    return (
        <main className="relative mx-auto h-[768px] w-[1024px] overflow-hidden bg-[#e7e7e7]">

           
            <Header onNavigate={onNavigate} />


            
            <section className="absolute left-0 top-[82px] h-[606px] w-full bg-[#e7e7e7]">

               
                <h1 className="absolute left-[70px] top-[28px] w-[880px] text-[25px] font-extrabold leading-[1.2] text-[#ed3340]">
                    Quisque facilisis ex id nulla aliquam suscipit. Nunc dictum nisi quis urna
                    <br />
                    dignissim, et posuere sapien dignissim
                    <sup className="ml-1 text-[11px]">1,2</sup>
                </h1>


                
                <div className="absolute left-[70px] top-[157px] h-[180px] w-[205px] bg-[#ed3340]">

                   
                    <div className="pt-[18px] text-center text-[58px] font-extrabold leading-none text-white">
                        39<span className="text-[34px]">%</span>
                    </div>

                 
                    <p className="mt-[12px] px-[20px] text-center text-[16px] font-bold leading-[20px] text-white">
                        Aenean a purus ut est
                        <br />
                        mattis venenatis
                        <br />
                        mollis
                    </p>

                  
                    <div
                        className="absolute -bottom-[30px] left-0 h-[45px] w-full bg-[#ed3340]"
                        style={{
                            clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                        }}
                    />
                </div>


               
                <div className="absolute left-[65px] top-[365px] flex w-[215px] flex-col items-center text-center">

                    <p className="text-[20px] font-bold leading-[23px] text-[#222]">
                        Curabitur elementum
                        <br />
                        risus
                        <sup className="text-[11px]">2</sup>
                    </p>

                    <button
                        type="button"
                        onClick={() => setShowSlide5(true)}
                        className="mt-[18px] flex h-[52px] w-[52px] cursor-pointer items-center justify-center rounded-full border-[5px] border-[#f58b93] bg-[#ed3340] text-[34px] font-normal leading-none text-white"
                        aria-label="Open information"
                    >
                        +
                    </button>

                </div>


              
                <div className="absolute left-[285px] top-[157px] h-[235px] w-[640px] bg-white">

             
                    <div className="absolute left-[48px] top-[10px]">

                        <div className="h-[4px] w-[25px] bg-[#bdbdbd]" />

                        <p className="mt-[5px] text-[13px] font-bold text-[#222]">
                            PELLENTESQUE
                        </p>

                        <div className="mt-[8px] h-[4px] w-[25px] bg-[#ed3340]" />

                        <p className="mt-[3px] text-[13px] font-bold text-[#ed3340]">
                            NUNC VITAE NIBH
                        </p>

                    </div>


                    <div className="absolute right-[48px] top-[8px] flex items-center">

                       
                        <button 
                        
                            type="button"
                            onClick={() => setShowSlide5(true)} className="z-10 flex h-[30px] w-[30px] items-center justify-center rounded-full border-[3px] border-[#f58b93] bg-[#ed3340] text-[22px] text-white">
                            +
                        </button>

                        
                        <div className="-ml-[2px] rounded-[7px] border-2 border-[#17395f] bg-white px-[15px] py-[6px] text-[12px] font-bold leading-[15px] text-[#17395f]">
                            Cras egestas tempus
                            <br />
                            aliquam. Sed erat mul.
                        </div>

                    </div>


                  
                    <svg
                        className="absolute bottom-[20px] left-[38px]"
                        width="570"
                        height="155"
                        viewBox="0 0 570 155"
                    >

                  
                        <text x="0" y="20" fontSize="10" fill="#555">
                            78
                        </text>

                        <text x="0" y="45" fontSize="10" fill="#555">
                            76
                        </text>

                        <text x="0" y="70" fontSize="10" fill="#555">
                            74
                        </text>

                        <text x="0" y="95" fontSize="10" fill="#555">
                            72
                        </text>

                        <text x="0" y="120" fontSize="10" fill="#555">
                            70
                        </text>

                        <text x="0" y="145" fontSize="10" fill="#555">
                            68
                        </text>


                      
                        <line
                            x1="12"
                            y1="17"
                            x2="20"
                            y2="17"
                            stroke="#555"
                        />

                        <line
                            x1="12"
                            y1="42"
                            x2="20"
                            y2="42"
                            stroke="#555"
                        />

                        <line
                            x1="12"
                            y1="67"
                            x2="20"
                            y2="67"
                            stroke="#555"
                        />

                        <line
                            x1="12"
                            y1="92"
                            x2="20"
                            y2="92"
                            stroke="#555"
                        />

                        <line
                            x1="12"
                            y1="117"
                            x2="20"
                            y2="117"
                            stroke="#555"
                        />

                        <line
                            x1="12"
                            y1="142"
                            x2="20"
                            y2="142"
                            stroke="#555"
                        />


                        
                        <polyline
                            points="
                                28,18
                                50,32
                                80,38
                                115,41
                                150,43
                                185,53
                                220,61
                                255,70
                                290,82
                                325,92
                                360,105
                                395,115
                                430,125
                                465,132
                                500,137
                                535,140
                            "
                            fill="none"
                            stroke="#bdbdbd"
                            strokeWidth="3"
                        />


                        
                        <polyline
                            points="
                                28,18
                                32,63
                                50,55
                                80,51
                                115,49
                                150,48
                                185,48
                                220,49
                                255,49
                                290,51
                                325,62
                                360,67
                                395,66
                                430,69
                                465,69
                                500,70
                                535,65
                            "
                            fill="none"
                            stroke="#ed3340"
                            strokeWidth="3"
                        />


                   
                        <text x="25" y="154" fontSize="9" fill="#444">
                            0
                        </text>

                        <text x="90" y="154" fontSize="9" fill="#444">
                            0.5
                        </text>

                        <text x="155" y="154" fontSize="9" fill="#444">
                            1
                        </text>

                        <text x="220" y="154" fontSize="9" fill="#444">
                            1.5
                        </text>

                        <text x="285" y="154" fontSize="9" fill="#444">
                            2
                        </text>

                        <text x="350" y="154" fontSize="9" fill="#444">
                            2.5
                        </text>

                        <text x="415" y="154" fontSize="9" fill="#444">
                            3
                        </text>

                        <text x="480" y="154" fontSize="9" fill="#444">
                            3.5
                        </text>

                    </svg>

                </div>


               

               
                <div className="absolute left-[70px] top-[480px] flex h-[62px] w-[265px] items-center rounded-[10px] border border-[#d2d2d2] bg-white px-[14px]">

                    <div className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full bg-[#0d274d]">

                        <svg
                            width="21"
                            height="21"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                                d="M20.8 4.6C19.1 2.8 16.3 2.8 14.6 4.5L12 7.1L9.4 4.5C7.7 2.8 4.9 2.8 3.2 4.6C1.5 6.4 1.5 9.2 3.2 11L12 20L20.8 11C22.5 9.2 22.5 6.4 22.5 6.4 20.8 4.6Z"
                                stroke="white"
                                strokeWidth="1.8"
                            />
                        </svg>

                    </div>

                    <p className="ml-[12px] text-[12px] leading-[16px] text-[#222]">
                        Lorem ipsum dolor sit amet,
                        <br />
                        consectetur adipiscing elit sed.
                    </p>

                </div>


              
                <div className="absolute left-[350px] top-[480px] flex h-[62px] w-[265px] items-center rounded-[10px] border border-[#d2d2d2] bg-white px-[14px]">

                    <div className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full bg-[#0d274d]">

                        <svg
                            width="21"
                            height="21"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                                d="M8.5 15.5L15.5 8.5"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                            />

                            <rect
                                x="5"
                                y="12"
                                width="7"
                                height="10"
                                rx="3"
                                transform="rotate(-45 5 12)"
                                stroke="white"
                                strokeWidth="1.7"
                            />

                            <rect
                                x="12"
                                y="2"
                                width="7"
                                height="10"
                                rx="3"
                                transform="rotate(45 12 2)"
                                stroke="white"
                                strokeWidth="1.7"
                            />

                        </svg>

                    </div>

                    <p className="ml-[12px] text-[12px] leading-[16px] text-[#222]">
                        Lorem ipsum dolor sit amet,
                        <br />
                        consectetur adipiscing elit sed.
                    </p>

                </div>


                <div className="absolute left-[630px] top-[480px] flex h-[62px] w-[265px] items-center rounded-[10px] border border-[#d2d2d2] bg-white px-[14px]">

                    <div className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full bg-[#0d274d]">

                        <svg
                            width="21"
                            height="21"
                            viewBox="0 0 24 24"
                            fill="none"
                        >

                            <rect
                                x="5"
                                y="6"
                                width="14"
                                height="15"
                                rx="2"
                                stroke="white"
                                strokeWidth="1.8"
                            />

                            <path
                                d="M9 6V4C9 3.4 9.4 3 10 3H14C14.6 3 15 3.4 15 4V6"
                                stroke="white"
                                strokeWidth="1.8"
                            />

                            <path
                                d="M9 11H15"
                                stroke="white"
                                strokeWidth="1.5"
                            />

                            <path
                                d="M9 15H15"
                                stroke="white"
                                strokeWidth="1.5"
                            />

                        </svg>

                    </div>

                    <p className="ml-[12px] text-[12px] leading-[16px] text-[#222]">
                        Lorem ipsum dolor sit amet,
                        <br />
                        consectetur adipiscing elit sed.
                    </p>

                </div>

            </section>


            
            <Footer
                onReferences={() => setShowReferences(true)}
                onFootnotes={() => setShowFootnotes(true)}
            />


           
            {showFootnotes && (
                <Footnotes
                    onClose={() => setShowFootnotes(false)}
                />
            )}


           
            {showReferences && (
                <References
                    onClose={() => setShowReferences(false)}
                />
            )}


            
            {showSlide5 && (
                <Slide5
                    onClose={() => setShowSlide5(false)}
                />
            )}

        </main>
    );
};

export default Slide4;