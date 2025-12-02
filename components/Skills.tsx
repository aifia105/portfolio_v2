import { motion } from "framer-motion";
import { skills } from "@/lib/skillsData";
import { Bot } from "lucide-react";
import Image from "next/image";

const Skills = () => {
    return (
        <section className="xl:h-[700px] mb-2 pb-16 xl:pb-24">
            <div className="container mx-auto px-4">
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
                    <div className="w-full max-w-[1250px] grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-y-5 gap-x-20 justify-items-center py-6">
                        {skills.map((skill, index) => {
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{
                                        duration: 0.3,
                                        delay: index * 0.1,
                                    }}
                                    className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-3xl overflow-hidden flex items-center justify-center w-20 h-20"
                                >
                                    <Image
                                        className="object-cover"
                                        src={skill.src}
                                        alt={skill.alt}
                                        width={100}
                                        height={100}
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
