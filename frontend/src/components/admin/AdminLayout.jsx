import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import "./admin.css";

export default function AdminLayout() {
  return (
    <div className="admin-container">
      <Sidebar />

      <div className="admin-main">
        <Topbar />

        <div className="admin-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}