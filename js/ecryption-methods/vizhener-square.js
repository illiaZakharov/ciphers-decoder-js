import { EncryptionMethod } from './encryption-base.js';

export class Vizhener extends EncryptionMethod {

    constructor(alphabet_lang) {
        const alphabet = {
            en: [
                ' ', 'A', 'B', 'C', 'D', 'E', 'F',
                'G', 'H', 'I', 'J', 'K', 'L', 'M',
                'N', 'O', 'P', 'Q', 'R', 'S', 'T',
                'U', 'V', 'W', 'X', 'Y', 'Z',
            ],
            ru: [
                ' ', 'А', 'Б', 'В', 'Г', 'Д', 'Е',
                'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л',
                'М', 'Н', 'О', 'П', 'Р', 'С', 'Т',
                'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ',
                'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я',
            ],
        }

        super('Vizhener', alphabet[alphabet_lang]);
        this.vizhenerSquare = this.#generateVizhenerSquare(alphabet[alphabet_lang]);
    }

    encrypt(data, key) {
        if (key.length === 0 || data.length === 0) return '';

        let result = '';
        data = data.toUpperCase();
        key = this.#getFullKey(key, data.length);

        for (let i = 0; i < data.length; i++) {
            result += this.vizhenerSquare[this.alphabet.indexOf(data[i])][this.alphabet.indexOf(key[i])];
        }

        return result;
    }

    decrypt(data, key) {
        if (key.length === 0 || data.length === 0) return '';

        let result = '';
        data = data.toUpperCase();
        key = this.#getFullKey(key, data.length);

        for (let i = 0; i < data.length; i++) {
            let row = this.alphabet.indexOf(key[i]);
            let coll = this.vizhenerSquare[row].indexOf(data[i]);

            result += this.alphabet[coll];
        }

        return result;
    }

    #getFullKey(key, length) {
        if (length < key.length) {
            return key.substr(0, text.length).toUpperCase();
        }

        if (length > key.length) {
            return key.padEnd(length, key).toUpperCase();
        }

        if (length === key.length) {
            return key.toUpperCase();
        }
    }

    #generateVizhenerSquare(alphabet) {
        const square = [];

        for (let i = 0; i < alphabet.length; i++) {
            square[i] = alphabet.slice(i).concat(alphabet.slice(0, i));
        }

        return square;
    }
}