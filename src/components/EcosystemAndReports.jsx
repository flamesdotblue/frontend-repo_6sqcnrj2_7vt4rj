import React from 'react';
import { BarChart2, FileText, Database, Cpu, Smartphone, Bus, Link as LinkIcon, CheckCircle2 } from 'lucide-react';

export default function EcosystemAndReports() {
  return (
    <section className="w-full bg-slate-950 py-16 text-slate-100">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Analytics & Reports */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <div className="mb-4 flex items-center gap-2 text-slate-300">
              <BarChart2 className="h-5 w-5 text-emerald-400" />
              <h3 className="text-xl font-semibold">Analytics & Reports</h3>
            </div>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-400"/> Attendance summaries with daily/weekly rollups and missed scans.</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-400"/> Incident statistics by type, zone, and time-of-day with heatmaps.</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-400"/> Predictive risk trends leveraging historical patterns and seasons.</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-400"/> Weekly safety performance: response time, alert count, false positives.</li>
            </ul>
            <div className="mt-5 grid grid-cols-3 gap-3">
              {["Attendance","Incidents","SLA"].map((m, i) => (
                <div key={i} className="rounded-lg bg-slate-900 p-3 ring-1 ring-slate-800">
                  <div className="text-[10px] text-slate-400">{m}</div>
                  <div className="mt-2 h-16 w-full rounded bg-gradient-to-t from-slate-800 to-emerald-500/60"></div>
                </div>
              ))}
            </div>
            <div className="mt-4 inline-flex items-center gap-2 rounded-md bg-slate-900 px-3 py-2 text-xs text-slate-300 ring-1 ring-slate-800">
              <FileText className="h-3.5 w-3.5 text-emerald-400"/> Export PDF/CSV • Evidence bundling
            </div>
          </div>

          {/* Integration Ecosystem */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <div className="mb-4 flex items-center gap-2 text-slate-300">
              <LinkIcon className="h-5 w-5 text-emerald-400" />
              <h3 className="text-xl font-semibold">Integration Ecosystem</h3>
            </div>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-2"><Database className="mt-0.5 h-4 w-4 text-emerald-400"/> Connect with school ERP for attendance sync, ID cards, and transport rosters.</li>
              <li className="flex items-start gap-2"><Bus className="mt-0.5 h-4 w-4 text-emerald-400"/> AI-enabled bus cameras with GPS for boarding alerts and route deviations.</li>
              <li className="flex items-start gap-2"><Smartphone className="mt-0.5 h-4 w-4 text-emerald-400"/> Optional parent app for safety notifications and pickup status.</li>
              <li className="flex items-start gap-2"><Cpu className="mt-0.5 h-4 w-4 text-emerald-400"/> Privacy-aware edge processing with central policy management and retention controls.</li>
            </ul>
            <div className="mt-5 grid grid-cols-2 gap-3 text-[11px]">
              <div className="rounded-lg bg-slate-900 p-3 ring-1 ring-slate-800">SSO & RBAC</div>
              <div className="rounded-lg bg-slate-900 p-3 ring-1 ring-slate-800">Webhooks & REST API</div>
              <div className="rounded-lg bg-slate-900 p-3 ring-1 ring-slate-800">PA/Fire Alarm</div>
              <div className="rounded-lg bg-slate-900 p-3 ring-1 ring-slate-800">Emergency Services</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
