import Swiper, {Navigation, Scrollbar} from "swiper";

class CollectionCarousel extends HTMLElement{
  constructor(){
    super();
    this.carousel = this.querySelector('.collection-carousel');
    this.scrollbar = this.querySelector('.swiper-scrollbar');
    this.prev = this.querySelector('#col-prev');
    this.next = this.querySelector('#col-next');
    // console.log('CollectionCarousel is conected....')
    this.swiper = new Swiper(this.carousel, {
      modules: [Navigation, Scrollbar],
      slidesPerView: 1.8,
      spaceBetween: 16,
      breakpoints: {
        640: {
          slidesPerView: 2.8,
        },
        1024:{
          slidesPerView: 3.8
        }
      },
      navigation: {
        prevEl: this.prev,
        nextEl: this.next,
      },
      scrollbar: {
        el: this.scrollbar
      }

    })

  }
}

export default CollectionCarousel;