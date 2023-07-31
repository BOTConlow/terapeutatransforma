import Image from 'next/image'
import CheckImg from '../../../public/check.svg'
import { CheckContainer, CheckContent } from './styles'

interface ButtonProps {
  desc: string
}

export default function CheckTeste({ desc }: ButtonProps) {
  return (
    <>
      <CheckContainer>
        <CheckContent>
          <Image src={CheckImg} alt="Pasta" quality={100} />
        </CheckContent>
        <p>
          <span dangerouslySetInnerHTML={{ __html: desc }} />
        </p>
      </CheckContainer>
    </>
  )
}
