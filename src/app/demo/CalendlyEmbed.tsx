"use client";

import { useEffect } from "react";

export function CalendlyEmbed() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.head.appendChild(script);
    return () => { script.remove(); };
  }, []);

  return (
    <div
      className="calendly-inline-widget rounded-2xl border border-dark-border"
      data-url="https://calendly.com/adrian-cassidy/demo?background_color=111111&text_color=ffffff&primary_color=e53f47&hide_gdpr_banner=1&hide_event_type_details=1"
      style={{ minWidth: "320px", height: "700px" }}
    />
  );
}
