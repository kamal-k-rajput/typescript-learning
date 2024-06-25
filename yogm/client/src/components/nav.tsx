"use client";
import "../app/globals.css";
import { EMAIL_ADDRESS, LOGO_URL, MOBILE_NUMBER } from "./constants/Constants";
import { NavbarTailwind } from "./navbar/Navbar";

export function MainNavbar() {
  return (
    <div>
      <NavbarTailwind />
    </div>
  );
}
