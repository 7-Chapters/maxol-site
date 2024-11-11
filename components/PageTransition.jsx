"use client";
import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';


const useIsDesktop = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024); 
    };

    handleResize(); 
    window.addEventListener('resize', handleResize); 

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isDesktop;
};

const PageTransition = ({ children }) => {
  const pathname = usePathname();
  const isDesktop = useIsDesktop(); 

 
  return (
    <AnimatePresence>
      <div key={pathname}>
        {isDesktop && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{
              opacity: 0,
              transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
            }}
            className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
          />
        )}
        {children}
      </div>
    </AnimatePresence>
  );
};

export default PageTransition;
