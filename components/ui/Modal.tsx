"use client";

import { useEffect, useRef } from "react";
import { X } from "lucide-react";

/** Minimal accessible dialog built on the native <dialog> element. */
export function Modal({
  open,
  onClose,
  title,
  closeLabel,
  children,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  closeLabel: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => {
        // click on the backdrop closes
        if (e.target === ref.current) onClose();
      }}
      className="w-[min(92vw,44rem)] rounded-3xl border border-line bg-surface p-0 text-ink shadow-2xl backdrop:bg-navy/70 backdrop:backdrop-blur-sm"
    >
      <div className="flex items-center justify-between gap-4 border-b border-line px-5 py-4 sm:px-6">
        <h3 className="font-display text-lg font-semibold">{title}</h3>
        <button
          type="button"
          onClick={onClose}
          aria-label={closeLabel}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line text-muted hover:border-teal hover:text-teal"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
      <div className="p-5 sm:p-6">{children}</div>
    </dialog>
  );
}
