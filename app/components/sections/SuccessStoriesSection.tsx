import Image from 'next/image'

export default function SuccessStoriesSection() {
  const testimonials = [
    {
      quote: "Storacha Forge has enabled us to upload PiBs of data with ZERO FRICTION backed up on Filecoin. No approval chains. No corporate gatekeepers. Our data can't be censored or held hostage.",
      author: "Clara Tsao",
      role: "Co-Founder/Founding Officer",
      company: "Filecoin Foundation"
    },
    {
      quote: "Storacha Forge lets us back up Solana's full network state with full integrity and instant accessibility. Node operators can retrieve any block by byte range, reducing storage costs dramatically, no slow restores, no cold storage limits, no compromise on verifiability.",
      author: "Brian Long",
      role: "Infrastructure",
      company: "Triton"
    },
    {
      quote: "Storacha Forge lets us store auditable transactional data and network analytics with guaranteed data integrity. We get compliance-grade verifiability, no vendor lock-in, no surprise fees, just low-cost archival storage that stays accessible when regulators or auditors need it.",
      author: "Tim Harris",
      role: "Infrastructure",
      company: "Parasail"
    },
    {
      quote: "Storacha Forge backs up our historical blockchain state on verifiable storage at a fraction of cloud costs. During network upgrades, state data is accessible immediately not locked in cold storage. Cryptographic proofs give our backups the same integrity guarantees as the chains themselves.",
      author: "Aidan Hyman",
      role: "Infrastructure",
      company: "Chainsafe"
    }
  ]

  return (
    <section id="stories" className="bg-[#C5DFFD] py-20">
      <div className="container-custom">
        <div className="space-y-12">
          <div className="text-center space-y-6">
            <h2 className="font-epilogue font-medium text-5xl lg:text-[72px] text-[#0176CE] tracking-[-2.88px]">
              Success Stories
            </h2>
            <p className="font-dm-sans text-2xl lg:text-[28px] text-[#0176CE] tracking-[-1.12px]">
              Hear from leaders building on Storacha Forge
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="space-y-10">
                  <Image
                    src="/forge/testimonials/quote.svg"
                    alt="Quote"
                    width={42}
                    height={40}
                  />
                  
                  <p className="font-dm-sans italic text-xl text-[#0176CE] leading-relaxed">
                    {testimonial.quote}
                  </p>
                  
                  <div className="space-y-2">
                    <p className="font-epilogue font-semibold text-2xl text-[#0176CE]">
                      {testimonial.author}
                    </p>
                    <p className="font-dm-sans text-base text-[#0176CE]">
                      {testimonial.role}
                    </p>
                    <span className="inline-block bg-[#0176CE] text-white px-3 py-1 rounded-full font-dm-sans font-semibold text-base">
                      {testimonial.company}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
