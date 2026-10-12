const Footer = ({ onReferences, onFootnotes }) => {
    return (
        <footer className="absolute bottom-0 left-0 flex h-[78px] w-[75%] items-center rounded-tr-[80px] bg-white px-10 text-[#1f2933]">

            {/* Icon only */}
            <div className="flex items-center pr-5">
                <svg
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="none"
                    stroke="#294f73"
                    strokeWidth="2"
                >
                    <rect x="14" y="3" width="6" height="6" />
                    <rect x="4" y="24" width="6" height="6" />
                    <rect x="24" y="24" width="6" height="6" />
                    <rect x="14" y="24" width="6" height="6" />
                    <path d="M17 9V17M7 24v-4h20v4M17 17v7" />
                </svg>
            </div>

            <Divider />

            {/* References */}
            <FooterItem
                onClick={onReferences}
                icon={
                    <svg
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                    >
                        <path d="M15 2v26M2 15h26M5 5l20 20M25 5L5 25" />
                    </svg>
                }
                label="REFERENCES"
            />

            <Divider />

            {/* Footnotes */}
            <FooterItem
                onClick={onFootnotes}
                icon={
                    <svg
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path d="M7 4h16v22H7z" />
                        <path d="M10 4v7l5-3 5 3V4" />
                    </svg>
                }
                label="FOOTNOTES"
            />

            <Divider />

            {/* Email */}
            <FooterItem
                icon={
                    <svg
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <rect x="3" y="6" width="24" height="18" rx="2" />
                        <path d="m4 8 11 8L26 8" />
                    </svg>
                }
                label="EMAIL"
            />

            <Divider />

            {/* Resources */}
            <FooterItem
                icon={
                    <svg
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <rect x="5" y="8" width="20" height="18" rx="2" />
                        <path d="M10 8V5h10v3" />
                    </svg>
                }
                label="RESOURCES"
            />

            <Divider />

            {/* PI */}
            <FooterItem
                icon={
                    <span className="font-serif text-[32px] italic leading-none">
                        i
                    </span>
                }
                label="PI"
            />

        </footer>
    );
};

const Divider = () => (
    <div className="mx-5 h-[38px] w-px bg-[#c8c8c8]" />
);

const FooterItem = ({ icon, label, onClick }) => (
    <button
        type="button"
        onClick={onClick}
        className={`flex items-center gap-3 whitespace-nowrap text-[#222] ${onClick
                ? "cursor-pointer hover:opacity-70"
                : "cursor-default"
            }`}
    >
        <div className="text-[#294f73]">
            {icon}
        </div>

        <span className="text-[18px] font-semibold tracking-wide">
            {label}
        </span>
    </button>
);

export default Footer;