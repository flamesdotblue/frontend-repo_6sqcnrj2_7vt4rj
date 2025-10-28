import { Wifi, HardDrive, User } from "lucide-react";

export default function StatusBar() {
  return (
    <div className="flex items-center justify-between px-4 py-2 border-t border-zinc-800 bg-zinc-900/80 text-xs text-zinc-400">
      <div className="flex items-center gap-4">
        <span className="flex items-center gap-1"><Wifi className="h-3.5 w-3.5 text-emerald-400" /> Connected</span>
        <span className="flex items-center gap-1"><HardDrive className="h-3.5 w-3.5" /> Storage: 72% used</span>
      </div>
      <div className="flex items-center gap-2">
        <User className="h-3.5 w-3.5" />
        <span>Admin · District 12</span>
      </div>
    </div>
  );
}
