//Mobileapp

let t = {
  tempo: 2,
  distancia: 1
}

function solucao(tempo, distancia) {
  let corrida = 0
  if (tempo < 5) {
    corrida = 600
  } else if (5 < tempo && tempo < 60 ) {
    corrida = (100 * tempo) + (50 * distancia)
  } else if (tempo >= 60) {
    if (distancia < 100) {
      corrida = 200 * distancia
    } else {
      corrida = 150 * distancia
    }
  } console.log(corrida)
}

solucao(25,8)

//ano olimpico


function solucao(ano) {
  const resultado = ano % 4;
  
  if (ano % 4 == 2) {
    console.log('COPA')
  } else if (ano % 4 == 0) {
    console.log('JOGOS')
  } else if (ano % 4 == 1) {
    console.log('MEH')
  } 
  
}
solucao(2019)

// filtrar letras

let lista = 
[
  {
    "letra": "m",
    "palavras": [
      "mamao",
      "maca",
      "melao",
      "melancia",
      "laranja"
    ]
  }
]


function solucao(letra, palavras) {
  let contador = 0;

  for (let item of palavras) {
    if (item[0] != letra ) {
      contador ++;
  } else {
    continue
    }
} console.log(contador)
}
