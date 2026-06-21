import React from "react";
import { Search, Bell, ChevronDown, BadgeCheck } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function CustomerNavbar() {
  return (
    <nav className="h-16 border-b bg-white/80 backdrop-blur-md flex items-center justify-between px-8 sticky top-0 z-30 lg:ml-64">
      <div className="flex items-center gap-8 flex-1 max-w-xl">
        <div className="relative w-full group hidden md:block">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors"
            size={18}
          />
          <Input
            placeholder="Search orders, invoices, or help..."
            className="pl-10 h-10 bg-slate-50 border-none focus-visible:ring-2 focus-visible:ring-primary/20 rounded-xl font-medium w-full"
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="hidden sm:flex flex-col items-end">
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
              Plan:
            </span>
            <Badge
              variant="outline"
              className="bg-primary/5 text-primary border-primary/20 flex items-center gap-1 font-bold text-[10px] py-0 px-2 h-5"
            >
              Family Pro
            </Badge>
          </div>
          <div className="text-[10px] font-bold text-emerald-500 mt-0.5 flex items-center gap-1">
            <div className="w-1 h-1 bg-emerald-500 rounded-full animate-pulse" />
            Active Subscription
          </div>
        </div>

        <button className="relative p-2 text-slate-500 hover:bg-slate-50 rounded-xl transition-colors group">
          <Bell
            size={20}
            className="group-hover:rotate-12 transition-transform"
          />
          <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full border-2 border-white" />
        </button>

        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-3 hover:bg-slate-50 p-1 rounded-xl transition-all outline-none">
            <div className="relative">
              <Avatar className="h-9 w-9 border-2 border-primary/10">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback className="bg-primary text-white font-bold">
                  HS
                </AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5">
                <BadgeCheck size={14} className="text-primary fill-white" />
              </div>
            </div>
            <div className="hidden lg:flex flex-col text-left">
              <span className="text-sm font-black text-slate-900 leading-none">
                Hemant S.
              </span>
              <span className="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
                Premium Member
              </span>
            </div>
            <ChevronDown size={14} className="text-slate-400" />
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="w-56 rounded-xl shadow-xl border-slate-100"
          >
            <DropdownMenuLabel className="font-bold">
              My Account
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="font-medium cursor-pointer rounded-lg">
              Profile Settings
            </DropdownMenuItem>
            <DropdownMenuItem className="font-medium cursor-pointer rounded-lg">
              Subscription Billing
            </DropdownMenuItem>
            <DropdownMenuItem className="font-medium cursor-pointer rounded-lg">
              Order History
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="font-bold text-red-500 focus:text-red-500 cursor-pointer rounded-lg">
              Sign Out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}
