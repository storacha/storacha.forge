import Image from "next/image";
import Link from "next/link";
import { MEETING_URL } from "@/lib/constants";

export default function PricingSection() {
  return (
    <section id="pricing" className="bg-[#C5DFFD] py-10 md:py-16 lg:py-20">
      <div className="container-custom">
        <div className="flex flex-col items-center gap-8 md:gap-12 lg:gap-16">
          <div className="text-center space-y-4 md:space-y-6 lg:space-y-8">
            <h2 className="font-epilogue font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[72px] text-[#0176CE] tracking-tight md:tracking-[-1.5px] lg:tracking-[-2.88px]">
              Pricing
            </h2>
            <p className="font-dm-sans text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[28px] text-[#0089F0] tracking-normal md:tracking-[-0.5px] lg:tracking-[-1.12px]">
              Cut your costs, not performance.
              <br />
              Transparent, predictable, and enterprise ready.
            </p>
          </div>

          <div className="flex flex-col items-center ">
            <div className="relative">
              <div className="border border-[#0089F0] rounded-[20px] md:rounded-[40px] p-5 md:p-8 lg:p-10 w-full bg-white/50 relative">
                <div className="space-y-4 md:space-y-6 lg:space-y-8 text-left">
                  <p className="font-dm-sans font-medium text-base sm:text-lg md:text-xl lg:text-[26px] text-[#0089F0]">
                    Reserved Capacity Plan
                  </p>

                  <p className="font-epilogue font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[60px] text-[#0089F0] tracking-[-1.82px]">
                    $5.99{" "}
                    <span className="text-sm sm:text-base md:text-lg lg:text-xl font-normal">
                      /TiB/Month
                    </span>
                  </p>

                  <div className="space-y-2 md:space-y-3 lg:space-y-4 text-left max-w-md mx-auto">
                    <div className="flex items-center gap-2 md:gap-3">
                      <Image
                        src="/forge/pricing/checkmark.svg"
                        alt=""
                        width={24}
                        height={24}
                        className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0"
                      />
                      <p className="font-dm-sans font-medium text-sm sm:text-base md:text-[18px] text-[#0089F0]">
                        Capacity Billing
                      </p>
                    </div>
                    <div className="flex items-center gap-2 md:gap-3">
                      <Image
                        src="/forge/pricing/checkmark.svg"
                        alt=""
                        width={24}
                        height={24}
                        className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0"
                      />
                      <p className="font-dm-sans font-medium text-sm sm:text-base md:text-[18px] text-[#0089F0]">
                        Egress: $10/TiB
                      </p>
                    </div>
                    <div className="flex items-center gap-2 md:gap-3">
                      <Image
                        src="/forge/pricing/checkmark.svg"
                        alt=""
                        width={24}
                        height={24}
                        className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0"
                      />
                      <p className="font-dm-sans font-medium text-sm sm:text-base md:text-[18px] text-[#0089F0]">
                        Data Ingress: Free for 18+ month contracts
                      </p>
                    </div>
                  </div>
                </div>

                <div className="absolute top-0 right-0">
                  <Image
                    src="/forge/pricing/savings.svg"
                    alt="80% Savings"
                    width={175}
                    height={157}
                    className="w-[80px] h-[72px] sm:w-[100px] sm:h-[90px] md:w-[120px] md:h-[108px] lg:w-[175px] lg:h-[157px]"
                  />
                </div>
              </div>
            </div>

            <p className="font-dm-sans text-[10px] sm:text-xs md:text-sm lg:text-[14px] text-[#0089F0] text-center max-w-[450px] px-4">
              *After 18 months, transition your data to cold storage for $1/TB
              on archival data you access infrequently.
            </p>
          </div>

          <Link
            href={MEETING_URL}
            className="bg-[#E91315] text-white px-4 py-2.5 sm:px-5 sm:py-3 md:px-7 md:py-3.5 rounded-full font-semibold text-xs sm:text-sm md:text-base lg:text-xl flex items-center gap-2 md:gap-2.5 hover:bg-red-700 transition-colors w-fit"
          >
            <Image
              src="/forge/hero/cta-arrow-icon.svg"
              alt=""
              width={24}
              height={24}
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
            />
            <span>Get Your Custom Storage Plan</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
