import Lista from '../../components/Lista'
import Item from '../../components/Item'
export default function componentesComFilhos(){
    return (
        <>
            <Lista>
                <Item conteudo = "Item 1"/> {/*Props.children*/}
                <Item conteudo = "Item 2"/>
                <Item conteudo = "Item 3"/>
            </Lista>
        </>
    )
}