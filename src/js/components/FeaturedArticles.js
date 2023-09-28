import Swiper,{ Navigation, Scrollbar } from 'swiper';

class FeaturedArticles extends HTMLElement{
  constructor(){
    super();
    this.selector = this.querySelector('.articles-carousel');
    this.scrollbar = this.querySelector('.swiper-scrollbar');
    this.next = this.querySelector('.articles-next');
    this.prev = this.querySelector('.articles-prev');

    this.swiper = new Swiper(this.selector, {
      modules:[Navigation, Scrollbar],
      slidesPerView: 1.5,
      spaceBetween: 16,
      breakpoints: {
        150:{
          slidesPerView: 1.5,
        },
        768: {
          slidesPerView: 3,
        },
        1024:{
          slidesPerView: 4
        },
      },
      scrollbar:{
        el: this.scrollbar
      },
      navigation: {
        prevEl: this.prev,
        nextEl: this.next
      }
    })   
  }
}

export default FeaturedArticles;