import {
  Contact,
  FirstContent,
  FooterContainer,
  FooterContent,
  FooterFirst,
  FooterSecond,
} from './styles'

import Logo from '../../../public/logoencopass.svg'
import Image from 'next/image'
import { EnvelopeSimple, WhatsappLogo } from 'phosphor-react'

export default function Footer() {
  return (
    <>
      <FooterContainer>
        <FooterContent>
          <FooterFirst>
            <Image src={Logo} alt="capa" quality={100} />
            <FirstContent>
              <p>Links Úteis</p>
              <a href="www.youtube.com">Políticas de Privacidade</a>
              <a href="www.youtube.com">Termos de Uso</a>
            </FirstContent>
            <FirstContent>
              <p>Contato e Suporte</p>
              <Contact>
                <EnvelopeSimple size={20} color="#418ef2" />
                <p>contato@terapeutatransforma@gmail.com</p>
              </Contact>
              <Contact>
                <WhatsappLogo size={20} color="#418ef2" />
                <p>(44) 999911-5020</p>
              </Contact>
            </FirstContent>
          </FooterFirst>
          <FooterSecond>
            <p
              style={{
                marginBottom: '3rem',
              }}
            >
              ©️ COPYRIGHT 2023 | TERAPEUTA TRANSFORMA – TODOS OS DIREITOS
              RESERVADOS
            </p>
            <p>
              Nossa empresa respeita a privacidade dos dados de todos os
              clientes. Nossa missão é te ajudar a ter uma vida afetiva feliz e
              saudável. Não nos responsabilizamos por nenhum material que seja
              comprado fora dos nossos sites oficiais ou canais oficiais de
              atendimento.
            </p>
          </FooterSecond>
        </FooterContent>
      </FooterContainer>
    </>
  )
}
