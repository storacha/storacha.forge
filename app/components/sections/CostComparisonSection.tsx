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
      egress: "$100",
      ownership: false,
      verifiability: false,
    },
    {
      name: "AWS S3 Standard-IA",
      logo: "/forge/cost-comparison/aws.svg",
      storage: "$12.80",
      egress: "$90",
      ownership: false,
      verifiability: false,
    },
  ];

  const chartData = [
    {
      company: "Google",
      logo: "/forge/cost-comparison/google.svg",
      cost: 288756,
      height: 313,
    },
    {
      company: "Amazon",
      logo: "/forge/cost-comparison/amazon.svg",
      cost: 251892,
      height: 248,
    },
    {
      company: "Azure",
      logo: "/forge/cost-comparison/azure.svg",
      cost: 226104,
      height: 201,
    },
    {
      company: "Wasabi",
      logo: "/forge/cost-comparison/wasabi.svg",
      cost: 42960,
      height: 123,
    },
    {
      company: "Storacha",
      logo: "/forge/cost-comparison/forge.svg",
      cost: 36857,
      height: 65,
      highlight: true,
    },
  ];

  return (
    <section id="comparison" className="bg-[#C5DFFD] py-20">
      <div className="container-custom">
        <div className="space-y-16">
          <div className="text-center">
            <h2 className="font-epilogue font-medium text-5xl lg:text-[72px] text-[#0176CE] tracking-[-2.88px]">
              Cost Comparison
            </h2>
          </div>

          {/* Comparison Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-white rounded-xl">
                  <th className="text-left p-4 font-dm-sans font-semibold text-[#0176CE] text-2xl">
                    Provider
                  </th>
                  <th className="text-center p-4 font-dm-sans font-semibold text-[#0176CE] text-2xl">
                    Storage Cost/TiB/Month
                  </th>
                  <th className="text-center p-4 font-dm-sans font-semibold text-[#0176CE] text-2xl">
                    Egress Cost/TiB
                  </th>
                  <th className="text-center p-4 font-dm-sans font-semibold text-[#0176CE] text-2xl">
                    True Data Ownership
                  </th>
                  <th className="text-center p-4 font-dm-sans font-semibold text-[#0176CE] text-2xl">
                    Verifiability
                  </th>
                </tr>
              </thead>
              <tbody className="space-y-2">
                {competitors.map((comp) => (
                  <tr
                    key={comp.name}
                    className={`${
                      comp.highlight
                        ? "bg-[#0176CE] text-white"
                        : "bg-white text-[#0176CE]"
                    } rounded-[20px]`}
                  >
                    <td className="p-4 flex items-center gap-2">
                      <Image
                        src={comp.logo}
                        alt={comp.name}
                        width={32}
                        height={32}
                      />
                      <span className="font-dm-sans font-medium text-2xl">
                        {comp.name}
                      </span>
                    </td>
                    <td className="p-4 text-center font-dm-sans font-medium text-2xl">
                      {comp.storage}
                    </td>
                    <td className="p-4 text-center font-dm-sans font-medium text-2xl">
                      {comp.egress}
                    </td>
                    <td className="p-4 text-center font-dm-sans font-medium text-2xl">
                      {comp.ownership ? "✓" : "❌"}
                    </td>
                    <td className="p-4 text-center font-dm-sans font-medium text-2xl">
                      {comp.verifiability ? "✓" : "❌"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Cost Advantage Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-epilogue font-medium text-[32px] text-[#0176CE] mb-8">
                Calculate Your Cost Advantage
              </h3>

              {/* Bar Chart */}
              <div className="relative flex items-end gap-4 justify-center px-4">
                {chartData.map((item, index) => (
                  <div
                    key={item.company}
                    className="flex flex-col items-center relative"
                  >
                    <p
                      className={`font-dm-sans ${
                        item.highlight
                          ? "font-extrabold text-[24px]"
                          : "font-medium text-[16px]"
                      } text-[#0176CE] mb-2 whitespace-nowrap`}
                    >
                      ${item.cost.toLocaleString()}/yr
                    </p>
                    <div
                      className={`w-[60px] rounded-t-xl transition-all duration-300 ${
                        item.highlight
                          ? "bg-[#0176CE]"
                          : "bg-gradient-to-b from-white via-[#aedcff] to-[#0176CE]"
                      }`}
                      style={{ height: `${item.height}px` }}
                    />
                    <Image
                      src={item.logo}
                      alt={item.company}
                      width={40}
                      height={40}
                      className="mt-3 h-8 w-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6 text-[#0176CE]">
              <p className="text-[32px] leading-relaxed">
                Transparent <span className="font-bold">flat-rate pricing,</span>{" "}

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
