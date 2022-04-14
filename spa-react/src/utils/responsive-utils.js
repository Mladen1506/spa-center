export const responsiveUtils = {};

responsiveUtils.onScroll = () => {
  // zovemo svaki put kada se event scroll desi
  const scrollPosition = window.scrollY;
  console.log('scroll position', scrollPosition);
  if (scrollPosition > 1) {
    document.body.classList.add("scrolled");
  } else {
    document.body.classList.remove("scrolled");
  }
};

responsiveUtils.onResize = () => {
  // zovemo svaki put kada se event resize desi

};

responsiveUtils.init = () => {
  console.log('INIT responsive utils');
  // TODO

  // dodajemo event listener za scroll event
  document.addEventListener('scroll', (e) => {
    // const scrollPosition = window.scrollY;
    responsiveUtils.onScroll();
  });

  // dodajemo event listener za resize event
  window.addEventListener('resize', (e) => {
    /*
    var newWidth = window.innerWidth;
    var newHeight = window.innerHeight;
    */
  });

  // prvi poziv handlera odmah na kraju inicijalizacije a kasnije ce biti piozivani na svaki takav event
  responsiveUtils.onScroll();
  // responsiveUtils.onResize();
};