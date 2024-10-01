import * as S from "./headerStyle.jsx"
import Woman from "../../assets/woman.png"

function Header() {
    return(
        <S.Header>
            <S.Img src={Woman} alt="imagem de mulheres" />
            <S.Text>Bem-vindo ao formúlario da Mulher!</S.Text>
        </S.Header>      
    )
}

export default Header