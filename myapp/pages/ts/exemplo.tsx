import Pessoa from "../../components/ts/Pessoa"

export default function  exemplo(){

    return(
        <>
            <h1>
                <Pessoa nome="João" idade={20} />
                <Pessoa nome="Maria"/>
            </h1>
        </>
    )

}