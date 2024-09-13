"use client";
import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import { Briefcase } from "lucide-react";
import { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

const experiencesData = [
  {
    title: "Fullstack Developer, Backend Specialist",
    company: "Rooly S",
    duration: "2024-Present",
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
    ],
  },
];

const Experience = () => {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const handleOpenDetails = () => {
    setIsDetailsOpen(!isDetailsOpen);
  };

  return (
    <>
      <section className="xl:ml-12 ml-2 xl:h-[600px] pb-12 xl:pb-24">
        <div className="container mx-auto">
          <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
            Experience
          </h2>

          <Timeline className="" position="alternate">
            <TimelineItem>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot
                  color="primary"
                  variant="outlined"
                  sx={{ width: 45, height: 45 }}
                ></TimelineDot>
                <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Typography
                  className="font-semibold"
                  variant="h4"
                  component="span"
                >
                  Rooly S
                  <Typography className="text-sm">2024-Present</Typography>
                </Typography>
                <Typography variant="h5" className="font-bold">
                  Shrimp Cultivation Management Platform
                </Typography>
                <Typography className="flex gap-x-2">
                  <p className="text-blue-600 text-lg">Role:</p>{" "}
                  <p className="text-lg text-gray-300">
                    {" "}
                    Fullstack Developer, Backend Specialist
                  </p>
                </Typography>
                <button
                  onClick={handleOpenDetails}
                  className="text-sm text-gray-300 underline"
                >
                  Details
                </button>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </div>
      </section>
      <Modal
        size="3xl"
        isDismissable={false}
        isOpen={isDetailsOpen}
        onOpenChange={setIsDetailsOpen}
        scrollBehavior="inside"
        backdrop="blur"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {experiencesData[0].title}
              </ModalHeader>
              <ModalBody>
                <p>{experiencesData[0].company}</p>
                <p>{experiencesData[0].duration}</p>
                <p>{experiencesData[0].description}</p>
                <div className="flex flex-wrap gap-x-2 items-center">
                  <p className="text-blue-600 text-lg">Details:</p>
                  {Object.entries(experiencesData[0].details).map(
                    ([key, value], index) => {
                      return (
                        <p key={index} className="text-sm">
                          <span className="font-bold underline">{key}</span>:{" "}
                          {value}
                        </p>
                      );
                    }
                  )}
                </div>
                <div className="flex flex-wrap gap-x-2 items-center">
                  <p className="text-blue-600 text-lg">Technologies:</p>
                  {experiencesData[0].skills.map((skill, index) => {
                    return (
                      <p key={index} className="text-sm">
                        {skill}
                      </p>
                    );
                  })}
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
    </>
  );
};

export default Experience;
