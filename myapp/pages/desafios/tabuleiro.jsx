import Linha from '../../components/Linha';

export default function tabuleiro (){

    const style = {backgroundColor:'grey', width:'100%', height:'100vh', display: 'flex', alignItems:'center', justifyContent:'center', margin:'0px', padding:'0px'};

   

    return (
        <div style={style}>
          <Linha inverso/>
          <Linha />
          <Linha inverso/>
          <Linha />
          <Linha inverso/>
          <Linha />
          <Linha inverso/>
          <Linha />
        </div>
    )
}