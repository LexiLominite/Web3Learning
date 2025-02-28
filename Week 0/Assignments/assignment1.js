// Give an input string that outputs a hash which starts with 00000
const crypto = require('crypto');
function findHashwithPrefix(prefix_str){

    let input = 0;
    while (1)
    {
        checkStr = input.toString();
        let hash = crypto.createHash('sha256').update(checkStr).digest('hex');
        if (hash.startsWith(prefix_str)){
            return{input: checkStr, hash: hash}
            break;

        }
        input ++;
    }
}

const result = findHashwithPrefix('00000');
console.log(`Input: ${result.input}, Hash: ${result.hash} `)