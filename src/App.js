import forca0 from "./img/forca0.png"
import forca1 from "./img/forca1.png"
import forca2 from "./img/forca2.png"
import forca3 from "./img/forca3.png"
import forca4 from "./img/forca4.png"
import forca5 from "./img/forca5.png"
import forca6 from "./img/forca6.png"
import sortidas from "./palavras";
import { useState } from "react";

const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const nivelForca = [forca0, forca1, forca2, forca3, forca4, forca5, forca6]
let erros = 0;

function Jogo(atributo) {
    const [iniciado, setIniciado] = useState(false)
    const [botao, setBotao] = useState("")
    const [clicaletra, setLetra] = useState(false)
    /* const [forca,setForca]=useState(nivelForca[0]) */
    const [array, setArray] = useState([])
    const novoArray = [];
    const [palavraSelecionada] = sortidas
    const estadoJogo = { erros: `${erros}`, palavra: palavraSelecionada }
    console.log(estadoJogo)
    const estadoForca = { imagem: nivelForca[erros] }
    const palavraNormal = palavraSelecionada.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    for (let i = 0; i < palavraNormal.length; i++) {
        novoArray.push(palavraNormal[i]);
    }

    function IniciarJogo() {
        let array = novoArray.map(() => ' _ ')
        setArray(array)
        if (!iniciado) {
            setIniciado(true)
            setBotao("habilitado")
        }
    }
    function verificaLetra(letter) {
        if (iniciado) {
            const arrayModificado = [...array]
            for (let i = 0; i < novoArray.length; i++) {
                if (letter === novoArray[i]) {
                    arrayModificado[i] = palavraSelecionada[i]
                }
            }
            incrementaErro(arrayModificado,letter)
            setArray(arrayModificado)
            verificaWinLose(arrayModificado)
        }
    }
    function incrementaErro(arrayModificado,letra) {
        if (!novoArray.includes(letra)) {
            erros++;
            verificaWinLose(arrayModificado)
        }
    }

    function verificaWinLose(arrayModificado){
        if ((!arrayModificado.includes(" _ "))) {    //ou palavra digitada no input for igual a palavraSelecionada
            alert("Você ganhou o jogo")
        } else if (erros===6){
            alert("Você perdeu :'(")
        }
    }
    

    function Alfabeto() {
        return (
            <ul>
                {alfabeto.map((letra, key) => (
                    <li key={key}>
                        <button className={botao} onClick={() => verificaLetra(letra)}>
                            <h3>{letra.toUpperCase()}</h3>
                        </button>
                    </li>
                ))}
            </ul>
        )
    }

    return (
        <>
            <div className="Topo">
                <div className="caixa-esquerda">
                    <img src={estadoForca.imagem} alt="forca inicial" />
                </div>
                <div className="caixa-direita">
                    <button onClick={() => IniciarJogo(atributo)}>
                        <span>Iniciar Jogo</span>
                    </button>
                    <div className="tracejado">{array}</div>
                </div>
            </div>
            <Alfabeto />
        </>

    )
}

export default function App() {
    return (
        <>
            <div className="corpo">
                <Jogo />
                <div className="digitinha">
                    <h4>Ja sei a palavra!</h4>
                    <input type="text" placeholder="Digita então po" />
                    <button /* onClick={()=>verificaRespostaFinal()} */>Chutar!</button>
                </div>
            </div>
        </>
    )
}
