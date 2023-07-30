import Button from '../button'
import CheckTeste from '../check'
import {
  BoxCheck,
  DescontoContainer,
  RevisaoContent,
  RevisaoDesconto,
  RevisaoHeadline,
} from './styles'

export default function Desconto() {
  return (
    <>
      <DescontoContainer>
        <div
          style={{
            fontWeight: 'bold',
          }}
        >
          <BoxCheck>
            <CheckTeste desc="Guia 482 Poderosas Perguntas Para Sessão de Terapia" />
          </BoxCheck>

          <BoxCheck>
            <CheckTeste desc="Bônus - Guia de Interpretação das Respostas" />
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
    </>
  )
}
