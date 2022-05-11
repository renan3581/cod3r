function nome(arg){
    if(arg < 10){
        return "renan";
    }else{
        return "joão";
    }
}

export default function jsx2() {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const conteudo = (
        <div>
            <h1>JSX#2</h1>
        </div>
    )

    return (
        <>
            {conteudo} 
           <h2>{array[5]}</h2>
           <h3>{3*3}</h3>
           <h4>{nome(3)}</h4>
        </>
    );  
}

