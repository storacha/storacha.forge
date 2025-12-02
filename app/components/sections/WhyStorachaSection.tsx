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
      title: "Intelligent Data Lifecycle Management",
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

          {/* Accordion Container */}
          <div className="bg-[#C5DFFD] rounded-[16px] md:rounded-[24px] lg:rounded-[32px] p-4 md:p-6 lg:p-8">
            {/* Feature Buttons Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 lg:gap-4 mb-4 md:mb-6">
              {features.map((feature, index) => (
                <button
                  key={feature.title}
                  onClick={() => setActiveFeature(index)}
                  className={`relative p-3 md:p-4 rounded-xl md:rounded-2xl transition-all duration-300 text-left group ${
                    activeFeature === index
                      ? "bg-[#0176CE] text-white scale-[1.02] shadow-lg"
                      : "bg-white text-[#0176CE] hover:scale-[1.05] hover:shadow-md"
                  }`}
                >
                  <div className="flex items-start gap-2 md:gap-3">
                    <Image
                      src={feature.icon}
                      alt=""
                      width={24}
                      height={24}
                      className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 flex-shrink-0 mt-0.5"
                    />
                    <p className="font-dm-sans font-semibold text-xs md:text-sm lg:text-base leading-tight">
                      {feature.title}
                    </p>
                  </div>
                  {activeFeature === index && (
                    <div className="absolute -right-1 top-1/2 -translate-y-1/2">
                      <div className="w-2 h-2 md:w-3 md:h-3 bg-green-400 rounded-full border-2 border-white"></div>
                    </div>
                  )}
                </button>
              ))}
            </div>

            {/* Active Feature Card */}
            <div className="bg-[#0176CE] rounded-xl md:rounded-2xl p-5 md:p-8 lg:p-10 min-h-[180px] md:min-h-[220px]">
              <div className="flex items-start gap-4 md:gap-6">
                <div className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0">
                  <Image
                    src={features[activeFeature].icon}
                    alt={features[activeFeature].title}
                    width={48}
                    height={48}
                    className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10"
                  />
                </div>
                <div className="flex-1 space-y-3 md:space-y-4">
                  <h3 className="font-epilogue font-semibold text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white">
                    {features[activeFeature].title}
                  </h3>
                  <p className="font-dm-sans text-sm md:text-base lg:text-lg xl:text-xl text-white/90 leading-relaxed">
                    {features[activeFeature].description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
