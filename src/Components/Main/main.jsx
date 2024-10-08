import * as S from "./mainStyle.jsx"

function Main() {
    return(
        <S.Form>
            <S.Section>
                <S.Input type="text" placeholder="Digite seu nome" />
                <S.Input type="text" placeholder="Digite seu CPF" />
                <S.Input type="email" placeholder="Informe seu email" />
                <label>Selecione seu Estado</label>
                <S.Select>
                    <option>SP</option>
                    <option>RN</option>
                    <option>RJ</option>
                    <option>BA</option>
                    <option>CE</option>
                </S.Select>
            </S.Section>
        </S.Form>
    )
}

export default Main