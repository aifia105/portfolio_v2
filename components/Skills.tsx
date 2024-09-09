import Image from "next/image";
const Skills = () => {
  return (
    <section className="xl:h-[860px] pb-12 xl:pb-24 ">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          Skills
        </h2>

        <div className="flex justify-center items-center h-full">
          <div className="w-full grid grid-cols-2 sm:grid-cols-5 gap-4 xl:max-w-[600px] text-center py-4">
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-full overflow-hidden flex items-center justify-center w-16 h-16">
              <img
                className="w-full h-full object-cover"
                src="/javascript.svg"
                alt="JavaScript"
              />
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500  rounded-full overflow-hidden flex items-center justify-center w-16 h-16">
              <img
                className="w-full h-full object-cover"
                src="/typescript.svg"
                alt="TypeScript"
              />
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500  rounded-full overflow-hidden flex items-center justify-center w-16 h-16">
              <img
                className="w-full h-full object-cover pb-3"
                src="/java.svg"
                alt="java"
              />
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500  rounded-full overflow-hidden flex items-center justify-center w-16 h-16">
              <img
                className="w-full h-full object-cover pb-2"
                src="/python.svg"
                alt="python"
              />
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500  rounded-full overflow-hidden flex items-center justify-center w-16 h-16">
              <img
                className="w-full h-full object-cover pb-2"
                src="/bash.svg"
                alt="bash"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
