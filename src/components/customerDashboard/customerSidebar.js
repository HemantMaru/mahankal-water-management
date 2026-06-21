import React from "react";
import {
  LayoutDashboard,
  ShoppingBag,
  CalendarDays,
  MapPin,
  CreditCard,
  FileText,
  User,
  Headset,
  LogOut,
  Droplets,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: ShoppingBag, label: "My Orders" },
  { icon: CalendarDays, label: "Subscription" },
  { icon: MapPin, label: "Track Delivery" },
  { icon: CreditCard, label: "Payments" },
  { icon: FileText, label: "Invoices" },
  { icon: User, label: "Profile" },
];

export default function CustomerSidebar() {
  const SidebarContent = () => (
    <div className="flex flex-col h-full bg-white border-r">
      <div className="p-6">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
            <Droplets size={24} />
          </div>
          <div className="flex flex-col">
            <span className="font-black text-xl tracking-tighter text-slate-900 leading-none">
              Mahankal <span className="text-primary italic">RO</span>
            </span>
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-1">
              Premium Hydration
            </span>
          </div>
        </div>
      </div>

      <ScrollArea className="flex-1 px-4">
        <div className="space-y-1">
          {menuItems.map((item) => (
            <button
              key={item.label}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all duration-200 group",
                item.active
                  ? "bg-primary text-white shadow-lg shadow-primary/20"
                  : "text-slate-500 hover:bg-slate-50 hover:text-slate-900",
              )}
            >
              <item.icon
                size={20}
                className={cn(
                  "transition-transform group-hover:scale-110",
                  item.active
                    ? "text-white"
                    : "text-slate-400 group-hover:text-primary",
                )}
              />
              {item.label}
            </button>
          ))}
        </div>

        <div className="mt-8 pt-8 border-t border-slate-100">
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-all group">
            <Headset
              size={20}
              className="text-slate-400 group-hover:text-primary transition-transform group-hover:rotate-12"
            />
            Support
          </button>
        </div>
      </ScrollArea>

      <div className="p-4 mt-auto">
        <Button
          variant="ghost"
          className="w-full justify-start gap-3 text-red-500 hover:text-red-600 hover:bg-red-50 rounded-xl font-bold"
        >
          <LogOut size={20} />
          Logout
        </Button>
      </div>
    </div>
  );

  return (
    <>
      <aside className="hidden lg:flex w-64 h-screen fixed left-0 top-0 z-40">
        <SidebarContent />
      </aside>
    </>
  );
}
