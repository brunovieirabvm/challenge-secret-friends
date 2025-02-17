let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();
    
    if (nome === "" || amigos.includes(nome)) {
        alert("Nome inválido ou já adicionado!");
        return;
    }
    
    amigos.push(nome);
    atualizarLista();
    input.value = "";
    atualizarEstadoBotaoSortear();
}

function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    
    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        
        const botaoRemover = document.createElement("button");
        botaoRemover.textContent = "❌";
        botaoRemover.onclick = () => removerAmigo(index);
        botaoRemover.style.fontSize = "12px";
        botaoRemover.style.padding = "2px 5px";
        botaoRemover.style.marginLeft = "10px";
        
        li.appendChild(botaoRemover);
        lista.appendChild(li);
    });
}

function removerAmigo(index) {
    amigos.splice(index, 1);
    atualizarLista();
    atualizarEstadoBotaoSortear();
}

function atualizarEstadoBotaoSortear() {
    const botaoSortear = document.getElementById("botaoSortear");
    botaoSortear.disabled = amigos.length < 2;
    botaoSortear.textContent = "Sortear Amigo";
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos 2 amigos para realizar o sorteio!");
        return;
    }
    
    let sorteio = [...amigos];
    let resultado = {};
    let tentativas = 0;
    let maxTentativas = 100;
    let sucesso = false;
    
    while (!sucesso && tentativas < maxTentativas) {
        let copiaSorteio = [...sorteio];
        sucesso = true;
        resultado = {};
        
        for (let i = 0; i < amigos.length; i++) {
            let possiveis = copiaSorteio.filter(a => a !== amigos[i]);
            
            if (possiveis.length === 0) {
                sucesso = false;
                break;
            }
            
            let sorteado = possiveis[Math.floor(Math.random() * possiveis.length)];
            resultado[amigos[i]] = sorteado;
            copiaSorteio.splice(copiaSorteio.indexOf(sorteado), 1);
        }
        tentativas++;
    }
    
    if (sucesso) {
        exibirResultado(resultado);
    } else {
        alert("Não foi possível sortear. Tente novamente!");
    }
}

function exibirResultado(resultado) {
    const listaResultado = document.getElementById("resultado");
    listaResultado.innerHTML = "";
    
    for (let amigo in resultado) {
        const li = document.createElement("li");
        li.textContent = `${amigo} → ${resultado[amigo]}`;
        listaResultado.appendChild(li);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".button-container");
    const botaoNovoSorteio = document.createElement("button");
    botaoNovoSorteio.textContent = "Novo Sorteio";
    botaoNovoSorteio.style.marginTop = "10px";
    botaoNovoSorteio.style.padding = "8px 12px";
    botaoNovoSorteio.style.backgroundColor = "#cccccc";
    botaoNovoSorteio.style.color = "black";
    botaoNovoSorteio.style.border = "none";
    botaoNovoSorteio.style.borderRadius = "5px";
    botaoNovoSorteio.style.cursor = "pointer";
    botaoNovoSorteio.style.display = "block";
    botaoNovoSorteio.style.margin = "20px auto";
    botaoNovoSorteio.onclick = () => {
        amigos = [];
        atualizarLista();
        document.getElementById("resultado").innerHTML = "";
        atualizarEstadoBotaoSortear();
    };
    container.appendChild(botaoNovoSorteio);
});
