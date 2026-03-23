import { reference, db, messagesRef, repliesRef } from "./firebase.js";
import { push, set, onValue, remove, ref, get } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-database.js";

export const sendReply = (messageId, text) => {
    const newReply = push(repliesRef);
    const replyData = {
        message: text,
        message_id: messageId,
        user_id: currentUser.user_id,
        timestamp: Date.now()
    }

    set(newReply, replyData);
}
