import { Home, Video, Map, Bell, Users, Activity, Settings, Lock } from "lucide-react";

const NavItem = ({ icon: Icon, label, active = false }) => (
  <button
    className={`group w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${
      active ? "bg-emerald-500/10 text-emerald-300" : "text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200"
    }`}
  >
    <Icon className={`h-4 w-4 ${active ? "text-emerald-300" : "text-zinc-500 group-hover:text-zinc-300"}`} />
    <span className="truncate">{label}</span>
  </button>
);

export default function SidebarNav() {
  return (
    <aside className="h-full w-64 border-r border-zinc-800 bg-zinc-950/60">
      <div className="p-3">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-medium text-zinc-500">WORKSPACES</span>
          <span className="text-[10px] text-zinc-600">v1.0</span>
        </div>
        <div className="space-y-1">
          <NavItem icon={Home} label="Overview" active />
          <NavItem icon={Video} label="Live Cameras" />
          <NavItem icon={Map} label="Map & Zones" />
          <NavItem icon={Bell} label="Alerts" />
          <NavItem icon={Users} label="Attendance" />
          <NavItem icon={Activity} label="Analytics" />
        </div>
      </div>
      <div className="px-3">
        <div className="h-px bg-zinc-800 my-3" />
      </div>
      <div className="p-3 space-y-1">
        <span className="text-xs font-medium text-zinc-500">ADMIN</span>
        <NavItem icon={Settings} label="Settings" />
        <NavItem icon={Lock} label="RBAC" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-3 border-t border-zinc-800 bg-zinc-950/80">
        <div className="flex items-center justify-between text-xs text-zinc-500">
          <span>Node: Edge-02</span>
          <span className="text-emerald-400">Online</span>
        </div>
      </div>
    </aside>
  );
}
