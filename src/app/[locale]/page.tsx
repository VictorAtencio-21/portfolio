"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "@/components/custom/LanguageSwitcher";

const ACCENT = "#60a5fa";
const ACCENT_GLOW = "#60a5fa66";
const EMAIL = "atenciomvictor@gmail.com";
const SECTIONS = ["profile", "toolkit", "work", "log", "contact"] as const;

type Card = { title: string; body: string };
type Row = { label: string; items: string };
type Project = {
  num: string;
  name: string;
  tagline: string;
  link: string;
  url: string;
  blurb: string;
  highlights: string[];
};
type Job = { role: string; company: string; period: string };

export default function Home() {
  const t = useTranslations();
  const [active, setActive] = useState(-1);
  const [progress, setProgress] = useState(0);
  const [resumeOpen, setResumeOpen] = useState(false);
  const resumeRef = useRef<HTMLDivElement>(null);

  // Scroll listener: rail fill % + active section (top < 55% viewport)
  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const p = Math.min(
        1,
        Math.max(0, doc.scrollTop / (doc.scrollHeight - doc.clientHeight || 1))
      );
      let a = -1;
      SECTIONS.forEach((id, i) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < window.innerHeight * 0.55) a = i;
      });
      setProgress(p);
      setActive(a);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close résumé dropdown on outside click
  useEffect(() => {
    if (!resumeOpen) return;
    const onDown = (e: MouseEvent) => {
      if (resumeRef.current && !resumeRef.current.contains(e.target as Node)) {
        setResumeOpen(false);
      }
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [resumeOpen]);

  const cards = t.raw("profile.cards") as Card[];
  const rows = t.raw("toolkit.rows") as Row[];
  const projects = t.raw("work.projects") as Project[];
  const jobs = t.raw("flightLog.items") as Job[];

  const navLinks = [
    { label: t("nav.profile"), href: "#profile", i: 0 },
    { label: t("nav.toolkit"), href: "#toolkit", i: 1 },
    { label: t("nav.work"), href: "#work", i: 2 },
    { label: t("nav.flightLog"), href: "#log", i: 3 },
  ];

  return (
    <div className="relative text-[#e7e5e4]">
      {/* Constellation rail — desktop ≥1280px only */}
      <div className="pointer-events-none fixed left-14 top-0 bottom-0 z-20 hidden flex-col items-center justify-center xl:flex">
        <div className="relative h-[340px] w-px bg-white/[0.08]">
          <div
            className="absolute left-0 top-0 w-px transition-[height] duration-200 ease-out"
            style={{
              height: `${Math.round(progress * 100)}%`,
              background: `linear-gradient(to bottom, rgba(96,165,250,0.2), ${ACCENT})`,
              boxShadow: `0 0 6px ${ACCENT_GLOW}`,
            }}
          />
          {SECTIONS.map((_, i) => {
            const on = i <= active;
            return (
              <span
                key={i}
                className="absolute h-2 w-2 rounded-full border-[1.5px] transition-all duration-[400ms]"
                style={{
                  top: `${(i / (SECTIONS.length - 1)) * 100}%`,
                  left: "-3.5px",
                  borderColor: on ? ACCENT : "rgba(255,255,255,0.25)",
                  background: on ? ACCENT : "transparent",
                  boxShadow: on ? `0 0 10px ${ACCENT_GLOW}` : "none",
                }}
              />
            );
          })}
        </div>
      </div>

      {/* Nav */}
      <nav
        className="fixed inset-x-0 top-0 z-50 backdrop-blur-md"
        style={{
          background:
            "linear-gradient(to bottom, rgba(10,10,15,0.85), rgba(10,10,15,0.55) 70%, transparent)",
        }}
      >
        <div className="mx-auto flex max-w-[1120px] items-center justify-between px-6 py-[26px] md:px-10">
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="font-mono text-[13px] tracking-[0.18em] text-[#a8a29e] transition-colors hover:text-white"
          >
            {t("nav.wordmark")}
          </a>
          <div className="flex items-center gap-5 text-[13.5px] md:gap-7">
            {navLinks.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="hidden transition-colors hover:text-white md:inline"
                style={{ color: active === n.i ? "#ffffff" : "#a8a29e" }}
              >
                {n.label}
              </a>
            ))}
            <a
              href={`mailto:${EMAIL}`}
              className="transition-colors hover:text-[#93c5fd]"
              style={{ color: ACCENT }}
            >
              {t("nav.contact")} ↗
            </a>
            <LanguageSwitcher />
          </div>
        </div>
      </nav>

      <div id="top" className="relative z-10 mx-auto max-w-[1120px] px-6 md:px-10">
        {/* Hero */}
        <section className="max-w-[840px] pt-[150px] pb-[120px] md:pt-[210px] md:pb-[170px]">
          <div
            className="fade-up mb-7 flex items-center gap-2.5 font-mono text-[13px] tracking-[0.2em]"
            style={{ color: ACCENT }}
          >
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ background: ACCENT, boxShadow: `0 0 8px ${ACCENT}` }}
            />
            {t("hero.eyebrow")}
          </div>
          <h1
            className="fade-up m-0 whitespace-pre-line font-semibold leading-[1.05] tracking-[-0.03em] text-[#fafaf9]"
            style={{ fontSize: "clamp(42px, 6.5vw, 80px)", animationDelay: "0.08s" }}
          >
            {t("hero.title")}
          </h1>
          <p
            className="fade-up mt-7 max-w-[560px] text-[19px] leading-[1.6] text-[#a8a29e]"
            style={{ animationDelay: "0.16s" }}
          >
            {t("hero.subtitle")}
          </p>
          <div
            className="fade-up mt-10 flex flex-col gap-3.5 sm:flex-row"
            style={{ animationDelay: "0.24s" }}
          >
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex h-12 items-center justify-center rounded-full bg-[#fafaf9] px-[26px] text-[15px] font-medium text-[#0a0a0f] transition-transform duration-200 hover:-translate-y-0.5"
            >
              {t("hero.startProject")}
            </a>
            <div className="relative" ref={resumeRef}>
              <button
                type="button"
                onClick={() => setResumeOpen((o) => !o)}
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full border border-white/[0.16] px-[26px] text-[15px] text-[#e7e5e4] transition-colors hover:border-white/40 sm:w-auto"
              >
                {t("hero.resume")} <span className="text-[#78716c]">EN / ES</span>
              </button>
              {resumeOpen && (
                <div className="absolute left-0 top-14 z-[60] w-[220px] rounded-[14px] border border-white/10 bg-[rgba(20,20,26,0.95)] p-2 backdrop-blur-lg">
                  <div className="px-3 py-2 font-mono text-[11px] tracking-[0.14em] text-[#78716c]">
                    {t("hero.resumeLanguage")}
                  </div>
                  <a
                    href="/Victor_Atencio_EN.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-lg px-3 py-2.5 text-[14px] transition-colors hover:bg-white/[0.06]"
                  >
                    {t("hero.english")}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/UK.svg" alt="EN" width={22} height={16} className="rounded-[2px]" />
                  </a>
                  <a
                    href="/Victor_Atencio_ES.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-lg px-3 py-2.5 text-[14px] transition-colors hover:bg-white/[0.06]"
                  >
                    {t("hero.spanish")}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/ES.svg" alt="ES" width={22} height={16} className="rounded-[2px]" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* 01 — Profile */}
        <section id="profile" className="scroll-mt-20 border-t border-white/[0.07] py-[90px]">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-[280px_1fr]">
            <SectionLabel>{t("profile.label")}</SectionLabel>
            <div className="max-w-[640px]">
              <p className="m-0 text-[26px] leading-[1.5] text-[#e7e5e4]">{t("profile.lead")}</p>
              <div className="mt-11 grid grid-cols-1 gap-8 sm:grid-cols-3">
                {cards.map((c) => (
                  <div key={c.title}>
                    <div className="mb-2 text-[15px] font-semibold text-[#fafaf9]">{c.title}</div>
                    <p className="m-0 text-[14px] leading-[1.6] text-[#a8a29e]">{c.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 02 — Toolkit */}
        <section id="toolkit" className="scroll-mt-20 border-t border-white/[0.07] py-[90px]">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-[280px_1fr]">
            <SectionLabel>{t("toolkit.label")}</SectionLabel>
            <div className="flex max-w-[640px] flex-col gap-5">
              {rows.map((r) => (
                <div
                  key={r.label}
                  className="grid grid-cols-[100px_1fr] items-baseline gap-6 border-b border-white/[0.05] pb-5 sm:grid-cols-[120px_1fr]"
                >
                  <span className="font-mono text-[12px] tracking-[0.14em] text-[#78716c]">
                    {r.label}
                  </span>
                  <span className="text-[16px] leading-[1.7] text-[#d6d3d1]">{r.items}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 03 — Selected work */}
        <section id="work" className="scroll-mt-20 border-t border-white/[0.07] py-[90px]">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-[280px_1fr]">
            <div>
              <SectionLabel>{t("work.label")}</SectionLabel>
              <p className="mt-4 max-w-[200px] text-[14px] leading-[1.6] text-[#78716c]">
                {t("work.hint")}
              </p>
            </div>
            <div className="flex flex-col">
              {projects.map((p) => (
                <a
                  key={p.num}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block border-b border-white/[0.07] py-9 transition-[padding] duration-300 hover:pl-4"
                >
                  <div className="flex flex-wrap items-baseline gap-x-5 gap-y-1">
                    <span className="font-mono text-[13px] text-[#57534e]">{p.num}</span>
                    <h3 className="m-0 text-[30px] font-semibold text-[#fafaf9]">{p.name}</h3>
                    <span className="text-[14px]" style={{ color: ACCENT }}>
                      {p.tagline}
                    </span>
                    <span className="text-[14px] text-[#78716c] sm:ml-auto">{p.link} ↗</span>
                  </div>
                  <p className="mt-3.5 max-w-[540px] pl-8 text-[15px] leading-[1.65] text-[#a8a29e]">
                    {p.blurb}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2 pl-8">
                    {p.highlights.map((h) => (
                      <span
                        key={h}
                        className="rounded-full border border-white/10 px-3 py-[5px] font-mono text-[11px] tracking-[0.06em] text-[#a8a29e]"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* 04 — Flight log */}
        <section id="log" className="scroll-mt-20 border-t border-white/[0.07] py-[90px]">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-[280px_1fr]">
            <SectionLabel>{t("flightLog.label")}</SectionLabel>
            <div className="flex max-w-[640px] flex-col">
              {jobs.map((j, i) => {
                const current = i === 0;
                return (
                  <div
                    key={`${j.company}-${j.period}`}
                    className="grid grid-cols-[110px_12px_1fr] gap-6 py-[22px] md:grid-cols-[150px_12px_1fr]"
                  >
                    <span className="pt-[5px] font-mono text-[12.5px] text-[#78716c]">
                      {j.period}
                    </span>
                    <div className="flex flex-col items-center gap-1.5">
                      <span
                        className="mt-1.5 h-[7px] w-[7px] rounded-full border-[1.5px]"
                        style={{
                          borderColor: ACCENT,
                          background: current ? ACCENT : "transparent",
                          boxShadow: current ? `0 0 10px ${ACCENT_GLOW}` : "none",
                        }}
                      />
                      <span className="w-px flex-1 bg-white/[0.08]" />
                    </div>
                    <div>
                      <div className="text-[19px] font-semibold text-[#fafaf9]">{j.role}</div>
                      <div className="mt-[3px] text-[14.5px] text-[#a8a29e]">{j.company}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 05 — Contact */}
        <section
          id="contact"
          className="scroll-mt-20 border-t border-white/[0.07] pt-[130px] pb-[100px] text-center"
        >
          <SectionLabel className="mb-6 inline-block">{t("contact.label")}</SectionLabel>
          <h2
            className="m-0 whitespace-pre-line font-semibold tracking-[-0.02em] text-[#fafaf9]"
            style={{ fontSize: "clamp(36px, 4.5vw, 54px)" }}
          >
            {t("contact.title")}
          </h2>
          <a
            href={`mailto:${EMAIL}`}
            className="mt-7 inline-block border-b pb-0.5 text-[21px] transition-colors hover:text-[#93c5fd]"
            style={{ color: ACCENT, borderColor: ACCENT_GLOW }}
          >
            {EMAIL}
          </a>
          <div className="mt-11 flex justify-center gap-6 text-[13.5px]">
            <a
              href="https://github.com/VictorAtencio-21"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#78716c] transition-colors hover:text-white"
            >
              {t("contact.github")} ↗
            </a>
            <a
              href="https://www.linkedin.com/in/victor-atencio/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#78716c] transition-colors hover:text-white"
            >
              {t("contact.linkedin")} ↗
            </a>
            <a
              href="https://wa.me/+584146195291"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#78716c] transition-colors hover:text-white"
            >
              {t("contact.whatsapp")} ↗
            </a>
          </div>
          <div className="mt-14 font-mono text-[11.5px] tracking-[0.14em] text-[#44403c]">
            {t("contact.footer")}
          </div>
        </section>
      </div>
    </div>
  );
}

function SectionLabel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`font-mono text-[13px] tracking-[0.2em] ${className}`}
      style={{ color: ACCENT }}
    >
      {children}
    </div>
  );
}
