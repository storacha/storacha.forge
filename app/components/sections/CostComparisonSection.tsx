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
    <section id="comparison" className="bg-[#C5DFFD] py-8 md:py-16 lg:py-20">
      <div className="container-custom">
        <div className="space-y-6 md:space-y-12 lg:space-y-16">
          <div className="text-center">
            <h2 className="font-epilogue font-medium text-2xl md:text-4xl lg:text-5xl xl:text-[72px] text-[#0176CE] tracking-tight md:tracking-[-1.5px] lg:tracking-[-2.88px]">
              Cost Comparison
            </h2>
          </div>

          {/* Comparison Table */}
          <div className="w-full overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="bg-white rounded-xl">
                  <th className="text-left p-1 sm:p-2 md:p-3 lg:p-4 font-dm-sans font-semibold text-[#0176CE] text-[8px] sm:text-xs md:text-lg lg:text-xl xl:text-2xl leading-tight rounded-tl-xl md:rounded-tl-2xl">
                    Provider
                  </th>
                  <th className="text-center p-1 sm:p-2 md:p-3 lg:p-4 font-dm-sans font-semibold text-[#0176CE] text-[7px] sm:text-xs md:text-lg lg:text-xl xl:text-2xl leading-tight">
                    Storage
                    <br className="hidden sm:block" />
                    <span className="text-[6px] sm:text-[10px] md:text-sm lg:text-base font-normal">
                      Cost/TiB/Month
                    </span>
                  </th>
                  <th className="text-center p-1 sm:p-2 md:p-3 lg:p-4 font-dm-sans font-semibold text-[#0176CE] text-[7px] sm:text-xs md:text-lg lg:text-xl xl:text-2xl leading-tight">
                    Egress
                    <br className="hidden sm:block" />
                    <span className="text-[6px] sm:text-[10px] md:text-sm lg:text-base font-normal">
                      Cost/TiB
                    </span>
                  </th>
                  <th className="text-center p-1 sm:p-2 md:p-3 lg:p-4 font-dm-sans font-semibold text-[#0176CE] text-[7px] sm:text-xs md:text-lg lg:text-xl xl:text-2xl leading-tight">
                    True Data
                    <br className="hidden sm:block" /> Ownership
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
                    <td className="p-1 sm:p-2 md:p-3 lg:p-4 text-center">
                      <div className="font-dm-sans font-medium text-[8px] sm:text-xs md:text-lg lg:text-xl xl:text-2xl">
                        {comp.storage}
                      </div>
                      <div
                        className={`font-dm-sans text-[6px] sm:text-[8px] md:text-xs lg:text-sm ${
                          comp.highlight ? "text-white/70" : "text-[#0176CE]/70"
                        }`}
                      >
                        {comp.storageNote}
                      </div>
                    </td>
                    <td className="p-1 sm:p-2 md:p-3 lg:p-4 text-center">
                      <div className="font-dm-sans font-medium text-[8px] sm:text-xs md:text-lg lg:text-xl xl:text-2xl">
                        {comp.egress}
                      </div>
                      <div
                        className={`font-dm-sans text-[6px] sm:text-[8px] md:text-xs lg:text-sm ${
                          comp.highlight ? "text-white/70" : "text-[#0176CE]/70"
                        }`}
                      >
                        {comp.egressNote}
                      </div>
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

          {/* Bar Chart and Calculator Section */}
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-stretch">
            {/* LEFT: Bar Chart */}
            <div className="order-2 lg:order-1 bg-white rounded-[20px] md:rounded-[24px] border-2 border-[#0176CE]/20 p-4 md:p-6 lg:p-8 flex flex-col justify-between">
              <div className="flex-1 flex items-end justify-center gap-2 md:gap-4 lg:gap-6 px-2 min-h-[250px] md:min-h-[320px] lg:min-h-[380px]">
                {chartData.map((item) => (
                  <div
                    key={item.company}
                    className="flex flex-col items-center justify-end flex-1 max-w-[80px]"
                  >
                    <p
                      className={`font-dm-sans ${
                        item.highlight
                          ? "font-extrabold text-xs md:text-base lg:text-lg xl:text-xl"
                          : "font-medium text-[10px] md:text-sm lg:text-base"
                      } text-[#0176CE] mb-2 whitespace-nowrap`}
                    >
                      ${item.cost.toLocaleString()}/yr
                    </p>
                    <div
                      className={`w-full rounded-t-xl transition-all duration-300 ${
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
                      className="mt-2 md:mt-3 w-8 h-8 md:w-10 md:h-10 object-contain"
                    />
                  </div>
                ))}
              </div>
              <p className="text-[#0176CE] text-[10px] md:text-xs lg:text-sm text-center mt-4">
                *For {storage_TiB} TiB storage and{" "}
                {((storage_TiB * egress_percent) / 100).toFixed(1)}TiB monthly
                egress
              </p>
            </div>

            {/* RIGHT: Calculator */}
            <div className="order-1 lg:order-2 flex flex-col gap-4 md:gap-6">
              {/* Savings Box */}
              <div className="bg-white rounded-[20px] md:rounded-[24px] border-2 border-[#0176CE]/20 shadow-[0_8px_24px_rgba(1,118,206,0.12)] p-4 md:p-6 lg:p-8">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[#0176CE] text-xs md:text-sm lg:text-base font-dm-sans mb-1">
                      Total Annual Savings
                    </p>
                    <p className="font-epilogue font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-[#0176CE]">
                      ${Math.round(costs.annual_savings).toLocaleString()}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-[#0176CE]/70 text-xs md:text-sm font-dm-sans mb-1">
                      Up to
                    </p>
                    <p className="font-epilogue font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-[#0176CE]">
                      {Math.round(costs.savings_percent)}%
                    </p>
                    <p className="text-[#0089F0] text-xs md:text-sm lg:text-base font-dm-sans font-semibold">
                      cheaper
                    </p>
                  </div>
                </div>
              </div>

              {/* Sliders */}
              <div className="space-y-6 md:space-y-8">
                {/* Storage Amount Slider */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="font-dm-sans font-bold text-[#0176CE] text-xs md:text-sm lg:text-base uppercase tracking-wider">
                      Storage Amount
                    </label>
                    <div className="bg-white border-2 border-[#0176CE] rounded-full px-4 py-1.5 md:px-5 md:py-2">
                      <span className="font-dm-sans font-bold text-[#0176CE] text-sm md:text-base lg:text-lg">
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
                    className="w-full h-3 rounded-lg appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, #0176CE 0%, #0176CE ${
                        ((storage_TiB - 100) / (10000 - 100)) * 100
                      }%, #C5DFFD ${
                        ((storage_TiB - 100) / (10000 - 100)) * 100
                      }%, #C5DFFD 100%)`,
                    }}
                  />
                  <div className="flex justify-between text-[10px] md:text-xs text-[#0176CE]/60 mt-1">
                    <span>100</span>
                    <span>10,000</span>
                  </div>
                </div>

                {/* Egress Percent Slider */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="font-dm-sans font-bold text-[#0176CE] text-xs md:text-sm lg:text-base uppercase tracking-wider">
                      Percent Download Per Month
                    </label>
                    <div className="bg-white border-2 border-[#0176CE] rounded-full px-4 py-1.5 md:px-5 md:py-2">
                      <span className="font-dm-sans font-bold text-[#0176CE] text-sm md:text-base lg:text-lg">
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
                    className="w-full h-3 rounded-lg appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, #0176CE 0%, #0176CE ${egress_percent}%, #C5DFFD ${egress_percent}%, #C5DFFD 100%)`,
                    }}
                  />
                  <div className="flex justify-between text-[10px] md:text-xs text-[#0176CE]/60 mt-1">
                    <span>0%</span>
                    <span>100%</span>
                  </div>
                </div>
              </div>

              {/* Text Below Sliders */}
              <p className="text-[#0176CE] text-sm md:text-base lg:text-lg xl:text-xl leading-relaxed font-dm-sans">
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
