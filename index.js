
// cinco ou mais, menor e gratis 

function solucao(precos) {
  let total = 0;
  if (precos.length >= 5) {
    precos.pop();
    for ( let i = 0; i < precos.length; i++) {
    total += precos[i];
  } console.log(total)

  } else {
    for ( let i = 0; i < precos.length; i++) {
    total += precos[i];
  } console.log(total)
  }
}
solucao([100, 500, 100])

// so os tops

let produtos = [
  {
    "nome": "Camiseta",
    "preco": 7000
  },
  {
    "nome": "Tenis",
    "preco": 8000
  },
  {
    "nome": "Relogio",
    "preco": 15000
  }
]


function solucao(produtos) {
  let totalTop = [];
  let percentual = 0;
  let total = 0;
  if (produtos.preco >= 10000) {
    for ( let i = 0; i < produtos.preco; i++) {
    totalTop.push(precos[i]);
    console.log(totalTop);
    } 
} else {
  for ( let i = 0; i < produtos.preco; i++) {
    total.push(precos[i]);
    console.log(total);
}
}
       
}





