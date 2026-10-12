import Modal from "../components/Modal";
import heart from "../assets/images/heart.png";

const Slide5 = ({ onClose }) => {
    return (
        <Modal onClose={onClose}>

            <div className="relative h-[500px] w-full overflow-hidden">

                {/* =====================================================
                    TITLE
                ===================================================== */}
                <h2
                    className="
                        absolute
                        left-0
                        top-0
                        z-30
                        w-[700px]
                        text-[24px]
                        font-extrabold
                        leading-[1.15]
                        text-[#ed3340]
                    "
                >
                    Lorem ipsum dolor sit amet consectetur. Amet pellentesque sodales fames
                    <br />
                    ut enim sodales.
                </h2>


                {/* =====================================================
                    BLUE CURVED ARROW
                ===================================================== */}
                <div
                    className="
                        absolute
                        left-[90px]
                        top-[75px]
                        h-[350px]
                        w-[650px]
                    "
                >

                    <svg
                        className="absolute inset-0 h-full w-full"
                        viewBox="0 0 650 350"
                        xmlns="http://www.w3.org/2000/svg"
                    >

                        {/* -------------------------------------------------
                            BLUE CURVED LINE

                            strokeWidth keeps the blue band the same
                            thickness throughout the curve.
                        ------------------------------------------------- */}
                        <path
                            d="
                                M 100 285
                                C 55 205, 70 125, 135 75
                                C 200 25, 285 10, 370 25
                                C 465 40, 525 105, 540 185
                            "
                            fill="none"
                            stroke="#28547d"
                            strokeWidth="58"
                            strokeLinecap="butt"
                        />


                        {/* -------------------------------------------------
                            RIGHT SIDE ARROW
                        ------------------------------------------------- */}
                        <polygon
                            points="505,170 585,170 545,245"
                            fill="#28547d"
                        />

                    </svg>


                  
                    <span
                        className="
                            absolute
                            left-[105px]
                            top-[105px]
                            w-[90px]
                            text-center
                            text-[9px]
                            font-bold
                            leading-[11px]
                            text-white
                        "
                    >
                        Proin ultrices leo
                    </span>


                   
                    <span
                        className="
                            absolute
                            left-[255px]
                            top-[38px]
                            w-[140px]
                            text-center
                            text-[8px]
                            font-bold
                            leading-[10px]
                            text-white
                        "
                    >
                        Nulla quis dolor mollis,
                        <br />
                        auctor eros sed,
                        <br />
                        accumsan mauris
                    </span>


                  
                    <span
                        className="
                            absolute
                            right-[105px]
                            top-[95px]
                            text-[9px]
                            font-bold
                            text-white
                        "
                    >
                        Pellentesque
                    </span>


                  
                    <span
                        className="
                            absolute
                            right-[65px]
                            top-[145px]
                            w-[90px]
                            text-center
                            text-[8px]
                            font-bold
                            leading-[10px]
                            text-white
                        "
                    >
                        Vivamus ut rhoncus
                        <br />
                        tortor
                    </span>


                    
                    <span
                        className="
                            absolute
                            left-[45px]
                            top-[165px]
                            w-[75px]
                            text-center
                            text-[8px]
                            font-bold
                            leading-[10px]
                            text-white
                        "
                    >
                        Phasellus sit
                        <br />
                        amet
                    </span>


                   
                    <span
                        className="
                            absolute
                            left-[30px]
                            top-[255px]
                            w-[75px]
                            text-center
                            text-[8px]
                            font-bold
                            leading-[10px]
                            text-white
                        "
                    >
                        bibendum
                        <br />
                        ligula
                    </span>


                   
                    <span
                        className="
                            absolute
                            right-[15px]
                            top-[235px]
                            w-[100px]
                            text-center
                            text-[8px]
                            font-bold
                            leading-[10px]
                            text-white
                        "
                    >
                        Nullam lacus dui
                    </span>


                   

                    <img
                        src={heart}
                        alt="Heart"
                        className="
                            absolute
                            left-[230px]
                            top-[100px]
                            z-20
                            h-[230px]
                            w-[230px]
                            object-contain
                        "
                    />

                </div>


                
                <p
                    className="
                        absolute
                        left-[270px]
                        top-[405px]
                        text-[9px]
                        font-bold
                        text-[#222]
                    "
                >
                    VIVAMUS ELIT ELIT, PRETIUM NEC PORTA AT
                    <sup>2</sup>
                </p>


                
                <p
                    className="
                        absolute
                        bottom-0
                        left-0
                        right-0
                        text-[14px]
                        font-semibold
                        leading-[19px]
                        text-[#222]
                    "
                >
                    Lorem ipsum dolor sit amet consectetur. Elit libero neque maecenas ac
                    egestas vel ut diam. Vitae sagittis praesent suspendisse pretium aliquet.
                    Turpis dolor purus tortor amet aenean id risus neque vulputate. Faucibus
                    elementum mauris in suscipit id blandit non.
                </p>

            </div>

        </Modal>
    );
};

export default Slide5;