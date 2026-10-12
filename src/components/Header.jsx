import Navigation from "./Navigation";

const Header = ({ onNavigate }) => {
    return (
        <header className="flex items-center justify-between px-10 py-5">
            <h2 className="text-2xl font-bold">
             
            </h2>

            <Navigation onNavigate={onNavigate} />
        </header>
    );
};

export default Header;