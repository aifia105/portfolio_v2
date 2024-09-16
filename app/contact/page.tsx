import Image from "next/image";
import { Input } from "@nextui-org/react";

import { Textarea } from "@nextui-org/react";
import { Mail, Phone } from "lucide-react";
import { Button } from "@nextui-org/react";
import {
  RiDiscordFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiTwitterXFill,
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

        <div className="lg:flex pt-4 justify-between gap-x-10">
          {/* Left Section */}
          <div className="w-full lg:w-1/2 relative">
            <Image
              src="/world.svg"
              alt="Background"
              layout="fill"
              objectFit="cover"
              className="opacity-50 text-blue-600 hidden lg:block"
            />
            <div className="absolute  flex flex-col justify-center p-8">
              <h2 className="text-3xl  font-bold mb-2">
                Don’t Be Shy, Say Hi!
              </h2>
              <p className="text-muted-foreground text-lg mb-2 font-light max-w-xl mx-auto xl:mx-0">
                Feel free to reach out for collaborations, opportunities, or
                just to say hello. I&apos;d love to hear from you!
              </p>
              <div className="flex mb-3 ">
                <div className="flex items-center gap-x-4 mx-auto xl:mx-0">
                  <div className="text-blue-600">
                    <Mail />
                  </div>
                  <div>mohamedaifia34@gmail.com</div>
                  <div className="text-blue-600">
                    <Phone />
                  </div>
                  <div>+216 26 110 335</div>
                </div>
              </div>
              <div className="flex space-x-4">
                {icons.map((icon, index) => {
                  return (
                    <Link href={icon.path} key={index}>
                      <div
                        className={`text-foreground text-[22px]  transition-all hover:text-blue-600`}
                      >
                        {icon.name}
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className=" items-center w-full lg:w-1/2 p-8">
            <div className="flex gap-x-4 items-center justify-center mb-6 text-[22px] text-blue-600">
              <Mail />
              <h3 className="capitalize font-bold ">Let's Get in Touch!</h3>
            </div>
            <form className="space-y-6">
              <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                <Input
                  color="primary"
                  type="text"
                  size="sm"
                  label="Your Name"
                />
              </div>
              <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                <Input color="primary" type="email" size="sm" label="Email" />
              </div>
              <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                <Textarea color="primary" label="Your Message" />
              </div>

              <Button
                type="submit"
                className="bg-blue-600 ml-1 px-4 py-2  text-white"
                variant="flat"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
