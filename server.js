const express = require('express');
const app = express();
const port = 3002;

app.listen(port, () => {
    console.log(`Server is running on port http://localhost${port}`);
})

app.use(express.static('public'));
