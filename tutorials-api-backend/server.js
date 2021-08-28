const express = require('express');
var cors = require('cors')
const bodyParser = require('body-parser');
const app = express(); // i am creating express app
const port = 3000;

const tutorialsRouter = require('./routes/tutorials');

app.use(cors());

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
//GET type request
app.get('/', (req, res) => {
  res.json({'message': 'ok'});
})

app.use('/api/tutorials', tutorialsRouter);

/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({'message': err.message});
  return;
});

app.listen(port, () => {
  console.log(`Tutorials api backend app listening at http://localhost:${port}`)
});
