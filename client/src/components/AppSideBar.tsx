"use client";
import {
  ChevronUp,
  Home,
  Inbox,
  Plus,
  PlusCircle,
  Projector,
  Search,
  Settings,
  User,
  User2,
} from "lucide-react";
import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "./ui/sidebar";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import Image from "next/image";
import { Collapsible, CollapsibleTrigger } from "./ui/collapsible";
import { useAuth } from "@/app/context/AuthContext";
import { Button } from "./ui/button";

// Menu items.
const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

const AppSideBar = () => {
  const { isAuthenticated, user, logout } = useAuth();

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="h-15 ">
        <SidebarMenu className="">
          <SidebarMenuItem className="">
            <SidebarMenuButton asChild className="h-10 mt-2 py-7">
              <Link href="/">
                <Image
                  src="/B.png"
                  width={30}
                  height={30}
                  alt="logo"
                  className="rounded-3xl "
                />
                <span className=" text-2xl">BLOGEEZI</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarSeparator className="" />
      <SidebarContent className="mt-3">
        <SidebarGroup>
          <SidebarGroupLabel>Applications</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon className="size-5" />
                      <span className="ml-2">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                  {item.title === "Inbox" && (
                    <SidebarMenuBadge>5</SidebarMenuBadge>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        {/* <SidebarGroup />
        <SidebarGroup /> */}

        {/* only authenticated users */}
        {isAuthenticated ? (
          <Collapsible>
            <SidebarGroup>
              <SidebarGroupLabel>
                <CollapsibleTrigger>
                  Add Blogs
                  {/* <PlusCircle className="size-5" /> */}
                </CollapsibleTrigger>
              </SidebarGroupLabel>
              <SidebarGroupAction>
                <PlusCircle className="size-5" />
              </SidebarGroupAction>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link href="/seeBlog">
                        <Projector />
                        See all blogs
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link href="/create">
                        <Plus />
                        Add Blogs
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </Collapsible>
        ) : (
          <SidebarGroup>
            <SidebarGroupLabel>Blog Management</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link href="/seeBlog">
                      <Projector />
                      <span className="ml-2">See all Blogs</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link href="/auth/signIn">
                      <Plus />
                      <span className="ml-2">Login to create blogs</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        )}
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger
                  asChild
                  className="text-2xl p-7 rounded-2xl"
                >
                  <SidebarMenuButton>
                    <User2 className="size-5" />
                    {user?.name || "User"}
                    <ChevronUp className="ml-auto" />
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-40">
                  <DropdownMenuItem>Account</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuItem variant="destructive" onClick={logout}>
                    Log Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <SidebarMenuButton asChild>
                <Link href="/auth/signIn" className="flex items-center">
                  <User2 className="size-5" />
                  <span className="ml-2">Login</span>
                </Link>
              </SidebarMenuButton>
            )}
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSideBar;
