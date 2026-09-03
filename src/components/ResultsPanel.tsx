import { useState } from 'react';
import { Instagram, Linkedin, Mail, Copy, Check, Sparkles } from 'lucide-react';
import type { MarketingAsset, GenerationStatus } from '@/types';

interface ResultsPanelProps {
  assets: MarketingAsset[];
  status: GenerationStatus;
}

const iconMap = {
  instagram: Instagram,
  linkedin: Linkedin,
  email: Mail,
};

const accentMap = {
  instagram: 'from-pink-500/20 to-orange-500/10 text-pink-400 border-pink-500/20',
  linkedin: 'from-sky-500/20 to-blue-500/10 text-sky-400 border-sky-500/20',
  email: 'from-emerald-500/20 to-teal-500/10 text-emerald-400 border-emerald-500/20',
};

function AssetCard({ asset, index }: { asset: MarketingAsset; index: number }) {
  const [copied, setCopied] = useState(false);
  const Icon = iconMap[asset.type];

  const handleCopy = () => {
    navigator.clipboard.writeText(asset.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="animate-fade-in-up glass rounded-xl p-4 transition-all duration-300 hover:border-white/10"
      style={{ animationDelay: `${index * 120}ms` }}
    >
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div
            className={`flex h-9 w-9 items-center justify-center rounded-lg border bg-gradient-to-br ${accentMap[asset.type]}`}
          >
            <Icon className="h-[18px] w-[18px]" />
          </div>
          <span className="font-display text-sm font-bold text-white">
            {asset.label}
          </span>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 rounded-lg border border-white/10 px-2.5 py-1.5 text-xs font-medium text-slate-400 transition-all hover:border-indigo-500/40 hover:text-white"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5 text-emerald-400" />
              Copied
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" />
              Copy
            </>
          )}
        </button>
      </div>
      <div className="max-h-64 overflow-y-auto whitespace-pre-wrap rounded-lg bg-ink-950/50 p-3.5 text-sm leading-relaxed text-slate-300">
        {asset.content}
      </div>
    </div>
  );
}

function GeneratingSkeleton() {
  return (
    <div className="space-y-4">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="shimmer glass rounded-xl p-4"
          style={{ animationDelay: `${i * 150}ms` }}
        >
          <div className="mb-3 flex items-center gap-2.5">
            <div className="h-9 w-9 rounded-lg bg-white/5" />
            <div className="h-4 w-28 rounded bg-white/5" />
          </div>
          <div className="space-y-2">
            <div className="h-3 w-full rounded bg-white/5" />
            <div className="h-3 w-11/12 rounded bg-white/5" />
            <div className="h-3 w-9/12 rounded bg-white/5" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function ResultsPanel({ assets, status }: ResultsPanelProps) {
  return (
    <div className="glass rounded-2xl p-5">
      <div className="mb-4 flex items-center gap-2">
        <Sparkles className="h-5 w-5 text-indigo-400" />
        <h2 className="font-display text-lg font-bold text-white">
          Generated Assets
        </h2>
        {status === 'done' && (
          <span className="ml-auto flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-400">
            <Check className="h-3 w-3" />
            Ready
          </span>
        )}
      </div>

      {status === 'idle' && (
        <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-white/10 py-16 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5">
            <Sparkles className="h-6 w-6 text-slate-600" />
          </div>
          <p className="mt-4 text-sm font-medium text-slate-400">
            Your marketing assets will appear here
          </p>
          <p className="mt-1 text-xs text-slate-600">
            Upload a product image and click Generate to begin
          </p>
        </div>
      )}

      {status === 'generating' && <GeneratingSkeleton />}

      {status === 'done' && (
        <div className="space-y-4">
          {assets.map((asset, i) => (
            <AssetCard key={asset.type} asset={asset} index={i} />
          ))}
        </div>
      )}
    </div>
  );
}
