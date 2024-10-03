import * as S from "./mainStyle.jsx"

function Main() {
    return(
        <S.Form>
            <S.Section>
                <S.Input type="text" placeholder="Digite seu nome" />
                <S.Input type="text" placeholder="Digite seu CPF" />
                <S.Input type="email" placeholder="Informe seu email" />
            </S.Section>
        </S.Form>
    )
}

export default Main