import AdminSidebar from "@/components/adminDashboard/adminSidebar";
import AdminNavbar from "@/components/adminDashboard/adminNavbar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex h-screen bg-[#F8FAFC] text-slate-900 font-sans">
      <AdminSidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <AdminNavbar />
        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">{children}</div>
        </main>
      </div>
    </div>
  );
}
