import express from 'express';
import { cadastrarRotas } from './routes/clienteRoutes.js';

const PORT = 3000;
const app = express();

app.use(express.json());
cadastrarRotas(app);

export default app;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta http://localhost:${PORT}`);
});
