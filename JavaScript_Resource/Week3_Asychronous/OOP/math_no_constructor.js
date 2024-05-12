
//A class withou constructor
class MathHelper {

    add(num1, num2) {
        return num1 + num2;
    }

    subtract(num1, num2) {
        return num1 - num2;
    }

    multiply(num1, num2) {
        return num1 * num2;
    }

    divide(num1, num2) {
        return num1 / num2;
    }

    modulo(num1, num2) {
        return num1 % num2;
    }

    power(num1, num2) {
        return num1 ** num2;
    }
}

// Create an instance from the class
const mathHelper = new MathHelper();

//use the instance
console.log(mathHelper.add(2, 3));
console.log(mathHelper.subtract(2, 3));
console.log(mathHelper.multiply(2, 3));
console.log(mathHelper.divide(2, 3));
console.log(mathHelper.modulo(2, 3));
console.log(mathHelper.power(2, 3));
