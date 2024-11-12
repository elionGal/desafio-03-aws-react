import { useNavigate } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import React, { useState } from "react";
import "../styles/LoginStyle.css";
import { getAuth, signInWithPopup, GithubAuthProvider } from "firebase/auth"; // Importação necessária para autenticação
import app from "../firebaseConfig.ts";

function Login() {
    const [username, setUsername] = useState("");
    const navigate = useNavigate();

    const handleLogin = () => {
        localStorage.setItem("username", username);
        alert(`Usuário ${username} armazenado com sucesso!`);
        navigate("/portfolio");
    };

    const handleGitHubLogin = () => {
        const auth = getAuth(app);
        const provider = new GithubAuthProvider();

        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                localStorage.setItem("githubUser", JSON.stringify({
                    displayName: user.displayName,
                    email: user.email,
                    photoURL: user.photoURL,
                    uid: user.uid
                }));
                alert("Login com GitHub realizado com sucesso!");
                navigate("/portfolio");
            })
            .catch((error) => {
                console.error("Erro ao fazer login com o GitHub:", error);
            });
    };

    return (
        <>
            <p className="searchText">Digite o nome do usuário que deseja buscar</p>
            <div className="searcher">
                <input 
                    className="bar"
                    placeholder="Digite o nome do usuário"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <button 
                    type="button" 
                    className="enterButton"
                    onClick={handleLogin}
                    disabled={!username}
                >
                </button>
            </div>
            <div className="ouText">
                <span>ou</span>
            </div>
            <div className="gitGroup">
                <span className="acessText">Acesse sua conta com</span>
                <button 
                    type="button" 
                    className="gitButton"
                    onClick={handleGitHubLogin}
                >
                    <FaGithub className="icon" /> GitHub
                </button>
            </div>
        </>
    );
}

export default Login;
