const dataInicial = new Date('2021-08-21T19:30:00');

  function atualizarContador() {
    const agora = new Date();
    let diferenca = agora - dataInicial;

    const segundosTotais = Math.floor(diferenca / 1000);

    const dias = Math.floor(segundosTotais / (3600 * 24));
    const horas = Math.floor((segundosTotais % (3600 * 24)) / 3600);
    const minutos = Math.floor((segundosTotais % 3600) / 60);
    const segundos = segundosTotais % 60;

    document.getElementById('dias').textContent = `${dias} Dias`;
    document.getElementById('horas').textContent = `${horas} Horas`;
    document.getElementById('minutos').textContent = `${minutos} Minutos`;
    document.getElementById('segundos').textContent = `${segundos} Segundos`;
  }

  setInterval(atualizarContador, 1000);
  atualizarContador();