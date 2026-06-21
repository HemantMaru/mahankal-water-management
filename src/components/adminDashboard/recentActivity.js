import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { CheckCircle2, UserPlus, IndianRupee, CalendarPlus } from "lucide-react";

const activities = [
  { id: 1, title: "Payment Received", desc: "₹450 from Ankit Jain (UPI)", time: "10 mins ago", icon: IndianRupee, color: "text-emerald-500", bg: "bg-emerald-100" },
  { id: 2, title: "Delivery Completed", desc: "Route 2 - 15 Cans delivered", time: "45 mins ago", icon: CheckCircle2, color: "text-blue-500", bg: "bg-blue-100" },
  { id: 3, title: "New Customer", desc: "Rajesh Kumar added to Route 1", time: "2 hours ago", icon: UserPlus, color: "text-indigo-500", bg: "bg-indigo-100" },
  { id: 4, title: "Event Order Created", desc: "50 Cans for Marriage Garden", time: "3 hours ago", icon: CalendarPlus, color: "text-amber-500", bg: "bg-amber-100" },
];

export default function RecentActivity() {
  return (
    <Card className="border-slate-200 shadow-sm">
      <CardHeader className="border-b border-slate-100 pb-4">
        <CardTitle className="text-lg font-semibold text-slate-800">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent className="p-5">
        <div className="relative border-l-2 border-slate-100 ml-3 space-y-6">
          {activities.map((item) => (
            <div key={item.id} className="relative pl-6">
              <div className={`absolute -left-[17px] top-0.5 flex h-8 w-8 items-center justify-center rounded-full border-4 border-white ${item.bg}`}>
                <item.icon className={`h-3.5 w-3.5 ${item.color}`} />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
                <span className="text-[10px] font-medium text-slate-400 mt-1 block">{item.time}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}