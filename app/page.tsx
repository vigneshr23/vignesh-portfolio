import { Metadata } from "next";
import Link from "next/link"

export const metadata: Metadata = {
  title: "Vignesh R — Developer & Engineer",
};

const LINKS = [
  // { label: "Email", href: "mailto:hello@vignesh.dev" },
  { label: "GitHub", href: "https://github.com/vigneshr23" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/vigneshrsharma" }
];

export default function Home() {
  return (
    <main
      style={{ color: "var(--color-text-primary)" }}
      className="font-mono min-h-screen flex flex-col justify-between px-8 md:px-12 py-10"
    >
      {/* Top bar */}
      <header className="flex items-start justify-between">
        <span
          style={{ color: "var(--color-text-tertiary)" }}
          className="text-[11px] tracking-[0.12em] uppercase"
        >
          <Link href="/">
            vignesh-labs
          </Link>
        </span>

        <div
          style={{ color: "var(--color-text-tertiary)" }}
          className="flex items-center gap-2 text-[11px] tracking-[0.08em]"
        >
          <span
            className="w-[7px] h-[7px] rounded-full bg-green-700 animate-pulse-dot"
            aria-hidden="true"
          />
          site coming soon
        </div>
      </header>

      {/* Main content */}
      <section className="flex-1 flex flex-col justify-center py-16">
        <h1
          className="font-serif leading-none tracking-tight"
          style={{
            fontSize: "clamp(3.2rem, 9vw, 6.5rem)",
            color: "var(--color-text-primary)",
          }}
        >
          Vignesh &nbsp;
          <em style={{ color: "var(--color-text-secondary)" }}>R</em>
        </h1>

        <p
          style={{ color: "var(--color-text-secondary)" }}
          className="text-[13px] tracking-[0.1em] uppercase mt-5"
        >
          Developer &amp; Engineer
        </p>

        <div
          style={{ background: "var(--color-border)" }}
          className="w-10 h-px my-8"
        />

        <p
          style={{ color: "var(--color-text-secondary)" }}
          className="text-sm leading-relaxed max-w-sm"
        >
          A seasoned engineer, Building thoughtful software. 
          <br />
          A proper portfolio is on its way —
          check back soon.
        </p>

        {/* Links */}
        <nav className="flex flex-wrap gap-6 mt-10" aria-label="Social links">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel={
                link.href.startsWith("mailto")
                  ? undefined
                  : "noopener noreferrer"
              }
              style={{
                color: "var(--color-text-primary)",
                borderBottomColor: "var(--color-border)",
              }}
              className="text-[12px] tracking-[0.08em] uppercase border-b pb-0.5
                         transition-colors duration-200
                         hover:opacity-50"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </section>

      {/* Footer */}
      <footer
        style={{ borderTopColor: "var(--color-border-subtle)" }}
        className="flex items-end justify-between flex-wrap gap-3 border-t pt-5"
      >
        <p
          style={{ color: "var(--color-text-tertiary)" }}
          className="text-[11px] tracking-[0.06em] leading-relaxed max-w-xs"
        >
          This page is a placeholder while the full site is in progress.
        </p>
        <span
          style={{ color: "var(--color-text-tertiary)" }}
          className="text-[11px]"
        >
          &copy; {new Date().getFullYear()}
        </span>
      </footer>
    </main>
  );
}
