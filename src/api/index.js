const path = require('path');
const express = require('express');
const compression = require('compression')
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const config = require('../lib/config');
const logger = require('../lib/logger');
const { mw } = require('../lib/azone');
const cors = require('cors');

const log = logger(config.logger);
const app = express();

app.use(compression())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());


app.use(express.static('_app'));
app.use('/doc/', express.static('_oas'));
app.use('/ui/', express.static('_ui'));

/*
 * Routes
 */
app.use('/api/v', mw, require('./routes/v'));

// catch 404
app.use((req, res, next) => {
  log.error(`Error 404 on ${req.url}.`);
  res.sendFile(path.join(__dirname, '../../_app/index.html'));
  //res.status(404).send({ status: 404, error: 'Not found' });
});

// catch errors
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const msg = err.error || err.message;
  log.error(`Error ${status} (${msg}) on ${req.method} ${req.url} with payload ${req.body}.`);
  res.status(status).send({ status, error: msg });
});


module.exports = app;
