const Navigation = ({ onNavigate }) => {
    const navItems = [
        { label: "EFFICACY", slide: 2 },
        { label: "SAFETY", slide: 3 },
        { label: "SOCIAL PROOF", slide: 4 },
        { label: "EVOLVING HF TREATMENT", slide: 5 },
        { label: "DOSING", slide: 6 },
        { label: "CASE STUDIES", slide: 7 },
        { label: "SUMMARY", slide: 8 },
    ];

    return (
        <nav className="flex h-[82px] w-full items-stretch bg-white">

            {/* Home */}
            <div className="ml-[150px] flex shrink-0">
                <button
                    type="button"
                    onClick={() => onNavigate(1)}
                    className="flex w-[66px] items-center justify-center bg-[#0d274d]"
                    aria-label="Home"
                >
                    <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                    >
                        <path
                            d="M4 14.5L16 4L28 14.5V28H19.5V20H12.5V28H4V14.5Z"
                            fill="white"
                        />
                    </svg>
                </button>
            </div>

            {/* Navigation */}
            {navItems.map((item, index) => (
                <button
                    key={item.label}
                    type="button"
                    onClick={() => onNavigate(item.slide)}
                    className={`min-w-0 flex-1 flex items-center justify-center
                        px-2 text-center text-[15px] font-bold
                        leading-[20px] text-[#222222]
                        bg-white
                        ${index !== navItems.length - 1
                            ? "border-r border-[#cfcfcf]"
                            : ""
                        }`}
                >
                    {item.label === "EVOLVING HF TREATMENT" ? (
                        <span className="whitespace-nowrap">
                            EVOLVING HF
                            <br />
                            TREATMENT
                        </span>
                    ) : item.label === "SOCIAL PROOF" ? (
                        <span>
                            SOCIAL
                            <br />
                            PROOF
                        </span>
                    ) : item.label === "CASE STUDIES" ? (
                        <span>
                            CASE
                            <br />
                            STUDIES
                        </span>
                    ) : (
                        item.label
                    )}
                </button>
            ))}
        </nav>
    );
};

export default Navigation;