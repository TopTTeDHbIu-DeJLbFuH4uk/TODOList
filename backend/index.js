const express = require('express');
const router = require('./router.js');

const app = express();
const PORT = 5656;

app.use(express.json());
app.use('/api', router);

app.listen(PORT, () => console.log(`SERVER STARTED ON PORT ${PORT}`));
