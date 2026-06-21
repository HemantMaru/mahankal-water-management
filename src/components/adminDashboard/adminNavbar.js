"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Search,
  Bell,
  Menu,
  Droplets,
  LayoutDashboard,
  Users,
  Truck,
  FileText,
  IndianRupee,
  PartyPopper,
  BarChart3,
  Settings,
  LogOut,
  X,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

// Sidebar Links for Mobile
const navigation = [
  { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { name: "Customers", href: "/admin/customers", icon: Users },
  { name: "Today's Delivery", href: "/admin/deliveries", icon: Truck },
  { name: "Monthly Billing", href: "/admin/billing", icon: FileText },
  { name: "Payments", href: "/admin/payments", icon: IndianRupee },
  { name: "Event Orders", href: "/admin/events", icon: PartyPopper },
  { name: "Reports", href: "/admin/reports", icon: BarChart3 },
  { name: "Settings", href: "/admin/settings", icon: Settings },
];

export default function AdminNavbar() {
  const pathname = usePathname();
  const [isSearchOpen, setIsSearchOpen] = useState(false); // Mobile search state

  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-slate-200 bg-white px-4 md:px-6 shadow-sm">
      {/* MOBILE SEARCH OVERLAY */}
      {isSearchOpen ? (
        <div className="flex w-full items-center gap-2 md:hidden animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="relative w-full">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
            <Input
              type="search"
              placeholder="Search customers, orders..."
              className="w-full bg-slate-50 border-slate-200 pl-9 focus-visible:ring-blue-500 rounded-lg"
              autoFocus
            />
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsSearchOpen(false)}
            className="text-slate-500 hover:bg-slate-100 shrink-0"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>
      ) : (
        <>
          {/* MOBILE LEFT: Hamburger Menu (Sheet) & Brand Name */}
          <div className="flex items-center gap-3 md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-slate-600 hover:bg-slate-100 -ml-2 shrink-0"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="w-72 p-0 flex flex-col bg-white"
              >
                <SheetHeader className="p-6 border-b border-slate-100 text-left">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-600 p-2 rounded-lg">
                      <Droplets className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <SheetTitle className="font-bold text-sm leading-tight text-slate-900">
                        Mahankal
                      </SheetTitle>
                      <p className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">
                        RO + UV Chilled
                      </p>
                    </div>
                  </div>
                </SheetHeader>

                <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
                  {navigation.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <Link key={item.name} href={item.href}>
                        <div
                          className={`flex items-center gap-3 px-3 py-3 rounded-md text-sm font-medium transition-colors ${
                            isActive
                              ? "bg-blue-50 text-blue-700"
                              : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                          }`}
                        >
                          <item.icon
                            className={`h-5 w-5 ${isActive ? "text-blue-600" : "text-slate-400"}`}
                          />
                          {item.name}
                        </div>
                      </Link>
                    );
                  })}
                </nav>

                <div className="p-4 border-t border-slate-100">
                  <button className="flex w-full items-center gap-3 px-3 py-3 rounded-md text-sm font-medium text-red-600 hover:bg-red-50 transition-colors">
                    <LogOut className="h-5 w-5" />
                    Logout
                  </button>
                </div>
              </SheetContent>
            </Sheet>

            <div className="flex items-center gap-2 truncate">
              <div className="bg-blue-600 p-1.5 rounded-md hidden sm:block shrink-0">
                <Droplets className="h-4 w-4 text-white" />
              </div>
              <span className="font-bold text-sm text-slate-900 truncate">
                Mahankal RO
              </span>
            </div>
          </div>

          {/* DESKTOP LEFT: Search Bar */}
          <div className="hidden md:flex items-center gap-4 flex-1">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
              <Input
                type="search"
                placeholder="Search customers, orders..."
                className="w-full bg-slate-50 border-slate-200 pl-9 focus-visible:ring-blue-500 rounded-lg"
              />
            </div>
          </div>

          {/* RIGHT SIDE: Notifications & Profile */}
          <div className="flex items-center gap-2 md:gap-4 ml-auto shrink-0">
            {/* Mobile Search Icon Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSearchOpen(true)}
              className="md:hidden text-slate-500 hover:bg-slate-100"
            >
              <Search className="h-5 w-5" />
            </Button>

            <div className="hidden lg:block text-sm font-medium text-slate-500 mr-2">
              {currentDate}
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="relative text-slate-500 hover:bg-slate-100 rounded-full"
            >
              <Bell className="h-5 w-5" />
              <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-blue-600 border-2 border-white"></span>
            </Button>

            <div className="h-8 w-px bg-slate-200 hidden md:block mx-1"></div>

            <div className="flex items-center gap-3 cursor-pointer pl-1">
              <div className="hidden md:block text-right">
                <p className="text-sm font-medium text-slate-900 leading-none">
                  Hemant Maru
                </p>
                <p className="text-xs text-slate-500 mt-1">Owner</p>
              </div>
              <Avatar className="h-9 w-9 border border-slate-200">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback className="bg-blue-100 text-blue-700 font-bold">
                  HM
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
