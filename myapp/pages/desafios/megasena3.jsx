import { useEffect, useState } from "react";
import { mega } from "../../functions/mega";
import NumeroDisplay from "../../components/NumeroDisplay";


export default function megasena(){
    const [qtde,setQtde ] = useState(6)
    const [numeros,setNumeros ] = useState(mega([]))

    useEffect(() => {
        setNumeros(mega())
    },[])

    
    function renderizarNumeros(){
        return numeros.map(numero => <NumeroDisplay key={numero} numero={numero}/>)
    }

    return(
        <div style={{display:'flex' , flexDirection:'column' , justifyContent:'center', alignItems:'center'}}>
            <h1>Mega-Sena</h1>
            <div style={{display:'flex' , flexDirection:'row'}}>
                {renderizarNumeros()}
            </div>
            <div>
                <input type="number" min={6} max={20} value={qtde} onChange={ev=>setQtde(ev.target.value)} />
                <button onClick={()=>setNumeros(mega(qtde))}>Gerar</button>
            </div>
        </div>
    )

}