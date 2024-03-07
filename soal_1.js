const isPrime = (num) => { 
    if (num <= 1) { 
        return false;
        }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0){
            return false;
            }
        }
        return true;
    };

 const arr = Array.from({length: 1000}, (_, index) => index + 1);

//menyaring bilangan prima dari arr
const bilanganPrima = arr.filter(isPrime);

console.log("bilangan prima antara 1 sampai 1000 : ");
console.log(bilanganPrima.join('\n'));