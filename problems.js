test = [1,2,4, 5,6,8,9]

const double = arg => arg.map(item => item * 2);

const squareAndFindEvens = arg => arg.map(num => num **2).filter(square => square % 2 ===0);