export class Header extends HTMLElement{
  constructor(){
    super();
    this.drawerButton = this.querySelector('#btn-toggle-cart');
    this.drawerLayout = document.querySelector('.drawer-layout');
    this.drawerDialog = document.querySelector('.drawer-dialog');
    this.drawerContainer = document.querySelector('.drawer-container');
    this.drawerClose = document.querySelector('#close-drawer-menu');
    this.submenusBack = document.querySelectorAll('.close-submenu');
    this.header = document.querySelector('.header');

    // console.log(this.drawerClose);
    this.bindEvents();
  }
  bindEvents(){
    this.drawerButton.addEventListener('click', this.handleDrawerMenu.bind(this));
    this.drawerClose.addEventListener('click', this.handleDrawerMenu.bind(this));
    window.addEventListener('click', event => {
      if(event.target.matches('#drawer-menu-layout-close')){
        this.handleDrawerMenu();
      }
    })
    this.submenusBack.forEach(submenu => {
      submenu.addEventListener('click', ()=>{
        submenu.parentNode.parentNode.parentNode.removeAttribute('open');
      })
    })

    window.addEventListener('scroll', ()=> {
      scrollY >= 53 ? this.header.classList.add('header-fixed'): this.header.classList.remove('header-fixed');
    })
  }

  handleDrawerMenu(){
    this.drawerDialog.classList.toggle('open');
    this.drawerLayout.classList.toggle('open');
    this.drawerContainer.classList.toggle('open');
  } 
}

export class InlineNav extends HTMLElement{
  constructor(){
    super();
    this.submenuItems = this.querySelectorAll('.inline__submenu-item');
    this.bindEvents();
  }

  bindEvents(){ 
    this.submenuItems.forEach(submenuItem => {
      submenuItem.addEventListener('mouseover', ()=> {
        submenuItem.querySelector('details').setAttribute('open', true);
      })

      submenuItem.addEventListener('mouseleave', ()=> {
        submenuItem.querySelector('details').removeAttribute('open');
      })
    });
  }
}