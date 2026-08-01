"use client";

import {
  CalendarCheck,
  Contact,
  FileText,
  Gauge,
  Images,
  Megaphone,
  PenLine,
  Settings,
  Store,
  UserPlus,
} from "lucide-react";
import type { CmsNavView } from "@/types/cms";

const NAV: Array<{ id: CmsNavView; label: string; icon: typeof Gauge }> = [
  { id: "dashboard", label: "Dashboard", icon: Gauge },
  { id: "pages", label: "Pages", icon: FileText },
  { id: "manager", label: "Gestionnaire", icon: FileText },
  { id: "blog", label: "Blog", icon: PenLine },
  { id: "communiques", label: "Communiqués", icon: Megaphone },
  { id: "boutique", label: "Boutique", icon: Store },
  { id: "contacts", label: "Contacts", icon: Contact },
  { id: "inscriptions", label: "Inscriptions", icon: UserPlus },
  { id: "booking", label: "Booking & Events", icon: CalendarCheck },
  { id: "media", label: "Media Library", icon: Images },
];

export default function CmsSidebar({
  active,
  onNavigate,
}: {
  active: CmsNavView;
  onNavigate: (view: CmsNavView) => void;
}) {
  return (
    <aside className="cms-glass flex w-64 shrink-0 flex-col border-r border-slate-800/80">
      <div className="border-b border-slate-800/80 px-5 py-6">
        <div className="flex items-center gap-3">
          <div className="cms-shadow-gold flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#9C7A2E] via-[#D4AF37] to-[#FACC15]">
            <span className="text-sm font-extrabold text-[#0B0F19]">M</span>
          </div>
          <div>
            <div className="text-sm font-extrabold tracking-wide text-slate-50">
              MEDUC AHT
            </div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-[#FACC15]/80">
              Content Manager
            </div>
          </div>
        </div>
      </div>

      <nav className="cms-scrollbar flex-1 space-y-1 overflow-y-auto px-3 py-4">
        {NAV.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.id || (active === "editor" && item.id === "pages");
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onNavigate(item.id)}
              className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition hover:bg-white/5 hover:text-[#FACC15] ${
                isActive ? "cms-nav-active" : "text-slate-300"
              }`}
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </button>
          );
        })}
        <div className="mt-3 border-t border-slate-800/80 pt-3">
          <button
            type="button"
            onClick={() => onNavigate("settings")}
            className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition hover:bg-white/5 hover:text-[#FACC15] ${
              active === "settings" ? "cms-nav-active" : "text-slate-300"
            }`}
          >
            <Settings className="h-4 w-4" />
            Settings
          </button>
        </div>
      </nav>

      <div className="border-t border-slate-800/80 px-4 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-slate-700 to-slate-800 text-xs font-bold text-[#FACC15]">
            DG
          </div>
          <div className="text-xs">
            <div className="font-semibold text-slate-100">Direction Générale</div>
            <div className="text-slate-500">Éditeur principal</div>
          </div>
        </div>
      </div>
    </aside>
  );
}
