"use client";
import {
  Card,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
  Button,
} from "@nextui-org/react";
import { ArrowUpFromDot, Eye, Github } from "lucide-react";
import { projects } from "../../lib/projectsData";
import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";

const fadeInUp: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

const Projects = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const fadeUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section className="min-h-screen pt-16 pb-16 xl:pb-24 xl:pt-28">
      <div className="container mx-auto">
        <div>
          <motion.div
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.5 }}
          >
            <h2 className="section-title mb-16 text-center mx-auto">
              Projects
            </h2>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
              className="flex justify-center items-center p-3"
            >
              <Card className="w-[650px] bg-blue-700/10 h-fit hover:scale-105 duration-500 p-3">
                <CardBody className="space-y-6">
                  <div>
                    <p className="font-bold text-lg sm:text-2xl ">
                      {project.name}
                    </p>
                  </div>
                  <div className="flex items-center w-full justify-center overflow-hidden">
                    <Image
                      radius="sm"
                      alt=""
                      src={project.image}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-md font-semibold">
                      {project.description}
                    </p>
                  </div>
                  <div className="hidden sm:flex items-center gap-x-2">
                    <span className="text-md font-semibold text-blue-600">
                      Stack:
                    </span>
                    <div className="flex gap-2">
                      {project.stack.map((stack, index) => (
                        <span key={index} className="text-md">
                          {stack}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardBody>
                <Divider />
                <CardFooter className="flex items-center sm:items-start justify-center sm:justify-start">
                  <div className="flex  gap-2">
                    <Link href={project.github} target="_blank">
                      <Button
                        type="submit"
                        className="gap-x-2 bg-transparent border-1 hover:bg-blue-600/70 items-center justify-center"
                      >
                        <span className="hidden sm:flex">Github</span>
                        <Github />
                      </Button>
                    </Link>
                    <Link href={project.previewUrl} target="_blank">
                      <Button
                        type="submit"
                        className={`gap-x-2 bg-transparent border-1  items-center justify-center ${
                          project.cantPreview
                            ? `opacity-50  cursor-not-allowed`
                            : "hover:bg-blue-600/70"
                        }`}
                      >
                        <span className="hidden sm:flex">Preview</span>
                        <Eye />
                      </Button>
                    </Link>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
      {showButton && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 p-3 bg-blue-600 text-white rounded-full shadow-lg"
        >
          <ArrowUpFromDot />
        </motion.button>
      )}
    </section>
  );
};

export default Projects;
