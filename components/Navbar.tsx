"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";
import NextLink from "next/link"; // Import Next.js Link
import { usePathname } from "next/navigation";
import React from "react";

const NavbarComponent = () => {
  const pathname = usePathname();

  return (
    <Navbar isBordered>
      <NavbarContent justify="start">
        <NavbarBrand className="">
          <img src="/9496034.png" alt="Logo" className="w-10 h-10" />
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive={pathname === "/"}>
          <NextLink href="/" passHref legacyBehavior>
            <Link
              color="foreground"
              className="hover:text-blue-600 cursor-pointer"
            >
              Home
            </Link>
          </NextLink>
        </NavbarItem>
        <NavbarItem isActive={pathname === "/about"}>
          <NextLink href="/about" passHref legacyBehavior>
            <Link
              color="foreground"
              className="hover:text-blue-600 cursor-pointer"
            >
              About
            </Link>
          </NextLink>
        </NavbarItem>
        <NavbarItem isActive={pathname === "/projects"}>
          <NextLink href="/projects" passHref legacyBehavior>
            <Link
              color="foreground"
              className="hover:text-blue-600 cursor-pointer"
            >
              Projects
            </Link>
          </NextLink>
        </NavbarItem>
        <NavbarItem isActive={pathname === "/contact"}>
          <NextLink href="/contact" passHref legacyBehavior>
            <Link
              color="foreground"
              className="hover:text-blue-600 cursor-pointer"
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
