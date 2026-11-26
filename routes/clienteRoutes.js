import {
    listarClientes, buscarMaiorFaturamento, buscarPorCategoria, buscarPorNumero, cadastrarCliente, atualizarCliente, excluirCliente
} 
from '../controllers/clienteController.js';

export function cadastrarRotas(app) {
    app.get('/clientes', listarClientes);
    app.get('/clientes/maior-faturamento', buscarMaiorFaturamento);
    app.get('/clientes/categoria/:categoria', buscarPorCategoria);
    app.get('/clientes/:numerocli', buscarPorNumero);
    app.post('/clientes', cadastrarCliente);
    app.put('/clientes/:numerocli', atualizarCliente);
    app.delete('/clientes/:numerocli', excluirCliente);
}
