//Spread Operator
const clothes = ['TShirt', 'Shirt', 'Jeans', 'Pants', 'Trousers'];
const footwear = ['Flip Flops', 34, 'Sneakers', 'Sandals'];

const combineFunc = () => {
    return [...clothes, ...footwear];
}


var combine = combineFunc(clothes, footwear);

console.log(`Combination of Clothes and Footwear is ${combine}`);


const spreadTest = (allItems) => {
    for(var item of allItems){
        console.log(`${item} is of type ${typeof(item)}`);
    }
}

spreadTest(combine);

combine.pop();

combine.push('Boots');

console.log(`Combination of Clothes and Footwear is ${combine}`);



