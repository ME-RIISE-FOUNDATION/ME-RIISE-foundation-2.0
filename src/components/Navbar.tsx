import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Home, Users, Briefcase, FileText, CalendarDays, LayoutGrid, ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { useIsMobile } from "../hooks/use-mobile";

import { Button } from "@/components/ui/button";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const aboutUs = [
  {
    title: "ME-RIISE Foundation",
    href: "/aboutus",
    description:
      "ME-RIISE FOUNDATION promoted by Malnad College of Engineering in September, 2022.",
  },
  {
    title: "Infrastructure",
    href: "/infrastructure",
    description:
      "Our state-of-the-art infrastructure is designed to support innovation.",
  },
  {
    title: "Achievements",
    href: "/achievements",
    description: "A showcase of ME-RIISE achievements and recognitions.",
  },
  {
    title: "Documents",
    href: "/documents",
    description: "A repository of certificates and official documents.",
  },
  {
    title: "Members of ME-RIISE",
    href: "/faculty",
    description: "Meet the members contributing to ME-RIISE.",
  },
  {
    title: "Team ME-RIISE",
    href: "/team",
    description: "Know the team working behind ME-RIISE initiatives.",
  },
];

const Wingsofmeriise = [
  { title: "Startups", href: "/startups", description: "Incubated startups." },
  { title: "MoE-IIC", href: "/moe-iic", description: "Institutional innovation cell." },
  { title: "NAIN", href: "/nain", description: "New Age Incubation Network." },
  { title: "UBA", href: "/uba", description: "Unnat Bharat Abhiyan initiatives." },
  { title: "RGEP", href: "/rgep", description: "Rajiv Gandhi Entrepreneurship Program" }
];

// Data array for the Pragyatha dropdown
const pragyathaEvents = [
  {
    title: "Pragyatha '25",
    href: "/pragyatha/2025",
    description: "See what's planned for the upcoming Pragyatha event."
  },
  {
    title: "Pragyatha '24",
    href: "/pragyatha/2024",
    description: "View the highlights and gallery from Pragyatha 2024."
  },
  {
    title: "Pragyatha '23",
    href: "/pragyatha/2023",
    description: "Explore the archives from Pragyatha 2023."
  },
];

// 1. ADDED: Data array for the new Documents dropdown
const TBI = [
  {
    title: "About TBI",
    href: "/documents/nisp-policy",
    description: "Technology Business Incubator",
  },
  {
    title: "Open Positions",
    href: "/TBI/open-positions",
    description: "Check out the available open positions @TBI",
  },
];


function NavSection({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2 px-4 pt-5 pb-1">
      <span className="text-muted-foreground">{icon}</span>
      <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
        {label}
      </span>
    </div>
  );
}

function NavLink({
  to,
  children,
  active,
}: {
  to: string;
  children: React.ReactNode;
  active: boolean;
}) {
  return (
    <SheetClose asChild>
      <Link
        to={to}
        className={cn(
          "flex items-center justify-between px-4 py-2 mx-2 rounded-md text-sm transition-colors",
          active
            ? "bg-blue-50 text-blue-700 font-medium"
            : "text-foreground/80 hover:bg-accent hover:text-accent-foreground"
        )}
      >
        <span>{children}</span>
        {active && <ChevronRight className="h-3.5 w-3.5 shrink-0 text-blue-500" />}
      </Link>
    </SheetClose>
  );
}

export function MobileDrawer() {
  const { pathname } = useLocation();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="h-9 w-9">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>

      <SheetContent side="left" className="flex flex-col w-[280px] p-0 gap-0">

        {/* Logo header */}
        <SheetHeader className="px-4 py-4 border-b shrink-0">
          <SheetTitle asChild>
            <SheetClose asChild>
              <Link to="/" className="flex items-center">
                <img
                  src="logos/MERIISEmain.png"
                  alt="ME-RIISE"
                  className="h-8 w-auto object-contain"
                />
              </Link>
            </SheetClose>
          </SheetTitle>
          <SheetDescription className="sr-only">Site navigation</SheetDescription>
        </SheetHeader>

        {/* Scrollable nav body */}
        <div className="flex-1 overflow-y-auto pb-6">

          {/* Home */}
          <div className="pt-3">
            <SheetClose asChild>
              <Link
                to="/"
                className={cn(
                  "flex items-center gap-3 px-4 py-2.5 mx-2 rounded-md text-sm font-medium transition-colors",
                  pathname === "/"
                    ? "bg-blue-50 text-blue-700"
                    : "hover:bg-accent"
                )}
              >
                <Home className="h-4 w-4 shrink-0" />
                Home
              </Link>
            </SheetClose>
          </div>

          {/* About ME-RIISE */}
          <NavSection icon={<Users className="h-3.5 w-3.5" />} label="About ME-RIISE" />
          {aboutUs.map((item) => (
            <NavLink key={item.href} to={item.href} active={pathname === item.href}>
              {item.title}
            </NavLink>
          ))}

          {/* Wings */}
          <NavSection icon={<Briefcase className="h-3.5 w-3.5" />} label="Wings of ME-RIISE" />
          {Wingsofmeriise.map((item) => (
            <NavLink key={item.href} to={item.href} active={pathname === item.href}>
              {item.title}
            </NavLink>
          ))}

          {/* Pragyatha */}
          <NavSection icon={<CalendarDays className="h-3.5 w-3.5" />} label="Pragyatha" />
          <NavLink to="/pragyatha" active={pathname === "/pragyatha"}>
            Overview
          </NavLink>
          {pragyathaEvents.map((event) => (
            <NavLink key={event.href} to={event.href} active={pathname === event.href}>
              {event.title}
            </NavLink>
          ))}

          {/* TBI */}
          <NavSection icon={<FileText className="h-3.5 w-3.5" />} label="TBI" />
          {TBI.map((item) => (
            <NavLink key={item.href} to={item.href} active={pathname === item.href}>
              {item.title}
            </NavLink>
          ))}

          {/* Events — standalone link at the bottom */}
          <div className="mt-4 mx-2 border-t pt-4">
            <SheetClose asChild>
              <Link
                to="/events"
                className={cn(
                  "flex items-center gap-3 px-4 py-2.5 rounded-md text-sm font-medium transition-colors",
                  pathname === "/events"
                    ? "bg-blue-50 text-blue-700"
                    : "hover:bg-accent"
                )}
              >
                <LayoutGrid className="h-4 w-4 shrink-0" />
                Events
              </Link>
            </SheetClose>
          </div>

        </div>
      </SheetContent>
    </Sheet>
  );
}


export function NavigationMenuDemo() {
  const isMobile = useIsMobile();

  return (
    <div className="w-full flex items-center justify-between px-4 md:px-10 py-4 bg-white sticky top-0 z-50">

      {/* LEFT: COLLEGE LOGO */}
      <Link to="/" className="flex items-center gap-2 transition-transform hover:scale-105">
        <img
          src="logos/MERIISEmain.png"
          alt="MCE Logo"
          className="h-10 md:h-12 w-auto object-contain"
        />
      </Link>

      {/* CENTER: NAVIGATION MENU */}
      <NavigationMenu viewport={isMobile} className="hidden md:flex">
        <NavigationMenuList>

          {/* HOME */}
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link to="/" className={navigationMenuTriggerStyle()}>
                Home
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          {/* ABOUT US */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>About ME-RIISE </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[550px] gap-3 p-4 grid-cols-2">
                {aboutUs.map((item) => (
                  <ListItem key={item.title} title={item.title} href={item.href}>
                    {item.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* WINGS */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>Wings of ME-RIISE</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[550px] gap-3 p-4 grid-cols-2">
                {Wingsofmeriise.map((item) => (
                  <ListItem key={item.title} title={item.title} href={item.href}>
                    {item.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* PRAGYATHA */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>Pragyatha</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <Link
                      className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-gradient-to-b p-4 no-underline outline-none transition-all duration-200 md:p-6"
                      to="/pragyatha"
                    >
                      <div className="mb-2 text-lg font-medium">Pragyatha</div>
                      <p className="text-muted-foreground text-sm leading-tight">
                        Explore event archives & highlights.
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>

                {pragyathaEvents.map((event) => (
                  <ListItem key={event.title} title={event.title} href={event.href}>
                    {event.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* TBI */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>TBI</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[300px] gap-3 p-4 md:w-[400px]">
                {TBI.map((item) => (
                  <ListItem key={item.title} title={item.title} href={item.href}>
                    {item.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* EVENTS */}
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link to="/events" className={navigationMenuTriggerStyle()}>
                Events
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

        </NavigationMenuList>
      </NavigationMenu>

      {/* MOBILE DRAWER (RIGHT) */}
      <div className="md:hidden ml-auto">
        <MobileDrawer />
      </div>

      {/* RIGHT: ME-RIISE LOGO (HIDDEN ON MOBILE) */}
      <Link to="/" className="hidden md:flex items-center gap-2 transition-transform hover:scale-105">
        <img
          src="logos/malnad_college_of_engineering_logo (1).jpg"
          alt="ME-RIISE Logo"
          className="h-10 md:h-12 w-auto object-contain"
        />
      </Link>

    </div>
  );
}

/* ----------------------------------------------------------
   FIXED LIST ITEM – works with React Router <Link> internally
------------------------------------------------------------*/
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { title: string; href: string }
>(({ className, title, children, href, ...props }, ref) => {
  const isInternal = href.startsWith("/");

  return (
    <li>
      <NavigationMenuLink asChild>
        {isInternal ? (
          <Link
            to={href}
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </Link>
        ) : (
          <a
            href={href}
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        )}
      </NavigationMenuLink>
    </li>
  );
});

ListItem.displayName = "ListItem";

export default NavigationMenuDemo;