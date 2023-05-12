class InputDrawerQuantity extends HTMLElement{
  constructor(){
    super();
    this.input = this.querySelector('input[id^="Drawer-quantity-"]');
    this.plus = this.querySelector('button[name="plus"]');
    this.minus = this.querySelector('button[name="minus"]'); 
  
    this.bindEvents();
  }

  bindEvents(){
    this.plus.addEventListener('click', this.handleClick.bind(this));
    this.minus.addEventListener('click', this.handleClick.bind(this));
  }

  handleClick(event){
    event.target.name == 'plus' ? this.input.stepUp() : this.input.stepDown();
    this.input.dispatchEvent(new Event('input', {bubbles: true}));
  }
}

export default InputDrawerQuantity;