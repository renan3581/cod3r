import { useState } from "react"

export default function mouseXY(props){
    
    const style = {
        backgroundColor: "#222",
        color:'#fff',
        height:'100vh',
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column"
    }

    //Modo enxuto.
    const [x, setX] = useState(0)

    //Modo longo.
    let arrayY = useState(0)
    let y = arrayY[0]
    const alterarY = arrayY[1]


    function quandoMover (ev){
       setX(ev.clientX)
       alterarY(ev.clientY)
       console.log('alterado')
    }

    return(
        <div style={style} onMouseMove={quandoMover}>
            <span>Eixo X: {x}</span>
            <span>Eixo Y: {y}</span>
        </div>
    )
}