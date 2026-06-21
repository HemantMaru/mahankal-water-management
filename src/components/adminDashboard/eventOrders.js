import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays } from "lucide-react";

const events = [
  {
    id: 1,
    customer: "Sanjay Marriage Garden",
    type: "Marriage",
    date: "24 Jun 2026",
    qty: 50,
    amount: "₹1,500",
    status: "Confirmed",
  },
  {
    id: 2,
    customer: "TechCorp Annual Party",
    type: "Party",
    date: "26 Jun 2026",
    qty: 20,
    amount: "₹600",
    status: "Pending",
  },
  {
    id: 3,
    customer: "Rotary Club Seminar",
    type: "Office",
    date: "02 Jul 2026",
    qty: 30,
    amount: "₹900",
    status: "Confirmed",
  },
];

export default function EventOrders() {
  return (
    <Card className="border-slate-200 shadow-sm">
      <CardHeader className="border-b border-slate-100 pb-4 flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold text-slate-800">
          Upcoming Events
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="divide-y divide-slate-100">
          {events.map((event) => (
            <div
              key={event.id}
              className="p-4 flex items-center justify-between hover:bg-slate-50 transition-colors"
            >
              <div className="flex items-start gap-3">
                <div className="bg-blue-50 p-2 rounded-lg mt-1">
                  <CalendarDays className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900">
                    {event.customer}
                  </h4>
                  <div className="flex items-center gap-2 text-xs text-slate-500 mt-1">
                    <span>{event.date}</span>
                    <span>•</span>
                    <span>{event.qty} Cans</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-slate-900">
                  {event.amount}
                </p>
                <Badge
                  variant="outline"
                  className={`mt-1 text-[10px] ${event.status === "Confirmed" ? "border-emerald-200 text-emerald-600" : "border-amber-200 text-amber-600"}`}
                >
                  {event.status}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
