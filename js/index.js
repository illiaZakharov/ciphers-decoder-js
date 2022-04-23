import { Cezar } from './ecryption-methods/cezar.js';
import { Polybius } from './ecryption-methods/polibius-square.js';
import { Vizhener } from './ecryption-methods/vizhener-square.js';

const phrase = 'i remember that september';

let polybius = new Polybius('en');

console.log(polybius.name, polybius.encrypt(phrase));
console.log(polybius.name, polybius.decrypt(polybius.encrypt(phrase)));

let cezar = new Cezar('en');

console.log(cezar.name, cezar.encrypt(phrase));
console.log(cezar.name, cezar.decrypt(cezar.encrypt(phrase)));

let vizhener = new Vizhener('en');

console.log(vizhener.name, vizhener.encrypt(phrase, 'leonid'));
console.log(vizhener.name, vizhener.decrypt(vizhener.encrypt(phrase,'leonid'),'leonid'));
