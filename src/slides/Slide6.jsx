import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Footnotes from "../popups/Footnotes";
import References from "../popups/References";

const Slide6 = ({ onNavigate }) => {
    const [showFootnotes, setShowFootnotes] = useState(false);
    const [showReferences, setShowReferences] = useState(false);

    return (
        <main className="relative mx-auto h-[768px] w-[1024px] overflow-hidden bg-[#f3f3f3]">

         
            <Header onNavigate={onNavigate} />

          
            <section className="absolute left-0 top-[82px] h-[606px] w-full">

              
                <h1 className="absolute left-[40px] top-[30px] w-[900px] text-[28px] font-bold leading-[1.2] text-[#d71920]">
                    Quisque facilisis ex id nulla aliquam suscipit. Nunc dictum nisi
                    quis urna dignissim, et posuere sapien dignissim
                    <sup className="align-super text-[16px]">†1,2</sup>
                </h1>

               
                <div className="absolute left-[40px] top-[115px] flex gap-[18px]">

                    <button className="flex h-[58px] w-[285px] items-center justify-between rounded-[10px] border-2 border-[#e8a0aa] bg-white px-5">
                        <span className="text-[22px] font-semibold text-[#333]">
                            Suspendisse
                        </span>

                        <span className="flex h-[32px] w-[32px] items-center justify-center rounded-full bg-[#e5a0aa] text-[26px] font-light text-white">
                            +
                        </span>
                    </button>

                    <button className="flex h-[58px] w-[285px] items-center justify-between rounded-[10px] border-2 border-[#e8a0aa] bg-white px-5">
                        <span className="text-[22px] font-semibold text-[#333]">
                            Accumsan
                        </span>

                        <span className="flex h-[32px] w-[32px] items-center justify-center rounded-full bg-[#e5a0aa] text-[26px] font-light text-white">
                            +
                        </span>
                    </button>

                    <button className="flex h-[58px] w-[285px] items-center justify-between rounded-[10px] border-2 border-[#e8a0aa] bg-white px-5">
                        <span className="text-[22px] font-semibold text-[#333]">
                            Dapibus
                        </span>

                        <span className="flex h-[32px] w-[32px] items-center justify-center rounded-full bg-[#e5a0aa] text-[26px] font-light text-white">
                            +
                        </span>
                    </button>

                </div>

               
                <div className="absolute left-[40px] top-[205px] h-[300px] w-[940px]">

              
                    <div className="absolute left-0 top-0 h-[260px] border-l-2 border-[#2b5275]" />

                   
                    <div className="absolute left-0 top-0 w-full border-t-2 border-[#2b5275]" />
                    <div className="absolute left-0 top-[33px] w-full border-t border-dashed border-[#c8c8c8]" />
                    <div className="absolute left-0 top-[99px] w-full border-t border-dashed border-[#c8c8c8]" />
                    <div className="absolute left-0 top-[165px] w-full border-t border-dashed border-[#c8c8c8]" />
                    <div className="absolute left-0 top-[230px] w-full border-t border-dashed border-[#c8c8c8]" />
                    <div className="absolute left-0 top-[260px] w-full border-t border-dashed border-[#c8c8c8]" />

                  
                    <span className="absolute -left-[20px] -top-[8px] text-[14px] text-[#2b5275]">
                        0
                    </span>

                    <span className="absolute -left-[25px] top-[27px] text-[14px] text-[#2b5275]">
                        -1
                    </span>

                    <span className="absolute -left-[25px] top-[93px] text-[14px] text-[#2b5275]">
                        -2
                    </span>

                    <span className="absolute -left-[25px] top-[159px] text-[14px] text-[#2b5275]">
                        -3
                    </span>

                    <span className="absolute -left-[25px] top-[224px] text-[14px] text-[#2b5275]">
                        -4
                    </span>

                    <span className="absolute -left-[25px] top-[254px] text-[14px] text-[#2b5275]">
                        -5
                    </span>

                   
                    <div
                        className="absolute left-[80px] top-0 flex h-[155px] w-[105px] flex-col items-center justify-center bg-[#ed3b4b] text-white"
                        style={{
                            clipPath: "polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%)"
                        }}
                    >
                        <span className="text-[22px] font-bold">
                            -5.2mmHg
                        </span>
                        <span className="mt-1 text-[14px]">
                            at Week 24
                        </span>
                    </div>

                  
                    <div
                        className="absolute left-[260px] top-0 flex h-[110px] w-[105px] flex-col items-center justify-center bg-[#ed3b4b] text-white"
                        style={{
                            clipPath: "polygon(0 0, 100% 0, 100% 78%, 50% 100%, 0 78%)"
                        }}
                    >
                        <span className="text-[22px] font-bold">
                            -2.5kg
                        </span>
                        <span className="mt-1 text-[14px]">
                            at Week 24
                        </span>
                    </div>

                    <div
                        className="absolute left-[410px] top-0 flex h-[155px] w-[105px] flex-col items-center justify-center bg-[#e96a76] text-white"
                        style={{
                            clipPath: "polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%)"
                        }}
                    >
                        <span className="text-[22px] font-bold">
                            -3.4kg
                        </span>
                        <span className="mt-1 text-[14px]">
                            at Week 24
                        </span>
                    </div>

                   
                    <div
                        className="absolute left-[560px] top-0 flex h-[195px] w-[105px] flex-col items-center justify-center bg-[#e88c96] text-white"
                        style={{
                            clipPath: "polygon(0 0, 100% 0, 100% 82%, 50% 100%, 0 82%)"
                        }}
                    >
                        <span className="text-[22px] font-bold">
                            -4.8kg
                        </span>
                        <span className="mt-1 text-[14px]">
                            at Week 76
                        </span>
                    </div>

                  
                    <div
                        className="absolute left-[740px] top-0 flex h-[155px] w-[105px] flex-col items-center justify-center bg-[#ed3b4b] text-white"
                        style={{
                            clipPath: "polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%)"
                        }}
                    >
                        <span className="text-[22px] font-bold">
                            -0.8%
                        </span>
                        <span className="mt-1 text-[14px]">
                            at Week 24
                        </span>
                    </div>

                   
                    <div
                        className="absolute left-[855px] top-0 flex h-[190px] w-[105px] flex-col items-center justify-center bg-[#e88c96] text-white"
                        style={{
                            clipPath: "polygon(0 0, 100% 0, 100% 82%, 50% 100%, 0 82%)"
                        }}
                    >
                        <span className="text-[22px] font-bold">
                            -3.7%
                        </span>
                        <span className="mt-1 text-[14px]">
                            at Week 24
                        </span>
                    </div>

                </div>
            </section>

           
            <Footer
                onReferences={() => setShowReferences(true)}
                onFootnotes={() => setShowFootnotes(true)}
            />

          
            {showFootnotes && (
                <Footnotes onClose={() => setShowFootnotes(false)} />
            )}

            {showReferences && (
                <References onClose={() => setShowReferences(false)} />
            )}

        </main>
    );
};

export default Slide6;