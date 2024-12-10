import { motion } from "framer-motion";
import { skills } from "@/lib/skillsData";
import { Bot } from "lucide-react";

const Skills = () => {
  return (
    <section className="xl:h-[700px] pb-16 xl:pb-24">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
            Skills
          </h2>
        </motion.div>

        <div className="flex flex-col justify-center items-center h-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex gap-x-4 items-center text-[22px] text-blue-600 mb-6"
          >
            <Bot />
            <h3 className="capitalize font-bold">My Toolbox</h3>
          </motion.div>
          <div className="ml-16 xl:ml-28 w-full grid grid-cols-2 sm:grid-cols-4 gap-4 xl:max-w-[910px] text-center py-6">
            {skills.map((skill, index) => {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="mb-3 shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-full overflow-hidden flex items-center justify-center w-20 h-20"
                >
                  <img
                    className="w-full h-full object-cover"
                    src={skill.src}
                    alt={skill.alt}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
