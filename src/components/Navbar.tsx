"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun, Globe } from 'lucide-react';
import { useTheme } from "next-themes";

const navItems = [
  { name: { en: "Privacy Policy", tr: "Gizlilik Sözleşmesi" }, route: "/Privacy" },
  { name: { en: "About Us", tr: "Hakkımızda" }, route: "/About" },
  { name: { en: "Contact", tr: "İletişim" }, route: "/Contact" },
  { name: { en: "Subscription", tr: "Abonelik" }, route: "/Subs" },
  //{ name: { en: "Download", tr: "İndir" }, route: "/AppScreens" }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [language, setLanguage] = useState<'en' | 'tr'>('en');
  const router = useRouter();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? "auto" : "hidden";
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'tr' : 'en');
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 ${
        scrolled ? "bg-white dark:bg-gray-800 shadow-lg" : "bg-#cf6566 dark:bg-gray-900"
      } transition-all duration-300 ease-in-out`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            onClick={() => router.push("/")}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <Image
              src="/oto360.png"
              alt="OtoTakip360 logo"
              width={60}
              height={60}
              className="rounded-full"
            />
            <span
              className={`text-2xl font-bold ${
                scrolled ? "text-[#cf6566] dark:text-white" : "text-white"
              }`}
            >
              OtoTakip360
            </span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => router.push(item.route)}
                className={`cursor-pointer text-sm font-medium py-2 px-3 rounded-full ${
                  scrolled
                    ? "text-[#cf6566] dark:text-white hover:bg-[#cf6566] dark:hover:bg-gray-700"
                    : "text-white hover:bg-white hover:bg-opacity-20 dark:hover:bg-gray-700"
                } transition-all duration-300 ease-in-out ${
                  item.name[language] === "Abonelik" || item.name[language] === "Subscription" ? "bg-[#cf6566] hover:bg-[#cf6566] dark:bg-blue-600 dark:hover:bg-blue-700" : ""
                }`}
              >
                {item.name[language]}
              </motion.span>
            ))}
            
            {/* Language Toggle */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleLanguage}
              className={`p-2 rounded-full ${
                scrolled
                  ? "text-[#cf6566] dark:text-white hover:bg-[#cf6566] dark:hover:bg-gray-700"
                  : "text-white hover:bg-white hover:bg-opacity-20 dark:hover:bg-gray-700"
              }`}
              aria-label={`Switch to ${language === 'en' ? 'Turkish' : 'English'}`}
            >
              <Globe className="w-5 h-5" />
            </motion.button>

            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className={`p-2 rounded-full ${
                scrolled
                  ? "text-[#cf6566] dark:text-white hover:bg-[#cf6566] dark:hover:bg-gray-700"
                  : "text-white hover:bg-white hover:bg-opacity-20 dark:hover:bg-gray-700"
              }`}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </motion.button>
          </div>

          {/* Hamburger Button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Language Toggle (Mobile) */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleLanguage}
              className={`p-2 rounded-full ${
                scrolled
                  ? "text-[#cf6566] dark:text-white hover:bg-[#cf6566] dark:hover:bg-gray-700"
                  : "text-white hover:bg-white hover:bg-opacity-20 dark:hover:bg-gray-700"
              }`}
              aria-label={`Switch to ${language === 'en' ? 'Turkish' : 'English'}`}
            >
              <Globe className="w-5 h-5" />
            </motion.button>

            {/* Theme Toggle (Mobile) */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className={`p-2 rounded-full ${
                scrolled
                  ? "text-[#cf6566] dark:text-white hover:bg-[#cf6566] dark:hover:bg-gray-700"
                  : "text-white hover:bg-white hover:bg-opacity-20 dark:hover:bg-gray-700"
              }`}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </motion.button>

            <motion.button
              className="text-3xl z-50"
              onClick={toggleMenu}
              aria-label="Toggle menu"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait" initial={false}>
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className={scrolled ? "text-[#cf6566] dark:text-white" : "text-white"} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className={scrolled ? "text-[#cf6566] dark:text-white" : "text-white"} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }}
            className={`fixed top-0 right-0 w-full h-full md:hidden ${
              scrolled ? "bg-white dark:bg-gray-800" : "bg-blue-600 dark:bg-gray-900"
            } shadow-lg flex flex-col justify-center items-center`}
          >
            {navItems.map((item, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => {
                  router.push(item.route);
                  toggleMenu();
                }}
                className={`cursor-pointer text-xl font-medium py-3 px-4 my-2 rounded-md w-4/5 text-center ${
                  scrolled
                    ? "text-[#cf6566] dark:text-white hover:bg-[#cf6566] dark:hover:bg-gray-700"
                    : "text-white hover:bg-white hover:bg-opacity-20 dark:hover:bg-gray-700"
                } transition-all duration-300 ease-in-out ${
                  item.name[language] === "Abonelik" || item.name[language] === "Subscription" ? "bg-[#cf6566] hover:bg-[#cf6566] dark:bg-blue-600 dark:hover:bg-blue-700" : ""
                }`}
              >
                {item.name[language]}
              </motion.span>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

