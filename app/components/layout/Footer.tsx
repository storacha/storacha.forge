import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#0176CE] text-white pt-8 pb-12">
      <div className="container-custom">

        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="space-y-5">
            <Image
              src="/forge/logos/storacha-logo.png"
              alt="Storacha"
              width={168}
              height={60}
              className="h-[60px] w-auto invert"
            />
            <p className="font-dm-sans text-[28px] leading-relaxed">
              Your data. Your keys.<br />Your control.
            </p>
          </div>
          
          <div className="space-y-5">
            <Link href="#pricing" className="block font-dm-sans text-xl hover:underline">Pricing</Link>
            <Link href="#comparison" className="block font-dm-sans text-xl hover:underline">Cost Comparison</Link>
            <Link href="#why" className="block font-dm-sans text-xl hover:underline">Why Storacha</Link>
            <Link href="#use-cases" className="block font-dm-sans text-xl hover:underline">Use Cases</Link>
            <Link href="#stories" className="block font-dm-sans text-xl hover:underline">Success Stories</Link>
          </div>
          
          <div className="space-y-5">
            <Link href="https://linkedin.com" className="block font-dm-sans text-xl hover:underline">LinkedIn</Link>
            <Link href="https://storacha.network" className="block font-dm-sans text-xl hover:underline">Website</Link>
            <Link href="#faq" className="block font-dm-sans text-xl hover:underline">FAQ</Link>
            <Link href="#contact" className="block font-dm-sans text-xl hover:underline">Contact Us</Link>
            <Link href="#terms" className="block font-dm-sans text-xl hover:underline">Terms</Link>
            <Link href="#privacy" className="block font-dm-sans text-xl hover:underline">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
