
$('#form-formulario').on('submit', function (e) {
    e.preventDefault();
    adicionaLinha();
    atualizaTabela();
});

const tarefas = [];
let linhas = '';


function adicionaLinha() {
    const inputAdicionaTarefa = $('#adiciona-tarefa');

    if (tarefas.includes(inputAdicionaTarefa.val())) {
        alert('ESSA TAREFA JÁ FOI ADICIONADA!');
        return;
    }

    tarefas.push(inputAdicionaTarefa.val());

    let linha = '<ul>';
    linha += `<li class="tarefa">${inputAdicionaTarefa.val()}</li>`;
    linha += '</ul>';

    linhas += linha;

    inputAdicionaTarefa.val('');
}

function atualizaTabela() {
    $('thead').html(linhas);
    adicionaEventListeners();
}

function adicionaEventListeners() {
    $('.tarefa').click(function () {
        $(this).addClass('line-through');
        });
    }
