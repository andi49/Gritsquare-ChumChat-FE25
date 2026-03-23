import { auth } from "../firebase.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-auth.js";

const link = document.createElement("a");
const userArea = document.querySelector("#user-area")

export const RenderNav = () => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            link.textContent = `${user.email}`
            userArea.appendChild(link)
        } else {
            link.href = "/html/register.html";
            link.textContent = "Register/Logga in";
            link.className = "register-link";
            userArea.appendChild(link);
        }
    });
}
