export function random(visores = 6, generatedNumbers = [] ){
 let qvisores = +visores
    

    if(generatedNumbers.length === qvisores){
        return console.log(generatedNumbers.sort((a,b)=>a-b))
    }

    const randomNumber = Math.floor(Math.random()*60)+1

        if(!generatedNumbers.includes(randomNumber)){
            return random(qvisores,[...generatedNumbers,randomNumber])
        }else{
            return random(qvisores,generatedNumbers)
        }
       
}


