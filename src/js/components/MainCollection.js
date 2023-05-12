class MainCollection extends HTMLElement{
  constructor(){
    super();
    this.button = this.querySelector('#open-drawer-filter');
    this.drawer = this.querySelector('.filter-modal');
    this.close = this.querySelector('#close-drawer-filter');
   
    this.bindEvents();
  }

  bindEvents(){
    this.button.addEventListener('click',this.handleClick.bind(this));
    this.close.addEventListener('click', this.handleClick.bind(this));

    window.addEventListener('click', e => {
      if(e.target.matches('.filter-modal__overlay')) this.toggleDrawer();
    })
  }

  handleClick(){  
    this.toggleDrawer();
  }

  toggleDrawer(){
    this.drawer.classList.toggle('active');
    this.button.ariaExpanded === 'false' ? this.button.setAttribute('aria-expanded',true): this.button.setAttribute('aria-expanded',false);
  }
}

export default MainCollection;