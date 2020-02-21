
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const logger = require('./middleware/logger');

const app = express();

/* app.get('/', (req, res) => {
    //  res.send('<h1>Hello World 2</h1>')
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
}) */




// Init middleware
/// app.use(logger);

// Hnadlebars Middleware
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Body Parser Middleware 
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

// HOmepage route
app.get('/', (req, res) => res.render('index'));


// Set static folder
app.use(express.static(path.join(__dirname, 'public')));


// Members API Routes
app.use('/api/members', require('./routes/api/members'));

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => console.log(`Server strted on port ${PORT}`));   