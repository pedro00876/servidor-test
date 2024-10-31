import express from 'express'
import fetch from 'node-fetch'

const app = express();
const PORT = 3001;

const API_URL = 'https://crm.rdstation.com/api/v1/contacts?token=66e5f14d9803c30027dc3f70'

app.use(express.json())

app.use('./api', async (req, res) => {
    const url = `${API_URL}${req.url}`;
    const options = {
        method: req.method,
        headers: {
            'Content-type': 'application/json',
            ...req.headers,
        },
        body: req.method !== 'GET' ? JSON.stringify(req.body) : null,
    };

    try {
        const response = await fetch(url, options);
        const data = response.json
        res.status(response.status).json(data)
    } catch (error) {
        res.status(500).json({
            message: 'Erro ao redirecionar a requisição',
            error: error.message,
        })
    }
})

app.listen(PORT, () => {
    console.log(`Servidor proy rodando em http://localhost:${PORT}`)
})

export default app;