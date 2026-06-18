// "use client";

// import React from "react";
// import Sidebar from "@/components/adminDashboard/Sidebar";
// import Navbar from "@/components/adminDashboard/Navbar";

// import HeroSection from "@/components/adminDashboard/HeroSection";
// import StatsCards from "@/components/adminDashboard/StatsCards";
// import FleetSection from "@/components/adminDashboard/FleetSection";
// import OrdersTable from "@/components/adminDashboard/OrdersTable";
// import AnalyticsSection from "@/components/adminDashboard/AnalyticsSection";
// import RightPanel from "@/components/adminDashboard/RightPanel";
// import { Separator } from "@/components/ui/separator";

// export default function AdminDashboard() {
//   return (
//     <div className="min-h-screen bg-slate-50/50 font-sans selection:bg-primary selection:text-white flex">
//       {/* Sidebar - Fixed */}
//       <Sidebar />

//       {/* Main Content Area */}
//       <div className="flex-1 ml-64 min-h-screen flex flex-col">
//         {/* Top Navigation */}
//         <Navbar />

//         {/* Dashboard Scrollable Body */}
//         <main className="flex-1 p-8 overflow-y-auto">
//           <div className="max-w-[1600px] mx-auto flex flex-col xl:flex-row gap-8">
//             {/* Left Content Column (70%) */}
//             <div className="flex-1 min-w-0">
//               <HeroSection />
//               <StatsCards />
//               <AnalyticsSection />
//               <FleetSection />
//               <OrdersTable />

//               <div className="mt-12 py-8 border-t border-slate-200 flex justify-between items-center text-slate-400">
//                 <p className="text-xs font-bold uppercase tracking-widest">
//                   © 2024 Mahankal RO Technologies. v2.4.1-stable
//                 </p>
//                 <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest">
//                   <span className="hover:text-primary cursor-pointer transition-colors">
//                     Privacy Policy
//                   </span>
//                   <span className="hover:text-primary cursor-pointer transition-colors">
//                     Terms of Service
//                   </span>
//                   <span className="hover:text-primary cursor-pointer transition-colors">
//                     System Status
//                   </span>
//                 </div>
//               </div>
//             </div>

//             {/* Right Action Column (30% / Sidebar-like) */}
//             <div className="w-full xl:w-[400px] flex flex-col gap-8">
//               <RightPanel />
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }
"use client";

import { useSelector } from "react-redux";

export default function Dashboard() {
  const user = useSelector((state) => state.auth.user);

  console.log("Redux User:", user);

  return (
    <div>
      <h1>Dashboard</h1>

      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}
