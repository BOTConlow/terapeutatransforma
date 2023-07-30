import Image from 'next/image'
import {
  BoxTitle,
  CheckContainer,
  MolduraRec,
  Separator,
  SphereContent,
  TemasBox,
  TemasContainer,
  TemasContent,
} from './styles'
import { CaretDown } from 'phosphor-react'
import Sphere from '../../../public/Sphere.svg'
import CheckImg from '../../../public/check.svg'
import Pasta from '../../../public/Pasta.svg'
import Slider, { Settings } from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import CheckTeste from '../check'

export default function Temas() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 900,
    pauseOnHover: true,
  } as Settings

  return (
    <>
      <TemasContainer>
        <SphereContent>
          <Image src={Sphere} alt="Sphere" quality={100} />
          <h1>Veja alguns dos temas que serão abordados:</h1>
        </SphereContent>

        <TemasContent>
          <MolduraRec />

          <TemasBox>
            <BoxTitle>
              <Image src={Pasta} alt="Pasta" quality={100} />
              <h1>Tudo isso e muito mais</h1>
              <Separator />
              <CaretDown size={32} weight="bold" />
            </BoxTitle>

            <Slider {...settings}>
              <div>
                <CheckTeste desc="<b>Relacionamentos interpessoais,</b> como dificuldades no relacionamento com familiares, amigos ou parceiros românticos;" />
                <CheckTeste desc="<b>Ansiedade e estresse,</b> como preocupações excessivas medos e fobias;" />
                <CheckTeste desc="<b>Depressão e tristeza,</b> como sentimentos de desânimo, falta de motivação e perda de interesses;" />
                <CheckTeste desc="<b>Traumas passados e experiências dolorosas,</b> como abuso, negligência, violência ou acidentes;" />
                <CheckTeste desc="<b>Questões de autoestima e autoconfiança,</b>  como baixa autoestima, autocrítica excessiva ou insegurança;" />
                <CheckTeste desc="<b>Comportamento autodestrutivos e automutilação,</b> como comportamentos de risco, automutilação ou pensamentos suicidas;" />
              </div>

              <div>
                <CheckTeste desc="<b>Hábitos de saúde física e mental,</b> como alimentação, exercício físico, uso de álcool ou drogas;" />
                <CheckTeste desc="<b>Problemas familiares</b> e dinâmicas familiares disfuncionais, como conflitos entre membros da família, relacionamento com pais ou filhos;" />
                <CheckTeste desc="<b>identidade de gênero e orientação sexual,</b> como questões relacionadas à identidade, orientação sexual ou discriminação;" />
                <CheckTeste desc="<b>Questões existenciais e de propósito de vida,</b> como busca por sentido, valores pessoais ou religiosidade;" />
                <CheckTeste desc="<b>Luto e perda,</b> como a morte de um ente querido, sepração ou mudança;" />
                <CheckTeste desc="<b>Habilidades sociais e comunicação interpessoal,</b> como timidez, dificuldades em se relacionar socialmente ou problemas de comunicação" />
              </div>

              <div>
                <CheckTeste desc="<b>Vícios e dependências,</b> como dependência de substãncias químicas, jogos de azar o tecnologia;" />
                <CheckTeste desc="<b>Preocupações financeiras e profissionais,</b> como desemprego, dificuldades financeiras ou conflitos no ambiente de trabalho;" />
                <CheckTeste desc="<b>Transtornos alimentares e problemas de imagem corporal,</b> como anorexia, bulimia ou transtorno da compulsão alimentar;" />
                <CheckTeste desc="<b>Questões espirituais e religiosas,</b> como busca por sentido espiritual, práticas religiosas ou conflitos com a religião;" />
                <CheckTeste desc="<b>Mudanças e transições na vida,</b> como mudanças de emprego, mudança de cidade ou dvórcio;" />
                <CheckTeste desc="<b>Autoconhecimento e desenvolvimento pessoal,</b> como autoconhecimento, autoaceitação e desenvolvimento pessoal;" />
              </div>
            </Slider>
          </TemasBox>
        </TemasContent>

        <h1>E MUITO MAIS..</h1>
      </TemasContainer>
    </>
  )
}
