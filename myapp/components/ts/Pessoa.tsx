interface PessoaProps{
    nome: string;
    idade?: number;

}


export default function Pessoa(props:PessoaProps) {
    return(
        <>
            <div>Nome:{props.nome} </div>
            <div>Idade:{props.idade ?? 'Não informada'}</div>
        </>
    )
}