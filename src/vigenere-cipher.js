/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */

class VigenereCipheringMachine {
    constructor(direct = true) {
        this.direct = direct;
    }

    encrypt(message, key) {
        if (!message || !key) {
            throw new Error('Incorrect arguments!');
        }

        return this.processText(message, key, 'encrypt');
    }

    decrypt(message, key) {
        if (!message || !key) {
            throw new Error('Incorrect arguments!');
        }

        return this.processText(message, key, 'decrypt');
    }

    processText(message, key, mode) {
        const result = [];
        let keyIndex = 0;

        for (let i = 0; i < message.length; i++) {
            const char = message[i].toUpperCase();
            if (/[A-Z]/.test(char)) {
                const keyChar = key[keyIndex % key.length].toUpperCase();
                const keyShift = keyChar.charCodeAt(0) - 'A'.charCodeAt(0);
                const charCode = char.charCodeAt(0) - 'A'.charCodeAt(0);

                let newCharCode;
                if (mode === 'encrypt') {
                    newCharCode = (charCode + keyShift) % 26;
                } else {
                    newCharCode = (charCode - keyShift + 26) % 26;
                }

                result.push(String.fromCharCode(newCharCode + 'A'.charCodeAt(0)));
                keyIndex++;
            } else {
                result.push(char);
            }
        }

        return this.direct ? result.join('') : result.reverse().join('');
    }
}

module.exports = {
  VigenereCipheringMachine
};
