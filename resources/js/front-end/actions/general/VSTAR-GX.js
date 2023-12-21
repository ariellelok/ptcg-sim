import { POV, oppGXButton, oppVSTARButton, p1, roomId, selfGXButton, selfVSTARButton, socket } from "../../front-end.js";
import { appendMessage } from "../../setup/chatbox/messages.js";
import { determineUsername } from "../../setup/general/determine-username.js";

export const VSTARGXFunction = (user, type, received = false) => {
    let button;
    if (user === 'self'){
        if (type === 'GX'){
            button = selfGXButton;
        } else {
            button = selfVSTARButton;
        };
    } else {
        if (type === 'GX'){
            button = oppGXButton;
        } else {
            button = oppVSTARButton;
        };
    };
    if (button.classList.contains('used')){
        button.classList.remove('used');
    } else {
        button.classList.add('used');
        const message = determineUsername(user) + ' used their ' + type + '!';
        appendMessage(user, message, 'player', true);
        if (!p1[0] && !received){
            const data = {
                roomId : roomId,
                user : POV.oUser,
                type: type,
                received : true
            }
            socket.emit('VSTARGXFunction', data);
        };
    };
}