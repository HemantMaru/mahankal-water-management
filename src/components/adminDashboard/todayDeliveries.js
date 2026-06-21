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
import { CheckCircle2, Clock } from "lucide-react";

const deliveries = [
  {
    id: "D-101",
    name: "Rahul Sharma",
    address: "Vijay Nagar, Sector B",
    qty: 2,
    status: "Delivered",
  },
  {
    id: "D-102",
    name: "Priya Patel",
    address: "Bhawarkua Square",
    qty: 1,
    status: "Pending",
  },
  {
    id: "D-103",
    name: "Amit Singh",
    address: "Palasia",
    qty: 5,
    status: "Pending",
  },
  {
    id: "D-104",
    name: "Neha Gupta",
    address: "Geeta Bhawan",
    qty: 2,
    status: "Delivered",
  },
];

export default function TodayDeliveries() {
  return (
    <Card className="border-slate-200 shadow-sm">
      <CardHeader className="border-b border-slate-100 pb-4 flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold text-slate-800">
          Today's Route Plan
        </CardTitle>
        <Button variant="outline" size="sm">
          View All
        </Button>
      </CardHeader>
      <CardContent className="p-0">
        <Table>
          <TableHeader className="bg-slate-50">
            <TableRow>
              <TableHead>Customer</TableHead>
              <TableHead>Address</TableHead>
              <TableHead>Qty</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {deliveries.map((item) => (
              <TableRow
                key={item.id}
                className="hover:bg-slate-50/50 transition-colors"
              >
                <TableCell className="font-medium">{item.name}</TableCell>
                <TableCell className="text-slate-500">{item.address}</TableCell>
                <TableCell>{item.qty} Cans</TableCell>
                <TableCell>
                  <Badge
                    variant="secondary"
                    className={
                      item.status === "Delivered"
                        ? "bg-emerald-100 text-emerald-700 hover:bg-emerald-100"
                        : "bg-amber-100 text-amber-700 hover:bg-amber-100"
                    }
                  >
                    {item.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  {item.status === "Pending" ? (
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      <CheckCircle2 className="h-4 w-4 mr-1" /> Done
                    </Button>
                  ) : (
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-slate-400"
                      disabled
                    >
                      <CheckCircle2 className="h-4 w-4" />
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
