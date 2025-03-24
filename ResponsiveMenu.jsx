import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const ResponsiveMenu = ({ open, setOpen }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClose = () => {
    if (isMobile) {
      setOpen(false); // Close menu on mobile after clicking a link
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className="absolute top-20 left-0 w-full h-screen z-20 bg-blue-900 text-white py-10  m-6 rounded-3xl"
        >
          <ul className="flex flex-col px-10 gap-10 text-xl font-semibold uppercase">
            <li>
              <Link to="/" onClick={handleClose}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/explore" onClick={handleClose}>
                Explore
              </Link>
            </li>
            <li>
              <Link to="/notification" onClick={handleClose}>
                Notification
              </Link>
            </li>
            <li>
              <Link to="/wishlist" onClick={handleClose}>
                Wishlist
              </Link>
            </li>
            <li>
              <Link to="/scholarship" onClick={handleClose}>
                Scholarship
              </Link>
            </li>
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;
