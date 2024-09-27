"use client";
import { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import { Briefcase } from "lucide-react";

const experiencesData = [
  {
    title: "Fullstack Developer | Backend Developer",
    company: "Rooly S",
    duration: "Mar 2024 - Present",
    application: "Shrimp Cultivation Management Platform",
    description:
      "I contributed to the design and development of a large-scale platform for managing shrimp cultivation, aimed at digitizing and optimizing farm operations. Starting from scratch, I worked on system architecture, database design, and full-stack development alongside the team. While I contributed to both frontend and backend development, my expertise was focused on backend infrastructure and complex integrations.",
    details: {
      "System Design & Architecture":
        "Led the backend architecture and database design, ensuring scalability and efficient data management.",
      "Backend Development":
        "Primarily responsible for backend services using NestJS, Mongoose, JWT authentication, and MongoDB, with a focus on security and performance.",
      "Version 1 Release":
        "Delivered a stable, production-ready version with core features for farm diagnostics, daily operations, and data analysis.",
      "Ongoing Development (Version 2)":
        "Currently working on expanding features, enhancing functionality, and maintaining system stability.",
      Collaboration:
        " Worked closely with frontend (Next.js, Redux Toolkit) and DevOps (Docker, AWS S3, MongoDB Atlas) teams to ensure smooth deployment and maintenance",
    },
    skills: [
      "Next.js",
      "Redux Toolkit",
      "Tailwind CSS",
      "NestJS",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Jest",
      "Docker",
      " AWS S3",
      "MongoDB Atlas",
      "Postman",
      "github",
    ],
  },
  {
    title: "Fullstack Developer",
    company: "CMS Plus",
    duration: "Mar 2023 - May 2023",
    application: "Private Schools Management Platform",
    description:
      "I contributed to the design, development, and deployment of a comprehensive platform for managing private schools, aimed at streamlining administrative tasks, enhancing communication, and improving overall operational efficiency. I played a key role in developing both frontend and backend features, with a particular focus on backend services and real-time functionality.",
    details: {
      "Backend Development":
        "Led the backend architecture and database design, ensuring scalability and efficient data management.",
      "Real-Time Communication (Chat Module)":
        "Developed a real-time chat module using Socket.io to enable communication between parents, teachers, and administrators. This feature supports one-on-one and group conversations, fostering an interactive learning environment.",
      "User Roles & Permissions":
        "Implemented a robust user role and permission system to manage access for administrators, teachers, students, and parents, ensuring data security and user-level customization.",
      "Backend Documentation":
        "Integrated detailed backend API documentation using Swagger UI to facilitate seamless communication between frontend and backend teams, allowing for easier integration and testing.",
      Collaboration:
        " Worked closely with the team to ensure smooth user experience",
    },
    skills: [
      "Angular",
      "Tailwind CSS",
      "NestJS",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Jest",
      "gitlab",
      "socket.io",
      "MongoDB Atlas",
      "Postman",
    ],
    css: "",
  },
];

const Experience = () => {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  interface Experience {
    title: string;
    company: string;
    duration: string;
    application: string;
    description: string;
    details: Record<string, any>;
    skills: string[];
  }

  const [selectedExperience, setSelectedExperience] =
    useState<Experience | null>(null);

  const handleOpenDetails = (experience: Experience) => {
    setSelectedExperience(experience);
    setIsDetailsOpen(true);
  };

  const handleCloseDetails = () => {
    setSelectedExperience(null);
    setIsDetailsOpen(false);
  };

  return (
    <>
      <section className="xl:ml-5 ml-2 xl:h-[500px] pb-12 xl:pb-24">
        <div className="container mx-auto">
          <div className="ml-0">
            <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
              Experience
            </h2>
          </div>

          <Timeline className="" position="alternate">
            {experiencesData.map((experience, index) => (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <TimelineConnector />
                  <TimelineDot
                    color="primary"
                    variant="outlined"
                    sx={{
                      width: 45,
                      height: 45,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Briefcase />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <Typography
                    className="font-semibold text-blue-600"
                    variant="h4"
                    component="span"
                  >
                    {experience.company}
                    <Typography className="text-sm text-white">
                      {experience.duration}
                    </Typography>
                  </Typography>
                  <Typography variant="h6" className="font-bold">
                    {experience.title}
                  </Typography>
                  <Typography className=" gap-x-2">
                    <p className={`text-lg text-gray-400 ${experience?.css}`}>
                      {experience.application}
                    </p>
                  </Typography>
                  <div
                    onClick={() => handleOpenDetails(experience)}
                    className="gap-1 "
                  >
                    <button className="text-base text-blue-600 underline">
                      Details
                    </button>
                  </div>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </div>
      </section>
      {selectedExperience && (
        <Modal
          size="3xl"
          isDismissable={false}
          isOpen={isDetailsOpen}
          onOpenChange={handleCloseDetails}
          scrollBehavior="inside"
          backdrop="blur"
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  {selectedExperience.title}
                </ModalHeader>
                <ModalBody>
                  <p className="text-lg font-bold text-blue-600">
                    {selectedExperience.company}
                  </p>
                  <p>{selectedExperience.duration}</p>
                  <p>{selectedExperience.description}</p>
                  <div className="flex flex-wrap gap-y-4 items-center">
                    <p className="text-blue-600 text-lg">Details:</p>
                    {Object.entries(selectedExperience.details).map(
                      ([key, value], index) => (
                        <div key={index} className="text-sm gap-x-1">
                          <span> - </span>{" "}
                          <span className="font-bold mr-2">{key}</span>:{" "}
                          <span>{value}</span>
                        </div>
                      )
                    )}
                  </div>
                  <div className="flex flex-wrap gap-x-2 items-center">
                    <p className="text-blue-600 text-lg">Technologies:</p>
                    {selectedExperience.skills.map((skill, index) => (
                      <p key={index} className="text-sm">
                        {skill}
                      </p>
                    ))}
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button
                    className="text-blue-600"
                    variant="light"
                    onPress={onClose}
                  >
                    Close
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

export default Experience;
