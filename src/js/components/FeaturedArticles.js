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
        640: {
          slidesPerView: 2.8,
        },
        1024:{
          slidesPerView: 3.2
        },
        1600:{
          slidesPerView: 4.2
        }
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