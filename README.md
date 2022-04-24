# Ciphers decoder
Ciphers decoder is a JavaScript application for encrypting and decrypting text with a simple cryptography methods.

## Quick start
### Installation
Install dependencies using the package manager. If it's not installed yet, you can use [node.js](https://nodejs.org/en/).
```bash
npm install 
```

### Run application
To quick start the application run script:
```bash
npm run start
```

### Dev
To build development version run script:
```bash
npm run dev
```

### Prod
To build production version run script:
```bash
npm run build
```

## Usage

### Cezar cipher
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
