import "../styles/HeaderStyle.css"

function Header() {

  return (
    <>
    <div className="box">
        <span>Início</span>
        <span>Minha história</span>
        <span>Experiências</span>
        <span>Contato</span>
    </div>
    <button type="button" className="enterLeaveButton">Entrar</button>
    </>
  )
}

export default Header
