"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavbarComponent = () => {
  const pathname = usePathname();

  return (
    <Navbar isBordered className="fixed w-full mx-auto z-20">
      <NavbarContent>
        <NavbarBrand>
          <img
            src="/logo.png"
            alt="Logo"
            className="flex items-start justify-start w-12 h-12"
          />
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive={pathname === "/"}>
          <NextLink href="/" passHref legacyBehavior>
            <Link
              color="foreground"
              className={`hover:text-blue-600 cursor-pointer text-lg ${
                pathname === "/" ? "text-blue-600" : ""
              }`}
            >
              Home
            </Link>
          </NextLink>
        </NavbarItem>
        <NavbarItem isActive={pathname === "/about"}>
          <NextLink href="/about" passHref legacyBehavior>
            <Link
              color="foreground"
              className={`hover:text-blue-600 cursor-pointer text-lg ${
                pathname === "/about" ? "text-blue-600" : ""
              }`}
            >
              About
            </Link>
          </NextLink>
        </NavbarItem>
        <NavbarItem isActive={pathname === "/projects"}>
          <NextLink href="/projects" passHref legacyBehavior>
            <Link
              color="foreground"
              className={`hover:text-blue-600 cursor-pointer text-lg ${
                pathname === "/projects" ? "text-blue-600" : ""
              }`}
            >
              Projects
            </Link>
          </NextLink>
        </NavbarItem>
        <NavbarItem isActive={pathname === "/contact"}>
          <NextLink href="/contact" passHref legacyBehavior>
            <Link
              color="foreground"
              className={`hover:text-blue-600 cursor-pointer text-lg ${
                pathname === "/contact" ? "text-blue-600" : ""
              }`}
            >
              Contact Me
            </Link>
          </NextLink>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default NavbarComponent;
