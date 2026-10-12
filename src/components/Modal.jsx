const Modal = ({ children, onClose }) => {
    return (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-[#102b52]/90">
            <div className="relative w-[80%] min-h-[300px] rounded-lg bg-white p-10">

                <button
                    className="absolute right-4 top-4 cursor-pointer text-3xl text-[#102b52]"
                    onClick={onClose}
                    aria-label="Close modal"
                >
                    ×
                </button>

                {children}
            </div>
        </div>
    );
};

export default Modal;