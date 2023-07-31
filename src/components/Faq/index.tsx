import { ForwardedRef, forwardRef } from 'react'
import {
  AccordionItem,
  AccordionRoot,
  StyledChevron,
  StyledContent,
  StyledContentText,
  StyledHeader,
  StyledTrigger,
} from './styles'
import { AccordionContentProps } from '@radix-ui/react-accordion'

export default function Faq() {
  return (
    <AccordionRoot
      defaultChecked
      type="single"
      defaultValue="item-1"
      collapsible
    >
      <AccordionItem value="item-1">
        <StyledHeader>
          <StyledTrigger>
            PARA QUEM SÃO ESSAS FERRAMENTAS?
            <StyledChevron />
          </StyledTrigger>
        </StyledHeader>

        <AccordionContent>
          <p>
            Se você é profissional Psiquiatra, Psicólogo, Psicanalista ou
            estudante dessas áreas a ferramenta é ideal.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <StyledHeader>
          <StyledTrigger>
            FAÇO TERAPIA, ESSE PRODUTO PODE ME AJUDAR?
            <StyledChevron />
          </StyledTrigger>
        </StyledHeader>

        <AccordionContent>
          <p>
            Sim, se você faz algum tipo de acompanhamento ou conhece alguém que
            faz com certeza as ferramentas aqui apresentadas irão ajudar muito.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <StyledHeader>
          <StyledTrigger>
            COMO RECEBEREI AO MATERIAL?
            <StyledChevron />
          </StyledTrigger>
        </StyledHeader>

        <AccordionContent>
          <p>
            Assim que você concluir a sua compra e o seu pagamento for aprovado,
            você receberá através do email o acesso a plataforma onde poderá
            fazer o download das ferramentas e utiliza-las quantas vezes
            desejar.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-4">
        <StyledHeader>
          <StyledTrigger>
            POR QUANTO TEMPO TEREI ACESSO AS FERRAMENTAS?
            <StyledChevron />
          </StyledTrigger>
        </StyledHeader>

        <AccordionContent>
          <p>
            Você terá acesso a mais de 400 PERGUNTAS PODEROSAS PARA SESSÃO DE
            TERAPIA – MÉTODO AMERICANO (tudo em pdf) para poder auxiliar em
            terapias e tratamentos relacionados a saúde mental e emocional de
            Adultos, Crianças e Adolescentes.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-5">
        <StyledHeader>
          <StyledTrigger>
            COMO FUNCIONA?
            <StyledChevron />
          </StyledTrigger>
        </StyledHeader>

        <AccordionContent>
          <p>
            Você terá acesso a mais de 400 PERGUNTAS PODEROSAS PARA SESSÃO DE
            TERAPIA – MÉTODO AMERICANO (tudo em pdf) para poder auxiliar em
            terapias e tratamentos relacionados a saúde mental e emocional de
            Adultos, Crianças e Adolescentes.
          </p>
        </AccordionContent>
      </AccordionItem>
    </AccordionRoot>
  )
}

const AccordionContent = forwardRef<HTMLDivElement, AccordionContentProps>(
  (
    { children, ...props }: AccordionContentProps,
    forwardedRef: ForwardedRef<HTMLDivElement>,
  ) => (
    <StyledContent {...props} ref={forwardedRef}>
      <StyledContentText>{children}</StyledContentText>
    </StyledContent>
  ),
)

AccordionContent.displayName = 'AccordionContent'
