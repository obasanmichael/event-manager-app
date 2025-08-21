"use client";
import {  Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    {
      name: "Events",
      href: "/events",
      
    },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <span
                className={`text-2xl font-bold ${
                  isScrolled ? "text-blue-600" : "text-white"
                }`}
              >
                Me-event
              </span>
            </a>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {navLinks.map((item) =>
                (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`text-sm font-medium hover:text-blue-500 transition-colors ${
                      isScrolled ? "text-gray-700" : "text-white"
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              )}
            </div>
            {/* Auth Buttons */}
            <div className="flex items-center space-x-4">
              <a
                href="/login"
                className={`text-sm font-medium hover:text-blue-500 transition-colors ${
                  isScrolled ? "text-gray-700" : "text-white"
                }`}
              >
                Log in
              </a>
              <Link
                href="/signup"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Sign up
              </Link>
            </div>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-md ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white mt-2 py-2 px-4 rounded-lg shadow-lg">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                  <Link
                      key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-blue-500 py-2 text-sm font-medium"
                >
                  {link.name}
                </Link>
              ))}
            
              <hr className="my-1" />
              <Link
                href="/login"
                className="text-gray-700 hover:text-blue-500 py-2 text-sm font-medium"
              >
                Log in
              </Link>
              <Link
                href="/signup"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium text-center"
              >
                Sign up
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
