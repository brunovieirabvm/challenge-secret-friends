# Jogo de Amigo Secreto

Este é um simples jogo de Amigo Secreto desenvolvido em JavaScript, HTML e CSS. O objetivo do jogo é permitir que um grupo de pessoas faça um sorteio de amigo secreto de forma fácil e rápida, garantindo que não haja repetições ou sorteios inválidos.

## Funcionalidades

- **Adicionar amigos**: Você pode adicionar amigos ao sorteio, digitando seus nomes no campo de input.
- **Remover amigos**: Caso algum nome precise ser removido, basta clicar no botão de remoção ao lado do nome.
- **Sortear amigo secreto**: Após adicionar pelo menos 2 amigos, você pode clicar no botão "Sortear Amigo" para realizar o sorteio de forma aleatória.
- **Exibir resultados**: O resultado do sorteio será exibido em uma lista, mostrando quem tirou quem.
- **Novo sorteio**: Após um sorteio, é possível iniciar um novo sorteio, limpando as listas e iniciando um novo ciclo.

## Como Usar

1. Abra o arquivo `index.html` em seu navegador.
2. Digite os nomes dos amigos no campo de entrada e clique em "Adicionar Amigo".
3. Repita o processo até ter pelo menos 2 amigos adicionados.
4. Clique em "Sortear Amigo" para ver o resultado do sorteio.
5. Caso não tenha gostado do sorteiro gerado e queira embaralhar novamente os nomes, clique novamente em "Sortear amigo".
6. Caso queira realizar outro sorteio, clique em "Novo Sorteio".

## Como Funciona

- O código utiliza JavaScript para gerenciar a lista de amigos e realizar o sorteio.
- A função `sortearAmigo()` garante que ninguém será sorteado para si mesmo, utilizando um algoritmo que tenta até 100 vezes para garantir um sorteio válido.
- O jogo foi desenvolvido para ser simples e fácil de usar, com validações para evitar erros comuns, como adicionar nomes duplicados ou realizar o sorteio com menos de 2 amigos.

## Tecnologias Utilizadas

- **HTML**: Estrutura da página web.
- **CSS**: Estilo visual básico para tornar a interface mais amigável.
- **JavaScript**: Lógica de controle do jogo, manipulação da lista de amigos e sorteio.

## Como Contribuir

Se você encontrar algum bug ou quiser sugerir melhorias, fique à vontade para abrir um issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

---

**Divirta-se no seu sorteio de amigo secreto! 🎉**
