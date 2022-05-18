export default function Filho(props){
    console.log(props.funcao)

    return (
        
        <div>
            <h1>Indireta</h1>
            <button onClick={props.funcao}>Falar com o pai</button>
            <button onClick={()=>props.funcao('Passei no Enem',"uhuu","Se ferrou")}>Falar com o Pai #V2 </button>
        </div>
    )
}