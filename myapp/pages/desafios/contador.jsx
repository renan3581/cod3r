import { useState } from "react"
import ContadorDisplay from "../../components/ContadorDisplay"

export default function Contador(props){

    const style = {
        backgroundColor: "#222",
        color:'#fff',
        height:'100vh',
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column"
    }
   
    const [contador, setContador] = useState(0)
   
    const dec = () => setContador(contador - 1)

    return(
        <div style={style}>
            
            <h1>Contador</h1>
            <ContadorDisplay numero={contador}/>
        
            <div>
                <button onClick = {dec}> - </button>
                <button onClick = {()=> setContador(contador + 1)}> + </button>
            </div>
            
        </div>
    )

}