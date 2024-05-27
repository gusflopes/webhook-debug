const express = require('express');
const app = express();
const port = 6000;

// Middleware para parsear o body como JSON
app.use(express.json());

app.post('/webhook', (req, res) => {
    console.log('Webhook received');
    console.log("Headers:");
    console.log(req.headers);
    console.log("Body:");
    console.log(req.body);
    console.log('--------- FIM ---------');
    res.status(200).send('Webhook received');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

