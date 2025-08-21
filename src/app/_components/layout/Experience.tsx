"use client";
import React, { useState, useRef, useLayoutEffect } from "react";

export type ExperienceItem = {
  company: string;
  role: string;
  location: string;
  dates: string;
  logoSrc?: string; // optional image URL
  logoAlt?: string;
  bullets?: string[];
};

export type ExperienceProps = {
  professional: ExperienceItem[];
  hobby: ExperienceItem[];
  className?: string;
};

function CollapsibleItem({ item }: { item: ExperienceItem }) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const contentId = `${item.company.replace(/\s+/g, "-").toLowerCase()}-content`;

  useLayoutEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    // Ensure we have a transition style on first run
    el.style.overflow = "hidden";
    el.style.transition = "height 300ms ease";

    if (open) {
      // From current height (0) to its scrollHeight, then lock to auto
      const target = el.scrollHeight;
      el.style.height = target + "px";
      const onEnd = () => {
        el.style.height = "auto";
        el.removeEventListener("transitionend", onEnd);
      };
      el.addEventListener("transitionend", onEnd);
    } else {
      // If height is auto, set it to current pixel height first, then to 0
      if (el.style.height === "auto" || !el.style.height) {
        const current = el.scrollHeight;
        el.style.height = current + "px";
        // force reflow before collapsing
        void el.offsetHeight;
      }
      el.style.height = "0px";
    }
  }, [open]);

  return (
    <div className="group space-y-2">
      <button
        type="button"
        className="w-full cursor-pointer text-left text-sm text-gray-700 select-none"
        aria-expanded={open}
        aria-controls={contentId}
        onClick={() => setOpen((v) => !v)}
      >
        <div className="flex items-center gap-3">
          {item.logoSrc ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={item.logoSrc}
              alt={item.logoAlt ?? item.company}
              className="h-8 w-8 shrink-0 rounded object-cover"
            />
          ) : (
            <div className="h-8 w-8 shrink-0 rounded bg-gray-200" aria-hidden />
          )}
          <div className="w-full text-base font-medium">
            {item.company}
            <div className="text-sm text-wrap text-gray-600">
              <span className="text-nowrap">{item.role}</span> •{" "}
              <span className="text-nowrap">{item.location}</span> •{" "}
              <span className="text-nowrap">{item.dates}</span>
            </div>
          </div>
        </div>
      </button>

      {item.bullets && item.bullets.length > 0 && (
        <div
          id={contentId}
          ref={contentRef}
          style={{ height: 0, overflow: "hidden" }}
          className="mt-2 space-y-2 text-sm text-gray-700"
        >
          <ul className="list-disc space-y-1 pl-5">
            {item.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default function Experience({
  title,
  items,
}: {
  title: string;
  items: ExperienceItem[];
}) {
  return (
    <>
      <h3 className="mt-6 text-xl font-medium">{title}</h3>
      <div className="mt-4 space-y-8">
        {items.map((item, idx) => (
          <CollapsibleItem key={idx} item={item} />
        ))}
      </div>
    </>
  );
}
