import type { Metadata } from "next";
import { Epilogue, DM_Sans } from "next/font/google";
import "./globals.css";
import PlausibleProvider from "next-plausible";

const epilogue = Epilogue({
  variable: "--font-epilogue",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://forge.storacha.network"),
  title: "Storacha Forge - Cut Cloud Backup Costs by 80%",
  description:
    "Decentralized backup & archival for enterprises, secure, verifiable, zero lock-in. Your data, governed by protocol, not corporations.",
  keywords:
    "cloud storage, decentralized storage, backup solutions, enterprise storage, filecoin, IPFS, data ownership, cloud backup, archival storage",
  icons: {
    icon: "/forge/cost-comparison/forge.svg",
    apple: "/forge/cost-comparison/forge.svg",
  },
  openGraph: {
    title: "Storacha Forge - Cut Cloud Backup Costs by 80%",
    description:
      "Decentralized backup & archival for enterprises, secure, verifiable, zero lock-in.",
    url: "https://forge.storacha.network",
    siteName: "Storacha Forge",
    images: [
      {
        url: "/forge/cost-comparison/forge.svg",
        width: 334,
        height: 334,
        alt: "Storacha Forge - Decentralized Cloud Storage",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Storacha Forge - Cut Cloud Backup Costs by 80%",
    description:
      "Decentralized backup & archival for enterprises, secure, verifiable, zero lock-in.",
    images: ["/forge/cost-comparison/forge.svg"],
    creator: "@storachanetwork",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "KfBIk19AYw14qC6nMtc3_RVlM49pn6eJLRcS1XwhXMc",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${epilogue.variable} ${dmSans.variable}`}>
      <body className="font-sans antialiased">
        <PlausibleProvider
          domain="forge.storacha.network"
          trackFileDownloads={true}
          trackOutboundLinks={true}
          taggedEvents={true}
          trackLocalhost={true}
          enabled={true}
        >
          {children}
        </PlausibleProvider>
      </body>
    </html>
  );
}
