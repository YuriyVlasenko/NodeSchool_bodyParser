class BodyParser{

    constructor(decodeValue = decodeURIComponent){
        this.decodeValue = decodeValue;
    }

    parse(body){

        if (!body){
            return undefined;
        }

        let keyValuesPairs = body.split('&');
        let bodyResult = {};

        for(let onePair of keyValuesPairs){
            let [key, value] = onePair.split('=');
            bodyResult[key] = this.decodeValue(value);
        }

        return bodyResult;
    }
}

module.exports = BodyParser;