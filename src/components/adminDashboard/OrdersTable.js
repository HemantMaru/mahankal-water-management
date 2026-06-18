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
import { MoreHorizontal, ExternalLink, Filter, Download } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const orders = [
  {
    id: "ORD-8291",
    customer: "Amit Sharma",
    address: "B-42 Tower, Freeganj",
    type: "Normal 20L",
    status: "Delivered",
    amount: "₹450.00",
    date: "2 mins ago",
  },
  {
    id: "ORD-8292",
    customer: "Priya Verma",
    address: "102 Skyline, Nanakheda",
    type: "Chilled 20L",
    status: "Out for Delivery",
    amount: "₹1,200.00",
    date: "15 mins ago",
  },
  {
    id: "ORD-8293",
    customer: "Karan Gupta",
    address: "Plot 4, Mahasweta Nagar",
    type: "Bulk Event",
    status: "Pending",
    amount: "₹300.00",
    date: "1 hour ago",
  },
  {
    id: "ORD-8294",
    customer: "Rajesh Kumar",
    address: "G-7 Shanti Palace",
    type: "Normal 20L",
    status: "Delivered",
    amount: "₹750.00",
    date: "2 hours ago",
  },
  {
    id: "ORD-8295",
    customer: "Sneha Jain",
    address: "A-12 Mahakal Van",
    type: "Chilled 20L",
    status: "Delivered",
    amount: "₹600.00",
    date: "4 hours ago",
  },
];

const statusStyles = {
  Delivered: "bg-emerald-50 text-emerald-600 border-emerald-100",
  "Out for Delivery": "bg-blue-50 text-blue-600 border-blue-100",
  Pending: "bg-amber-50 text-amber-600 border-amber-100",
};

export default function OrdersTable() {
  return (
    <Card className="border-none shadow-2xl shadow-slate-200/50 rounded-[32px] overflow-hidden bg-white">
      <CardHeader className="px-8 pt-8 pb-4 flex flex-row items-center justify-between">
        <div>
          <CardTitle className="text-2xl font-black text-slate-900 tracking-tight">
            Recent Orders
          </CardTitle>
          <p className="text-sm font-bold text-slate-400 mt-1">
            Monitor real-time delivery performance.
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            className="rounded-xl font-bold h-10 border-slate-200 hover:bg-slate-50"
          >
            <Filter className="mr-2" size={16} />
            Filter
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="rounded-xl font-bold h-10 border-slate-200 hover:bg-slate-50"
          >
            <Download className="mr-2" size={16} />
            Export
          </Button>
          <Button size="sm" className="rounded-xl font-black h-10 px-6">
            View All
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
                Customer
              </TableHead>
              <TableHead className="font-black uppercase text-[10px] tracking-widest">
                Type
              </TableHead>
              <TableHead className="font-black uppercase text-[10px] tracking-widest">
                Status
              </TableHead>
              <TableHead className="font-black uppercase text-[10px] tracking-widest">
                Amount
              </TableHead>
              <TableHead className="font-black uppercase text-[10px] tracking-widest text-right px-8">
                Actions
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
                <TableCell>
                  <div className="flex flex-col">
                    <span className="font-bold text-slate-900">
                      {order.customer}
                    </span>
                    <span className="text-[10px] font-bold text-slate-400 mt-0.5 truncate max-w-[200px]">
                      {order.address}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="font-bold text-slate-600 text-xs">
                  {order.type}
                </TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className={
                      statusStyles[order.status] +
                      " font-bold rounded-lg border-none"
                    }
                  >
                    {order.status}
                  </Badge>
                </TableCell>
                <TableCell className="font-black text-slate-900 text-xs">
                  {order.amount}
                </TableCell>
                <TableCell className="text-right px-8">
                  <div className="flex justify-end gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 rounded-lg hover:bg-slate-100"
                    >
                      <ExternalLink size={16} className="text-slate-400" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 rounded-lg hover:bg-slate-100"
                    >
                      <MoreHorizontal size={16} className="text-slate-400" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
