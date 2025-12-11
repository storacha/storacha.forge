"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import {
  calculateAnnualCosts,
  calculateBarHeights,
} from "@/lib/cost-calculator";

export default function CostComparisonSection() {
  const [storage_TiB, setStorage_TiB] = useState(100);
  const [egress_percent, setEgress_percent] = useState(5);
  const [screenSize, setScreenSize] = useState<"mobile" | "tablet" | "desktop">(
    "desktop"
  );

  useEffect(() => {
    const updateScreenSize = () => {
      if (window.innerWidth < 768) {
        setScreenSize("mobile");
      } else if (window.innerWidth < 1024) {
        setScreenSize("tablet");
      } else {
        setScreenSize("desktop");
      }
    };

    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  const costs = calculateAnnualCosts(storage_TiB, egress_percent);
  const chartData = calculateBarHeights(costs);

  const competitors = [
    {
      name: "Storacha Forge",
      logo: "/forge/cost-comparison/forge.svg",
      storage: "$5.99",
      storageNote: "per TiB/month",
      egress: "$10",
      egressNote: "per TiB/month",
      ownership: true,
      verifiability: true,
      highlight: true,
    },
    {
      name: "Google Nearline",
      logo: "/forge/cost-comparison/nearline.svg",
      storage: "$10.24",
      storageNote: "per TiB/month",
      egress: "$100",
      egressNote: "per TiB/month",
      ownership: false,
      verifiability: false,
    },
    {
      name: "AWS S3 Standard-IA",
      logo: "/forge/cost-comparison/aws.svg",
      storage: "$12.80",
      storageNote: "per TiB/month",
      egress: "$90",
      egressNote: "per TiB/month",
      ownership: false,
      verifiability: false,
    },
  ];

  return (
    <section
      id="comparison"
      className="bg-[#C5DFFD] py-4 sm:py-6 md:py-10 lg:py-16 xl:py-20"
    >
      <div className="container-custom px-2 sm:px-3 md:px-4 lg:px-6">
        <div className="space-y-3 sm:space-y-4 md:space-y-8 lg:space-y-12 xl:space-y-16">
          {/* Title */}
          <div className="text-center">
            <h2 className="font-epilogue font-medium text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl 2xl:text-[72px] text-[#0176CE] tracking-tight md:tracking-[-1.5px] lg:tracking-[-2.88px]">
              Cost Comparison
            </h2>
          </div>

          {/* Comparison Table - NO SCROLL, scales to fit */}
          <div className="w-full rounded-[8px] sm:rounded-xl md:rounded-2xl lg:rounded-3xl overflow-hidden shadow-sm">
            {/* Table Header - White background per design */}
            <div className="bg-white grid grid-cols-[1.8fr_1fr_1fr_0.9fr_0.9fr] items-center">
              <div className="p-1 xs:p-1.5 sm:p-2 md:p-3 lg:p-4 xl:p-6">
                <span className="font-dm-sans font-medium text-[#0176CE] text-[7px] xs:text-[8px] sm:text-[10px] md:text-sm lg:text-base xl:text-xl">
                  Provider
                </span>
              </div>
              <div className="p-1 xs:p-1.5 sm:p-2 md:p-3 lg:p-4 xl:p-6 text-center">
                <span className="font-dm-sans font-medium text-[#0176CE] text-[7px] xs:text-[8px] sm:text-[10px] md:text-sm lg:text-base xl:text-xl">
                  Storage Cost
                </span>
              </div>
              <div className="p-1 xs:p-1.5 sm:p-2 md:p-3 lg:p-4 xl:p-6 text-center">
                <span className="font-dm-sans font-medium text-[#0176CE] text-[7px] xs:text-[8px] sm:text-[10px] md:text-sm lg:text-base xl:text-xl">
                  Egress Cost
                </span>
              </div>
              <div className="p-1 xs:p-1.5 sm:p-2 md:p-3 lg:p-4 xl:p-6 text-center">
                <span className="font-dm-sans font-medium text-[#0176CE] text-[6px] xs:text-[7px] sm:text-[9px] md:text-xs lg:text-sm xl:text-lg">
                  Data Ownership
                </span>
              </div>
              <div className="p-1 xs:p-1.5 sm:p-2 md:p-3 lg:p-4 xl:p-6 text-center">
                <span className="font-dm-sans font-medium text-[#0176CE] text-[6px] xs:text-[7px] sm:text-[9px] md:text-xs lg:text-sm xl:text-lg">
                  Verifiability
                </span>
              </div>
            </div>

            {/* Table Body */}
            {competitors.map((comp) => (
              <div
                key={comp.name}
                className={`grid grid-cols-[1.8fr_1fr_1fr_0.9fr_0.9fr] items-center ${
                  comp.highlight
                    ? "bg-[#E8F4FD] text-[#0176CE]"
                    : "bg-white text-[#0176CE]"
                }`}
              >
                {/* Provider */}
                <div className="p-1 xs:p-1.5 sm:p-2 md:p-3 lg:p-4 xl:p-6">
                  <div className="flex items-center gap-0.5 xs:gap-1 sm:gap-1.5 md:gap-2 lg:gap-3">
                    <Image
                      src={comp.logo}
                      alt={comp.name}
                      width={28}
                      height={28}
                      className="w-2.5 h-2.5 xs:w-3 xs:h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-8 xl:h-8 flex-shrink-0"
                    />
                    <span className="font-dm-sans font-semibold text-[6px] xs:text-[7px] sm:text-[9px] md:text-xs lg:text-sm xl:text-lg truncate">
                      {comp.name}
                    </span>
                  </div>
                </div>

                {/* Storage Cost */}
                <div className="p-1 xs:p-1.5 sm:p-2 md:p-3 lg:p-4 xl:p-6 text-center">
                  <div className="font-dm-sans font-bold text-[7px] xs:text-[8px] sm:text-[10px] md:text-sm lg:text-base xl:text-xl">
                    {comp.storage}
                  </div>
                  <div
                    className={`font-dm-sans text-[5px] xs:text-[6px] sm:text-[7px] md:text-[9px] lg:text-xs xl:text-sm text-[#0176CE]/70`}
                  >
                    {comp.storageNote}
                  </div>
                </div>

                {/* Egress Cost */}
                <div className="p-1 xs:p-1.5 sm:p-2 md:p-3 lg:p-4 xl:p-6 text-center">
                  <div className="font-dm-sans font-bold text-[7px] xs:text-[8px] sm:text-[10px] md:text-sm lg:text-base xl:text-xl">
                    {comp.egress}
                  </div>
                  <div className="font-dm-sans text-[5px] xs:text-[6px] sm:text-[7px] md:text-[9px] lg:text-xs xl:text-sm text-[#0176CE]/70">
                    {comp.egressNote}
                  </div>
                </div>

                {/* Data Ownership - Replace with your SVG */}
                <div className="p-1 xs:p-1.5 sm:p-2 md:p-3 lg:p-4 xl:p-6 flex justify-center">
                  {comp.ownership ? (
                    <div className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-8 xl:h-8 rounded-full bg-green-500 flex items-center justify-center">
                      <span className="text-white text-[6px] xs:text-[7px] sm:text-[8px] md:text-[10px] lg:text-xs xl:text-sm font-bold">
                        ✓
                      </span>
                    </div>
                  ) : (
                    <span className="text-red-500 text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-xl xl:text-2xl font-bold">
                      ✕
                    </span>
                  )}
                </div>

                {/* Verifiability - Replace with your SVG */}
                <div className="p-1 xs:p-1.5 sm:p-2 md:p-3 lg:p-4 xl:p-6 flex justify-center">
                  {comp.verifiability ? (
                    <div className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-8 xl:h-8 rounded-full bg-green-500 flex items-center justify-center">
                      <span className="text-white text-[6px] xs:text-[7px] sm:text-[8px] md:text-[10px] lg:text-xs xl:text-sm font-bold">
                        ✓
                      </span>
                    </div>
                  ) : (
                    <span className="text-red-500 text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-xl xl:text-2xl font-bold">
                      ✕
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Bar Chart and Calculator Section - ALWAYS SIDE BY SIDE */}
          <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 lg:gap-8 xl:gap-12 items-stretch">
            {/* LEFT: Bar Chart */}
            <div className="bg-white rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl border border-[#0176CE]/20 sm:border-2 p-1.5 sm:p-2 md:p-3 lg:p-6 xl:p-8 flex flex-col justify-between">
              <div className="flex-1 flex items-end justify-center gap-0.5 sm:gap-1 md:gap-2 lg:gap-4 xl:gap-6 px-0.5 min-h-[120px] sm:min-h-[160px] md:min-h-[220px] lg:min-h-[300px] xl:min-h-[380px]">
                {chartData.map((item) => (
                  <div
                    key={item.company}
                    className="flex flex-col items-center justify-end w-[32px] xs:w-[38px] sm:w-[45px] md:w-[52px] lg:w-[65px] xl:w-[70px]"
                  >
                    <p
                      className={`font-dm-sans ${
                        item.highlight
                          ? "font-extrabold text-[6px] xs:text-[7px] sm:text-[8px] md:text-[10px] lg:text-sm xl:text-base 2xl:text-lg"
                          : "font-medium text-[5px] xs:text-[6px] sm:text-[7px] md:text-[9px] lg:text-xs xl:text-sm 2xl:text-base"
                      } text-[#0176CE] mb-0.5 sm:mb-1 md:mb-1.5 lg:mb-2 whitespace-nowrap`}
                    >
                      ${item.cost.toLocaleString()}/yr
                    </p>
                    <div
                      className={`w-full rounded-t-md sm:rounded-t-lg md:rounded-t-xl transition-all duration-300 ${
                        item.highlight
                          ? "bg-[#0176CE]"
                          : "bg-gradient-to-b from-white via-[#aedcff] to-[#0176CE]"
                      }`}
                      style={{ height: `${item.height[screenSize]}px` }}
                    />
                    <Image
                      src={item.logo}
                      alt={item.company}
                      width={40}
                      height={40}
                      className="mt-0.5 sm:mt-1 md:mt-1.5 lg:mt-2 xl:mt-3 w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 xl:w-9 xl:h-9 object-contain"
                    />
                  </div>
                ))}
              </div>
              <p className="text-[#0176CE] text-[5px] xs:text-[6px] sm:text-[7px] md:text-[8px] lg:text-xs xl:text-sm text-center mt-1 sm:mt-2 md:mt-3 lg:mt-4">
                *For {storage_TiB} TiB storage and{" "}
                {((storage_TiB * egress_percent) / 100).toFixed(1)}TiB monthly
                egress
              </p>
            </div>

            {/* RIGHT: Calculator */}
            <div className="flex flex-col gap-1.5 sm:gap-2 md:gap-3 lg:gap-4 xl:gap-6">
              {/* Savings Box */}
              <div className="bg-white rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl border border-[#0176CE]/20 sm:border-2 shadow-sm sm:shadow-[0_4px_16px_rgba(1,118,206,0.08)] md:shadow-[0_8px_24px_rgba(1,118,206,0.12)] p-1.5 sm:p-2 md:p-3 lg:p-4 xl:p-6 2xl:p-8">
                <div className="flex items-center justify-between gap-1 sm:gap-1.5 md:gap-2 lg:gap-3 xl:gap-4">
                  <div className="flex-1 min-w-0">
                    <p className="text-[#0176CE] text-[6px] xs:text-[7px] sm:text-[8px] md:text-[9px] lg:text-xs xl:text-sm 2xl:text-base font-dm-sans mb-0.5 truncate">
                      Total Annual Savings
                    </p>
                    <p className="font-epilogue font-bold text-[11px] xs:text-xs sm:text-sm md:text-base lg:text-xl xl:text-2xl 2xl:text-4xl text-[#0176CE] truncate">
                      ${Math.round(costs.annual_savings).toLocaleString()}
                    </p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="text-[#0176CE]/70 text-[6px] xs:text-[7px] sm:text-[8px] md:text-[9px] lg:text-xs font-dm-sans mb-0.5">
                      Up to
                    </p>
                    <p className="font-epilogue font-bold text-[11px] xs:text-xs sm:text-sm md:text-base lg:text-xl xl:text-2xl 2xl:text-4xl text-[#0176CE]">
                      {Math.round(costs.savings_percent)}%
                    </p>
                    <p className="text-[#0089F0] text-[6px] xs:text-[7px] sm:text-[8px] md:text-[9px] lg:text-xs xl:text-sm 2xl:text-base font-dm-sans font-semibold">
                      cheaper
                    </p>
                  </div>
                </div>
              </div>

              {/* Sliders */}
              <div className="space-y-1.5 sm:space-y-2 md:space-y-3 lg:space-y-4 xl:space-y-6">
                {/* Storage Slider */}
                <div>
                  <div className="flex justify-between items-center mb-1 sm:mb-1.5 md:mb-2">
                    <label className="font-dm-sans font-bold text-[#0176CE] text-[6px] xs:text-[7px] sm:text-[8px] md:text-[9px] lg:text-xs xl:text-sm 2xl:text-base uppercase tracking-wider flex-1 min-w-0 truncate">
                      Storage Amount
                    </label>
                    <div className="bg-white border border-[#0176CE] sm:border-2 rounded-full px-1 py-0.5 sm:px-1.5 sm:py-0.5 md:px-2 md:py-0.5 lg:px-3 lg:py-1 xl:px-4 xl:py-1.5 flex-shrink-0 ml-1">
                      <span className="font-dm-sans font-bold text-[#0176CE] text-[7px] xs:text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs xl:text-sm 2xl:text-base whitespace-nowrap">
                        {storage_TiB.toLocaleString()} TiB
                      </span>
                    </div>
                  </div>
                  <input
                    type="range"
                    min="100"
                    max="10000"
                    step="100"
                    value={storage_TiB}
                    onChange={(e) => setStorage_TiB(Number(e.target.value))}
                    className="w-full h-1 sm:h-1.5 md:h-2 lg:h-2.5 xl:h-3 rounded-lg appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, #0176CE 0%, #0176CE ${
                        ((storage_TiB - 100) / (10000 - 100)) * 100
                      }%, #C5DFFD ${
                        ((storage_TiB - 100) / (10000 - 100)) * 100
                      }%, #C5DFFD 100%)`,
                    }}
                  />
                  <div className="flex justify-between text-[5px] xs:text-[6px] sm:text-[7px] md:text-[8px] lg:text-[9px] xl:text-xs text-[#0176CE]/60 mt-0.5">
                    <span>100</span>
                    <span>10,000</span>
                  </div>
                </div>

                {/* Egress Slider */}
                <div>
                  <div className="flex justify-between items-center mb-1 sm:mb-1.5 md:mb-2">
                    <label className="font-dm-sans font-bold text-[#0176CE] text-[6px] xs:text-[7px] sm:text-[8px] md:text-[9px] lg:text-xs xl:text-sm 2xl:text-base uppercase tracking-wider flex-1 min-w-0 truncate">
                      Percent Download/Mo
                    </label>
                    <div className="bg-white border border-[#0176CE] sm:border-2 rounded-full px-1 py-0.5 sm:px-1.5 sm:py-0.5 md:px-2 md:py-0.5 lg:px-3 lg:py-1 xl:px-4 xl:py-1.5 flex-shrink-0 ml-1">
                      <span className="font-dm-sans font-bold text-[#0176CE] text-[7px] xs:text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs xl:text-sm 2xl:text-base">
                        {egress_percent}%
                      </span>
                    </div>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    step="1"
                    value={egress_percent}
                    onChange={(e) => setEgress_percent(Number(e.target.value))}
                    className="w-full h-1 sm:h-1.5 md:h-2 lg:h-2.5 xl:h-3 rounded-lg appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, #0176CE 0%, #0176CE ${egress_percent}%, #C5DFFD ${egress_percent}%, #C5DFFD 100%)`,
                    }}
                  />
                  <div className="flex justify-between text-[5px] xs:text-[6px] sm:text-[7px] md:text-[8px] lg:text-[9px] xl:text-xs text-[#0176CE]/60 mt-0.5">
                    <span>0%</span>
                    <span>100%</span>
                  </div>
                </div>
              </div>

              {/* Text Below Sliders */}
              <p className="text-[#0176CE] text-[7px] xs:text-[8px] sm:text-[9px] md:text-[10px] lg:text-sm xl:text-base 2xl:text-lg leading-relaxed font-dm-sans">
                Transparent{" "}
                <span className="font-bold">
                  flat-rate pricing, decentralized storage
                </span>{" "}
                with predictable costs and cryptographic proof of ownership,
                your data, <span className="font-bold">your control</span>,
                forever.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
