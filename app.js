// Lista de amigos para o sorteio
let amigos = []; // Armazena os nomes dos participantes

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    const input = document.getElementById("amigo"); // Captura o input do usuário
    const nome = input.value.trim(); // Remove espaços extras no início e no final
    
    if (nome === "") {
        alert("Digite um nome válido!"); // Impede a adição de nomes vazios
        return;
    }
    
    if (amigos.includes(nome)) {
        alert("Esse nome já foi adicionado!"); // Evita a duplicação de nomes
        return;
    }
    
    amigos.push(nome); // Adiciona o nome à lista
    atualizarLista(); // Atualiza a interface com os novos dados
    input.value = ""; // Limpa o campo de entrada após adicionar
}

// Função para atualizar a lista de amigos na interface
function atualizarLista() {
    const lista = document.getElementById("listaAmigos"); // Captura o elemento da lista no HTML
    lista.innerHTML = ""; // Limpa a lista antes de recriá-la
    
    amigos.forEach((amigo, index) => {
        const li = document.createElement("li"); // Cria um elemento de lista
        li.textContent = amigo; // Define o nome do amigo como texto do item
        
        const botaoRemover = document.createElement("button"); // Cria o botão de remover
        botaoRemover.textContent = "❌"; // Define o ícone do botão
        botaoRemover.onclick = () => removerAmigo(index); // Define a ação ao clicar
        botaoRemover.style.fontSize = "12px"; // Ajusta o tamanho do botão
        botaoRemover.style.padding = "2px 5px"; // Ajusta o espaçamento interno
        botaoRemover.style.marginLeft = "10px"; // Adiciona um pequeno espaçamento
        
        li.appendChild(botaoRemover); // Adiciona o botão ao item da lista
        lista.appendChild(li); // Adiciona o item à lista no HTML
    });
}

// Função para remover um amigo da lista
function removerAmigo(index) {
    amigos.splice(index, 1); // Remove o amigo pelo índice na lista
    atualizarLista(); // Atualiza a interface
}

// Função para limpar a lista de amigos
function limparLista() {
    amigos = []; // Reseta a lista de amigos
    document.getElementById("listaAmigos").innerHTML = ""; // Limpa a exibição da lista
    document.getElementById("resultado").innerHTML = ""; // Limpa o resultado do sorteio
}

// Função para realizar o sorteio do amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos 2 amigos para realizar o sorteio!"); // Evita sorteios inválidos
        return;
    }
    
    let sorteio = [...amigos]; // Copia a lista de amigos
    let resultado = {}; // Objeto para armazenar os pares sorteados
    let tentativas = 0;
    let maxTentativas = 100; // Limite para evitar loop infinito
    let sucesso = false;
    
    while (!sucesso && tentativas < maxTentativas) {
        let copiaSorteio = [...sorteio]; // Cria uma cópia para evitar mudanças na original
        sucesso = true;
        resultado = {}; // Reseta o resultado a cada tentativa
        
        for (let i = 0; i < amigos.length; i++) {
            let possiveis = copiaSorteio.filter(a => a !== amigos[i]); // Remove o próprio nome das opções
            
            if (possiveis.length === 0) {
                sucesso = false; // Se não houver opções válidas, o sorteio falhou
                break;
            }
            
            let sorteado = possiveis[Math.floor(Math.random() * possiveis.length)]; // Escolhe aleatoriamente
            resultado[amigos[i]] = sorteado; // Armazena o par sorteado
            copiaSorteio.splice(copiaSorteio.indexOf(sorteado), 1); // Remove o sorteado das opções
        }
        tentativas++;
    }
    
    if (sucesso) {
        exibirResultado(resultado); // Mostra o resultado na tela
    } else {
        alert("Não foi possível sortear. Tente novamente!"); // Mensagem caso falhe
    }
}

// Função para exibir o resultado do sorteio na interface
function exibirResultado(resultado) {
    const listaResultado = document.getElementById("resultado"); // Captura o elemento do HTML
    listaResultado.innerHTML = ""; // Limpa a lista antes de exibir
    
    for (let amigo in resultado) {
        const li = document.createElement("li"); // Cria um item de lista
        li.textContent = `${amigo} → ${resultado[amigo]}`; // Exibe o par sorteado
        listaResultado.appendChild(li); // Adiciona o item à lista no HTML
    }
}

// Criando e adicionando o botão de limpar lista na interface
document.addEventListener("DOMContentLoaded", () => {
    const buttonContainer = document.querySelector(".button-container"); // Captura o contêiner de botões
    const botaoLimpar = document.createElement("button"); // Cria o botão de limpar lista
    botaoLimpar.textContent = "Limpar Lista"; // Define o texto do botão
    botaoLimpar.onclick = limparLista; // Define a ação ao clicar
    botaoLimpar.style.marginTop = "10px";
    botaoLimpar.style.padding = "8px 12px";
    botaoLimpar.style.backgroundColor = "#ff4d4d";
    botaoLimpar.style.color = "white";
    botaoLimpar.style.border = "none";
    botaoLimpar.style.borderRadius = "5px";
    botaoLimpar.style.cursor = "pointer";
    buttonContainer.appendChild(botaoLimpar); // Adiciona o botão à interface
});