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
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroller = scrollRef.current;
    if (!scroller) return;

    const el = scroller as HTMLDivElement;
    const half = el.scrollWidth / 2;

    el.style.setProperty("--scroll-width", `-${half}px`);
    el.style.setProperty("--duration", `${half / 40}s`);
  }, []);

  return (
    <section className="bg-white border-t border-gray-200 overflow-hidden">
      <div className="container-custom py-6">
        <div className="flex items-center gap-4 sm:gap-6 md:gap-10">
          {/* Responsive Trusted By Badge */}

          <div className="bg-white border-2 border-[#0176CE] rounded-full px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 shrink-0">
            <p className="font-dm-sans font-medium text-[#0176CE] text-sm sm:text-base md:text-xl">
              Trusted By
            </p>
          </div>

          {/* Infinite Scroll */}
          <div className="relative overflow-hidden w-full">
            <div ref={scrollRef} className="flex animate-logo-loop">
              {allPartners.map((p, index) => (
                <div
                  key={`${p.name}-${index}`}
                  className="
                    flex items-center justify-center flex-shrink-0
                    px-4 sm:px-6 md:px-10
                  "
                >
                  <Image
                    src={p.logo}
                    alt={p.name}
                    width={150}
                    height={36}
                    className="
                      opacity-90 hover:opacity-100 transition-opacity duration-300
                      h-4 sm:h-6 md:h-8 w-auto
                    "
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
