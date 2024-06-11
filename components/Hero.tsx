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
                    <div className="text-sm uppercase font-semibold mb-4 text-blue-600 tracking-[4px]">Software Developer.</div>
                    <h1 className="h1 mb-4">Hello, My name is Aifia Med Amine</h1>
                    <p className="subtitle max-w-[490px] mx-auto xl:mx-0">I am a dedicated and creative software developer with a passion for innovation and problem-solving.</p>
                    <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
                        <Link href='#contact' >
                        <Button className="gap-x-2 bg-blue-600 hover:bg-blue-600/70">
                            Contact me <Send size={18} />
                        </Button>
                        </Link>
                        <Button  className="gap-x-2 bg-white hover:bg-primary/70">
                            Download CV <Download size={18} />
                        </Button>
                    </div>
                    <Socials containerStyles="flex gap-x-6 mx-auto xl:mx-0" iconsStyles="text-foreground text-[22px]  transition-all"/>
                </div> 
                <div className="hidden xl:flex relative">
                   
                    <div className="bg-hero_shape1 w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2">
                        <DevImg containerStyles={'bg-hero_shape2 w-[510px] h-[462px] bg-no-repeat relative bg-bottom '} ImgSrc='/hero.svg' />
                    </div>
                </div>
            </div>
            <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
            <RiArrowDownSLine className="text-3xl text-primary" />
            </div>
        </div>
       </section>
    );
};

export default Hero;

/* <Badge containerStyles="absolute top-[24%] -left-[37rem]" icon={<RiBriefcase4Fill />} endCountNum={3} badgeText="Years Of Experience"/>
                   <Badge containerStyles="absolute top-[85%] -left-[32rem]" icon={<RiTodoFill />} endCountNum={4} badgeText="Projects"/>
                   <Badge containerStyles="absolute top-[55%] -right-8" icon={<RiTodoFill />} endCountNum={4} badgeText="Projects"/> */
