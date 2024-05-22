document.getElementById('botonCalcular').addEventListener('click', function() {
    var totalMonto = parseFloat(document.getElementById('totalMonto').value);
    var capital = parseFloat(document.getElementById('capital').value);
    var alerta = document.getElementById('alerta');

    if (!/^(\d+(\.\d+)?)$/.test(totalMonto) || !/^(\d+(\.\d+)?)$/.test(capital)) {
        alerta.classList.remove('d-none');
        resultadoLabel.innerText = "Resultado: Ingrese valores válidos.";
        return;
    } else {
        alerta.classList.add('d-none');
    }

    var interesAdeudado = totalMonto - capital;
    document.getElementById('resultado').innerHTML= "Resultado: $" +interesAdeudado.toFixed(2);
});