"use client";

import { Icon } from "@iconify/react";

export type NavBarProps = {
  isOpen: boolean;
  onMenuToggle: () => void;
};

export default function NavBar({ isOpen, onMenuToggle }: NavBarProps) {
  return (
    <div className="flex w-full items-center justify-between">
      <div className="text-2xl font-bold tracking-tight">AJ</div>
      <div className="flex items-center gap-3">
        <button
          aria-label="Search"
          className="p-1 text-gray-500 hover:text-black"
        >
          <Icon icon="stash:search" className="h-6 w-6" />
        </button>
        <button
          type="button"
          aria-label="Menu"
          aria-pressed={isOpen}
          onClick={onMenuToggle}
          className="p-1 text-gray-500 hover:text-black"
        >
          <Icon
            icon={isOpen ? "lucide:sidebar-close" : "lucide:sidebar-open"}
            className="h-6 w-6"
          />
        </button>
      </div>
    </div>
  );
}
