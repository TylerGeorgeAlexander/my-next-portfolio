"use client";
import React, { useState } from "react";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import SlideUp from "./SlideUp";

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    email: "",
    message: "",
  });

  function encode(data: Record<string, string>): string {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formData }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="relative">
      <h1 className="my-10 text-center font-bold text-4xl">
        Contact
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
      </h1>
      <SlideUp>
        <div className="container rounded-lg bg-gray-300 dark:bg-gray-800 px-5 py-10 mx-auto flex flex-col md:flex-row items-center justify-center animate-slideUpCubiBezier animation-delay-2">
          <div className="lg:w-1/2 md:w-full rounded-lg overflow-hidden sm:mr-0 p-10 flex flex-col items-center">
            <div className="contact-method mb-6">
              <span className="icon solid alt">
                <AiOutlineMail />
              </span>
              <h3>Email</h3>
              <a href="mailto:TylerGeorgeAlexander.dev@gmail.com">
                TylerGeorgeAlexander.dev@gmail.com
              </a>
            </div>
            <div className="contact-method">
              <span className="icon solid alt">
                <AiOutlinePhone />
              </span>
              <h3>Phone</h3>
              <span>+56 9 5617 7204</span>
            </div>
          </div>
          <form
            name="contact"
            onSubmit={handleSubmit}
            className="lg:w-1/2 md:w-full flex flex-col text-center items-center md:ml-auto w-full md:py-8 mt-8 md:mt-0"
          >
            <div className="relative mb-4 w-full">
              <label htmlFor="name" className="leading-7 text-sm text-gray-400">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="input-style w-full" // Change the class to w-full
                onChange={handleChange}
              />
            </div>
            <div className="relative mb-4 w-full">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-400"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="input-style w-full" // Change the class to w-full
                onChange={handleChange}
              />
            </div>
            <div className="relative mb-4 w-full">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-400"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="flex textarea-style w-full" // Change the class to w-full
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="button-style">
              Submit
            </button>
          </form>
        </div>
      </SlideUp>
    </section>
  );
};

export default ContactSection;
