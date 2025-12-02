"use client";
import {
  Card,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
  Button,
  Chip,
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
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="min-h-screen pt-20 pb-16 xl:pt-28 xl:pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-title mb-3">Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of my recent work and side projects
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-background/60 backdrop-blur-sm border border-default-200 hover:border-primary/50 transition-all duration-300 hover:shadow-xl group h-full">
                <CardBody className="p-0">
                  {/* Image Container */}
                  <div className="relative overflow-hidden aspect-video">
                    <Image
                      removeWrapper
                      alt={project.name}
                      src={project.image}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-bold bg-primary  bg-clip-text text-transparent">
                      {project.name}
                    </h3>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.stack.map((tech, idx) => (
                        <Chip
                          key={idx}
                          size="sm"
                          variant="flat"
                          className="bg-primary/10 text-primary font-medium"
                        >
                          {tech}
                        </Chip>
                      ))}
                    </div>
                  </div>
                </CardBody>

                <Divider className="bg-default-200" />

                <CardFooter className="p-4 gap-3">
                  <Button
                    as={Link}
                    href={project.github}
                    target="_blank"
                    variant="bordered"
                    className="flex-1 border-default-300 hover:border-primary hover:bg-primary/10"
                    startContent={<Github className="w-4 h-4" />}
                  >
                    Code
                  </Button>
                  <Button
                    as={Link}
                    href={project.previewUrl}
                    target="_blank"
                    variant="solid"
                    color="primary"
                    className="flex-1"
                    startContent={<Eye className="w-4 h-4" />}
                    isDisabled={project.cantPreview}
                  >
                    Live Demo
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scroll to Top Button */}
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
