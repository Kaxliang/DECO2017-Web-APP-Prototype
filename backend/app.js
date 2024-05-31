const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const port = 3000

const goalRoutes = require('./routes/goalsRoutes');
const dailyDataRoutes = require('./routes/dailyDataRoutes');

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/goals', goalRoutes)
app.use('/api/daily', dailyDataRoutes)

app.listen(port, () => {

})