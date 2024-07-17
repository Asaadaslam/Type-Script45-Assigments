"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function storeCarinfo(make, modelName, ...extraOption) {
    const carInfo = Object.assign({ make,
        modelName }, Object.assign({}, ...extraOption));
    return carInfo;
}
let answer = storeCarinfo('Honda', 'civic', { color: 'black' }, { features: ['navigation', 'power window'] });
console.log(answer);
