"use client";

import React from "react";
import CustomerSidebar from "@/components/customerDashboard/customerSidebar";
import CustomerNavbar from "@/components/customerDashboard/customerNavbar";
import CustomerHero from "@/components/customerDashboard/customerHero";
import StatsCards from "@/components/customerDashboard/statesCard";
import DeliveryTracker from "@/components/customerDashboard/deliveryTracker";
import SubscriptionCard from "@/components/customerDashboard/subscriptionCard";
import RecentOrders from "@/components/customerDashboard/recentOrders";
import WaterQuality from "@/components/customerDashboard/waterQuality";
import LoyaltyRewards from "@/components/customerDashboard/loyalityRewards";
import QuickActions from "@/components/customerDashboard/quickAction";

export default function CustomerDashboard() {
  return (
    <div className="min-h-screen bg-slate-50/50 font-sans selection:bg-primary selection:text-white flex">
      {/* Fixed Sidebar */}
      <CustomerSidebar />

      {/* Main content area */}
      <div className="flex-1 lg:ml-64 min-h-screen flex flex-col">
        {/* Top Navbar */}
        <CustomerNavbar />

        {/* Scrollable Dashboard Body */}
        <main className="flex-1 p-6 lg:p-10 overflow-y-auto">
          <div className="max-w-[1600px] mx-auto space-y-10">
            {/* Welcome Hero Section */}
            <CustomerHero />

            {/* Core Metrics Grid */}
            <StatsCards />

            {/* Mid-Section Grid (Operations & Subscription) */}
            <div className="grid lg:grid-cols-2 gap-10">
              <DeliveryTracker />
              <SubscriptionCard />
            </div>

            {/* Bottom-Section Grid (History & Quality & Actions) */}
            <div className="grid xl:grid-cols-12 gap-10">
              {/* Main Column (8/12) */}
              <div className="xl:col-span-8 space-y-10">
                <RecentOrders />
                <div className="grid md:grid-cols-2 gap-10">
                  <WaterQuality />
                  <LoyaltyRewards />
                </div>
              </div>

              {/* Sidebar Column (4/12) */}
              <div className="xl:col-span-4 flex flex-col gap-10">
                <QuickActions />

                {/* Live Support / System Status Mini Card */}
                <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-xl shadow-slate-200/50 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                      Logistics Status
                    </span>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-black text-slate-900">
                      All routes normal.
                    </h4>
                    <p className="text-xs font-bold text-slate-500 leading-relaxed">
                      Your area (Freeganj) is currently seeing 100% on-time
                      delivery efficiency today.
                    </p>
                  </div>
                  <button className="w-full py-4 rounded-2xl bg-slate-50 text-slate-900 font-black text-xs hover:bg-slate-100 transition-colors">
                    View Service Map
                  </button>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="pt-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-400">
              <p className="text-[10px] font-black uppercase tracking-[0.2em]">
                © 2024 Mahankal RO Technologies. Built for Excellence.
              </p>
              <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest">
                <span className="hover:text-primary cursor-pointer transition-colors">
                  Help Center
                </span>
                <span className="hover:text-primary cursor-pointer transition-colors">
                  Privacy
                </span>
                <span className="hover:text-primary cursor-pointer transition-colors">
                  Terms
                </span>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Global Decorative Blur */}
      <div className="fixed -bottom-32 -left-32 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none z-0"></div>
    </div>
  );
}
