import DevImg from "./DevImg";
import  Image  from "next/image";
import { Tabs , TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import  {
    User2,
    MailIcon,
    HomeIcon,
    PhoneCall,
    GraduationCap,
    Calendar,
    Briefcase,
    University
} from 'lucide-react'


const infoData = [
    {
        icon: <User2 size={20} />,
        text: 'Aifia Mohamed Amine',

    },
    {
        icon: <PhoneCall size={20} />,
        text: '+216 26 110 335',

    },
    {
        icon: <MailIcon size={20} />,
        text: 'mohamedaifia34@gmail.com',

    },
    {
        icon: <GraduationCap size={20} />,
        text: "bachelor's degree in computer science",

    },
    {
        icon: <Calendar size={20} />,
        text: "27 June 2000",

    },
    {
        icon: <HomeIcon size={20} />,
        text: "Ariana, Tunisia",

    },

];

const qualificationData = {
        title: 'education',
        data: [
            {
                University : 'Isamm Higher Institute of Multimedia Arts of Manouba',
                qualification: 'Bachelor of Computer Science',
                years : '2020 - 2023'
            }
        ]
};

const certificationData = {
    title: 'certifications',
    data: [
        {
            name : 'Supervised Machine Learning: Regression and Classification'
        }
    ]
};

const AboutMe = () => {
    const getData = (arr:any, title:string) => {
        return arr.find((item:any) => item.title === title)
    }
    return (
        <section className="xl:h-[860px] pb-12 xl:py-24">
            <div className="container mx-auto">
                <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">About me</h2>
                <div>
                    {/*image*/ }
                    <div>
                        <DevImg containerStyles="bg-about_shape_light w-[505px] h-[505px] bg-no-repeat relative" ImgSrc=""/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;