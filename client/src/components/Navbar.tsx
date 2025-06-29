"use client";
import { LogOut, Moon, Settings, Sun, UserRound } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "./ui/sidebar";
import { useAuth } from "@/app/context/AuthContext";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const { isAuthenticated, user, logout } = useAuth();
  return (
    <nav className="flex p-4 justify-between items-center">
      {/* Left */}
      <SidebarTrigger />

      {/* right */}
      <div className="flex items-center w-full  justify-end gap-4">
        <Link href="/">Dashboard</Link>

        {/* THEME MENU */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
            </DropdownMenuItem>

            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>

            <DropdownMenuItem onClick={() => setTheme("system")}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* USER MENU */}
        {!isAuthenticated ? (
          <Link href="/auth/signIn">
            <Button className="">Login</Button>
          </Link>
        ) : (
          <>
            <Link href="/create">
              <Button className="">Create</Button>
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>
                    {user?.name?.substring(0, 2).toUpperCase() || "UN"}
                  </AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent sideOffset={10} className="mr-2 w-50">
                <DropdownMenuLabel className="flex justify-center">
                  {user?.name || "My Account"}
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <UserRound className="text-blue-400 dark:text-amber-300" />
                  <Link href="">
                  Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="text-gray-800 dark:text-gray-500" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuItem
                  variant="destructive"
                  className="  dark: text-red-500"
                  onClick={logout}
                >
                  <LogOut />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
