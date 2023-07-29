import Image from "next/image";
import CheckImg from '../../../public/check.svg'
import { CheckContainer, CheckContent } from "./styles";

export default function CheckTeste(props: { desc: any; }) {

    const { desc } = props

    return (
        <>
            <CheckContainer>
                <CheckContent>
                    <Image
                        src={CheckImg}
                        alt="Pasta"
                        quality={100}
                    />
                </CheckContent>
                <p>
                    <span dangerouslySetInnerHTML={{ __html: desc }} />
                </p>
            </CheckContainer>
        </>
    )
}
