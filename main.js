const form = document.getElementById('form-contato');
const nome = [];
const numero = [];

let linhas = '';

form.addEventListener('submit', function (e) {
    e.preventDefault();

    adicionalinha();
    atualizaTabela();
    atualizaFinal();
});

function adicionalinha() {
    const inputNomeCompleto = document.getElementById('nome-completo');
    const inputNumeroTelefone = document.getElementById('numero-telefone');

    nome.push(inputNomeCompleto.value);
    numero.push(inputNumeroTelefone.value);


    let linha = '<tr>';
    linha += `<td>${inputNomeCompleto.value}</td>`;
    linha += `<td>${inputNumeroTelefone.value}</td>`;
    linha += '</tr>';

    linhas += linha;

    inputNomeCompleto.value = '';
    inputNumeroTelefone.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaFinal() {
    console.log(nome);
    console.log(numero);
}