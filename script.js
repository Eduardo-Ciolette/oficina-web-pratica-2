function calcular() {
    const raio = parseFloat(document.getElementById('radius').value);

    // Verificando se o valor do raio é válido
    if (isNaN(raio) || raio <= 0) {
        alert("Por favor, insira um valor válido para o raio.");
        return;
    }

    // Cálculos
    const pi = Math.PI;
    const comprimento = 2 * pi * raio;
    const area = pi * Math.pow(raio, 2);
    const volume = (4/3) * pi * Math.pow(raio, 3);

    // Exibindo os resultados
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <p><strong>Comprimento da esfera:</strong> ${comprimento.toFixed(2)} unidades</p>
        <p><strong>Área da esfera:</strong> ${area.toFixed(2)} unidades²</p>
        <p><strong>Volume da esfera:</strong> ${volume.toFixed(2)} unidades³</p>
    `;
}