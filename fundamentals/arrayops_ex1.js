const checkLength = (number) => {
    if (number.length === 10) {
        return true;
    } else {
        return false;
}
};

const numbers = [
    '1763687364',
    '4763687363',
    '7867867862',
    'aaaaaaaabbbbbbbcccccdddddddd' // this element should be filtered
];

const filterLongNumbers = (numbers) =>{
    return numbers.filter(checkLength)
};

console.log(filterLongNumbers(numbers));