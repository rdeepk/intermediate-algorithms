/*
Sum all the prime numbers up to and including the provided number.
A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.
The provided number may not be a prime.

sumPrimes(10) should return 17.

https://www.freecodecamp.com/challenges/sum-all-primes
*/

function getPrimes(max) {
    var sieve = [], i, j, primes = [];
    for (i = 2; i <= max; i++) {
        if (!sieve[i]) {
            primes.push(i);
            for (j = i * 2; j <= max; j += i) {
                sieve[j] = true;
            }
        }
    }
    return primes;
}

function sumPrimes(num) {
	var primes = getPrimes( num );
	return primes.reduce(function(pv, cv){
		return pv + cv;
	});
}

sumPrimes(977);