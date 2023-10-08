export function LetterRegex(value) {
    const regex = /^[a-zA-Z\s]+$/.test(value);
    return regex;
}

export function MailRegex(value) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    return regex;
}
export function PhoneRegex(value) {
    const regex = /^([+\d].*)?\d$/.test(value);
    return regex;
}