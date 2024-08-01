export default function validateNumber(cardNumber) {
    const cardNumberS = cardNumber.toString().replace(/\s/g, '');
    let sum = 0;
    const parity = cardNumberS.length % 2;
    for (let i = 0; i < cardNumberS.length; i++) {
        let digit = Number(cardNumberS[i]);
        if (i % 2 === parity) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9;
            }
        }
        sum += digit;
    }
    return sum % 10 === 0;
}