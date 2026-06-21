export default function DashboardFooter() {
  return (
    <footer className="mt-8 mb-4 pt-6 border-t border-slate-200 text-center">
      <p className="text-sm font-medium text-slate-900">
        Mahankal RO + UV Chilled Water
      </p>
      <div className="flex items-center justify-center gap-3 mt-1 text-xs text-slate-500">
        <span>Version 1.0.0</span>
        <span>•</span>
        <span>© {new Date().getFullYear()} All rights reserved</span>
      </div>
    </footer>
  );
}
