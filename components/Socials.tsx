'use client'

import {RiYoutubeFill, RiLinkedinFill , RiGithubFill , RiInstagramFill, RiFacebookFill} from 'react-icons/ri'
import Link from 'next/link';


const icons = [
    {
        path: '/',
        name: <RiYoutubeFill />
    },
    {
        path: '/',
        name: <RiLinkedinFill />
    },
    {
        path: '/',
        name: <RiGithubFill />
    },
    {
        path: '/',
        name: <RiInstagramFill />
    },
    {
        path: '/',
        name: <RiFacebookFill />
    },

];
const Socials = ({containerStyles, iconsStyles}: {containerStyles: string, iconsStyles: string}) => {
    return (
        <div className={`${containerStyles}`} >
            {icons.map((icon, index) => {
                return (
                    <Link href={icon.path} key={index}>
                        <div className={`${iconsStyles} hover:text-blue-600`}>
                            {icon.name}
                        </div>
                    </Link>
                )
            })}
        </div>
    );
};

export default Socials;