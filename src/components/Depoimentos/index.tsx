import Image from 'next/image'
import { DepoimentosContainer } from './styles'
import Depoimento1 from '../../../public/depoimento1.png'
import Depoimento2 from '../../../public/depoimento2.png'
import Depoimento3 from '../../../public/depoimento3.png'
import Depoimento4 from '../../../public/depoimento4.png'
import Depoimento5 from '../../../public/depoimento5.png'
import Depoimento6 from '../../../public/depoimento6.png'
import Depoimento7 from '../../../public/depoimento7.png'
import Slider, { Settings } from 'react-slick'

export function SampleNextArrow(props: {
  className: any
  style: any
  onClick: any
}) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        background: 'black',
        borderRadius: '10px',
      }}
      onClick={onClick}
    />
  )
}

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
  } as Settings

  return (
    <>
      <DepoimentosContainer>
        <p>O que dizem sobre este guia...</p>

        <div
          style={{
            boxShadow: 'inset 0px 0px 22px -3px rgba(0,0,0,0.75)',
            borderRadius: 35,
            padding: '.2rem .2rem 0 .2rem',
          }}
        >
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
        </div>
      </DepoimentosContainer>
    </>
  )
}
