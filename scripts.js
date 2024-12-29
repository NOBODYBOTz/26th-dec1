javascript
// Password or key to allow access
const correctPassword = 'your_password';

// Handling the login form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const loginPassword = document.getElementById('loginPassword').value;

    if (loginPassword === correctPassword) {document.getElementById('loginContainer').style.display = 'none';
        document.getElementById('mainContainer').style.display = 'block';
    } else {
        document.getElementById('loginError').style.display = 'block';
    }
});

// Handling the main form submission
document.getElementById('bomberForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const password = document.getElementById('password').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const amount = document.getElementById('amount').value;

    fetch('https://your-koyeb-app-url.com/trigger', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            password: password,
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
