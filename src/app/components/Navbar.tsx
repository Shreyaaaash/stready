"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";  // Imported without Menu
import { cn } from "./lib/cn";

export default function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        {/* Categories */}
        <MenuItem setActive={setActive} active={active} item="Categories">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/categories/development">Development</HoveredLink>
            <HoveredLink href="/categories/design">Design</HoveredLink>
            <HoveredLink href="/categories/marketing">Marketing</HoveredLink>
            <HoveredLink href="/categories/music">Music</HoveredLink>
            <HoveredLink href="/categories/photography">Photography</HoveredLink>
            <HoveredLink href="/categories/business">Business</HoveredLink>
            <HoveredLink href="/categories/all">Browse All</HoveredLink>
          </div>
        </MenuItem>

        {/* My Learning */}
        <MenuItem setActive={setActive} active={active} item="My Learning">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/learning/my-courses">My Courses</HoveredLink>
            <HoveredLink href="/learning/in-progress">In Progress</HoveredLink>
            <HoveredLink href="/learning/completed">Completed</HoveredLink>
            <HoveredLink href="/learning/certificates">Certificates</HoveredLink>
          </div>
        </MenuItem>

        {/* Teach */}
        <MenuItem setActive={setActive} active={active} item="Teach">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/teach/courses">My Created Courses</HoveredLink>
            <HoveredLink href="/teach/create">Create New Course</HoveredLink>
            <HoveredLink href="/teach/analytics">Course Analytics</HoveredLink>
          </div>
        </MenuItem>

        {/* Profile - Instead of dropdown, using simple menu */}
        <MenuItem setActive={setActive} active={active} item="Profile">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/profile/settings">Settings</HoveredLink>
            <HoveredLink href="/profile/notifications">Notifications</HoveredLink>
            <HoveredLink href="/profile/help">Help Center</HoveredLink>
        </div>
        
      </MenuItem>
      </Menu>
    </div>
    
  );
}
