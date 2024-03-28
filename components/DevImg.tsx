import Image from 'next/image'


const DevImg = ({containerStyles, ImgSrc}: {containerStyles: string, ImgSrc: string}) => {
    return (
        <div className={`${containerStyles}`}>
            <Image src={ImgSrc} fill priority alt='' />
        </div>
    );
};

export default DevImg;