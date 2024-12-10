"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Input } from "@nextui-org/react";

import { Textarea } from "@nextui-org/react";
import { Mail, Phone, Send } from "lucide-react";
import { Button } from "@nextui-org/react";
import MobileContact from "@/components/MobileContact";

const Contact = () => {
  const fadeLeft = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
  };

  const fadeRight = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
  };

  const fadeUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section className="h-[84vh] pt-16 pb-16 xl:pt-28 bg-no-repeat bg-bottom">
      <div className="container mx-auto">
        <motion.div
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title mb-10 text-center mx-auto">
            Contact me
          </h2>
        </motion.div>
        <div className="flex-col xl:flex-row pt-4 justify-between gap-x-16 hidden xl:flex">
          {/* Left Section */}
          <motion.div
            className="w-1/2 relative"
            variants={fadeLeft}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <Image
              src="icons/world.svg"
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
          </motion.div>

          {/* Right Section */}
          <motion.div
            className="items-center w-1/2 p-8"
            variants={fadeRight}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
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
                className="gap-x-2 bg-blue-600 hover:bg-white/80 hover:text-blue-600"
              >
                Send Message <Send size={18} />
              </Button>
            </form>
          </motion.div>
        </div>
        <motion.div
          className="flex xl:hidden pt-8"
          variants={fadeLeft}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <MobileContact />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
