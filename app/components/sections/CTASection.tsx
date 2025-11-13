import Image from "next/image";
import Link from "next/link";
import { MEETING_URL } from "@/lib/constants";

export default function CTASection() {
  const steps = [
    { number: "1", text: "Submit the form" },
    { number: "2", text: "Connect with a solutions expert" },
    { number: "3", text: "Start backing up for 80% less" },
  ];

  return (
    <section className="bg-[#0176CE] relative overflow-hidden py-20">
      <div className="container-custom">
        <div className="flex flex-col items-center gap-12">
          <h2 className="font-epilogue font-medium text-5xl lg:text-[72px] text-white text-center">
            Ready to Pay 80% Less for Backup?
          </h2>

          <div className="space-y-3">
            {steps.map((step) => (
              <div key={step.number} className="flex items-center gap-3">
                <div className="bg-[#E91315] border-2 border-white rounded-full w-8 h-8 flex items-center justify-center">
                  <span className="font-epilogue font-medium text-white text-lg">
                    {step.number}
                  </span>
                </div>
                <p className="font-dm-sans font-medium text-xl text-white">
                  {step.text}
                </p>
              </div>
            ))}
          </div>

          <Link
            href={MEETING_URL}
            className="bg-[#E91315] text-white px-8 py-5 rounded-full font-semibold text-2xl flex items-center gap-2.5 hover:bg-red-700 transition-colors w-fit"
          >
            <Image
              src="/forge/hero/cta-arrow-icon.svg"
              alt=""
              width={24}
              height={24}
            />
            <span>Talk to your expert</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
