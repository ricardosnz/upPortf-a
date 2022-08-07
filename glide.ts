
// import Glide from '@glidejs/glide';
addEventListener('load', () => {
  // new Glide('.glide').mount()
  let glide = new Glide('.scrol', {
    type: 'slider',
    startAt: 1, // indice que empieza
    perView: 1, // cuantos slides se muestran
    gap: 5, // distancia entre cada uno
    keyboard: true,
    animationDuration: 1000,
    // focusAt: 1,
    peek: {
      before: 0,
      after: 10,
    },
    breakpoints: {
      800: {
        perView: 3,
      },
      480: {
        perView: 1,
      },
    },
  });
  glide.mount();
});