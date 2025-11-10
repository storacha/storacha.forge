import Image from 'next/image'

export default function TrustedBySection() {
  const partners = [
    { name: 'Harvard', logo: '/forge/partners/harvard.png' },
    { name: 'Filecoin', logo: '/forge/partners/filecoin.png' },
    { name: 'Solana', logo: '/forge/partners/solana.png' },
    { name: 'Infura', logo: '/forge/partners/infura.png' },
    { name: 'Parasail', logo: '/forge/partners/parasail.png' },
  ]

  return (
    <section id="trusted-by" className="bg-white border-t border-gray-200">
      <div className="container-custom py-6">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div className="bg-white border-2 border-[#0176CE] rounded-full px-5 py-2.5">
            <p className="font-dm-sans font-medium text-[#0176CE] text-xl">Trusted By</p>
          </div>
          
          {partners.map((partner) => (
            <div key={partner.name} className="flex items-center">
              <Image
                src={partner.logo}
                alt={partner.name}
                width={150}
                height={36}
                className="h-9 w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
