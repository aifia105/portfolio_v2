import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
  Button,
} from "@nextui-org/react";
import { Eye, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      name: "Fullstack Responsive E-Commerce App",
      description:
        "Full-stack responsive eCommerce platform with user authentication, user account management, file upload, admin dashboard.",
      image: "/1.PNG",
      github: "https://github.com/aifia105/Ecommerce-Shop-api",
      stack: [
        "Angular",
        "Ngrx",
        "Spring Boot",
        "MySQL",
        "Swagger",
        "JWT",
        "Spring JPA",
        "REST API",
      ],
      cantPreview: true,
      previewUrl: "",
    },
    {
      name: "Responsive Car Rental Landing Website",
      description:
        "Responsive landing website for car rental application with state management.",
      image: "/2.png",
      github: "https://github.com/aifia105/Car_renting-landing-page",
      stack: ["Angular", "Ngrx", "Tailwind CSS"],
      cantPreview: false,
      previewUrl: "https://car-renting-landing-page.vercel.app/home",
    },
  ];

  const cli_projects = [
    {
      name: "Real-time Messaging Backend System",
      description:
        "Real-time messaging backend system supporting one-on-one and group chats with user authentication and user account management.",
      github: "https://github.com/aifia105/Chat_app",
      stack: [
        "Spring Boot",
        "Spring JPA",
        "MongoDB",
        "Web Socket",
        "JWT",
        "Spring Security",
        "REST API",
      ],
      cantPreview: true,
    },
    {
      name: "URL Shortener Service",
      description: "URL shortener web service.",
      github: "https://github.com/aifia105/URL-shortener-service",
      stack: [
        "TypeScript",
        "NestJS",
        "Mongoose",
        "MongoDB",
        "Swagger",
        "REST API",
      ],
      cantPreview: true,
    },
  ];
  return (
    <section className="xl:h-[1200px] pt-10 pb-12 xl:pb-24 xl:pt-16">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <div key={index} className="flex justify-center items-center  p-4">
              <Card
                isBlurred
                className="w-[600px] h-fit hover:scale-105 duration-500 p-3"
              >
                <CardBody className="space-y-6">
                  <div>
                    <p className="font-bold text-2xl ">{project.name}</p>
                  </div>
                  <div className="flex items-center justify-center">
                    <Image
                      radius="sm"
                      alt="nextui logo"
                      height={100}
                      src={project.image}
                      className="w-full"
                    />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-md font-semibold">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <span className="text-sm font-semibold text-blue-600">
                      Stack:
                    </span>
                    <div className="flex gap-2">
                      {project.stack.map((stack, index) => (
                        <span key={index} className="text-sm">
                          {stack}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardBody>
                <Divider />
                <CardFooter>
                  <div className="flex gap-2">
                    <Link href={project.github} target="_blank">
                      <Button
                        type="submit"
                        className="gap-x-2 bg-transparent border-1 hover:bg-blue-600/70 items-center justify-center"
                      >
                        Github
                        <Github />
                      </Button>
                    </Link>
                    <Link href={project.previewUrl} target="_blank">
                      <Button
                        type="submit"
                        className={`gap-x-2 bg-transparent border-1  items-center justify-center ${
                          project.cantPreview
                            ? `opacity-50  cursor-not-allowed`
                            : "hover:bg-blue-600/70"
                        }`}
                      >
                        Preview
                        <Eye />
                      </Button>
                    </Link>
                  </div>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {cli_projects.map((project, index) => (
            <div key={index} className="flex justify-center items-center  p-4">
              <Card
                isBlurred
                className="w-[600px] h-[270px] hover:scale-105 duration-500 p-3"
              >
                <CardBody className="space-y-6">
                  <div>
                    <p className="font-bold text-2xl ">{project.name}</p>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-md font-semibold">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <span className="text-sm font-semibold text-blue-600">
                      Stack:
                    </span>
                    <div className="flex gap-2">
                      {project.stack.map((stack, index) => (
                        <span key={index} className="text-sm">
                          {stack}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardBody>
                <Divider />
                <CardFooter>
                  <div className="flex gap-2">
                    <Link href={project.github} target="_blank">
                      <Button
                        type="submit"
                        className="gap-x-2 bg-transparent border-1 hover:bg-blue-600/70 items-center justify-center"
                      >
                        Github
                        <Github />
                      </Button>
                    </Link>
                  </div>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
