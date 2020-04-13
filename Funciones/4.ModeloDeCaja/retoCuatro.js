'use strict';
const boxModel = (boolean, width, padding, border) => {
    if (boolean === 'true') {
   return(`Border-box es igual a: ${width} pixeles`);
    } else if (boolean === 'false') {
    return(`Content-box es igual a ${width+padding+border} pixeles`);
    } else {
    return('error');
    }
}
console.log(boxModel('true', 20, 30, 40)); // Border-box es igual a: 20 pixeles
console.log(boxModel('false', 20, 30, 40)); // Content-box es igual a 90 pixeles