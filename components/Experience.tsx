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
import { experiencesData } from "../lib/experienceData";

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
