// Isaac da Silva Campos
const clientes = [
    {
        cliente: "Joao da Silva",
        categoria: "vip",
        numerocli: "C123",
        faturamento: 150000.00
    },
    {
        cliente: "Maria Oliveira",
        categoria: "comum",
        numerocli: "C124",
        faturamento: 85000.00
    },
    {
        cliente: "Pedro Santos",
        categoria: "vip",
        numerocli: "C125",
        faturamento: 230000.00
    },
    {
        cliente: "Ana Costa",
        categoria: "comum",
        numerocli: "C126",
        faturamento: 42000.00
    },
    {
        cliente: "Lucas Ferreira",
        categoria: "premium",
        numerocli: "C127",
        faturamento: 175500.00
    }
];

export function listarClientes() {
    return clientes;
}

export function buscarMaiorFaturamento() {
    if (clientes.length === 0) {
        return null;
    }

    let maior = clientes[0];

    for (const cliente of clientes) {
        if (cliente.faturamento > maior.faturamento) {
            maior = cliente;
        }
    }

    return maior;
}

export function buscarPorCategoria(categoria) {
    return clientes.filter(cliente => cliente.categoria.toLowerCase() === categoria.toLowerCase());
}

export function buscarPorNumero(numero) {
    return clientes.find(cliente => cliente.numerocli.toUpperCase() === numero.toUpperCase());
}

export function cadastrarCliente(cliente) {
    clientes.push(cliente);
}

export function atualizarCliente(cliente, nome, categoria, faturamento) {
    cliente.cliente = nome;
    cliente.categoria = categoria;
    cliente.faturamento = faturamento;
}

export function excluirCliente(numero) {
    const indice = clientes.findIndex(cliente => cliente.numerocli.toUpperCase() === numero.toUpperCase());

    if (indice === -1) {
        return null;
    }

    const cliente = clientes[indice];
    clientes.splice(indice, 1);
    return cliente;
}
