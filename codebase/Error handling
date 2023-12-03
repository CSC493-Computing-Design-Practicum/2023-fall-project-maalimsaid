// Inside each route, add try-catch blocks for error handling

// Example for the /contact route
app.post('/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    // Email sending logic goes here...

    res.status(200).send('Contact form received');
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred');
  }
});
