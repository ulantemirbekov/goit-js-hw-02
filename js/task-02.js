const calculateEngravingPrice = function (message, pricePerWord) {
    const array = message.split(' ');
    const numberOfWords = array.length;
    const result = numberOfWords * pricePerWord;
    return result;
};

console.log(
    calculateEngravingPrice(
        'Proin sociis natoque et magnis parturient montes mus',
        10,
    ),
);

console.log(
    calculateEngravingPrice(
        'Proin sociis natoque et magnis parturient montes mus',
        20,
    ),
);

console.log(
    calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
);

console.log(
    calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
);