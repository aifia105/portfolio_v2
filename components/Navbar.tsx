"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";
import React, { useState } from "react";

const NavbarComponent = () => {
  const [isActive, setIsActive] = useState("Home");

  const handleToggle = (activeLink: string) => {
    setIsActive(activeLink);
  };
  return (
      <Navbar isBordered >
      <NavbarContent justify="start">
        <NavbarBrand className="mr-4">
          <img src="9496034.png" className="w-10 h-10" />
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive={isActive === "Home"}>
          <Link
            onClick={() => handleToggle("Home")}
            aria-current="page"
            color="foreground"
            href="#home"
          >
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive={isActive === "About"}>
          <Link
            onClick={() => handleToggle("About")}
            href="#about"
            color="foreground"
          >
            About
          </Link>
        </NavbarItem>
        <NavbarItem isActive={isActive === "Projects"}>
          <Link
            onClick={() => handleToggle("Projects")}
            color="foreground"
            href="#"
          >
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem isActive={isActive === "Experience"}>
          <Link
            onClick={() => handleToggle("Experience")}
            color="foreground"
            href="#"
          >
            Experience
          </Link>
        </NavbarItem>
        <NavbarItem isActive={isActive === "Contact"}>
          <Link
            onClick={() => handleToggle("Contact")}
            color="foreground"
            href="#contact"
          >
            Contact Me
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default NavbarComponent;
