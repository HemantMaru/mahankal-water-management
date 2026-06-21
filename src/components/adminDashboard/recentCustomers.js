import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MoreHorizontal, Edit, Trash2, Eye } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const recentCustomers = [
  {
    id: "C-089",
    name: "Vikram Rathore",
    mobile: "+91 98765 43210",
    address: "Scheme No 54",
    rate: "₹30",
    pending: "₹450",
    status: "Active",
  },
  {
    id: "C-090",
    name: "Sneha Desai",
    mobile: "+91 87654 32109",
    address: "Sudama Nagar",
    rate: "₹30",
    pending: "₹0",
    status: "Active",
  },
  {
    id: "C-091",
    name: "Ankit Jain",
    mobile: "+91 76543 21098",
    address: "Rajwada",
    rate: "₹25",
    pending: "₹1,200",
    status: "Defaulter",
  },
  {
    id: "C-092",
    name: "Pooja Mishra",
    mobile: "+91 65432 10987",
    address: "Annapurna Road",
    rate: "₹30",
    pending: "₹150",
    status: "Active",
  },
];

export default function RecentCustomers() {
  return (
    <Card className="border-slate-200 shadow-sm">
      <CardHeader className="border-b border-slate-100 pb-4 flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold text-slate-800">
          Recently Added Customers
        </CardTitle>
        <Button variant="outline" size="sm">
          View All Customers
        </Button>
      </CardHeader>
      <CardContent className="p-0">
        <Table>
          <TableHeader className="bg-slate-50">
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Contact Info</TableHead>
              <TableHead>Rate/Can</TableHead>
              <TableHead>Pending Dues</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentCustomers.map((customer) => (
              <TableRow
                key={customer.id}
                className="hover:bg-slate-50/50 transition-colors"
              >
                <TableCell className="font-medium text-slate-900">
                  {customer.name}
                </TableCell>
                <TableCell>
                  <div className="flex flex-col">
                    <span className="text-sm text-slate-600">
                      {customer.mobile}
                    </span>
                    <span className="text-xs text-slate-400">
                      {customer.address}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="text-slate-600">
                  {customer.rate}
                </TableCell>
                <TableCell>
                  <span
                    className={`font-medium ${customer.pending === "₹0" ? "text-emerald-600" : "text-rose-600"}`}
                  >
                    {customer.pending}
                  </span>
                </TableCell>
                <TableCell>
                  <Badge
                    variant="secondary"
                    className={
                      customer.status === "Active"
                        ? "bg-blue-100 text-blue-700 hover:bg-blue-100"
                        : "bg-rose-100 text-rose-700 hover:bg-rose-100"
                    }
                  >
                    {customer.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        className="h-8 w-8 p-0 text-slate-500 hover:text-slate-900"
                      >
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-40">
                      <DropdownMenuItem className="cursor-pointer text-slate-600">
                        <Eye className="mr-2 h-4 w-4" /> View Details
                      </DropdownMenuItem>
                      <DropdownMenuItem className="cursor-pointer text-slate-600">
                        <Edit className="mr-2 h-4 w-4" /> Edit Profile
                      </DropdownMenuItem>
                      <DropdownMenuItem className="cursor-pointer text-rose-600">
                        <Trash2 className="mr-2 h-4 w-4" /> Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
