function stringCompression(str: string): string {
    let compressedString = '';
    let count = 1;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i+1]) {
            count++;
        } else {
            compressedString += str[i] + count.toString();
            count = 1
        }
    }

    if (compressedString.length >= str.length) {
        return str;
    } else {
        return compressedString;
    }
}

// testes
console.log("1", "expected a2b3", stringCompression("aabbb"));
console.log("2", "expected a2b1c5a3", stringCompression("aabcccccaaa"));
console.log("3", "expected accurate", stringCompression("accurate"));
console.log("4", "expected escola", stringCompression("escola"));
console.log("4", "expected a1c2u1r1a10t1e1", stringCompression("accuraaaaaaaaaate"));