import Link from "next/link";
import Image from "next/image"; 
import logo from "../assets/Maxol logo without bg.png"; 
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-customgreen">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <Image 
            src={logo} 
            alt="MAXOL Logo" 
            width={100} 
            height={50} 
            priority
          />
        </Link>
        
        {/* Desktop nav */}
        <div className="hidden xl:flex items-center justify-center flex-grow gap-8">
          <Nav/>
          </div>

        {/* Contact Us Button */}
        <Link href="/contact-us">
          <button className="hidden xl:flex rounded-full border border-customGreen px-6 py-2 font-medium hover:bg-customBlue hover:text-white">
            Contact Us
          </button>
        </Link>
        

        {/*mobile menu*/}
        <div className="xl:hidden">
          <MobileNav/>

        </div>
      </div>
    </header>
  );
}

export default Header;
