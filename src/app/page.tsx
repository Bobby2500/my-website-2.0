import { HydrateClient } from "@/trpc/server";
import LandingPrompt from "./_components/inputs/LandingPrompt";
import NavShell from "./_components/layout/NavShell";

export default async function Home() {
  return (
    <HydrateClient>
      <main className="bg-white px-8 text-gray-900 [--nav-h:5rem]">
        <NavShell>
          {/* Hero */}
          <section className="mx-auto flex min-h-[100dvh] w-full flex-col items-center justify-center pt-[var(--nav-h)]">
            <h1 className="text-center text-2xl font-medium tracking-wide">
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
          <section className="mx-auto flex min-h-[100vh] w-full flex-col items-center justify-center">
            <h1 className="text-center text-2xl font-medium tracking-wide">
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
        </NavShell>
      </main>
    </HydrateClient>
  );
}
