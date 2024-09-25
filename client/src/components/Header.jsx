import React from "react";
import { Button, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";

// Updated fonts: Playfair Display for titles, Poppins for body
const Header = () => {
  const path = useLocation().pathname;

  return (
    <Navbar className="border-b-2">
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
        style={{ fontFamily: 'Playfair Display, serif' }} // Elegant Serif font for branding
      >
        <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
          Debugged
        </span>
        World
      </Link>
      
      {/* Search form */}
      <form className="relative hidden lg:inline-block">
        <TextInput
          type="text"
          placeholder="Search..."
          className="pr-10"
        />
        {/* Adjust Icon Size */}
        <button type="submit" className="absolute top-0 right-0 mt-2 mr-3">
          <AiOutlineSearch className="w-5 h-5 text-gray-500" /> {/* Icon size adjusted */}
        </button>
      </form>

      {/* Mobile search icon */}
      <Button size="sm" color="gray" className="lg:hidden" pill>
        <AiOutlineSearch className="w-5 h-5" /> {/* Icon size adjusted */}
      </Button>

      <div className="flex gap-2 md:order-2">
        {/* Dark mode button with size adjustment */}
        <Button size="sm" color="gray" pill>
          <FaMoon className="w-5 h-5" /> {/* Icon size adjusted */}
        </Button>

        {/* Sign In button */}
        <Link to="/sign-in">
          <Button gradientDuoTone="purpleToBlue" style={{ fontFamily: 'Poppins, sans-serif' }}> {/* Font added */}
            Sign In
          </Button>
        </Link>

        {/* Navbar Toggle for mobile */}
        <Navbar.Toggle />
      </div>

      {/* Navbar Collapse */}
      <Navbar.Collapse>
        <Navbar.Link href="/" active={path === "/"} style={{ fontFamily: 'Poppins, sans-serif' }}>
          Home
        </Navbar.Link>

        <Navbar.Link href="/about" active={path === "/about"} style={{ fontFamily: 'Poppins, sans-serif' }}>
          About
        </Navbar.Link>

        <Navbar.Link href="/projects" active={path === "/projects"} style={{ fontFamily: 'Poppins, sans-serif' }}>
          Projects
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
