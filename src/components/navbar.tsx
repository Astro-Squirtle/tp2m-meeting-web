"use client";
import React from "react";
import { usePathname } from "next/navigation";
import {
  Navbar as MTNavbar,
  Collapse,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import {
  HomeIcon,
  CalendarDaysIcon,
  UserGroupIcon,
  MapPinIcon,
  XMarkIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";

// --- NavItem component ---
function NavItem({ children, href, isWhiteText }: { children: React.ReactNode; href?: string; isWhiteText: boolean }) {
  return (
    <li>
      {/* @ts-ignore */}
      <Typography
        as="a"
        href={href || "#"}
        className={`flex items-center gap-2 font-medium transition-colors ${
          isWhiteText ? "text-white hover:text-blue-200" : "text-blue-gray-900 hover:text-blue-600"
        }`}
      >
        {children}
      </Typography>
    </li>
  );
}

const NAV_MENU = [
  { name: "Home", icon: HomeIcon, href: "/" },          
  { name: "Program", icon: CalendarDaysIcon, href: "/program" },
  { name: "Speaker", icon: UserGroupIcon, href: "/speaker" },   
  { name: "Venue", icon: MapPinIcon, href: "/venue" },        
];

export function Navbar() {
  const pathname = usePathname(); 
  const isHomePage = pathname === "/"; 
  
  const [open, setOpen] = React.useState(false);
  const [isScrolling, setIsScrolling] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setIsScrolling(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navBgClass = (isHomePage && !isScrolling) ? "bg-transparent" : "bg-white";
  const isWhiteText = isHomePage && !isScrolling;
  const textColor = isWhiteText ? "white" : "blue-gray";
  const isBlackBtn = !isWhiteText; 

  return (
    /* @ts-ignore */
    <MTNavbar
      fullWidth
      blurred={false}
      color="transparent"
      className={`fixed top-0 z-50 border-0 transition-all duration-300 ${navBgClass}`}>
      <div className="w-full mx-auto flex items-center justify-between">
        {/* Project Name */}
        {/* @ts-ignore */}
        <Typography
          as="a"
          href="/"
          color={textColor}
          className="text-lg font-bold tracking-tight"
        >
          Trans-Pacific Two-Meter Telescope
        </Typography>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 lg:flex">
          <ul className="flex items-center gap-6">
            {NAV_MENU.map(({ name, icon: Icon, href }) => (
              <NavItem key={name} href={href} isWhiteText={isWhiteText}>
                <Icon className="h-4 w-4" />
                <span>{name}</span>
              </NavItem>
            ))}
          </ul>
          
          {/* Registration */}
          {/* @ts-ignore */}
          <Button 
            variant="filled" 
            size="sm"
            color={isBlackBtn ? "gray" : "white"} 
            className={`font-bold transition-all ${
              isBlackBtn 
                ? "bg-black text-white hover:bg-gray-900" 
                : "bg-white text-black hover:bg-gray-100"
            }`}
            onClick={() => window.open('你的註冊連結', '_blank')}
          >
            Registration
          </Button>
        </div>

        {/* Mobile Toggle */}
        {/* @ts-ignore */}
        <IconButton
          variant="text"
          color={isWhiteText ? "white" : "gray"}
          onClick={() => setOpen(!open)}
          className="ml-auto inline-block lg:hidden"
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>

      {/* Mobile Collapse */}
      <Collapse open={open}>
        <div className="container mx-auto mt-4 rounded-xl bg-white px-6 py-6">
          <ul className="flex flex-col gap-4 text-gray-900">
            {NAV_MENU.map(({ name, icon: Icon, href }) => (
              <NavItem key={name} href={href} isWhiteText={false}>
                <Icon className="h-5 w-5 text-blue-500" />
                {name}
              </NavItem>
            ))}
          </ul>
          {/* @ts-ignore */}
          <Button 
            fullWidth 
            variant="gradient" 
            color="blue" 
            className="mt-6"
            onClick={() => window.open('你的註冊連結', '_blank')}
          >
            Register Now
          </Button>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;