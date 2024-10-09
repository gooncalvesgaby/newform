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

    const regexNome = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/
    const regexCpf = /^(?!.*(\d)(?:\D*\1){10})\d{3}\.\d{3}\.\d{3}-\d{2}$/
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    
    function validar() {
        if(!regexNome.test(nome) || nome =="") {
            alert("Preencher nome correto")
            return
        }
        if(!regexCpf.test(cpf) || cpf =="") {
            alert("Preencher cpf correto")
            return
        }
        if(!regexEmail.test(email) || email=="") {
            alert("Informe email válido")
            return
        }
        if(estado =="") {
            alert("Favor preencher Estado")
            return
        }
        if(data =="") {
            alert("Favor preencher data")
            return
        }
        if(procedimento =="") {
            alert("Favor informar procedimento")
            return
        }
        if(sexo =="") {
            alert("Favor preencher sexo")
            return
        }
        if(senha =="") {
            alert("Favor inserir senha")
            return
        }
        if(confirma =="" || confirma !== senha) {
            alert("Favor confirmar senha")
            return
        }
    }
    
    return(
        <S.Form>
            <S.Section>
                <div>
                    <S.Input type="text" id="nome" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Digite seu nome" />
                    <S.Input type="text" id="cpf" value={cpf} onChange={(e) => setCpf(e.target.value)} placeholder="Digite seu CPF" />
                    <S.Input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value) } placeholder="Informe seu email" />
                </div>
                <div>
                    <S.Label>
                        Selecione seu Estado
                    </S.Label>
                        <S.Select id="estado" value={estado} onChange={(e) => setEstado(e.target.value)}>
                            <option>SP</option>
                            <option>RN</option>
                            <option>RJ</option>
                            <option>BA</option>
                            <option>CE</option>
                        </S.Select>
                    <S.Input type="date" id="data" value={data} onChange={(e) => setData(e.target.value)} placeholder="Data Procedimento" />
                    <S.Input type="text" id="procedimento" value={procedimento} onChange={(e) => setProcedimento(e.target.value)} placeholder="Informe Procedimento" />
                </div>
                <div>
                    <S.Label>
                        Informe seu Sexo
                    </S.Label>
                        <S.Select id="sexo" value={sexo} onChange={(e) => setSexo(e.target.value)}>
                            <option>Feminino</option>
                            <option>Masculino</option>
                        </S.Select>
                    <S.Input type="password" id="senha" value={senha} onChange={(e) => setSenha(e.target.value)} placeholder="Definir Senha" />
                    <S.Input type="password" id="confirma" value={confirma} onChange={(e) => setConfirma(e.target.value)} placeholder="Confirmar Senha" />
                </div>
                <S.Container>
                    <S.Button type="submit" onClick={validar}>ENVIAR</S.Button>
                </S.Container>
            </S.Section>
        </S.Form>
    )
}

export default Main