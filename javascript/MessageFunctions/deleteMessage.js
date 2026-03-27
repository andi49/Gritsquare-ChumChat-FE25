import { reference, db, messagesRef, repliesRef } from "../firebase.js";
import { push, set, onValue, remove, ref, get } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-database.js";

export const deleteMessage = async (messageId) => {
      const deleteSound = new Audio("./sound/deletesound.mp3");
    deleteSound.play();
    await remove(ref(db, "messages/" + messageId));

    const snapshot = await get(repliesRef);
    const replies = snapshot.val();
    
    if (!replies) return;

    for (let id in replies) {
        if (replies[id].message_id === messageId) {
            await remove(ref(db, "replies/" + id));
        }
    }
}