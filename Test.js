const jewelleryPrice = (price18Carat) => {
    var twentyTwoCarat = 1.221 * price18Carat;
    var twentyFourCarat = 1.332 * price18Carat;
    console.log(Math.floor(twentyTwoCarat));
}

jewelleryPrice(100);