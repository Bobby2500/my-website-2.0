"use client";

import React, { useState } from "react";
import Typing from "../effects/Typing";
import { Icon } from "@iconify/react";

export default function LandingPrompt() {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="mt-8 h-40 w-full rounded-2xl border border-gray-200 p-3 shadow-sm">
      <div className="relative flex h-full text-gray-500">
        <Typing
          words={[
            "What motivates you?",
            "Tell me about internships you’ve done",
            "What tech are you most excited about?",
            "What are your hobbies?",
          ]}
          period={4000}
          isFocused={isFocused}
        />
        <textarea
          placeholder=""
          onFocus={() => setIsFocused(true)}
          onBlur={(event) => {
            if (event.target.value.trim() === "") {
              setIsFocused(false);
            }
          }}
          className="mr-2 h-full w-full flex-1 resize-none overflow-y-auto bg-transparent p-2 text-lg text-gray-700 placeholder-gray-400 outline-none"
        />
        <button
          aria-label="Submit"
          className="mt-auto grid h-10 w-10 place-items-center rounded-full bg-gray-100 hover:bg-gray-200"
        >
          <Icon icon="mdi:arrow-up" className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
