import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { IndianRupee } from "lucide-react";

const pendingDues = [
  {
    id: 1,
    name: "Ankit Jain",
    amount: "1,200",
    days: "15 days overdue",
    initials: "AJ",
  },
  {
    id: 2,
    name: "Gourav Verma",
    amount: "850",
    days: "8 days overdue",
    initials: "GV",
  },
  {
    id: 3,
    name: "Supermart Store",
    amount: "3,400",
    days: "22 days overdue",
    initials: "SS",
  },
  {
    id: 4,
    name: "Ramesh Kirana",
    amount: "450",
    days: "3 days overdue",
    initials: "RK",
  },
];

export default function PendingPayments() {
  return (
    <Card className="border-slate-200 shadow-sm border-t-4 border-t-rose-500">
      <CardHeader className="border-b border-slate-100 pb-4 flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold text-slate-800">
          Action Needed: Dues
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="divide-y divide-slate-100">
          {pendingDues.map((due) => (
            <div
              key={due.id}
              className="p-4 flex items-center justify-between hover:bg-slate-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10 border border-slate-200 bg-slate-50 text-slate-600 font-medium">
                  <AvatarFallback>{due.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900">
                    {due.name}
                  </h4>
                  <p className="text-xs text-rose-500 font-medium mt-0.5">
                    {due.days}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-right">
                  <p className="text-sm font-bold text-slate-900 flex items-center justify-end">
                    <IndianRupee className="h-3 w-3" /> {due.amount}
                  </p>
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  className="h-8 text-xs font-medium text-slate-600"
                >
                  Remind
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="p-4 border-t border-slate-100 bg-slate-50 rounded-b-xl">
          <Button
            variant="ghost"
            className="w-full text-sm text-blue-600 hover:text-blue-700 hover:bg-blue-50"
          >
            View All Pending Payments
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
