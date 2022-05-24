import { useState } from "react"
import NumeroDisplay from "../../components/NumeroDisplay"

export default function megasena(){

    const style = {
        backgroundColor: "#222",
        color:'#fff',
        height:'100vh',
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column"
    }

  const[contador=[],setContador] =  useState(0)

    let numeros = []
    
    function gerarNumeros (){
        
        for (let i = 0; i < 6; i++) {
            
           let random = Math.floor(Math.random()*60)

            numeros.push(random)  

        }

        return numeros    
    }
   
    function alteraValores(){
        gerarNumeros()

        setContador(numeros) 
    }
    

    return(
            <div style={style}>
                
                <h1>Mega-Sena</h1>
                <div style={{display:'flex'}}>
                    <NumeroDisplay numero={contador[0]}/>
                    <NumeroDisplay numero={contador[1]}/>
                    <NumeroDisplay numero={contador[2]}/>
                    <NumeroDisplay numero={contador[3]}/>
                    <NumeroDisplay numero={contador[4]}/>
                    <NumeroDisplay numero={contador[5]}/>
                </div>  
                
                <div>
                    <button onClick={alteraValores}> Alterar</button>
                </div>

            </div>
   )
}