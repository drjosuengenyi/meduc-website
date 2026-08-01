"use client";

import { useEffect } from "react";
import { CheckCircle2 } from "lucide-react";

export type ToastItem = { id: string; message: string };

export default function CmsToastHost({
  toasts,
  onDismiss,
}: {
  toasts: ToastItem[];
  onDismiss: (id: string) => void;
}) {
  useEffect(() => {
    if (toasts.length === 0) return;
    const timers = toasts.map((t) =>
      window.setTimeout(() => onDismiss(t.id), 2600),
    );
    return () => timers.forEach(clearTimeout);
  }, [toasts, onDismiss]);

  return (
    <div className="fixed bottom-6 right-6 z-50 space-y-2">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="cms-toast cms-glass cms-shadow-gold flex items-center gap-2 rounded-lg border border-[rgba(212,175,55,0.3)] px-4 py-3 text-sm text-slate-100"
        >
          <CheckCircle2 className="h-4 w-4 text-[#FACC15]" />
          <span>{toast.message}</span>
        </div>
      ))}
    </div>
  );
}
