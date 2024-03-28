'use client'
import CountUp from 'react-countup'


const Badge = ({containerStyles, icon, endCountNum, endCountText, badgeText}: {containerStyles: string, badgeText: string, endCountText?: string, icon: any, endCountNum: number}) => {
    return (
        <div className={`badge ${containerStyles}`}>
            <div className="text-2xl text-blue-600" >{icon}</div>
            <div className='flex items-center gap-x-2'>
                <div className='text-3xl leading-none font-bold  text-blue-600'>
                    <CountUp end={endCountNum} delay={1} duration={4} />
                    {endCountText}
                </div>
                <div className='max-w-[70px] leading-none text-[15px] font-medium text-black'>{badgeText}</div>
            </div>
        </div>
    );
};

export default Badge;