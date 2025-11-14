"use client";

import { MEETING_URL } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { usePlausible } from "next-plausible";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const plausible = usePlausible();

  if (!isOpen) return null;

  return (
    <div className="lg:hidden fixed inset-0 bg-[#C5DFFD] z-50 flex flex-col min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-3 flex-shrink-0">
        <Image
          src="/forge/logos/forge-header.svg"
          alt="Storacha"
          width={191}
          height={68}
          className="h-10 w-auto"
        />
        <button onClick={onClose} className="p-2" aria-label="Close menu">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 md:w-8 md:h-8"
          >
            <path
              d="M24 8L8 24M8 8L24 24"
              stroke="#0176CE"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {/* Content - No scrolling */}
      <div className="flex-1 overflow-hidden px-6 py-6 flex flex-col">
        {/* Menu Items */}
        <nav className="space-y-6 flex-shrink-0 mb-12">
          <Link
            href="#why"
            className="flex items-center gap-4 text-[#0176CE] font-medium text-xl py-2"
            onClick={onClose}
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              className="w-8 h-8 flex-shrink-0"
            >
              <path
                d="M16 4L4 10L16 16L28 10L16 4Z"
                stroke="#0176CE"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 16L16 22L28 16"
                stroke="#0176CE"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 22L16 28L28 22"
                stroke="#0176CE"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>FEATURES</span>
          </Link>

          <Link
            href="#pricing"
            className="flex items-center gap-4 text-[#0176CE] font-medium text-xl py-2"
            onClick={onClose}
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              className="w-8 h-8 flex-shrink-0"
            >
              <circle cx="16" cy="16" r="10" stroke="#0176CE" strokeWidth="2" />
              <path
                d="M16 10V12M16 20V22M19 13C19 11.8954 17.6569 11 16 11C14.3431 11 13 11.8954 13 13C13 14.1046 14.3431 15 16 15C17.6569 15 19 15.8954 19 17C19 18.1046 17.6569 19 16 19C14.3431 19 13 18.1046 13 17"
                stroke="#0176CE"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <span>PRICING</span>
          </Link>

          <Link
            href="#use-cases"
            className="flex items-center gap-4 text-[#0176CE] font-medium text-xl py-2"
            onClick={onClose}
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              className="w-8 h-8 flex-shrink-0"
            >
              <rect
                x="6"
                y="6"
                width="8"
                height="8"
                stroke="#0176CE"
                strokeWidth="2"
                rx="1"
              />
              <rect
                x="18"
                y="6"
                width="8"
                height="8"
                stroke="#0176CE"
                strokeWidth="2"
                rx="1"
              />
              <rect
                x="6"
                y="18"
                width="8"
                height="8"
                stroke="#0176CE"
                strokeWidth="2"
                rx="1"
              />
              <rect
                x="18"
                y="18"
                width="8"
                height="8"
                stroke="#0176CE"
                strokeWidth="2"
                rx="1"
              />
            </svg>
            <span>USE CASES</span>
          </Link>
        </nav>

        {/* Get Started - Bottom */}
        <Link
          href={MEETING_URL}
          className="bg-[#0176CE] text-white px-6 py-4 rounded-full font-semibold text-lg text-center mb-auto hover:bg-[#0089F0] transition-colors flex-shrink-0"
          onClick={() => {
            plausible("CTA Click", { props: { location: "mobile-menu" } });
            onClose();
          }}
        >
          GET STARTED
        </Link>

        {/* Social Links - Footer with responsive sizing */}
        <div className="pt-4 pb-6 flex justify-center gap-2 flex-shrink-0 mt-auto">
          <a
            href="https://discord.gg/pqa6Dn6RnP"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0176CE] hover:opacity-70 transition-opacity"
            aria-label="Discord"
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 sm:w-7 sm:h-7"
            >
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
            </svg>
          </a>
          <a
            href="https://x.com/storachanetwork"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0176CE] hover:opacity-70 transition-opacity"
            aria-label="X"
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 sm:w-7 sm:h-7"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a
            href="https://github.com/storacha"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0176CE] hover:opacity-70 transition-opacity"
            aria-label="GitHub"
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 sm:w-7 sm:h-7"
            >
              <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
            </svg>
          </a>
          <a
            href="https://medium.com/@storacha"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0176CE] hover:opacity-70 transition-opacity"
            aria-label="Medium"
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 sm:w-7 sm:h-7"
            >
              <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
            </svg>
          </a>
          <a
            href="https://www.youtube.com/@StorachaNetwork"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0176CE] hover:opacity-70 transition-opacity"
            aria-label="YouTube"
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 sm:w-7 sm:h-7"
            >
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </a>
          <a
            href="https://warpcast.com/storacha"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0176CE] hover:opacity-70 transition-opacity"
            aria-label="Farcaster"
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 sm:w-7 sm:h-7"
            >
              <path d="M18.24 4.32h-1.92V2.4h-8.64v1.92H5.76c-.48 0-.96.48-.96.96v13.44c0 .48.48.96.96.96h1.92v1.92h8.64v-1.92h1.92c.48 0 .96-.48.96-.96V5.28c0-.48-.48-.96-.96-.96zm-10.56 0h-.96v12.48h.96V4.32zm8.64 12.48h-.96V4.32h.96v12.48z" />
            </svg>
          </a>
          <a
            href="https://bsky.app/profile/storacha.network"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0176CE] hover:opacity-70 transition-opacity"
            aria-label="Bluesky"
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 sm:w-7 sm:h-7"
            >
              <path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364.136-.02.275-.039.415-.056-.138.022-.276.04-.415.056-3.912.58-7.387 2.005-2.83 7.078 5.013 5.19 6.87-1.113 7.823-4.308.953 3.195 2.05 9.271 7.733 4.308 4.267-4.308 1.172-6.498-2.74-7.078a8.741 8.741 0 0 1-.415-.056c.14.017.279.036.415.056 2.67.297 5.568-.628 6.383-3.364.246-.828.624-5.79.624-6.478 0-.69-.139-1.861-.902-2.206-.659-.298-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8Z" />
            </svg>
          </a>
          <a
            href="https://www.reddit.com/r/Storacha"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0176CE] hover:opacity-70 transition-opacity"
            aria-label="Reddit"
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 sm:w-7 sm:h-7"
            >
              <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
