import { EncryptionMethod } from './encryption-base.js';

export class Cezar extends EncryptionMethod {

    constructor(alphabet_lang) {
        const alphabet = {
            en: [
                ' ', 'A', 'B', 'C', 'D', 'E', 'F',
                'G', 'H', 'I', 'J', 'K', 'L', 'M',
                'N', 'O', 'P', 'Q', 'R', 'S', 'T',
                'U', 'V', 'W', 'X', 'Y', 'Z', '0',
                '1', '2', '3', '4', '5', '6', '7',
                '8', '9', ',', '.', '-', ';', '(',
                ')', '&', '$', '@', '!', '?'
            ],
            ru: [
                ' ', 'А', 'Б', 'В', 'Г', 'Д', 'Е',
                'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л',
                'М', 'Н', 'О', 'П', 'Р', 'С', 'Т',
                'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ',
                'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я', '0',
                '1', '2', '3', '4', '5', '6', '7',
                '8', '9', ',', '.', '-', ';', '(',
                ')', '&', '$', '@', '!', '?'
            ],
        }

        super('Cezar', alphabet[alphabet_lang]);
    }

    encrypt(data, shift) {
        let result = '';

        for (const char of data) {
            let charIndex = this.alphabet.indexOf(char.toUpperCase());
            
            result += charIndex !== -1
                ? this.alphabet[charIndex + shift]
                : '';
        }

        return result;
    }

    decrypt(data, shift) {
        let result = '';
        
        for (const char of data) {
            let charIndex = this.alphabet.indexOf(char.toUpperCase());
            
            result += charIndex !== -1
                ? this.alphabet[charIndex - shift]
                : '';
        }

        return result;
    }
}