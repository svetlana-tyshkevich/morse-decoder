const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr = expr.split(/(.{10})/).filter( item => item.length > 0);
    let result = '';

    const getCode = (num) => {
        let char = '';
        switch(num) {
            case '10' : char = '.';
                break;
            case '11' : char = '-';
                break;
            default : char = '';
        }
        return char;
    }

    arr.forEach(item => {
        if (item === '**********') result += ' ';
        else {
           let morseLetter =  item.split(/(.{2})/).map(i => getCode(i)).join(''); 
            result += MORSE_TABLE[morseLetter];
        }
    })
    return result;
}

module.exports = {
    decode
}