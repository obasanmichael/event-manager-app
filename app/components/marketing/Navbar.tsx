"use client";
import useProfileStore from "@/app/stores/profile/store";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import UserMenu from "./UserMenu";
import { signOut } from "@/lib/auth";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { profile } = useProfileStore();
  const pathname = usePathname();
  const transparentPages = ["/", "/contact"];
  const isTransparentPage = transparentPages.includes(pathname);

  useEffect(() => {
    if (!isTransparentPage) return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isTransparentPage]);

  const navLinks = [
    { name: "Home", href: "/" },
    {
      name: "Events",
      href: "/events",
    },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const navbarClasses = isTransparentPage
    ? isScrolled
      ? "bg-white shadow-md py-3"
      : "bg-transparent py-5"
    : "bg-white shadow-md py-3";

  const linkClasses = (base: string) =>
    isTransparentPage && !isScrolled
      ? `${base} text-white`
      : `${base} text-gray-700 hover:text-blue-500`;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navbarClasses}`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span
                className={`text-2xl font-bold ${
                  isTransparentPage && !isScrolled
                    ? "text-white"
                    : "text-blue-600"
                }`}
              >
                Me-event
              </span>
            </Link>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={linkClasses(
                    "text-sm font-medium transition-colors"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            {/* Auth Buttons */}
            {profile ? (
              <UserMenu />
            ) : (
              <div className="flex items-center space-x-4">
                <a
                  href="/login"
                  className={linkClasses(
                    "text-sm font-medium transition-colors"
                  )}
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
            )}
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-md ${
                isTransparentPage && !isScrolled
                  ? "text-white"
                  : "text-gray-700"
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
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-700 hover:text-blue-500 py-2 text-sm text-center font-medium"
                >
                  {link.name}
                </Link>
              ))}

              <hr className="" />
              {profile ? (
                <button onClick={() => signOut()} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium text-center">Logout</button>
              ) : (
                <div className="flex flex-col space-y-2">
                  <Link
                    href="/login"
                    className="text-gray-700 hover:text-blue-500 py-2 text-center text-sm font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Log in
                  </Link>
                  <Link
                    href="/signup"
                    onClick={() => setMobileMenuOpen(false)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium text-center"
                  >
                    Sign up
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
