import React from 'react';

/** Cute cat - round face, triangle ears, whiskers */
export const CuteCat: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none" className={className} aria-hidden>
    <path d="M20 8c-7 0-12 5-12 12 0 4 2 7 5 9v6h14v-6c3-2 5-5 5-9 0-7-5-12-12-12z" fill="currentColor" opacity="0.9"/>
    <path d="M12 6l3 4h-3l-2-3 2-1zM28 6l-3 4h3l2-3-2-1z" fill="currentColor"/>
    <circle cx="15" cy="16" r="2" fill="currentColor"/>
    <circle cx="25" cy="16" r="2" fill="currentColor"/>
    <path d="M18 22h4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    <path d="M10 18l-2 1M30 18l2 1M11 22l-1.5 1M29 22l1.5 1" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round"/>
  </svg>
);

/** Cute dog - round face, floppy ear, friendly look */
export const CuteDog: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none" className={className} aria-hidden>
    <path d="M22 6c-5 0-9 3-10 8l-5 9v6c0 3 2 5 5 6l2 6h4l2-6c3-1 5-3 5-6v-6l-5-9c-1-5-5-8-10-8z" fill="currentColor" opacity="0.9"/>
    <path d="M8 12c-1 2-1 4 0 6v2l2-1 1-4-2-4-1 1z" fill="currentColor" opacity="0.7"/>
    <circle cx="17" cy="16" r="2" fill="currentColor"/>
    <circle cx="24" cy="16" r="2" fill="currentColor"/>
    <path d="M19 22c.5.4 1.2.4 1.6 0" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
  </svg>
);

/** Paw print */
export const PawPrint: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 28 28" fill="none" className={className} aria-hidden>
    <ellipse cx="14" cy="18" rx="5" ry="4" fill="currentColor" opacity="0.8"/>
    <circle cx="9" cy="11" r="3" fill="currentColor" opacity="0.8"/>
    <circle cx="19" cy="11" r="3" fill="currentColor" opacity="0.8"/>
    <circle cx="12" cy="6" r="2.5" fill="currentColor" opacity="0.8"/>
    <circle cx="16" cy="6" r="2.5" fill="currentColor" opacity="0.8"/>
  </svg>
);

/** Small bone - for treats / play */
export const Bone: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 10" fill="none" className={className} aria-hidden>
    <path d="M5 5c0-2.2 1.6-4 4-4s4 1.8 4 4c0 1.2-.4 2-1.2 2.8.8.8 1.2 1.6 1.2 2.8 0 2.2-1.6 4-4 4s-4-1.8-4-4c0-1.2.4-2 1.2-2.8C5.4 7 5 6.2 5 5z" fill="currentColor" opacity="0.75"/>
  </svg>
);

export default { CuteCat, CuteDog, PawPrint, Bone };
