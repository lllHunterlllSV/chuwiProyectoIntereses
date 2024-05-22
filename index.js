document.getElementById('botonCalcular').addEventListener('click', function() {
    var totalMonto = parseFloat(document.getElementById('totalMonto').value);
    var capital = parseFloat(document.getElementById('capital').value);
    var alerta = document.getElementById('alerta');

    if (isNaN(totalMonto) || isNaN(capital)) {
        alerta.classList.remove('d-none');
        return;
    } else {
        alerta.classList.add('d-none');
    }

    var interesAdeudado = totalMonto - capital;
    document.getElementById('resultado').innerHTML= "Resultado: $" +interesAdeudado.toFixed(2);
});