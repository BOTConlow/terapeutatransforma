import Image from 'next/image'
import Button from '../Button'
import CheckTeste from '../check'
import { useKeenSlider, KeenSliderPlugin } from 'keen-slider/react'
import Capa4 from '../../../public/capa120.png'
import Capa3 from '../../../public/capa10.png'
import Capa2 from '../../../public/capainter.png'
import Capa1 from '../../../public/capa512.png'
import {
  BoxCheck,
  DescontoContainer,
  RevisaoContent,
  RevisaoDesconto,
  RevisaoHeadline,
} from './styles'

const carousel: KeenSliderPlugin = (slider) => {
  const z = 220
  function rotate() {
    const deg = 360 * slider.track.details.progress
    slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`
  }
  slider.on('created', () => {
    const deg = 360 / slider.slides.length
    slider.slides.forEach((element, idx) => {
      element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`
    })
    rotate()
  })
  slider.on('detailsChanged', rotate)
}

export default function DescontoFunction() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      selector: '.carousel__cell',
      renderMode: 'custom',
      mode: 'free-snap',
    },
    [carousel],
  )

  return (
    <DescontoContainer>
      <div className="wrapper">
        <div className="scene">
          <div className="carousel keen-slider" ref={sliderRef}>
            <div className="carousel__cell imagescontain ">
              {' '}
              <Image src={Capa1} alt="Capa" quality={100} />
            </div>
            <div className="carousel__cell imagescontain">
              {' '}
              <Image src={Capa2} alt="Capa" quality={100} />
            </div>
            <div className="carousel__cell imagescontain">
              {' '}
              <Image src={Capa3} alt="Capa" quality={100} />
            </div>
            <div className="carousel__cell imagescontain">
              {' '}
              <Image src={Capa4} alt="Capa" quality={100} />
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          fontWeight: 'bold',
        }}
      >
        <BoxCheck>
          <CheckTeste desc="Guia 512 Poderosas Perguntas Para Sessão de Terapia" />
        </BoxCheck>

        <BoxCheck>
          <CheckTeste desc="Bônus - KIT Guia de Interpretação das Respostas" />
        </BoxCheck>

        <BoxCheck>
          <CheckTeste desc="Bônus - 120 Perguntas Para Crianças e Adolescentes" />
        </BoxCheck>

        <BoxCheck>
          <CheckTeste desc="Bônus - 10 Recursos Terapêuticos para LUTO" />
        </BoxCheck>

        <BoxCheck>
          <CheckTeste desc="Desconto de 62%" />
        </BoxCheck>

        <BoxCheck>
          <CheckTeste desc="Acesso Imediato Via E-mail" />
        </BoxCheck>
      </div>

      <RevisaoDesconto>
        <RevisaoHeadline>
          <h2>
            ÚLTIMO DIA COM DESCONTO{' '}
            <span style={{ color: '#29cf83' }}>+ BÔNUS</span>
          </h2>
        </RevisaoHeadline>
        <RevisaoContent>
          <p
            style={{
              textDecoration: 'line-through',
              color: 'red',
            }}
          >
            De R$ 270,00
          </p>
          <h1>12x R$ 9,74</h1>
          <p>OU R$ 97,00 A VISTA</p>
          <Button title="BAIXAR AGORA!" />
        </RevisaoContent>
      </RevisaoDesconto>
    </DescontoContainer>
  )
}
