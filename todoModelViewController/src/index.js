const PORT = 3000;
const express = require('express');

const app = express();
app.use(express.json());

const apiRoutes = require('./routes/index');
app.use('/api',apiRoutes);

app.listen(PORT, () => console.log(`http://localhost:${PORT}/`));
