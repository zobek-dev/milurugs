import Swiper, { Autoplay, Navigation, Pagination } from "swiper";

class Slideshow extends HTMLElement{
  constructor(){
    super();
    this.slideshow = this.querySelector('.slideshow-swiper');
    this.next = this.querySelector('.swiper-button-next');
    this.prev = this.querySelector('.swiper-button-prev');
    this.pagination = this.querySelector('.swiper-pagination');

    this.swiper = new Swiper(this.slideshow, {
      modules: [Navigation, Pagination, Autoplay],
      slidesPerView: 1,
      loop: true,
      spaceBetween: 0,
      autoHeight: true,
      autoplay: {
        delay: 5000
      },
      navigation: {
        nextEl: this.next,
        prevEl: this.prev,
      },
      pagination: {
        el: this.pagination,
      }
    })    
  }
}

export default Slideshow;