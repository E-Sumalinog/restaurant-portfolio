"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full flex justify-between items-center px-8 py-5 bg-black text-white fixed top-0 z-50">
      {/* Logo / Brand */}
      <h1 className="text-2xl font-bold tracking-wide">Savory</h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 text-sm uppercase">
        <li><a href="#home" className="hover:text-orange-400">Home</a></li>
        <li><a href="#menu" className="hover:text-orange-400">Menu</a></li>
        <li><a href="#about" className="hover:text-orange-400">About</a></li>
        <li><a href="#reservation" className="hover:text-orange-400">Reservation</a></li>
        <li><a href="#contact" className="hover:text-orange-400">Contact</a></li>
        <li><a href="/admin" className="hover:text-orange-400 font-semibold">Admin</a></li>
      </ul>

      {/* Hamburger Icon for Mobile */}
      <div
        className="md:hidden flex flex-col gap-1 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="w-6 h-0.5 bg-white"></span>
        <span className="w-6 h-0.5 bg-white"></span>
        <span className="w-6 h-0.5 bg-white"></span>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="absolute top-full left-0 w-full bg-black flex flex-col gap-4 px-8 py-4 md:hidden">
          <li>
            <a
              href="#home"
              className="hover:text-orange-400"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#menu"
              className="hover:text-orange-400"
              onClick={() => setIsOpen(false)}
            >
              Menu
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-orange-400"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#reservation"
              className="hover:text-orange-400"
              onClick={() => setIsOpen(false)}
            >
              Reservation
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-orange-400"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </li>
          <li>
            <a
                href="/admin"
                className="hover:text-orange-400"
                onClick={() => setIsOpen(false)}
            >
                Admin
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}