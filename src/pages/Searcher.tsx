import "../styles/SearcherStyle.css"

function Searcher() {

    return (
        <>
        <p>Digite o nome do usuário que deseja buscar</p>
        <div>
            <input></input>
            <button type="button"></button>
        </div>
        <div className="ouText">
            <span>ou</span>
        </div>
        <div>
            <p>acesse sua conta</p>
            <button type="button"></button>
        </div>
        </>
    )
  }
  
  export default Searcher