import * as C from "./styles";
import load from "../../images/ZZ5H.gif";

type Props ={
    size?: number
}

function index({size}: Props) {
    return (
        <C.Container>
            <C.Loader size={size}>
                <img src={load} alt="loader" />
            </C.Loader>
            <>Carregando...</>
        </C.Container>
    )
}

export default index