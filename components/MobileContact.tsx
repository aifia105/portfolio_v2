import { Button, Input, Textarea } from "@nextui-org/react";
import { Mail, Send } from "lucide-react";
import React from "react";

const MobileContact = () => {
  return (
    <div className=" items-center w-full p-8">
      <div className="flex gap-x-4 items-center justify-center mb-6 text-[22px] text-blue-600">
        <h3 className="flex-1 flex items-center gap-x-2 capitalize font-bold ">
          Let&apos;s Get in Touch!
          <Mail />
        </h3>
      </div>
      <form
        className="space-y-6"
        action={"https://getform.io/f/69e086cf-6146-448c-8b6a-c0da80017925"}
        method="POST"
      >
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
          <Input
            color="primary"
            type="text"
            size="sm"
            label="Your Name"
            name="name"
          />
        </div>
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
          <Input
            color="primary"
            type="email"
            size="sm"
            label="Email"
            name="email"
          />
        </div>
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
          <Textarea color="primary" label="Your Message" name="message" />
        </div>
        <Button
          type="submit"
          className="gap-x-2 bg-blue-600 hover:bg-blue-600/70"
        >
          Send Message <Send size={18} />
        </Button>
      </form>
    </div>
  );
};

export default MobileContact;
