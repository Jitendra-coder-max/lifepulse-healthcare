import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Footnotes from "../popups/Footnotes";
import References from "../popups/References";
import lady from "../assets/images/lady.png";

const Slide1 = ({ onNavigate }) => {
    const [showFootnotes, setShowFootnotes] = useState(false);
    const [showReferences, setShowReferences] = useState(false);

    return (
        <main className="relative mx-auto h-[768px] w-[1024px] overflow-hidden bg-white">

           
            <Header onNavigate={onNavigate} />


            
            <section className="absolute left-0 top-[82px] h-[280px] w-full bg-[#e7e7e7]">

               
                <div className="absolute right-[30px] top-[45px] flex items-center gap-3">

                   
                    <svg
                        className="h-[55px] w-[65px]"
                        viewBox="0 0 65 55"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <defs>
                            <clipPath id="heartClip">
                                <path
                                    d="M32.5 53
                                    C29 49 5 33 2 19
                                    C-1 6 14 -3 25 3
                                    C29 5 32 9 32.5 12
                                    C33 9 36 5 40 3
                                    C51 -3 66 6 63 19
                                    C60 33 36 49 32.5 53Z"
                                />
                            </clipPath>
                        </defs>

                       
                        <rect
                            x="0"
                            y="0"
                            width="33"
                            height="55"
                            fill="#102b52"
                            clipPath="url(#heartClip)"
                        />

                       
                        <rect
                            x="32"
                            y="0"
                            width="33"
                            height="55"
                            fill="#ed3340"
                            clipPath="url(#heartClip)"
                        />

                     
                        <path
                            d="M32.5 12
                            C31 8 28 5 25 3
                            C29 5 32 9 32.5 12
                            C33 9 36 5 40 3
                            C37 5 34 8 32.5 12Z"
                            fill="#8d2532"
                        />
                    </svg>

                    <span className="text-[28px] font-bold text-[#222]">
                        Product Logo
                    </span>
                </div>
            </section>


            
            <section className="absolute left-0 top-[362px] h-[326px] w-full bg-white">

                
                <div className="absolute left-[555px] top-[55px] w-[440px]">

                    <p className="mb-4 text-[16px] leading-[22px] text-[#222]">
                        Tristique senectus et netus et malesuada fames
                        <sup className="ml-1 text-[10px]">1,2,*</sup>
                    </p>

                    <h1 className="text-[43px] font-extrabold leading-[1.05] text-[#ed3340]">
                        FACILISIS SED
                        <br />
                        ODIO MORBI QUIS
                    </h1>

                    <p className="mt-7 text-[23px] leading-[1.35] text-[#222]">
                        Aenean finibus nunc ut mauris accumsan semper
                        <br />
                        finibus nunc ut mauris
                        <sup className="ml-1 text-[11px]">3,†</sup>
                    </p>

                </div>
            </section>


            
            <div className="absolute bottom-[78px] left-[80px] z-10 h-[570px] w-[430px]">
                <img
                    src={lady}
                    alt="Lady"
                    className="h-full w-full object-contain object-bottom"
                />
            </div>


            
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

        </main>
    );
};

export default Slide1;