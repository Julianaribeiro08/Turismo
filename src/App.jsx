import "./App.css";
import Cabecalho from "./Componentes/Cabecalho";
import amazonas from "./imagens-estados/amazonas.png";
function App(){

    return( <div className="conteiner">
        <Cabecalho/>
        <img src={amazonas} className="img"/>
        <h1>Das grandes florestas, às cidades planejadas e praias de água doce, o que não falta na região Norte são atrações turísticas. E, se você deseja 
            saber o que esses locais têm de melhor, separamos alguns que você precisa conhecer. Confira!</h1>
         </div>
    );
}

export default App;