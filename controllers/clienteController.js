// Isaac da Silva Campos
import * as clienteModel from '../models/clienteModel.js';

export function listarClientes(req, res) {
    const clientes = clienteModel.listarClientes();
    res.status(200).json(clientes);
}

export function buscarMaiorFaturamento(req, res) {
    const cliente = clienteModel.buscarMaiorFaturamento();

    if (!cliente) {
        return res.status(404).json({ mensagem: "Nenhum cliente cadastrado." });
    }

    res.status(200).json(cliente);
}

export function buscarPorCategoria(req, res) {
    const categoria = req.params.categoria;
    const clientes = clienteModel.buscarPorCategoria(categoria);

    if (clientes.length === 0) {
        return res.status(404).json({ mensagem: "Nenhum cliente encontrado nesta categoria." });
    }
    res.status(200).json(clientes);
}

export function buscarPorNumero(req, res) {
    const numero = req.params.numerocli;
    const cliente = clienteModel.buscarPorNumero(numero);

    if (!cliente) {
        return res.status(404).json({ mensagem: "Cliente nao encontrado." });
    }
    res.status(200).json(cliente);
}

export function cadastrarCliente(req, res) {
    const nome = req.body.cliente;
    const categoria = req.body.categoria;
    const numero = req.body.numerocli;
    const faturamento = req.body.faturamento;

    if (typeof nome !== 'string' || nome === '' ||
        typeof categoria !== 'string' || categoria === '' ||
        typeof numero !== 'string' || numero === '' ||
        typeof faturamento !== 'number' || !Number.isFinite(faturamento)) {
        return res.status(400).json({ mensagem: "Dados invalidos ou incompletos." });
    }

    if (clienteModel.buscarPorNumero(numero)) {
        return res.status(409).json({ mensagem: "Numero de cliente ja cadastrado." });
    }

    const novoCliente = {
        cliente: nome,
        categoria: categoria,
        numerocli: numero,
        faturamento: faturamento
    };

    clienteModel.cadastrarCliente(novoCliente);
    res.status(201).json(novoCliente);
}

export function atualizarCliente(req, res) {
    const numero = req.params.numerocli;
    const cliente = clienteModel.buscarPorNumero(numero);
    if (!cliente) {
        return res.status(404).json({ mensagem: "Cliente nao encontrado." });
    }

    const nome = req.body.cliente;
    const categoria = req.body.categoria;
    const faturamento = req.body.faturamento;

    if (typeof nome !== 'string' || nome === '' ||
        typeof categoria !== 'string' || categoria === '' ||
        typeof faturamento !== 'number' || !Number.isFinite(faturamento)) {
        return res.status(400).json({ mensagem: "Dados invalidos ou incompletos." });
    }

    clienteModel.atualizarCliente(cliente, nome, categoria, faturamento);

    res.status(200).json({
        mensagem: "Cliente atualizado com sucesso.",
        cliente: cliente
    });
}

export function excluirCliente(req, res) {
    const numero = req.params.numerocli;
    const cliente = clienteModel.excluirCliente(numero);

    if (!cliente) {
        return res.status(404).json({ mensagem: "Cliente nao encontrado." });
    }

    res.status(200).json({
        mensagem: "Cliente excluido com sucesso.",
        cliente: cliente
    });
}
