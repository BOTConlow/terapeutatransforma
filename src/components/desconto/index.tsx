import Button from "../button";
import CheckTeste from "../check";
import { RevisaoContent, RevisaoDesconto, RevisaoHeadline } from "./styles";


export default function Desconto() {

    return (
        <>

            <div style={{
                fontWeight: 'bold'
            }}>
                <CheckTeste
                    desc='Guia 482 Poderosas Perguntas Para Sessão de Terapia'
                />
                <CheckTeste
                    desc='Bônus - Guia de Interpretação das Respostas'
                />
                <CheckTeste
                    desc='Bônus - 120 Perguntas Para Crianças e Adolescentes'
                />
                <CheckTeste
                    desc='Bônus - 10 Recursos Terapêuticos para LUTO'
                />
                <CheckTeste
                    desc='Desconto de 62%'
                />
                <CheckTeste
                    desc='Acesso Imediato Via E-mail'
                />
            </div>

            <RevisaoDesconto>
                <RevisaoHeadline>
                    <h2>
                        ÚLTIMO DIA COM DESCONTO <span style={{color: '#29cf83'}}>+ BÔNUS</span>
                    </h2>
                </RevisaoHeadline>
                <RevisaoContent>
                    <p style={{
                        textDecoration: 'line-through',
                        color: 'red',
                    }}>
                        De R$ 270,00
                    </p>
                    <h1>
                        12x R$ 9,74
                    </h1>
                    <p>
                        OU R$ 97,00 A VISTA
                    </p>
                    <Button
                        title='BAIXAR AGORA!'
                    />
                </RevisaoContent>
            </RevisaoDesconto>

        </>
    )
}