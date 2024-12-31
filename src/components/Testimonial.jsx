
export const Testimonial = ({img, Testimonial, name, position}) => {
  return (
    <div className="flex flex-col items-center text-center mb-[64px]">
        <img className="w-[72px] rounded-full" src={img} alt="photo" />
        <p className="my-8 font-Barlow text-Very-dark-grayish-blue px-[28px] max-w-[400px] text-[18px]">{Testimonial}</p>
        <h3 className="font-Fraunces text-[18px] text-Very-dark-desatured-blue ">{name}</h3>
        <p className="text-Grayish-blue font-Barlow text-[14px]">{position}</p>
    </div>
  ) 
}
