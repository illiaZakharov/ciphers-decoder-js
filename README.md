# Ciphers decoder

Ciphers decoder is a JavaScript application for encrypting and decrypting text with a simple cryptography methods.

## Installation and Start

0. Install the package manager (if not already installed). 

1. Install dependencies using the package manager.

For node.js:

```bash
npm install 
```

For yarn:

```bash
yarn install 
```

2. Run build

```bash
npm run build 
```

or

```bash
yarn run build 
```
## Usage

### Cezar
```javascript
import { Cezar } from './ecryption-methods/cezar.js';

// returns 'LCUHPHPEHUCWKDWCVHSWHPEHU'
new Cezar('en').encrypt('i remember that september', 3);

// returns 'lcuhphpehucwkdwcvhswhpehu'
new Cezar('en').decrypt('i remember that september', 3);
```
## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)