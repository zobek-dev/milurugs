import Swiper, { Navigation, Scrollbar } from 'swiper';

class MainTips extends HTMLElement{
  constructor(){
    super();
    this.sliderLiving = this.querySelector('.slider-living');
    this.sliderLivingScrollBar = this.querySelector('#livingScrollBar');
    this.livingPrev = this.querySelector('#living-prev');
    this.livingNext = this.querySelector('#living-next');

    this.sliderComedor = this.querySelector('.slider-comedor');
    this.sliderComedorScrollBar = this.querySelector('#comedorScrollBar');
    this.comedorPrev = this.querySelector('#comedor-prev');
    this.comedorNext = this.querySelector('#comedor-next');

    this.sliderDormitorio = this.querySelector('.slider-dormitorio');
    this.sliderDormitorioScrollBar = this.querySelector('#dormitorioScrollBar');
    this.dormitorioPrev = this.querySelector('#dormitorio-prev');
    this.dormitorioNext = this.querySelector('#dormitorio-next');

    this.sliderInfantil = this.querySelector('.slider-infantil');
    this.sliderInfantilScrollBar = this.querySelector('#infantilScrollBar');
    this.infantilPrev = this.querySelector('#infantil-prev');
    this.infantilNext = this.querySelector('#infantil-next');

    this.showUbicar = this.querySelector('#show-ubicar');
    this.showCuidado = this.querySelector('#show-cuidado');

    this.ubicar = this.querySelector('#ubicar');
    this.cuidado = this.querySelector('#cuidado');

    this.bindEvents();

    console.log(this.comedorNext, this.comedorPrev)

    this.swiperLiving = new Swiper(this.sliderLiving, {
      modules:[Navigation, Scrollbar],
      slidesPerView: 1.2,
      spaceBetween: 16,
      scrollbar:{
        el: this.sliderLivingScrollBar
      },
      breakpoints: {
        500:{
          slidesPerView: 1.5,
          spaceBetween: 8,
        },
        680: {
          slidesPerView: 1.7,
          spaceBetween: 8,
        },
        968:{
          slidesPerView: 2.3,
          spaceBetween: 16,
        },
        1040: {
          slidesPerView: 2.5,
          spaceBetween: 16,
        }
      },
      navigation: {
        nextEl: this.livingNext,
        prevEl: this.livingPrev
      }
    })

    this.swiperComedor = new Swiper(this.sliderComedor, {
      modules:[Navigation, Scrollbar],
      slidesPerView: 1.2,
      spaceBetween: 16,
      scrollbar:{
        el: this.sliderComedorScrollBar
      },
      breakpoints: {
        500:{
          slidesPerView: 1.5,
          spaceBetween: 8,
        },
        680: {
          slidesPerView: 1.7,
          spaceBetween: 8,
        },
        968:{
          slidesPerView: 2.3,
          spaceBetween: 16,
        },
        1040: {
          slidesPerView: 2.5,
          spaceBetween: 16,
        }
      },
      navigation: {
        nextEl: this.comedorNext,
        prevEl: this.comedorPrev
      }
    })

    this.swiperDormitorio= new Swiper(this.sliderDormitorio, {
      modules:[Navigation, Scrollbar],
      slidesPerView: 1.2,
      spaceBetween: 24,
      scrollbar:{
        el: this.sliderDormitorioScrollBar
      },
      breakpoints: {
        500:{
          slidesPerView: 1.5,
          spaceBetween: 8,
        },
        680: {
          slidesPerView: 1.7,
          spaceBetween: 8,
        },
        968:{
          slidesPerView: 2.3,
          spaceBetween: 16,
        },
        1040: {
          slidesPerView: 2.5,
          spaceBetween: 16,
        }
      },
      navigation: {
        nextEl: this.dormitorioNext,
        prevEl: this.dormitorioPrev
      }
    })

    this.swiperInfantil= new Swiper(this.sliderInfantil, {
      modules:[Navigation, Scrollbar],
      slidesPerView: 1.2,
      spaceBetween: 16,
      scrollbar:{
        el: this.sliderInfantilScrollBar
      },
      breakpoints: {
        500:{
          slidesPerView: 1.5,
          spaceBetween: 8,
        },
        680: {
          slidesPerView: 1.7,
          spaceBetween: 8,
        },
        968:{
          slidesPerView: 2.3,
          spaceBetween: 16,
        },
        1040: {
          slidesPerView: 2.5,
          spaceBetween: 16,
        }
      },
      navigation: {
        nextEl: this.infantilNext,
        prevEl: this.infantilPrev
      }
    })
  }

  bindEvents(){
    this.showUbicar.addEventListener('click', this.handleClick.bind(this))
    this.showCuidado.addEventListener('click', this.handleClick.bind(this))
  }
  handleClick(event){
    let value = event.target.id;
    console.log(value)
    if(value === 'show-ubicar'){
      this.ubicar.classList.remove('hidden');
      this.cuidado.classList.add('hidden');
      event.target.setAttribute('aria-selected', true);
      event.target.previousElementSibling.removeAttribute('aria-selected');
    }else{
      this.ubicar.classList.add('hidden');
      this.cuidado.classList.remove('hidden');
      event.target.setAttribute('aria-selected', true);
      event.target.nextElementSibling.removeAttribute('aria-selected'); 
    }
  }
}

export default MainTips;