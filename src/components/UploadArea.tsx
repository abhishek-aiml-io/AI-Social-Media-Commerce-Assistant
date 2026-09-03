import { useRef, useState, useCallback } from 'react';
import { UploadCloud, X, ImageIcon } from 'lucide-react';

interface UploadAreaProps {
  image: string | null;
  productName: string;
  onImageChange: (image: string | null) => void;
  onProductNameChange: (name: string) => void;
}

export default function UploadArea({
  image,
  productName,
  onImageChange,
  onProductNameChange,
}: UploadAreaProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFile = useCallback(
    (file: File | undefined) => {
      if (!file || !file.type.startsWith('image/')) return;
      const reader = new FileReader();
      reader.onload = (e) => onImageChange(e.target?.result as string);
      reader.readAsDataURL(file);
    },
    [onImageChange],
  );

  return (
    <div className="glass rounded-2xl p-5">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h2 className="font-display text-lg font-bold text-white">
            Product Image
          </h2>
          <p className="text-sm text-slate-500">
            Upload a photo to generate marketing assets
          </p>
        </div>
      </div>

      {!image ? (
        <div
          onDragOver={(e) => {
            e.preventDefault();
            setIsDragging(true);
          }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={(e) => {
            e.preventDefault();
            setIsDragging(false);
            handleFile(e.dataTransfer.files?.[0]);
          }}
          onClick={() => inputRef.current?.click()}
          className={`group relative flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed px-6 py-12 text-center transition-all duration-300 ${
            isDragging
              ? 'border-indigo-400 bg-indigo-500/10 scale-[1.01]'
              : 'border-white/10 hover:border-indigo-500/40 hover:bg-white/[0.02]'
          }`}
        >
          <div
            className={`flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-300 ${
              isDragging
                ? 'bg-indigo-500 text-white scale-110'
                : 'bg-white/5 text-indigo-400 group-hover:scale-105'
            }`}
          >
            <UploadCloud className="h-7 w-7" />
          </div>
          <p className="mt-4 text-sm font-semibold text-slate-200">
            {isDragging
              ? 'Drop your image here'
              : 'Drag & drop or click to upload'}
          </p>
          <p className="mt-1 text-xs text-slate-500">
            PNG, JPG up to 10MB — 1:1 recommended
          </p>
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => handleFile(e.target.files?.[0])}
          />
        </div>
      ) : (
        <div className="animate-fade-in-up">
          <div className="relative overflow-hidden rounded-xl border border-white/10 bg-ink-850">
            <img
              src={image}
              alt="Product preview"
              className="h-56 w-full object-contain bg-[repeating-conic-gradient(#1c1e2e_0%_25%,#161724_0%_50%)] bg-[length:20px_20px]"
            />
            <button
              onClick={() => onImageChange(null)}
              className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-lg bg-black/60 text-slate-300 backdrop-blur-md transition-all hover:bg-red-500/80 hover:text-white"
              aria-label="Remove image"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="mt-4">
            <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-500">
              Product Name
            </label>
            <div className="relative">
              <ImageIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
              <input
                value={productName}
                onChange={(e) => onProductNameChange(e.target.value)}
                placeholder="e.g. Aurora Wireless Earbuds"
                className="w-full rounded-lg border border-white/10 bg-ink-850 py-2.5 pl-10 pr-3 text-sm text-white placeholder-slate-600 outline-none transition-all focus:border-indigo-500/50 focus:ring-2 focus:ring-indigo-500/20"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
