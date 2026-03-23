import { usersRef, db } from "./firebase.js";
import { push, set, get, update } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-database.js";

export const logOutUser = async () => {
    if (!currentUser) return;

    try {
        await update(ref(db, "users/" + currentUser.user_id), {
            isLoggedIn: false
        });

        currentUser = null;
        alert("Logged Out!");
    } catch (error) {
        console.log(error);
    }
}