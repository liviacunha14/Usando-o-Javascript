console.log('Olá mundo!');

let novoElemento = document.createElement('h1');
novoElemento.innerText = 'Hello, World! English! (Inglês) Ok?!';
document.body.appendChild(novoElemento);

novoElemento.style.backgroundColor = 'blue';
novoElemento.style.color = 'yellow';
novoElemento.style.padding = '10px';
novoElemento.style.textAlign = 'center';
novoElemento.style.borderRadius = '8px';
novoElemento.style.fontFamily = 'Arial';

let paragrafo = document.createElement('p');
paragrafo.innerText = 'Hoje é: ' + new Date().toLocaleDateString('pt-BR') + 
                      ' | Agora são: ' + new Date().toLocaleTimeString('pt-BR');
paragrafo.style.color = 'green';
paragrafo.style.fontSize = '18px';
paragrafo.style.textAlign = 'center';
document.body.appendChild(paragrafo);

let botao = document.createElement('button');
botao.innerText = 'Mudar cor de fundo';
botao.style.marginTop = '20px';
botao.style.padding = '10px 20px';
botao.style.fontSize = '16px';
botao.style.cursor = 'pointer';
botao.style.display = 'block';
botao.style.marginLeft = 'auto';
botao.style.marginRight = 'auto';

botao.onclick = function() {
  let cores = ['lightblue', 'lightgreen', 'lavender', 'peachpuff', 'pink'];
  let corAleatoria = cores[Math.floor(Math.random() * cores.length)];
  document.body.style.backgroundColor = corAleatoria;
};

document.body.appendChild(botao);
