import { AlertTriangle, CheckCircle2, Camera, MapPin, PlayCircle, PauseCircle, Search } from "lucide-react";

function CameraTile({ name = "Cam", status = "OK" }) {
  const isAlert = status !== "OK";
  return (
    <div className="relative aspect-video rounded-lg bg-zinc-900 border border-zinc-800 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-800 opacity-80" />
      <div className="absolute inset-0 flex items-center justify-center text-zinc-600">
        <Camera className="h-10 w-10" />
      </div>
      <div className="absolute top-2 left-2 flex items-center gap-2">
        <span className="px-2 py-0.5 rounded bg-zinc-900/80 border border-zinc-800 text-[10px] text-zinc-300">{name}</span>
        <span
          className={`px-2 py-0.5 rounded border text-[10px] ${
            isAlert
              ? "bg-red-500/10 text-red-300 border-red-500/30"
              : "bg-emerald-500/10 text-emerald-300 border-emerald-500/30"
          }`}
        >
          {isAlert ? "ALERT" : "OK"}
        </span>
      </div>
    </div>
  );
}

function AlertItem({ level = "High", title, time = "Just now" }) {
  const color = level === "High" ? "text-red-300 bg-red-500/10 border-red-500/30" : level === "Medium" ? "text-amber-300 bg-amber-500/10 border-amber-500/30" : "text-emerald-300 bg-emerald-500/10 border-emerald-500/30";
  const Icon = level === "High" ? AlertTriangle : level === "Medium" ? AlertTriangle : CheckCircle2;
  return (
    <div className={`flex items-start gap-3 p-3 rounded-lg border ${color} hover:bg-white/5 transition-colors`}>
      <Icon className="h-4 w-4 mt-0.5" />
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between">
          <p className="text-sm text-zinc-200 truncate">{title}</p>
          <span className="text-[10px] text-zinc-500 ml-2 shrink-0">{time}</span>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <button className="text-xs px-2 py-1 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-200">Acknowledge</button>
          <button className="text-xs px-2 py-1 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-200">Open Clip</button>
          <button className="text-xs px-2 py-1 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-200">Escalate</button>
        </div>
      </div>
    </div>
  );
}

export default function ControlCenter() {
  return (
    <div className="flex-1 grid grid-cols-12 gap-4 p-4 overflow-hidden">
      {/* Left: Cameras wall */}
      <section className="col-span-8 flex flex-col overflow-hidden">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-sm font-medium text-zinc-300">Live Monitoring</h2>
          <div className="flex items-center gap-2 text-zinc-400">
            <button className="flex items-center gap-1 text-xs px-2 py-1 rounded bg-zinc-800 hover:bg-zinc-700">
              <PlayCircle className="h-4 w-4" /> Play All
            </button>
            <button className="flex items-center gap-1 text-xs px-2 py-1 rounded bg-zinc-800 hover:bg-zinc-700">
              <PauseCircle className="h-4 w-4" /> Pause
            </button>
            <div className="relative">
              <Search className="h-4 w-4 absolute left-2 top-1.5 text-zinc-500" />
              <input className="pl-7 pr-3 py-1.5 text-xs rounded bg-zinc-900 border border-zinc-800 text-zinc-200 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/30" placeholder="Search cameras" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 overflow-auto pr-1">
          {[
            { name: "Entrance A", status: "OK" },
            { name: "Hallway 2F", status: "Medium" },
            { name: "Cafeteria", status: "OK" },
            { name: "Parking Lot", status: "High" },
            { name: "Gymnasium", status: "OK" },
            { name: "Library", status: "OK" },
          ].map((cam) => (
            <CameraTile key={cam.name} name={cam.name} status={cam.status} />
          ))}
        </div>
      </section>

      {/* Right: Alerts + Map */}
      <section className="col-span-4 flex flex-col gap-4 overflow-hidden">
        <div className="flex-1 flex flex-col min-h-0">
          <h2 className="text-sm font-medium text-zinc-300 mb-2">Real-time Alerts</h2>
          <div className="space-y-2 overflow-auto pr-1">
            <AlertItem level="High" title="Weapon detected near Parking Lot" time="10s ago" />
            <AlertItem level="Medium" title="Crowd density high in Hallway 2F" time="2m ago" />
            <AlertItem level="Low" title="Door ajar - Service Exit" time="12m ago" />
          </div>
        </div>
        <div className="flex-1 min-h-0">
          <h2 className="text-sm font-medium text-zinc-300 mb-2">Map & Zones</h2>
          <div className="relative h-56 rounded-lg bg-zinc-900 border border-zinc-800 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(39,39,42,0.6),rgba(24,24,27,1))]" />
            {/* Simulated markers */}
            <div className="absolute left-6 top-8 flex items-center gap-1 text-emerald-300 text-xs">
              <MapPin className="h-3 w-3" />
              Zone A
            </div>
            <div className="absolute right-8 top-16 flex items-center gap-1 text-amber-300 text-xs">
              <MapPin className="h-3 w-3" />
              Hallway 2F
            </div>
            <div className="absolute right-10 bottom-8 flex items-center gap-1 text-red-300 text-xs">
              <MapPin className="h-3 w-3" />
              Parking Lot
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
