function checkPrime() {
    const number = document.getElementById('numberInput').value;
    fetch('/checkprime', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ number: number }),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text(); // Use text() to read the response body as text
    })
    .then(text => {
        try {
            // Attempt to parse the text as JSON
            const data = JSON.parse(text); // This can throw SyntaxError if text is not valid JSON
            document.getElementById('result').innerText = data.isPrime ? `${data.number} is a prime number.` : `${data.number} is not a prime number.`;
        } catch (error) {
            // Handle cases where the text is not valid JSON
            console.error('Failed to parse JSON:', error);
            // Optionally update the UI or notify the user
            document.getElementById('result').innerText = 'Error: Failed to retrieve prime status.';
        }
    })
    .catch(error => {
        console.error('Error:', error);
        // Update the UI or notify the user about the network error
        document.getElementById('result').innerText = 'Error: Network error or server is not responding.';
    });
}