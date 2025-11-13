import Image from "next/image";
import Link from "next/link";
import { MEETING_URL } from "@/lib/constants";

export default function DataOwnershipSection() {
  return (
    <section id="data-ownership" className="bg-[#0176CE] relative overflow-hidden py-20">
      <div className="container-custom">
        {/* Heading - Full Width */}
        <div className="text-white mb-16">
          <h2 className="font-epilogue font-medium text-5xl lg:text-[72px] leading-[1.2] tracking-[-2.88px]">
            You Own the Data.
            <br />
            You Control the Access.
          </h2>
        </div>

        {/* Content Grid - Image Left, Text Right */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Image */}
          <div className="relative">
            <Image
              src="/forge/data-ownership/data-centre.png"
              alt="Globe"
              width={500}
              height={400}
              className="rounded-[20px] w-full h-auto"
            />
          </div>

          {/* Right Column - Text + CTA */}
          <div className="text-white space-y-8">
            <div className="space-y-6 text-xl lg:text-2xl leading-relaxed">
              <p className="font-bold text-2xl lg:text-[32px]">
                Your data. Your keys. Your control.
              </p>

              <p>
                Storacha Forge encrypts and replicates every file across
                independent nodes with cryptographic proof of ownership.
              </p>

              <p>
                Share directly without APIs or centralized servers. Enterprise
                security, decentralized freedom, permanent control.
              </p>
            </div>

            <Link 
              href={MEETING_URL}
              className="bg-[#E91315] text-white px-7 py-3.5 rounded-full font-semibold text-xl flex items-center gap-2.5 hover:bg-red-700 transition-colors w-fit"
            >
              <Image
                src="/forge/hero/cta-arrow-icon.svg"
                alt=""
                width={20}
                height={20}
              />
              <span>Talk to your expert</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}