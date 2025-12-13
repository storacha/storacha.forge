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
  const [screenSize, setScreenSize] = useState<
    "mobileS" | "mobile" | "tablet" | "laptop" | "desktop" | "desktop4k"
  >("desktop");

  useEffect(() => {
    const updateScreenSize = () => {
      if (window.innerWidth < 375) {
        setScreenSize("mobileS");
      } else if (window.innerWidth < 768) {
        setScreenSize("mobile");
      } else if (window.innerWidth < 1024) {
        setScreenSize("tablet");
      } else if (window.innerWidth < 1440) {
        setScreenSize("laptop");
      } else if (window.innerWidth < 2560) {
        setScreenSize("desktop");
      } else {
        setScreenSize("desktop4k");
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
      {/* Custom slider styles for white thumb */}
      <style jsx>{`
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: white;
          border: 2px solid #0176ce;
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(1, 118, 206, 0.3);
        }
        input[type="range"]::-moz-range-thumb {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: white;
          border: 2px solid #0176ce;
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(1, 118, 206, 0.3);
        }
        @media (min-width: 640px) {
          input[type="range"]::-webkit-slider-thumb {
            width: 16px;
            height: 16px;
          }
          input[type="range"]::-moz-range-thumb {
            width: 16px;
            height: 16px;
          }
        }
        @media (min-width: 768px) {
          input[type="range"]::-webkit-slider-thumb {
            width: 18px;
            height: 18px;
          }
          input[type="range"]::-moz-range-thumb {
            width: 18px;
            height: 18px;
          }
        }
        @media (min-width: 1024px) {
          input[type="range"]::-webkit-slider-thumb {
            width: 20px;
            height: 20px;
          }
          input[type="range"]::-moz-range-thumb {
            width: 20px;
            height: 20px;
          }
        }
        @media (min-width: 1280px) {
          input[type="range"]::-webkit-slider-thumb {
            width: 24px;
            height: 24px;
            border-width: 3px;
          }
          input[type="range"]::-moz-range-thumb {
            width: 24px;
            height: 24px;
            border-width: 3px;
          }
        }
      `}</style>

      <div className="container-custom px-2 sm:px-3 md:px-4 lg:px-6">
        <div className="space-y-3 sm:space-y-4 md:space-y-8 lg:space-y-12 xl:space-y-16">
          {/* Title */}
          <div className="text-center">
            <h2 className="font-epilogue font-medium text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl 2xl:text-[72px] text-[#0176CE] tracking-tight md:tracking-[-1.5px] lg:tracking-[-2.88px]">
              Cost Comparison
            </h2>
          </div>

          {/* Comparison Table  */}
          <div className="w-full rounded-[8px] sm:rounded-xl md:rounded-2xl lg:rounded-3xl overflow-hidden shadow-sm">
            {/* Table Header  */}
            <div className="bg-white grid grid-cols-[1.8fr_1fr_1fr_0.9fr_0.9fr] items-center">
              <div className="px-1 sm:p-1 md:p-2 lg:p-4 xl:p-6">
                <span className="font-dm-sans font-medium text-[#0176CE] text-[4px] min-[375px]:text-[6px] sm:text-xs  lg:text-base xl:text-xl">
                  Provider
                </span>
              </div>
              <div className=" px-1 sm:p-1 md:p-3 lg:p-4 xl:p-6 text-center">
                <span className="font-dm-sans font-medium text-[#0176CE] text-[4px] min-[375px]:text-[6px] sm:text-xs  lg:text-base xl:text-xl">
                  Storage Cost
                </span>
              </div>
              <div className="px-1 sm:p-1 md:p-3 lg:p-4 xl:p-6 text-center">
                <span className="font-dm-sans font-medium text-[#0176CE] text-[4px] min-[375px]:text-[6px] sm:text-xs  lg:text-base xl:text-xl">
                  Egress Cost
                </span>
              </div>
              <div className=" px-1 sm:p-1 md:p-3 lg:p-4 xl:p-6 text-center">
                <span className="font-dm-sans font-medium text-[#0176CE] text-[4px] min-[375px]:text-[6px] sm:text-xs  lg:text-base xl:text-xl">
                  Data Ownership
                </span>
              </div>
              <div className="px-1 sm:p-1 md:p-3 lg:p-4 xl:p-6 text-center">
                <span className="font-dm-sans font-medium text-[#0176CE] text-[4px] min-[375px]:text-[6px] sm:text-xs  lg:text-base xl:text-xl">
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
                <div className="p-1 sm:p-2 md:p-3 lg:p-4 xl:p-6">
                  <div className="flex items-center gap-0.5 sm:gap-1.5 md:gap-2 lg:gap-3">
                    <Image
                      src={comp.logo}
                      alt={comp.name}
                      width={28}
                      height={28}
                      className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-8 xl:h-8 flex-shrink-0"
                    />
                    <span className="font-dm-sans font-semibold text-[7px] sm:text-[9px] md:text-xs lg:text-sm xl:text-lg truncate">
                      {comp.name}
                    </span>
                  </div>
                </div>

                {/* Storage Cost */}
                <div className="p-1 sm:p-2 md:p-3 lg:p-4 xl:p-6 text-center">
                  <div className="font-dm-sans font-bold text-[7px] sm:text-[10px] md:text-sm lg:text-base xl:text-xl">
                    {comp.storage}
                  </div>
                  <div
                    className={`font-dm-sans text-[5px] sm:text-[7px] md:text-[9px] lg:text-xs xl:text-sm text-[#0176CE]/70`}
                  >
                    {comp.storageNote}
                  </div>
                </div>

                {/* Egress Cost */}
                <div className="p-1 sm:p-2 md:p-3 lg:p-4 xl:p-6 text-center">
                  <div className="font-dm-sans font-bold text-[7px] sm:text-[10px] md:text-sm lg:text-base xl:text-xl">
                    {comp.egress}
                  </div>
                  <div className="font-dm-sans text-[5px] sm:text-[7px] md:text-[9px] lg:text-xs xl:text-sm text-[#0176CE]/70">
                    {comp.egressNote}
                  </div>
                </div>

                {/* Data Ownership */}
                <div className="p-1 sm:p-2 md:p-3 lg:p-4 xl:p-6 flex justify-center">
                  {comp.ownership ? (
                    <div className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-8 xl:h-8 rounded-full bg-green-500 flex items-center justify-center">
                      <span className="text-white text-[6px] sm:text-[8px] md:text-[10px] lg:text-xs xl:text-sm font-bold">
                        ✓
                      </span>
                    </div>
                  ) : (
                    <span className="text-red-500 text-[10px] sm:text-sm md:text-base lg:text-xl xl:text-2xl font-bold">
                      ✕
                    </span>
                  )}
                </div>

                {/* Verifiability  */}
                <div className="p-1 sm:p-2 md:p-3 lg:p-4 xl:p-6 flex justify-center">
                  {comp.verifiability ? (
                    <div className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-8 xl:h-8 rounded-full bg-green-500 flex items-center justify-center">
                      <span className="text-white text-[6px] sm:text-[8px] md:text-[10px] lg:text-xs xl:text-sm font-bold">
                        ✓
                      </span>
                    </div>
                  ) : (
                    <span className="text-red-500 text-[10px] sm:text-sm md:text-base lg:text-xl xl:text-2xl font-bold">
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
              {/* Chart Title */}
              <h3 className="font-dm-sans font-medium text-[#0176CE] text-[6px] sm:text-[9px] md:text-xs lg:text-base xl:text-xl mb-1 sm:mb-2 md:mb-3 lg:mb-4">
                Calculate Your Cost Advantage
              </h3>

              {/* Bar chart container with relative positioning for transform-based animation */}
              <div className="flex-1 flex items-end justify-center px-0.5 min-h-[100px] sm:min-h-[130px] md:min-h-[200px] lg:min-h-[260px] xl:min-h-[320px] 2xl:min-h-[380px]">
                <div className="relative flex items-end justify-center w-full">
                  {/* We render bars in a fixed order (by company name) but use transform to position them */}
                  {["Storacha", "Azure", "Google", "Amazon"].map(
                    (companyName) => {
                      const item = chartData.find(
                        (d) => d.company === companyName
                      )!;
                      const sortedIndex = chartData.findIndex(
                        (d) => d.company === companyName
                      );

                      // Calculate position based on sorted index
                      // Bar width + gap for each position - adjusted per screen size
                      const barWidths: Record<string, number> = {
                        mobileS: 22,
                        mobile: 28,
                        tablet: 40,
                        laptop: 48,
                        desktop: 55,
                        desktop4k: 65,
                      };
                      const gaps: Record<string, number> = {
                        mobileS: 6,
                        mobile: 12,
                        tablet: 16,
                        laptop: 22,
                        desktop: 32,
                        desktop4k: 50,
                      };

                      const barWidth = barWidths[screenSize];
                      const gap = gaps[screenSize];
                      const totalWidth = (barWidth + gap) * 4 - gap;
                      const startOffset = -totalWidth / 2 + barWidth / 2;
                      const xPosition =
                        startOffset + sortedIndex * (barWidth + gap);

                      // Map granular screen sizes to cost calculator's mobile/tablet/desktop
                      const heightKey =
                        screenSize === "mobileS" || screenSize === "mobile"
                          ? "mobile"
                          : screenSize === "tablet" || screenSize === "laptop"
                          ? "tablet"
                          : "desktop";

                      return (
                        <div
                          key={item.company}
                          className="absolute flex flex-col items-center justify-end w-[22px] xs:w-[28px] sm:w-[28px] md:w-[40px] lg:w-[48px] xl:w-[55px] 2xl:w-[65px] transition-transform duration-700 ease-out"
                          style={{
                            transform: `translateX(${xPosition}px)`,
                            width: `${barWidth}px`,
                          }}
                        >
                          <p
                            className={`font-dm-sans ${
                              item.highlight
                                ? "font-extrabold text-[4px] xs:text-[5px] sm:text-[7px] md:text-[8px] lg:text-[10px] xl:text-xs 2xl:text-sm"
                                : "font-medium text-[3.5px] xs:text-[4px] sm:text-[6px] md:text-[7px] lg:text-[9px] xl:text-[11px] 2xl:text-xs"
                            } text-[#0176CE] mb-0.5 sm:mb-1 md:mb-1.5 lg:mb-2 whitespace-nowrap transition-all duration-700 ease-out`}
                          >
                            ${item.cost.toLocaleString()}/yr
                          </p>
                          <div
                            className={`w-full rounded-t-sm sm:rounded-t-md md:rounded-t-lg transition-all duration-700 ease-out ${
                              item.highlight
                                ? "bg-[#0176CE]"
                                : "bg-gradient-to-b from-white via-[#d4ebff] to-[#5ba8e3]"
                            }`}
                            style={{ height: `${item.height[heightKey]}px` }}
                          />
                          <Image
                            src={item.logo}
                            alt={item.company}
                            width={40}
                            height={40}
                            className="mt-0.5 sm:mt-1 md:mt-1.5 lg:mt-2 xl:mt-3 w-2 h-2 xs:w-2.5 xs:h-2.5 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 object-contain"
                          />
                        </div>
                      );
                    }
                  )}
                </div>
              </div>
              <p className="text-[#0176CE] text-[5px] sm:text-[7px] md:text-[8px] lg:text-xs xl:text-sm text-center mt-1 sm:mt-2 md:mt-3 lg:mt-4">
                *For {storage_TiB} TiB storage and{" "}
                {((storage_TiB * egress_percent) / 100).toFixed(1)}TiB monthly
                egress
              </p>
            </div>

            {/* RIGHT: Calculator */}
            <div className="flex flex-col gap-1.5 sm:gap-2 md:gap-3 lg:gap-4 xl:gap-6">
              {/* Savings Box with blue shadow */}
              <div className="bg-white rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl border border-[#0176CE]/20 sm:border-2 shadow-[0_4px_20px_rgba(1,118,206,0.15)] sm:shadow-[0_6px_24px_rgba(1,118,206,0.18)] md:shadow-[0_8px_32px_rgba(1,118,206,0.2)] lg:shadow-[0_12px_40px_rgba(1,118,206,0.22)] p-1.5 sm:p-2 md:p-3 lg:p-4 xl:p-6 2xl:p-8">
                <div className="flex items-center justify-between gap-1 sm:gap-1.5 md:gap-2 lg:gap-3 xl:gap-4">
                  <div className="flex-1 min-w-0">
                    <p className="text-[#0176CE] text-[6px] sm:text-[8px] md:text-[9px] lg:text-xs xl:text-sm 2xl:text-base font-dm-sans mb-0.5 truncate">
                      Total Annual Savings
                    </p>
                    <p className="font-epilogue font-bold text-[11px] sm:text-sm md:text-base lg:text-xl xl:text-2xl 2xl:text-4xl text-[#0176CE] truncate">
                      ${Math.round(costs.annual_savings).toLocaleString()}
                    </p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="text-[#0176CE]/70 text-[5px] sm:text-[7px] md:text-[8px] lg:text-[10px] xl:text-xs font-dm-sans mb-0.5">
                      Up to
                    </p>
                    {/* Percentage and "cheaper" on same line */}
                    <p className="font-epilogue font-bold text-[10px] sm:text-xs md:text-sm lg:text-lg xl:text-xl 2xl:text-3xl text-[#0176CE] whitespace-nowrap">
                      {Math.round(costs.savings_percent)}%{" "}
                      <span className="text-[#0089F0]">cheaper</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Sliders */}
              <div className="space-y-1.5 sm:space-y-2 md:space-y-3 lg:space-y-4 xl:space-y-6">
                {/* Storage Slider */}
                <div>
                  <div className="flex justify-between items-center mb-1 sm:mb-1.5 md:mb-2">
                    <label className="font-dm-sans font-bold text-[#0176CE] text-[6px] sm:text-[8px] md:text-[9px] lg:text-xs xl:text-sm 2xl:text-base uppercase tracking-wider flex-1 min-w-0 truncate">
                      Storage Amount
                    </label>
                    {/* Oval container - min-width to prevent circle */}
                    <div className="bg-white border border-[#0176CE] sm:border-2 rounded-full px-2 py-0.5 sm:px-3 sm:py-0.5 md:px-3 md:py-0.5 lg:px-4 lg:py-1 xl:px-5 xl:py-1.5 flex-shrink-0 ml-1 min-w-[40px] sm:min-w-[55px] md:min-w-[65px] lg:min-w-[80px] xl:min-w-[100px]">
                      <span className="font-dm-sans font-bold text-[#0176CE] text-[6px] sm:text-[8px] md:text-[10px] lg:text-xs xl:text-sm 2xl:text-base whitespace-nowrap text-center block">
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
                      }%, #ffffff ${
                        ((storage_TiB - 100) / (10000 - 100)) * 100
                      }%, #ffffff 100%)`,
                    }}
                  />
                  <div className="flex justify-between text-[5px] sm:text-[7px] md:text-[8px] lg:text-[9px] xl:text-xs text-[#0176CE]/60 mt-0.5">
                    <span>100</span>
                    <span>10,000</span>
                  </div>
                </div>

                {/* Egress Slider */}
                <div>
                  <div className="flex justify-between items-center mb-1 sm:mb-1.5 md:mb-2">
                    <label className="font-dm-sans font-bold text-[#0176CE] text-[6px] sm:text-[8px] md:text-[9px] lg:text-xs xl:text-sm 2xl:text-base uppercase tracking-wider flex-1 min-w-0 truncate">
                      Percent Download/Mo
                    </label>
                    {/* Oval container - min-width to prevent circle */}
                    <div className="bg-white border border-[#0176CE] sm:border-2 rounded-full px-2 py-0.5 sm:px-3 sm:py-0.5 md:px-3 md:py-0.5 lg:px-4 lg:py-1 xl:px-5 xl:py-1.5 flex-shrink-0 ml-1 min-w-[32px] sm:min-w-[45px] md:min-w-[55px] lg:min-w-[65px] xl:min-w-[80px]">
                      <span className="font-dm-sans font-bold text-[#0176CE] text-[6px] sm:text-[8px] md:text-[10px] lg:text-xs xl:text-sm 2xl:text-base whitespace-nowrap text-center block">
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
                      background: `linear-gradient(to right, #0176CE 0%, #0176CE ${egress_percent}%, #ffffff ${egress_percent}%, #ffffff 100%)`,
                    }}
                  />
                  <div className="flex justify-between text-[5px] sm:text-[7px] md:text-[8px] lg:text-[9px] xl:text-xs text-[#0176CE]/60 mt-0.5">
                    <span>0%</span>
                    <span>100%</span>
                  </div>
                </div>
              </div>

              {/* Text Below Sliders */}
              <p className="text-[#0176CE] text-[7px] sm:text-[9px] md:text-[10px] lg:text-sm xl:text-base 2xl:text-lg leading-relaxed font-dm-sans">
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
