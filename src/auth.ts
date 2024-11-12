import { getAuth, signInWithPopup, GithubAuthProvider } from "firebase/auth";
import app from "./firebaseConfig.ts";

export const handleGitHubLogin = async () => {
    const auth = getAuth(app);
    const provider = new GithubAuthProvider();

    try {
        const result = await signInWithPopup(auth, provider);
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;

        if (token) {
            await fetchGitHubProfile(token);
        }
    } catch (error) {
        console.error("Erro ao fazer login com o GitHub:", error);
        alert("Erro ao fazer login com o GitHub.");
    }
};

export const fetchGitHubProfile = async (token: string) => {
    try {
        const response = await fetch("https://api.github.com/user", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        const data = await response.json();
        localStorage.setItem("githubProfile", JSON.stringify(data));
        alert("Perfil do GitHub armazenado com sucesso!");
    } catch (error) {
        console.error("Erro ao buscar dados do GitHub:", error);
    }
};
