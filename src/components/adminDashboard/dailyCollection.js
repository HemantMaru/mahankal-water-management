import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Banknote, QrCode, Clock, Wallet } from "lucide-react";

export default function DailyCollection() {
  return (
    <Card className="border-slate-200 shadow-sm relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>
      <CardHeader className="border-b border-slate-100 pb-4">
        <CardTitle className="text-lg font-semibold text-slate-800 flex items-center gap-2">
          <Wallet className="h-5 w-5 text-blue-600" /> Daily Collection
        </CardTitle>
      </CardHeader>
      <CardContent className="p-5">
        <div className="mb-6">
          <p className="text-sm text-slate-500 font-medium">Total Collected</p>
          <h2 className="text-3xl font-extrabold text-slate-900 mt-1">
            ₹4,250
          </h2>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-3 bg-emerald-50/50 rounded-lg border border-emerald-100">
            <div className="flex items-center gap-3">
              <Banknote className="h-5 w-5 text-emerald-600" />
              <span className="text-sm font-medium text-slate-700">Cash</span>
            </div>
            <span className="font-semibold text-slate-900">₹2,100</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-blue-50/50 rounded-lg border border-blue-100">
            <div className="flex items-center gap-3">
              <QrCode className="h-5 w-5 text-blue-600" />
              <span className="text-sm font-medium text-slate-700">
                UPI / Online
              </span>
            </div>
            <span className="font-semibold text-slate-900">₹2,150</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-rose-50/50 rounded-lg border border-rose-100">
            <div className="flex items-center gap-3">
              <Clock className="h-5 w-5 text-rose-600" />
              <span className="text-sm font-medium text-slate-700">
                Pending Today
              </span>
            </div>
            <span className="font-semibold text-rose-600">₹850</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
