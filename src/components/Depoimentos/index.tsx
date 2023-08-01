import Image from 'next/image'
import { DepoimentosContainer, ImageSecion } from './styles'
import Depoimento1 from '../../../public/depoimento1.webp'
import Depoimento2 from '../../../public/depoimento2.webp'
import Depoimento3 from '../../../public/depoimento3.webp'
import Depoimento4 from '../../../public/depoimento4.webp'
import Depoimento5 from '../../../public/depoimento5.webp'
import Depoimento6 from '../../../public/depoimento6.webp'
import Slider, { Settings } from 'react-slick'

export default function Depoimentos() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 900,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  } as Settings

  return (
    <>
      <DepoimentosContainer>
        <p>O que dizem sobre este guia...</p>

        <ImageSecion>
          <Slider {...settings}>
            <Image
              src={Depoimento1}
              alt="Depoimento"
              quality={100}
              priority={true}
            />

            <Image
              src={Depoimento2}
              alt="Depoimento"
              quality={100}
              priority={true}
            />

            <Image
              src={Depoimento3}
              alt="Depoimento"
              quality={100}
              priority={true}
            />

            <Image
              src={Depoimento4}
              alt="Depoimento"
              quality={100}
              priority={true}
            />

            <Image
              src={Depoimento5}
              alt="Depoimento"
              quality={100}
              priority={true}
            />

            <Image
              src={Depoimento6}
              alt="Depoimento"
              quality={100}
              priority={true}
            />
          </Slider>
        </ImageSecion>
      </DepoimentosContainer>
    </>
  )
}
