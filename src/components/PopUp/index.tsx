import Image from 'next/image'
import Google from '../../../public/google.webp'
import {
  PopUpAcessories,
  PopUpContainer,
  PopUpContent,
  PopUpDesc,
  PopUpName,
  PopUpRealTime,
} from './styles'
import { CheckCircle, Star } from 'phosphor-react'
import { useEffect, useState } from 'react'

export default function PopUp() {
  const [desapear, setDesapear] = useState(false)
  const [name, setName] = useState('Gabriel Fonseca')
  const [desc, setDesc] = useState(
    'Um verdadeiro tesouro para terapeutas! Imprescindível',
  )

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const names = [
    'João Silva',
    'Maria Santos',
    'Carlos Oliveira',
    'Lucas Rodrigues',
    'Juliana Nunes',
    'Pedro Souza',
    'Gabriela Ferreira',
    'Rafael Costa',
    'Ana Paula',
    'Bruno Gonçalves',
    'Eduardo Pereira',
    'Julio Cesar',
    'Luana Alves',
    'Mateus Machado',
    'Ricardo Almeida',
    'Sabrina Oliveira',
    'Thiago Carvalho',
    'Vinicius Torres',
    'Letícia Rocha',
    'Victor Gomes',
    'Fernanda Borges',
    'Luan Fernandes',
    'Larissa Barros',
    'Bianca Andrade',
    'Rafaela Soares',
    'Rayssa Freitas',
    'Ricardo Costa',
    'Julia Pinto',
    'Diego Ferreira',
    'Isabella Mendes',
  ]
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const descs = [
    'Livro excelente!',
    'Ótimo pra abrir a mente e ter novas ideias',
    'Muito bom!! Recomendo.',
    'Gostei muito! Nota 1000.',
    'Comprei todos os materiais de vocês, gostei muito',
    'Esse livro transformou minha prática como terapeuta!',
    'Recomendo fortemente esse livro, fez toda a diferença.',
    'As perguntas são realmente poderosas e eficazes.',
    'Incrível como as sessões fluem melhor com o auxílio desse livro.',
    'Meus clientes estão mais engajados e participativos nas sessões.',
    'A diversidade das perguntas ajuda a abordar diferentes questões.',
    'As respostas dos clientes têm sido mais reflexivas e significativas.',
    'Vale cada centavo investido, estou muito satisfeito(a).',
    'Melhorou minha empatia e compreensão dos clientes.',
    'Estou impressionado(a) com a qualidade do conteúdo.',
    'Recomendei para meus colegas de profissão, todos adoraram!',
    'Aumentou minha confiança como terapeuta.',
    'O livro trouxe mais criatividade às minhas sessões.',
    'Excelente ferramenta para aprimorar as habilidades terapêuticas.',
    'Os resultados dos clientes têm sido surpreendentes.',
    'É um recurso indispensável na minha prática diária.',
    'Minhas sessões agora são mais produtivas e enriquecedoras.',
    'Os feedbacks dos clientes têm sido muito positivos.',
    'Esse livro me ajudou a aprofundar as questões com os clientes.',
    'Recomendo a todos os terapeutas que desejam se aprimorar.',
    'Superou minhas expectativas, estou muito feliz com a compra.',
    'É uma ferramenta essencial para qualquer terapeuta comprometido(a).',
    'As perguntas abrem novas perspectivas para o processo terapêutico.',
    'Meus clientes estão alcançando insights mais significativos.',
    'Esse livro trouxe mais dinamismo às minhas sessões.',
    'Percebi um aumento na resiliência dos meus clientes após a aplicação das perguntas.',
    'As perguntas são inteligentes e provocadoras.',
    'Ajuda a quebrar o gelo e estabelecer uma conexão mais profunda com os clientes.',
    'Meu trabalho como terapeuta está mais gratificante desde que comecei a usar esse livro.',
    'Recomendei aos meus professores de psicologia, todos elogiaram a abordagem.',
    'As perguntas são um verdadeiro impulso para a autodescoberta dos clientes.',
    'Meu processo de planejamento das sessões ficou muito mais organizado e eficiente.',
    'Uma excelente ferramenta de autorreflexão para os próprios terapeutas.',
    'Os clientes têm demonstrado maior abertura em compartilhar suas experiências.',
    'O livro oferece uma variedade de perguntas para todos os tipos de clientes.',
    'Minha prática ganhou uma nova dimensão com o uso desse material.',
    'É uma ótima forma de incentivar a introspecção nos clientes.',
    'Me sinto mais capacitado(a) para lidar com questões complexas graças a esse livro.',
    'A linguagem é acessível e fácil de aplicar nas sessões.',
    'Essas perguntas são um verdadeiro tesouro para terapeutas.',
    'O livro trouxe mais dinamismo e fluidez às sessões.',
    'Meus clientes estão mais motivados a trabalhar em suas questões pessoais.',
    'As perguntas estimulam a criatividade e a busca por soluções.',
    'Estou mais confiante em ajudar meus clientes a alcançarem seus objetivos.',
    'A abordagem das perguntas é muito respeitosa e empática.',
    'Esse livro me tornou um terapeuta mais versátil e adaptável.',
    'Meus clientes se sentem mais compreendidos e apoiados.',
    'Uma ferramenta essencial para aprimorar as habilidades terapêuticas.',
    'As perguntas desse livro abriram novas possibilidades para minha prática clínica.',
  ]

  useEffect(() => {
    if (desapear)
      setTimeout(() => {
        setDesapear(false)
        setName(names[Math.floor(Math.random() * names.length)])
        setDesc(descs[Math.floor(Math.random() * descs.length)])
      }, 6000)
    else
      setTimeout(() => {
        setDesapear(true)
      }, 20000)
  }, [desapear, names, descs])

  return (
    <>
      <PopUpContainer open={desapear}>
        <div>
          <Image
            src={Google}
            alt="google"
            quality={100}
            width={55}
            height={55}
          />
        </div>
        <PopUpContent>
          <PopUpName>
            <p>{name}</p>
            <p>avaliou:</p>
          </PopUpName>
          <PopUpDesc>
            <p>{desc}</p>
          </PopUpDesc>
          <PopUpAcessories>
            <div>
              <Star size={14} weight="fill" color="#ffdd62" />
              <Star size={14} weight="fill" color="#ffdd62" />
              <Star size={14} weight="fill" color="#ffdd62" />
              <Star size={14} weight="fill" color="#ffdd62" />
              <Star size={14} weight="fill" color="#ffdd62" />
            </div>
            <PopUpRealTime>
              <CheckCircle size={17} weight="fill" color="#6eb2a6" />
              <p>Tempo Real</p>
            </PopUpRealTime>
          </PopUpAcessories>
        </PopUpContent>
      </PopUpContainer>
    </>
  )
}
