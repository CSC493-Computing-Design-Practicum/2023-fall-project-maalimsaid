// Example JavaScript Fetch API usage in your front-end code
fetch('https://server.com/contact', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'Said Maalim',
    email: 'maalims@berea.edu',
    message: 'Hello ASA!',
  }),
})
.then(response => response.json())
.then(data => console.log(data))
.catch((error) => console.error('Error:', error));
