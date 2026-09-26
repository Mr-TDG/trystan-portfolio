"use client";

import { ReactNode, useEffect, useState } from "react";

const commands = [
  { label: "Work — NOVA", href: "#work", key: "1" },
  { label: "Engineering", href: "#engineering", key: "2" },
  { label: "About", href: "#about", key: "3" },
  { label: "NOVA case study", href: "/nova", key: "4" },
  { label: "GitHub", href: "https://github.com/Mr-TDG", key: "5", external: true },
];

export default function InteractiveShell({ children }: { children: ReactNode }) {
  const [palette, setPalette] = useState(false);
  const [active, setActive] = useState("work");

  useEffect(() => {
    const root = document.documentElement;

    const onPointer = (event: PointerEvent) => {
      root.style.setProperty("--mx", `${event.clientX}px`);
      root.style.setProperty("--my", `${event.clientY}px`);
    };

    const onKey = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setPalette((value) => !value);
      }
      if (event.key === "Escape") setPalette(false);
    };

    const revealObserver = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.12, rootMargin: "0px 0px -40px" }
    );

    const sectionObserver = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)),
      { threshold: 0.35 }
    );

    document.querySelectorAll("[data-reveal]").forEach((node) => revealObserver.observe(node));
    document.querySelectorAll("section[id]").forEach((node) => sectionObserver.observe(node));
    window.addEventListener("pointermove", onPointer, { passive: true });
    window.addEventListener("keydown", onKey);

    return () => {
      revealObserver.disconnect();
      sectionObserver.disconnect();
      window.removeEventListener("pointermove", onPointer);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = palette ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [palette]);

  return (
    <>
      <div className="cursor-glow" aria-hidden="true" />
      {children}
      <button className="command-trigger" onClick={() => setPalette(true)} aria-label="Open command menu">
        <span>⌘</span>K
      </button>
      <div className={`palette-backdrop ${palette ? "open" : ""}`} onClick={() => setPalette(false)}>
        <div className="palette" role="dialog" aria-modal="true" aria-label="Quick navigation" onClick={(event) => event.stopPropagation()}>
          <div className="palette-top">
            <span>Quick navigation</span>
            <button onClick={() => setPalette(false)}>ESC</button>
          </div>
          <div className="palette-list">
            {commands.map((command) => (
              <a
                key={command.key}
                href={command.href}
                target={command.external ? "_blank" : undefined}
                rel={command.external ? "noreferrer" : undefined}
                onClick={() => setPalette(false)}
              >
                <span>{command.label}</span>
                <kbd>{command.key}</kbd>
              </a>
            ))}
          </div>
          <p className="palette-hint">Tip: press <strong>Ctrl K</strong> anytime.</p>
        </div>
      </div>
      <div className="active-section" aria-hidden="true"><span>{active}</span></div>
    </>
  );
}
