
  function chuvaDeCoracoes() {
      for (let i = 0; i < 30; i++) {
        setTimeout(() => {
          criarCoracao();
        }, i * 150);
      }
    }

   function criarCoracao() {
      const heart = document.createElement('div');
      heart.classList.add('heart');
      heart.style.left = Math.random() * 100 + 'vw';
      heart.style.top = '0px'; // ADICIONADO
      heart.style.animationDuration = (2 + Math.random() * 2) + 's';

      heart.innerHTML = `
        <svg viewBox="0 0 512 512">
          <path d="M471.7 73.6C428.2 30.1 367.7 14.2 311 34.3c-23.9 8.4-45.3 23.8-61 44.1-15.7-20.3-37.1-35.7-61-44.1-56.6-20.1-117.1-4.2-160.7 39.3C3.4 116.5-10.6 192.3 43 245.9l193.5 193.5c12.5 12.5 32.8 12.5 45.3 0L469 245.9c53.6-53.6 39.6-129.4 2.7-172.3z"/>
        </svg>
      `;

      document.body.appendChild(heart);

      setTimeout(() => {
        heart.remove();
      }, 4000);
    }


    document.addEventListener('DOMContentLoaded', () => {
      const alvo = document.querySelector('.declarando');

      if (!alvo) return;

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            chuvaDeCoracoes();
            observer.disconnect(); // Só uma vez
          }
        });
      });

      observer.observe(alvo);
    });