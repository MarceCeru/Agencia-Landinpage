import { Image } from "./Image"
import milkBottlesImgMobile from '../assets/mobile/image-gallery-milkbottles.jpg'
import milkBottlesImgDesktop from '../assets/desktop/image-gallery-milkbottles.jpg'
import orangeImageMobile from '../assets/mobile/image-gallery-orange.jpg'
import orangeImageDesktop from '../assets/desktop/image-gallery-orange.jpg'
import coneImgMobile from '../assets/mobile/image-gallery-cone.jpg'
import coneImgDesktop from '../assets/desktop/image-gallery-cone.jpg'
import sugarCubesImgMobile from '../assets/mobile/image-gallery-sugar-cubes.jpg'
import sugarCubesImgDesktop from '../assets/desktop/image-gallery-sugarcubes.jpg'

export const Gallery = () => {
  return (
    <div className="grid grid-cols-2 sm:flex">
      <Image
        imgMobile={milkBottlesImgMobile}
        imgDesktop={milkBottlesImgDesktop}
      />
         <Image
        imgMobile={orangeImageMobile}
        imgDesktop={orangeImageDesktop}
      />
         <Image
        imgMobile={coneImgMobile}
        imgDesktop={coneImgDesktop}
      />
         <Image
        imgMobile={sugarCubesImgMobile}
        imgDesktop={sugarCubesImgDesktop}
      />
    </div>
  )
}
