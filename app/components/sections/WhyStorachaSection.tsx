"use client";

import Image from "next/image";
import { useState } from "react";

export default function WhyStorachaSection() {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: "/forge/features/verifiable-security.svg",
      title: "Verifiable Security",
      description:
        "Cryptographically proven integrity and end-to-end encryption keep your backups tamper-proof, private, and independently verifiable.",
    },
    {
      icon: "/forge/features/data-ownership.svg",
      title: "True Data Ownership",
      description:
        "Every file belongs to you, not a provider, governed by open protocol and user-controlled permissions.",
    },
    {
      icon: "/forge/features/transparent-pricing.svg",
      title: "Transparent, Low-Cost Pricing",
      description:
        "Up to 80% cheaper than AWS Glacier or Google Coldline, with predictable billing and transparent egress.",
    },
    {
      icon: "/forge/features/no-vendor-lock.svg",
      title: "No Vendor Lock-In",
      description:
        "Retrieve or migrate freely with open standards—no proprietary APIs or hidden exit fees.",
    },
    {
      icon: "/forge/features/global-coverage.svg",
      title: "Global Coverage & Compliance",
      description:
        "Enterprise-grade resilience across EU, US, and Asia, built to meet ISO 27001 and GDPR requirements under unified global standards.",
    },
    {
      icon: "/forge/features/data-lifecycle.svg",
      title: "Data Lifecycle Management",
      description:
        "Manage retention and deletion through intelligent, policy-aware controls optimizing cost, integrity, and compliance over time.",
    },
    {
      icon: "/forge/features/fast-retrieval.svg",
      title: "Fast, Reliable Retrieval",
      description:
        "Retrieve data in seconds for audits, restores, or analytics without cold-storage delays.",
    },
    {
      icon: "/forge/features/share-without-middlemen.svg",
      title: "Share Without Middlemen",
      description:
        "Grant and revoke permissions directly between users or systems—no centralized gateways or intermediaries.",
    },
  ];

  const leftFeatures = features.slice(0, 4);
  const rightFeatures = features.slice(4, 8);

  return (
    <section id="why" className="bg-[#0176CE] py-10 md:py-16 lg:py-20">
      <div className="container-custom">
        <div className="space-y-6 md:space-y-10 lg:space-y-12">
          <div className="text-center space-y-3 md:space-y-4 lg:space-y-6">
            <h2 className="font-epilogue font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[72px] text-white tracking-tight md:tracking-[-1.5px] lg:tracking-[-2.88px]">
              Why Storacha?
            </h2>
            <p className="font-dm-sans text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[28px] text-white tracking-normal md:tracking-[-0.5px] lg:tracking-[-1.12px]">
              Built for enterprises that demand security, control, and
              transparency.
            </p>
          </div>

          {/* Mobile/Tablet: All buttons then card */}
          <div className="lg:hidden bg-[#C5DFFD] rounded-[16px] md:rounded-[24px] p-4 md:p-6">
            <div className="grid grid-cols-2 gap-2 md:gap-3 mb-4 md:mb-6">
              {features.map((feature, index) => (
                <button
                  key={feature.title}
                  onClick={() => setActiveFeature(index)}
                  className={`relative p-3 md:p-4 rounded-xl transition-all duration-300 text-left ${
                    activeFeature === index
                      ? "bg-[#0176CE] text-white scale-[1.02] shadow-lg"
                      : "bg-white text-[#0176CE] hover:scale-[1.05] hover:shadow-md"
                  }`}
                >
                  <div className="flex items-start gap-2">
                    <Image
                      src={feature.icon}
                      alt=""
                      width={24}
                      height={24}
                      className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0 mt-0.5"
                    />
                    <p className="font-dm-sans font-semibold text-xs md:text-sm leading-tight">
                      {feature.title}
                    </p>
                  </div>
                  {activeFeature === index && (
                    <div className="absolute -right-1 top-1/2 -translate-y-1/2">
                      <Image
                        src="/forge/features/checkmark.svg"
                        alt=""
                        width={16}
                        height={16}
                        className="w-3 h-3 md:w-4 md:h-4"
                      />
                    </div>
                  )}
                </button>
              ))}
            </div>

            <div className="bg-[#0176CE] rounded-xl p-5 md:p-8 min-h-[180px]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0">
                  <Image
                    src={features[activeFeature].icon}
                    alt={features[activeFeature].title}
                    width={48}
                    height={48}
                    className="w-6 h-6 md:w-8 md:h-8"
                  />
                </div>
                <div className="flex-1 space-y-3">
                  <h3 className="font-epilogue font-semibold text-xl md:text-2xl text-white">
                    {features[activeFeature].title}
                  </h3>
                  <p className="font-dm-sans text-sm md:text-base text-white/90 leading-relaxed">
                    {features[activeFeature].description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop: 3-column layout */}
          <div className="hidden lg:block bg-[#C5DFFD] rounded-[24px] xl:rounded-[32px] p-6 xl:p-10">
            <div className="grid grid-cols-[1fr_2fr_1fr] gap-6 xl:gap-10 items-center">
              {/* Left Column - First 4 features */}
              <div className="space-y-3 xl:space-y-4">
                {leftFeatures.map((feature, index) => (
                  <button
                    key={feature.title}
                    onClick={() => setActiveFeature(index)}
                    className={`w-full relative p-4 xl:p-5 rounded-xl xl:rounded-2xl transition-all duration-300 text-left ${
                      activeFeature === index
                        ? "bg-[#0176CE] text-white scale-[1.02] shadow-lg"
                        : "bg-white text-[#0176CE] hover:scale-[1.02] hover:shadow-md"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Image
                        src={feature.icon}
                        alt=""
                        width={28}
                        height={28}
                        className="w-6 h-6 xl:w-7 xl:h-7 flex-shrink-0"
                      />
                      <p className="font-dm-sans font-semibold text-sm xl:text-base leading-tight">
                        {feature.title}
                      </p>
                    </div>
                    {activeFeature === index && (
                      <div className="absolute -right-1 top-1/2 -translate-y-1/2">
                        <Image
                          src="/forge/features/checkmark.svg"
                          alt=""
                          width={20}
                          height={20}
                          className="w-4 h-4 xl:w-5 xl:h-5"
                        />
                      </div>
                    )}
                  </button>
                ))}
              </div>

              {/* Center - Active Feature Card */}
              <div className="bg-[#0176CE] rounded-2xl xl:rounded-3xl p-6 xl:p-8 flex items-center">
                <div className="flex flex-col items-center text-center space-y-4 xl:space-y-5 w-full">
                  <div className="w-16 h-16 xl:w-20 xl:h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Image
                      src={features[activeFeature].icon}
                      alt={features[activeFeature].title}
                      width={64}
                      height={64}
                      className="w-9 h-9 xl:w-11 xl:h-11"
                    />
                  </div>
                  <h3 className="font-epilogue font-semibold text-2xl xl:text-3xl text-white leading-tight">
                    {features[activeFeature].title}
                  </h3>
                  <p className="font-dm-sans text-base xl:text-lg text-white/90 leading-relaxed max-w-lg">
                    {features[activeFeature].description}
                  </p>
                </div>
              </div>

              {/* Right Column - Last 4 features */}
              <div className="space-y-3 xl:space-y-4">
                {rightFeatures.map((feature, index) => {
                  const featureIndex = index + 4;
                  return (
                    <button
                      key={feature.title}
                      onClick={() => setActiveFeature(featureIndex)}
                      className={`w-full relative p-4 xl:p-5 rounded-xl xl:rounded-2xl transition-all duration-300 text-left ${
                        activeFeature === featureIndex
                          ? "bg-[#0176CE] text-white scale-[1.02] shadow-lg"
                          : "bg-white text-[#0176CE] hover:scale-[1.02] hover:shadow-md"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Image
                          src={feature.icon}
                          alt=""
                          width={28}
                          height={28}
                          className="w-6 h-6 xl:w-7 xl:h-7 flex-shrink-0"
                        />
                        <p className="font-dm-sans font-semibold text-sm xl:text-base leading-tight">
                          {feature.title}
                        </p>
                      </div>
                      {activeFeature === featureIndex && (
                        <div className="absolute -left-1 top-1/2 -translate-y-1/2">
                          <Image
                            src="/forge/features/checkmark.svg"
                            alt=""
                            width={20}
                            height={20}
                            className="w-4 h-4 xl:w-5 xl:h-5"
                          />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
