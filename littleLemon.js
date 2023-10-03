dishData = [
    {
        name: 'Italian Pasta',
        price: 9.55
    },
    {
        name: 'Rice with Veggies',
        price: 8.65
    },
    {
        name: 'Chicken wiht Potatoes',
        price: 15.55
    },
    {
        name: 'Veg Pizza',
        price: 6.45
    }
];

//console.log(dishData[3].name);

const getPrices = (taxBoolean) => {
    for(var i=0; i<dishData.length; i++){
        var finalPrice;
        if(taxBoolean == true){
            finalPrice = dishData[i].price + (dishData[i].price * 0.2);
            console.log(`Parameter is True`);
        }
        else if(taxBoolean == false){
            finalPrice = dishData[i].price;
            console.log(`Parameter is False`);
        }
        else{
            console.log(`You need to pass the boolean value`);
            console.log(`Parameter is neither True nor False`);
            break;
        }
        console.log(`Dish: ${dishData[i].name} price is : $${finalPrice}`);
    }
}


const getDiscount = (taxBoolean, guests) => {
    //getPrices(taxBoolean);
    if(guests > 0){
        
    }
}

getDiscount(true, 20);
