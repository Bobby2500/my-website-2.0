"use client";

import React, { useEffect, useState, type ReactNode } from "react";
import NavBar from "./NavBar";
import { Icon } from "@iconify/react";

type NavShellProps = {
  children: ReactNode;
};

export default function NavShell({ children }: NavShellProps) {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);

  const items: { label: string; id: string; bottom?: boolean }[] = [
    { label: "About Me", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Experience", id: "experience" },
    { label: "Articles", id: "articles" },
    { label: "Contact", id: "contact" },
  ];

  const toggle = () => setOpen((v) => !v);

  // Translate distance must match sidebar width
  const translateClass = open ? "translate-x-[80vw]" : ""; // adjust if you change w-64

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Sticky navbar row */}
      <header className="fixed top-0 left-0 z-50 mx-auto flex h-[var(--nav-h)] w-[100vw] flex-col justify-center bg-white px-8">
        <NavBar isOpen={open} onMenuToggle={toggle} />
      </header>

      {/* Sidebar (independent of grid rows) */}
      <aside
        className={[
          "fixed inset-y-0 left-0 z-40 flex w-[80vw] flex-col bg-white/90 px-8 pb-12 text-xl transition-transform duration-300",
          open ? "translate-x-0" : "-translate-x-full",
        ].join(" ")}
        aria-hidden={!open}
      >
        <nav className="mt-[var(--nav-h)] flex flex-col gap-2 pt-4">
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setOpen(false);
              }}
              className={[
                item.bottom ? "mt-auto" : "",
                "rounded px-4 py-6 text-left font-medium hover:bg-gray-50",
                activeId === item.id ? "bg-gray-100" : "",
              ].join(" ")}
            >
              {item.label}
            </button>
          ))}
        </nav>
        <button className="mt-6 w-fit rounded-full bg-gray-500 px-4 py-2 font-normal text-white hover:bg-blue-700">
          Trusted Access
        </button>
        <div className="mt-auto px-4 flex flex-col items-start gap-2 text-black">
          <div className="text-sm font-medium">Self-hosted machine status:</div>
          <div className="flex items-center gap-1">
            <Icon
              icon="lets-icons:check-fill"
              className="h-5 w-5 text-green-500 opacity-80"
            />

            <span className="text-sm font-medium">smallBox</span>
          </div>
        </div>
      </aside>

      {/* Content row fills remaining height; slide+blur only affect this row */}
      <div className="relative z-10">
        <div
          className={[
            "filter transition duration-100 ease-in-out will-change-[filter]",
            open ? "pointer-events-none blur-sm" : "blur-0",
          ].join(" ")}
        >
          {children}
        </div>
      </div>

      {/* Click-catcher overlay to close menu (below header, above content) */}
      {open && (
        <button
          aria-label="Close menu"
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-30 bg-transparent"
        />
      )}
    </>
  );
}
