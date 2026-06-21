import HeroSection from "@/components/adminDashboard/heroSection";
import TodaySummary from "@/components/adminDashboard/todaySummary";
import DashboardStats from "@/components/adminDashboard/dashboardStats";
import DeliveryTrend from "@/components/adminDashboard/deliveryTrend";
import TodayDeliveries from "@/components/adminDashboard/todayDeliveries";
import RecentCustomers from "@/components/adminDashboard/recentCustomers";
import UpcomingDeliveries from "@/components/adminDashboard/upcomingDeliveries";
import RevenueChart from "@/components/adminDashboard/revenueCharts";

import DailyCollection from "@/components/adminDashboard/dailyCollection";
import PlantStatus from "@/components/adminDashboard/plantStatus";
import WeatherWidget from "@/components/adminDashboard/weatherWidget";
import RevenueGoal from "@/components/adminDashboard/revenueGoal";
import RecentActivity from "@/components/adminDashboard/recentActivity";
import CustomerAlerts from "@/components/adminDashboard/customerAlerts";
import PendingPayments from "@/components/adminDashboard/pendingPayments";
import EventOrders from "@/components/adminDashboard/eventOrders";

import DashboardFooter from "@/components/adminDashboard/dashboardFooter";
import FloatingActions from "@/components/adminDashboard/floatingActions";

export default function AdminDashboard() {
  return (
    <div className="space-y-6 md:space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 relative w-full pb-6">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Brand New Premium Summary Cards */}
      <TodaySummary />

      {/* 3. Existing Stats Overview */}
      <DashboardStats />

      {/* =========================================
          REORGANIZED GRID TO FILL LAPTOP SCREENS
          ========================================= */}

      {/* ROW 1: Analytics & Revenue (Charts + Financial Goals) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 items-start">
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          <DeliveryTrend />
          <RevenueChart />
        </div>
        <div className="space-y-6">
          <DailyCollection />
          <RevenueGoal />
        </div>
      </div>

      {/* ROW 2: Operations (Deliveries + Plant & Weather) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 items-start">
        <div className="lg:col-span-2 space-y-6">
          <TodayDeliveries />
          <UpcomingDeliveries />
        </div>
        <div className="space-y-6">
          <PlantStatus />
          <WeatherWidget />
          <RecentActivity />
        </div>
      </div>

      {/* ROW 3: Customers & Finances (Tables + Due Alerts) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 items-start">
        <div className="lg:col-span-2 space-y-6">
          <RecentCustomers />
          <EventOrders />
        </div>
        <div className="space-y-6">
          <PendingPayments />
          <CustomerAlerts />
        </div>
      </div>

      {/* Footer */}
      <DashboardFooter />

      {/* Global Bottom-Right Action Button */}
      <FloatingActions />
    </div>
  );
}
