import Swiper, {Navigation, Scrollbar} from 'swiper';

class FeaturedCarousel extends HTMLElement{
  constructor(){
    super();
    this.id = this.querySelector('[data-sectionid]').dataset.sectionid;
    this.scrollbar = this.querySelector('.swiper-scrollbar');
    this.selector = this.querySelector(`#featured-carousel-${this.id}`);
    this.prev = this.querySelector('.featured-prev');
    this.next = this.querySelector('.featured-next');

    
    this.swiper = new Swiper(this.selector, {
      modules:[Navigation, Scrollbar],
      slidesPerView: 1.5,
      spaceBetween: 16,
      scrollbar:{
        el: this.scrollbar,
      },
      breakpoints: {
        450:{
          slidesPerView: 2,
          spaceBetween: 16,
        },
        600: {
          slidesPerView: 2.3,
          spaceBetween: 16,
        },
        980:{
          slidesPerView: 3.5,
          spaceBetween: 16,
        },
        1300:{
          slidesPerView: 4.5,
          spaceBetween: 16,
        }
      },
      navigation: {
        prevEl: this.prev,
        nextEl: this.next
      }
    })
  }
}

export default FeaturedCarousel;