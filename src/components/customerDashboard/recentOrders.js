import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  MoreHorizontal,
  ExternalLink,
  Filter,
  Download,
  ArrowUpRight,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const orders = [
  {
    id: "ORD-8291",
    date: "Oct 24, 2024",
    volume: "40L (2 Jars)",
    status: "In Transit",
    amount: "₹160.00",
  },
  {
    id: "ORD-8275",
    date: "Oct 20, 2024",
    volume: "20L (1 Jar)",
    status: "Delivered",
    amount: "₹80.00",
  },
  {
    id: "ORD-8262",
    date: "Oct 15, 2024",
    volume: "60L (3 Jars)",
    status: "Delivered",
    amount: "₹240.00",
  },
  {
    id: "ORD-8241",
    date: "Oct 10, 2024",
    volume: "20L (1 Jar)",
    status: "Delivered",
    amount: "₹80.00",
  },
];

const statusStyles = {
  Delivered: "bg-emerald-50 text-emerald-600 border-emerald-100",
  "In Transit": "bg-blue-50 text-blue-600 border-blue-100 animate-pulse",
  Pending: "bg-amber-50 text-amber-600 border-amber-100",
};

export default function RecentOrders() {
  return (
    <Card className="border-none shadow-2xl shadow-slate-200/50 rounded-[32px] overflow-hidden bg-white h-full">
      <CardHeader className="px-8 pt-8 pb-4 flex flex-row items-center justify-between">
        <div>
          <CardTitle className="text-2xl font-black text-slate-900 tracking-tight">
            Recent Orders
          </CardTitle>
          <p className="text-sm font-bold text-slate-400 mt-1">
            Detailed history of your hydration journey.
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            variant="ghost"
            size="sm"
            className="rounded-xl font-bold h-10 hover:bg-slate-50 text-primary"
          >
            View All Records
            <ArrowUpRight className="ml-2" size={16} />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <Table>
          <TableHeader className="bg-slate-50/50">
            <TableRow className="border-slate-100 hover:bg-transparent">
              <TableHead className="w-[120px] font-black uppercase text-[10px] tracking-widest px-8">
                Order ID
              </TableHead>
              <TableHead className="font-black uppercase text-[10px] tracking-widest">
                Date
              </TableHead>
              <TableHead className="font-black uppercase text-[10px] tracking-widest">
                Volume
              </TableHead>
              <TableHead className="font-black uppercase text-[10px] tracking-widest">
                Status
              </TableHead>
              <TableHead className="font-black uppercase text-[10px] tracking-widest">
                Amount
              </TableHead>
              <TableHead className="font-black uppercase text-[10px] tracking-widest text-right px-8">
                Action
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow
                key={order.id}
                className="border-slate-50 hover:bg-slate-50/30 transition-colors"
              >
                <TableCell className="font-black text-slate-900 px-8 text-xs">
                  {order.id}
                </TableCell>
                <TableCell className="font-bold text-slate-600 text-xs">
                  {order.date}
                </TableCell>
                <TableCell className="font-black text-slate-900 text-xs">
                  {order.volume}
                </TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className={
                      statusStyles[order.status] +
                      " font-bold rounded-lg border-none text-[10px]"
                    }
                  >
                    {order.status}
                  </Badge>
                </TableCell>
                <TableCell className="font-black text-slate-900 text-xs">
                  {order.amount}
                </TableCell>
                <TableCell className="text-right px-8">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 rounded-lg hover:bg-slate-100"
                  >
                    <Download size={16} className="text-slate-400" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="p-4 border-t border-slate-50 flex justify-center">
          <div className="flex gap-1">
            {[1, 2, 3].map((p) => (
              <button
                key={p}
                className={cn(
                  "w-8 h-8 rounded-lg text-xs font-black transition-all",
                  p === 1
                    ? "bg-primary text-white"
                    : "text-slate-400 hover:bg-slate-50",
                )}
              >
                {p}
              </button>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}
