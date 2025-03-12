const express = require('express');
const app = express();
const port = 3002;

app.listen(port, () => {
    console.log(`Server is running on port http://localhost${port}`);
})

app.use(express.static('public'));

app.get('/', (req,res) => {
    res.send('<h1>Server del mio blog</h1>')
})
