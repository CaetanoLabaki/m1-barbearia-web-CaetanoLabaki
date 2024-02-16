const barbearia = {
    cortes: [
        { id: 1, tipo: "Militar", valor: 20 },
        { id: 2, tipo: "Samurai", valor: 35 },
        { id: 3, tipo: "Pompadour", valor: 20 },
        { id: 4, tipo: "Moicano", valor: 10 },
        { id: 5, tipo: "Razor part", valor: 5 },
    ],
  
    barbas: [
        { id: 1, tipo: "Capitão Jack", valor: 20 },
        { id: 2, tipo: "Van Dyke", valor: 20 },
        { id: 3, tipo: "Barba Média", valor: 20 },
        { id: 4, tipo: "Barba Baixa", valor: 20 },
        { id: 5, tipo: "Barba Zero", valor: 15 },
    ],
    estaAberto: true,
};
  
  
function buscaCortePorId(id) {
    for(i = 0; i < barbearia.cortes.length; i++) {
        if(id == barbearia.cortes[i].id) {
            return barbearia.cortes[i];
        }
    } return  "Corte não encontrado";
}

function buscaBarbaPorId(id) {
    for(i = 0; i < barbearia.barbas.length; i++) {
        if(id == barbearia.barbas[i].id) {
            return barbearia.barbas[i];
        }
    } return "Barba não encontrada";
}

function verificaStatusBarbearia() {
    if(barbearia.estaAberto) {
        return "Estamos abertos";
    } return  "Estamos fechados";
}

function retornaTodosCortes() {
    return barbearia.cortes;
}

function retornaTodasBarbas() {
    return barbearia.barbas;
}

function criaPedido(nomeCliente, corteId, barbaId) {
    const corteCliente = buscaCortePorId(corteId);
    const barbaCliente = buscaBarbaPorId(barbaId);
    let pedido = {
        nome: nomeCliente,
        pedidoCorte: corteCliente.tipo,
        pedidoCortePreco: corteCliente.valor,
        pedidoBarba: barbaCliente.tipo,
        pedidoBarbaPreco: barbaCliente.valor
    }
    return pedido;
}

function atualizarServico(lista, id, valor, tipo) {
    let novoValor = valor;
    let novoTipo = tipo;
    for(let i = 0; i < lista.length; i++) {
        if(id == lista[i].id) {
            lista[i].valor = novoValor;
            lista[i].tipo = novoTipo;
            return lista;
        }        
    }
}

function calculaTotal(pedido) {   
    let somaTotal = pedido.pedidoCortePreco + pedido.pedidoBarbaPreco;
    return somaTotal;
}
  
  
