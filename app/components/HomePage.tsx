'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const EXPERIENCE = [
  {
    company: 'Tekion Corp',
    role: 'Senior Software Engineer',
    period: '2022 – present',
    note: 'Automotive OEM platforms (Chevy, Cadillac, Buick). Team leadership. Frontend architecture.',
  },
  {
    company: 'Accenture',
    role: 'Application Development Lead',
    period: '2020 – 2022',
    note: 'Enterprise online sales channel. Offshore team lead. Agile delivery.',
  },
  {
    company: 'Early Stage Startups',
    role: 'Software Developer',
    period: '2019 – 2020',
    note: 'React.js, REST APIs — product interfaces from scratch.',
  },
  {
    company: 'Echidna',
    role: 'Interactive Developer',
    period: '2016 – 2018',
    note: 'Web development, UI, client-facing features.',
  },
];

const STACK = ['TypeScript', 'React', 'Next.js', 'Node.js', 'AWS'];

// starts and ends with 'software' so the visible state before/after is always correct
const WORDS = [
  'software',
  'systems',
  'products',
  'platforms',
  'APIs',
  'pipelines',
  'interfaces',
  'services',
  'software',
];

export default function HomePage() {
  const rootRef        = useRef<HTMLDivElement>(null);
  const slotRef        = useRef<HTMLSpanElement>(null);   // clip window
  const wordTrackRef   = useRef<HTMLSpanElement>(null);   // scrolling word stack
  const runAnimRef     = useRef<() => void>(() => {});
  const animatingRef   = useRef(false);

  useEffect(() => {
    // ── Word slot setup ──────────────────────────────────────────────
    const slot  = slotRef.current;
    const track = wordTrackRef.current;

    if (slot && track) {
      const firstWord  = track.children[0] as HTMLElement;
      const wordHeight = firstWord.offsetHeight;

      // Clip the wrapper to exactly one word's height
      slot.style.height = `${wordHeight}px`;

      const runWordAnim = () => {
        if (animatingRef.current) return;
        animatingRef.current = true;

        // Always reset to the first "software" (index 0)
        gsap.set(track, { y: 0 });

        const tl = gsap.timeline({
          onComplete: () => { animatingRef.current = false; },
        });

        for (let i = 1; i < WORDS.length; i++) {
          const isLast    = i === WORDS.length - 1;
          const isNearEnd = i >= WORDS.length - 3;

          tl.to(track, {
            y: -i * wordHeight,
            duration: isLast ? 0.55 : isNearEnd ? 0.28 : 0.12,
            ease:     isLast ? 'power3.out' : isNearEnd ? 'power1.inOut' : 'none',
          });
        }
      };

      runAnimRef.current = runWordAnim;
    }

    // ── Page animations ──────────────────────────────────────────────
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.from('[data-h="photo"]',   { opacity: 0, x: -50, duration: 1.2 })
        .from('[data-h="label"]',   { opacity: 0, y: 14,  duration: 0.7 }, '-=0.7')
        .from('[data-h="heading"]', { opacity: 0, y: 34,  duration: 1   }, '-=0.5')
        .from('[data-h="divider"]', { scaleX: 0, transformOrigin: 'left', duration: 0.5 }, '-=0.3')
        .from('[data-h="sub"]',     { opacity: 0, y: 14,  duration: 0.7 }, '-=0.3')
        .from('[data-h="scroll"]',  { opacity: 0,          duration: 0.8 }, '-=0.2')
        // trigger word animation once heading has fully settled
        .add(() => { runAnimRef.current(); }, '+=0.25');

      gsap.to('[data-h="scroll"]', {
        scrollTrigger: {
          trigger: '[data-section="hero"]',
          start: 'bottom 70%',
          end:   'bottom 50%',
          scrub: true,
        },
        opacity: 0,
      });

      gsap.from('[data-anim="about"]', {
        scrollTrigger: { trigger: '[data-section="about"]', start: 'top 72%' },
        opacity: 0, y: 48, duration: 0.9, stagger: 0.18, ease: 'power3.out',
      });

      gsap.from('[data-anim="exp"]', {
        scrollTrigger: { trigger: '[data-section="exp"]', start: 'top 72%' },
        opacity: 0, y: 22, duration: 0.7, stagger: 0.1, ease: 'power2.out',
      });

      gsap.from('[data-anim="stack"]', {
        scrollTrigger: { trigger: '[data-section="stack"]', start: 'top 82%' },
        opacity: 0, y: 20, duration: 0.8, stagger: 0.08, ease: 'power2.out',
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} className="bg-[#0e0e0e] text-[#f0ede4] font-mono min-h-screen">

      {/* ── Fixed nav ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-14 py-7">
        <Link
          href="/"
          className="text-[11px] tracking-[0.16em] uppercase text-[#555450] hover:text-[#888780] transition-colors duration-200"
        >
          vignesh-labs
        </Link>
        <a
          href="https://www.linkedin.com/in/vigneshrsharma"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[11px] tracking-[0.13em] uppercase text-[#555450] hover:text-[#f0ede4] transition-colors duration-200"
        >
          LinkedIn
        </a>
      </nav>

      {/* ── HERO ── */}
      <section
        data-section="hero"
        className="relative min-h-screen flex items-center px-8 md:px-14 pt-24 pb-20"
      >
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Photo */}
          <div data-h="photo" className="relative max-w-[340px] md:max-w-none">
            <div className="absolute top-[18px] left-[18px] right-[-6px] bottom-[-6px] border border-white/[0.06]" />
            <div className="relative z-10 overflow-hidden aspect-[3/4]">
              <img src="https://iili.io/Cg9qXvs.jpg" alt="Vignesh R" className="w-full h-full object-cover saturate-50" />
              <div className="absolute bottom-6 left-6 z-10">
                <p className="text-[16px] tracking-[0.1em] text-white/55">Vignesh R Sharma</p>
                <div className="w-6 h-px bg-white/25 mt-2" />
              </div>
            </div>
          </div>

          {/* Hero text */}
          <div>
            <p
              data-h="label"
              className="text-[10px] tracking-[0.24em] uppercase text-[#555450] mb-7"
            >
              Introduction
            </p>

            <h1
              data-h="heading"
              className="font-serif leading-[1.05] tracking-tight text-[#f0ede4]"
              style={{ fontSize: 'clamp(2.8rem, 5vw, 4.5rem)' }}
            >
              {/* "I build " + animated word slot */}
              I build{' '}
              <span
                ref={slotRef}
                className="inline-block overflow-hidden cursor-pointer"
                style={{ verticalAlign: 'bottom' }}
                onMouseEnter={() => runAnimRef.current()}
              >
                <span
                  ref={wordTrackRef}
                  className="flex flex-col will-change-transform"
                  style={{ lineHeight: '1.05' }}
                >
                  {WORDS.map((word, i) => (
                    <span key={i} className="block" style={{ lineHeight: '1.05' }}>
                      {word}
                    </span>
                  ))}
                </span>
              </span>
              <br />
              <em className="text-[#888780]">that ships.</em>
            </h1>

            <div data-h="divider" className="w-8 h-px bg-white/14 my-9" />
            <p
              data-h="sub"
              className="text-[13px] leading-[1.9] text-[#777572] max-w-[280px]"
            >
              Senior Software Engineer at Tekion Corp.
              Nine years building products across automotive,
              enterprise, and startup environments.
            </p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          data-h="scroll"
          className="absolute right-10 bottom-10 flex flex-col items-center gap-3 select-none"
        >
          <div className="w-px h-14 bg-white/14" />
          <p
            className="text-[9px] tracking-[0.24em] uppercase text-[#555450]"
            style={{ writingMode: 'vertical-rl' }}
          >
            Scroll
          </p>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section
        data-section="about"
        className="min-h-screen flex items-center px-8 md:px-14 py-28"
      >
        <div className="w-full max-w-3xl">
          <p
            data-anim="about"
            className="text-[10px] tracking-[0.24em] uppercase text-[#555450] mb-14"
          >
            About
          </p>
          <h2
            data-anim="about"
            className="font-serif text-[#f0ede4] mb-10"
            style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', lineHeight: 1.18 }}
          >
            Nine years building things<br />
            that run in production.
          </h2>
          <p
            data-anim="about"
            className="text-[13px] leading-[1.95] text-[#777572] max-w-xl mb-6"
          >
            I work at the intersection of product thinking and frontend
            engineering. At Tekion Corp, I help build platforms used by
            automotive OEMs — Chevy, Cadillac, Buick. My background spans
            early-stage startups, enterprise consulting at Accenture, and agency
            work — each layer sharpening the instinct for writing software that
            solves real problems.
          </p>
          <p
            data-anim="about"
            className="text-[13px] leading-[1.95] text-[#777572] max-w-xl"
          >
            Currently expanding from frontend architecture into distributed
            systems and backend engineering — building the systems depth to
            match the product breadth.
          </p>
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section
        data-section="exp"
        className="min-h-screen flex items-center px-8 md:px-14 py-28 border-t border-white/[0.05]"
      >
        <div className="w-full">
          <p className="text-[10px] tracking-[0.24em] uppercase text-[#555450] mb-16">
            Experience
          </p>
          <div className="divide-y divide-white/[0.05]">
            {EXPERIENCE.map((item) => (
              <div
                key={item.company}
                data-anim="exp"
                className="group grid grid-cols-[1fr_auto] gap-x-8 py-8 items-center"
              >
                <div className="grid md:grid-cols-[220px_1fr] gap-6 items-center">
                  <div>
                    <p className="text-[14px] text-[#f0ede4] mb-1.5 group-hover:translate-x-2 transition-transform duration-300">
                      {item.company}
                    </p>
                    <p className="text-[11px] text-[#555450]">{item.role}</p>
                  </div>
                  <p className="text-[11px] text-[#555450] leading-relaxed hidden md:block">
                    {item.note}
                  </p>
                </div>
                <p className="text-[11px] text-[#555450] whitespace-nowrap tabular-nums">
                  {item.period}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STACK ── */}
      <section
        data-section="stack"
        className="px-8 md:px-14 py-28 border-t border-white/[0.05]"
      >
        <p
          data-anim="stack"
          className="text-[10px] tracking-[0.24em] uppercase text-[#555450] mb-12"
        >
          Stack
        </p>
        <div className="flex flex-wrap gap-x-10 gap-y-5">
          {STACK.map((skill) => (
            <span
              key={skill}
              data-anim="stack"
              className="text-[13px] text-[#888780] tracking-[0.05em]"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="px-8 md:px-14 py-10 border-t border-white/[0.05] flex items-center justify-between">
        <a
          href="https://www.linkedin.com/in/vigneshrsharma"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[11px] tracking-[0.11em] uppercase text-[#555450] border-b border-white/10 pb-0.5 hover:text-[#f0ede4] transition-colors duration-200"
        >
          LinkedIn
        </a>
        <span className="text-[11px] text-[#555450]">
          &copy; {new Date().getFullYear()} Vignesh R
        </span>
      </footer>

    </div>
  );
}
