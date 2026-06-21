"use client";
import { Plus, User, Truck, IndianRupee, CalendarPlus } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export default function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            size="icon"
            className="h-14 w-14 rounded-full shadow-xl bg-blue-600 hover:bg-blue-700 hover:scale-105 transition-all duration-300 animate-in slide-in-from-bottom-8"
          >
            <Plus className="h-6 w-6 text-white" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="w-48 pb-2 mb-2 shadow-xl border-slate-200 rounded-xl"
        >
          <DropdownMenuItem className="cursor-pointer py-2.5 font-medium text-slate-700">
            <User className="mr-2 h-4 w-4 text-blue-600" /> Add Customer
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer py-2.5 font-medium text-slate-700">
            <Truck className="mr-2 h-4 w-4 text-cyan-600" /> Add Delivery
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer py-2.5 font-medium text-slate-700">
            <IndianRupee className="mr-2 h-4 w-4 text-emerald-600" /> Add
            Payment
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer py-2.5 font-medium text-slate-700">
            <CalendarPlus className="mr-2 h-4 w-4 text-amber-600" /> Event Order
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
