// Permite revelar os cartões também com toque ou teclado.
document.querySelectorAll('.cartao').forEach((cartao) => {
  cartao.addEventListener('click', () => {
    const virado = cartao.classList.toggle('virado');
    cartao.setAttribute('aria-pressed', String(virado));
  });

  cartao.addEventListener('keydown', (evento) => {
    if (evento.key === 'Enter' || evento.key === ' ') {
      evento.preventDefault();
      cartao.click();
    }
  });
});
