import { EncryptionMethod } from './encryption-base.js';

export class Polybius extends EncryptionMethod {
    constructor(alphabet_lang) {
        const alphabet = {
            en: [
                ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
                ['H', 'I', 'J', 'K', 'L', 'M', 'N'],
                ['O', 'P', 'Q', 'R', 'S', 'T', 'U'],
                ['V', 'W', 'X', 'Y', 'Z', '0', '1'],
                ['2', '3', '4', '5', '6', '7', '8'],
                ['9', ' ', ',', '.', '-', ';', '_'],
                ['(', ')', '&', '$', '@', '!', '?'],
            ],
            ua: [
                ['А', 'Б', 'В', 'Г', 'Ґ', 'Д', 'Е'],
                ['Є', 'Ж', 'З', 'И', 'І', 'Ї', 'Й'],
                ['К', 'Л', 'М', 'Н', 'О', 'П', 'Р'],
                ['С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч'],
                ['Ш', 'Щ', 'Ь', 'Ю', 'Я', '0', '1'],
                ['2', '3', '4', '5', '6', '7', '8'],
                ['9', ' ', ',', '.', '-', ';', '_'],
            ],
            ru: [
                ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё'],
                ['Ж', 'З', 'И', 'Й', 'К', 'Л', 'М'],
                ['Н', 'О', 'П', 'Р', 'С', 'Т', 'У'],
                ['Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ'],
                ['Ы', 'Ь', 'Э', 'Ю', 'Я', '0', '1'],
                ['2', '3', '4', '5', '6', '7', '8'],
                ['9', ' ', ',', '.', '-', ';', '_'],
            ],
        }

        super('Polybius', alphabet[alphabet_lang]);
    }

    encrypt(data) {
        if (!data) return false;

        let result = [];

        for (let char of data) {
            char = char.toUpperCase();

            for (let row = 0; row < this.alphabet.length; row++) {
                if (char === this.alphabet[row][row]) {
                    result.push(`${this.alphabet.indexOf(this.alphabet[row]) + 1}`.repeat(2));
                    continue;
                }

                for (let col = 0; col < this.alphabet[row].length; col++) {
                    if (char === this.alphabet[row][col]) {
                        result.push(
                            `${this.alphabet.indexOf(this.alphabet[row]) + 1}` +
                            `${this.alphabet.indexOf(this.alphabet[col]) + 1}`
                        );
                    }
                }
            }

        }

        return result.join(' ');
    }

    decrypt(data) {
        if (!data) return false;

        let result = '';
        let coords = data.split(' ')
            .filter(value => Number(value))
            .map(coord => coord.split(''));

        for (let coord of coords) {
            result += this.alphabet[coord[0] - 1][coord[1] - 1];
        }

        return result;
    }
}
