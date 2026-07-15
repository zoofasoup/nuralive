"use client";

import { useEffect, useState } from "react";

const BUYERS = [
  { name: "Budi", city: "Jakarta", time: "2 menit", product: "Paket Keluarga" },
  { name: "Siti", city: "Surabaya", time: "5 menit", product: "Paket Pemula" },
  { name: "Andi", city: "Bandung", time: "12 menit", product: "Paket Hemat" },
  { name: "Rina", city: "Medan", time: "25 menit", product: "Paket Hemat" },
  { name: "Agus", city: "Semarang", time: "1 jam", product: "Paket Keluarga" },
  { name: "Fitri", city: "Makassar", time: "3 jam", product: "Paket Pemula" },
  { name: "Deni", city: "Yogyakarta", time: "5 jam", product: "Paket Keluarga" },
  { name: "Maya", city: "Denpasar", time: "baru saja", product: "Paket Hemat" },
  { name: "Hendra", city: "Malang", time: "15 menit", product: "Paket Keluarga" },
  { name: "Putri", city: "Palembang", time: "10 menit", product: "Paket Pemula" },
];

export default function RecentSalesPopup() {
  const [currentBuyer, setCurrentBuyer] = useState(BUYERS[0]);
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    let timeoutId: NodeJS.Timeout;

    const scheduleNextPopup = () => {
      // Pick random buyer
      const randomBuyer = BUYERS[Math.floor(Math.random() * BUYERS.length)];
      setCurrentBuyer(randomBuyer);

      // Show popup
      setIsVisible(true);

      // Hide after 5 seconds
      timeoutId = setTimeout(() => {
        setIsVisible(false);

        // Schedule next popup after 10-20 seconds
        const nextDelay = 10000 + Math.random() * 10000;
        timeoutId = setTimeout(scheduleNextPopup, nextDelay);
      }, 5000);
    };

    // Initial delay before first popup
    timeoutId = setTimeout(scheduleNextPopup, 3000);

    return () => clearTimeout(timeoutId);
  }, []);

  // Only render on client to avoid hydration mismatch
  if (!isMounted) return null;

  return (
    <div
      className={`fixed bottom-4 left-4 z-50 max-w-[280px] rounded-lg border border-line bg-paper p-3 shadow-xl transition-all duration-700 sm:bottom-6 sm:left-6 sm:max-w-xs ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-10 opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-leaf/10 text-leaf">
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div>
          <p className="text-xs text-ink-soft">
            <span className="font-bold text-ink">{currentBuyer.name}</span> di {currentBuyer.city}
          </p>
          <p className="mt-0.5 text-sm font-bold text-ink leading-tight">
            Baru saja membeli {currentBuyer.product}
          </p>
          <p className="mt-1 text-[10px] font-medium text-ink-soft/70">
            {currentBuyer.time} yang lalu
          </p>
        </div>
      </div>
    </div>
  );
}
