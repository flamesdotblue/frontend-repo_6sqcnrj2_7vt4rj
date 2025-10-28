import React from 'react';
import { ShieldCheck, AlertTriangle, Camera, Users, Lock, Car, Moon, Eye, Activity } from 'lucide-react';

const features = [
  {
    icon: <AlertTriangle className="h-5 w-5 text-emerald-400" />,
    title: 'Real-time Threat Detection',
    desc: 'Weapons, intruders, fire/smoke, fights, falls, and perimeter breaches with zone-based sensitivity.'
  },
  {
    icon: <Activity className="h-5 w-5 text-emerald-400" />,
    title: 'Crowd & Behavior Analytics',
    desc: 'Crowd density, loitering, and unattended-object detection with configurable dwell timers.'
  },
  {
    icon: <Users className="h-5 w-5 text-emerald-400" />,
    title: 'Facial Recognition Attendance',
    desc: 'Privacy-aware face matching for attendance and role-based access across gates and classrooms.'
  },
  {
    icon: <Car className="h-5 w-5 text-emerald-400" />,
    title: 'Vehicle & License Plate',
    desc: 'Track vehicles entering/exiting with license plate recognition and parking zone rules.'
  },
  {
    icon: <Moon className="h-5 w-5 text-emerald-400" />,
    title: 'After-hours Security',
    desc: 'Night-vision optimized detection with motion alerts and patrol schedules.'
  },
  {
    icon: <Lock className="h-5 w-5 text-emerald-400" />,
    title: 'Privacy & Compliance',
    desc: 'On-device redaction, role-scoped visibility, and retention controls with audit logs.'
  }
];

export default function CoreFeatures() {
  return (
    <section id="features" className="relative w-full bg-slate-950 py-16 text-slate-100">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-center gap-3">
          <ShieldCheck className="h-6 w-6 text-emerald-400" />
          <h2 className="text-2xl font-semibold md:text-3xl">Core Capabilities</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, idx) => (
            <div key={idx} className="group rounded-xl border border-slate-800 bg-slate-900/60 p-5 shadow-sm transition hover:border-emerald-500/40 hover:shadow-emerald-500/10">
              <div className="mb-3 inline-flex items-center gap-2">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10 ring-1 ring-emerald-500/30">
                  {f.icon}
                </span>
                <span className="text-sm font-semibold text-slate-200">{f.title}</span>
              </div>
              <p className="text-sm leading-relaxed text-slate-400">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Secondary feature row for dashboard and processing notes */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
            <div className="mb-2 flex items-center gap-2 text-slate-200"><Camera className="h-4 w-4 text-emerald-400"/> Live Monitoring Wall</div>
            <p className="text-sm text-slate-400">Grid of feeds with AI status indicators (green/amber/red), quick mute, PTZ, and snapshot.</p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
            <div className="mb-2 flex items-center gap-2 text-slate-200"><Eye className="h-4 w-4 text-emerald-400"/> Playback & Search</div>
            <p className="text-sm text-slate-400">Search by object, face, or vehicle; tag evidence, export clips, and share secure links.</p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
            <div className="mb-2 flex items-center gap-2 text-slate-200"><ShieldCheck className="h-4 w-4 text-emerald-400"/> Roles & Permissions</div>
            <p className="text-sm text-slate-400">Security guard, principal, and admin roles with granular, least-privilege access.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
