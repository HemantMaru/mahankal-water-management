import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarClock } from "lucide-react";

const upcoming = [
  {
    id: 1,
    name: "Hotel Rajhans",
    address: "Station Road",
    qty: 20,
    slot: "Morning (8 AM - 10 AM)",
  },
  {
    id: 2,
    name: "Priya Patel",
    address: "Bhawarkua Square",
    qty: 2,
    slot: "Afternoon (1 PM - 3 PM)",
  },
  {
    id: 3,
    name: "TechCorp Office",
    address: "IT Park",
    qty: 15,
    slot: "Morning (9 AM - 11 AM)",
  },
];

export default function UpcomingDeliveries() {
  return (
    <Card className="border-slate-200 shadow-sm">
      <CardHeader className="border-b border-slate-100 pb-4">
        <CardTitle className="text-lg font-semibold text-slate-800 flex items-center gap-2">
          <CalendarClock className="h-5 w-5 text-blue-600" /> Tomorrow's
          Schedule
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="divide-y divide-slate-100">
          {upcoming.map((item) => (
            <div
              key={item.id}
              className="p-4 hover:bg-slate-50 transition-colors"
            >
              <div className="flex justify-between items-start mb-1">
                <h4 className="text-sm font-semibold text-slate-900">
                  {item.name}
                </h4>
                <Badge
                  variant="outline"
                  className="bg-blue-50 text-blue-700 border-blue-200"
                >
                  {item.qty} Cans
                </Badge>
              </div>
              <p className="text-xs text-slate-500 mb-2">{item.address}</p>
              <div className="inline-flex items-center text-[11px] font-medium text-slate-600 bg-slate-100 px-2 py-1 rounded">
                <CalendarClock className="h-3 w-3 mr-1" /> {item.slot}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
