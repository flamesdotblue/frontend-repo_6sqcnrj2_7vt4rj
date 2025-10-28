import TitleBar from "./components/TitleBar";
import SidebarNav from "./components/SidebarNav";
import ControlCenter from "./components/ControlCenter";
import StatusBar from "./components/StatusBar";

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="mx-auto max-w-[1400px] h-[92vh] mt-6 rounded-xl border border-zinc-800 bg-zinc-900 shadow-2xl flex flex-col overflow-hidden">
        <TitleBar />
        <div className="flex flex-1 min-h-0">
          <SidebarNav />
          <div className="flex-1 flex flex-col min-h-0">
            <ControlCenter />
            <StatusBar />
          </div>
        </div>
      </div>
    </div>
  );
}
