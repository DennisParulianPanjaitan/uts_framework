"use client"
import { Home, Users, BarChart, Settings } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { DashboardIcon } from "./icons/dashboard-icon"
import { ChecklockLogo } from "./icons/checklock-icon"
import { EmploymentLogo } from "./icons/employment-icon"
import { HrisLogo } from "./icons/hris-logo" // 👉 import logo HRIS kamu

// Menu items
const items = [
  {
    title: "Dashboard",
    url: "/",
    icon: DashboardIcon,
    isActive: true,
  },
  {
    title: "Employees",
    url: "/employees",
    icon: ChecklockLogo,
    isActive: true,
  },
  {
    title: "Reports",
    url: "/reports",
    icon: EmploymentLogo,
    isActive: true,
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center gap-2 px-4 py-2">
          {/* Ganti kotak HR jadi HrisLogo */}
          <div className="flex h-8 w-8 items-center justify-center rounded-md">
            <HrisLogo className="h-6 w-6" /> {/* Sesuaikan ukuran kalau perlu */}
          </div>
          <div className="font-semibold">HR Dashboard</div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={item.isActive} tooltip={item.title}>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
