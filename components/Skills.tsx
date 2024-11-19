import { skills } from "@/lib/skillsData";
import { Bot } from "lucide-react";
const Skills = () => {
  return (
    <section className="xl:h-[700px] pb-12 xl:pb-20  ">
      <div className="container mx-auto">
        <div className="-ml-2 sm:-ml-1">
          <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
            Skills
          </h2>
        </div>

        <div className="flex flex-col justify-center items-center h-full">
          <div className="flex gap-x-4 items-center text-[22px] text-blue-600">
            <Bot />
            <h3 className="capitalize font-bold  ">My Toolbox</h3>
          </div>
          <div className="ml-16 xl:ml-28 w-full grid grid-cols-2 sm:grid-cols-4 gap-4 xl:max-w-[910px] text-center py-6">
            {skills.map((skill, index) => {
              return (
                <div
                  key={index}
                  className="mb-3 shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-full overflow-hidden flex items-center justify-center w-20 h-20"
                >
                  <img
                    className="w-full h-full object-cover"
                    src={skill.src}
                    alt={skill.alt}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
