import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
// import {AcmeLogo} from "./AcmeLogo.jsx";
import { GithubIcon } from "@/components/icons";
import { siteConfig } from "@/config/site";

import { Logo } from "@/components/icons";

export const Navbarr = () => {
  return (
    <Navbar className="light text-black">
      <NavbarBrand>
        <Logo style={{ width: "50px", height: "50px" }} />

        <p className="font-bold text-inherit">PET FACIAL</p>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Algorithm</Link>
        </NavbarItem>
        <NavbarItem>
          <Link isExternal href={siteConfig.links.github} aria-label="Github">
            <GithubIcon className="text-default-500" />
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};
