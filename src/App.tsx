import { useState } from 'react';
import {
  Sparkles,
  Wand2,
  Loader2,
  TrendingUp,
  Eye,
  MousePointerClick,
  Bell,
  Search,
} from 'lucide-react';
import Sidebar from '@/components/Sidebar';
import UploadArea from '@/components/UploadArea';
import ResultsPanel from '@/components/ResultsPanel';
import ChatbotWidget from '@/components/ChatbotWidget';
import { generateAssets } from '@/lib/generation';
import type { MarketingAsset, GenerationStatus } from '@/types';

const stats = [
  { label: 'Assets Generated', value: '1,284', icon: Sparkles, trend: '+12%' },
  { label: 'Total Reach', value: '482K', icon: Eye, trend: '+8.4%' },
  { label: 'Click Rate', value: '6.2%', icon: MousePointerClick, trend: '+1.1%' },
  { label: 'Engagement', value: '14.8K', icon: TrendingUp, trend: '+5.3%' },
];

export default function App() {
  const [activeNav, setActiveNav] = useState('create');
  const [image, setImage] = useState<string | null>(null);
  const [productName, setProductName] = useState('');
  const [assets, setAssets] = useState<MarketingAsset[]>([]);
  const [status, setStatus] = useState<GenerationStatus>('idle');

  const handleGenerate = () => {
    if (!image) return;
    setStatus('generating');
    setAssets([]);
    setTimeout(() => {
      setAssets(generateAssets(productName));
      setStatus('done');
    }, 2200);
  };

  return (
    <div className="flex min-h-screen bg-ink-950">
      {/* Ambient background glow */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-indigo-600/10 blur-[120px]" />
        <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-sky-500/5 blur-[100px]" />
      </div>

      <Sidebar active={activeNav} onNavigate={setActiveNav} />

      {/* Main content */}
      <div className="relative flex flex-1 flex-col">
        {/* Top bar */}
        <header className="sticky top-0 z-30 flex items-center gap-4 border-b border-white/[0.06] bg-ink-950/70 px-6 py-4 backdrop-blur-xl">
          <div>
            <h1 className="font-display text-xl font-extrabold tracking-tight text-white">
              Create Marketing Assets
            </h1>
            <p className="text-sm text-slate-500">
              Turn a single product photo into ready-to-post content
            </p>
          </div>

          <div className="ml-auto flex items-center gap-3">
            <div className="relative hidden md:block">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-600" />
              <input
                placeholder="Search..."
                className="w-56 rounded-lg border border-white/10 bg-ink-850 py-2 pl-9 pr-3 text-sm text-white placeholder-slate-600 outline-none transition-all focus:border-indigo-500/40 focus:ring-2 focus:ring-indigo-500/10"
              />
            </div>
            <button className="relative flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-ink-850 text-slate-400 transition-colors hover:text-white">
              <Bell className="h-[18px] w-[18px]" />
              <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-indigo-400" />
            </button>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-indigo-600 text-sm font-bold text-white">
              AK
            </div>
          </div>
        </header>

        {/* Scrollable area */}
        <main className="flex-1 overflow-y-auto px-6 py-6">
          {/* Stats */}
          <div className="mb-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="glass group rounded-xl p-4 transition-all duration-300 hover:border-white/10"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400 transition-transform group-hover:scale-110">
                      <Icon className="h-[18px] w-[18px]" />
                    </div>
                    <span className="text-xs font-semibold text-emerald-400">
                      {stat.trend}
                    </span>
                  </div>
                  <p className="mt-3 font-display text-2xl font-extrabold text-white">
                    {stat.value}
                  </p>
                  <p className="text-xs text-slate-500">{stat.label}</p>
                </div>
              );
            })}
          </div>

          {/* Main grid */}
          <div className="grid grid-cols-1 gap-6 xl:grid-cols-[400px_1fr]">
            {/* Left: upload + generate */}
            <div className="space-y-4">
              <UploadArea
                image={image}
                productName={productName}
                onImageChange={setImage}
                onProductNameChange={setProductName}
              />

              <button
                onClick={handleGenerate}
                disabled={!image || status === 'generating'}
                className="group relative flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-xl bg-gradient-to-r from-indigo-500 to-indigo-600 py-3.5 font-display text-sm font-bold text-white shadow-glow-sm transition-all duration-300 hover:shadow-glow disabled:cursor-not-allowed disabled:opacity-40 disabled:shadow-none"
              >
                {status === 'generating' ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Generating Assets...
                  </>
                ) : (
                  <>
                    <Wand2 className="h-5 w-5" />
                    Generate Marketing Assets
                  </>
                )}
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </button>

              {!image && (
                <p className="text-center text-xs text-slate-600">
                  Upload a product image to enable generation
                </p>
              )}
            </div>

            {/* Right: results */}
            <ResultsPanel assets={assets} status={status} />
          </div>
        </main>
      </div>

      {/* Floating chatbot */}
      <ChatbotWidget />
    </div>
  );
}
