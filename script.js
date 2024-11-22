function recebermensagens(){
    console.log("função ativada")
    const mensagens = JSON.parse (localStorage.getItem('mensagens') || '[]');
    // a partir daqui 
    console.log("Mensagens carregadas do localStorage:", mensagens);
    const tabela = document.getElementById('tabelamensagens').getElementsByTagName('tbody')[0];
    tabela.innerHTML = ''; 

    mensagens.forEach((categoria, index) => {
        console.log("Processando mensagem:", categoria);
        console.log("texto:", mensagens.texto);
        const novaLinha = tabela.insertRow();

        const celulaNome = novaLinha.insertCell(0);
        celulaNome.textContent = categoria.nome;

        const celulaEmail = novaLinha.insertCell(1);
        celulaEmail.textContent = categoria.email;

        const celulaTexto = novaLinha.insertCell(2);
        celulaTexto.textContent = categoria.texto;

        const celulaApagar = novaLinha.insertCell(3);
        const botaoremover = document.createElement('img');

        botaoremover.src = 'fotosevideos/delete.svg';
        botaoremover.style.cursor = 'pointer';
        botaoremover.addEventListener('click', function(){ removermensagem(index);

        });
        celulaApagar.appendChild(botaoremover)
    });
}
function removermensagem(index) {

    const mensagens = JSON.parse(localStorage.getItem('mensagens') || '[]');
    mensagens.splice(index, 1);
    localStorage.setItem('mensagens', JSON.stringify(mensagens));
    recebermensagens();
}

// Função para remover todas as mensagens
document.getElementById('removertodas').addEventListener('click', function () {
    localStorage.removeItem('mensagens'); // Limpa todas as mensagens do localStorage
    recebermensagens();
    // Re-renderiza a lista vazia
});

window.onload = recebermensagens();
