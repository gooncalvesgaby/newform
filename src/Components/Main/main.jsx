import * as S from "./mainStyle.jsx"
import { useState } from "react"

function Main() {

    const [nome, setNome] = useState("")
    const [cpf, setCpf] = useState("")
    const [email, setEmail] = useState("")
    const [estado, setEstado] = useState("")
    const [data, setData] = useState("")
    const [procedimento, setProcedimento] = useState("")
    const [sexo, setSexo] = useState("")
    const [senha, setSenha] = useState("")
    const [confirma, setConfirma] = useState("")

    let regexNome = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/

    function validar() {
        if(!regexNome.test(nome) || nome =="") {
            alert("Preencher nome correto")
            return;
        }
    }
    
    return(
        <S.Form>
            <S.Section>
                <div>
                    <S.Input type="text" id="nome" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Digite seu nome" />
                    <S.Input type="text" id="cpf" placeholder="Digite seu CPF" />
                    <S.Input type="email" id="email" placeholder="Informe seu email" />
                </div>
                <div>
                    <S.Label>
                        Selecione seu Estado
                    </S.Label>
                        <S.Select id="estado">
                            <option>SP</option>
                            <option>RN</option>
                            <option>RJ</option>
                            <option>BA</option>
                            <option>CE</option>
                        </S.Select>
                    <S.Input type="date" id="data" placeholder="Data Procedimento" />
                    <S.Input type="text" id="procedimento" placeholder="Informe Procedimento" />
                </div>
                <div>
                    <S.Label>
                        Informe seu Sexo
                    </S.Label>
                        <S.Select id="sexo">
                            <option>Feminino</option>
                            <option>Masculino</option>
                        </S.Select>
                    <S.Input type="password" id="senha" placeholder="Definir Senha" />
                    <S.Input type="password" id="confirma" placeholder="Confirmar Senha" />
                </div>
                <S.Container>
                    <S.Button type="submit" onClick={validar}>ENVIAR</S.Button>
                </S.Container>
            </S.Section>
        </S.Form>
    )
}

export default Main