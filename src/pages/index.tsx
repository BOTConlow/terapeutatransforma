import Head from 'next/head'
import { Be_Vietnam_Pro } from 'next/font/google'
import { BonusBox, BonusContainer, BonusHeadline, BonusTitle, BoxGuia, BoxGuiaContainer, GuiaContainer, Header, HeaderContainer, Headline, HeadlineContainer, ImageComponent, ImageContainer, LastChance, LastChanceHeadline, MainContainer, Mensage, RevisaoContainer, RevisaoHeadline, RevisaoImages, SecondHeadline, SecondHeadlineContainer, Separator2 } from '@/styles/index.styles'
import Backgound1 from '../../public/Background1.svg'
import Ipad from '../../public/Ipad.png'
import ColumbiaImg from '../../public/columbia1.png'
import ColumbiaImg2 from '../../public/columbia2.png'
import Capa120 from '../../public/capa120.png'
import Capa10 from '../../public/capa10.png'
import Iphone from '../../public/iphone.png'
import Garantia from '../../public/garantia.png'
import Logo1 from '../../public/logo1.svg'
import Logo2 from '../../public/logo2.svg'
import Homem from '../../public/homem.png'
import WhatsappImg from '../../public/whatsapp.png'
import Image from 'next/image'
import Depoimentos from '@/components/Depoimentos'
import Temas from '@/components/Temas'
import { Atom } from 'phosphor-react'
import Button from '@/components/button'
import Desconto from '@/components/desconto'

const Vietnam = Be_Vietnam_Pro({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })

export default function Home() {

  return (
    <>
      <Head>
        <title>Terapeuta Trasforma</title>
        <meta name="description" content="Terapeuta Transforma" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon3.svg" />
      </Head>

      <MainContainer className={Vietnam.className}>

        <Header>
          <HeaderContainer>
            <h1>
              ATENÇÃO: Se você quer melhorar os resultados  que vem tendo<br /> com seus clientes, este conteúdo é para você!
            </h1>
          </HeaderContainer>
        </Header>

        <Headline style={{ backgroundImage: `url(${Backgound1.src})` }}>
          <HeadlineContainer>
            <h1>
              Descubra o segredo para<br /> atendimentos memoráveis:<br /> 512 perguntas poderosas!
            </h1>
            <p>
              Conquiste seus clientes com 512 perguntas inteligentes para um<br /> atendimento excepcional!
            </p>
          </HeadlineContainer>
        </Headline>

        <SecondHeadline>
          <SecondHeadlineContainer>
            <Image
              src={Ipad}
              alt="capa"
              quality={100}
              priority={true}
            />
            <p>
              Ideal para psicólogos, terapeutas, psicanalistas, estudantes e<br /> profissionais da área de saúde.
            </p>
          </SecondHeadlineContainer>
        </SecondHeadline>

        <Mensage color={'frst'}>
          <p>
            <u>Aristóteles</u>
          </p>
          <h1>
            "A sabedoria começa com a dúvida<br /> inteligente, pois é através dela que<br /> encontramos as verdades mais profundas."
          </h1>
        </Mensage>

        <GuiaContainer>

          <Image
            src={ColumbiaImg}
            alt="Columbia University"
            quality={100}
          />

          <h1>
            Tenha um guia completo em suas mãos com as perguntas certas para serem usadas em um processo terapêutico.
          </h1>

          <h3>
            Com essas <b>512 perguntas</b> baseadas em evidências, você poderá intervir casos de violência psicológica, física ou sexual, tentativa de suicídio, depressão, ansiedade e muito mais…
          </h3>

          <BoxGuiaContainer>

            <BoxGuia>
              <Image
                src={Logo1}
                alt="Logo"
                quality={100}
              />
              <h1>
                Guia Prático, Didático e Fácil
              </h1>
              <p>
                Todas as perguntas são separadas por temas e ocasiões. Você poderá consultar <span style={{ color: '#60B0D9' }}>sempre</span> que precisar.
              </p>
            </BoxGuia>

            <Atom size={80} weight="fill" />

            <BoxGuia>
              <Image
                src={Logo2}
                alt="Logo"
                quality={100}
              />
              <h1>
                +50 Perguntas focadas em suicídio
              </h1>
              <p>
                Você terá uma linha abrangente de questionamento sobre risco de suicídio.
              </p>
            </BoxGuia>

          </BoxGuiaContainer>

        </GuiaContainer>

        <Mensage color={'scnd'}>
          <p>
            Todas as perguntas foram cientificamente testadas pela<br /> Columbia University Department of Psychiatry nos EUA.
          </p>
          <Image
            src={ColumbiaImg2}
            alt="Columbia University"
            quality={100}
          />
        </Mensage>

        <Temas />

        <Mensage color={'thrd'}>
          <p>
            Você vai ter acesso ao guia mais avançado do mercado!
          </p>
          <h1>
            + 50 MIL
          </h1>
          <p>
            pessoas já foram ajudadas com esse guia.
          </p>
        </Mensage>

        <Depoimentos />

        <Mensage color={'fhrt'}>
          <p>
            Adquirindo HOJE, você leva totalmente <span style={{ color: '#00FF96' }}>GRÁTIS:</span>
          </p>
        </Mensage>

        <BonusContainer>

          <BonusBox>

            <BonusTitle>

              <BonusHeadline type={'frst'}>

                <Separator2 type={'frst'} color={'frst'} />
                <h2>
                  MANFAAT BUKU
                </h2>

              </BonusHeadline>

              <h1>
                120 Perguntas Para Crianças e Adolescentes
              </h1>
              <p>
                Acesse 120 perguntas inovadoras e eficientes com o objetivo de estimular o diálogo com os adolescentes, proporcionando um momento de descontração e união.
              </p>
              <p>
                São 120 perguntas para quebrar o gelo no contato inicial com o adolescente. Por meio dessa ferramenta você pode descobrir coisas novas sobre sua vida (família, relacionamentos, escola, amigos e lazer), além de questões que podem ser trabalhadas posteriormente na terapia ou no dia a dia.
              </p>

            </BonusTitle>

            <ImageContainer>

              <Image
                src={Capa120}
                alt="Logo"
                width={470}
                height={550}
                quality={100}
              />

              <ImageComponent color={'frst'}>

                <div>
                  <h1>
                    19
                  </h1>
                  <p>
                    Juhlah Chapter
                  </p>
                </div>

                <Separator2 type={'scnd'} />

                <div>

                  <h1>
                    253
                  </h1>
                  <p>
                    Juhlah Chapter
                  </p>
                </div>

                <Separator2 type={'scnd'} />

                <div>
                  <h1>
                    60
                  </h1>
                  <p>
                    Hari Menulis
                  </p>
                </div>

              </ImageComponent>

            </ImageContainer>


          </BonusBox>

          <BonusBox>

            <ImageContainer>

              <Image
                src={Capa10}
                alt="Logo"
                width={470}
                height={550}
                quality={100}
              />

              <ImageComponent color={'scnd'}>

                <div>
                  <h1>
                    19
                  </h1>
                  <p>
                    Juhlah Chapter
                  </p>
                </div>

                <Separator2 type={'scnd'} />

                <div>
                  <h1>
                    253
                  </h1>
                  <p>
                    Juhlah Chapter
                  </p>
                </div>

                <Separator2 type={'scnd'} />

                <div>
                  <h1>
                    60
                  </h1>
                  <p>
                    Hari Menulis
                  </p>
                </div>

              </ImageComponent>

            </ImageContainer>

            <BonusTitle>

              <BonusHeadline type={'scnd'}>

                <Separator2 type={'frst'} color={'scnd'} />
                <h2>
                  MANFAAT BUKU
                </h2>

              </BonusHeadline>

              <h1>
                10 Recursos Terapêuticos<br /> para Luto
              </h1>
              <p>
                Este é um pacote de recursos terapêuticos, com instrumentos que o ajudarão no manejo do paciente enlutado. Desde a avaliação e triagem até as atividades voltadas para o desenvolvimento do Luto. (Para adolescentes e adultos).
              </p>
              <p>
                Este é um pacote de recursos terapêuticos, com instrumentos que o ajudarão no manejo do paciente enlutado. Desde a avaliação e triagem até as atividades voltadas para o desenvolvimento do Luto. (Para adolescentes e adultos).
              </p>

            </BonusTitle>

          </BonusBox>
          <BonusBox>

            <BonusTitle>

              <BonusHeadline type={'thrd'}>

                <Separator2 type={'frst'} color={'thrd'} />
                <h2>
                  MANFAAT BUKU
                </h2>

              </BonusHeadline>

              <h1>
                Guia De Interpretação Das Respostas
              </h1>
              <p>
                Acesse 120 perguntas inovadoras e eficientes com o objetivo de estimular o diálogo com os adolescentes, proporcionando um momento de descontração e união.
              </p>
              <p>
                São 120 perguntas para quebrar o gelo no contato inicial com o adolescente. Por meio dessa ferramenta você pode descobrir coisas novas sobre sua vida (família, relacionamentos, escola, amigos e lazer), além de questões que podem ser trabalhadas posteriormente na terapia ou no dia a dia.
              </p>

            </BonusTitle>

            <ImageContainer>

              <Image
                src={Capa120}
                alt="Logo"
                width={470}
                height={550}
                quality={100}
              />

              <ImageComponent color={'thrd'}>

                <div>
                  <h1>
                    19
                  </h1>
                  <p>
                    Juhlah Chapter
                  </p>
                </div>

                <Separator2 type={'scnd'} />

                <div>
                  <h1>
                    253
                  </h1>
                  <p>
                    Juhlah Chapter
                  </p>
                </div>

                <Separator2 type={'scnd'} />
                <div>
                  <h1>
                    60
                  </h1>
                  <p>
                    Hari Menulis
                  </p>
                </div>

              </ImageComponent>

            </ImageContainer>

          </BonusBox>

        </BonusContainer>

        <Mensage color={'fifth'}>
          <p>
            Veja tudo que você irá receber <span style={{ color: '#00FF96' }}>HOJE:</span>
          </p>
        </Mensage>

        <RevisaoContainer>
          <RevisaoHeadline>
            <p>
              Somente nos dias: <b>25, 26 e 27 de Julho</b> você terá um DESCONTO  de 62% + BÔNUS EXCLUSIVOS
            </p>
          </RevisaoHeadline>
          <RevisaoImages>
            <Image
              src={Iphone}
              alt="Logo"
              quality={100}
            />
            <Image
              src={Iphone}
              alt="Logo"
              quality={100}
            />
            <Image
              src={Iphone}
              alt="Logo"
              quality={100}
            />
            <Image
              src={Iphone}
              alt="Logo"
              quality={100}
            />
          </RevisaoImages>

          <Desconto />

        </RevisaoContainer>

        <Mensage color={'sixth'}>
          <Image
            src={Homem}
            alt="Logo"
            quality={100}
          />
          <h1>
            Mas... e se eu não gostar?
          </h1>
          <p>
            O nível de satisfação com este livro é maior que 91%. Então as chances de você ficar insatisfeito são<br /> bem pequenas. Afinal esse livro já foi testado e aprovado por mais de 50 mil profissionais.
          </p>
        </Mensage>

        <Mensage color={'seventh'}>
          <Image
            src={Garantia}
            alt="Selo Garantia"
            quality={100}
          />
          <h1>
            Você não tem nada a perder!
          </h1>
          <p>
            Não se preocupe, compre agora e tenha direito de arrependimento em até 30 dias. se o conteúdo descrito aqui não<br /> for o mesmo que você receber, basta enviar um e-mail para contato@terapeutatransforma.com.br dentro do período de garantia<br /> e cancelamos sua compra, reembolsando 100% do valor pago sem burocracias. Esse é o nosso compromisso com você!
          </p>
        </Mensage>

        <Mensage color={'eighth'}>
          <h1>
            Ficou alguma dúvida?
          </h1>
          <a href='https://contate.me/terpeutatransforma' target='_blank'>
            <Image
              src={WhatsappImg}
              alt="Logo"
              width={460}
              height={170}
              quality={100}
            />
          </a>
        </Mensage>

        <LastChance>

          <LastChanceHeadline>
            <p>
              ÚLTIMA CHANCE
            </p>
            <h1>
              ÚLTIMOS DIAS PARA VOCÊ APROVEITAR O DESCONTO ESPECIAL + BÔNUS
            </h1>
          </LastChanceHeadline>

          <Desconto />

        </LastChance>

      </MainContainer>
    </>
  )
}
