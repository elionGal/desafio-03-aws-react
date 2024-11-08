import { getAuth, signInWithPopup, GithubAuthProvider } from "firebase/auth";
import app from "./firebaseConfig";

const auth = getAuth(app);
const provider = new GithubAuthProvider();

export const signInGitHub = () => {
    return signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            return user;
        })
        .catch((error) => {
            console.error(error);
            throw error;
        });
};

export { auth };
