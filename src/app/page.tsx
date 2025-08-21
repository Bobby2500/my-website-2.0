import { HydrateClient } from "@/trpc/server";
import LandingPrompt from "./_components/inputs/LandingPrompt";
import NavShell from "./_components/layout/NavShell";
import Experience from "./_components/layout/Experience";
import { Icon } from "@iconify/react/dist/iconify.js";

export default async function Home() {
  return (
    <HydrateClient>
      <main className="bg-white px-8 text-gray-900 [--nav-h:5rem]">
        <NavShell>
          {/* Hero */}
          <section className="mx-auto flex min-h-[100dvh] w-full flex-col items-center justify-center pt-[var(--nav-h)]">
            <h1 className="text-center text-3xl font-medium tracking-wide">
              👋 Hey! Curious about my work? Let’s skip the resume.
            </h1>

            {/* Query card */}
            <LandingPrompt />

            {/* Pills */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <button className="rounded-full border border-gray-300 px-4 py-2 text-sm hover:bg-gray-50">
                Get to Know Me!
              </button>
              <button className="rounded-full border border-gray-300 px-4 py-2 text-sm hover:bg-gray-50">
                Professional Projects
              </button>
              <button className="rounded-full border border-gray-300 px-4 py-2 text-sm hover:bg-gray-50">
                Hobby Projects
              </button>
              <button className="rounded-full border border-gray-300 px-4 py-2 text-sm hover:bg-gray-50">
                Skills
              </button>
              <button className="rounded-full border border-gray-300 px-4 py-2 text-sm hover:bg-gray-50">
                Research
              </button>
              <button className="rounded-full border border-gray-300 px-4 py-2 text-sm hover:bg-gray-50">
                Contact
              </button>
            </div>
          </section>

          {/* About Me */}
          <section id="about">
            <div className="aspect-square w-full rounded-xl bg-gray-200"></div>
            <h2 className="mt-8 text-3xl font-semibold">About Me</h2>
            <p className="text-normal mt-4">
              Hello! My name is Sheng Liang (AJ). I’m a third-year CS student at
              the University of Waterloo, specializing in AI with a minor in
              statistics.
              <br />
              <br />
              My background includes QA automation and fullstack development,
              where I’ve built and tested real systems end-to-end. I also have a
              strong foundation in statistical learning, supported by course
              work in advanced regression and forecasting.
              <br />
              <br />
              I’m motivated and fascinated by the intuitive and philosophical
              side of statistics, and I’m currently interested in deep learning
              and non-linear optimization.
            </p>
          </section>

          {/* Projects */}
          <section id="projects" className="mt-16">
            <h2 className="text-3xl font-semibold">Projects</h2>
            <div className="mt-8 aspect-square w-full rounded-lg bg-gray-200"></div>
            <h3 className="mt-4 text-2xl">Project 1</h3>
            <p className="text-normal">Description description description</p>
            <div className="mt-4 flex items-center justify-start gap-1">
              <button className="text-normal text-gray-500 hover:text-black">
                View More
              </button>
              <Icon icon={"ep:d-arrow-right"} />
            </div>
          </section>

          {/* Experience */}
          <section id="experience" className="mt-16">
            <h2 className="text-3xl font-semibold">Experience</h2>
            <Experience
              title="Professional"
              items={[
                {
                  company: "Company Name",
                  role: "QA Automation",
                  location: "Toronto, ON",
                  dates: "Jan–Apr 2024",
                  bullets: [
                    "Built end-to-end UI tests and CI checks.",
                    "Reduced flaky test rate by X% using retry + network stubbing.",
                    "Shipped features with full-stack changes across API and UI.",
                  ],
                },
                {
                  company: "Another Company",
                  role: "Full‑stack Developer",
                  location: "Remote",
                  dates: "May–Aug 2023",
                  bullets: [
                    "Implemented REST endpoints and React views.",
                    "Improved page load time by X% via code‑splitting.",
                    "Owned monitoring and on‑call for my area.",
                  ],
                },
              ]}
            />
            <Experience
              title="Hobby"
              items={[
                {
                  company: "Personal Project",
                  role: "Builder",
                  location: "Waterloo, ON",
                  dates: "2024–Present",
                  bullets: [
                    "Designed and deployed a self‑hosted service.",
                    "Experimenting with deep learning and optimization.",
                    "Wrote docs and tests to keep it stable.",
                  ],
                },
                {
                  company: "Hackathon / Experiment",
                  role: "Contributor",
                  location: "Various",
                  dates: "2023–2025",
                  bullets: [
                    "Rapid prototyping with React/Next + Rust where needed.",
                    "Tested ideas with real users and iterated quickly.",
                    "Published write‑ups or demos when useful.",
                  ],
                },
              ]}
            />
            <div className="mt-4 flex items-center justify-start gap-1">
              <button className="text-normal text-gray-500 hover:text-black">
                Resume
              </button>
              <Icon icon={"ep:d-arrow-right"} />
            </div>
          </section>
          <section id="blog" className="mt-16">
            <h2 className="text-3xl font-semibold">Blog</h2>
            <div className="mt-8 aspect-square w-full rounded-lg bg-gray-200"></div>
            <h3 className="mt-4 text-2xl">Blog 1</h3>
            <p className="text-normal">Description description description</p>
            <div className="mt-4 flex items-center justify-start gap-1">
              <button className="text-normal text-gray-500 hover:text-black">
                View More
              </button>
              <Icon icon={"ep:d-arrow-right"} />
            </div>
          </section>
          <section id="contact" className="mt-16 pb-20">
            <h2 className="text-3xl font-semibold">Get in touch!</h2>
            <p className="text-normal mt-4">
              Hiring or just want to chat? Feel free to reach out via email at{" "}
              <a
                href="mailto:shengliangchow@gmail.com"
                className="text-gray-500 underline hover:text-black"
              >
                shengliangchow@gmail.com
              </a>
            </p>
          </section>
        </NavShell>
      </main>
    </HydrateClient>
  );
}
