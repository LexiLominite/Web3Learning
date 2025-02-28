const crypto = require('crypto');

function checkHashwithPrefix2(inputPrefix, hashPrefix){

    let input = 0;
    while(true){
        
        
        let check2Str = input.toString();
        let finalInput = inputPrefix + check2Str;
        let hash = crypto.createHash('sha256').update(finalInput).digest('hex');

        if(hash.startsWith(hashPrefix)){
            return{input: finalInput, hash: hash};
            break;
        }
        input++;



    }

}

const result = checkHashwithPrefix2('100xdevs','00000');
console.log(`input: ${result.input}, hash: ${result.hash} `);