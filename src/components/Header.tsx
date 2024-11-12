import "../styles/HeaderStyle.css";

function Header() {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id) as HTMLElement | null;
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="box">
        <span onClick={() => scrollToSection("inicio")}>Início</span>
        <span onClick={() => scrollToSection("minhaHistoria")}>Minha história</span>
        <span onClick={() => scrollToSection("experiencias")}>Experiências</span>
        <span onClick={() => scrollToSection("contato")}>Contato</span>
      </div>
      <button type="button" className="enterLeaveButton">Entrar</button>
    </>
  );
}

export default Header;
