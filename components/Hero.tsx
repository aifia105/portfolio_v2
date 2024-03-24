import Link from "next/link";
import { Button } from '@/components/ui/button';
import { Download, Send } from "lucide-react";

import {
    RiBriefcase4Fill,
    RiTeamFill,
    RiTodoFill,
    RiArrowDownSLine
} from 'react-icons/ri';

import DevImg from "./DevImg";
import Badge from "./Badge";
import Socials from "./Socials";

const Hero = () => {
    return(
       <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-no-repeat bg-bottom">
        <div className="container mx-auto">
            <div className="flex justify-between gap-x-8">
                <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
                    <div className="text-sm uppercase font-semibold mb-4 text-blue-600 tracking-[4px]">Full Stack Developer.</div>
                    <h1 className="h1 mb-4">Hello, my name is Aifia Mohamed</h1>
                    <p className="subtitle max-w-[490px] mx-auto xl:mx-0">I am a dedicated and creative software developer with a passion for innovation and problem-solving.</p>
                    <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
                        <Link href='/contact' >
                        <Button className="gap-x-2 bg-blue-600">
                            Contact me <Send size={18} />
                        </Button>
                        </Link>
                        <Button  className="gap-x-2">
                            Download CV <Download size={18} />
                        </Button>
                    </div>
                </div>
                <div className="hidden xl:flex relative">image</div>
            </div>
            <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
            <RiArrowDownSLine className="text-3xl text-primary" />
            </div>
        </div>
       </section>
    );
};

export default Hero;