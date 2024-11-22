document.getElementById('forms').addEventListener('submit', function (e) { e.preventDefault();


    const nome = document.getElementById('nomecom').value;
    const email = document.getElementById('email').value;
    const texto = document.getElementById('texto').value;
    console.log("Nome:", nome); // Mostra o valor de 'nome'
    console.log("Email:", email); // Mostra o valor de 'email'
    console.log("Mensagem:", texto); // Mostra o valor de 'texto'


    const mensagens =JSON.parse(localStorage.getItem('mensagens') || '[]');
    mensagens.push({ nome, email, texto});
    console.log("Mensagens atualizadas:", mensagens);
    localStorage.setItem('mensagens', JSON.stringify(mensagens));

    e.target.reset();


});