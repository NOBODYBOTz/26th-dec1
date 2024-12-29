let stopRequest = false;

// Handle bomber form submission
document.getElementById('bomberForm').addEventListener('submit', function(event) {
    event.preventDefault();
    stopRequest = false;  // Reset the stop request flag

    const phoneNumber = document.getElementById('phoneNumber').value;
    const amount = document.getElementById('amount').value;

    fetch('https://<YOUR-KOYEB-APP-URL>.com/trigger', {  // Replace with your Koyeb service URL
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            phoneNumber: phoneNumber,
            amount: amount
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.message) {
            alert(data.message);
        } else if (data.error) {
            alert(data.error);
        }
    })
    .catch(error => alert('Error: ' + error.message));
});

// Handle stop button click
document.getElementById('stopButton').addEventListener('click', function() {
    stopRequest = true;

    fetch('https://<YOUR-KOYEB-APP-URL>.com/stop', {  // Replace with your Koyeb service URL
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            stop: true
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.message) {
            alert(data.message);
        } else if (data.error) {
            alert(data.error);
        }
    })
    .catch(error => alert('Error: ' + error.message));
});
