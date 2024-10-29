import Image from "next/image";
import { Input } from "@nextui-org/react";

import { Textarea } from "@nextui-org/react";
import { Mail, Phone, Send } from "lucide-react";
import { Button } from "@nextui-org/react";
import {
  RiDiscordFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiTwitterXFill,
  RiPhoneFill,
} from "react-icons/ri";
import Link from "next/link";
const Contact = () => {
  const icons = [
    {
      path: "https://x.com/CrafterByt/",
      name: <RiTwitterXFill />,
    },
    {
      path: "https://www.instagram.com/mohamed.aifia/",
      name: <RiInstagramFill />,
    },
    {
      path: "https://x.com/CrafterByte",
      name: <RiDiscordFill />,
    },
    {
      path: "https://www.linkedin.com/in/aifia-mohamed-amine/",
      name: <RiLinkedinBoxFill />,
    },
  ];
  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-16 bg-no-repeat bg-bottom">
      <div className="container mx-auto">
        <h2 className="section-title mb-4  text-center mx-auto">Contact me</h2>

        <div className=" flex-col xl:flex-row pt-4 justify-between gap-x-10 hidden xl:flex">
          {/* Left Section */}
          <div className="w-1/2 relative">
            <Image
              src="/world.svg"
              alt="Background"
              layout="fill"
              objectFit="cover"
              className="opacity-40 text-blue-600 "
            />
            <div className="absolute  flex flex-col justify-center mt-3 p-8 ">
              <h2 className="text-3xl  font-bold mb-2">
                Don&apos;t Be Shy, Say Hi!
              </h2>
              <p className="text-foreground text-lg mb-2 font-light max-w-xl mx-auto xl:mx-0">
                Feel free to reach out for collaborations, opportunities, or
                just to say hello. I&apos;d love to hear from you!
              </p>
              <div className="flex mt-3 ">
                <div className="flex items-center gap-x-4 mx-auto xl:mx-0">
                  <div className="text-white">
                    <Mail />
                  </div>
                  <div>mohamedaifia34@gmail.com</div>
                  <div className="text-white">
                    <Phone fill="true" />
                  </div>
                  <div>+216 26 110 335</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className=" items-center w-1/2 p-8">
            <div className="flex gap-x-4 items-center justify-center mb-6 text-[22px] text-blue-600">
              <h3 className="flex-1 flex items-center gap-x-2 capitalize font-bold ">
                Let&apos;s Get in Touch!
                <Mail />
              </h3>
            </div>
            <form
              className="space-y-6"
              action={
                "https://getform.io/f/69e086cf-6146-448c-8b6a-c0da80017925"
              }
              method="POST"
            >
              <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                <Input
                  color="primary"
                  type="text"
                  size="sm"
                  label="Your Name"
                  name="name"
                />
              </div>
              <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                <Input
                  color="primary"
                  type="email"
                  size="sm"
                  label="Email"
                  name="email"
                />
              </div>
              <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                <Textarea color="primary" label="Your Message" name="message" />
              </div>
              <Button
                type="submit"
                className="gap-x-2 bg-blue-600 hover:bg-blue-600/70"
              >
                Send Message <Send size={18} />
              </Button>
            </form>
          </div>
        </div>
        <div className="flex xl:hidden pt-8  ">
          <div className=" items-center w-full p-8">
            <div className="flex gap-x-4 items-center justify-center mb-6 text-[22px] text-blue-600">
              <h3 className="flex-1 flex items-center gap-x-2 capitalize font-bold ">
                Let&apos;s Get in Touch!
                <Mail />
              </h3>
            </div>
            <form
              className="space-y-6"
              action={
                "https://getform.io/f/69e086cf-6146-448c-8b6a-c0da80017925"
              }
              method="POST"
            >
              <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                <Input
                  color="primary"
                  type="text"
                  size="sm"
                  label="Your Name"
                  name="name"
                />
              </div>
              <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                <Input
                  color="primary"
                  type="email"
                  size="sm"
                  label="Email"
                  name="email"
                />
              </div>
              <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                <Textarea color="primary" label="Your Message" name="message" />
              </div>
              <Button
                type="submit"
                className="gap-x-2 bg-blue-600 hover:bg-blue-600/70"
              >
                Send Message <Send size={18} />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
