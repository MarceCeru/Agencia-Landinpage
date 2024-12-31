

export const Text = ({ order, title, text, color }) => {
    return (
        <div className={`${order} text-center h-[437px] px-6 flex flex-col place-content-around py-6 tablet:h-auto lg:px-[65px] desktop:text-left desktop:pl-[165px] desktop:py-[140px] desktop:[105px]`}>
            <h2 className="font-Fraunces text-[2rem] font-black tablet:text-[1.25rem] lg:text-[2.5rem] desktop:leading-tight desktop:text-[2.8rem]">{title}</h2>
            <p className="font-Barlow text-Dark-grayish-blue text-[1.110rem] leading-[1.9rem] tablet:text-[0.8rem] tablet:leading-[1.5rem] lg:text-[18px] desktop:text-[20px]">{text}</p>
            <div className="relative">
                <button className="uppercase font-Fraunces ">Learn More</button>
                <div className={`w-[137px] h-[10px] ${color} rounded-full absolute right-0 left-0 mx-auto bottom-0 -z-10 bg-opacity-25 desktop:mx-0 desktop:left-[-10px]`}></div>
            </div>
        </div>
    )
}
