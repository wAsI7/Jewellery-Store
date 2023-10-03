dishData = [];

const getPrices = (taxBoolean) => {
    for(var i=0; i<dishData.length; i++){
        var finalPrice;
        if(taxBoolean === 'true'){
            finalPrice = dishData[i] + (dishData[i] * 0.2);
        }
        else if(taxBoolean === 'false'){
            finalPrice = dishData[i];
        }
        else{
            console.log(`You need to pass the boolean value`);
            break;
        }
    }

}

