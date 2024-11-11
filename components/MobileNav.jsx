"use client";

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { DialogTitle } from '@radix-ui/react-dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { CiMenuFries } from 'react-icons/ci';
import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai';
import Image from 'next/image';
import logo from "../assets/logo.jpeg";

const links = [
    { name: "home", path: "/" },
    { name: "about us", path: "/about-us" },
    { name: "cocopeat", path: "/cocopeat" },
    { name: "horticulture", path: "/horticulture" },
    { name: "Contact Us", path: "/contact-us" },
];

const MobileNav = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger onClick={() => setIsOpen(!isOpen)} className="flex justify-center items-center">
                <CiMenuFries className="text-[32px]" />
            </SheetTrigger>
            
            {isOpen && (
                <SheetContent className="flex flex-col items-center justify-center p-4 space-y-4">
                    <VisuallyHidden>
                        <DialogTitle>Menu</DialogTitle>
                    </VisuallyHidden>

                    <Link href="/" className="mb-4" onClick={() => setIsOpen(false)}>
                        <Image 
                            src={logo} 
                            alt="MAXOL Logo" 
                            width={100} 
                            height={50} 
                            priority 
                        />
                    </Link>
                    
                    <nav className="flex flex-col items-center space-y-4">
                        {links.map((link, index) => (
                            <Link 
                                href={link.path} 
                                key={index} 
                                className={`capitalize font-medium py-2 ${
                                    pathname === link.path ? 'text-customBlue' : 'text-customGreen'
                                }`}
                                onClick={() => setIsOpen(false)}
                                suppressHydrationWarning
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    <div className="flex flex-col items-center space-y-2 mt-6 text-customGreen">
                        <div className="flex items-center space-x-2">
                            <AiOutlinePhone className="text-customGreen text-xl" />
                            <a href="tel:+94773220022" className="text-customGreen font-medium" suppressHydrationWarning>
                                +94 773 220 022
                            </a>
                        </div>
                        <div className="flex items-center space-x-2">
                            <AiOutlineMail className="text-customGreen text-xl" />
                            <a href="mailto:maxol@maxolsl.com" className="text-customGreen font-medium" suppressHydrationWarning>
                                maxol@maxolsl.com
                            </a>
                        </div>
                    </div>
                </SheetContent>
            )}
        </Sheet>
    );
}

export default MobileNav;
