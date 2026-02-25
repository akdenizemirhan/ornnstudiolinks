"use client";

import { track } from "@vercel/analytics";

const links = [
  {
    label: "Web Sitemiz",
    href: "https://ornn.studio",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/ornnagency/",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/ornn-studio/",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/905524500535",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://facebook.com/ornnstudio",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "E-posta",
    href: "mailto:hello@ornn.studio",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <div className="relative flex min-h-svh items-start justify-center bg-[#FFFFFF]">
      {/* Background glow */}
      <div className="bg-glow" />

      <main className="relative z-10 flex w-full max-w-[480px] flex-col items-center px-6 py-12 sm:py-16">
        {/* Logo */}
        <div
          className="animate-fade-up mb-2"
          style={{ animationDelay: "0ms" }}
        >
          <h1 className="text-[22px] font-extralight tracking-[0.35em] text-[#0B0B0B] uppercase">
            ORNN STUDIO<span className="text-[10px] align-super ml-0.5">®</span>
          </h1>
        </div>

        {/* Tagline */}
        <p
          className="animate-fade-up mb-10 text-sm font-light tracking-wide text-[#6A6969]"
          style={{ animationDelay: "100ms" }}
        >
          Dijital Büyüme Ortağınız
        </p>

        {/* Divider */}
        <div
          className="animate-fade-up mb-10 h-px w-12 bg-[#E7E7E7]"
          style={{ animationDelay: "150ms" }}
        />

        {/* Link Buttons */}
        <div className="flex w-full flex-col gap-3.5">
          {links.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${link.label} — Ornn Studio`}
              onClick={() => track("link_click", { link: link.label })}
              className="link-btn animate-fade-up flex w-full items-center gap-4 rounded-2xl border border-[rgba(0,0,0,0.06)] bg-[#F6F8FE] px-5 py-4 text-[#0B0B0B] no-underline"
              style={{ animationDelay: `${200 + i * 80}ms` }}
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-[#0B0B0B]">
                {link.icon}
              </span>
              <span className="text-[15px] font-medium tracking-wide">
                {link.label}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-auto text-[#AEAEAE]"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </a>
          ))}
        </div>

        {/* Footer */}
        <footer
          className="animate-fade-up mt-14 text-center text-xs font-light tracking-wide text-[#AEAEAE]"
          style={{ animationDelay: `${200 + links.length * 80 + 100}ms` }}
        >
          <p>&copy; 2026 Ornn Studio</p>
        </footer>
      </main>
    </div>
  );
}
