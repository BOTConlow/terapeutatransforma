import Image from "next/image";
import { BoxTitle, Check, CheckContainer, MolduraRec, Separator, SphereContent, TemasBox, TemasContainer, TemasContent } from "./styles";
import { CaretDown } from "phosphor-react";
import Sphere from '../../../public/Sphere.svg'
import CheckImg from '../../../public/check.svg'
import Pasta from '../../../public/Pasta.svg'
import Slider, { Settings } from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


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
    } as Settings;

    return (
        <>
            <TemasContainer>

                <SphereContent>
                    <Image
                        src={Sphere}
                        alt="Sphere"
                        quality={100}
                    />
                    <h1>
                        Veja alguns dos temas que serão abordados:
                    </h1>
                </SphereContent>

                <TemasContent>

                    <MolduraRec />

                    <TemasBox>

                        <BoxTitle>
                            <Image
                                src={Pasta}
                                alt="Pasta"
                                quality={100}
                            />
                            <h1>
                                Tudo isso e muito mais
                            </h1>
                            <Separator />
                            <CaretDown size={32} weight="bold" />
                        </BoxTitle>

                        <Slider {...settings}>

                            <div>
                                <CheckContainer>
                                    <Check>
                                        <Image
                                            src={CheckImg}
                                            alt="Pasta"
                                            quality={100}
                                        />
                                    </Check>
                                    <p>
                                        <b>Relacionamentos interpessoais,</b> como dificuldades no relacionamento com familiares, amigos ou parceiros românticos;
                                    </p>
                                </CheckContainer>
                                <CheckContainer>
                                    <Check>
                                        <Image
                                            src={CheckImg}
                                            alt="Pasta"
                                            quality={100}
                                        />
                                    </Check>
                                    <p>
                                        <b>Ansiedade e estresse,</b> como preocupações excessivas medos e fobias;
                                    </p>
                                </CheckContainer>
                                <CheckContainer>
                                    <Check>
                                        <Image
                                            src={CheckImg}
                                            alt="Pasta"
                                            quality={100}
                                        />
                                    </Check>
                                    <p>
                                        <b>Depressão e tristeza,</b> como sentimentos de desânimo, falta de motivação e perda de interesses;
                                    </p>
                                </CheckContainer>
                                <CheckContainer>
                                    <Check>
                                        <Image
                                            src={CheckImg}
                                            alt="Pasta"
                                            quality={100}
                                        />
                                    </Check>
                                    <p>
                                        <b>Traumas passados e experiências dolorosas,</b> como abuso, negligência, violência ou acidentes;
                                    </p>
                                </CheckContainer>
                                <CheckContainer>
                                    <Check>
                                        <Image
                                            src={CheckImg}
                                            alt="Pasta"
                                            quality={100}
                                        />
                                    </Check>
                                    <p>
                                        <b>Questões de autoestima e autoconfiança,</b>  como baixa autoestima, autocrítica excessiva ou insegurança;
                                    </p>
                                </CheckContainer>
                                <CheckContainer>
                                    <Check>
                                        <Image
                                            src={CheckImg}
                                            alt="Pasta"
                                            quality={100}
                                        />
                                    </Check>
                                    <p>
                                        <b>Comportamento autodestrutivos e automutilação,</b> como comportamentos de risco, automutilação ou pensamentos suicidas;
                                    </p>
                                </CheckContainer>

                            </div>

                            <div>
                                <CheckContainer>
                                    <Check>
                                        <Image
                                            src={CheckImg}
                                            alt="Pasta"
                                            quality={100}
                                        />
                                    </Check>
                                    <p>
                                        <b>Hábitos de saúde física e mental,</b> como alimentação, exercício físico, uso de álcool ou drogas;
                                    </p>
                                </CheckContainer>
                                <CheckContainer>
                                    <Check>
                                        <Image
                                            src={CheckImg}
                                            alt="Pasta"
                                            quality={100}
                                        />
                                    </Check>
                                    <p>
                                        <b>Problemas familiares</b> e dinâmicas familiares disfuncionais, como conflitos entre membros da família, relacionamento com pais ou filhos;
                                    </p>
                                </CheckContainer>
                                <CheckContainer>
                                    <Check>
                                        <Image
                                            src={CheckImg}
                                            alt="Pasta"
                                            quality={100}
                                        />
                                    </Check>
                                    <p>
                                        <b>identidade de gênero e orientação sexual,</b> como questões relacionadas à identidade, orientação sexual ou discriminação;
                                    </p>
                                </CheckContainer>
                                <CheckContainer>
                                    <Check>
                                        <Image
                                            src={CheckImg}
                                            alt="Pasta"
                                            quality={100}
                                        />
                                    </Check>
                                    <p>
                                        <b>Questões existenciais e de propósito de vida,</b> como busca por sentido, valores pessoais ou religiosidade;
                                    </p>
                                </CheckContainer>
                                <CheckContainer>
                                    <Check>
                                        <Image
                                            src={CheckImg}
                                            alt="Pasta"
                                            quality={100}
                                        />
                                    </Check>
                                    <p>
                                        <b>Luto e perda,</b> como a morte de um ente querido, sepração ou mudança;
                                    </p>
                                </CheckContainer>
                                <CheckContainer>
                                    <Check>
                                        <Image
                                            src={CheckImg}
                                            alt="Pasta"
                                            quality={100}
                                        />
                                    </Check>
                                    <p>
                                        <b>Habilidades sociais e comunicação interpessoal,</b> como timidez, dificuldades em se relacionar socialmente ou problemas de comunicação
                                    </p>
                                </CheckContainer>

                            </div>

                            <div>
                                <CheckContainer>
                                    <Check>
                                        <Image
                                            src={CheckImg}
                                            alt="Pasta"
                                            quality={100}
                                        />
                                    </Check>
                                    <p>
                                        <b>Vícios e dependências,</b> como dependência de substãncias químicas, jogos de azar o tecnologia;
                                    </p>
                                </CheckContainer>
                                <CheckContainer>
                                    <Check>
                                        <Image
                                            src={CheckImg}
                                            alt="Pasta"
                                            quality={100}
                                        />
                                    </Check>
                                    <p>
                                        <b>Preocupações financeiras e profissionais,</b> como desemprego, dificuldades financeiras ou conflitos no ambiente de trabalho;
                                    </p>
                                </CheckContainer>
                                <CheckContainer>
                                    <Check>
                                        <Image
                                            src={CheckImg}
                                            alt="Pasta"
                                            quality={100}
                                        />
                                    </Check>
                                    <p>
                                        <b>Transtornos alimentares e problemas de imagem corporal,</b> como anorexia, bulimia ou transtorno da compulsão alimentar;
                                    </p>
                                </CheckContainer>
                                <CheckContainer>
                                    <Check>
                                        <Image
                                            src={CheckImg}
                                            alt="Pasta"
                                            quality={100}
                                        />
                                    </Check>
                                    <p>
                                        <b>Questões espirituais e religiosas,</b> como busca por sentido espiritual, práticas religiosas ou conflitos com a religião;
                                    </p>
                                </CheckContainer>
                                <CheckContainer>
                                    <Check>
                                        <Image
                                            src={CheckImg}
                                            alt="Pasta"
                                            quality={100}
                                        />
                                    </Check>
                                    <p>
                                        <b>Mudanças e transições na vida,</b> como mudanças de emprego, mudança de cidade ou dvórcio;
                                    </p>
                                </CheckContainer>
                                <CheckContainer>
                                    <Check>
                                        <Image
                                            src={CheckImg}
                                            alt="Pasta"
                                            quality={100}
                                        />
                                    </Check>
                                    <p>
                                        <b>Autoconhecimento e desenvolvimento pessoal,</b> como autoconhecimento, autoaceitação e desenvolvimento pessoal;
                                    </p>
                                </CheckContainer>
                            </div>

                        </Slider>


                        {/* <div>

                                

                            </div>

                            <div>

                                
                                
                                

                            </div> */}

                    </TemasBox>

                </TemasContent>

                <h1>
                    E MUITO MAIS..
                </h1>

            </TemasContainer>
        </>
    )
}

