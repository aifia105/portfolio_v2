"use client";
import DevImg from "../../components/DevImg";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";
import {
  User2,
  HomeIcon,
  GraduationCap,
  Calendar,
  Briefcase,
} from "lucide-react";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import { RiArrowDownSLine } from "react-icons/ri";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Aifia Mohamed Amine",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Software Engineer",
  },
  {
    icon: <Calendar size={20} />,
    text: "Born on 27 June 2000",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Tunis, Tunisia",
  },
];

const qualificationData = [
  {
    title: "education",
    data: [
      {
        university: "Esprit - Private School of Engineering and Technology",
        qualification: "Software Engineering Degree",
        years: "Sep 2024 - Present",
      },
      {
        university: "Isamm - Higher Institute of Multimedia Arts of Manouba",
        qualification: "Bachelor of Computer Science",
        years: "Sep 2020 - Jun 2023",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        Company: "Rooly S",
        role: "Full-stack developer",
        years: "Mar 2024 - Present",
      },
      {
        Company: "CMS Plus",
        role: "Full-stack developer Intern",
        years: "Mar 2023 - May 2023",
      },
    ],
  },
];

const certificationData = [
  {
    title: "certifications",
    data: [
      {
        name: "- Supervised Machine Learning: Regression and Classification",
      },
      {
        name: "- Supervised Machine Learning: Advanced Learning Algorithms",
      },
      {
        name: "- Server-side Development with NodeJS, Express and MongoDB",
      },
    ],
  },
];

const About = () => {
  const getData = (arr: any, title: string) => {
    return arr.find((item: any) => item.title === title);
  };
  return (
    <>
      <section className="xl:h-[820px] pt-10 pb-12 xl:pb-24 xl:pt-16 ">
        <div className="container mx-auto" suppressHydrationWarning>
          <div className="-ml-3 sm:ml-4">
            <h2 className="section-title mb-8 xl:mb-24 text-center mx-auto">
              About me
            </h2>
          </div>
          <div className="flex flex-col gap-x-10 xl:flex-row xl:ml-10">
            {/*image*/}
            <div className="hidden xl:flex flex-1 relative">
              <DevImg
                containerStyles="bg-about_shape_light w-[505px] h-[505px] bg-no-repeat relative"
                ImgSrc="/coding-bro.svg"
              />
            </div>
            <div className="flex-1">
              <Tabs defaultValue="personal">
                <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border ">
                  <TabsTrigger
                    className="w-[162px] xl:w-auto"
                    value={"personal"}
                  >
                    Personal Information
                  </TabsTrigger>
                  <TabsTrigger
                    className="w-[162px] xl:w-auto"
                    value={"qualifications"}
                  >
                    Qualifications
                  </TabsTrigger>
                  <TabsTrigger
                    className="w-[162px] xl:w-auto"
                    value={"certifications"}
                  >
                    Certifications
                  </TabsTrigger>
                </TabsList>
                <div className="text-lg mt-12 xl:mt-8">
                  <TabsContent value={"personal"}>
                    <div className="text-center xl:text-left">
                      <h3 className="h3 mb-4">Who I Am</h3>
                      <p className="subtitle max-w-xl mx-auto xl:mx-0">
                        I am a motivated software developer with experience in
                        web development, system design, and backend systems.
                        Currently, I am honing my skills by working full-time as
                        a software developer while pursuing an engineering
                        degree through evening courses.
                      </p>
                      <div className="grid xl:grid-cols-2 gap-4 mb-12">
                        {infoData.map((item, index) => {
                          return (
                            <div
                              className="flex items-center gap-x-4 mx-auto xl:mx-0"
                              key={index}
                            >
                              <div className="text-blue-600">{item.icon}</div>
                              <div>{item.text}</div>
                            </div>
                          );
                        })}
                      </div>
                      <div className="flex flex-col gap-y-2 ">
                        <div className="text-blue-600 mr-2 sm:mr-1">
                          Languages
                        </div>
                        <div className="border-b border-border mb-4"></div>
                        <div>English, French, Arab</div>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value={"qualifications"}>
                    <div>
                      <h3 className="h3 mb-8 text-center xl:text-left">
                        My Awesome Journey
                      </h3>
                      <div className="grid md:grid-cols-2 gap-y-8">
                        <div className="flex flex-col gap-y-6">
                          <div className="flex gap-x-4 items-center text-[22px] text-blue-600">
                            <Briefcase />
                            <h4 className="capitalize font-medium">
                              {getData(qualificationData, "experience").title}
                            </h4>
                          </div>
                          <div className="flex flex-col gap-y-8">
                            {getData(qualificationData, "experience").data.map(
                              (item: any, index: number) => {
                                return (
                                  <div
                                    className="flex gap-x-8 group "
                                    key={index}
                                  >
                                    <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                      <div className="w-[11px] h-[11px] rounded-full bg-blue-600 absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                    </div>
                                    <div>
                                      <div className="font-semibold text-xl leading-none mb-2">
                                        {item.Company}
                                      </div>
                                      <div className="text-lg leading-none text-muted-foreground mb-4">
                                        {item.role}
                                      </div>
                                      <div className="text-base font-medium">
                                        {item.years}
                                      </div>
                                    </div>
                                  </div>
                                );
                              }
                            )}
                          </div>
                        </div>
                        <div className="flex flex-col gap-y-6">
                          <div className="flex gap-x-4 items-center text-[22px] text-blue-600">
                            <GraduationCap size={28} />
                            <h4 className="capitalize font-medium">
                              {getData(qualificationData, "education").title}
                            </h4>
                          </div>
                          <div className="flex flex-col gap-y-8">
                            {getData(qualificationData, "education").data.map(
                              (item: any, index: number) => {
                                return (
                                  <div
                                    className="flex gap-x-8 group "
                                    key={index}
                                  >
                                    <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                      <div className="w-[11px] h-[11px] rounded-full bg-blue-600 absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                    </div>
                                    <div>
                                      <div className="font-semibold text-xl leading-none mb-2">
                                        {item.university}
                                      </div>
                                      <div className="text-lg leading-none text-muted-foreground mb-4">
                                        {item.qualification}
                                      </div>
                                      <div className="text-base font-medium">
                                        {item.years}
                                      </div>
                                    </div>
                                  </div>
                                );
                              }
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value={"certifications"}>
                    <div className="text-center xl:text-left">
                      <h3 className="h3 mb-8"> My Certifications</h3>
                      <div className="mb-16">
                        <h4 className="text-xl font-semibold mb-2"></h4>
                        <div className="border-b border-border mb-4"></div>
                        <div>
                          {getData(
                            certificationData,
                            "certifications"
                          ).data.map((item: any, index: number) => {
                            return (
                              <div
                                key={index}
                                className="w-2/4 text-center xl:text-left mx-auto xl:mx-0"
                              >
                                <div className="font-normal xl:w-[600px] mb-4">
                                  {item.name}
                                  <p className="text-blue-600">Coursera</p>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </div>
              </Tabs>
            </div>
          </div>

          {/* <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-7 animate-bounce">
            <RiArrowDownSLine className="text-4xl text-blue-600" />
          </div> */}
        </div>
      </section>
      <Skills />
      <Experience />
    </>
  );
};

export default About;
