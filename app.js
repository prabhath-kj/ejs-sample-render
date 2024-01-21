const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');
// Set the views directory
app.set('views', path.join(__dirname, 'views'));

// Simple route to render the EJS template
app.get('/', (req, res) => {
  const message = 'Hello, EJS!';
  res.render('index', { message });
});

app.get('/name/:id', (req, res) => {
    const name =req.params.id;
    console.log(name);
    res.render('hello', { name });
  });

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
