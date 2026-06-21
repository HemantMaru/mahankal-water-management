import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertTriangle, PhoneCall, BellRing } from "lucide-react";

const alerts = [
  {
    id: 1,
    name: "Vijay Supermarket",
    amount: "₹4,500",
    days: "28 days",
    urgent: true,
  },
  {
    id: 2,
    name: "Ramesh Sharma",
    amount: "₹1,200",
    days: "15 days",
    urgent: false,
  },
  {
    id: 3,
    name: "City Hospital",
    amount: "₹8,900",
    days: "45 days",
    urgent: true,
  },
];

export default function CustomerAlerts() {
  return (
    <Card className="border-slate-200 shadow-sm border-t-4 border-t-amber-500">
      <CardHeader className="border-b border-slate-100 pb-4">
        <CardTitle className="text-lg font-semibold text-slate-800 flex items-center gap-2">
          <AlertTriangle className="h-5 w-5 text-amber-500" /> Due Alerts
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="divide-y divide-slate-100">
          {alerts.map((alert) => (
            <div
              key={alert.id}
              className={`p-4 flex items-center justify-between ${alert.urgent ? "bg-amber-50/30" : ""}`}
            >
              <div>
                <h4 className="text-sm font-semibold text-slate-900">
                  {alert.name}
                </h4>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-sm font-bold text-rose-600">
                    {alert.amount}
                  </span>
                  <span className="text-xs px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 font-medium">
                    Overdue: {alert.days}
                  </span>
                </div>
              </div>
              <div className="flex gap-2">
                <Button
                  size="icon"
                  variant="outline"
                  className="h-8 w-8 text-blue-600 border-blue-200 hover:bg-blue-50"
                >
                  <PhoneCall className="h-3.5 w-3.5" />
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  className="h-8 w-8 text-amber-600 border-amber-200 hover:bg-amber-50"
                >
                  <BellRing className="h-3.5 w-3.5" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
