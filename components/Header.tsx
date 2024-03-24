import NavbarComponent from "@/components/Navbar";
import MobileNavbar from "./MobileNavbar";

const Header = () => {
    return(
        <header>
            <div className="">
            <NavbarComponent />
            </div>
            <div>
            <MobileNavbar />
            </div>

        </header>
    );
};

export default Header;