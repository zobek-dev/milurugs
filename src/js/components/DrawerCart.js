import { debounce } from './utilities';

export default class DrawerCart extends HTMLElement{
  constructor(){
    super();
    this.button = this.querySelector('#open-drawer-cart');
    this.dialog = this.querySelector('#drawer-cart');
    this.close = this.querySelector('#close-drawer-cart')
    this.drawerForm = this.querySelector('#drawer-form');
    this.subtotal = this.querySelector('#drawer-cart-total');
    this.footer = this.querySelector('#drawer-cart-footer');
    this.loader = this.querySelector('#drawer-loader');
    this.checkTerms = this.querySelector('#Check-Terms');
    this.continueShopping = this.querySelector('#drawer-continue-shopping');

    this.bindEvents();
  }
  bindEvents(){
    this.button.addEventListener('click', this.handleClickButtons.bind(this));
    this.close.addEventListener('click', this.handleClickButtons.bind(this));
    this.addEventListener('input', debounce(this.handleChangeCart.bind(this),500));
    this.checkTerms.addEventListener('change', this.handleTerms.bind(this));
    this.continueShopping.addEventListener('click', this.handleClickButtons.bind(this));

    window.addEventListener('submit', event =>{ 
      if(event.target.matches('[action="/cart/add"]')){
        event.preventDefault();
        let form = event.target;
        this.handleDrawer();
        this.addToCart(form);
      }
    });

    window.addEventListener('click', event => {
      if(event.target.matches('.drawer-cart')) this.handleDrawer();
    })
  }

  handleClickButtons(event){
    event.preventDefault();
    this.handleDrawer();
  }

  handleDrawer(){
    this.dialog.classList.toggle('active');  
  }

  handleChangeCart(event){
    if(event.target.type != 'number') return;
    this.loader.classList.remove('hidden');
    this.loader.classList.add('flex');
    let line = Number(event.target.dataset.index);
    let quantity = Number(event.target.value);  
    let formData = {
      line: line,
      quantity: quantity
    }
    fetch('/cart/change.js',{
      method: 'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify(formData)  
    })
    .then(response => response.json())
    .then(()=>{
      this.updateInterfase();
    })
    .catch(error => console.error(error))  
    .finally(()=> {
      this.loader.classList.add('hidden');
      this.loader.classList.remove('flex');
    })
  }

  updateInterfase(){
    fetch('/?view=cart')
    .then(response => response.text())
    .then(data => {
      const div = document.createElement(div);
      div.innerHTML = data;
      let count = Number(JSON.parse(div.querySelector('[data-options]').innerText).item_count); 
      let price = JSON.parse(div.querySelector('[data-options]').innerText).cart_total;
      if(count > 0){  
        this.footer.classList.remove('hidden');
        this.subtotal.innerText = price;
      }else{
        this.footer.classList.add('hidden');
      }
      let updated = div.querySelector('#drawer-form').innerHTML;
      this.drawerForm.innerHTML = updated;
    })
    .catch(error => console.error(error))
  }

  addToCart(form){
    let formData = new FormData(form);
    this.loader.classList.remove('hidden');
    this.loader.classList.add('flex');
    fetch('/cart/add.js', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(()=>{   
      this.updateInterfase();
    })
    .catch(error => console.error(error))
    .finally(()=> {
      this.loader.classList.add('hidden');
      this.loader.classList.remove('flex');
    })
  }
  
  handleTerms(){
    if(this.checkTerms.checked == true){
      this.querySelector('button[name="checkout"]').disabled = false;
    }else{
      this.querySelector('button[name="checkout"]').setAttribute('disabled', true);
    }
  }
}
