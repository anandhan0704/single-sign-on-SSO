const express = require('express');
const app = express();
const morgan = require('morgan')
const mongoose = require('mongoose')
const config = require('./api/const/const')
const port = process.env.PORT || 5000;
app.use(express.json());

const healthRoutes = require('./api/routes/health')
const userRoutes = require('./api/routes/user')
const db = require('./api/connections/connections').mongoURI;

app.use(morgan('dev'));
mongoose
  .connect(
    db,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

app.use((req, res, next) => {
  res.header(config.CORS_ORIGIN, "*");
  res.header(config.CORS_HEADERS, config.TYPES)
  if (req.method === 'OPTIONS') {
    res.header(config.CORS_METHODS, config.METHODS)
    return res.status(200).json({});
  }
  next();
})

app.use('/', healthRoutes)
app.use('/user', userRoutes)

app.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
})

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  })
})

app.listen(port, console.log(`connected on ${port}`));