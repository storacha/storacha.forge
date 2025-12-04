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
      egress: "$120",
      egressNote: "per TiB/month",
      ownership: false,
      verifiability: false,
    },
    {
      name: "AWS S3 Standard-IA",
      logo: "/forge/cost-comparison/aws.svg",
      storage: "$12.80",
      storageNote: "per TiB/month",
      egress: "$100",
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

          {/* Comparison Table */}
          <div className="w-full overflow-x-auto -mx-2 px-2 sm:mx-0 sm:px-0">
            <table className="w-full min-w-[420px] sm:min-w-[500px] md:min-w-[600px]">
              <thead>
                <tr className="bg-white rounded-lg md:rounded-xl">
                  <th className="text-left p-0.5 sm:p-1 md:p-2 lg:p-3 xl:p-4 font-dm-sans font-semibold text-[#0176CE] text-[6px] xs:text-[7px] sm:text-[8px] md:text-xs lg:text-base xl:text-lg 2xl:text-xl leading-tight rounded-tl-lg md:rounded-tl-xl">
                    Provider
                  </th>
                  <th className="text-center p-0.5 sm:p-1 md:p-2 lg:p-3 xl:p-4 font-dm-sans font-semibold text-[#0176CE] text-[5px] xs:text-[6px] sm:text-[7px] md:text-[10px] lg:text-sm xl:text-base 2xl:text-lg leading-tight">
                    Storage
                    <br className="hidden xs:block" />
                    <span className="text-[4px] xs:text-[5px] sm:text-[6px] md:text-[8px] lg:text-xs xl:text-sm font-normal">
                      Cost/TiB/Mo
                    </span>
                  </th>
                  <th className="text-center p-0.5 sm:p-1 md:p-2 lg:p-3 xl:p-4 font-dm-sans font-semibold text-[#0176CE] text-[5px] xs:text-[6px] sm:text-[7px] md:text-[10px] lg:text-sm xl:text-base 2xl:text-lg leading-tight">
                    Egress
                    <br className="hidden xs:block" />
                    <span className="text-[4px] xs:text-[5px] sm:text-[6px] md:text-[8px] lg:text-xs xl:text-sm font-normal">
                      Cost/TiB
                    </span>
                  </th>
                  <th className="text-center p-0.5 sm:p-1 md:p-2 lg:p-3 xl:p-4 font-dm-sans font-semibold text-[#0176CE] text-[5px] xs:text-[6px] sm:text-[7px] md:text-[10px] lg:text-sm xl:text-base 2xl:text-lg leading-tight">
                    Data
                    <br className="hidden xs:block" /> Own.
                  </th>
                  <th className="text-center p-0.5 sm:p-1 md:p-2 lg:p-3 xl:p-4 font-dm-sans font-semibold text-[#0176CE] text-[5px] xs:text-[6px] sm:text-[7px] md:text-[10px] lg:text-sm xl:text-base 2xl:text-lg leading-tight rounded-tr-lg md:rounded-tr-xl">
                    Verify
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
                    }`}
                  >
                    <td
                      className={`p-0.5 sm:p-1 md:p-2 lg:p-3 xl:p-4 ${
                        index === competitors.length - 1
                          ? "rounded-bl-lg md:rounded-bl-xl"
                          : ""
                      }`}
                    >
                      <div className="flex items-center gap-0.5 sm:gap-1 md:gap-2 lg:gap-3">
                        <Image
                          src={comp.logo}
                          alt={comp.name}
                          width={16}
                          height={16}
                          className="w-2 h-2 xs:w-2.5 xs:h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-6 lg:h-6 xl:w-7 xl:h-7 flex-shrink-0"
                        />
                        <span className="font-dm-sans font-medium text-[6px] xs:text-[7px] sm:text-[8px] md:text-xs lg:text-base xl:text-lg 2xl:text-xl">
                          {comp.name}
                        </span>
                      </div>
                    </td>
                    <td className="p-0.5 sm:p-1 md:p-2 lg:p-3 xl:p-4 text-center">
                      <div className="font-dm-sans font-medium text-[6px] xs:text-[7px] sm:text-[8px] md:text-xs lg:text-base xl:text-lg 2xl:text-xl">
                        {comp.storage}
                      </div>
                      <div
                        className={`font-dm-sans text-[4px] xs:text-[5px] sm:text-[6px] md:text-[8px] lg:text-xs xl:text-sm ${
                          comp.highlight ? "text-white/70" : "text-[#0176CE]/70"
                        }`}
                      >
                        {comp.storageNote}
                      </div>
                    </td>
                    <td className="p-0.5 sm:p-1 md:p-2 lg:p-3 xl:p-4 text-center">
                      <div className="font-dm-sans font-medium text-[6px] xs:text-[7px] sm:text-[8px] md:text-xs lg:text-base xl:text-lg 2xl:text-xl">
                        {comp.egress}
                      </div>
                      <div
                        className={`font-dm-sans text-[4px] xs:text-[5px] sm:text-[6px] md:text-[8px] lg:text-xs xl:text-sm ${
                          comp.highlight ? "text-white/70" : "text-[#0176CE]/70"
                        }`}
                      >
                        {comp.egressNote}
                      </div>
                    </td>
                    <td className="p-0.5 sm:p-1 md:p-2 lg:p-3 xl:p-4 text-center font-dm-sans font-medium text-[6px] xs:text-[7px] sm:text-[8px] md:text-xs lg:text-base xl:text-lg 2xl:text-xl">
                      {comp.ownership ? "✓" : <span>❌</span>}
                    </td>
                    <td
                      className={`p-0.5 sm:p-1 md:p-2 lg:p-3 xl:p-4 text-center font-dm-sans font-medium text-[6px] xs:text-[7px] sm:text-[8px] md:text-xs lg:text-base xl:text-lg 2xl:text-xl ${
                        index === competitors.length - 1
                          ? "rounded-br-lg md:rounded-br-xl"
                          : ""
                      }`}
                    >
                      {comp.verifiability ? "✓" : <span>❌</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Bar Chart and Calculator Section */}
          <div className="grid lg:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-12 items-stretch">
            {/* LEFT: Bar Chart */}
            <div className="order-2 lg:order-1 bg-white rounded-xl sm:rounded-2xl md:rounded-3xl border border-[#0176CE]/20 sm:border-2 p-2 sm:p-3 md:p-4 lg:p-6 xl:p-8 flex flex-col justify-between">
              <div className="flex-1 flex items-end justify-center gap-1 sm:gap-1.5 md:gap-2 lg:gap-4 xl:gap-6 px-0.5 sm:px-1 min-h-[140px] sm:min-h-[180px] md:min-h-[240px] lg:min-h-[320px] xl:min-h-[380px]">
                {chartData.map((item) => (
                  <div
                    key={item.company}
                    className="flex flex-col items-center justify-end w-[40px] xs:w-[45px] sm:w-[50px] md:w-[55px] lg:w-[65px] xl:w-[70px]"
                  >
                    <p
                      className={`font-dm-sans ${
                        item.highlight
                          ? "font-extrabold text-[7px] xs:text-[8px] sm:text-[9px] md:text-xs lg:text-sm xl:text-base 2xl:text-lg"
                          : "font-medium text-[6px] xs:text-[7px] sm:text-[8px] md:text-[10px] lg:text-xs xl:text-sm 2xl:text-base"
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
                      className="mt-1 sm:mt-1.5 md:mt-2 lg:mt-3 w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 xl:w-9 xl:h-9 object-contain"
                    />
                  </div>
                ))}
              </div>
              <p className="text-[#0176CE] text-[7px] xs:text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs xl:text-sm text-center mt-1.5 sm:mt-2 md:mt-3 lg:mt-4">
                *For {storage_TiB} TiB storage and{" "}
                {((storage_TiB * egress_percent) / 100).toFixed(1)}TiB monthly
                egress
              </p>
            </div>

            {/* RIGHT: Calculator */}
            <div className="order-1 lg:order-2 flex flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-6">
              {/* Savings Box */}
              <div className="bg-white rounded-xl sm:rounded-2xl md:rounded-3xl border border-[#0176CE]/20 sm:border-2 shadow-sm sm:shadow-[0_4px_16px_rgba(1,118,206,0.08)] md:shadow-[0_8px_24px_rgba(1,118,206,0.12)] p-2 sm:p-3 md:p-4 lg:p-6 xl:p-8">
                <div className="flex items-center justify-between gap-1.5 sm:gap-2 md:gap-3 lg:gap-4">
                  <div>
                    <p className="text-[#0176CE] text-[7px] xs:text-[8px] sm:text-[9px] md:text-xs lg:text-sm xl:text-base font-dm-sans mb-0.5 sm:mb-1">
                      Total Annual Savings
                    </p>
                    <p className="font-epilogue font-bold text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-[#0176CE]">
                      ${Math.round(costs.annual_savings).toLocaleString()}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-[#0176CE]/70 text-[7px] xs:text-[8px] sm:text-[9px] md:text-xs lg:text-sm font-dm-sans mb-0.5 sm:mb-1">
                      Up to
                    </p>
                    <p className="font-epilogue font-bold text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-[#0176CE]">
                      {Math.round(costs.savings_percent)}%
                    </p>
                    <p className="text-[#0089F0] text-[7px] xs:text-[8px] sm:text-[9px] md:text-xs lg:text-sm xl:text-base font-dm-sans font-semibold">
                      cheaper
                    </p>
                  </div>
                </div>
              </div>

              {/* Sliders */}
              <div className="space-y-2.5 sm:space-y-3 md:space-y-4 lg:space-y-6 xl:space-y-8">
                {/* Storage Slider */}
                <div>
                  <div className="flex justify-between items-center mb-1.5 sm:mb-2 md:mb-2.5 lg:mb-3">
                    <label className="font-dm-sans font-bold text-[#0176CE] text-[7px] xs:text-[8px] sm:text-[9px] md:text-xs lg:text-sm xl:text-base uppercase tracking-wider">
                      Storage Amount
                    </label>
                    <div className="bg-white border border-[#0176CE] sm:border-2 rounded-full px-1.5 py-0.5 sm:px-2 sm:py-0.5 md:px-3 md:py-1 lg:px-4 lg:py-1.5">
                      <span className="font-dm-sans font-bold text-[#0176CE] text-[8px] xs:text-[9px] sm:text-[10px] md:text-xs lg:text-sm xl:text-base 2xl:text-lg">
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
                    className="w-full h-1.5 sm:h-2 md:h-2.5 lg:h-3 rounded-lg appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, #0176CE 0%, #0176CE ${
                        ((storage_TiB - 100) / (10000 - 100)) * 100
                      }%, #C5DFFD ${
                        ((storage_TiB - 100) / (10000 - 100)) * 100
                      }%, #C5DFFD 100%)`,
                    }}
                  />
                  <div className="flex justify-between text-[6px] xs:text-[7px] sm:text-[8px] md:text-[9px] lg:text-[10px] xl:text-xs text-[#0176CE]/60 mt-0.5 sm:mt-1">
                    <span>100</span>
                    <span>10,000</span>
                  </div>
                </div>

                {/* Egress Slider */}
                <div>
                  <div className="flex justify-between items-center mb-1.5 sm:mb-2 md:mb-2.5 lg:mb-3">
                    <label className="font-dm-sans font-bold text-[#0176CE] text-[7px] xs:text-[8px] sm:text-[9px] md:text-xs lg:text-sm xl:text-base uppercase tracking-wider">
                      Percent Download/Mo
                    </label>
                    <div className="bg-white border border-[#0176CE] sm:border-2 rounded-full px-1.5 py-0.5 sm:px-2 sm:py-0.5 md:px-3 md:py-1 lg:px-4 lg:py-1.5">
                      <span className="font-dm-sans font-bold text-[#0176CE] text-[8px] xs:text-[9px] sm:text-[10px] md:text-xs lg:text-sm xl:text-base 2xl:text-lg">
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
                    className="w-full h-1.5 sm:h-2 md:h-2.5 lg:h-3 rounded-lg appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, #0176CE 0%, #0176CE ${egress_percent}%, #C5DFFD ${egress_percent}%, #C5DFFD 100%)`,
                    }}
                  />
                  <div className="flex justify-between text-[6px] xs:text-[7px] sm:text-[8px] md:text-[9px] lg:text-[10px] xl:text-xs text-[#0176CE]/60 mt-0.5 sm:mt-1">
                    <span>0%</span>
                    <span>100%</span>
                  </div>
                </div>
              </div>

              {/* Text Below Sliders */}
              <p className="text-[#0176CE] text-[9px] xs:text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl leading-relaxed font-dm-sans">
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
