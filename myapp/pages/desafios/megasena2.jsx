import { useEffect, useState } from 'react';
import NumeroDisplay from '../../components/NumeroDisplay';

export default function teste(){

    const [qtdisplay,setQtdisplay ] = useState(6) //Define o valor inicial de displays como 6
    const [generatedDisplays,setGeneratedDisplays ] = useState(random([])) //Define o valor padrao do array como o array vazio

   
    useEffect(() => {

        setGeneratedDisplays(random())

    },[])
   

    function renderDisplays(){

     //Gera o display
        return generatedDisplays.map(number => <NumeroDisplay key={number} numero={number}/>)

    }


    function random(display = 6, generatedNumbers = [] ){
    
        let qtdisplay = +display //Converte o valor para number.
           
    
        if(generatedNumbers.length === qtdisplay){

         //Caso o Numero de visores seja igual ao tamanho do array, os numeros serao rearranjados e retornados.
            return generatedNumbers.sort((a,b)=>a-b)

        }
    
        const randomNumber = Math.floor(Math.random()*60)+1
    
            if(!generatedNumbers.includes(randomNumber)){
            
             // Caso o numero não exista, ele é adicionado ao array e chama a função novamente até que o array tenha o tamanho desejado.
                return random(qtdisplay,[...generatedNumbers,randomNumber])
            
            }else{

             //Caso o numero ja exista, ele chama o metodo random novamente, e envia os numeros gerados, alterando somente o repetido.
                return random(qtdisplay,generatedNumbers) 
                
            }
            
    }
    

    const handleChange = (ev) => {

        setQtdisplay(ev.target.value)
        console.log(ev.target.value)

    }
    
     
    return (
    <>

        <div style={{display:'flex',flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
            
            <h1>Mega-Sena</h1>
            <div style={{display:'flex', flexDirection:'row'}}>{renderDisplays()}</div>
            

            {/*onChange altera o valor do qdisplay de acordo com o valor do input */}
            {/*Value={qdisplay} define que o valor de ev.target.value sera o mesmo que qdisplay */}
            <input type='number' max={10} min={6}  onChange={handleChange} value={qtdisplay}/>
            

            {/*Altera  o valor de numbers e define o valor displays na função 'random()' como sendo o msm que qtdisolay */}
            <button onClick={()=>setGeneratedDisplays(random(qtdisplay))}>Alterar</button>

        </div>
            
    </>
    )
}