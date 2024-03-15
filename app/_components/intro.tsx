import { CMS_NAME } from "@/app/lib/constants";

export function Intro() {
  return (
    <section className="flex-col lg:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8 m-2">
        Dev Discoveries.
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        Welcome to my blog dedicated to sharing insights and tutorials on technical writing and various tech topics. Powered by{" "}
        <a
          href="https://nextjs.org/"
          className="underline hover:text-blue-600 duration-200 transition-colors"
        >
          Next.js
        </a>{" "}
        and {CMS_NAME}, our goal is to help you discover new tools, techniques, and trends in the world of development.
      </h4>
    </section>
  );
}
