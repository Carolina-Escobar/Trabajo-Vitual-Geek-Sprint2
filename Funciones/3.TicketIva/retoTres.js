'use strict';
const iva = 0.21;

function ticket(price) {
    const ivaTicket = price * iva;
    const total = ivaTicket + price;
    return `Precio sin IVA: ${price} + IVA: ${ivaTicket } + TOTAL: ${ total}`
}

console.log((ticket(2000)));
