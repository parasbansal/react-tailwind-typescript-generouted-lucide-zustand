import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <div className="h-screen w-screen bg-neutral-100 text-neutral-800 dark:bg-neutral-900 dark:text-neutral-200">
      {/* Providers */}
      <Toaster />

      {/* Page content */}
      <Outlet />
    </div>
  );
}
