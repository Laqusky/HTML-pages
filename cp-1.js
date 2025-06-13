console.clear();

const slider = document.querySelector('.slider');
const items = document.querySelectorAll('.slider-item');
const dist = 15;



function playTl() {
  let tl = new TimelineMax();
    tl.to(document.querySelector('[data-index="0"]'), .3, {
        transform:"translateX(110%) translateZ(0) translateY(0)"
      })
      .add('here', .2)
      .to(document.querySelector('[data-index="0"]'), .4, {
        transform:`translateX(100%) translateZ(-${(items.length) * dist}px) translateY(-${(items.length) * dist}px) `
      })
      .to(document.querySelector('[data-index="0"]'), .3, {
        transform:`translateX(0) translateZ(-${(items.length) * dist}px) translateY(-${(items.length) * dist}px) `
      }, "-=.2")

    items.forEach(item => {
      if (item.dataset.index > 0) {
        tl.to(item, .5, {
          transform:`translateX(0) translateZ(-${item.dataset.index * dist}px) translateY(-${item.dataset.index * dist}px)`
        }, 'here')
      }
    })
};

slider.addEventListener('click', e => {
  playTl();

  items.forEach(item => {
    if (item.dataset.index > 0) {
      item.dataset.index--;
      console.log(item);
    } else {
      item.dataset.index = items.length - 1;
      // console.log(item.style.transform);
    }

  });

  // document.querySelector('[data-index="0"]').style.animation = "toBottom 1s forwards";
  // document.querySelector('[data-index="1"]').style.animation = "toTop1 1s forwards";
  // document.querySelector('[data-index="2"]').style.animation = "toTop2 1s forwards";
});

playTl()
