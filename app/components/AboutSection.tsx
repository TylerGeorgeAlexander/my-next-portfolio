import React from "react";
import Image from "next/image";

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "Python" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "Git" },
  { skill: "GitHub" },
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Let&apos;s Connect!
            </h1>
            <p>
              Hello there! I am Tyler, a committed software engineer residing in
              Atlanta, GA, recognized for my{" "}
              <span className="font-bold">passion for innovation</span>,{" "}
              <span className="font-bold">self-driven approach</span>, and{" "}
              <span className="font-bold">commitment to excellence</span>.
            </p>
            <br />
            <p>
              During my professional hours, I leverage my expertise by teaching
              software engineering at edX, while in my free time, I engage in
              freelance projects, broadening my horizons in the field.
            </p>
            <br />
            <p>
              My primary passion resides in the field of software engineering,
              where I consistently pursue a broad spectrum of interests. This
              encompasses tackling complex coding challenges, staying
              well-informed about the latest technological advancements, and
              actively seeking opportunities for personal and professional
              growth. In addition to my software engineering pursuits, I have a
              keen interest in hands-on activities involving motorcycles,
              automobiles, and small engines. 🧑‍🔧🏍️
            </p>
            <br />
            <p>
              I wholeheartedly advocate for the principle of ongoing
              development, epitomized by the notion of{" "}
              <span className="font-bold text-teal-500">continuous growth</span>
              . This principle fuels my passion for technology, motivating me to
              consistently challenge the limits of what is achievable and
              explore new frontiers. I am eagerly anticipating the promising
              opportunities that await me in my professional journey. 😊
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
            <div className="flex justify-center items-center flex-col mt-8">
              <div className="flex m-4">
                <span id="C" className="light">
                  C
                </span>
                <span id="R" className="light">
                  R
                </span>
                <span id="E" className="light">
                  E
                </span>
                <span id="A" className="light">
                  A
                </span>
                <span id="T" className="light">
                  T
                </span>
                <span id="I" className="light">
                  I
                </span>
                <span id="V" className="light">
                  V
                </span>
                <span id="I2" className="light">
                  I
                </span>
                <span id="T2" className="light">
                  T
                </span>
                <span id="Y" className="light">
                  Y
                </span>
              </div>

              <div className="mt-4 md:mt-8">
                <Image
                  src="/tyler-diffused-realism-desk-side-profile-1-fotor-ai.png"
                  alt=""
                  width={500}
                  height={500}
                  className="animate-pulse-extended rounded-lg md:flex md:z-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
