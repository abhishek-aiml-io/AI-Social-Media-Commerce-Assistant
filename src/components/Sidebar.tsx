import {
  LayoutDashboard,
  ImagePlus,
  Sparkles,
  BarChart3,
  Settings,
  HelpCircle,
  LifeBuoy,
  Zap,
} from 'lucide-react';

interface SidebarProps {
  active: string;
  onNavigate: (item: string) => void;
}

const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'create', label: 'Create Assets', icon: ImagePlus },
  { id: 'campaigns', label: 'Campaigns', icon: Sparkles },
  { id: 'analytics', label: 'Analytics', icon: BarChart3 },
];

const bottomItems = [
  { id: 'settings', label: 'Settings', icon: Settings },
  { id: 'help', label: 'Help Center', icon: HelpCircle },
  { id: 'support', label: 'Support', icon: LifeBuoy },
];

export default function Sidebar({ active, onNavigate }: SidebarProps) {
  return (
    <aside className="hidden lg:flex w-64 shrink-0 flex-col border-r border-white/[0.06] bg-ink-900/60 backdrop-blur-xl">
      {/* Brand */}
      <div className="flex items-center gap-3 px-6 py-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-600 shadow-glow-sm">
          <Zap className="h-5 w-5 text-white" fill="white" />
        </div>
        <div>
          <p className="font-display text-base font-extrabold tracking-tight text-white">
            CommerceAI
          </p>
          <p className="text-[11px] font-medium uppercase tracking-wider text-indigo-400/80">
            Marketing Suite
          </p>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-2">
        <p className="px-3 pb-2 pt-4 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
          Menu
        </p>
        <ul className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = active === item.id;
            return (
              <li key={item.id}>
                <button
                  onClick={() => onNavigate(item.id)}
                  className={`group flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-indigo-500/10 text-white'
                      : 'text-slate-400 hover:bg-white/[0.04] hover:text-slate-200'
                  }`}
                >
                  <Icon
                    className={`h-[18px] w-[18px] transition-colors ${
                      isActive
                        ? 'text-indigo-400'
                        : 'text-slate-500 group-hover:text-slate-300'
                    }`}
                  />
                  {item.label}
                  {isActive && (
                    <span className="ml-auto h-1.5 w-1.5 rounded-full bg-indigo-400" />
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Bottom */}
      <div className="px-3 pb-3">
        <ul className="space-y-1">
          {bottomItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.id}>
                <button
                  onClick={() => onNavigate(item.id)}
                  className="group flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-500 transition-all hover:bg-white/[0.04] hover:text-slate-300"
                >
                  <Icon className="h-[18px] w-[18px] text-slate-600 group-hover:text-slate-400" />
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>

        {/* Upgrade card */}
        <div className="mt-4 overflow-hidden rounded-xl border border-indigo-500/20 bg-gradient-to-br from-indigo-500/10 to-transparent p-4">
          <p className="font-display text-sm font-bold text-white">
            Upgrade to Pro
          </p>
          <p className="mt-1 text-xs leading-relaxed text-slate-400">
            Unlock unlimited asset generation and brand voice tuning.
          </p>
          <button className="mt-3 w-full rounded-lg bg-indigo-500 py-2 text-xs font-semibold text-white transition-all hover:bg-indigo-400">
            Upgrade
          </button>
        </div>
      </div>
    </aside>
  );
}
