import Image from "next/image";

export default function CostComparisonSection() {
  const competitors = [
    {
      name: "Storacha Forge",
      logo: "/forge/cost-comparison/forge.svg",
      storage: "$5.99",
      egress: "$10",
      ownership: true,
      verifiability: true,
      highlight: true,
    },
    {
      name: "Google Nearline",
      logo: "/forge/cost-comparison/nearline.svg",
      storage: "$10.24",
      egress: "$120",
      ownership: false,
      verifiability: false,
    },
    {
      name: "AWS S3 Standard-IA",
      logo: "/forge/cost-comparison/aws.svg",
      storage: "$12.80",
      egress: "$100",
      ownership: false,
      verifiability: false,
    },
  ];

  const chartData = [
    {
      company: "Storacha",
      logo: "/forge/cost-comparison/forge.svg",
      cost: 7788,
      height: { mobile: 50, tablet: 82, desktop: 109 },
      highlight: true,
    },
    {
      company: "Wasabi",
      logo: "/forge/cost-comparison/wasabi.svg",
      cost: 8592,
      height: { mobile: 84, tablet: 135, desktop: 180 },
    },
    {
      company: "Azure",
      logo: "/forge/cost-comparison/azure.svg",
      cost: 18288,
      height: { mobile: 118, tablet: 193, desktop: 257 },
    },
    {
      company: "Google",
      logo: "/forge/cost-comparison/google.svg",
      cost: 19488,
      height: { mobile: 126, tablet: 206, desktop: 274 },
    },
    {
      company: "Amazon",
      logo: "/forge/cost-comparison/aws.svg",
      cost: 21360,
      height: { mobile: 138, tablet: 225, desktop: 300 },
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
          <div className="w-full">
            <table className="w-full">
              <thead>
                <tr className="bg-white rounded-xl">
                  <th className="text-left p-1 sm:p-2 md:p-3 lg:p-4 font-dm-sans font-semibold text-[#0176CE] text-[8px] sm:text-xs md:text-lg lg:text-xl xl:text-2xl leading-tight rounded-tl-xl md:rounded-tl-2xl">
                    Provider
                  </th>
                  <th className="text-center p-1 sm:p-2 md:p-3 lg:p-4 font-dm-sans font-semibold text-[#0176CE] text-[7px] sm:text-xs md:text-lg lg:text-xl xl:text-2xl leading-tight">
                    Storage Cost/TiB/Month
                  </th>
                  <th className="text-center p-1 sm:p-2 md:p-3 lg:p-4 font-dm-sans font-semibold text-[#0176CE] text-[7px] sm:text-xs md:text-lg lg:text-xl xl:text-2xl leading-tight">
                    Egress Cost/TiB
                  </th>
                  <th className="text-center p-1 sm:p-2 md:p-3 lg:p-4 font-dm-sans font-semibold text-[#0176CE] text-[7px] sm:text-xs md:text-lg lg:text-xl xl:text-2xl leading-tight">
                    True Data Ownership
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
                    <td className="p-1 sm:p-2 md:p-3 lg:p-4 text-center font-dm-sans font-medium text-[8px] sm:text-xs md:text-lg lg:text-xl xl:text-2xl">
                      {comp.storage}
                    </td>
                    <td className="p-1 sm:p-2 md:p-3 lg:p-4 text-center font-dm-sans font-medium text-[8px] sm:text-xs md:text-lg lg:text-xl xl:text-2xl">
                      {comp.egress}
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
                        index === competitors.length - 1 ? "rounded-br-xl md:rounded-br-2xl" : ""
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

          {/* Cost Advantage Section */}
          <div className="grid lg:grid-cols-2 gap-6 md:gap-10 lg:gap-12 items-center">
            <div>
              {/* Bar Chart */}
              <div className="relative flex items-end gap-1.5 md:gap-3 lg:gap-4 justify-center px-2 md:px-4">
                {chartData.map((item, index) => (
                  <div
                    key={item.company}
                    className="flex flex-col items-center relative"
                  >
                    <p
                      className={`font-dm-sans ${
                        item.highlight
                          ? "font-extrabold text-xs md:text-lg lg:text-xl xl:text-[24px]"
                          : "font-medium text-[10px] md:text-sm lg:text-[16px]"
                      } text-[#0176CE] mb-1 whitespace-nowrap`}
                    >
                      ${item.cost.toLocaleString()}/yr
                    </p>
                    <div
                      className={`w-[32px] md:w-[50px] lg:w-[60px] rounded-t-xl transition-all duration-300 ${
                        item.highlight
                          ? "bg-[#0176CE]"
                          : "bg-gradient-to-b from-white via-[#aedcff] to-[#0176CE]"
                      } md:!h-[var(--tablet-height)] lg:!h-[var(--desktop-height)]`}
                      style={
                        {
                          "--mobile-height": `${item.height.mobile}px`,
                          "--tablet-height": `${item.height.tablet}px`,
                          "--desktop-height": `${item.height.desktop}px`,
                          height: `${item.height.mobile}px`,
                        } as React.CSSProperties & {
                          "--mobile-height": string;
                          "--tablet-height": string;
                          "--desktop-height": string;
                        }
                      }
                    />
                    <Image
                      src={item.logo}
                      alt={item.company}
                      width={40}
                      height={40}
                      className="mt-1.5 md:mt-3 w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 object-contain"
                    />
                  </div>
                ))}
              </div>
              <p className="text-[#0176CE] text-[10px] md:text-sm text-center mt-2 md:mt-4">
                *For 100 TB storage and 5TB monthly egress
              </p>
            </div>

            <div className="space-y-3 md:space-y-6 text-[#0176CE]">
              <p className="text-base md:text-xl lg:text-2xl xl:text-[32px] leading-relaxed">
                Transparent <span className="font-bold">pricing,</span>{" "}
                <span className="font-bold">decentralized storage</span> with
                predictable costs and cryptographic proof of ownership, your
                data, <span className="font-bold">your control</span>, forever.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
