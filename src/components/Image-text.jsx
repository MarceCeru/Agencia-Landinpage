

export const ImageText = ({order, imgMobile, imgDesktop, tittle, text}) => {
    return (
        <div className={`${order} relative pt-[398px] sm:pt-[350px] tablet:pt-[150px] lg:pt-[250px] desktop:pt-[398px]`}>
            <picture className="absolute top-0 z-[-1]">
                <source media="(max-width:639px)" srcSet={imgMobile} />
                <source media="(min-width:640px)" srcSet={imgDesktop} />
                <img src={imgMobile} alt="imagenServicio" />
            </picture>
            <h2 className="text-center font-Fraunces text-[29px] text-Dark-desaturated-cyan mb-7">{tittle}</h2>
            <p className="text-center font-Barlow text-Dark-desaturated-cyan mx-3 mb-[55px] tablet:sm lg:w-[300px] lg:mx-auto">{text}</p>
        </div>
    )
}
