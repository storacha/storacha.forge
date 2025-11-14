import type { Metadata } from 'next'
import { Epilogue, DM_Sans } from 'next/font/google'
import './globals.css'
import PlausibleProvider from 'next-plausible';

const epilogue = Epilogue({
  variable: '--font-epilogue',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Storacha Forge - Cut Cloud Backup Costs by 80%',
  description: 'Decentralized backup & archival for enterprises, secure, verifiable, zero lock-in. Your data, governed by protocol, not corporations.',
  keywords: 'cloud storage, decentralized storage, backup solutions, enterprise storage, filecoin, IPFS, data ownership',
  openGraph: {
    title: 'Storacha Forge - Cut Cloud Backup Costs by 80%',
    description: 'Decentralized backup & archival for enterprises, secure, verifiable, zero lock-in.',
    images: ['/forge/hero/earth-bg.png'],
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${epilogue.variable} ${dmSans.variable}`}>
      <body className="font-sans antialiased">
      <PlausibleProvider domain="forge.staging.staging.network">
        {children}
        </PlausibleProvider>
      </body>
    </html>
  )
}
