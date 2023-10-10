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
              Get to know me!
            </h1>
            <p>
              Greetings! I'm Tyler, a software engineer hailing from Atlanta,
              GA, known for my{" "}
              <span className="font-bold">{`unwavering ambition`}</span>,{" "}
              <span className="font-bold">{`self-motivation`}</span>, and{" "}
              <span className="font-bold">{`dedication`}</span>.
            </p>
            <br />
            <p>
              By day, I contribute my skills to edX, and in my free time, I
              delve into the world of freelancing.
            </p>

            <br />
            <p>
              I'm passionate about software engineering and have a wide range of
              interests that keep me busy. From working on complex coding
              projects to staying updated with the latest technology trends, I
              am always seeking new experiences and love to keep myself engaged
              and learning. In addition to my software engineering skills, I
              also enjoy tinkering with motorcycles, cars, and small engines.
              🧑‍🔧🏍️
            </p>
            <br />
            <p>
              I firmly believe in the principle of{" "}
              <span className="font-bold text-teal-500">continuous growth</span>
              . It's a philosophy I wholeheartedly embrace. My passion for
              technology fuels my drive to consistently explore the boundaries
              of what's achievable. I'm eager to discover the path my career
              will take, and I remain open to exciting new opportunities. 😊
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
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
            <Image
              src="/hero-image.png"
              alt=""
              width={325}
              height={325}
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
