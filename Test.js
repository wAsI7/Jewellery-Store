const clothes = ['TShirt', 'Shirt', 'Jeans', 'Pants', 'Trousers'];

const spreadTest = () => {
    for(var item of clothes){
        console.log(`${item} is of type ${typeof(item)}`);
    }
}

spreadTest(clothes);

