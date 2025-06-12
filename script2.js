 function chuvaDeCoracoes() {
      for (let i = 0; i < 30; i++) {
        setTimeout(() => {
          criarCoracao();
        }, i * 150);
      }
    }

    function criarCoracao() {
      const coracao = document.createElement('div');
      coracao.classList.add('heart');
      coracao.style.left = Math.random() * 100 + "vw";
      coracao.style.animationDuration = (2 + Math.random() * 2) + "s";
      document.body.appendChild(coracao);

      setTimeout(() => {
        coracao.remove();
      }, 4000);
    }

    document.addEventListener('DOMContentLoaded', () => {
      const alvo = document.querySelector('.declarando');
      if (!alvo) return;

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            chuvaDeCoracoes();
            observer.disconnect(); // Executa só uma vez
          }
        });
      });

      observer.observe(alvo);
    });