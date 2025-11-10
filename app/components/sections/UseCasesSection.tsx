import Image from "next/image";

export default function UseCasesSection() {
  const useCases = [
    {
      category: "Financial, Healthcare, Legal",
      icon: "/forge/use-cases/compliance-archives.svg",
      title: "Compliance & Archives",
      description:
        "Retain data for years with cryptographic proof of integrity. Instant access for audits. After 18 months, drop to $1/TiB cold storage, compliant and cost-effective.",
    },
    {
      category: "DevOps, Infrastructure",
      icon: "/forge/use-cases/disaster-recovery.svg",
      title: "Multi-Cloud Disaster Recovery",
      description:
        "Store once, retrieve to any cloud in seconds. No proprietary APIs. No vendor can lock you in when you need to failover.",
    },
    {
      category: "Satellite, Drone, GIS",
      icon: "/forge/use-cases/geospatial.png",
      title: "Geospatial Data at Scale",
      description:
        "Cryptographic verification on every image, critical for legal evidence, compliance and verifiable AI training.",
      isImage: true,
    },
  ];

  return (
    <section id="use-cases" className="bg-white py-20">
      <div className="container-custom">
        <div className="space-y-12">
          <h2 className="font-epilogue font-medium text-5xl lg:text-[72px] text-[#0176CE] tracking-[-2.88px]">
            Use Cases
          </h2>

          <div className="grid lg:grid-cols-3 gap-5">
            {useCases.map((useCase) => (
              <div
                key={useCase.title}
                className="border border-[#0176CE] rounded-[20px] overflow-hidden"
              >
                <div className="bg-[#0176CE] px-9 py-5">
                  <p className="font-dm-sans font-medium text-[18px] text-white leading-tight">
                    {useCase.category}
                  </p>
                </div>

                <div className="p-9 space-y-10">
                  <div className="w-[60px] h-[60px] bg-[#C5DFFD] rounded-full flex items-center justify-center">
                    <Image
                      src={useCase.icon}
                      alt={useCase.title}
                      width={40}
                      height={40}
                      className="w-auto h-auto"
                    />
                  </div>

                  <h3 className="font-epilogue font-medium text-[30px] leading-none text-[#0176CE] tracking-[-1.6px]">
                    {useCase.title}
                  </h3>

                  <p className="font-dm-sans text-xl text-[#0176CE] leading-relaxed">
                    {useCase.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <button className="bg-[#0176CE] text-white px-8 py-5 rounded-full font-semibold text-2xl flex items-center gap-2.5 hover:bg-[#0089F0] transition-colors">
              <Image
                src="/forge/use-cases/arrow.svg"
                alt=""
                width={24}
                height={24}
              />
              <span>View our documentation</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
