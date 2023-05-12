import Swiper, { Pagination, Controller } from 'swiper';

class ProductMain extends HTMLElement{
  constructor(){
    super();
    this.carousel = this.querySelector('.product-carousel');
    this.thumbnail = this.querySelector('.product-thumbnail');
    this.size = Number(this.thumbnail.dataset.slides);
   
    this.gallery = new Swiper(this.carousel, {
      modules:[ Controller, Pagination],
      slidesPerView: 1,
      centeredSlides: true,
      loop:true,
      loopedSlides: this.size,
    })

    this.thumb = new Swiper(this.thumbnail, {
      modules:[ Controller],
      slidesPerView: 5,
      spaceBetween: 16,
      centeredSlides: true,
      loop: true,
      slideToClickedSlide: true,
    });

    this.gallery.controller.control = this.thumb;
    this.thumb.controller.control = this.gallery;  
  }  
}

export default ProductMain;
