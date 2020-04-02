export const send_message = 'send_message';

export function sendMessage(text) {
    return { type: send_message, text };
}