export default function whichSystem(cardNumber) {
    if (/^4/.test(cardNumber)) {
        return 'visa';
    } else if (/^5[1-5]/.test(cardNumber)) {
        return 'mastercard';
    } else if (/^3[47]/.test(cardNumber)) {
        return 'amex';
    } else if (/^6(?:011|5)/.test(cardNumber)) {
        return 'discover';
    } else if (/^(36|38|30[0-5])/.test(cardNumber)) {
        return 'diners';
    } else if (/^(352[8-9]|35[3-8])/.test(cardNumber)) {
        return 'jcb';
    } else if (/^(220[0-4]|220[7-9]|2205)/.test(cardNumber)) {
        return 'mir';
    } else {
        return 'Unknown';
    }
}