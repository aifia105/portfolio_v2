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

const Projects = () => {
  const canTPreview = true;
  const projects = ["1", "2", "3", "4"];
  return (
    <section className="xl:h-[1100px] pt-10 pb-12 xl:pb-24 xl:pt-16">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <div key={index} className="flex justify-center items-center  p-4">
              <Card
                isBlurred
                className="w-[600px] h-[400px] hover:scale-110 duration-500"
              >
                <Divider />
                <CardBody>
                  <Image
                    radius="sm"
                    alt="nextui logo"
                    height={40}
                    src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                    width={40}
                  />
                  <div className="flex flex-col">
                    <p className="text-md">NextUI</p>
                    <p className="text-small text-default-500">nextui.org</p>
                  </div>
                  <p>
                    Make beautiful websites regardless of your design
                    experience.
                  </p>
                </CardBody>
                <Divider />
                <CardFooter>
                  <div className="flex gap-2">
                    <Button
                      type="submit"
                      className="gap-x-2 bg-transparent border-1 hover:bg-blue-600/70 items-center justify-center"
                    >
                      Github
                    </Button>
                    <Button
                      type="submit"
                      className={`gap-x-2 bg-transparent border-1  items-center justify-center ${
                        canTPreview
                          ? `opacity-50  cursor-not-allowed`
                          : "hover:bg-blue-600/70"
                      }`}
                    >
                      Preview
                    </Button>
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
