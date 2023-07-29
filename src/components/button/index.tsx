import { ButtonContainer } from "./styles"


export default function Button(props: { title: any }) {

    const { title } = props

    return (
        <>
            <ButtonContainer href='https://pay.kiwify.com.br/rcNH140'>
                <button>
                    {title}
                </button>
            </ButtonContainer>
        </>
    )
}