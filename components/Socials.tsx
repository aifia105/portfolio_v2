"use client";

import {
  RiLinkedinFill,
  RiGithubFill,
  RiRedditFill,
  RiTwitterXFill,
} from "react-icons/ri";
import Link from "next/link";

const icons = [
  {
    path: "https://www.linkedin.com/in/aifia-mohamed-amine/",
    name: <RiLinkedinFill />,
  },
  {
    path: "https://github.com/aifia105",
    name: <RiGithubFill />,
  },
  {
    path: "https://x.com/CrafterByte",
    name: <RiTwitterXFill />,
  },
  {
    path: "https://www.reddit.com/user/creepy05/",
    name: <RiRedditFill />,
  },
];
const Socials = ({
  containerStyles,
  iconsStyles,
}: {
  containerStyles: string;
  iconsStyles: string;
}) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={`${iconsStyles} hover:text-blue-600`}>
              {icon.name}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
