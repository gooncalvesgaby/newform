import * as S from "./mainStyle.jsx"

function Main() {
    return(
        <S.Form>
            <S.Section>
                <div>
                    <S.Input type="text" placeholder="Digite seu nome" />
                    <S.Input type="text" placeholder="Digite seu CPF" />
                    <S.Input type="email" placeholder="Informe seu email" />
                </div>
                <div>
                    <S.Label>
                        Selecione seu Estado
                    </S.Label>
                        <S.Select>
                            <option>SP</option>
                            <option>RN</option>
                            <option>RJ</option>
                            <option>BA</option>
                            <option>CE</option>
                        </S.Select>
                    <S.Input type="password" placeholder="Definir Senha" />
                    <S.Input type="password" placeholder="Confirmar Senha" />
                </div>
                <div>
                    <S.Label>
                        Informe seu Sexo
                    </S.Label>
                        <S.Select>
                            <option>Feminino</option>
                            <option>Masculino</option>
                        </S.Select>
                    <S.Input type="password" placeholder="Definir Senha" />
                    <S.Input type="password" placeholder="Confirmar Senha" />
                </div>
                <S.Container>
                    <S.Button>ENVIAR</S.Button>
                </S.Container>
            </S.Section>
        </S.Form>
    )
}

export default Main