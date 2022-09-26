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

function Alfabeto() {
    /* const [] */
    return (
        <ul>
            {alfabeto.map((letra, key) => (
                <li key={key}>
                    <button onClick={verificaCorreto()}>
                        <h3>{letra.toUpperCase()}</h3>
                    </button>
                </li>
            ))}
        </ul>
    )
}
export default function App() {
    /* const [style, setStyle] = useState("") */
    const estadosForca = [forca0, forca1, forca2, forca3, forca4, forca5, forca6]
    const [palavraSelecionada] = sortidas
    const novoArray = [];
    for (let i = 0; i < palavraSelecionada.length; i++) {
        novoArray.push(palavraSelecionada[i]);
    }
    console.log(novoArray)
    console.log(palavraSelecionada)
    console.log(palavraSelecionada.length)
    return (
        <>
            <div className="corpo">
                <img src={forca0} alt="forca inicial" />
                <button>
                    <span>Escolher palavra</span>
                </button>
                <Alfabeto/>
                <div className="digitinha">
                    <h4>Ja sei a palavra!</h4>
                    <input type="text" placeholder="Digita então po" />
                    <button>Chutar!</button>
                </div>
            </div>
        </>
    )
}
