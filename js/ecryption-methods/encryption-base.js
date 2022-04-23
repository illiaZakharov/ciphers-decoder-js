export class EncryptionMethod {
    constructor(name, alphabet) {
        this._name = name;
        this._alphabet = alphabet;
    }

    get name() {
        return this._name;
    }

    get alphabet() {
        return this._alphabet;
    }
}