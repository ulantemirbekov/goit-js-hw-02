const checkForSpam = function (message) {
    const normalizedMessage = message.toLowerCase();

    return normalizedMessage.includes('sale') || normalizedMessage.includes('spam');

};

console.log(checkForSpam('Latest technology news'));

console.log(checkForSpam('JavaScript weekly newsletter'));

console.log(checkForSpam('Get best sale offers now!'));

console.log(checkForSpam('[SPAM] How to earn fast money?'));