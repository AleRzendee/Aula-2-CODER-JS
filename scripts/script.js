// Função para calcular o valor do ICMS
function calcularICMS(valorProduto, aliquotaICMS) {
    return valorProduto * (aliquotaICMS / 100);
}

// Função para calcular o valor final do produto com ICMS
function calcularValorFinal(valorProduto, valorICMS) {
    return valorProduto + valorICMS;
}

// Função principal que solicita os dados ao usuário e exibe o resultado
function main() {
    // Solicita o valor do produto ao usuário
    const valorProduto = parseFloat(prompt("Digite o valor do produto (em R$):"));
    
    // Solicita a alíquota de ICMS ao usuário
    const aliquotaICMS = parseFloat(prompt("Digite a alíquota de ICMS (em %):"));

    // Verifica se os valores fornecidos são válidos (com uso da isNan (Not-A-Number))
    if (isNaN(valorProduto) || isNaN(aliquotaICMS)) {
        alert("Entrada inválida! Por favor, insira valores numéricos.");
        return;
    }

    // Calcula o valor do ICMS
    const valorICMS = calcularICMS(valorProduto, aliquotaICMS);
    
    // Calcula o valor final do produto com ICMS
    const valorFinal = calcularValorFinal(valorProduto, valorICMS);

    // Exibe o resultado para o usuário
    console.log(`Valor do ICMS: R$` + valorICMS);
    console.log(`Valor final do produto com ICMS: R$` + valorFinal);
}

// Chama a função principal para iniciar o programa
main();
