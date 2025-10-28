import React from 'react';
import { Bell, Map, Radio, Lock, Clock, AlertTriangle, BarChart2, Megaphone } from 'lucide-react';

function StatusDot({ color = 'bg-emerald-400' }) {
  return <span className={`inline-block h-2.5 w-2.5 rounded-full ${color}`}></span>;
}

function CameraTile({ name, status = 'ok' }) {
  const color = status === 'ok' ? 'bg-emerald-400' : status === 'warn' ? 'bg-amber-400' : 'bg-rose-500';
  return (
    <div className="flex flex-col justify-between rounded-lg border border-slate-800 bg-slate-900/50 p-3">
      <div className="flex items-center justify-between text-xs text-slate-400">
        <span>{name}</span>
        <StatusDot color={color} />
      </div>
      <div className="mt-2 aspect-video w-full rounded-md bg-gradient-to-br from-slate-800 to-slate-900 ring-1 ring-slate-800" />
      <div className="mt-2 flex items-center justify-between text-[10px] text-slate-400">
        <span>AI: Person, Crowd</span>
        <span>PTZ • Snapshot</span>
      </div>
    </div>
  );
}

function AlertItem({ type, zone, time, level = 'warn' }) {
  const color = level === 'critical' ? 'text-rose-400' : level === 'warn' ? 'text-amber-400' : 'text-emerald-400';
  const Icon = level === 'critical' ? AlertTriangle : Bell;
  return (
    <div className="flex items-start gap-3 rounded-lg border border-slate-800 bg-slate-900/50 p-3">
      <div className={`mt-0.5 rounded-md bg-slate-800 p-1.5 ${color}`}>
        <Icon className="h-3.5 w-3.5" />
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between text-xs">
          <span className="text-slate-200">{type}</span>
          <span className="text-slate-500">{time}</span>
        </div>
        <div className="mt-1 text-[11px] text-slate-400">Zone: {zone}</div>
        <div className="mt-2 flex gap-2 text-[11px]">
          <button className="rounded-md bg-slate-800 px-2 py-1 text-slate-300 hover:bg-slate-700">Acknowledge</button>
          <button className="rounded-md bg-emerald-600 px-2 py-1 text-slate-900 hover:bg-emerald-500">Escalate</button>
        </div>
      </div>
    </div>
  );
}

export default function ControlCenterShowcase() {
  return (
    <section id="dashboard" className="w-full bg-slate-950 py-16 text-slate-100">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-semibold md:text-3xl">Unified Control Center</h2>
            <p className="mt-1 text-sm text-slate-400">Live monitoring, alert feed, campus map, and analytics in one responsive workspace.</p>
          </div>
          <div className="hidden gap-2 sm:flex">
            <span className="rounded-md bg-slate-900 px-2 py-1 text-xs text-slate-300 ring-1 ring-slate-800">Guard</span>
            <span className="rounded-md bg-slate-900 px-2 py-1 text-xs text-slate-300 ring-1 ring-slate-800">Principal</span>
            <span className="rounded-md bg-slate-900 px-2 py-1 text-xs text-slate-300 ring-1 ring-slate-800">Admin</span>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Live Monitoring Wall */}
          <div className="lg:col-span-2">
            <div className="mb-3 flex items-center justify-between text-xs text-slate-400">
              <span>Live Monitoring Wall</span>
              <div className="flex items-center gap-2">
                <StatusDot /> <span>OK</span>
                <StatusDot color="bg-amber-400" /> <span>Warn</span>
                <StatusDot color="bg-rose-500" /> <span>Critical</span>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              <CameraTile name="Entrance A" status="ok" />
              <CameraTile name="Corridor 2" status="warn" />
              <CameraTile name="Playground" status="ok" />
              <CameraTile name="Canteen" status="ok" />
              <CameraTile name="Parking" status="ok" />
              <CameraTile name="Bus 12" status="critical" />
            </div>
          </div>

          {/* Alert Feed */}
          <div className="flex flex-col gap-3">
            <div className="text-xs text-slate-400">Real-time Alert Feed</div>
            <AlertItem type="Unattended Object" zone="Canteen" time="10:21" level="warn" />
            <AlertItem type="Perimeter Breach" zone="North Gate" time="10:19" level="critical" />
            <AlertItem type="Crowd Density" zone="Corridor 2" time="10:17" level="warn" />
          </div>
        </div>

        {/* Map + Triggers + Analytics Strip */}
        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
            <div className="mb-2 flex items-center gap-2 text-slate-300"><Map className="h-4 w-4 text-emerald-400"/> Campus Map</div>
            <div className="relative aspect-video rounded-md bg-gradient-to-br from-slate-800 to-slate-900 ring-1 ring-slate-800">
              {/* camera markers */}
              <span className="absolute left-6 top-6 inline-flex items-center gap-1 rounded-md bg-slate-900/80 px-2 py-1 text-[10px] text-emerald-300 ring-1 ring-emerald-500/30">
                <StatusDot /> Gate A
              </span>
              <span className="absolute right-6 top-8 inline-flex items-center gap-1 rounded-md bg-slate-900/80 px-2 py-1 text-[10px] text-amber-300 ring-1 ring-amber-400/30">
                <StatusDot color="bg-amber-400" /> Corridor 2
              </span>
              <span className="absolute bottom-8 left-10 inline-flex items-center gap-1 rounded-md bg-slate-900/80 px-2 py-1 text-[10px] text-emerald-300 ring-1 ring-emerald-500/30">
                <StatusDot /> Playground
              </span>
            </div>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
            <div className="mb-2 flex items-center gap-2 text-slate-300"><Radio className="h-4 w-4 text-emerald-400"/> Automated Triggers</div>
            <div className="grid grid-cols-2 gap-2 text-[11px]">
              <button className="rounded-md bg-rose-600 px-3 py-2 font-semibold text-rose-50 hover:bg-rose-500"><AlertTriangle className="mr-1 inline h-3.5 w-3.5"/> Siren</button>
              <button className="rounded-md bg-emerald-600 px-3 py-2 font-semibold text-emerald-50 hover:bg-emerald-500"><Lock className="mr-1 inline h-3.5 w-3.5"/> Lockdown</button>
              <button className="rounded-md bg-sky-600 px-3 py-2 font-semibold text-sky-50 hover:bg-sky-500"><Megaphone className="mr-1 inline h-3.5 w-3.5"/> PA Annc.</button>
              <button className="rounded-md bg-amber-600 px-3 py-2 font-semibold text-amber-50 hover:bg-amber-500"><Clock className="mr-1 inline h-3.5 w-3.5"/> Escalate SLA</button>
            </div>
            <p className="mt-3 text-xs text-slate-400">Integrates with PA, fire alarm, and emergency services. Actions are logged with user and timestamp.</p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
            <div className="mb-2 flex items-center gap-2 text-slate-300"><BarChart2 className="h-4 w-4 text-emerald-400"/> Analytics Snapshot</div>
            <div className="grid grid-cols-3 gap-3">
              {['Alerts','Response','False+'].map((l, i) => (
                <div key={i} className="rounded-md bg-slate-900 p-2 ring-1 ring-slate-800">
                  <div className="text-[10px] text-slate-400">{l}</div>
                  <div className="mt-1 h-14 w-full rounded bg-gradient-to-t from-emerald-500/30 to-emerald-400/70"></div>
                </div>
              ))}
            </div>
            <div className="mt-3 grid grid-cols-2 gap-2 text-[11px] text-slate-400">
              <div className="rounded-md bg-slate-900 p-2 ring-1 ring-slate-800">High-risk: North Gate, Corridor 2</div>
              <div className="rounded-md bg-slate-900 p-2 ring-1 ring-slate-800">Trend: Lunch crowd +18%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
