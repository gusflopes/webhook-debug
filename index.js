const express = require('express');
const axios = require('axios');

const app = express();
const port = 6000;
const targetUrl = 'https://126e-179-177-14-153.ngrok-free.app/api/bringoz/EntityServiceCreatedWebHook';

// Middleware para parsear o body como JSON
app.use(express.json());

app.post('/webhook', async (req, res) => {
  try {
    const method = req.method;
	const headers = {...req.headers };
	delete headers.host;

	const response = await axios({
		method: method,
		url: `${targetUrl}`,
		headers: headers,
		data: req.body
	});

	res.status(response.status).set(response.headers).send(response.data);
  } catch (error) {
		console.error(error);
		res.status(500).send('Aconteceu um erro');
	}
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

