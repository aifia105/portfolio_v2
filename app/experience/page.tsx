"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowUpFromDot } from "lucide-react";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";

const ExperiencePage = () => {
  const fadeUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  };

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
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section
        variants={fadeUp}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.5 }}
        className="pt-20 pb-8 xl:pt-24 xl:pb-12"
      >
        <div className="container mx-auto px-4">
          <h2 className="section-title mb-2 text-center">
            Experience & Skills
          </h2>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        variants={fadeUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="pb-8"
      >
        <Skills />
      </motion.section>

      {/* Experience Section */}
      <motion.section
        variants={fadeUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="pb-6"
      >
        <Experience />
      </motion.section>

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
    </div>
  );
};

export default ExperiencePage;
