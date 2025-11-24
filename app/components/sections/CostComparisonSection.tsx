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

  // Detect screen size for responsive bar heights
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

  // Calculate chartData directly - no need for useEffect or separate state
  const costs = calculateAnnualCosts(storage_TiB, egress_percent);
  const chartData = calculateBarHeights(costs);

  const competitors = [
    {
      name: "Storacha Forge",
      logo: "/forge/cost-comparison/forge.svg",
      storage: "$5.99",
      egress: "$10",
      ownership: true,
      verifiability: true,
      highlight: true,
    },
    {
      name: "Google Nearline",
      logo: "/forge/cost-comparison/nearline.svg",
      storage: "$10.24",
      egress: "$120",
      ownership: false,
      verifiability: false,
    },
    {
      name: "AWS S3 Standard-IA",
      logo: "/forge/cost-comparison/aws.svg",
      storage: "$12.80",
      egress: "$100",
      ownership: false,
      verifiability: false,
    },
  ];

  return (
    <section id="comparison" className="bg-[#C5DFFD] py-8 md:py-16 lg:py-20">
      <div className="container-custom">
        <div className="space-y-6 md:space-y-12 lg:space-y-16">
          <div className="text-center">
            <h2 className="font-epilogue font-medium text-2xl md:text-4xl lg:text-5xl xl:text-[72px] text-[#0176CE] tracking-tight md:tracking-[-1.5px] lg:tracking-[-2.88px]">
              Cost Comparison
            </h2>
          </div>

          {/* Comparison Table */}
          <div className="w-full">
            <table className="w-full">
              <thead>
                <tr className="bg-white rounded-xl">
                  <th className="text-left p-1 sm:p-2 md:p-3 lg:p-4 font-dm-sans font-semibold text-[#0176CE] text-[8px] sm:text-xs md:text-lg lg:text-xl xl:text-2xl leading-tight rounded-tl-xl md:rounded-tl-2xl">
                    Provider
                  </th>
                  <th className="text-center p-1 sm:p-2 md:p-3 lg:p-4 font-dm-sans font-semibold text-[#0176CE] text-[7px] sm:text-xs md:text-lg lg:text-xl xl:text-2xl leading-tight">
                    Storage Cost/TiB/Month
                  </th>
                  <th className="text-center p-1 sm:p-2 md:p-3 lg:p-4 font-dm-sans font-semibold text-[#0176CE] text-[7px] sm:text-xs md:text-lg lg:text-xl xl:text-2xl leading-tight">
                    Egress Cost/TiB
                  </th>
                  <th className="text-center p-1 sm:p-2 md:p-3 lg:p-4 font-dm-sans font-semibold text-[#0176CE] text-[7px] sm:text-xs md:text-lg lg:text-xl xl:text-2xl leading-tight">
                    True Data Ownership
                  </th>
                  <th className="text-center p-1 sm:p-2 md:p-3 lg:p-4 font-dm-sans font-semibold text-[#0176CE] text-[7px] sm:text-xs md:text-lg lg:text-xl xl:text-2xl leading-tight rounded-tr-xl md:rounded-tr-2xl">
                    Verifiability
                  </th>
                </tr>
              </thead>
              <tbody>
                {competitors.map((comp, index) => (
                  <tr
                    key={comp.name}
                    className={`${
                      comp.highlight
                        ? "bg-[#0176CE] text-white"
                        : "bg-white text-[#0176CE]"
                    } rounded-[20px]`}
                  >
                    <td
                      className={`p-1 sm:p-2 md:p-3 lg:p-4 ${
                        index === competitors.length - 1
                          ? "rounded-bl-xl md:rounded-bl-2xl overflow-hidden"
                          : ""
                      }`}
                    >
                      <div className="flex items-center gap-2 sm:gap-3">
                        <Image
                          src={comp.logo}
                          alt={comp.name}
                          width={16}
                          height={16}
                          className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 flex-shrink-0"
                        />
                        <span className="font-dm-sans font-medium text-[8px] sm:text-xs md:text-lg lg:text-xl xl:text-2xl">
                          {comp.name}
                        </span>
                      </div>
                    </td>
                    <td className="p-1 sm:p-2 md:p-3 lg:p-4 text-center font-dm-sans font-medium text-[8px] sm:text-xs md:text-lg lg:text-xl xl:text-2xl">
                      {comp.storage}
                    </td>
                    <td className="p-1 sm:p-2 md:p-3 lg:p-4 text-center font-dm-sans font-medium text-[8px] sm:text-xs md:text-lg lg:text-xl xl:text-2xl">
                      {comp.egress}
                    </td>
                    <td className="p-1 sm:p-2 md:p-3 lg:p-4 text-center font-dm-sans font-medium text-[8px] sm:text-xs md:text-lg lg:text-xl xl:text-2xl">
                      {comp.ownership ? (
                        "✓"
                      ) : (
                        <span className="text-[6px] sm:text-xs md:text-lg lg:text-xl xl:text-2xl">
                          ❌
                        </span>
                      )}
                    </td>
                    <td
                      className={`p-1 sm:p-2 md:p-3 lg:p-4 text-center font-dm-sans font-medium text-[8px] sm:text-xs md:text-lg lg:text-xl xl:text-2xl ${
                        index === competitors.length - 1
                          ? "rounded-br-xl md:rounded-br-2xl"
                          : ""
                      }`}
                    >
                      {comp.verifiability ? (
                        "✓"
                      ) : (
                        <span className="text-[6px] sm:text-xs md:text-lg lg:text-xl xl:text-2xl">
                          ❌
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Cost Advantage Section */}
          <div className="space-y-6 md:space-y-10 lg:space-y-12">
            {/* Bar Chart */}
            <div>
              <div className="relative flex items-end gap-1.5 md:gap-3 lg:gap-4 justify-center px-2 md:px-4">
                {chartData.map((item, index) => (
                  <div
                    key={item.company}
                    className="flex flex-col items-center relative"
                  >
                    <p
                      className={`font-dm-sans ${
                        item.highlight
                          ? "font-extrabold text-xs md:text-lg lg:text-xl xl:text-[24px]"
                          : "font-medium text-[10px] md:text-sm lg:text-[16px]"
                      } text-[#0176CE] mb-1 whitespace-nowrap`}
                    >
                      ${item.cost.toLocaleString()}/yr
                    </p>
                    <div
                      className={`w-[32px] md:w-[50px] lg:w-[60px] rounded-t-xl transition-all duration-300 ${
                        item.highlight
                          ? "bg-[#0176CE]"
                          : "bg-gradient-to-b from-white via-[#aedcff] to-[#0176CE]"
                      }`}
                      style={{
                        height: `${item.height[screenSize]}px`,
                      }}
                    />
                    <Image
                      src={item.logo}
                      alt={item.company}
                      width={40}
                      height={40}
                      className="mt-1.5 md:mt-3 w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 object-contain"
                    />
                  </div>
                ))}
              </div>
              <p className="text-[#0176CE] text-[10px] md:text-sm text-center mt-2 md:mt-4">
                *For {storage_TiB} TB storage and{" "}
                {((storage_TiB * egress_percent) / 100).toFixed(1)}TB monthly
                egress
              </p>
            </div>

            {/* Cost Calculator Sliders */}
            <div className="bg-white rounded-2xl p-4 md:p-6 lg:p-8 space-y-6 max-w-5xl mx-auto">
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="font-dm-sans font-semibold text-[#0176CE] text-sm md:text-base lg:text-lg">
                      Storage (TiB)
                    </label>
                    <span className="font-dm-sans font-bold text-[#0176CE] text-base md:text-lg lg:text-xl">
                      {storage_TiB.toLocaleString()} TiB
                    </span>
                  </div>
                  <input
                    type="range"
                    min="100"
                    max="10000"
                    step="100"
                    value={storage_TiB}
                    onChange={(e) => setStorage_TiB(Number(e.target.value))}
                    className="w-full h-2 bg-[#C5DFFD] rounded-lg appearance-none cursor-pointer accent-[#0176CE]"
                    style={{
                      background: `linear-gradient(to right, #0176CE 0%, #0176CE ${
                        ((storage_TiB - 100) / (10000 - 100)) * 100
                      }%, #C5DFFD ${
                        ((storage_TiB - 100) / (10000 - 100)) * 100
                      }%, #C5DFFD 100%)`,
                    }}
                  />
                  <div className="flex justify-between text-xs text-[#0176CE]/60 mt-1">
                    <span>100</span>
                    <span>10,000</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="font-dm-sans font-semibold text-[#0176CE] text-sm md:text-base lg:text-lg">
                      Monthly Egress
                    </label>
                    <span className="font-dm-sans font-bold text-[#0176CE] text-base md:text-lg lg:text-xl">
                      {egress_percent}% (
                      {((storage_TiB * egress_percent) / 100).toFixed(1)} TiB)
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    step="1"
                    value={egress_percent}
                    onChange={(e) => setEgress_percent(Number(e.target.value))}
                    className="w-full h-2 bg-[#C5DFFD] rounded-lg appearance-none cursor-pointer accent-[#0176CE]"
                    style={{
                      background: `linear-gradient(to right, #0176CE 0%, #0176CE ${egress_percent}%, #C5DFFD ${egress_percent}%, #C5DFFD 100%)`,
                    }}
                  />
                  <div className="flex justify-between text-xs text-[#0176CE]/60 mt-1">
                    <span>0%</span>
                    <span>100%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-3 md:space-y-6 text-[#0176CE] text-center max-w-4xl mx-auto">
              <p className="text-base md:text-xl lg:text-2xl xl:text-[32px] leading-relaxed">
                Transparent <span className="font-bold">pricing,</span>{" "}
                <span className="font-bold">decentralized storage</span> with
                predictable costs and cryptographic proof of ownership, your
                data, <span className="font-bold">your control</span>, forever.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
