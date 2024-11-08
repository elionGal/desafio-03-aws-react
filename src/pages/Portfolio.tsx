import Header from "../components/Header"
import "../styles/PortfolioStyle.css"

function Portfolio() {

    return(
        <>
        <Header />
        <div className="content">
            <div className="profile">
                <div className="profileInfo">
                    Foto de perfil
                    <p>nome</p>
                    <p>Estado, cidade</p>
                    <p>email@gmail.com</p>
                </div>
                <div className="summary">
                    <p>Hello, eu sou NOME</p>
                    <p>TEXTOTEXTOTEXTOTEXTOTEXTOTEXTOTEXTOTEXTOETOTEXTOTEXTOTEXTOTEXTOTEXTOTEXTOTEXTOTEXTOETO</p>  
                </div>
            </div>
            <div className="myHistory">
                <p>Minha história</p>
                <p>TEXTOTEXTOTEXTOTEXTOTEXTOTEXTOTEXTOTEXTOETOTEXTOTEXTOTEXTOTEXTOTEXTOTEXTOTEXTOTEXTOETO
                TEXTOTEXTOTEXTOTEXTOTEXTOTEXTOTEXTOTEXTOETOTEXTOTEXTOTEXTOTEXTOTEXTOTEXTOTEXTOTEXTOETO
                TEXTOTEXTOTEXTOTEXTOTEXTOTEXTOTEXTOTEXTOETOTEXTOTEXTOTEXTOTEXTOTEXTOTEXTOTEXTOTEXTOETO
                </p>
            </div>
            <div className="xp">
                <p>Experiencias</p>
                <div>
                    <p>TEXTOTEXTOTEXTOTEXTOTEXTOTEXTOTEXTOTEXTOETOTEXTOTEXTOTEXTOTEXTOTEXTOTEXTOTEXTOTEXTOETO</p>
                </div>
            </div>
        </div>
        
        </>
    )
}

export default Portfolio