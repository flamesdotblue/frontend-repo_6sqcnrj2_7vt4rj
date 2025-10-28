import { Minus, Square, X, Shield, Settings } from "lucide-react";

export default function TitleBar() {
  return (
    <div className="flex items-center justify-between px-4 py-2 border-b border-zinc-800 bg-zinc-900/80 backdrop-blur">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-red-500" aria-hidden />
          <span className="h-3 w-3 rounded-full bg-yellow-500" aria-hidden />
          <span className="h-3 w-3 rounded-full bg-green-500" aria-hidden />
        </div>
        <div className="h-5 w-px bg-zinc-800 mx-2" />
        <div className="flex items-center gap-2 text-zinc-300">
          <Shield className="h-4 w-4 text-emerald-400" />
          <span className="font-medium tracking-tight">CampusGuard Control</span>
        </div>
      </div>
      <div className="flex items-center gap-2 text-zinc-400">
        <button className="px-2 py-1 hover:bg-zinc-800 rounded transition-colors" title="Minimize">
          <Minus className="h-4 w-4" />
        </button>
        <button className="px-2 py-1 hover:bg-zinc-800 rounded transition-colors" title="Zoom">
          <Square className="h-4 w-4" />
        </button>
        <button className="px-2 py-1 hover:bg-zinc-800 rounded transition-colors" title="Settings">
          <Settings className="h-4 w-4" />
        </button>
        <button className="px-2 py-1 hover:bg-zinc-800 rounded transition-colors" title="Close">
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
