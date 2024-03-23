module.exports = (req, res) => {
    const number = parseInt(req.body.number);
    const isPrime = checkPrime(number);
    res.status(200).json({ number: number, isPrime: isPrime });
};

function checkPrime(number) {
    if (number < 2) return false;
    for (let i = 2, s = Math.sqrt(number); i <= s; i++) {
        if (number % i === 0) return false;
    }
    return number > 1;
}
