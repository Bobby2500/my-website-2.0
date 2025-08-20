"use client";
import { useState, useEffect } from "react";

interface TypingProps {
  words: [string, ...string[]];
  period: number;
  isFocused: boolean;
}

export default function Typing({ words, period, isFocused }: TypingProps) {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(75);

  useEffect(() => {
    if (isFocused) {
      setText("");
      setIsDeleting(false);
      setLoopNum(0);
      setTypingSpeed(75);
      return;
    }

    const handleTick = () => {
      const i = loopNum % words.length;
      const fullText = words[i] ?? "";

      setText((prev) => {
        const updatedText = isDeleting
          ? fullText.substring(0, prev.length - 1)
          : fullText.substring(0, prev.length + 1);
        return updatedText;
      });

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), period);
        setTypingSpeed(35);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(75);
      }
    };

    const timer = setTimeout(handleTick, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, words, period, typingSpeed, isFocused]);

  return (
    <>
      {!isFocused ? (
        <div className="absolute p-2">
          <span
            className="wrap"
            style={{ borderRight: "0.08em solid currentColor" }}
          >
            {text}
          </span>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
