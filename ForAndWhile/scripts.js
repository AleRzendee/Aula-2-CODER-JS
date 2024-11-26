// Estruturas de mesma intenção com atribuiçõs diferentes

let input = ''; // Inicializa a variável de entrada

while (input.toLowerCase() !== 'sair') { // Continua enquanto o usuário não digitar 'sair'
  input = prompt('Digite algo (ou digite "sair" para encerrar):'); // Solicita a entrada do usuário
  
  if (input.toLowerCase() !== 'sair') { // Verifica se a entrada não é 'sair'
    let manipulatedInput = input.toUpperCase(); // Exemplo de manipulação: converte para maiúsculas
    alert(`Você digitou: ${manipulatedInput}`); // Exibe o resultado no alert
    console.log(`Você digitou: ${manipulatedInput}`); // Exibe o resultado no console
  }
}

for (let input = ''; input.toLowerCase() !== 'sair';) { // Inicializa a variável de entrada no loop for
    input = prompt('Digite algo (ou digite "sair" para encerrar):'); // Solicita a entrada do usuário
    
    if (input.toLowerCase() !== 'sair') { // Verifica se a entrada não é 'sair'
      let manipulatedInput = input.toLowerCase(); // Exemplo de manipulação: converte para minúsculas
      alert(`Você digitou: ${manipulatedInput}`); // Exibe o resultado no alert
      console.log(`Você digitou: ${manipulatedInput}`); // Exibe o resultado no console
    }
  }
  
  