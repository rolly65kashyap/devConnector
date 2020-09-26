const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('API Running')); //it will send response/data to the browser, saying
//API is running

const PORT = process.env.PORT || 5000; //it will lok for an env var, called PORT, when we upload to Heroku
//or locally run it on port 50000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`)); //we are giving a function, bcz we want
//it to do something, once the server connects to the port
