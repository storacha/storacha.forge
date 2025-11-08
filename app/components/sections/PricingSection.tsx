import Image from 'next/image'

export default function PricingSection() {
  return (
    <section className="bg-[#C5DFFD] py-20">
      <div className="container-custom">
        <div className="flex flex-col items-center gap-16">
          <div className="text-center space-y-8">
            <h2 className="font-epilogue font-medium text-5xl lg:text-[72px] text-[#0176CE] tracking-[-2.88px]">
              Pricing
            </h2>
            <p className="font-dm-sans text-2xl lg:text-[28px] text-[#0089F0] tracking-[-1.12px]">
              Cut your costs, not performance.<br />
              Transparent, predictable, and enterprise ready.
            </p>
          </div>

          <div className="relative">
            <div className="border border-[#0089F0] rounded-[40px] p-10 w-full max-w-[800px] bg-white/50 relative">
              <div className="space-y-8 text-left">
                <p className="font-dm-sans font-medium text-[26px] text-[#0089F0]">
                  Reserved Capacity Plan
                </p>
                
                <p className="font-epilogue font-semibold text-[60px] text-[#0089F0] tracking-[-1.82px]">
                  $5.99 <span className="text-2xl font-normal">/TiB/Month</span>
                </p>
                
                <div className="space-y-4 text-left max-w-md mx-auto">
                  <div className="flex items-center gap-3">
                    <Image src="/forge/pricing/checkmark.svg" alt="" width={24} height={24} />
                    <p className="font-dm-sans font-medium text-[18px] text-[#0089F0]">
                      Capacity Billing
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Image src="/forge/pricing/checkmark.svg" alt="" width={24} height={24} />
                    <p className="font-dm-sans font-medium text-[18px] text-[#0089F0]">
                      Egress: $10/TiB
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Image src="/forge/pricing/checkmark.svg" alt="" width={24} height={24} />
                    <p className="font-dm-sans font-medium text-[18px] text-[#0089F0]">
                      Data Ingress: Free for 18+ month contracts
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="absolute top-0 right-0  ">
                <Image src="/forge/pricing/savings.svg" alt="80% Savings" width={175} height={157} />
              </div>
            </div>
          </div>

          <p className="font-dm-sans text-[22px] text-[#0089F0] text-center max-w-[600px]">
            *After 18 months, transition your data to cold storage for $1/TB on archival data you access infrequently.
          </p>

          <button className="btn-primary">
            <Image src="/forge/hero/cta-arrow-icon.svg" alt="" width={24} height={24} />
            <span>Get Your Custom Storage Plan</span>
          </button>
        </div>
      </div>
    </section>
  )
}
