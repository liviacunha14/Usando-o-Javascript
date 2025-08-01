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

let botaoCor = document.createElement('button');
botaoCor.innerText = 'Mudar cor de fundo';
botaoCor.style.marginTop = '20px';
botaoCor.style.padding = '10px 20px';
botaoCor.style.fontSize = '16px';
botaoCor.style.cursor = 'pointer';
botaoCor.style.display = 'block';
botaoCor.style.marginLeft = 'auto';
botaoCor.style.marginRight = 'auto';
document.body.appendChild(botaoCor);

botaoCor.onclick = function() {
  let cores = ['lightblue', 'lightgreen', 'lavender', 'peachpuff', 'pink'];
  let corAleatoria = cores[Math.floor(Math.random() * cores.length)];
  document.body.style.backgroundColor = corAleatoria;
};

let botaoCoracoes = document.createElement('button');
botaoCoracoes.innerText = 'Chover Corações 💖';
botaoCoracoes.style.marginTop = '10px';
botaoCoracoes.style.padding = '10px 20px';
botaoCoracoes.style.fontSize = '16px';
botaoCoracoes.style.cursor = 'pointer';
botaoCoracoes.style.display = 'block';
botaoCoracoes.style.marginLeft = 'auto';
botaoCoracoes.style.marginRight = 'auto';
botaoCoracoes.style.backgroundColor = 'deeppink';
botaoCoracoes.style.color = 'white';
botaoCoracoes.style.border = 'none';
botaoCoracoes.style.borderRadius = '5px';
document.body.appendChild(botaoCoracoes);

botaoCoracoes.onclick = function() {
  for (let i = 0; i < 20; i++) {
    let coracao = document.createElement('div');
    coracao.innerText = '💖';
    coracao.style.position = 'fixed';
    coracao.style.left = Math.random() * window.innerWidth + 'px';
    coracao.style.top = '-30px';
    coracao.style.fontSize = '30px';
    coracao.style.animation = 'cair 3s linear forwards';
    document.body.appendChild(coracao);

    setTimeout(() => {
      coracao.remove();
    }, 3000);
  }
};

let estilo = document.createElement('style');
estilo.innerHTML = `
  @keyframes cair {
    to {
      transform: translateY(${window.innerHeight}px);
      opacity: 0;
    }
  }
`;
document.head.appendChild(estilo);
