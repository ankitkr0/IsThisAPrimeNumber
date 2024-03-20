function checkPrime() {
    const number = document.getElementById('numberInput').value;
    fetch('/checkprime', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ number: number }),
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('result').innerText = data.isPrime ? `${data.number} is a prime number.` : `${data.number} is not a prime number.`;
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}
