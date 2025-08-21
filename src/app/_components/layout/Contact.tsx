"use client";

export default function Contact () {
    return (
        <>
            <h2 className="text-3xl font-semibold">Get in touch!</h2>
            <p className="text-normal mt-4">
              Hiring or just want to chat? Feel free to reach out via email at{" "}
              <a
                href="mailto:shengliangchow@gmail.com"
                className="text-gray-500 underline hover:text-black"
              >
                shengliangchow@gmail.com
              </a>
              {" "}or{" "}
              <a
                target="_blank"
                href="https://calendly.com/shengliangchow/let-s-talk"
                className="text-gray-500 underline hover:text-black"
              >
                schedule a time with me!
              </a>
            </p>
        </>
    );
}