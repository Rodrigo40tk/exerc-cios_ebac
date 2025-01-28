document.getElementById('meuFormulario').addEventListener('submit', function (e) {
    e.preventDefault();
    var campoA = parseFloat(document.getElementById('campoA').value);
    var campoB = parseFloat(document.getElementById('campoB').value);
    var message = document.getElementById('message');

    if (campoB > campoA) {
        message.textContent = "Formulário válido! O número B é maior que o número A.";
        message.style.color = "green";
    } else {
        message.textContent = "Formulário inválido. O número B deve ser maior que o número A.";
        message.style.color = "red";
    }
});