import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Column 1 */}
          <div className="space-y-6">
            <Link
              href="#why"
              className="block text-[#0176CE] font-dm-sans text-[18px] font-semibold leading-6 hover:underline"
            >
              Why Storacha
            </Link>
            <Link
              href="#use-cases"
              className="block text-[#0176CE] font-dm-sans text-[18px] font-semibold leading-6 hover:underline"
            >
              Use Cases
            </Link>
            <Link
              href="#stories"
              className="block text-[#0176CE] font-dm-sans text-[18px] font-semibold leading-6 hover:underline"
            >
              Success Stories
            </Link>
          </div>

          {/* Column 2 */}
          <div className="space-y-6">
            <Link
              href="#pricing"
              className="block text-[#0176CE] font-dm-sans text-[18px] font-semibold leading-6 hover:underline"
            >
              Pricing
            </Link>
            <Link
              href="#comparison"
              className="block text-[#0176CE] font-dm-sans text-[18px] font-semibold leading-6 hover:underline"
            >
              Cost Comparison
            </Link>
          </div>

          {/* Column 3 - Empty for layout */}
          <div></div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-wrap items-center justify-between gap-6 pt-8 border-t border-gray-200">
          <Image
            src="/forge/logos/storacha-logo.png"
            alt="Storacha"
            width={140}
            height={50}
            className="h-[50px] w-auto"
          />
          
          <div className="flex flex-wrap items-center gap-8">
            <Link
              href="https://docs.storacha.network/terms/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0176CE] font-dm-sans text-[18px] font-semibold leading-6 hover:underline"
            >
              Terms
            </Link>
            <Link
              href="https://docs.storacha.network/privacy-policy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0176CE] font-dm-sans text-[18px] font-semibold leading-6 hover:underline"
            >
              Privacy Policy
            </Link>
            <Link
              href="https://www.linkedin.com/company/storacha"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0176CE] font-dm-sans text-[18px] font-semibold leading-6 hover:underline"
            >
              Linkedin
            </Link>
          </div>

          <span className="text-[#0176CE] font-dm-sans text-[18px] font-semibold leading-6">
            @2025 Storacha
          </span>
        </div>
      </div>
    </footer>
  );
}