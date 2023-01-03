const message = (names) => {
    return `Hi, ${names}! 50% off our best candies for you today!`
};

const generateMessages = (names) => {
    return names.map(message)
};

const names = ['Anna', 'Laura', 'Josh', 'Min', 'Karla'];

console.log(generateMessages(names));