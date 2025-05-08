"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { getUserFromToken } from "@/utils/getUserFromToken";
const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [user, setUser] = useState(null);
  useEffect(() => {
    const storedUser = getUserFromToken()
    // if (storedUser) {
    //   setUser(JSON.parse(storedUser));
    // }
    setUser(storedUser)
  }, []);
  console.log(user);
  const toggleNav = () => setNavOpen(!navOpen);
  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-blue-600">
          TrendSphere
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
          {user ? (
        <div className="flex items-center gap-2">
          <p>Welcome, {user.email}</p>
          <button
            onClick={() => {
              localStorage.removeItem("token");
              setUser(null);
            }}
          >
            Logout
          </button>
        </div>
      ) : (
        <Link href="/login">Login</Link>
      )}
          </li>
        </ul>

        {/* Hamburger Icon */}
        <div className="md:hidden text-2xl cursor-pointer" onClick={toggleNav}>
          {navOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {navOpen && (
        <ul className="md:hidden bg-white w-full px-4 py-6 space-y-4 text-gray-700 font-medium">
          <li>
            <Link href="/" onClick={toggleNav}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" onClick={toggleNav}>
              About
            </Link>
          </li>
          <li>
            <Link href="/services" onClick={toggleNav}>
              Services
            </Link>
          </li>
          <li>
            <Link href="/contact" onClick={toggleNav}>
              Contact
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
