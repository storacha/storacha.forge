"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

export default function TrustedBySection() {
  const partners = [
    { name: "Harvard", logo: "/forge/partners/harvard.png" },
    { name: "Filecoin", logo: "/forge/partners/filecoin.png" },
    { name: "Solana", logo: "/forge/partners/solana.png" },
    { name: "Infura", logo: "/forge/partners/infura.png" },
    { name: "Parasail", logo: "/forge/partners/parasail.png" },
  ];

  const allPartners = [...partners, ...partners];

  const mobileRef = useRef<HTMLDivElement>(null);
  const desktopRef = useRef<HTMLDivElement>(null);

  const setupScroll = (ref: React.RefObject<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;

    const half = el.scrollWidth / 2;

    el.style.setProperty("--scroll-width", `-${half}px`);
    el.style.setProperty("--duration", `${half / 40}s`);
  };

  useEffect(() => {
    setupScroll(mobileRef);
    setupScroll(desktopRef);
  }, []);

  return (
    <section className="bg-white border-t border-gray-200 overflow-hidden">
      <div className="container-custom py-6">
        
        {/* ---------- MOBILE ---------- */}
        <div className="flex flex-col items-center gap-4 md:hidden">
          <div className="bg-white border-2 border-[#0176CE] rounded-full px-4 py-2">
            <p className="font-dm-sans font-medium text-[#0176CE] text-base">
              Trusted By
            </p>
          </div>

          <div className="relative overflow-hidden w-full">
            <div ref={mobileRef} className="flex animate-logo-loop">
              {allPartners.map((p, i) => (
                <div key={i} className="flex items-center justify-center flex-shrink-0 px-6">
                  <Image
                    src={p.logo}
                    alt={p.name}
                    width={120}
                    height={30}
                    className="h-5 w-auto opacity-90"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ---------- DESKTOP ---------- */}
        <div className="hidden md:flex items-center gap-10">
          <div className="bg-white border-2 border-[#0176CE] rounded-full px-5 py-2.5 shrink-0">
            <p className="font-dm-sans font-medium text-[#0176CE] text-xl">
              Trusted By
            </p>
          </div>

          <div className="relative overflow-hidden w-full">
            <div ref={desktopRef} className="flex animate-logo-loop">
              {allPartners.map((p, i) => (
                <div key={i} className="flex items-center justify-center flex-shrink-0 px-10">
                  <Image
                    src={p.logo}
                    alt={p.name}
                    width={150}
                    height={36}
                    className="h-8 w-auto opacity-90"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
