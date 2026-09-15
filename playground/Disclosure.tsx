'use client';
import React, { useState, useId } from 'react';

interface DisclosureProps {
  title: string;
  children: React.ReactNode;
}

export const Disclosure: React.FC<DisclosureProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = useId();

  return (
    <div className="border border-slate-800 rounded-xl overflow-hidden bg-slate-900">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full px-4 py-3 flex justify-between items-center text-sm font-medium text-slate-200 hover:bg-slate-800/60 transition"
      >
        <span>{title}</span>
        <span className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>

      {isOpen && (
        <div id={panelId} className="p-4 border-t border-slate-800 text-sm text-slate-300">
          {children}
        </div>
      )}
    </div>
  );
};