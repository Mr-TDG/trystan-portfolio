"use client";

import { useState } from "react";

const EMAIL = "deguzmantrystan@gmail.com";

export default function CopyEmailButton() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = "mailto:" + EMAIL;
    }
  }

  return (
    <button className="button footer-button secondary-dark copy-email" type="button" onClick={copyEmail}>
      {copied ? "Copied" : "Copy email"} <span>{copied ? "✓" : "↗"}</span>
    </button>
  );
}
