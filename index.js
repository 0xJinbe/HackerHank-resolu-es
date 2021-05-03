// maiores de idade

function solucao(idade) {
  if(idade >= 18) {
      console.log('PODE ENTRAR')
  } else {
      console.log('ACESSO NEGADO')
  }
  
}

solucao(15)

// verificar modo do retrato foto

function solucao(largura, altura) {
  if (altura > largura) {
      console.log('RETRATO')
  } else if (largura > altura) {
      console.log('PAISAGEM')
  } else if ( largura === altura) {
      console.log('QUADRADA')
  }
  
}

solucao(8, 8)

// pedra papel tesoura


function solucao(joao, andre) {
    if(joao == 'PEDRA' && andre == 'TESOURA') {
        console.log('JOAO')
    } else if (joao == 'PEDRA' && andre == 'PAPEL') {
        console.log('ANDRE')
    } else if (joao == 'PAPEL' && andre == 'PEDRA') {
        console.log('JOAO')
    } else if (joao == 'PAPEL' && andre == 'TESOURA') {
        console.log('ANDRE')
    } else if (joao == 'TESOURA' && andre == 'PAPEL') {
        console.log('JOAO')
    } else if (joao == 'TESOURA' && andre == 'PEDRA') {
        console.log('ANDRE')
    } else if (joao == 'TESOURA' && andre == 'TESOURA'){
        console.log('EMPATE')
    } else if (joao == 'PEDRA' && andre == 'PEDRA') {
        console.log('EMPATE')
    } else if (joao == 'PAPEL' && andre == 'PAPEL') {
        console.log('EMPATE')
    }
}
solucao('PEDRA', 'TESOURA')

// CONTAGEM REGRESSIVA

function solucao(numero) {
  while (numero > -1) {
    console.log(numero);
    numero--
    }
console.log('KABUM')
}
solucao(10)

// condicionais para cinema
let obj = {
  temIngresso: true,
  idade: 17,
  temCarteirinha: true,
  censura: 16,
  estaComPais: false
};

function solucao(obj) {
	if (obj.temIngresso == true && obj.idade >= obj.censura || obj.estaComPais == true) {       
       if (obj.temCarteirinha == true || obj.idade < 18) {
      console.log('MEIA')
    } else (obj.temCarteirinha == false || obj.idade > 18) {
      console.log('INTEIRA')
     }
    
    } else (obj.temIngresso == false && obj.idade < obj.censura || obj.estaComPais == false ) {
        console.log('ACESSO NEGADO')
      }
} 

solucao(obj)

//Mobileapp

