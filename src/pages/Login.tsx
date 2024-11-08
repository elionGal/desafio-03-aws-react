import "../styles/LoginStyle.css"

function Login() {

    return (
        <>
        <p className="searchText">Digite o nome do usuário que deseja buscar</p>
        <div className="searcher">
            <input className="bar"></input>
            <button type="button" className="enterButton"></button>
        </div>
        <div className="ouText">
            <span>ou</span>
        </div>
        <div className="gitGroup">
            <span className="acessText">acesse sua conta</span>
            <button type="button" className="gitButton"></button>
        </div>
        </>
    )
  }
  
  export default Login