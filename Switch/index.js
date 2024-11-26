// Switch version of *ForAndWhile*

// With while.

let input = ''; // Inicializa a variável de entrada

while (input.toLowerCase() !== 'sair') { // Continua enquanto o usuário não digitar 'sair'
  input = prompt('Digite algo (ou digite "sair" para encerrar):'); // Solicita a entrada do usuário
  
  switch(input.toLowerCase()) {
    case '1':
      alert("Você digitou 1 - Opção 1 selecionada");
      console.log("Você digitou 1 - Opção 1 selecionada");
      break;
    case '2':
      alert("Você digitou 2 - Opção 2 selecionada");
      console.log("Você digitou 2 - Opção 2 selecionada");
      break;
    case '3':
      alert("Você digitou 3 - Opção 3 selecionada");
      console.log("Você digitou 3 - Opção 3 selecionada");
      break;
    case 'sair':
      alert("Encerrando o sistema...");
      console.log("Encerrando o sistema...");
      break;
    default:
      alert("Opção não reconhecida. Tente novamente.");
      console.log("Opção não reconhecida. Tente novamente.");
  }
}

// With for.

for (let input = ''; input.toLowerCase() !== 'sair';) { // Inicializa a variável de entrada no loop for
    input = prompt('Digite algo (ou digite "sair" para encerrar):'); // Solicita a entrada do usuário
    
    switch(input.toLowerCase()) {
      case '1':
        alert("Você digitou 1 - Opção 1 selecionada");
        console.log("Você digitou 1 - Opção 1 selecionada");
        break;
      case '2':
        alert("Você digitou 2 - Opção 2 selecionada");
        console.log("Você digitou 2 - Opção 2 selecionada");
        break;
      case '3':
        alert("Você digitou 3 - Opção 3 selecionada");
        console.log("Você digitou 3 - Opção 3 selecionada");
        break;
      case 'sair':
        alert("Encerrando o sistema...");
        console.log("Encerrando o sistema...");
        break;
      default:
        alert("Opção não reconhecida. Tente novamente.");
        console.log("Opção não reconhecida. Tente novamente.");
    }
  }
  