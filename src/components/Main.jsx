import imgMobile from '../assets/mobile/image-header.jpg'
import imgDesktop from '../assets/desktop/image-header.jpg'
import arrow from '../assets/icon-arrow-down.svg'

export const Main = () => {
    return (
        <section>
            <picture>
                <source media='(max-width:740px)' srcSet={imgMobile} />
                <source media='(min-width:741px)' srcSet={imgDesktop} />
                <img src={imgMobile} alt="bgHeader" />
            </picture> 
            <p className=' absolute font-bold font-Fraunces text-[40px] w-[327px] top-[144px] left-0 right-0 mx-auto uppercase tracking-[6.25px] text-white text-center
            
            desktop:w-[750px] desktop:text-[55px] desktop:tracking-[11px] desktop:font-extrabold desktop:top-[200px]'>We are creatives</p>
            <img className='absolute top-[294px] left-0 right-0 mx-auto sm:top[220px] lg:top-[350px]' src={arrow} alt="" />
        </section>
    ) 
}