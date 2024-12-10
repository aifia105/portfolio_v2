"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Send } from "lucide-react";

import DevImg from "./DevImg";
import Socials from "./Socials";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const Hero = () => {
  return (
    <section className="pt-16 xl:pt-44 h-[84vh] bg-no-repeat bg-bottom">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-20">
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.2 }}
            className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left"
          >
            <motion.div
              variants={fadeIn}
              className="text-sm uppercase font-semibold mb-6 text-blue-600 tracking-[4px]"
            >
              Software Developer.
            </motion.div>
            <motion.h1
              variants={fadeIn}
              transition={{ delay: 0.2 }}
              className="h1 mb-6"
            >
              Hello, My name is Aifia Med Amine
            </motion.h1>
            <motion.p
              variants={fadeIn}
              transition={{ delay: 0.4 }}
              className="subtitle max-w-[490px] mx-auto xl:mx-0 mb-6"
            >
              I am a dedicated and creative software developer with a passion
              for innovation and problem-solving.
            </motion.p>
            <motion.div
              variants={fadeIn}
              transition={{ delay: 0.6 }}
              className="flex flex-col gap-y-4 md:flex-row gap-x-4 mx-auto xl:mx-0 mb-12"
            >
              <Link href="/contact">
                <Button className="gap-x-2 bg-blue-600 hover:bg-white/80">
                  Contact me <Send size={18} />
                </Button>
              </Link>
              <a href="/Aifia_Mohamed_Amine_CV.pdf" download>
                <Button className="gap-x-2 bg-blue-600 hover:bg-white/80">
                  Download CV <Download size={18} />
                </Button>
              </a>
            </motion.div>
            <motion.div variants={fadeIn} transition={{ delay: 0.8 }}>
              <Socials
                containerStyles="flex pl-3 gap-x-6 mx-auto xl:mx-0"
                iconsStyles="text-foreground text-[22px] transition-all"
              />
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="hidden xl:flex relative"
          >
            <motion.div
              animate={{
                y: [-10, 10, -10],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="bg-hero_shape1 w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2"
            >
              <DevImg
                containerStyles={
                  "bg-hero_shape2 w-[510px] h-[462px] bg-no-repeat relative bg-bottom "
                }
                ImgSrc="/icons/hero.svg"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
